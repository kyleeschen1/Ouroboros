(ns ^:figwheel-hooks ob.code-to-hiccup
  (:require))



;;####################################################################
;; Code -> Hiccup
;;####################################################################

(declare format-html
         get-enclosings
         ast->flat-child-vector)

;;------------------------------------
;; Core Function
;;------------------------------------

(defn code->hiccup
  
  ([form]
   
   (code->hiccup form identity))
  
  ([form k]
   
   (if-let [child-keys (:children form)]

     (let [children (ast->flat-child-vector form child-keys)
           [op cl] (get-enclosings form)]
       
       (loop [[c & cs] children
              acc [op]]

         (if (seq cs) ;; recur for all but last element, which has continuation
           
           (recur cs
                  (conj acc (code->hiccup c)))

           (format-html form
                        (conj acc (code->hiccup c  (fn [form]
                                                       (k [:div.row form cl]))))))))
     
     
     (k (format-html form nil)))))

;;------------------------------------
;; Helpers
;;------------------------------------

(defn get-enclosings
  
  [{:keys [op id]}]
  
  (let [[op cl] (case op
                  :vector ["[" "]"]
                  :binding-vector ["[" "]"]
                  :list ["(" ")"]
                  :set ["#{" "}"]
                  :map ["{" "}"]
                  nil)

        gen-div (fn [prefix string]
                  (let [paren-id (str prefix "-" id)
                        paren-cls (str "bracket-" id)
                        
                        
                        params {:id paren-id
                                :class [prefix paren-cls "token"]
                                }]

                    
                    [:div params string]))]
    
    (when op
      [(gen-div "opening" op) (gen-div "closing" cl)])))


(defn ast->flat-child-vector

  "The function whose name I
  most despise.

  Returns a vector of the children
  of an AST, with all lists of nodes
  flattened (giving us a vector of AST
  maps)."
  
  [ast child-keys]
  
  (loop [[c & cs :as children] ((apply juxt child-keys) ast)
         acc []]
    
    (if-not (seq children)
      
      acc
      
      (if (seq? c)
        (recur cs (into acc c))
        (recur cs (conj acc c))))))

;;------------------------------------
;; Format HTML
;;------------------------------------

(declare -format-html)

(defn format-html
  [form acc]
  (let [div (-format-html form acc)]
    (update div 1 (fn [params]
                    (if (:id params)
                      params
                      (assoc params :id (str (:id form))))))))

;; Multimethod Implementation

(defmulti -format-html
  (fn [{:keys [op]} _]
    op))

;;-------------------------------------
;; Formatting 
;;-------------------------------------

(defmethod -format-html :tag
  [{:keys [tag]} args]
  (into [:div {:id (str tag)}] args))

(defmethod -format-html :default
  [ast [op-paren & acc]]
  (into [:div.row {} op-paren] acc))

;;-------------------------------------
;; Atoms
;;-------------------------------------

(defmethod -format-html :constant
  [ast _]
  (let [cls (name (:type ast))]
    [:div.token {:class cls} (:name ast)]))

(defmethod -format-html :symbol
  [ast _]
  [:div.token {:class "symbol"} (:name ast)])

(defmethod -format-html :special-form
  [ast _]
  [:div.token {:class "special-form"} (:name ast)])

#_(defmethod postprocess-html :special-form
  [ast _]
  [:div.token {:class "special-form"} (:name ast)])

;;-------------------------------------
;; Collections
;;-------------------------------------

(defmethod -format-html :map
  [ast [op-paren & acc]]
  [:div.row {} op-paren
   (into [:div.col] acc)])

(defmethod -format-html :map-entry
  [ast acc]
  (into [:div.row] acc))


;;-------------------------------------
;; Special Forms
;;-------------------------------------

(defmethod -format-html :if
  [ast [op-paren operator pred else then]]
  [:div.row {} op-paren
          [:div.col
           [:div.row operator pred]
           [:div.row [:div.indent] else]
           [:div.row [:div.indent] then]]])

(defmethod -format-html :do
  [ast [op-paren op & statements]]
  [:div.row {} op-paren [:div.col op
                         [:div.row [:div.indent]
                          (into [:div.col] statements)]]])

(defmethod -format-html :quote
  [ast [op-paren op arg]]
  [:div.row {} op-paren op arg])

(defmethod -format-html :binding-vector
  [ast [op-paren & acc]]
  [:div.row {} op-paren
   (into [:div.col] acc)])

(defmethod -format-html :let
  [ast [op-paren operator bindings body]]
  [:div.row {} op-paren
          [:div.col
           [:div.row operator bindings]
           [:div.row [:div.indent] body]]])





