### Clojure Engineering Assessment 

A collection of four demos built with Clojure, ClojureScript, and their ecosystems, centered around one real-world problem: managing job applications while searching for a junior developer role.

Each demo explores a different approach to solving this problem, from command-line tools and backend APIs to web dashboards and AI-powered job matching.

### Demos Overview

#	Demo	Folder	Tech Stack
1	CLI Job Tracker	job-tracker-cli	Clojure, Babashka, EDN
2	Job Tracker Backend API	job-tracker-api	Clojure, Ring, Jetty, jsonista, PostgreSQL
3	Job Tracker Web Dashboard	job-tracker-web	ClojureScript, Reagent, React, Shadow CLJS
4	AI/LLM AI Resume & Job Description Matcher	Integrated into the Job Tracker API and Web Dashboard	Clojure, Gemini API, Hato, PostgreSQL

⸻

1. CLI Job Tracker

Folder: job-tracker-cli

### What I built:
A command-line tool for managing job applications directly from the terminal. Users can add applications, list them, filter by status, and update their application status.

### How I built it:
I used Clojure functions and maps to represent job applications, with EDN files for storing application data. Babashka provides a lightweight runtime for executing Clojure scripts without starting a full JVM application.

### Why this approach:
It demonstrates Clojure’s data-oriented programming, immutable data structures, and suitability for lightweight scripting and command-line automation.

2. Job Tracker Backend API

Folder: job-tracker-api

### What I built:
A REST-style HTTP API for managing job applications and performing AI-powered resume matching. It supports application operations, accepts job descriptions for analysis, and provides access to the latest saved analysis.

### How I built it:
I used Ring and Jetty to handle HTTP requests, jsonista to work with JSON, and PostgreSQL to persist AI matching results. The API also integrates with Google’s Gemini API for resume and job description analysis.

### Why this approach:
Ring’s handler-based design makes request processing straightforward and composable. PostgreSQL provides persistent storage for analysis results, while HTTP endpoints make the functionality accessible to a web frontend.

### Live API: https://job-tracker-api-qdpd.onrender.com

3. Job Tracker Web Dashboard

Folder: job-tracker-web

### What I built:
A browser-based dashboard for viewing and managing job applications. It provides a user interface for tracking application progress and accessing AI-generated resume-matching results.

### How I built it:
I used ClojureScript to write frontend logic, Reagent to build reactive UI components, React for rendering, and Shadow CLJS to compile ClojureScript into JavaScript. The dashboard communicates with the backend through HTTP requests.

### Why this approach:
ClojureScript lets me use Clojure’s functional programming style in the browser. Reagent’s reactive model helps keep the interface synchronized with application state and API responses.

### Live Dashboard: https://clojure-engineering-assessment-job.vercel.app

4. AI Resume & Job Description Matcher

Implementation: Integrated into job-tracker-api and job-tracker-web.

### What I built:
An AI-powered feature that analyzes a resume against a job description and returns a match score, matching skills, missing skills, and a summary to help identify areas for improvement.

### How I built it:
The backend sends the relevant information to Google’s Gemini API using Hato for HTTP communication. It processes the response and stores successful analysis results in PostgreSQL. The web dashboard allows users to submit a job description and view the results, including retrieving the latest saved analysis after refreshing the page.

### Why this approach:
Gemini provides language-model capabilities for interpreting job requirements and resume content. Keeping API calls and database operations on the backend protects sensitive configuration, while PostgreSQL allows analysis results to persist beyond a browser refresh.


### How the Demos Relate

The four demos explore different parts of the same job-search problem, but they are not all connected into one shared application.

* CLI: Demonstrates terminal-based job application management using Babashka and EDN.
* Backend API: Exposes job-tracking operations and AI matching through HTTP endpoints.
* Web Dashboard: Provides a browser-based interface that communicates with the backend API.
* AI Matcher: Adds resume-to-job-description analysis using Gemini and persists its results in PostgreSQL.

The CLI remains a separate demo. The web dashboard and AI matching feature work with the backend API.

### Why Clojure and Its Ecosystem?

I chose this assessment to explore how Clojure and its ecosystem can be applied to different engineering tasks.

* Data-oriented design: Clojure maps and collections provide a natural way to represent and transform application data.
* Functional programming: Functions and immutable values help make application logic easier to reason about.
* EDN: A native data format that is convenient for storing simple structured data.
* Babashka: A lightweight option for scripting and command-line applications.
* Ring and Jetty: A composable approach to building HTTP services on the JVM.
* ClojureScript and Reagent: Allow Clojure-style development for reactive browser interfaces.
* Gemini API and PostgreSQL: Add AI-assisted analysis and persistent storage.

### Future Improvements

* Add automated tests across all demos.
* Use a shared database-backed data layer where appropriate.
* Introduce application IDs and more robust validation.
* Improve error handling and AI response validation.
* Add more demos to explore other parts of the Clojure ecosystem.

Note: Each demo has its own implementation and setup instructions. Refer to the relevant folder for details on installation, configuration, and running the demo.