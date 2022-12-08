
(ns ^:figwheel-hooks ob.event-loop
  (:require
   
   [ob.update-db :refer [run-db-update]]
   [ob.utils :refer [<sub >evt]]
   
   [cljs.core.async :as a]
   [re-frame.core :as rf :refer [reg-sub dispatch subscribe]])
  
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]]))


;;#######################################################################
;; Animation Handlers
;;#######################################################################

(def evt-chan
  (a/chan))

(defn block
  
  [{:keys [time]}]
  
  (a/timeout (or time
                 (<sub [:standard-block]))))

(defn run-event-loop!

  "Dispatches events when not paused,
   blocking if appropriate."
  
  []
  
  (go-loop []

    (if (<sub [:paused?])

      (do
        (a/<! (a/timeout 100))
        (recur))

      (let [cf (a/<! evt-chan)]
        
        (>evt [:update-db cf])
        
        (a/<! (block cf))
        (recur)))))


;;#######################################################################
;; Re-Frame Registrations
;;#######################################################################

(rf/reg-fx

 :init-event-loop!

 (fn [_]
   
   (run-event-loop!)))

(rf/reg-fx

 :enqueue-animation!

 (fn enqueue [cf]

   (if (map? cf)

     ;; Maps are put directly on the channel
     (a/put! evt-chan cf)

     ;; Vectors are processed sequentially
     (doseq [c cf]
       
       (enqueue c)))))


(rf/reg-event-db

 :update-db

 run-db-update)




;;#######################################################################
;; Pausing and Blocking
;;#######################################################################

(rf/reg-event-db

 :pause!

 (fn [db _]
   
   (update db :paused? not)))

(rf/reg-sub
 
 :paused?
 
 (fn [{:keys [paused?]}]
   
   paused?))

(rf/reg-sub
 
 :standard-block
 
 (fn [{:keys [standard-block]}]
   
   standard-block))
