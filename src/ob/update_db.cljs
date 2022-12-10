
(ns ^:figwheel-hooks ob.update-db
  
  (:require
   [com.rpl.specter :as s])
   
  (:require-macros
   [com.rpl.specter :refer [defnav comp-paths]]))

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
             (process-trs cf)
             cf)
        
        db* (update-db cf db)

        db* (log-history cf db db*)]

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
  
  [{:keys [trs data] :as cf}]
  
  (let [trs-log (atom {})

        log! (fn [id dur delay]
               
               (let [trs-attrs {:dur dur
                                :delay delay
                                :total (+ dur delay)}]
                 
                 (swap! trs-log merge {id trs-attrs})))

        format-trs (fn [styles dur delay]
                        (-> styles
                            (dissoc :trs)
                            (assoc :transition-duration (when dur (str dur "s")))
                            (assoc :transition-delay (when delay (str delay "s")))))

        process-trs (fn [id {:keys [trs] :as styles}]
                      
                      (let [{:keys [dur delay]} trs]
                        
                        (log! id dur delay)
                        
                        (format-trs styles dur delay)))
        
        
        data (s/transform [s/MAP-VALS (s/collect :id) :style (s/pred :trs)]
                          process-trs
                          data)

        max-time (apply max (s/select [s/MAP-VALS :total] @trs-log))]

    (assoc cf
           :time max-time
           :data data)))

(defnav current-db

  []
  
  (select* [_ db next-fn]
           (let [{id :id/db} db]
             (next-fn (get-in db [:db-versions id]))))

  (transform* [_ db next-fn]
           (let [{id :id/db} db]
              (update-in db [:db-versions id] next-fn))))


#_(comment

  (defn db-get-current-version
    [(s/collect :current-db-version-id) ])

  {:current-db-version-id :root
   :db-versions {:root {:prev-version nil
                        :current-version :root
                        :next-version nil
                        }
                 version-id-1 {:prev-version :root
                               :current-version version-id-1
                               :next-version version-id-2
                               :display nil}
                 version-id-2 {d e}}

   })
