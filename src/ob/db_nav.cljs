

(ns ^:figwheel-hooks ob.db-nav
  
  (:require
   [com.rpl.specter :as s])
   
  (:require-macros
   [com.rpl.specter :refer [defnav comp-paths]]))



;;#######################################################################
;; Initial DB
;;#######################################################################

(def init-db
  {:id/curr-db :root
   :db-versions {:root {:prev nil
                        :id/curr-db :root
                        :display {:root {:op :root
                                         :id :root
                                         :pos-type :root
                                         :children []}}}}})


;;#######################################################################
;; DB Navigator
;;#######################################################################

;; Facilitates navigation to the current version of the database.



#_(defnav CURR-DB

  []

  (select* [_ db next-fn]
           (next-fn (get-in db [:db-versions (:id/curr-db db)])))

  (transform* [_ db next-fn]
              (update-in db [:db-versions (:id/curr-db db)] next-fn)))



(defnav db-by-abs-idx

  [id]
  
  (select* [_ db next-fn]
           (next-fn (get-in db [:db-versions (id db)])))

  (transform* [_ db next-fn]
              (update-in db [:db-versions (id db)] next-fn)))

(def CURR-DB
  (db-by-abs-idx :id/curr-db))




(defnav db-by-rel-idx
  
  [id]
  
  (select* [_ db next-fn]
           
           (let [idx (s/select-one [CURR-DB id] db)]
             
             (next-fn (s/select-one (db-by-abs-idx idx) db))))

  (transform* [_ db next-fn]
              
              (let [idx (s/select-one [CURR-DB id] db)]
                
                (s/transform (db-by-abs-idx idx) next-fn db))))


(def PREV-DB
  (db-by-rel-idx :id/prev-db))

(def NEXT-DB
  (db-by-rel-idx :id/next-db))




