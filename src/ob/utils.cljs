
(ns ^:figwheel-hooks ob.utils
  (:require
   [com.rpl.specter :as s]
   [re-frame.core :as rf :refer [dispatch subscribe]]))

;;####################################################################
;; Re-Frame Aliases
;;####################################################################

;; Thanks to Lamba Island

(def <sub
  (comp deref rf/subscribe))

(def >evt
  rf/dispatch)


;;####################################################################
;; Constant
;;####################################################################

(deftype Constant [value meta*]

  IMeta
  (-meta [_]
    meta*)

  IWithMeta
  (-with-meta [_ new-meta]
    (Constant. value new-meta))

  IEquiv
  (-equiv [_ other]
    (if (instance? Constant other)
      (= value (:value other))
      (= value other)))

  IFn
  (-invoke [this args]
    (value args))

  ILookup
  (-lookup [coll k]
    value)

  IPrintWithWriter
  (-pr-writer [this writer _]
    (write-all writer value)))


(defn constant?
  [form]
  (instance? Constant form))

;;####################################################################
;; IDs
;;####################################################################

(defn id
  [form]
  (:id (meta form)))

(defn gen-id
  [form]
  (gensym (str form "-")))

(defn assoc-meta
  [form meta-data]
  (vary-meta form merge meta-data))

(defn tag-id
  [form]
  (if (satisfies? IMeta form)
    
    (assoc-meta form {:id (gen-id (cond
                                    (coll? form)
                                    "coll"
                                    (symbol? form) "sym"
                                    :else form))})
    
    (->Constant form {:id (gen-id (str "const-" form))})))

(defn add-display-ids
  
  [form]
  
  (if-not (coll? form)

    form
    
    (let [child-ids

          (s/select [(s/if-path map?
                                [s/ALL s/ALL s/META :id]
                                [s/ALL s/META :id])]
                    form)
          form (assoc-meta form {:child-ids child-ids})

          id (:id (meta form))]

      (s/setval [s/ALL-WITH-META s/META :parent-id] id form))))

(def WALK-ALL
  (s/recursive-path [] p
                    
                    (s/if-path coll?
                               (s/continue-then-stay s/ALL p)
                               s/STAY)))



(defn walk-ids
  [form]
  (s/transform [WALK-ALL] (comp add-display-ids tag-id) form))
