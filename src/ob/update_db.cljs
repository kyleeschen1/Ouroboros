
(ns ^:figwheel-hooks ob.update-db
  
  (:require
   [ob.transitions :as t]
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
         change-db-version

         display-update?
         
         run-display-update
         run-version-update
           
         apply-trs)

(defn run-db-update

  "Performs specified update operation,
   and handles transitions between updates."
  
  [db cf]
  
  (let [db (if (display-update? cf)
             (run-display-update cf db)
             (run-version-update cf db))]

    (apply-trs db)))


;;#######################################################################
;; Display Updates
;;#######################################################################


(defn display-update?
  [{op :op}]
  (#{:append :remove :replace :update} op))

(defn run-display-update
  
  [frame db]

  (let [new-version (update-db frame (s/select-one [CURR-DB] db))

        prev-db-id (:id/curr-db db)
        curr-db-id (keyword (gensym "version-"))

        new-version (merge new-version {:id/prev-db prev-db-id
                                        :id/curr-db curr-db-id})

        ;; Update db version ids
        db* (-> (assoc db :id/curr-db curr-db-id :id/last-db prev-db-id)
                (assoc-in [:db-versions prev-db-id :id/next-db] curr-db-id)
                (assoc-in [:db-versions curr-db-id] new-version))

        ;; Store any transition information between these states
        db* (t/set-trs-info db* frame prev-db-id curr-db-id)]

    db*))

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



;;#######################################################################
;; Version Updates
;;#######################################################################

(defmulti change-db-version
  (fn [{:keys [op]} _]
    op))

(defmethod change-db-version :prev
  [_ db]
  
  (if-let [prev-id (s/select-one [CURR-DB :id/prev-db] db)]
    
    (s/setval :id/curr-db prev-id db)
    
    db))

(defn run-version-update
  
  [frame db]
  
  (let [db* (change-db-version frame db)]
    
    (assoc db* :id/last-db (:id/curr-db db))))


;;#######################################################################
;; Applying Transitions
;;#######################################################################

(defn apply-trs

  [db]

  (let [{:keys [id/curr-db id/last-db trs-speed]} db
        
        trs (t/get-trs-info db last-db curr-db)

        db (s/transform [CURR-DB :display]
                        (partial t/apply-trs-to-display-data trs trs-speed)
                        db)]

    {:db db
     :time (* trs-speed (:time trs))}))







