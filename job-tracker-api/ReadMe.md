### Job Tracker API (Backend) Demo 2 

A REST API built with Clojure and Ring that provides HTTP endpoints for managing job applications. The API allows clients to retrieve, create, and update job applications using JSON.

The backend also includes an AI-powered job matching feature that uses the Gemini API to analyze job descriptions against a predefined collection of skills. Successful analysis results are stored in PostgreSQL and can be retrieved later.

Live API: https://job-tracker-api-qdpd.onrender.com

### The Problem

Managing job applications requires a way to store and retrieve application information programmatically. I built this API to expose job application operations through HTTP endpoints so that applications such as web dashboards can communicate with the backend.

I also extended the backend with an AI job matching feature. It analyzes a job description against a predefined collection of skills, returns a match score and skill analysis, and stores the results in PostgreSQL for later retrieval.

### Stack

* Clojure — Backend programming language.
* Ring — HTTP request and response handling.
* Jetty — HTTP server.
* jsonista — JSON serialization and deserialization.
* Hato — HTTP client used to communicate with the Gemini API.
* Gemini API — AI-powered job description and skill matching.
* next.jdbc — Database access from Clojure.
* PostgreSQL — Persistent storage for AI matching results.
* Docker — Containerized application deployment.
* Render — Backend hosting and PostgreSQL database hosting.

### Endpoints

Method	Path	Description
GET	/	Returns a health message.
GET	/applications	Retrieves all job applications.
POST	/applications	Creates a new job application.
PATCH	/applications/:id	Updates the status of an application using its unique ID.
POST	/match	Analyzes a job description using Gemini and saves the result in PostgreSQL.
GET	/match/latest	Retrieves the latest saved AI matching result.

Each job application contains a unique ID, company, role, and status.

Supported application statuses:

* applied
* interview
* offer
* rejected

The AI matching feature returns a score, matching skills, missing skills, and a summary.

Responses

Status Code	Meaning
200	Request completed successfully.
201	Application created successfully.
400	Invalid input, missing required fields, malformed JSON, or invalid status.
404	Route or application not found, or no saved AI analysis exists.
500	Unexpected server error.

The actual response depends on the endpoint and the type of error.

Examples (Postman)

For POST and PATCH requests, select the Body tab, choose raw, and select JSON.

1. List All Applications

Method: GET

https://job-tracker-api-qdpd.onrender.com/applications

Expected response: 200 OK with a JSON list of job applications.

Each application contains a unique ID that can be used to update its status.

2. Create an Application

Method: POST

https://job-tracker-api-qdpd.onrender.com/applications

Request body:

{
  "company": "Omega",
  "role": "Node Developer"
}

Expected response: 201 Created, containing the new application with its generated ID and initial status of applied.

3. Update an Application’s Status

Method: PATCH

https://job-tracker-api-qdpd.onrender.com/applications/<id>

Request body:

{
  "status": "interview"
}

Replace <id> with the actual ID of an existing application.

Expected response: 200 OK, containing the updated application.

4. Error Cases

Method	Request	Expected Result
POST	{"company": "OnlyCompany"}	400 — company and role are required.
PATCH	Invalid status such as banana	400 — invalid status.
PATCH	Nonexistent application ID	404 — application not found.

5. Analyze a Job Description

Method: POST

https://job-tracker-api-qdpd.onrender.com/match

Request body:

{
  "description": "We are looking for a backend developer with experience in Node.js, REST APIs, PostgreSQL, Docker, and authentication."
}

The backend validates the submitted job description and sends a request to the Gemini API.

The AI response is processed into a structured result containing:

* score — AI-generated job match score.
* matching-skills — Skills identified as matching the job description.
* missing-skills — Skills identified as missing.
* summary — Summary of the analysis.

After successful analysis, the backend saves the result in PostgreSQL and returns it to the client.

The score and skill analysis are AI-generated estimates rather than guaranteed assessments of job suitability.

6. Retrieve the Latest AI Analysis

Method: GET

https://job-tracker-api-qdpd.onrender.com/match/latest

This endpoint retrieves the most recently saved AI analysis from PostgreSQL.

When a result exists, the response contains the job description, match score, summary, matching skills, missing skills, and creation timestamp.

If no saved analysis exists, the endpoint returns a 404 response.

Run Locally

Prerequisites:

* Java JDK
* Clojure CLI
* PostgreSQL, if testing database persistence
* A Gemini API key, if testing AI matching

### Clone the repository:

git clone https://github.com/gauravkazi/Clojure-engineering-assessment.git

Navigate to the backend directory:

cd Clojure-engineering-assessment/job-tracker-api

Start the backend:

clojure -M -m api.core

The server runs at:

http://localhost:3000

The application uses the configured PORT environment variable when available and falls back to the local development port.

### Environment Variables

The backend uses environment variables to configure external services and database access.

Variable	Purpose
GEMINI_API_KEY	Authenticates requests to the Gemini API.
DATABASE_URL	PostgreSQL connection URL used for AI analysis persistence.

For local development, create a .env file in the job-tracker-api directory:

GEMINI_API_KEY=your_gemini_api_key

Configure DATABASE_URL as well if you want to connect to a PostgreSQL database through the environment variable.

The application reads environment variables from the running process. If you use a .env file locally, load its values before starting the backend.

For example, in a compatible shell:

set -a
source .env
set +a
clojure -M -m api.core

Do not commit .env files, API keys, database passwords, or other secrets to GitHub.

The Gemini API key is required for AI matching. PostgreSQL configuration is required for saving and retrieving AI analysis results.

PostgreSQL Database

PostgreSQL is used to persist successful AI matching results.

Database operations are implemented in src/api/db.clj using next.jdbc and the PostgreSQL JDBC driver.

### Database Table

The match_results table stores the following information:

Column	Description
id	Unique identifier for the analysis record.
job_description	Job description submitted for analysis.
match_score	AI-generated match score.
summary	AI-generated summary.
matching_skills	JSONB array of matching skills.
missing_skills	JSONB array of missing skills.
created_at	Timestamp when the record was created.

### Create the Table

If the table does not already exist, execute the following SQL against your configured PostgreSQL database:

CREATE TABLE IF NOT EXISTS match_results (
    id SERIAL PRIMARY KEY,
    job_description TEXT NOT NULL,
    match_score INTEGER,
    summary TEXT,
    matching_skills JSONB,
    missing_skills JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

### How Database Persistence Works

1. A client sends a job description to POST /match.
2. The backend validates the input.
3. The backend sends a request to Gemini.
4. The backend processes the AI-generated response.
5. The successful analysis is saved in PostgreSQL.
6. The backend returns the result to the client.
7. A client can request GET /match/latest to retrieve the most recent saved result.

This allows the AI analysis to remain available after a frontend page refresh or backend restart, provided the PostgreSQL database remains available.

Important: PostgreSQL currently stores AI analysis results. Job application records continue to use the existing application storage implementation.

Run with Docker

Build the Docker image:

docker build -t job-tracker-api .

Run the container:

docker run -p 3000:3000 job-tracker-api

Then open:

http://localhost:3000/applications

To supply environment variables through a local environment file:

docker run --env-file .env -p 3000:3000 job-tracker-api

Ensure the environment file contains the configuration required for the features you want to test and is not committed to GitHub.

If PostgreSQL runs outside the container, configure the database connection to use a hostname reachable from inside the container. localhost inside a container refers to that container itself.

### Deployment

The API is containerized using the Dockerfile in this directory and deployed to Render as a Docker web service.

Render builds the Docker image from the repository and runs the backend application.

Render Environment Variables

The deployed backend uses:

* GEMINI_API_KEY — for Gemini API requests.
* DATABASE_URL — for connecting to the Render PostgreSQL database.

Configure these variables in the Render service’s environment settings rather than hardcoding them in the source code.

The PostgreSQL database must contain the match_results table for AI analysis persistence to work.

### PostgreSQL Deployment

The Render PostgreSQL database stores AI analysis results separately from the backend container’s local filesystem.

This allows saved analyses to survive backend restarts and redeployments, provided the database remains available and the records are retained.

Job application records are still managed by the existing application storage implementation; they have not been migrated to PostgreSQL.

### CORS

The frontend dashboard is hosted on a different domain from the backend. Browsers restrict cross-origin requests unless the backend allows the frontend origin.

The backend handles CORS headers and browser preflight OPTIONS requests.

The deployed frontend origin is:

https://clojure-engineering-assessment-job.vercel.app

The backend’s allowed origins should include this origin. If the frontend domain changes, update the backend configuration accordingly.

### Why Clojure and Ring

* Requests and responses are plain maps. A Ring handler is a function that takes a request map and returns a response map, making request handling straightforward to understand and test.
* Immutable data. Application updates produce new data values rather than modifying existing values in place.
* EDN storage. The original application storage uses Clojure data, avoiding the need for a separate database in the basic application-management demo.
* Small deployment. A Dockerfile packages the backend for local execution and Render deployment.
* Database integration. next.jdbc allows the backend to execute SQL queries and persist AI analysis results in PostgreSQL.
* External API integration. Hato allows the backend to communicate with Gemini and obtain AI-generated job matching results.

### What Changed Since the First Version

* Applications are now identified by a unique ID instead of the company name.
* Added CORS support so a browser-based dashboard can call the API.
* Added a Dockerfile and deployed the backend to Render.
* Integrated the Gemini API to analyze job descriptions against a predefined collection of skills.
* Added POST /match to generate and save AI matching results.
* Added GET /match/latest to retrieve the latest saved analysis.
* Added PostgreSQL integration using next.jdbc.
* Added the match_results table for storing job descriptions, scores, summaries, matching skills, missing skills, and timestamps.
* Added environment-variable configuration for the Gemini API key and PostgreSQL connection.

### Limits and What I Would Improve

* Application data is stored in applications.edn inside the container. On hosts where the container filesystem is not persistent, application data may reset when the service restarts or redeploys. AI analysis results are stored separately in PostgreSQL.
* The API has no authentication, so anyone who can access the relevant endpoints may be able to change application data or submit AI matching requests.
* The application data file is read on each request, which is fine for a demo but not ideal for many users.
* Routing is implemented using simple route handling; a routing library such as Reitit could provide more structured routing and validation.
* There are no automated tests yet using clojure.test.
* AI matching depends on Gemini availability, a valid API key, and the expected response format.
* The current implementation retrieves the latest AI analysis rather than exposing a complete analysis-history API.
* Database failures and external AI service failures should be monitored through application logs.
* Migrating application records to PostgreSQL would provide more consistent persistence across the entire application.
* Authentication, request rate limiting, and additional input validation would improve security.

Part of the Clojure Engineering Assessment — Job Tracker API (Backend).