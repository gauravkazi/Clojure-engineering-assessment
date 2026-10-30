
(ns app.core
  (:require
   [reagent.core :as r]
   [reagent.dom.client :as rdom]))

;; React root
(defonce root
  (rdom/create-root
   (.getElementById js/document "app")))

(def api-url
   " https://clojure-engineering-assessment.onrender.com")

;; Application data
(defonce applications
  (r/atom []))

;; Selected filter
(defonce selected-status
  (r/atom :all))
(defonce company-input (r/atom ""))
(defonce role-input (r/atom ""))

;; to fetch the data from backend

(defn fetch-applications []
  (-> (js/fetch (str api-url "/applications"))

      (.then
       (fn [response]
         (.json response)))

      (.then
       (fn [data]
         (reset! applications
                 (mapv
                  #(update % :status keyword)
                  (js->clj data :keywordize-keys true)))))

      (.catch
       (fn [error]
         (js/console.error error)))))

;; function that used to update the backend 
(defn update-application-status [app new-status]
  (-> (js/fetch
       (str api-url "/applications")
       #js {:method "PATCH"
            :headers #js {"Content-Type" "application/json"}
            :body (js/JSON.stringify
                   (clj->js
                    {:id (:id app)
                     :status (name new-status)}))})
      (.then
       (fn [response]
         (if (.-ok response)
           (fetch-applications)
           (js/console.error "Failed to update status"))))
      (.catch
       (fn [error]
         (js/console.error error)))))

;;function to add the application 
(defn add-application [company role]
  (-> (js/fetch
       (str api-url "/applications")
       #js {:method "POST"
            :headers #js {"Content-Type" "application/json"}
            :body (js/JSON.stringify
                   (clj->js
                    {:company company
                     :role role}))})

      (.then
       (fn [response]
         (if (.-ok response)
           (fetch-applications)
           (js/console.error "Failed to add application"))))

      (.catch
       (fn [error]
         (js/console.error error)))))

;; Convert status keywords into readable labels
(defn status-label [status]
  (case status
    :applied "Applied"
    :interview "Interview"
    :offer "Offer"
    :rejected "Rejected"
    "Unknown"))

;; Summary card component
(defn stat-card [title value]
  [:div.stat-card
   [:p title]
   [:h2 value]])

;; Dashboard summary
(defn summary-cards []
  (let [apps @applications]
    [:section.summary-grid

     [stat-card "Total Applications" (count apps)]

     [stat-card "Applied"
      (count (filter #(= :applied (:status %)) apps))]

     [stat-card "Interviews"
      (count (filter #(= :interview (:status %)) apps))]

     [stat-card "Offers"
      (count (filter #(= :offer (:status %)) apps))]]))

;; Filter button
(defn filter-button [status label]
  [:button
   {:class (if (= @selected-status status)
             "filter-btn active"
             "filter-btn")
    :on-click #(reset! selected-status status)}
   label])

;; Applications table
(defn application-table []
  (let [apps (if (= @selected-status :all)
               @applications
               (filter #(= @selected-status (:status %))
                       @applications))] 
    [:table
     [:thead
      [:tr
       [:th "Company"]
       [:th "Job Role"]
       [:th "Status"]
       [:th "Update Status"]]]
     [:tbody
      (if (seq apps)
        (for [app apps]
          ^{:key (:id app)}
          [:tr
           [:td (:company app)]
           [:td (:role app)]
           [:td
            [:span.status-badge
             (status-label (:status app))]]
           [:td
            [:select
             {:value (name (:status app))
              :on-change
              (fn [event]
                (let [new-status
                      (keyword (.. event -target -value))]
                  (update-application-status app new-status)))}
             [:option {:value "applied"} "Applied"]
             [:option {:value "interview"} "Interview"]
             [:option {:value "offer"} "Offer"]
             [:option {:value "rejected"} "Rejected"]]]])
        [:tr
         [:td {:col-span 4}
          "No applications found."]])]]))

;; function to add the application form
(defn add-application-form []
  [:form.add-application-form
   {:on-submit
    (fn [event]
      (.preventDefault event)
      (when (and (seq @company-input)
                 (seq @role-input))
        (add-application @company-input @role-input)
        (reset! company-input "")
        (reset! role-input "")))}

   [:input
    {:type "text"
     :placeholder "Company name"
     :value @company-input
     :on-change #(reset! company-input (.. % -target -value))}]

   [:input
    {:type "text"
     :placeholder "Job role"
     :value @role-input
     :on-change #(reset! role-input (.. % -target -value))}]

   [:button {:type "submit"} "Add Application"]])

;; Main dashboard
(defn dashboard []
  [:main.dashboard

   [:header
    [:p "CAREER MANAGEMENT"]
    [:h1 "Job Tracker"]
    [:p "Keep track of your job applications in one place."]]

   [summary-cards]

   [:section
    [:h2 "Your Applications"]
;; add application form
    [add-application-form]

    [:div.filters
     [filter-button :all "All"]
     [filter-button :applied "Applied"]
     [filter-button :interview "Interview"]
     [filter-button :offer "Offer"]
     [filter-button :rejected "Rejected"]]

    [application-table]]

   [:footer
    "Job Tracker | Built with ClojureScript and Reagent"]])

;; Application entry point
(defn init []
  (rdom/render root [dashboard])
  (fetch-applications))