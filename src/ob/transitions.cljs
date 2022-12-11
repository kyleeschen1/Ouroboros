
(ns ^:figwheel-hooks ob.transitions
  
  (:require
   [com.rpl.specter :as s])
   
  (:require-macros
   [com.rpl.specter :refer [multi-transform]]))


(defmulti calc-forward-&-backward :trs)
  
(defmethod calc-forward-&-backward nil
  
  [{:keys [time] :or {time 20}}]
  
  [time time])

(defmethod calc-forward-&-backward :default
  
  [{:keys [trs]}]
  
  (let [time (:time trs)
        
        rewind (s/transform [:data s/MAP-VALS]
                            
                            (fn [{:keys [total] :as trs}]
                              
                              (assoc trs :delay (- time total)))

                            trs)]
    [trs rewind]))



(defn set-trs-info

  "Associates the forward and backward transition
   information for when the system moves from a DB
   version with the source id to one with the target id."
  
  [db frame source-id target-id]
  
  (let [[forward backward] (calc-forward-&-backward frame)]
    
    (multi-transform

     [:trs
      :mappings
      (s/multi-path
       [target-id source-id (s/terminal-val backward)]
       [source-id target-id (s/terminal-val forward)])]
     
     db)))



(defn get-trs-info

  "Takes in:
  
   - db : the whole database
   - source-id : id of the pre-update version
   - target-id : id of the post-update version

  Returns all associated information."

  [db source-id target-id]

  (s/select-one [:trs :mappings source-id target-id] db))



(defn apply-trs-to-display-data

  "Takes in:
   - trs : a transition configuration
   - speed : the current transition speed
   - display : a map containing display data

  Returns:
  - display data with transaction information in props "

  [{:keys [data]} speed display]
  
  (letfn [(format [time]
            
            (str (* speed time) "ms"))

          (id->trs [id]
            
            (let [{:keys [dur delay]} (get data id)]
              
              {:transition-duration (format dur)
               :transition-delay (format delay)}))

          (add-trs [id style]
            
            (merge style (id->trs id)))]

    (s/transform [(s/submap (keys data)) s/MAP-VALS (s/collect-one :id) :style]

                 add-trs

                 display)))
