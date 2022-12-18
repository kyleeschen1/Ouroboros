(ns ^:figwheel-hooks ob.core
  (:require

   [ob.db-nav :as db]
   [ob.scroll :refer [set-scroll-trigger]]
   [ob.clojure :as c]
   [ob.analyzer :refer [analyze]]
   
   [ob.data-to-hiccup :refer [render]]

   [ob.defs :refer [def* get-defs]]
   
   [ob.utils :refer [walk-ids <sub >evt]]

   [ob.event-loop :refer [animate! gen-frames]]

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
;; Hiccup Navigators
;;#######################################################################

(def DATA s/MAP-VALS)

(defn datum->child-ids

  ([datum]
   (datum->child-ids datum true))
  
  ([datum parens?]
   (flatten (s/select [DATA (s/submap [:children (when parens? :parens)]) s/MAP-VALS] datum))))

(defnav parens

 [id]
  
 (select* [_ db next-fn]
           
           (let [ids (:parens (id db))]
             
             (next-fn (select-keys db ids))))
  
  (transform* [_ db next-fn]
              
              (let [ids (:parens (id db))]
                
                (merge db (next-fn (select-keys db ids))))))


(defnav children

  [id parens?]

  (select* [_ db next-fn]
           
           (let [child-ids (datum->child-ids (id db))]
             
             (next-fn (s/select (s/submap child-ids) db))))
  
  (transform* [_ db next-fn]
              (let [child-ids (datum->child-ids (id db))]
                (merge db (s/transform (s/submap child-ids) next-fn db)))))




(defn lookup-by-id
  
  [db id]
  
  (let [val (get db id)]
    
    (if-let [r (:redirect val)]
      
      (recur db r)
      
      {id val})))

(defnav desc

  [k]
  
  (select* [this db next-fn]

           (let [col (volatile! {})]

             (letfn [(gather [k]

                       (let [datum (lookup-by-id db k)]
                         
                         (vswap! col conj datum)
                         
                         (doseq [c (datum->child-ids datum)]
                           
                           (gather c))))]

                  (gather k)
                  
                  (next-fn @col))))
  
  (transform* [this db next-fn]
              
              (let [col (volatile! db)]

                (letfn [(gather [k]

                          (let [datum (lookup-by-id db k)]
                            
                            (vswap! col conj (next-fn datum))
                            
                            (doseq [c (datum->child-ids datum)]
                              
                              (gather c))))]

                  (gather k)
                  
                  (apply merge db @col)))))


(defnav desc-but-node

  [k node-id]

  (select* [this db next-fn]

           (let [col (volatile! {})]

             (letfn [(gather [k]

                       (let [datum (lookup-by-id db k)]
                         
                         (when-not (= node-id (ffirst datum))
                           
                           (vswap! col conj datum)
                           
                           (doseq [c (datum->child-ids datum)]
                             
                             (gather c)))))]
         
                  (gather k)
                  
                  (next-fn @col))))
  
  (transform* [this db next-fn]
              
              (let [col (volatile! db)]

                (letfn [(gather [k]

                          (let [datum (lookup-by-id db k)]
                            
                            (vswap! col conj (next-fn datum))
                            
                            (doseq [c (datum->child-ids datum)]
                              
                              (gather c))))]

                  (gather k)
                  
                  (apply merge db @col)))))

(defnav desc-nodes

  [k]
  
  (select* [this db next-fn]

           (let [col (volatile! [])]

             (letfn [(gather [k]

                       (let [datum (select-keys db [k])
                             ci (datum->child-ids datum)]

                         (if (seq ci)

                           (doseq [c ci]
                             
                             (gather c))
                           
                           (vswap! col conj (next-fn datum)))))]

                  (gather k)
                  
                   @col)))
  
  (transform* [this db next-fn]
              
              (let [col (volatile! db)]

                (letfn [(gather [k]

                          (let [datum (select-keys db [k])
                                ci (datum->child-ids datum)]

                         (if (seq ci)

                           (doseq [c ci]
                             
                             (gather c))
                           
                           (vswap! col conj (next-fn datum)))))]

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
     :style {:opacity "100%"}
     :depth depth
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

  (let [dims (get-dims "code-col")

        f (fn [id style]
            
            (let [dims (get dims id)]
      
              (assoc style
                     :position "absolute"
                     :top (px* (:top dims))
                     :left (px* (:left dims)))))]


    (s/transform [(s/submap (keys dims)) s/MAP-VALS (s/collect-one :id) :style] f db)))




;;#######################################################################
;; Animations
;;########################################################################

(comment

  (defmethod animate :contract*
    
    [_ _ {:keys [size delay-fn data]}]

    (let [max-depth (apply max (s/select [s/MAP-VALS :depth] data))
          
          interval (/ 10 max-depth)
          
          data (update-styles data (fn [_]
                                     {:font-size size
                                      :padding-top size
                                      :padding-bottom size
                                      :padding-right size
                                      :padding-left size}))

          trs (get-trs-data data
                            (fn [{:keys [depth]}]
                              {:dur 4
                               :delay (delay-fn max-depth depth interval)}))]

      
      {:op :update
       :trs trs
       :data data}))

  (defmethod animate :contract
    [_ data _]

    (pprint "Contract New")
    (animate :contract*
             
             nil
             
             {:op/frame :contract*
              :data data
              :size "0px"
              :delay-fn (fn [max-depth depth interval]
                          (/ (- max-depth depth) interval))}))

  (defmethod animate :expand
    [_ data _]
    
    (animate :contract*
             
             nil
             
             {:op/frame :contract*
              :data data
              :size nil
              :delay-fn (fn [_ depth interval]
                          (* depth interval))})))

;;#######################################################################
;; Frame Generation
;;#######################################################################


;;#######################################################################
;; Transitions
;;#######################################################################

(defn get-trs-data

  ([data f]
   (get-trs-data data f nil))

  ([data f params]

   (let [f* (fn [datum] 
              (let [trs (f datum params)
                    total (+ (:dur trs)(:delay trs))]
                (assoc trs :total total)))
         
         trs-data (s/transform [s/MAP-VALS] f* data)

         max-time (apply max (s/select [s/MAP-VALS :total] trs-data))]

     {:data trs-data
      :time max-time})))

(defn trs-by-depth
  [f]
  (fn [data]
    (let [max-depth (apply max (s/select [s/MAP-VALS :depth] data))
          interval (/ 10 max-depth)]
      (get-trs-data data
                          (fn [{:keys [depth]}]
                            {:dur 4
                             :delay (f max-depth depth interval)})))))


(def contract
  (trs-by-depth
   (fn [max-depth depth interval]
     (/ (- max-depth depth) interval))))

(def expand
  (trs-by-depth
   (fn [_ depth interval]
     (* depth interval))))

;;#######################################################################
;; Update Styles
;;#######################################################################

(declare gen-styles)

(defn update-styles
  
  ([tag data]
   (update-styles tag data nil))
  
  ([tag data params]

   (let [;; Embellish to merge return back into style map
         f* (fn [datum]
              (update datum :style merge (gen-styles tag datum params)))]

     (s/transform [DATA] f* data))))

(defmulti gen-styles
  (fn [tag _ _]
    tag))

(defmethod gen-styles :contract
  [_ _ _]
  {:font-size "0px"
   :padding-top "0px"
   :padding-bottom "0px"
   :padding-right "0px"
   :padding-left "0px"})

(defmethod gen-styles :expand
  [_ _ _]
  {:font-size nil
   :padding-top nil
   :padding-bottom nil
   :padding-right nil
   :padding-left nil})

(defmethod gen-styles :fade
  
  [_ {:keys [children]} {opacity :opacity :or {opacity 0.2}}]
  
  (when-not children
    
    {:opacity opacity}))

;;=========================================================
;; Miscellaneous
;;=========================================================

(defn update-depth
  
  [id data]
  
  (let [root-depth (let [depth (:depth (id data))]
                       (if (zero? depth)
                         1
                         depth))
        f (fn [depth]
              (- depth root-depth))]
    
    (s/transform [s/MAP-VALS :depth] f data)))


(defn idx-clj->data
  [form]
  (apply merge (ast->data (analyze form {}))))


;;#######################################################################
;; Gen Frames Implementation
;;#######################################################################

(defmethod gen-frames :prev
  
  [{vs :db-versions id :curr-db-id :as db}]

  (let [id (s/select-one [:db-versions id :id/prev-db] db)]
 
    {:op :jump
     :id id}))

(defmethod gen-frames :rewind
  
  [{vs :db-versions id :curr-db-id :as db}]

  (loop [id id
         acc []]

    (let [id (s/select-one [id :id/prev-db] vs)]

      (cond

        (nil? id)
        acc

        (-> vs id :tags (contains? :step))
        (conj acc {:op :jump :id id} {:op :prev})

        :else
        (recur id (conj acc {:op :jump :id id}))))))

(defmethod gen-frames :fastforward
  
  [{vs :db-versions id :curr-db-id :as db}]

  (loop [id id
         seen-step? false
         acc []]

    (let [id (s/select-one [id :id/next-db] vs)]

      (cond

        (nil? id)
        acc

        (-> vs id :tags (contains? :step))
        (if seen-step?
          acc
          (recur id
                 true
                 (conj acc {:op :jump :id id})))

        :else
        (recur id
               seen-step?
               (conj acc {:op :jump :id id}))))))


(defmethod gen-frames :clj/append
  
  [{code :code idx? :indexed? :or {idx? false}}]

  (let [code (if idx?
               code
               (walk-ids code))

        data (idx-clj->data code)
        
        id  (:id (meta code))]
    
    {:op :append
     :id/parent id
     :time 1
     :data data}))

(defmethod gen-frames :symbol-resolve
  
  [{:keys [new id-old id-new id-new* dom]}]
  
  (let [;; Processing New Data
        new-data (->> (idx-clj->data new)
                      (update-depth id-new*)
                      (update-styles :contract))

        ;; Expanding the new form
        new-expanded (update-styles :expand new-data)

        ;; Contracting the old form
        old-data (->> (s/select-one (desc id-old) dom)
                      (update-styles :contract))]

    [{:op :update
      :tags #{:step}
      :data old-data
      :trs {:data {id-old {:dur 4 :delay 0} } :time 4}}
     
     {:op :replace
      :data new-data
      :id/pre id-old
      :id/post id-new*}
     
     {:op :update
      :data new-expanded
      :trs (expand new-expanded)}]))



(defmethod gen-frames :jump-replace
  
  [{:keys [old id-old new id-new dom]}]
  
  (let [;; Fade surrounding nodes
        old-faded (->> dom
                       (s/select-one (desc-but-node id-old id-new))
                       (update-styles :fade))

        old-faded-trs (get-trs-data old-faded (fn []
                                              {:dur 4
                                               :delay 0}))

        ;; Then contract the surrounding nodes
        old-contracted (update-styles :contract old-faded)
        old-contracted-trs (get-trs-data old-contracted (fn []
                                                          {:dur 10
                                                           :delay 0}))


        ;; Then replace with new nodes
        new-data (s/select-one (desc id-new) dom)
        new-trs (get-trs-data new-data (fn []
                                         {:dur 0
                                          :delay 0}))]

    [{:op :update
      :tags #{:step}
      :data old-faded
      :trs old-faded-trs}

     {:op :update
      :data old-contracted
      :trs old-contracted-trs}
     
     {:op :replace
      :data new-data
      :id/pre id-old
      :id/post id-new
      :trs new-trs}]))

(defmethod gen-frames :replace-w-new-code
  
  [{:keys [id-new* id-old new dom]}]
  
  (let [data (idx-clj->data new)
        data (update-depth id-new* data)]

    {:op :replace
     :tags #{:step}
     :data data
     :id/pre id-old
     :id/post id-new*}))



 ;;#######################################################################
 ;; Running the Animations
 ;;#######################################################################


(rf/reg-event-db

 :init-process

 (fn [db [_ stream]]

   (s/setval [db/CURR-DB :process] stream db)))

(defn init-code-eval
  
  [form]
  
  (let [stream (c/form->animation-stream form)]
    
    (>evt [:init-process stream])
    (animate! {:op/frame :clj/append :indexed? true :code form})))





(def completed?
  #{:symbol-resolve :jump-replace :replace-w-new-code})


(rf/reg-fx

 :call-animation

 (fn [a]
   
   (when (completed? (:op/frame a))
     
     (animate! a))))

(rf/reg-event-fx

 :trigger-next-event!

 (fn [{:keys [db]} _]

   (if (s/select-one [db/CURR-DB :id/next-db] db)

     {:call-animation {:op/frame :fastforward}}
  
     (let [[a & as] (s/select-one [db/CURR-DB :process] db)
           db (s/setval [db/CURR-DB :process] as db)]

          #_[[a & as] (:animation db)]
       
       {:db db ;;(assoc db :animation as)
        :call-animation a}))))



(def form
  (walk-ids
   '(do

      (def fact
        (fn [n]
          (if (= 0 n)
            1
            (* n (fact (- n 1))))))

      (fact 4))))


(def Y
  '(((fn [f]
       ((fn [self self]
          (self self))
        (fn [next]
          (f (fn [value]
               ((next next) value))))))
     (fn [fact]
       (fn [n]
         (if (zero? n)
           1
           (* n (fact (- n 1))))))) 2))

(def form*
  (walk-ids Y))


(defn pause-button
  []
  (let [paused? (<sub [:paused?])]
     [:button {:on-click #(>evt [:toggle-pause])}
      paused?]))

(defn init-eval-button
  []
  
  [:div
   
   [:button {:on-click #(init-code-eval form)}
    
    "Load Code"]
   
   [:br]
   [pause-button]
   [:button {:on-click #(animate! {:op/frame :rewind})}
    "<"]
   [:button {:on-click #(>evt [:trigger-next-event!])}
    ">"]

   ])


(defn init-processes
  [form]
  (cons {:op/frame :clj/append :indexed? true :code form}(c/form->animation-stream form)))

(def init-process
  {:processes {:id->process {"item-0" (init-processes form)}}
   :expo ["item-0"]})

(rf/reg-sub

 :processes

 (fn [db _]
   (:processes db)))

(rf/reg-sub

 :id->process

 :<- [:processes]
 
 (fn [processes [_ id]]
   (get-in processes [:id->process id])))

(rf/reg-sub

 :expos
 
 (fn [processes _]
   (get processes :expo)))

(rf/reg-event-db

 :register-process

 (fn [db [_ id next-id]] 

   (println id)
   (println next-id)

   (let [[_ & fs] (get-in db [:processes :id->process id])

         db (assoc-in db [:processes :id->process next-id] fs)
         db (update db :expo conj next-id)]

     db)))

(rf/reg-fx

 :run!

 (fn [f]
   (println "###########################################")
   (animate! f)))

(rf/reg-event-fx

 :run-the-process

 (fn [{:keys [db]} [_ id]] 

   (let [[f & _ :as fas] (get-in db [:processes :id->process id])]
     
     {:run! f })))


(defn gen-trigger-fn
        [init? id next-id]
        (fn [_]
          (set-scroll-trigger id (fn [x]        
                                   (when (and (not @init?)
                                              (= "down" x))     
                                     (println "Expos ==============")
                                     (swap! init? not)
                                     (>evt [:register-process id next-id]))

                                   (if (= "down" x)
                                     (>evt [:run-the-process id])
                                     (animate! {:op/frame :rewind}))))))

(defn gen-div
  
  [id k]
  
  (let [next-id (gensym)
        init? (atom false)

        [f & _] (<sub [:id->process id])]
    
    (reagent/create-class
     
     {:component-did-update
      (fn [_]
        (println "Updated")
        (println id))
      
      :component-did-mount
      (gen-trigger-fn init? id next-id)

      
      :reagent-render
      (fn [id k]
        ^{:key id}
        [:div
         [:br]
         [:br]
         [:div "Entering : " id]
         [:br]
         [:div "Method : " (str (:op f))]
         [:div "Old Form : " (str (:old f))]
         [:div "New Form : " (str (:new f))]
         [:div "Enviroment : " (str (:env f))]
         [:div {:id id}]
         [:br]
         [:div "Exiting :" id]
         [:br]
         [:br]])})))



(defn gen-expostion-hiccup
  []
  (let [expos (<sub [:expos])]
    
    (into [:div {:style {:margin-top "50%"}}]
          (doall
           (map (fn [e i]               
                  [gen-div e identity])
                expos
                (range))))))


;;#######################################################################
;; Event Handlers
;;#######################################################################


(rf/reg-sub

 :current-db

 (fn [db _]
   
   (s/select-one db/CURR-DB db)))


(rf/reg-sub

 :current-display

 :<- [:current-db]

 (fn [db]

   (get db :display)))

(defn id->display-data
  [display id]
  (let [datum (get display id)]
    (if-let [redirect-id (:redirect datum)]
      (recur display redirect-id)
      datum)))

(rf/reg-sub

 :id->data

 :<- [:current-display]
 
 (fn [display [_ id]]
   
   (id->display-data display id)))



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
;; Initializing
;;#######################################################################



(def init-display

  {:root {:op :root
          :id :root
          :pos-type :root
          :children []}})

(def init-animation-params
  {
   :standard-block 3000
   :trs-speed 200
   :paused? false
   :animation-history {}})

(rf/reg-event-fx

 :initialize

 (fn [_ _]

   (let [db (merge  db/init-db
                    init-animation-params
                    init-process)

         db (s/setval [db/CURR-DB :display] init-display db)]

     {:db db
      :init-event-loop! nil})))

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

(defn text-col
  
  []
  
  [:div#text-col ($ {:overflow "scroll"
                     :display "inline-block"
                     :font-size "12px"})
   
   [:p.expo

    "There is some exposition... here is some more exposition....
     and now here is a ridiculously long word fmwk,;'f,ew;l'dffwm;lk'fkwefwelkfmk"]
   
   [:p.expo "Next line"]

   #_[:button {:on-click #(>evt [:run-animation :add-code sample-code])} "Add code"]
   [:button {:on-click #(animate! {:op/frame :add-code :code sample-code})} "Add code"]
   
   [:br]

   [:button {:on-click #(animate! {:op/frame :contract})} "Contract"]

   [:br]
   
   [:button {:on-click #(animate! {:op/frame :expand})} "Expand"]

   [:br]

   [:h2 "Animation Speed"]
   [:input {:type :range
            :min 0
            :max 400
            :value (<sub [:trs-speed-slider-val])
            :on-change #(>evt [:update-trs-speed (.. % -target -value)])}]
  
   
   [:br]
   [init-eval-button]])




(rf/reg-event-db

 :update-trs-speed

 (fn [db [_ speed]]
   
   (assoc db :trs-speed speed)))

(rf/reg-sub

 :trs-speed-slider-val

 (fn [db _]

   (get db :trs-speed)))



(defn code-col
  []
  [:div ($ {:position "sticky"
            :top "30px"
            :height "500px"
            :padding "30px"
            :overflow "scroll"
            :border "solid 2px white"}

           {:id "code-col"})
   
   [render :root nil]])

(defn main-page
  
  []
   
  [:div#main-page

   ($ {:display "flex"
       :height "10000px"})

   [:div ($ {:width "30%"
             :height "100%"
             :flex-direction "row"
             :padding "0px 20px"}
            {:class "token"})
    
    [:h1 "Ouroboros"]
    [gen-expostion-hiccup]]

   [:div ($ {:width "70%"
             :flex-direction "row"
             :padding "30px"})
    
    [code-col]]])


;;#######################################################################
;; Mounting to the Dom
;;#######################################################################

(defn get-app-element []
  (gdom/getElement "app"))

(defn mount
  [el]
  (rdom/render [main-page] el))

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




;;#######################################################################
;; Add Code to DB
;;#######################################################################




(defn code->DB
  
  [db code]
  
  (let [ast (walk-ids code)
        
        data (ast->data (analyze ast {}))
        
        id  (:id (meta ast))]

    (s/setval [:root :children s/END] [id] (apply merge db data))))








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


#_(-> (js/d3.select "#yo") (.node) (.append (.node jowls)))
