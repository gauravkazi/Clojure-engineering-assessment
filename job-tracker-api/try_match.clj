(require '[api.match :as m])

(println "--- PROMPT ---")
(println (m/build-prompt (m/load-skills)
                         "We need a junior Node.js developer with MongoDB and Docker."))

(println "--- GOOD ANSWER ---")
(println (m/parse-result "{\"score\": 72, \"matching_skills\": [\"Node.js\", \"MongoDB\"], \"missing_skills\": [\"Docker\"], \"summary\": \"Good backend fit; missing Docker.\"}"))

(println "--- NOT JSON ---")
(println (m/parse-result "this is not json"))

(println "--- BAD SCORE ---")
(println (m/parse-result "{\"score\": 500, \"matching_skills\": [], \"missing_skills\": [], \"summary\": \"x\"}"))