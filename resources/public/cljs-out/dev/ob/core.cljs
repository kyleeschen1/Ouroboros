(ns ^:figwheel-hooks ob.core
  (:require

   [ob.scroll :refer [set-scroll-trigger]]
   [ob.code-to-hiccup :refer [code->hiccup]]
   
   [ob.analyzer :refer [analyze]]
   
   [ob.data-to-hiccup :refer [render]]

   [ob.defs :refer [def* get-defs]]
   
   [ob.utils :refer [assoc-meta walk-ids <sub >evt]]

   [com.rpl.specter :as s]

   [cljsjs.d3]
   [cljs.pprint :refer [pprint]]
   [cljs.repl :refer [source]]
   [clojure.zip :as z]

   
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]
   
   [re-frame.core :as rf :refer [reg-sub dispatch subscribe]])
  
  (:require-macros
   [com.rpl.specter :refer [defnav comp-paths]]))

;;#######################################################################
;; AST Navigators
;;#######################################################################



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
                          
                          (vswap! col conj (next-fn (k db)))
                          
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

;;#######################################################################
;; AST -> Datum
;;#######################################################################

(defn gen-paren-datum
  
  [parent-id text depth tag]
  
  (let [id  (str parent-id "-" tag)]
    
    {id {:op :syntax
         :id id
         :depth depth
         :style {} ;; {:font-size (str (* 2  depth) "px")}
         :class #{"bracket" tag (str parent-id "-bracket" )}
         :name text}}))

(defn add-paren-data
  
  [data-row {:keys [id parens depth]}]
  
  (let [[op cl] parens
        op-paren (gen-paren-datum id op depth "opening")
        cl-paren (gen-paren-datum id cl depth "closing")
        
        parens (merge op-paren cl-paren)

        paren-ids (s/select [s/MAP-KEYS] parens)]

    (merge {id (assoc data-row :parens paren-ids)}
           op-paren
           cl-paren)))



(defn macro->pos-type

  [op]
  
  (case op
    :cond :if
    :case :let
    op))


(defn op->pos-type
  
  [op]
  
  (condp #(get %1 %2) op
    
    #{:let :loop} :let

    #{:macroexpand} (macro->pos-type op)
    
    op))


(defn sel->datum
  
  [{:keys [id
           op
           type
           name
           parent-id
           child-ids
           parens
           depth] :as sel}]
  
  (let [pos-type (op->pos-type op)]
    
    {:id id
     :op op
     :pos-type pos-type
     :class #{op type}
     :name name
     :depth depth
     :style {} #_{:font-size (str (* 2  depth) "px")}
     :parent-id parent-id
     :children child-ids}))

(defn ast->data
  
  ([ast]
   
   (ast->data ast :root))

  ([ast id]
   
   (let [sel (s/select [AST-DESC (s/pred :id)] ast)]
     
     (for [{:keys [id parens] :as s} sel]

       (let [datum (sel->datum s)]
         
         (if-not parens

           {id datum}

           (add-paren-data datum s)))))))




;;#######################################################################
;; Animations
;;#######################################################################

(defn get-dims

  "Returns a map, keyed by id, of all of the
   Bounding Client Rects for all descendent elements
   of node indicated by id."
  
  [id]
  
  (let [attrs (atom {})

        scrollX (.-scrollX js/window)
        scrollY (.-scrollY js/window)]
    
    (-> (js/document.getElementById (str id))
        (.querySelectorAll ".token")
        (.forEach (fn [node]
                    (let [id (.-id node)
                          dims (.getBoundingClientRect node)

                          left (.-left dims)
                          top (.-top dims)]
                      (swap! attrs assoc (symbol id) {:left (+ left scrollX)
                                                      :top (+ top scrollY)})))))

    @attrs))

(defn px*
  [x]
  (str x "px"))

(defn add-copy
  
  [db pred-fn]

  (let [dims (get-dims "rooty")

        f (fn [id style]
            
            (let [dims (get dims id)]
      
              (assoc style
                     :position "absolute"
                     :top (px* (:top dims))
                     :left (px* (:left dims)))))]


    (s/transform [(s/submap (keys dims)) s/MAP-VALS (s/collect-one :id) :style] f db)
    
    #_(s/setval [(desc :root) (s/pred pred-fn) :style :color] "red" db)))

(defn trsf

  [db pred-fn]

  (let [max-depth (apply max (s/select [s/MAP-VALS :depth] db))

        dims (get-dims "rooty")
 
        interval (/ 10000 max-depth)

        f (fn [depth classes style]

            (let [delay
                  (if (contains? classes "bracket")
                    0
                    0)]

              (assoc style
                     :transition-duration "4s"
                     :transition-delay (str (+ delay (* (- max-depth depth) interval)) "ms")
                     
                     ;; :top (px* 500)
                     ;;  :left (px* 500)
                     :font-size "0px"
                     :padding-top "0px"
                     :padding-bottom "0px"
                     :padding-right "0px"
                     :padding-left "0px")))]

    (s/transform [s/MAP-VALS
                  (s/collect-one :depth)
                  (s/collect-one :class)
                  :style] f db)))


(defn expand

  [db pred-fn]

  (let [max-depth (apply max (s/select [s/MAP-VALS :depth] db))

        dims (get-dims "rooty")
 
        interval (/ 10000 max-depth)

        f (fn [depth id style]

            (assoc style
                   :transition-duration "4s"
                   :transition-delay (str (* depth interval) "ms")
                  
                   :font-size nil
                   :padding-top nil
                   :padding-bottom nil
                   :padding-right nil
                   :padding-left nil))]

    (s/transform [s/MAP-VALS
                  (s/collect-one :depth)
                  (s/collect-one :id)
                  :style] f db)))





(def PARA
  
  "Prewalks the structure, but inserts the transformed branch
  as the first argument to the leaf nodes."
  
  (s/recursive-path [pred] p
                    (s/if-path pred
                               [(s/stay-then-continue s/DISPENSE (s/collect-one) :nodes s/ALL p)]
                               s/STAY)))

(def PARA*
  
  "Prewalks the structure, but inserts the transformed branch
  as the first argument to the leaf nodes."
  
  (s/recursive-path [pred] p
                    (s/if-path pred
                               [(s/continue-then-stay :nodes s/ALL p s/VAL) ]
                               s/STAY)))


(defn para
  
  [pred f structure]
  
  (s/transform [(s/collect-one nil)(PARA pred)] f structure))

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
                     (loop [x {:a b
                              :c 3
                              :b {:k 2
                                  :c 4}}]
                       (fn [x y]
                         (if true
                           3
                           (+ 1 2)))))]
             (do
               3
               4
               5)) ]

     (fn [f]
       ((fn [x x]
          (x x))
        (fn [y]
          (f (fn [z]
               ((y y) z))))))))


(defn code->DB
  
  [db code]
  
  (let [ast (walk-ids code)
        
        data (ast->data (analyze ast {}))
        
        id  (:id (meta ast))]

   (s/setval [:root :children s/END] [id] (apply merge db data))))

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

 :id->data
 
 (fn [{:keys [display]} [_ id]]
 
   (get display id)))




(rf/reg-event-db
 
 :add-code
 
 [save]
 
 (fn [db [_ code]]
  
   (update db :display code->DB code)))


(rf/reg-event-db

 :undo

 (fn [db _]

   (:history db)))

(rf/reg-event-db
 
 :animate

 [save]
 
 (fn [db [_ f & args]]
   
   (update db :display #(apply f % args))))






;;#######################################################################
;; Transition Logic
;;#######################################################################


;; Gives the id of the active transition 

(rf/reg-sub

 :active-trs-id

 (fn [db _]
   
   (get db :trs/active-id)))


;; Gives the current time direction
;; Ex: :forward, :backward

(rf/reg-sub

 :time-dir

 (fn [db _]
   
   (get db :trs/time-dir)))

;; Gives the transaction records

(rf/reg-sub

 :trs-records

 (fn [db _]
   
   (get db :trs/records)))



;; Returns records for the active transitions
(rf/reg-sub

 :active-trs-records

 :<- [:trs-records]
 :<- [:active-trs-id]
 :<- [:time-dir]
 
 (fn [[records active-id time-dir] _]
   
   (get-in records [active-id time-dir])))

;; Returns all active transitions for the id
(rf/reg-sub

 :id->trs

 :<- [:active-trs-records]

 (fn [records [_ id]]

   (get records id)))



(defn init-trs

  "Initializes transition data."
  
  []
  
  {:trs/active-id :init
   :trs/time-dir :forward
   :trs/records {:init {:forward [:init]}
                 :yams {:forward [:yams]}}})

(rf/reg-event-db

 :update-trs

 (fn [db [_ trn-name]]
   
   (assoc db :trs/active-id trn-name)))






;;#######################################################################
;; Defs
;;#######################################################################

(def* :core/root
  
  {:op :text
   
   :msg "I'm a slob!"
   
   :header "Lots to like here."
   
   :nodes [{:op :text
            :id :prelude
            :header "There are lots of reasons to dislike"}

           {:op :text
            :msg "Nobody likes eggplants, and one should note that "}

           :toast/eggplant]})

(def* :toast/eggplant

  {:op :text
   :msg "Howl's moving snowcone"
   :nodes [:sweet/toast]})

(def* :sweet/toast

  {:op :text
   :msg "I hate it."})



(defn defs->data-zipper
  
  [defs]
  
  (letfn [(branch? [node]
            (or (vector? node)
                (and (map? node)
                     (:nodes node))))
          
          (children [node]
            (if (vector? node)
              (seq node)
              (:nodes node)))
          
          (make-node [node children]
            (if (vector? node)
              (vec children)
              (assoc node :nodes (vec children))))]

    (z/zipper branch? children make-node defs)))


#_(defn pw-next
  
  [loc]
  
  (or
   
   (and (z/branch? loc)
        (if (:pre-walked-only? (z/node loc))
          (z/down loc)
          loc))
 
   (z/right loc)
   
   (loop [p loc]
     
     (if (z/up loc)
       
       (or (z/right (z/up p))
           (recur (z/up p)))
       
       [(z/node p) :end]))))

#_(defn defs->data
  
  [defs]

  (let [loc (defs->data-zipper (:core/root defs))
        
        resolve (fn [kw]
                  (get defs kw))]
    
    (loop [loc loc

           acc []
           c 0]

      (cond
        
        (or (> c 100) (z/end? loc))
        acc

        (keyword? (z/node loc))
        (recur (z/edit loc resolve) acc (inc c))

        (:pre-walk-only? (z/node loc))
        (let [loc (z/edit loc (fn [node]
                                (dissoc node :pre-walk-only?)))]
          
          (recur (pw-next loc) (conj acc (z/node loc) (inc c))))

        :else
        (let [loc (z/edit loc (fn [node]
                                (if (vector? node)
                                  node
                                  (assoc node :pre-walk-only? true))))]
          
          (recur (pw-next loc) acc (inc c)))))))

;;#######################################################################
;; Hiccup Manipulation
;;#######################################################################

;; Animate:
;;
;; This is the interface for core Hiccup manipulations that
;; can be composed into increasingly complex animations.
;;
;; Each module is responsible for:
;; 
;;  1) Altering the data
;;  2) Specifying when to stop blocking for the next animation
;;  3) Specifying how to rewind the animation
;;
;; To-Do: turn into protocol?

(declare -animate)

(defn animate
  
  [db [op params]]
  
  (let [td (get db :trs/time-dir :forward)
        
        data (-animate op (:display db) params)

        db* (update db :display merge data)

        db* (assoc db :id/version (gensym "version-"))]

    {:edit/op op
     :edit/id (gensym "edit/")
     :params params
     :n-rows (count data)
     :db db
     :db* db*}))


;;-----------------------------------
;; The Great Declaration Itself...
;;-----------------------------------

(defmulti -animate
  
  (fn [op db params]

    op))

;;-----------------------------------
;; Appending
;;-----------------------------------

(defmethod -animate :append
  
  [_ db {:keys [code]}]

  (let [ast (walk-ids code)
        
        data (ast->data (analyze ast {}))

        ;; Get local root id of current dataset
        local-root-id  (:id (meta ast))

        ;; Update database
        data (apply merge db data)

        ;; Append the local root id to the children of root
        root* (s/select :root
                        (s/setval [:root :children s/END]
                                  [local-root-id]
                                  db))]

    (merge root* data)))



;;-----------------------------------
;; Removing
;;-----------------------------------

(defmethod -animate :remove
  [_ _ _]
  )

;;-----------------------------------
;; Substitution
;;-----------------------------------

(defmethod -animate :substitute
  [_ _ _]
  )


;;-----------------------------------
;; Copying
;;-----------------------------------

(defmethod -animate :copy
  [_ _ _]
  )


;;-----------------------------------
;; Modifying
;;-----------------------------------

(defmethod -animate :modify
  [_ _ _]
  )

;;-----------------------------------
;; Transitions
;;-----------------------------------

(defmethod -animate :transition
  [_ _ _]
  )





;;#######################################################################
;; Initializing
;;#######################################################################

(rf/reg-event-db

 :initialize

 (fn [_ _]

   (merge (init-trs)
          
          
          {:code {:root {:op :root
                         :id :root
                         :pos-type :root
                         :children []}}})))

(defn init
  []
  (rf/dispatch-sync [:initialize]))


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
 
   [:button {:on-click #(>evt [:add-code sample-code])} "Add Code"]
   
   [:br]

   [:button {:on-click #(>evt [:animate trsf (fn [n] (= :symbol (:op n)))])} "Contract"]

   [:br]
   
   [:button {:on-click #(>evt [:animate expand])} "Expand"]

   [:br]
   
   [:button {:on-click #(>evt [:update-trs :yams])} "Init"] 
   
   [:br]
   
   [:button {:on-click #(>evt [:undo])} "Undo"]])




(defn code-col
  [_]
  [:div ($ {;;:flex-direction "column"
            :position "sticky"
            :top "30px"
            :height "500px"
            :padding "30px"
            :overflow "scroll"
            :border "solid 2px white"})
   
   [:div#rooty 
    [render :root nil]]])

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





(comment

  (And animation returns a map with
       (Ids affected)
       (One transition function for delay, duration, ease, etc.
            (takes in current time preference))
       (One function for affected data)
       (Name))

  (Running animation
           (counts affected ids)
           (attaches on-end handler that will count when event finishes)
           (dispatches next event on queue if any))
  
  (History is saved
           (By event Id name)
           (Saves data, init time, times it completed, etc.)
           (To rewind
               (time to completion is subtracted from max time)
               (that becomes the new delay))
           ()))

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
