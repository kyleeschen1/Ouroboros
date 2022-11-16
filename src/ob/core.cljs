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
   
   [re-frame.core :refer [reg-sub dispatch subscribe]])
  
  (:require-macros
   [com.rpl.specter :refer [defnav comp-paths]]))


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

(defn text-col
  
  [state]
  [:div#text-col ($ {:overflow "scroll"
                     :display "inline-block"
                     :font-size "12px"})
   
   [:p.expo

    "There is some exposition... here is some more exposition....
     and now here is a ridiculously long word fmwk,;'f,ew;l'dffwm;lk'fkwefwelkfmk"]
   
   [:p.expo "Next line"]])

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

(defn code-col
  [_]
  [:div ($ {:flex-direction "column"
            :height "500px"
            :padding "30px"
            :overflow "scroll"
            :border "solid 2px black"})
     
     code
     [:br]
     [:br]
     code
     [:br]
     [:br]
    code])


;;#######################################################################
;; Specter Experimentation
;;#######################################################################

(def nodes
  {:a {:op :vector :id :a :children [:b :c]}
   :b {:op :vector :id :b :children [:d]}
   :c {:op :token :id :c :name "1"}
   :d {:op :vector :id :d :children [:e :f]}
   :e {:op :let :id :e :children [:x :y]}
   :x {:op :token :id :x :name "x"}
   :y {:op :vector :id :y :children [:z]}
   :z {:op :token :id :z :name "z"}
   :f {:op :vector :id :f :children [:h]}
   :h {:op :token :id :h :name "3"}
   :g {:op :token :id :g :name "5"}})


;;#######################################################################
;; AST -> DB
;;#######################################################################



(defn process-nodes
  [nodes]
  (let [mp (atom nodes)]
    (doseq [[k v] nodes]

      (when (:children v)   

        (let [op-key (str (name k) "-opening")
              cl-key (str (name k) "-closing")]

          (swap! mp assoc-in [k :opening] op-key)
          (swap! mp assoc-in [k :closing] cl-key)
          (swap! mp assoc op-key {:op :opening :id op-key :name "["})
          (swap! mp assoc cl-key {:op :closing :id cl-key :name "]"}))))
    @mp))

(defonce nodes*
  (atom (process-nodes nodes)))


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

(defn get-ast-children
  [ast]
  (when-let [ks (:children ast)]
    (s/select [(s/submap ks) s/MAP-VALS] ast)))


(defn add-parens!
  [mp {:keys [id op]}]
  (when-let [[opening closing] (case op
                                 :vector ["[" "]"]
                                 :list ["(" ")"]
                                 nil)]
    (let [op-key (str id "-opening")
          cl-key (str id "-closing")]

      
      (swap! mp assoc-in [id :opening] op-key)
      (swap! mp assoc-in [id :closing] cl-key)
      (swap! mp assoc op-key {:op :opening :id op-key :name "["})
      (swap! mp assoc cl-key {:op :closing :id cl-key :name "]"}))))

(defn ast->db
  
  ([ast]
   (ast->db "root"))
  
  ([ast parent-id]

  
   (let [{:keys [id op child-ids]} ast

         data (merge

               {:id (name id)
                :class [(name op)]
                }
               
               (when child-ids
                 {:children child-ids})

               (when-let [name (:name ast)]
                 {:name name}))]

     
     (swap! nodes* assoc id data)
     (add-parens! nodes* ast)
     (when child-ids
       (doseq [c (get-ast-children ast)]

         (cond
           (map? c) (ast->db c parent-id)
           (or (seq? c) (vector? c)) (doseq [cs c]
                                       (ast->db cs parent-id))))))))

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

(defmulti position-hiccup
  (fn [{:keys [op]} ctx]
    op))

(defmethod position-hiccup :default
  
  [{:keys [id name]} ctx]
  [:div.token {} (str " " name " ")])

(defmethod position-hiccup :opening
  
  [{:keys [id name]} ctx]

  [:div.opening {} (str " " name " ")])

(defmethod position-hiccup :closing
  
  [{:keys [id name]} ctx]

  [:div.closing {} (str " " name " ")])

(defn add-cl-paren-to-ctx
  [ctx cl-paren]
  (if ctx
    (conj ctx cl-paren)
    [cl-paren]))

(defmethod position-hiccup :vector
  [{:keys [id children opening closing] :as form} ctx]
  
  (render-ids [:div.row {} [render opening nil]]
              children
              (add-cl-paren-to-ctx ctx closing)))


(defmethod position-hiccup :let
  
  [{:keys [id children opening closing] :as form} ctx]

  [:div.row {}
   
   [render opening nil]
   
   (render-ids  [:div.col]
                children
                (add-cl-paren-to-ctx ctx closing))])

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
;; Rendering
;;#######################################################################

(defn lastmost-leaf?
  [node ctx]
  (not (or (empty? ctx)
           (:children node))))

(defn apply-ctx
  [node ctx]
  
  (if (lastmost-leaf? node ctx)
    
    (render-ids [:div.row node] ctx)
    
    node))

(defn add-props
  
  [node ast]
  
  (let [{:keys [id classes]} ast
        
        props* {:id id :class ["jowls"]}]

    (s/transform [1] #(merge % props*) node)))

(defn -render
  [ast ctx]
  (-> ast
      (position-hiccup ctx)
      (add-props ast)
      (apply-ctx ctx)))


(defn render
  
  [id ctx]
  
  (reagent/create-class
   
   {:component-did-mount (fn [_]
                           (println (str  "Mounted " id)))

    :component-did-update (fn [this old-argv]
                            (let [t (rdom/dom-node this)]
                              
                              (println (str "\n=========\nUpdated " id))
                              (println (.-width (.getBoundingClientRect t)))
                              (println old-argv)))

    
    :reagent-render
    (fn [id ctx]
      (let [form @(reagent/cursor nodes* [id])]
        [-render form ctx]))}))


(defn main-page
  
  [state]
   
  [:div#main-page

   ($ {:display "flex"
       :height "5000px"})

   [:div ($ {:width "30%"
             :height "100%"
             :flex-direction "row"
             :padding "0px 20px"})
    
    [:h1 "Ouroboros"]
    [text-col state]
    [render :a nil]]

   [:div ($ {:width "70%"
             :flex-direction "row"
             :padding "30px"})
    [code-col state]]])

;;#######################################################################
;; State
;;#######################################################################

(defonce app-state
  (atom {:text "Hello world!"}))

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
  (rdom/render [main-page app-state] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
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

