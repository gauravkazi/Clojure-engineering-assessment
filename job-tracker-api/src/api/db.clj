(ns api.db
  (:require [next.jdbc :as jdbc]
            [next.jdbc.result-set :as rs]
            [jsonista.core :as json]
            [clojure.string :as str])
  (:import [org.postgresql.ds PGSimpleDataSource]
           [java.net URI URLDecoder]))


(defn create-datasource []
  (if-let [database-url (System/getenv "DATABASE_URL")]
    ;; Render PostgreSQL
    (let [uri (URI. database-url)
          user-info (.getUserInfo uri)
          [username password] (str/split user-info #":" 2)
          datasource (PGSimpleDataSource.)]

      (.setServerNames datasource (into-array String [(.getHost uri)]))
      (.setPortNumbers datasource
                       (int-array [(if (pos? (.getPort uri))
                                     (.getPort uri)
                                     5432)]))
      (.setDatabaseName datasource (str/replace (.getPath uri) #"^/" ""))
      (.setUser datasource (URLDecoder/decode username "UTF-8"))
      (.setPassword datasource (URLDecoder/decode password "UTF-8"))
      (.setSslMode datasource "require")
      datasource)

    ;; Local PostgreSQL

    (jdbc/get-datasource
     {:dbtype "postgresql"
      :dbname "job_tracker"
      :host "localhost"
      :port 5432
      :user (System/getenv "USER")})))

(def datasource
  (create-datasource))



(defn save-match! [description result]
  (jdbc/execute-one!
   datasource
   ["INSERT INTO match_results
     (job_description, match_score, summary, matching_skills, missing_skills)
     VALUES (?, ?, ?, ?::jsonb, ?::jsonb)"
    description
    (:score result)
    (:summary result)
    (json/write-value-as-string (:matching-skills result))
    (json/write-value-as-string (:missing-skills result))]))

(defn get-latest-match []
  (when-let [row
             (jdbc/execute-one!
              datasource
              ["SELECT id, job_description, match_score, summary,
                       matching_skills, missing_skills, created_at
                FROM match_results
                ORDER BY created_at DESC, id DESC
                LIMIT 1"]
              {:builder-fn rs/as-unqualified-lower-maps})]

    {:id (:id row)
     :job-description (:job_description row)
     :score (:match_score row)
     :summary (:summary row)
     :matching-skills
     (json/read-value (.getValue (:matching_skills row))
                      json/keyword-keys-object-mapper)
     :missing-skills
     (json/read-value (.getValue (:missing_skills row))
                      json/keyword-keys-object-mapper)
     :created-at (:created_at row)}))