Job Tracker Web Dashboard

A web-based job application tracking dashboard built with ClojureScript and Reagent. The application connects to a REST API built with Clojure and Ring to retrieve, create, and update job applications.

This project is Demo 3 of my Clojure Engineering Assessment, demonstrating how ClojureScript can be used to build an interactive web application that communicates with a backend API.

### Live Demo

* Frontend: https://clojure-engineering-assessment-job.vercel.app/
* Backend API: https://clojure-engineering-assessment.onrender.com/applications
* Frontend Hosting: Vercel
* Backend Hosting: Render

### Features

* View Applications: Fetch and display job applications from the backend API.
* Add Applications: Submit new job applications with company and job role information.
* Update Application Status: Change an application’s status using its unique application ID.
* Persistent Backend Updates: Save changes through the backend API so they can be retrieved after refreshing the page, subject to the backend’s storage configuration.
* Reactive UI: Automatically update the dashboard when application data changes.
* REST API Integration: Communicate with the backend using HTTP requests and JSON.
* Status Management: Track applications through statuses such as Applied, Interview, Offer, and Rejected.
* Production Deployment: Deploy the compiled frontend separately from the backend.

### Tech Stack

Frontend

* ClojureScript — Compiles Clojure code into JavaScript for browser execution.
* Reagent — Builds reactive user interfaces using React.
* Shadow CLJS — Compiles and manages the ClojureScript frontend build.
* HTML5 — Provides the application’s document structure.
* CSS3 — Styles the dashboard and its components.
* JavaScript Fetch API — Sends HTTP requests to the backend.

### Backend Integration

* Clojure
* Ring
* REST API
* JSON
* CORS

### Deployment

* Vercel — Frontend hosting.
* Render — Backend hosting.

### Project Structure

job-tracker-web/
├── public/
│   ├── index.html
│   ├── style.css
│   └── js/
│       └── main.js
├── src/
│   └── app/
│       └── core.cljs
├── shadow-cljs.edn
├── package.json
└── README.md

Note: The public/js/ directory contains generated JavaScript files produced by Shadow CLJS. The exact generated files may vary depending on the build configuration.

### Getting Started

Follow these steps to run the frontend locally.

Prerequisites

Install the following tools:

* Java JDK
* Clojure CLI
* Node.js and npm
* Git

The ClojureScript compiler uses the configured ClojureScript dependencies, while npm manages the frontend’s JavaScript tooling.

1. Clone the Repository

git clone https://github.com/gauravkazi/Clojure-engineering-assessment.git

2. Navigate to the Frontend Directory

cd Clojure-engineering-assessment/job-tracker-web

If you already cloned the repository and are inside its root directory, simply run:

cd job-tracker-web

3. Install Dependencies

npm install

4. Configure the Backend URL

Open:

src/app/core.cljs

Find the api-url definition.

For local backend development, use:

(def api-url
  "http://localhost:3000")

For the deployed backend, use:

(def api-url
  "https://clojure-engineering-assessment.onrender.com")

Choose the URL that matches the backend you want to use.

5. Start the Development Environment

Ensure the backend API is running, then execute:

npx shadow-cljs watch app

Shadow CLJS compiles the application and watches for source changes.

Open the local development URL configured in shadow-cljs.edn:

http://localhost:8080

Keep the development process running while testing the application.

### Backend API Integration

The frontend communicates with the backend through REST API endpoints.

Fetch Applications

Method: GET

GET /applications

Retrieves the job applications stored by the backend.

Add an Application

Method: POST

POST /applications
Content-Type: application/json

Example request body:

{
  "company": "Example Company",
  "role": "Backend Developer"
}

The backend creates a new application and assigns it a unique ID.

Update Application Status

Method: PATCH

PATCH /applications
Content-Type: application/json

Example request body:

{
  "id": "application-unique-id",
  "status": "interview"
}

The backend identifies the application using its unique ID and updates its status.

Supported statuses:

* applied
* interview
* offer
* rejected

The exact status values must match those accepted by the backend API.

### How It Works

The application follows a frontend–backend architecture.

1. The user opens the dashboard.
2. The ClojureScript application initializes the Reagent UI.
3. The frontend sends a GET request to retrieve applications.
4. The backend returns application data as JSON.
5. The frontend converts the JSON response into ClojureScript data structures and updates its reactive state.
6. When a user adds an application, the frontend sends a POST request.
7. When a user changes an application’s status, the frontend sends a PATCH request containing the application’s unique ID and the new status.
8. After a successful mutation, the frontend fetches the updated application list.
9. The dashboard displays the latest data.

The backend is responsible for storing application data. The frontend retrieves that data from the API rather than relying solely on browser memory.

### Production Build

To compile the frontend for production, run:

npx shadow-cljs release app

The generated JavaScript files are written to the output directory configured in shadow-cljs.edn.

For this project, the configured output directory is:

public/js

The generated files are loaded by public/index.html.

### Deployment

Frontend — Vercel

The frontend is deployed to Vercel.

Deployment configuration:

Setting	Value
Framework Preset	Other
Root Directory	job-tracker-web
Build Command	npx shadow-cljs release app
Output Directory	public
Install Command	npm install

These settings assume job-tracker-web is directly inside the GitHub repository root.

Backend — Render

The frontend communicates with the deployed Clojure backend hosted on Render.

Backend URL:

https://clojure-engineering-assessment.onrender.com

CORS Configuration

Because the frontend and backend are hosted on different domains, the backend must allow requests from the deployed Vercel origin.

The backend’s allowed origins should include:

https://clojure-engineering-assessment-job.vercel.app

The allowed origin must match the actual frontend domain. If the domain changes, update the backend configuration accordingly.

### Testing Checklist

After running or deploying the application, verify the following:

* The dashboard loads successfully.
* Existing job applications appear.
* A new job application can be created.
* An application’s status can be updated.
* Updating one application does not modify another application.
* Changes remain visible after refreshing the page.
* The browser console does not report CORS errors.
* API requests reach the deployed backend successfully.

### Notes and Limitations

* The frontend requires a reachable backend API to retrieve and modify applications.
* Cross-origin requests depend on the backend’s CORS configuration.
* Render deployments may experience cold starts, which can make the first request slower.
* If the backend stores data in a local file inside an ephemeral filesystem, application data may not survive restarts or redeployments. Reliable long-term persistence requires an appropriate persistent storage solution, such as a database or configured persistent disk.
* The production frontend must use the deployed backend URL rather than localhost.

### Learning Outcomes

Through this project, I explored:

* ClojureScript fundamentals.
* Building reactive interfaces with Reagent.
* Compiling ClojureScript using Shadow CLJS.
* Managing frontend state with Reagent atoms.
* Consuming REST APIs from a browser.
* Sending GET, POST, and PATCH requests.
* Working with JSON request and response bodies.
* Handling CORS between separate frontend and backend deployments.
* Building and deploying a production web application.


Part of the Clojure Engineering Assessment — Demo 3: Job Tracker Web Dashboard.