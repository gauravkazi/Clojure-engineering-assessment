(require '[clojure.edn :as edn]
         '[clojure.pprint :refer [pprint]])

(def data-file "applications.edn")
(def valid-statuses #{:applied :interview :offer :rejected})

;; read the application stored in the .edn file 
(defn load-applications []
  (edn/read-string (slurp data-file)))

;; saves job applications into the .edn file
(defn save-applications [apps]
  (spit data-file (with-out-str (pprint apps))))

;; display the details of appliocation
(defn print-applications [app]
  (println (:company app) "-" (:role app) "-" (name (:status app))))

;;  filter applications based on their status
(defn with-status [status apps]
  (filter #(= status (:status %)) apps))

;;  display all application and status of application
(defn list-application [status-text]
  (let [all (load-applications)
        apps (if status-text
               (with-status (keyword status-text) all)
               all)]
    (doseq [app apps] ;; here app is current applcations
      (print-applications app)))) ;; display the current application details

;; adding the new job application
(defn add-application [company role]
  (let [new-app {:company company :role role :status :applied}
        updated (conj (vec (load-applications)) new-app)]
    (save-applications updated)
    (println "Added:" company "-" role)))

;; update the status of an existing application.
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

;; store command-line usage instructions
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