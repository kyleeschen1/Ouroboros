

(ns ^:figwheel-hooks ob.db-nav
  
  (:require
   [com.rpl.specter :as s])
   
  (:require-macros
   [com.rpl.specter :refer [defnav]]))



;;#######################################################################
;; Initial DB
;;#######################################################################

(def init-db
  
  {:id/curr-db :init
   :db-versions {:root {:id/prev-db nil
                        :id/curr-db :init
                        :id/next-db nil}}})



;;#######################################################################
;; DB Navigator
;;#######################################################################

;; Facilitates navigation to different versions of the database.

(defnav db-by-abs-idx

  [id]
  
  (select* [_ db next-fn]
           (next-fn (get-in db [:db-versions (id db)])))

  (transform* [_ db next-fn]
              (update-in db [:db-versions (id db)] next-fn)))

(def CURR-DB
  (db-by-abs-idx :id/curr-db))



;; Navigation to a version relative to the current one.

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




