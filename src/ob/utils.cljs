
(ns ^:figwheel-hooks ob.utils)

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

(defn walk-ids
  [form]
  (clojure.walk/postwalk tag-id form))
