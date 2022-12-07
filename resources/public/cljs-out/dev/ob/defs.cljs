
(ns ^:figwheel-hooks ob.defs)

;;###############################################################
;; Defs
;;###############################################################

;; Provides a global registery for defining configurations
;; for the animations.
;;
;; Each def is associated with a provided keyword.


(def registery
  (atom {}))

(defn get-defs

  "Returns the contents
   of the def registery.

   Obviously."
  
  []
  
  @registery)

(defn def*

  "Adds form to the global
   registery, binding it to
   the provided keyword."
  
  [kw form]
  
  (swap! registery assoc kw form)
  
  nil)
