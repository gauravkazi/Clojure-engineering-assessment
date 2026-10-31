(ns api.match
  (:require [clojure.edn :as edn]
            [clojure.string :as str]
            [hato.client :as http]
            [jsonista.core :as json]))

(defn load-skills []
  (edn/read-string (slurp "skills.edn")))

(defn build-prompt [skills job-description]
  (str "You are helping a junior developer check how well they fit a job.\n\n"
       "Candidate skills: " (str/join ", " skills) "\n\n"
       "Job description:\n" job-description "\n\n"
       "Reply with ONLY a JSON object, with no other text, using exactly these keys:\n"
       "{\"score\": <integer 0-100>, \"matching_skills\": [<strings>], "
       "\"missing_skills\": [<strings>], \"summary\": \"<one or two sentences>\"}\n"
       "Only list a skill as matching if it appears in the candidate skills. "
       "Do not invent skills."))

(defn parse-result [text]
  (try
    (let [clean (-> text
                    str/trim
                    (str/replace #"^`{3}(?:json)?\s*" "")
                    (str/replace #"\s*`{3}$" ""))
          data  (json/read-value clean json/keyword-keys-object-mapper)
          {:keys [score matching_skills missing_skills summary]} data]
      (if (and (integer? score) (<= 0 score 100)
               (sequential? matching_skills) (every? string? matching_skills)
               (sequential? missing_skills) (every? string? missing_skills)
               (string? summary))
        {:ok {:score score
              :matching-skills (vec matching_skills)
              :missing-skills  (vec missing_skills)
              :summary summary}}
        {:error "Model returned an unexpected shape"}))
    (catch Exception _
      {:error "Model did not return valid JSON"})))

(def models
  ["gemini-3.5-flash" "gemini-3.5-flash-lite" "gemini-flash-lite-latest" "gemini-3.8-flash"])

(defn call-model [model prompt api-key]
  (try
    (let [url  (str "https://generativelanguage.googleapis.com/v1beta/models/"
                    model ":generateContent")
          resp (http/post url
                          {:headers {"x-goog-api-key" api-key
                                     "Content-Type"   "application/json"}
                           :body    (json/write-value-as-string
                                     {:contents [{:parts [{:text prompt}]}]
                                      :generationConfig {:responseMimeType "application/json"}})
                           :timeout 30000
                           :throw-exceptions? false})
          body (json/read-value (:body resp) json/keyword-keys-object-mapper)]
      (if (= 200 (:status resp))
        {:ok (get-in body [:candidates 0 :content :parts 0 :text])}
        {:error  (str "LLM request failed with status " (:status resp)
                      ": " (get-in body [:error :message]))
         :status (:status resp)}))
    (catch Exception _
      {:error "Could not reach the LLM"})))

(defn call-llm [prompt]
  (let [api-key (System/getenv "GEMINI_API_KEY")]
    (if (str/blank? api-key)
      {:error "GEMINI_API_KEY is not set"}
      (loop [[model & more] models]
        (let [result (call-model model prompt api-key)]
          (if (and (:error result)
                   (#{404 429 503} (:status result))
                   (seq more))
            (recur more)
            result))))))

(defn match-job [job-description]
  (let [{:keys [ok error]} (call-llm (build-prompt (load-skills) job-description))]
    (if error
      {:error error}
      (parse-result ok))))