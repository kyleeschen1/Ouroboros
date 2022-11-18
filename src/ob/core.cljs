(ns ^:figwheel-hooks ob.core
  (:require

   [ob.scroll :refer [set-scroll-trigger]]
   [ob.code-to-hiccup :refer [code->hiccup]]
   [ob.analyzer :refer [analyze]]
   [ob.utils :refer [assoc-meta walk-ids]]

   
   [com.rpl.specter :as s]

   [cljs.pprint :refer [pprint]]
   [cljs.repl :refer [source]]

   [cljsjs.d3]
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]
   
   [re-frame.core :as rf :refer [reg-sub dispatch subscribe]])
  
  (:require-macros
   [com.rpl.specter :refer [defnav comp-paths]]))


;;#######################################################################
;; AST Navigators
;;#######################################################################

(s/declarepath TEMP)
(s/providepath TEMP [s/FIRST s/FIRST])

(def WALK-ALL
  (s/recursive-path [] p
                    
                    (s/if-path coll?
                               (s/continue-then-stay s/ALL p)
                               s/STAY)))



(def AST-WALK
  (s/cond-path map?
               s/STAY

               vector?
               s/ALL
               
               s/STAY))

(defnav AST-CHILDREN
  
  []
  
  (select* [this ast next-fn]
           
           (when-let [ks (:children ast)]
           
             (let [s (s/select [(s/submap ks) s/MAP-VALS] ast)]

               (s/transform [s/ALL AST-WALK]
                            next-fn
                            s))))
  
  (transform* [this ast next-fn]
              
              (when-let [ks (:children ast)]
           
                (s/transform [(s/submap ks) s/MAP-VALS AST-WALK]
                          next-fn
                          ast))))

(def AST-PRE-WALK
  (s/recursive-path [] p
   (s/if-path (s/pred :children)
              [(s/stay-then-continue AST-CHILDREN p)]
              s/STAY)))

(def AST-POST-WALK
  (s/recursive-path [] p
   (s/if-path (s/pred :children)
              [(s/continue-then-stay AST-CHILDREN p)]
              s/STAY)))

(def AST-DESC AST-POST-WALK)

;;#######################################################################
;; AST -> DB
;;#######################################################################

(defnav desc [k]
  (select* [this db next-fn]

           (let [col (volatile! [])]

                (letfn [(gather [k]
                          
                          (vswap! col conj  (next-fn (k db)))
                          
                          (doseq [c (get-in db [k :children])]
                            
                            (gather c)))]

                  (gather k)
                   @col)))
  
  (transform* [this db next-fn]
              
              (let [col (volatile! db)]

                (letfn [(gather [k]
                          
                          (vswap! col update k next-fn)
                          
                          (doseq [c (get-in db [k :children])]
                            
                            (gather c)))]

                  (gather k)
                  @col))))



(defn paren->db
  
  [parent-id text tag]
  
  (let [id (keyword (str parent-id "-" tag))]
    
    {id {:op :syntax
         :id id
         :class ["bracket" tag (str parent-id "-bracket" )]
         :name text}}))

(defn ast->db
  
  ([ast]
   (ast->db ast :root))

  ([ast id]
   
   (let [sel (s/select [AST-DESC #(:id %)] ast)]
     
     (for [{:keys [id op name parens parent-id child-ids]} sel]


       (let [[paren-ids parens] (when-let [[op cl] parens]
                                  
                                  (let [op-paren (paren->db id op "opening")
                                        cl-paren (paren->db id cl "closing")
                                        
                                        parens (merge op-paren cl-paren)

                                        ids (s/select [s/MAP-KEYS] parens)]

                                    [ids parens]))]

         (merge
          
          {id (merge {:id id
                      :op op
                      :class [op]
                      :name name
                      :parent-id parent-id
                      :children child-ids}

                     (when paren-ids
                       {:parens paren-ids}))}

          (when parens
            parens)))))))



;;#######################################################################
;; Formating
;;#######################################################################

(declare render)

(defn render-ids

  ([parent ids]
   
   (into parent
         
         (for [id ids]
           
           ^{:key id} [render id nil])))

  ([parent ids ctx]
   
   (conj (render-ids parent (pop ids))
         
         [render (peek ids) ctx])))

(defn render-grid
  
  [outer-el inner-el ids ctx]
    
  (conj (into outer-el

              (for [id (pop ids)]
                
                ^{:key l} (render-ids inner-el id)))

        (render-ids inner-el (peek ids) ctx)))


(defmulti position-children
  (fn [{:keys [op]} ctx]
    op))

(defmethod position-children :default
  
  [{:keys [id name]} ctx]
  [:div.token {} (str " " name " ")])

(defmethod position-children :root
  
  [{:keys [id children]} ctx]
  
  (into [:div.root {}]
        
        (for [c children]

          [:div [:br]
           
           ^{:key c} [render c nil]])))

(defmethod position-children :default
  
  [{:keys [id children parens] :as form} ctx]
 
  (render-ids [:div.row] children ctx))

(defn col-of-pairs
  
  [children ctx]
  
  (render-grid [:div.col]

               [:div.row]

               (mapv vec (partition 2 children)) 
               
               ctx))

(defmethod position-children :map
  
  [{:keys [children] :as form} ctx]
  
  (col-of-pairs children ctx))


(defmethod position-children :fn
  
  [{:keys [children] :as form} ctx]

  (let [[op params body] children]

    [:div.col
     [:div.row [render op nil] [render params nil]]
     [render body ctx]]))

(defmethod position-children :if
  
  [{:keys [children] :as form} ctx]

  (let [[op pred & args] children]

    [:div.col
     
     [:div.row [render op nil] [render pred nil]]
     
     [:div.row
      
      [:div.indent] (render-ids  [:div.col] (vec args) ctx)]]))

(defmethod position-children :do
  
  [{:keys [children] :as form} ctx]

  (let [[op & args] children]

    [:div.col [render op nil]

     [:div.row
      
      [:div.indent] (render-ids  [:div.col] (vec args) ctx)]]))

(defmethod position-children :binding-vector
  
  [{:keys [children] :as form} ctx]

  (col-of-pairs children ctx))

(defmethod position-children :let
  
  [{:keys [children] :as form} ctx]

  (let [[op bindings body] children]

    [:div.col
     
     [:div.row [render op nil] [render bindings nil]]
     
     [:div.row [:div.indent] [render body ctx]]]))

;;#######################################################################
;; Rendering
;;#######################################################################



(defn position-parens
  
  [node ast ctx]
  
  (if-let [[op-paren cl-paren] (:parens ast)]

    (let [ctx (if ctx
                (conj ctx cl-paren)
                [cl-paren])

          op-paren [render op-paren nil]]

      [(conj node op-paren) ctx])
    
    [node ctx]))

(defn format-coll-body
  
  [node ast ctx]
  
  (let [[node ctx] (position-parens node ast ctx)

        node-body (position-children ast ctx)]

       (conj node node-body)))

(defn format-token-body
  
  [node {:keys [name]} ctx]
  
  (let [trailing-parens (when ctx
                          (->> ctx
                               (reverse)
                               (map (fn [node] [render node nil]))))]
    
    (into [:div.row (conj node name)] trailing-parens)))


(defn -render
  
  [ast ctx]

  (let [{:keys [id class name style]} ast

        style (assoc style :transition "all 3s")
        
        props* {:id (str id)
                :style style
              ;;  :on-transition-end (fn [] (pprint (str "End " id)))
                :class (conj class (when-not (:children ast)
                                       "token"))}

        node [:div.row props*]]

    (if (:children ast)
      
      (format-coll-body node ast ctx)
      
      (format-token-body node ast ctx))))



(defn render
  
  [id ctx]

  (fn [id ctx]
      
      (let [form @(rf/subscribe [:gen-code id])]
        
        [-render form ctx])))



(defn get-dims
  [id]
  
  (let [attrs (atom {})]
    
    (-> (js/document.getElementById (str id))
        (.querySelectorAll ".token")
        (.forEach (fn [node]
                    (let [id (.-id node)
                          dims (.getBoundingClientRect node)]
                      (swap! attrs assoc id dims)))))

    @attrs))

(defn trsf
  
  [db pred-fn]
  
  (s/setval [(desc :root) (s/pred pred-fn) :style :color] "red" db))



;;#######################################################################
;; Planning
;;#######################################################################


(comment

  Flow


  (To Do
      (- Indexer
         
         - Chains parent and child ids
         
         - Standard collection / token tag
         
         - Adds rendering meta-data
         
         - Adds parens
         
         - Labels collection types
         
         - Adds tags

         (Canonical Names
                    (render-id, render-child-ids)
                    ()))
      
      (- Analyzer

         - Takes in rendering tree and creates
         entirely new tree with all sorts of metadata)

      (- Registering data

         (reg-data tag & args)
         (this allows the data and the AST to be stored in the same place)
         (to render
             (render target instance-tag & data-tags)
             ()))

      (- Rendering

         - Takes in indexed tree, merges it with data
         from the analyzer, and adds it to some index
         (root by default)

         - Multimethods (data (takes in AST, Indexed Tree), positioning))
      
      (- Standard Animations

         - Copy (re-index ids)
         - Add absolute-position
         - Gather to parent
         - Contract
         - Insert square of the same size
         - Shrink / Grow
         - Collapse column (all but one))

      (- Other structures
         
         - Outline
         - Equation)

      
      (- Events

         - Try out simple queing system

         (- Multimethod
            (Takes in id, text, and action)
            (Adds all text to display column, adds id)
            ()))))
















;;####################################################################
;; Animations
;;####################################################################
;; To-Do: Check document margin

(defn get-pos
  [this]
  (let [dims (.getBoundingClientRect this)
        
        left (.-left dims)
        top (.-top dims)
        
        width (.-width dims)
        height (.-height dims)

        scrollX (.-scrollX js/window )
        scrollY (.-scrollY js/window)
        
        left (+ left scrollX)
        top (+ top scrollY)]

    [top left width height]))

(defn px
  [n]
  (str n "px"))

(defn abs-pos
  [sel top left]
  (-> sel
      (.style "left" left)
      (.style "top" top)))

(defn gen-abs-copy
  
  [original-selection]
  
  (let [[top left] (get-pos (.node original-selection))

        top (px top)
        left (px left)
        
        text (.text original-selection)
        classes (.attr original-selection "class")]

    (fn [selection ff?]

      (if ff?
          
          (-> (js/d3.select (.-body js/document))
              (.insert "div")
              (.attr "class" classes)
              (.style "position" "absolute")
              (abs-pos top left)
              (.text text))

          (-> selection
              (.on "end" (fn [_]
                           (.style original-selection "opacity" nil)
                           (.remove (js/d3.select (js-this))))))))))




(defn gen-style-trsf
  
  [styles]

  (let [coords (atom {"left" nil "top" nil})]
    
    (fn [selection ff?]

      (try
        
        (if ff?
          
          (doseq [[k v] styles]
            (when (#{"left" "top"} k)
              #_(println  (.style selection #_(.selection selection) k))
              (swap! coords
                     assoc
                     k
                     (.style (.selection selection) k)))
            
            (.style selection k v))

          (doseq [[k _] styles]
            (.style selection k (@coords k))))

        (catch js/Error. e
          (println selection)
          (println ff?)
          ))

      selection)))


(defn compose
  [& fs]
  (apply comp (reverse fs)))

(defn -transition
  
  [{:keys [delay duration]}]
  
  (fn trs [s]
    
    (let [s (.transition s)]

      (cond-> s
        delay #(.delay %1 delay)
        duration #(.duration %1 duration)))))


(defn compose-animations
  
  [params fs]
    
  (fn [ff?]
    
    (let [f->partial (fn [f]
                       (fn [s]
                         (f s ff?)))

          fs (map f->partial fs)         
       
          fs (interleave fs (repeat (-transition params)))

          fs (if ff?
               (butlast fs)
               (reverse fs))]

      (apply compose fs))))

(defn ||

  [f & fs]

  (fn [sel ff?]

    (let [run-all! (fn [_]
                     (doseq [f fs]
                       (f sel ff?)))]

      (-> sel
          (.on "start" run-all!)
          (f ff?)))))

(def shrink
  (gen-style-trsf {"padding-top" "0px"
                   "padding-bottom" "0px"
                   "padding-left" "0px"
                   "padding-right" "0px"
                   "font-size" "0px"}))

(defn gen-rel-collapse
  [sel]
  (fn [_ ff?]            
    (-> sel 
        (.transition)
        (.delay (if ff? 200 (- 200)))
        (.duration 1000)
        (shrink ff?))))

(defn make-copy

  ([]
   (make-copy "#maps" false true))
  
  ([source token? collapse?]

   (let [selection (js/d3.select source)
         [t l w h] (get-pos (.node selection))

         offset (if collapse? 0.05 0.2)
         
         l (+ l (* offset w))
         t (+ t (* offset h))

         root-top (px t)
         root-left (px l)

         sel (if token?
               selection
               (.selectAll selection " .token"))]

     
     (-> sel
         (.style "opacity" 0)
         (.each (fn [_]
                  
                  (let [sel (js/d3.select (js-this))

                        delay (* 500 (rand))

                        ;; Animation 1: Copy Nodes
                        ;;------------------------------------
                        copy (gen-abs-copy sel)

                        ;; Animation 2: Collapse
                        ;;------------------------------------

                        ;; Animates the absolute positioned nodes
                        abs-collapse (gen-style-trsf
                                      {"left" root-left
                                       "top" root-top
                                       "font-size" "4px"})

                        ;; Animates the relatively positioned nodes
                        rel-collapse (gen-rel-collapse sel)

                        ;; Synchronizes the two
                        collapse (|| abs-collapse rel-collapse)
                        
                        ;;Animation 3: Flow data to environment
                        ;;--------------------------------------
                        shift (gen-style-trsf {"transform"  "translate(100px)"})]

                    ;; Fast Forward (pass in true for forward flow)
                    (-> (copy nil true)
                        
                        (.transition)
                        (.delay (* 500 (rand)))
                        (.duration 1000)                  
                        
                        (collapse true)
                        

                        (.transition "shift")
                        (shift true)

                        ;; Rewind (just reverse the order and pass in false)
                        
                        (.transition)
                        (shift false)
                                 
                        (.transition)
                        (collapse false)
                        
                        (copy false)))))))))


;;#################################################################################
;; HTML Utilities
;;#################################################################################

(defn $

  "Shorthand for generating
   the style / attr map."
  
  
  ([styles]
   {:style styles})
  
  ([styles attrs]
   (merge attrs ($ styles))))

(defn br
  "Adds n breaks."
  [n]
  (into [:div] (repeat n [:br])))

;;####################################################################
;; HTML Skeleton
;;####################################################################

(defn svg
  
  [state]
  
  [:svg#main-svg

   ($ {:flex "70%"
       :height "1000px"
       :width "100%"})])



(def code
  (code->hiccup
    (analyze
     (walk-ids
    
      '(tag expr 
            (let [x (if (zero? 0)
                      1
                      2)
                  tx [1 2 3]
                  set (tag quote #{'a b c})
                  y 
                  (tag maps {:a 1
                             :b 3
                             :c {:e 1
                                 :b {:g 4
                                     :h :j
                                     :k 7}
                                 :f 4}})
                  zak (tag let
                          (+ 3 (let [y 6
                                     z (let [y 6
                                             a (let [y 6234567]
                                                 h)]
                                         "eggs")]
                                 jowls)))]

              (do
                (+ 4 5 37)
                (- 16 7)
                (* 14 35)))))
     {})))


#_(-> (js/d3.select "#yo") (.node) (.append (.node jowls)))

;;#######################################################################
;; Add Code to DB
;;#######################################################################

(def sample-code
  '(let [x 1
         z (let [t (let [e r]
                     (let [x {:a b :c 3}]
                       (fn [x y]
                         (if true
                           3
                           (+ 1 2)))))]
             (do
               3
               4
               5)) ]

     y))


(defn code->DB
  [db]
  (let [ast (walk-ids sample-code)
        data (ast->db (analyze ast {}))
        id  (:id (meta ast))]

   (s/transform [:root :children] (fn [c] (conj c id) ) (apply merge db data))))

;;#######################################################################
;; Event Handlers
;;#######################################################################

(def save
  
  (rf/->interceptor

   :id :save

   :before (fn [ctx]

             (let [cache (fn [db]
                           (assoc db :history db))]

               (s/transform [:coeffects :db] cache ctx)))))

(rf/reg-sub

 :gen-code
 
 (fn [{:keys [code]} [_ id]]
 
   (get code id)))

(rf/reg-event-db
 
 :add-code
 
 [save]
 
 (fn [db _]
  
   (update db :code code->DB)))



(rf/reg-event-db

 :undo

 (fn [db _]

   (:history db)))

(rf/reg-event-db
 
 :animate

 [save]
 
 (fn [db [_ f & args]]
   
   (update db :code #(apply f % args))))



(rf/reg-event-db

 :initialize

 (fn [_ _]

   {:code {:root {:op :root :id :root :children []}}}))

(defn init
  []
  (rf/dispatch-sync [:initialize]))


;;#######################################################################
;; Main Page
;;#######################################################################

(defn text-col
  
  [state]
  
  [:div#text-col ($ {:overflow "scroll"
                     :display "inline-block"
                     :font-size "12px"})
   
   [:p.expo

    "There is some exposition... here is some more exposition....
     and now here is a ridiculously long word fmwk,;'f,ew;l'dffwm;lk'fkwefwelkfmk"]
   
   [:p.expo "Next line"]
 
   [:button {:on-click #(rf/dispatch [:add-code])} "Add Code"]
   
   [:br]
   
   [:button {:on-click #(rf/dispatch [:animate trsf (fn [n] (= :symbol (:op n)))])} "Turn Symbols Red"]
   
   [:br]
   
   [:button {:on-click #(rf/dispatch [:undo])} "Undo"]])




(defn code-col
  [_]
  [:div ($ {:flex-direction "column"
            :height "500px"
            :padding "30px"
            :overflow "scroll"
            :border "solid 2px black"})
     
     [render :root nil]])

(defn main-page
  
  [state]
   
  [:div#main-page

   ($ {:display "flex"
       :height "5000px"})

   [:div ($ {:width "30%"
             :height "100%"
             :flex-direction "row"
             :padding "0px 20px"}
            {:class "token"})
    
    [:h1 "Ouroboros"]
    [text-col state]]

   [:div ($ {:width "70%"
             :flex-direction "row"
             :padding "30px"})
    
    [code-col state]]])

;;#######################################################################
;; Set Scrolling
;;#######################################################################

(defn add-scroll-events!
  [& ids]
  (doseq [id ids]
    (set-scroll-trigger id #(js/alert "Wow!"))))

;;#######################################################################
;; Mounting to the Dom
;;#######################################################################

(defn get-app-element []
  (gdom/getElement "app"))

(defn mount
  [el]
  (rdom/render [main-page {}] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (init)
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^:after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

;;#######################################################################
;; Pure Garbage
;;#######################################################################

#_(defn enclose
  
  [op cl coll row?]
  
  (let [coll-id (id coll)

        toast (atom {})
        
        params-fn (fn [prefix coll-id]

                    (let [id (str prefix coll-id)
                          cls (str coll-id "-bracket")]
                      
                      {:id id
                       :class [prefix cls]
        
                       :on-mouse-over (fn [this]
                                        (println (.-top (.getBoundingClientRect (:form @toast))))
                                        (println id)
                                        (-> (js/d3.selectAll (str "." cls))
                                            (.style "color" "red")))
                       :on-mouse-out (fn []
                                       (-> (js/d3.selectAll (str "." cls))
                                           (.style "color" "white")))}))

        
 
        od [:div (params-fn "opening" coll-id) op]
        cd [:div (merge (params-fn "closing" coll-id)
                        {:ref #(swap! toast assoc :form %)}) cl]

        ;; Add closing to the end of the
        ;; last element.
        #_cs #_(fn jowls [coll]
             (s/transform [s/LAST]
                          
                          (fn [node]
                            (if (and (coll? node)
                                     (= (last node))) )
                            [node cd]) coll))

        coll (s/transform [s/LAST]
                          (fn [node]
                            (assoc-meta node {:closing-parens (conj (:closing-parens (meta coll)) cd)}))
                          coll)
        
        ;; Determine direction
        f (if row?
            row
            col)]

    [:span.row od (f coll)]
    #_(row (with-meta [od (f coll) cd] (meta coll)))))


#_[:div

    [:span  {:style {:z-index "1"
                             ;;:position "absolute"
                        :left 0
                        :top 0}}
     [:div.yo {:style {:z-index "2"
                            :position "relative"
                             }}
      "toast"]]

    [:span  {:style {:z-index "1"
                             ;;:position "absolute"
                     :left 0
                     :top 0}}
     [:div.yo {:style {:z-index "2"
                             :position "relative"
                             }}
      "jowls"]]

    
    #_[:span.yo {:style {:z-index "1"
                   ;;:position "absolute"
                   :color "red"}}
     "Jowls"]]

