(ns api.db
  (:require [next.jdbc :as jdbc]
             [next.jdbc.result-set :as rs]
            [jsonista.core :as json]))

(def db-spec
  {:dbtype "postgresql"
   :dbname "job_tracker"
   :host "localhost"
   :port 5432
   :user (System/getenv "USER")})

(def datasource
  (jdbc/get-datasource db-spec))

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