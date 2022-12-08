
(ns ^:figwheel-hooks ob.update-db
  (:require
   [com.rpl.specter :as s]))

;;#######################################################################
;; Updating the Database
;;#######################################################################
;;
;; All animations are compiled down into these
;; core update primitives, which actually modify the
;; database.


(declare update-db
         log-history)

(defn run-db-update

  "Performs specified update operation,
   then performs standard logging.

   - Stores history if specified
   - Updates transition information"
  
  [db [_ cf]]
  
  (let [db* (update-db cf db)

        db* (log-history cf db db*)]

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


(defmethod update-db :revert
  
  [_ {:keys [history]}]
  
  history)

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
  
  (if (= false (:save? cf))
    
    db*
    
    (assoc db* :history db)))
