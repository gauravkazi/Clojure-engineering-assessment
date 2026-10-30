(ns api.core
  (:require [clojure.edn :as edn]
            [clojure.pprint :refer [pprint]]
            [jsonista.core :as json]
            [ring.adapter.jetty :refer [run-jetty]]))


(def data-file "applications.edn")

(def valid-statuses #{:applied :interview :offer :rejected })

(defn load-applications []
  (edn/read-string (slurp data-file)))

(defn save-applications [apps]
  (spit data-file (with-out-str (pprint apps))))

(defn ensure-application-ids []
  (let [apps (vec (load-applications))
        updated (mapv
                 (fn [app]
                   (if (:id app)
                     app
                     (assoc app :id (str (random-uuid)))))
                 apps)]
    (when (not= apps updated)
      (save-applications updated))))

(defn json-response [status data]
  {:status status
   :headers {"Content-Type" "application/json"}
   :body (json/write-value-as-string data)})

(defn parse-body [request]
  (try
    (json/read-value (slurp (:body request))
                     json/keyword-keys-object-mapper)
    (catch Exception _ nil)))

(defn create-application [request]
  (let [body (parse-body request)
        company (:company body)
        role (:role body)]
    (if (and (string? company) (string? role) (seq company) (seq role))
      (let [new-app {:id (str (random-uuid))
                     :company company
                     :role role
                     :status :applied}]
        (save-applications (conj (vec (load-applications)) new-app))
        (json-response 201 new-app))
      (json-response 400 {:error "company and role are required"}))))


(defn update-status [request]
  (let [body (parse-body request)
        id (:id body)
        status (some-> (:status body) keyword)
        apps (vec (load-applications))
        same? (fn [app] (= id (:id app)))]

    (cond
      (not (string? id))
      (json-response 400 {:error "Application ID is required"})

      (not (valid-statuses status))
      (json-response 400 {:error "Invalid status"})

      (not-any? same? apps)
      (json-response 404 {:error "Application not found"})

      :else
      (let [updated
            (mapv
             (fn [app]
               (if (same? app)
                 (assoc app :status status)
                 app))
             apps)]

        (save-applications updated)

        (json-response 200
                       (first (filter same? updated)))))))


(def allowed-origins
  #{"http://localhost:8080"
    "https://your-project.vercel.app"})

(defn wrap-cors [handler]
  (fn [request]
    (let [origin (get-in request [:headers "origin"])
          response
          (if (= :options (:request-method request))
            {:status 200
             :headers {}
             :body ""}
            (handler request))]

      (cond-> response
        (contains? allowed-origins origin)
        (update :headers merge
                {"Access-Control-Allow-Origin" origin
                 "Access-Control-Allow-Methods" "GET, POST, PATCH, OPTIONS"
                 "Access-Control-Allow-Headers" "Content-Type"
                 "Vary" "Origin"})))))


(defn handler [request]
  (case [(:request-method request) (:uri request)]
    [:get "/"] {:status  200 
                :headers {"Content-Type" "text/plain"} 
                :body    "Hello from the job tracker API!"}
    [:get "/applications"] (json-response 200 (load-applications))
    [:post "/applications"] (create-application request)
    [:patch "/applications"] (update-status request)
    (json-response 404 {:error "Not found"})))


(defn -main [& _args]
  (let [port (Integer/parseInt
              (or (System/getenv "PORT") "3000"))]
    (ensure-application-ids)

    (println (str "Server running on port " port))

    (run-jetty (wrap-cors handler)
               {:port port
                :host "0.0.0.0"})))