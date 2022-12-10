
(ns ^:figwheel-hooks ob.update-db
  
  (:require
   [ob.db-nav :refer [CURR-DB PREV-DB NEXT-DB]]
   [com.rpl.specter :as s])
   
  (:require-macros
   [com.rpl.specter :refer [multi-transform]]))

;;#######################################################################
;; Updating the Database
;;#######################################################################
;;
;; All animations are compiled down into these
;; core update primitives, which actually modify the
;; database.


(declare update-db
         log-history
         process-trs)

(defn run-db-update

  "Performs specified update operation,
   then performs standard logging.

   - Stores history if specified
   - Updates transition information"
  
  [db cf]
  
  (let [cf (if (:trs? cf)
             (process-trs cf (:trs-speed db))
             cf)
        
        new-version (update-db cf (s/select-one [CURR-DB] db))

        prev-db-id (:id/curr-db db)
        curr-db-id (keyword (gensym "version-"))

        new-version (merge new-version {:id/prev-db prev-db-id
                                        :id/curr-db curr-db-id})

   

        db* (-> (assoc db :id/curr-db curr-db-id)
                (assoc-in [:db-versions prev-db-id :id/next-db] curr-db-id)
                (assoc-in [:db-versions curr-db-id] new-version))]

    (println (:id/curr-db db))
    {:db db*
     :time (:time cf)}))


;;----------------------------------------------
;; The Great Multimethod  Declaration Itself...
;;----------------------------------------------

(defmulti update-db
  (fn [{:keys [op]} _]
    op))

(defmethod update-db :append
  
  [{tid :id/target pid :id/parent data :data :or {tid :root}} db]
  
  (-> db
      (update-in [:display tid :children] conj pid)
      (update :display merge data)))


(defmethod update-db :replace
  
  [{pre :id/pre post :id/post data :data} db]

  (-> db
      (assoc-in [:display pre :redirect] post)
      (update :display merge data)))

(defmethod update-db :remove
  
  [{:keys [id]} db]
  
  (dissoc db :display id))


(defmethod update-db :update
  
  [{:keys [data]} db]
  
  (update db :display merge data))

(def history
  (atom nil))

(defmethod update-db :revert
  
  [_ _]  

  (let [prev (peek @history)]
    (swap! history pop)
    prev))

;;#######################################################################
;; Logging History
;;#######################################################################


(defn log-history

  "Logs history if specified.

   Params:

   - cf : update config
   - db : former database
   - db* : new database"
  
  [cf db db*]
  
  (when-not (= false (:save? cf)) 
    
    (swap! history conj db))

  (println (count @history))
  db*)



;;#######################################################################
;; Transitions
;;#######################################################################

(defn process-trs
  
  [{:keys [trs data] :as cf} trs-anchor]
  
  (let [trs-log (atom {})

        log! (fn [id dur delay]
               
               (let [trs-attrs {:dur dur
                                :delay delay
                                :total (+ dur delay)}]
                 
                 (swap! trs-log merge {id trs-attrs})))

        format-trs (fn [styles dur delay]
                        (-> styles
                            (dissoc :trs)
                            (assoc :transition-duration (when dur (str dur "ms")))
                            (assoc :transition-delay (when delay (str delay "ms")))))

        process-trs (fn [id {:keys [trs] :as styles}]
                      
                      (let [{:keys [dur delay]} trs
                            [dur delay] (mapv #(* trs-anchor %) [dur delay])]
                        
                        (log! id dur delay)
                        
                        (format-trs styles dur delay)))
        
        
        data (s/transform [s/MAP-VALS (s/collect :id) :style (s/pred :trs)]
                          process-trs
                          data)

        max-time (apply max (s/select [s/MAP-VALS :total] @trs-log))]

    (assoc cf
           :time max-time
           :data data)))








