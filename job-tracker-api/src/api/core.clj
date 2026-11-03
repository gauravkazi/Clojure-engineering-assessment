(ns api.core
  (:require [api.match :as match]
            [api.db :as db]
            [clojure.edn :as edn]
            [clojure.pprint :refer [pprint]]
            [jsonista.core :as json]
            [ring.adapter.jetty :refer [run-jetty]]
            [clojure.string :as str]))

(def data-file "applications.edn")
(def valid-statuses #{:applied :interview :offer :rejected})

;; read the application stored in the .edn file 
(defn load-applications []
  (edn/read-string (slurp data-file)))

;; saves job applications into the .edn file
(defn save-applications [apps]
  (spit data-file (with-out-str (pprint apps))))

;; every application has a unique id
(defn ensure-application-ids []
  (let [apps (vec (load-applications))
        updated (mapv (fn [app]
                        (if (:id app)
                          app
                          (assoc app :id (str (random-uuid))))) ;; if not then creaet new id using random-uuid
                      apps)]
    (when (not= apps updated)
      (save-applications updated))))

;; json response for frontend
(defn json-response [status data]
  {:status status
   :headers {"Content-Type" "application/json"}
   :body (json/write-value-as-string data)})

;; convert frontend json data to clojure data
(defn parse-body [request]
  (try
    (json/read-value (slurp (:body request))
                     json/keyword-keys-object-mapper)
    (catch Exception _ nil)))

;; create new application when frontend send data backend
(defn create-application [request]
  (let [body (parse-body request)
        company (:company body)
        role (:role body)]
    (if (and (string? company) (string? role) (seq company) (seq role)) ;; check if role and company are string and is that empty(seq)
      (let [new-app {:id (str (random-uuid))
                     :company company
                     :role role
                     :status :applied}]
        (save-applications (conj (vec (load-applications)) new-app))
        (json-response 201 new-app))
      (json-response 400 {:error "company and role are required"}))))

;;  updates the status of an existing job application using its id
(defn update-status [request]
  (let [body(parse-body request)
        id(:id body)
        status(some-> (:status body) keyword)
        apps(vec (load-applications))
        same?(fn [app] (= id (:id app)))]
    (cond
      (not (string? id))
      (json-response 400 {:error "Application ID is required"})
      (not (valid-statuses status))
      (json-response 400 {:error "Invalid status"})
      (not-any? same? apps)
      (json-response 404 {:error "Application not found"})
      :else
      (let [updated (mapv (fn [app]
                            (if (same? app)
                              (assoc app :status status)
                              app))
                          apps)]
        (save-applications updated)
        (json-response 200 (first (filter same? updated)))))))

;; analyzing job description using AI and saving the matching results in database.
(defn match-application [request]
  (let [body (parse-body request)
        description (:description body)]
    (cond
      (not (string? description))
      (json-response 400 {:error "description is required"})
      (clojure.string/blank? description)
      (json-response 400 {:error "description cannot be empty"})
      (> (count description) 8000)
      (json-response 400 {:error "description is too long (max 8000 character)"})
      
      :else
      (let [{:keys [ok error]} (match/match-job description)]
        (if error
          (json-response 502 {:error error})
          (try
            (db/save-match! description ok)
            (json-response 200 ok)
            (catch Exception e
              (println "Database save failed:" (.getMessage e))
              (json-response 500 {:error "AI analysis succeeded but saving result failed"}))))))))

;; get the latest match request form the database 
(defn latest-match [_request]
  (try
    (if-let [result (db/get-latest-match)] 
      (json-response 200 result)
      (json-response 404 {:error "No previous analysis found"}))
    (catch Exception e
      (println "Database retrieval failed:" (.getMessage e))
      (json-response 500 {:error "Could not retrieve previous analysis"}))))

;; used this for cors
(def allowed-origins
  #{"http://localhost:8080"
    "https://clojure-engineering-assessment-job.vercel.app"})

;;  CORS middleware

(defn wrap-cors [handler]
  (fn [request]
    (let [origin(get-in request [:headers "origin"])
          response (if (= :options (:request-method request))
                     {:status 200 :headers {} :body ""}
                     (handler request))]
      (cond-> response
        (contains? allowed-origins origin)
        (update :headers merge
                {"Access-Control-Allow-Origin"  origin
                 "Access-Control-Allow-Methods" "GET, POST, PATCH, OPTIONS"
                 "Access-Control-Allow-Headers" "Content-Type"
                 "Vary" "Origin"})))))
;; handler function 
(defn handler [request]
  (case [(:request-method request) (:uri request)]
    [:get "/"]{:status  200
               :headers {"Content-Type" "text/plain"} 
               :body    "Hello from the job tracker API!"}
    [:get "/applications"](json-response 200 (load-applications))
    [:post "/applications"](create-application request)
    [:patch "/applications"](update-status request)
    [:post "/match"](match-application request)
    [:get "/match/latest"](latest-match request)
    (json-response 404 {:error "Not found"})))

;; starting point of backend 
(defn -main [& _args]
  (let [port (Integer/parseInt (or (System/getenv "PORT") "3000"))]
    (ensure-application-ids)
    (println (str "Server running on port " port))
    (run-jetty (wrap-cors handler)
               {:port port
                :host "0.0.0.0"})))