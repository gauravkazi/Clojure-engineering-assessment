(require '[clojure.edn :as edn]
         '[clojure.pprint :refer [pprint]])

(def data-file "applications.edn")
(def valid-statuses #{:applied :interview :offer :rejected})

(defn load-applications []
  (edn/read-string (slurp data-file)))

(defn save-applications [apps]
  (spit data-file (with-out-str (pprint apps))))

(defn print-applications [app]
  (println (:company app) "-" (:role app) "-" (name (:status app))))

(defn with-status [status apps]
  (filter #(= status (:status %)) apps))

(defn list-application [status-text]
  (let [all (load-applications)
        apps (if status-text
               (with-status (keyword status-text) all)
               all)]
    (doseq [app apps]
      (print-applications app))))

(defn add-application [company role]
  (let [new-app {:company company :role role :status :applied}
        updated (conj (vec (load-applications)) new-app)]
    (save-applications updated)
    (println "Added:" company "-" role)))

(defn update-status [company status-text]
  (let [status (keyword status-text)
        apps   (vec (load-applications))]
    (cond
      (not (valid-statuses status))
      (println "Invalid status. Use: applied, interview, offer, rejected")

      (not-any? #(= company (:company %)) apps)
      (println "No application found for:" company)

      :else
      (do
        (save-applications
         (mapv #(if (= company (:company %))
                  (assoc % :status status)
                  %)
               apps))
        (println "Updated:" company "->" status-text)))))

(def usage
  "Usage:
   bb job.clj list [status]
   bb job.clj add <company> <role>
   bb job.clj status <company> <new-status>")

(let [args *command-line-args*
      command (first args)
      arg1 (second args)
      arg2 (nth args 2 nil)]
  (case command
    "list" (list-application arg1)
    "add" (if (and arg1 arg2)
            (add-application arg1 arg2 )
            (println usage))
    "status" (if (and arg1 arg2)
               (update-status arg1 arg2)
               (println usage))
    (println usage)))