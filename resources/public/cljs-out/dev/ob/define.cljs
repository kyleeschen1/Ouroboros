
(ns ^:figwheel-hooks ob.define
  
  (:require
   [com.rpl.specter :as s])
  
  (:require-macros
   [com.rpl.specter :refer [defnav comp-paths]]))


(def registery
  (atom {}))

(defn get-registered-defs
  []
  @registery)

(defn def*

  "Adds form to the global
   registery, binding it to
   the provided keyword."
  
  [kw form]
  (swap! registery assoc kw form)
  nil)

(def* :core/opening
  
  {:op :text
   :msg "Here is the opening gamb!"
   :header "Lots to like here."
   :nodes [{:op :text
            :id :prelude
            :header "There are lots of reasons to dislike"}

           {:op :text
            :msg
            "Nobody likes you, Kyle, and one should note that "}]})
