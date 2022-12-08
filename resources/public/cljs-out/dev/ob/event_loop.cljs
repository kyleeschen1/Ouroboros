
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

(def paused?
  (atom false))

(def evt-chan
  (a/chan))

(defn block
  
  [{:keys [time] :or {time 3000}}]
  
  (a/timeout time))

(defn run-event-loop!

  "Dispatches events when not paused,
   blocking if appropriate."
  
  []
  
  (go-loop []

    (if @paused?

      (a/<! (a/timeout 100))

      (let [cf (a/<! evt-chan)]
        
        (>evt [:update-db cf])
        
        (a/<! (block cf))))

    (recur)))


;;#######################################################################
;; Re-Frame Registrations
;;#######################################################################

(rf/reg-fx

 :init-event-loop!

 (fn [_]
   
   (run-event-loop!)))

(rf/reg-fx

 :pause!

 (fn [status]
   
   (reset! paused? status)))


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

