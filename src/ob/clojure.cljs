
(ns ^:figwheel-hooks ob.clojure
  (:require

   [com.rpl.specter :as s]
   [cljs.pprint :refer [pprint]]
   [cljs.repl :refer [source]]
   [clojure.zip :as z])
  
  (:require-macros
   [com.rpl.specter :refer [defnav comp-paths]]))

;;#######################################################
;; Evaluator
;;#######################################################

(comment

 (Add in indexing
      (Add constants)
      (Write functions that operate over Constants)
      (Write stepper)
      (Write re-indexer))

 (Create skip functionality
         (Write do and def)
         ())

 (Other
  
  Quoting
  Collection Types (+ accessors)
  Add lexical scope
  Add env accessors
  Change all -eval to eval*
  Macros (defn and or cond case -> ->> lazy-seq when when-let if-let)))


(defmulti eval*
  (fn [form env k]
    (cond
      (symbol? form) :symbol
      (list? form) :s-exprs)))

(defmulti eval-sexpr
  (comp keyword first))

(defn evaluate
  
  [form env k]
  
  (let [counter (atom 0)]

    (loop [state (eval* form env k)
           states []]

      (swap! counter inc)
      
      (when (< @counter 100)
        
        (let [{:keys [return env k]} state]

          (when (map? state)
            (pprint (dissoc state :env :k)))
          
          (when (contains? state :return)

            (recur (k return env) (conj states state))))))))


(defn gen-evaluation-stream
  
  [form env k]

  (letfn [(state->stream [state]
            (cons state
                  (lazy-seq (let [{:keys [return env k]} state]
                              (when (contains? state :return)
                                (state->stream (k return env)))))))]

    (state->stream (eval* form env k) )))

(defmethod eval* :default
  [form env k]
  {:op :constant
   :form form
   :return form
   :env env
   :k k})

(defmethod eval* :symbol
  [form env k]
  {:op :symbol
   :form form
   :env env
   :k k
   :return (get env form)})

(defmethod eval* :s-exprs
  [form env k]
  (eval-sexpr form env k))

;;#######################################################
;; Continuation Helpers
;;#######################################################

(defn thread-ks
  
  [combining-fn]
  
  (fn [final-k forms & args]
    
    (let [f (->> (reverse forms)
                 (map combining-fn)
                 (reduce #(%2 %1) final-k))]

      (apply f args))))

(def run-args
  
  (thread-ks
   
   (fn [form]
     
     (fn [k]
       
       (fn [env coll]
         
         (eval* form env (fn [result env]
                           
                           (k env (conj coll result)))))))))

(def run-bindings
  
  (thread-ks
   
   (fn [[sym val]]
     
     (fn [k]
       
       (fn [env]
         
         (eval* val env (fn [result env]
                          
                          (let [env (assoc env sym result)]
                            
                            {:op :bind-local
                             :sym sym
                             :return result
                             :env env
                             :k (fn [_ env]
                                  (k env))}))))))))

;;#######################################################
;; Function Invocation
;;#######################################################

(defn lambda?
  [op]
  (and (coll? op)
       (= 'fn (first op))))


(defn set-recur-point
  [env params body]
  (assoc env :recur-point {:body body :params params}))

(defn eval-lambda
  [f args env k]
  (let [env* env
        [_ params body] f
        env (merge env (zipmap params args))
        env (set-recur-point env params body)]

    {:op :lambda
     :env env
     :return body
     :k (fn [body env]
          (eval* body env (fn [result _]
                            {:op :lambda-exit
                             :form body
                             :env env*
                             :return result
                             :k (fn [return env]
                                  (k return env))})))}))

(defn eval-invoke
  [f args env k]
  {:op :invoke
   :env env 
   :return (apply f args)
   :k k} )

(defn cc?
  [op]
  (:cc? (meta op)))

(defn eval-cc
  [f args env k]
  (apply f args))


(defmethod eval-sexpr :default
  [form env k]
  (let [k (fn [env [op & args]]

            (merge {:form form}

                   (cond

                     (lambda? op)
                     (eval-lambda op args env k)

                     (cc? op)
                     (eval-cc op args env k)

                     :invoke?
                     (eval-invoke op args env k))))]

    (run-args k form env [])))


;;#######################################################
;; Special Forms
;;#######################################################


(defmethod eval-sexpr :fn
  
  [form env k]
  
  (k form env))


(defmethod eval-sexpr :if
  
  [[_ pred then else :as form] env k]
  
  (eval* pred
         env
         (fn [return env]
           {:op :if
            :form form
            :return (if return
                      then
                      else)
            :env env
            :k (fn [return env]
                 (eval* return env k))})))

(defmethod eval-sexpr :do
  
  [[_ & args :as form] env k]
  
  (let [k (fn [env coll]
            {:op :do
             :form form
             :env env
             :return (last coll)
             :k (fn [return env]
                  (k return env))})]
    
    (run-args k args env [])))

(defmethod eval-sexpr :quote
  
  [form env k]

  {:op :quote
   :form form
   :env env
   :return form
   :k (fn [return env]
        (k return env))})

(defmethod eval-sexpr :def
  
  [[_ sym val :as form] env k]
  
  (eval* val env (fn [return env]
                   {:op :def
                    :form form
                    :env (assoc env sym val)
                    :return val
                    :k (fn [return env]
                         (k return env))})))

(defmethod eval-sexpr :set!
  
  [[_ sym val :as form] env k]
  
  (eval* val env (fn [return env]
                   {:op :set!
                    :form form
                    :env (assoc env sym val)
                    :return val
                    :k (fn [return env]
                         (k return env))})))



;;===================================================
;; Bindings
;;===================================================

(declare eval-let-forms
         run-bindings)

(defmethod eval-sexpr :let
  [form env k]
  (eval-let-forms form env k))

(defmethod eval-sexpr :loop
  [form env k]
  (eval-let-forms form env k))

(defmethod eval-sexpr :recur
  
  [[_ & args :as form] env k]
  
  (let [{:keys [params body]} (get env :recur-point)
        
        k (fn [env args]
            (merge
             (eval-lambda [nil params body] args env k)
             {:op :recur
              :form body}))]
    
    (run-args k args env [])))

(def letfn-fn ^:letfn 'fn)

(defn letfn-fn->binding-pairs
  
  [[fname & args :as form]]
  
  (let [fn-body (cons letfn-fn args)
        fn-body (with-meta fn-body (meta form))]
    
    [fname fn-body]))


(defmethod eval-sexpr :letfn
  
  [[_ bindings body :as form] env k]
  
  (let [env* env
        pairs (s/transform [s/ALL-WITH-META]
                           letfn-fn->binding-pairs
                           bindings)

        k (fn [env]
            (eval* body env (fn [return env]
                              {:op :letfn
                               :env env*
                               :form form
                               :return return
                               :k (fn [return env]
                                    (k return env))})))]
    (run-bindings k pairs env)))

;;----------------------------------------
;; Binding Helpers
;;----------------------------------------


(defn eval-let-forms
  [[op bindings body :as form] env k]
  
  (let [pairs (partition 2 bindings)
        
        env (if (= op 'loop)
              (set-recur-point env (s/select [s/ALL s/FIRST] pairs) body)
              env)

        env* env
        
        k (fn [env]
            (eval* body env  (fn [return env]
                               {:op op
                                :form form
                                :env env*
                                :return return
                                :k (fn [return env]
                                     (k return env))})))]

    (run-bindings k pairs env)))

;;===================================================
;; Control Flow
;;===================================================


(defmethod eval-sexpr :throw
  [[_ arg :as form] env k]
  (eval* arg
         env
         (fn [return env]
           {:op :throw
            :form form
            :env env
            :return (str "Error :: " return)
            :k identity})))

(defmethod eval-sexpr :call-with-current-continuation
  
  [[_ f :as form] env k]
  
  (let [cc (fn [hole]
             {:op :invoked-cc
              :return hole
              :env env
              :k (fn [hole env]
                   (k hole env))})

        cc (with-meta cc {:cc? true})]

    (merge (eval-lambda f [cc] env k)
           {:form form
            :op :call-with-current-continuation})))


;;#######################################################
;; Macros
;;#######################################################






;;#######################################################
;; Common Functions
;;#######################################################

;;----------------------------------------
;; Lifting Functions Over Constants
;;----------------------------------------




;;#######################################################
;; Environment
;;#######################################################

(def env
  {'- #'-
   '+ #'+
   '* #'*
   '/ #'/
   '= #'=})



;;#######################################################
;; Re-Indexing
;;#######################################################




