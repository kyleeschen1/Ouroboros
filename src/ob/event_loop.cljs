
(ns ^:figwheel-hooks ob.event-loop
  (:require

   [ob.db-nav :as db]
   [ob.update-db :refer [run-db-update]]
   [ob.utils :refer [<sub >evt]]

   [com.rpl.specter :as s]
   
   [cljs.core.async :as a]
   [re-frame.core :as rf])
  
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]]))



;;#######################################################################
;; Event Multimethod
;;#######################################################################


(defmulti animate
  
  (fn [tag _ _]
    
    tag))


(defn events->updates

  "Compiles events into a flat vector
   of db updates."
  
  [tag display-data params]
  
  (let [cf (animate tag display-data (vec params))
      

        configs (if (vector? cf)
                   cf
                   [cf])]

    configs))


;;#######################################################################
;; Animation Handlers
;;#######################################################################




;;#######################################################################
;; Event Loop
;;#######################################################################

(declare block-event-loop
         unblock-event-loop
         paused?)

;;------------------------------
;; Event Channel
;;------------------------------

(def events
  (a/chan))

(defn animate!

  "Puts an animation on the
   event channel."

  [& args]

  (a/put! events (vec args)))

;;------------------------------
;; Core Loop
;;------------------------------

(defn run-event-loop!

  "Sets up an event for processing,
   blocking until its completion."
  
  []
  
  (go-loop []

    (let [event (a/<! events)]
      
      (>evt (into [:events->updates] event))

      (a/<! block-event-loop)
      
      (recur))))

;;----------------------------------
;; Async
;;----------------------------------

(def block-event-loop
  (a/chan))

(defn unblock-event-loop!
  []
  (a/put! block-event-loop :unleash-the-next-terror))

;;#######################################################################
;; Sequencing DB Updates
;;#######################################################################

(defn queue-db-updates!

  "Takes in a sequence of db updates,
   dispatches each for for execution,
   blocking between if appropriate.

   Once everything has been processed,
   it unblocks the event loop."

  [updates]
   
   (go-loop [[u & us] updates]
     
     (when u
       
       (if @paused?

         (do           
           (a/<! (a/timeout 100))           
           (recur updates))
         
         (let [block (a/chan)]
           (>evt [:run-db-update block u])
           (a/<! block)
           (recur us))))

     (unblock-event-loop!)))

;;#######################################################################
;; Re-Frame Registrations
;;#######################################################################

(rf/reg-fx :init-event-loop!
           run-event-loop!)


(rf/reg-event-fx

 :events->updates

 (fn [{:keys [db]} [_ tag & params]]

   (let [display (s/select-one [db/CURR-DB :display] db)
         events (events->updates tag display params)]

     {:queue-db-updates! events})))


(rf/reg-fx :queue-db-updates!
           
           queue-db-updates!)

(rf/reg-event-fx
 
 :run-db-update

 (fn [{:keys [db]} [_ blocking-chan update]]
   
   (let [{:keys [db time]} (run-db-update db update)]
     
     {:db db
      :block-for-db-update [time blocking-chan]})))


(rf/reg-fx

 :block-for-db-update

 (fn [[time blocking-channel]]

   (go
     (a/<! (a/timeout (or time 20)))
     (a/close! blocking-channel))))




;;#######################################################################
;; Pausing and Timing
;;#######################################################################

(def paused?
  (atom false))

(defn pause!
  []
  (swap! paused? not))






