
(ns ^:figwheel-hooks ob.analyzer
  (:require
   [ob.utils :refer [Constant]]))

;;####################################################################
;; Core Protocol
;;####################################################################

(declare analyze map-analyze analyze-sexpr form->type assoc-id postprocess-ast)

(defprotocol IAnalyze
  (-analyze [form env]))

;;------------------------------------
;; Helpers
;;------------------------------------

(defn analyze
  [form env]
  (-> (-analyze form env)
      (assoc-id)))

(defn map-analyze
  [form env]
  (mapv (fn [node]
         (analyze node env))
        form))

(defn coll-analyze
  [op parens form env]
  {:op op
   :form form
   :parens parens
   :children [:elements]
   :elements (map-analyze form env)})

(defn constant->type
  [form]
  (cond
    (number? form) :number
    (boolean? form) :boolean
    (string? form) :string
    (keyword? form) :keyword
    (nil? form) :nil
    :else :other))

(defn assoc-id
  
  [ast]
  
  (let [form (:form ast)
        {:keys [id child-ids parent-id]}  (meta form)]
    
    (assoc ast :id id :child-ids child-ids :parent-id parent-id)))

(defn postprocess-ast
  [ast]
  (assoc-id ast))

;;------------------------------------
;; Protocol Implementation
;;------------------------------------

(extend-protocol IAnalyze

  Constant
  (-analyze [{:keys [value] :as form} env]
    
    (let [type (constant->type value)
          
          name (if (= :string type)
                 (str "\"" value "\"")
                 (str value))]
      
      {:op :constant
       :form form
       :type type
       :name name
       :value value}))

  Symbol
  (-analyze [form env]
    {:op :symbol
     :form form
     :name (str form)})

  cljs.core/List
  (-analyze [form env]
    
    (if (:quoted? env)
      
      (coll-analyze :list ["(" ")"] form env)

      (assoc 
       (analyze-sexpr form env)
       :parens ["(" ")"])))

  cljs.core/LazySeq
  (-analyze [form env]

    (if (:quoted? env)
      
      (coll-analyze :list ["(" ")"] form env)

      (assoc 
       (analyze-sexpr form env)
       :parens ["(" ")"])))
  
  cljs.core/PersistentHashSet
  (-analyze [form env]
    (coll-analyze :set ["#{" "}"]  form env))

  cljs.core/PersistentVector
  (-analyze [form env]
    (coll-analyze :vector ["[" "]"] form env))
  
  cljs.core/PersistentArrayMap
  (-analyze [form env]
    (coll-analyze :map ["{" "}"] form env))

  cljs.core/PersistentHashMap
  (-analyze [form env]
    (coll-analyze :map ["{" "}"] form env))

  cljs.core/MapEntry
  (-analyze [form env]

    (let [[k v] form]
      
      {:op :map-entry
       :form form
       :children [:key :value]
       :key (analyze k env)
       :value (analyze v env)})))

;;####################################################################
;; Special Forms
;;####################################################################

(declare analyze-sf)

(defmulti analyze-sexpr
  (fn [[op & _] _]
    (keyword op)))

(defmethod analyze-sexpr :default
  [[op & args :as form] env]
  {:op :invoke
   :form form
   :children [:f :args]
   :f (analyze op env)
   :args (map-analyze args env)})

(defmethod analyze-sexpr :if
  [[op pred then else :as form] env]
  {:op :if
   :form form
   :children [:operator :pred :then :else]
   :operator (analyze-sf op)
   :pred (analyze pred env)
   :then (analyze then env)
   :else (analyze else env)})

(defmethod analyze-sexpr :do
  [[op & args :as form] env]

  (let [statements (map-analyze (butlast args) env)
        return (analyze (last args) env)]
    
    {:op :do
     :form form
     :children [:operator :statements :return]
     :operator (analyze-sf op)
     :statements statements
     :return return}))

(defmethod analyze-sexpr :quote
  [[op arg :as form] env]

  (let [env (assoc env :quoted? true)]
    
    {:op :quote
     :form form
     :children [:operator :arg]
     :operator (analyze-sf op)
     :arg (analyze arg env)}))

(defmethod analyze-sexpr :fn
  [[op params body :as form] env]
    
  {:op :fn
   :form form
   :children [:operator :params :body]
   :operator (analyze-sf op)
   :params (analyze params env)
   :body (analyze body env)})

(defn analyze-binding-pair
  
  [env]
  
  (fn [form]
    
    (let [sym (first form)
          val (second form)]

      (postprocess-ast
       
       {:op :binding-pair
        :form form
        :children [:sym :val]
        :sym (analyze sym env)
        :val (analyze val env)}))))

(defn analyze-bv
  
  [bv env]
  
  (let [bindings (->> bv
                      (partition 2)
                      (mapv (analyze-binding-pair env)))]

    (postprocess-ast
     
     {:op :binding-vector
      :form bv
      :parens ["[" "]"]
      :children [:bindings]
      :bindings bindings})))

(defmethod analyze-sexpr :let
  [[op bv body :as form] env]

  (let [bv (analyze-bv bv env)
        body (analyze body env)]
    
    {:op :let
     :form form
     :children [:operator :bindings :body]
     :operator (analyze-sf op)
     :bindings bv
     :body body}))

;;####################################################################
;; Formatting
;;####################################################################


(defmethod analyze-sexpr :tag
  [[op tag & args :as form] env]
  {:op :tag
   :form form
   :children [:args]
   :operator op
   :tag tag
   :args (map-analyze args env)})

;;####################################################################
;; Macros
;;####################################################################


;;------------------------------------
;; Helpers
;;------------------------------------

(defn analyze-sf
  [operator]
  (assoc-id
   {:op :special-form
    :form operator
    :name (name operator)}))
