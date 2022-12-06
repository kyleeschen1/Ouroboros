
(ns ^:figwheel-hooks ob.data-to-hiccup
  
  (:require

   [ob.utils :refer [<sub]]
   [com.rpl.specter :as s])
  
  (:require-macros
   [com.rpl.specter :refer [defnav comp-paths]]))


;;#######################################################################
;; Hiccup Generation
;;#######################################################################


;;--------------------------------------------------
;; General Rendering
;;--------------------------------------------------

(declare datum->hiccup
         datum->props
         add-hiccup-contents)

(defn render

  "Wrapper function for general rendering.

   Subscribes to element's id in the global
   database, updating only when the datum or
   associated context changes."

  ([id]
   
   (render id nil))
  
  ([id ctx]

   (fn [id ctx]
     
     (let [datum (<sub [:gen-code id])]
       
       [datum->hiccup datum ctx]))))


(defn datum->hiccup

  "Standard processing that takes an datum
   row and changes it into a formatted hiccup
   vector."
  
  [datum ctx]

  (let [hiccup [:div.row (datum->props datum)]]

    (add-hiccup-contents hiccup datum ctx)))


(defn datum->props

  "Generates a property map from a datum."
  
  [{:keys [id class name children style]}]

  {:id (str id)
   :style style
   ;;  :on-transition-end (fn [] (pprint (str "End " id)))
   :class (conj class (when-not children
                     "token"))})

;;--------------------------------------------------
;; Adding Hiccup Contents
;;--------------------------------------------------

(declare position-parens
         position-children
         add-trailing-parens)

(defmulti add-hiccup-contents (fn [_ {:keys [children]} _]
                                (if children
                                  :collection
                                  :token)))

(defmethod add-hiccup-contents :token

  [hiccup {:keys [name]} ctx]

  (let [hiccup (conj hiccup name)]

    (if-not ctx

      hiccup

      (add-trailing-parens hiccup ctx))))


(defmethod add-hiccup-contents :collection
  
  [hiccup ast ctx]
  
  (let [[hiccup ctx] (position-parens hiccup ast ctx)

        hiccup-body (position-children ast ctx)]

    (conj hiccup hiccup-body)))


;;--------------------------------------------------
;; Helpers
;;--------------------------------------------------

(defn position-parens

  "If there are parentheses for
   a collection, updates the hiccup
   and ctx to properly position them."
  
  [hiccup ast ctx]
  
  (if-let [[op-paren cl-paren] (:parens ast)]

    (let [ctx (if ctx
                (conj ctx cl-paren)
                [cl-paren])

          op-paren [render op-paren nil]]

      [(conj hiccup op-paren) ctx])
    
    [hiccup ctx]))


(defn add-trailing-parens

  "Adds accumulated trailing parentheses
   to a token hiccup vector."
  
  [hiccup ctx]
  
  (->> ctx
       (reverse)
       (map (fn [node][render node]))
       (into [:div.row hiccup])))


;;#######################################################################
;; Positioning Child Elements
;;#######################################################################

;;------------------------------------------------------
;; Positioning Helpers
;;------------------------------------------------------

(defn render-ls

  "Renders a list of ids within
   a parent hiccup vector.

   If given a ctx vector, it will
   add the ctx to the lastmost element."

  ([parent ids]
   
   (into parent
         
         (for [id ids]
           
           ^{:key id} [render id])))

  ([parent ids ctx]

   (when-not (empty? ids)
     
     (conj (render-ls parent (pop ids))
           
           [render (peek ids) ctx]))))

(defn render-grid

  "Renders a grid of hiccup vectors,
   based on the following params:

  outer-el: hiccup vector that wraps whole collection.
  inner-el: hiccup vector that wraps each id
  ids: list of ids
  ctx: ctx vector, which is added to lastmost element."
  
  [outer-el inner-el ids ctx]
    
  (conj (into outer-el

              (for [id (pop ids)]
                
                ^{:key l} (render-ls inner-el id)))

        (render-ls inner-el (peek ids) ctx)))

(defn col-of-pairs
  
  [children ctx]
  
  (render-grid [:div.col]

               [:div.row]

               (mapv vec (partition 2 children)) 
               
               ctx))

;;------------------------------------------------------
;; Positioning Children Multimethod
;;------------------------------------------------------

(defmulti position-children
  (fn [{:keys [pos-type]} ctx]
    pos-type))

(defmethod position-children :root
  
  [{:keys [id children]} ctx]
  
  (into [:div.root {}]
        
        (for [c children]

          [:div [:br]
           
           ^{:key c} [render c nil]])))

(defmethod position-children :default
  
  [{:keys [id children parens] :as form} ctx]
 
  (render-ls [:div.row] children ctx))

(defmethod position-children :map
  
  [{:keys [children] :as form} ctx]
  
  (col-of-pairs children ctx))

(defmethod position-children :fn
  
  [{:keys [children] :as form} ctx]

  (let [[op params body] children]

    [:div.col
     
     [:div.row [render op] [render params]]
     
     [render body ctx]]))

(defmethod position-children :if
  
  [{:keys [children] :as form} ctx]

  (let [[op pred & args] children]

    [:div.col
     
     [:div.row [render op] [render pred]]
     
     [:div.row
      
      [:div.indent]

      (render-ls  [:div.col] (vec args) ctx)]]))

(defmethod position-children :do
  
  [{:keys [children] :as form} ctx]

  (let [[op & args] children]

    [:div.col [render op]

     [:div.row
      
      [:div.indent] (render-ls  [:div.col] (vec args) ctx)]]))

(defmethod position-children :binding-vector
  
  [{:keys [children] :as form} ctx]

  (col-of-pairs children ctx))

(defmethod position-children :let
  
  [{:keys [children] :as form} ctx]

  (let [[op bindings body] children]

    [:div.col
     
     [:div.row [render op] [render bindings]]
     
     [:div.row [:div.indent] [render body ctx]]]))
