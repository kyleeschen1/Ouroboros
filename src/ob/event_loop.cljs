
(ns ^:figwheel-hooks ob.event-loop
  (:require
   
   [ob.update-db :refer [run-db-update]]
   [ob.utils :refer [<sub >evt]]
   
   [cljs.core.async :as a]
   [re-frame.core :as rf :refer [reg-sub dispatch subscribe]])
  
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]]))


;;#######################################################################
;; Animate Multimethod
;;#######################################################################


(defmulti animate
  
  (fn [tag _ _]
    
    tag))


;;#######################################################################
;; Animation Handlers
;;#######################################################################


(def paused?
  (atom false))

(def requests
  (a/chan))


(defn animate!

  "Puts an animation request onto
   the event channel."

  [& args]

  (a/put! requests (vec args)))

(defn block
  
  [{:keys [time]}]
  
  (a/timeout (or time
                 (<sub [:standard-block]))))


(declare process-request)

(defn run-event-loop!

  "Sets up an event for processing,
   blocking until its completion."
  
  []
  
  (go-loop []

    (let [rq (a/<! requests)]
      
      (a/<! (process-request rq))
      
      (recur))))

(defn process-request

  "Processes a request, providing a
   channel that will block until completion."
  
  [evt]

  (let [c (a/chan)]
    
    (>evt (into [:run-animation c] evt))

    c))


(defn execute-animation-request

  "Takes in the db and a channel / animation
   request pair, then:
 
   1) computes a sequence of hiccup updates
   2) applies each update, blocking between

   Once everything has been processed, it closes
   the provided channel."

  [{db :db [_ channel tag & params] :event}]
   
   (let [cf (animate tag db (vec params))

         configs (if (vector? cf)
                   cf
                   [cf])]

     (go-loop [[c & cs :as configs] configs]

       (cond

         @paused?
         (do         
           (a/<! (a/timeout 100))       
           (recur configs))

         (not (seq configs))
         (a/close! channel)

         :else
         (do

           (>evt [:update-db c])
           
           (a/<! (block c))
           
           (recur cs))))))


(rf/reg-event-fx

 :run-animation

 execute-animation-request)




;;#######################################################################
;; Re-Frame Registrations
;;#######################################################################

(rf/reg-fx

 :init-event-loop!

 (fn [_]
   
   (run-event-loop!)))


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
