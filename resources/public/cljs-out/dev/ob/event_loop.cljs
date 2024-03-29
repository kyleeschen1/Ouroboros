
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

(defmulti gen-frames :op/frame)

(defn call-gen-frames

  "Takes in:
   - instr : a frame generation instruction
   - db : the global DB

  Then calls gen-frames with an instruction map
  embellised with the following keys:

  - :dom -> display data
  - :versions -> versions of the display data, keyed by verson id
  - :curr-db-id -> current version id"
    
  [instr db]
  
  (let [dom (s/select-one [db/CURR-DB :display] db)
        vs (:db-versions db)
        instr (assoc instr :dom dom
                     :db-versions vs
                     :curr-db-id (:id/curr-db db))

        frames (gen-frames instr)]

    (if (vector? frames)
      frames
      [frames])))



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

  [instr]

  (a/put! events instr))


;;------------------------------
;; Core Loop
;;------------------------------

(defn run-event-loop!

  "Sets up an event for processing,
   blocking until its completion."
  
  []
  
  (go-loop []

    (let [instr (a/<! events)]
      
      (>evt (conj [:events->frames] instr))

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

 :events->frames
 
 (fn [{:keys [db]} [_ instr]]
   
   (let [frames (call-gen-frames instr db)]

     {:queue-db-updates! frames})))

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
     (a/<! (a/timeout time))
     (a/close! blocking-channel))))




;;#######################################################################
;; Pausing and Timing
;;#######################################################################

(def paused?
  (atom false))

(rf/reg-fx

 :update-pause-state!

 (fn [p?]
   (reset! paused? p?)))

(rf/reg-event-fx

 :toggle-pause
 
 (fn [{db :db} _]
   
   (let [p? (not (:paused? db))]
     
     {:db (assoc db :paused? p?)
      :update-pause-state! p?})))

(rf/reg-sub

 :paused?

 (fn [db _]
   
   (if (get db :paused?)
     "Resume"
     "Pause")))





