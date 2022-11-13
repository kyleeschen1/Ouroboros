
(ns ^:figwheel-hooks ob.analyzer
  (:require
   [ob.utils :refer [Constant]]))

;;####################################################################
;; Core Protocol
;;####################################################################

(declare analyze map-analyze analyze-sexpr form->type assoc-id)

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
  (map (fn [node]
         (analyze node env))
       form))

(defn form->type
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
  
  (let [id (:id (meta (:form ast)))]
    
    (assoc ast :id id)))

;;------------------------------------
;; Protocol Implementation
;;------------------------------------

(extend-protocol IAnalyze

  Constant
  (-analyze [{:keys [value] :as form} env]
    
    (let [type (form->type value)
          
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
    {:op (if (= 'tag (first form))
           :tagged-list
           :list)
     :form form
     :children [:elements]
     :elements (analyze-sexpr form env)})

  cljs.core/PersistentHashSet
  (-analyze [form env]
    {:op :set
     :form form
     :children [:elements]
     :elements (map-analyze form env)})

  cljs.core/PersistentVector
  (-analyze [form env]
    {:op :vector
     :form form
     :children [:elements]
     :elements (map-analyze form env)})
  
  cljs.core/PersistentArrayMap
  (-analyze [form env]
    {:op :map
     :form form
     :children [:elements]
     :elements (map-analyze form env)})

  cljs.core/MapEntry
  (-analyze [[k v :as form] env]
    {:op :map-entry
     :form form
     :children [:key :value]
     :key (analyze k env)
     :value (analyze v env)}))

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

(defmethod analyze-sexpr :tag
  [[op tag & args :as form] env]
  {:op :tag
   :form form
   :children [:args]
   :operator op
   :tag tag
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

(defn analyze-bv
  
  [bv env]
  
  (let [analyze-pair (fn [form]
                       (let [sym (first form)
                             val (second form)]
                         {:op :binding-pair
                          :form form
                          :children [:sym :val]
                          :sym (analyze sym env)
                          :val (analyze val env)}))

        bindings (->> bv
                      (partition 2)
                      (map analyze-pair))]

    (assoc-id
     {:op :binding-vector
      :form bv
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
;; Macros
;;####################################################################


;;------------------------------------
;; Helpers
;;------------------------------------

(defn analyze-sf
  [operator]
  {:op :special-form
   :name (name operator)})
