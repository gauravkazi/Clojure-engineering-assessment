# Job Tracker API (Backend)

A small HTTP API, written in Clojure with Ring, that stores and serves my job applications as JSON. It is the backend of my job tracker: the CLI in `../job-tracker-cli` holds the original logic, this API makes it available over HTTP, and the web dashboard uses it.

**Live API:** REPLACE-WITH-YOUR-RENDER-URL

## The problem
I track my job applications in a terminal tool, but a browser page or another program cannot use that. I needed the same data available over HTTP, deployed so a web dashboard can reach it from anywhere.

## Stack
- Clojure
- Ring + Jetty (HTTP server)
- jsonista (JSON)
- Docker (containerised deployment)
- Render (hosting)

## Endpoints

| Method | Path | What it does |
|---|---|---|
| GET | `/` | Health message |
| GET | `/applications` | List all applications |
| POST | `/applications` | Create an application (status starts as `applied`) |
| PATCH | `/applications/:id` | Change the status of one application, found by its unique ID |

Each application has a unique `id`, a `company`, a `role` and a `status`. Valid statuses: `applied`, `interview`, `offer`, `rejected`.

### Responses

| Code | Meaning |
|---|---|
| 200 | Success |
| 201 | Application created |
| 400 | Missing fields, broken JSON or invalid status |
| 404 | Unknown route or unknown ID |

## Examples (Postman)

For POST and PATCH, open the **Body** tab, choose **raw**, and select **JSON**.

#### 1. List all applications
- **Method:** GET
- **URL:** `https://clojure-engineering-assessment-job.vercel.app/applications`

Expected: `200 OK` with a JSON list. Each item includes its `id`. Copy an `id` from here to use in the PATCH request.

#### 2. Create an application
- **Method:** POST
- **URL:** `https://clojure-engineering-assessment-job.vercel.app/applications`
- **Body:**

      {"company": "Omega", "role": "Node Developer"}

Expected: `201 Created`, returning the new application with its generated `id` and the status `applied`.

#### 3. Change the status of an application
- **Method:** PATCH
- **URL:** `https://clojure-engineering-assessment-job.vercel.app/applications/<id>`
- **Body:**

      {"status": "interview"}

Expected: `200 OK`, returning the updated application.

#### 4. Error cases

| Method | Request | Expected |
|---|---|---|
| POST | `{"company": "OnlyCompany"}` | `400` company and role are required |
| PATCH | `/applications/<id>` with `{"status": "banana"}` | `400` invalid status |
| PATCH | `/applications/does-not-exist` with `{"status": "offer"}` | `404` not found |

## Run locally

Requires Java and the Clojure CLI.

    cd job-tracker-api
    clojure -M -m api.core

The server starts on http://localhost:3000 (REPLACE if your port now comes from an environment variable).

## Run with Docker

    docker build -t job-tracker-api .
    docker run -p 3000:3000 job-tracker-api

Then open http://localhost:3000/applications.

## Deployment
The API is containerised with the `Dockerfile` in this folder and deployed on Render as a Docker web service. Render builds the image from the repository and runs it, so the same container I test locally is what runs in production.

## CORS
The web dashboard is served from a different domain than the API, and browsers block such requests unless the server allows them. The API sends CORS headers (REPLACE: which origins are allowed) and answers the browser's preflight `OPTIONS` requests, so the dashboard can call it.

## Why Clojure and Ring
- **Requests and responses are plain maps.** A handler is a function from a request map to a response map, so it is easy to read and to test without a server.
- **Immutable data.** Creating or updating returns a new list instead of changing the old one, and the file is written only after the new list is ready.
- **Same data model across demos.** An application is a map in the CLI, the API and the dashboard, so the logic carried over almost unchanged.
- **EDN storage.** The data file is Clojure data, so no database or parsing code is needed for a demo.
- **Small deployment.** One Dockerfile is enough to run the same app locally and on Render.

## What changed since the first version
- Applications are now identified by a unique `id` instead of the company name. Before, two applications at the same company (for example two roles at one company) could not be updated separately.
- Added CORS support so the web dashboard can call the API.
- Added a Dockerfile and deployed to Render.

## Limits and what I would improve
- Data is stored in `applications.edn` inside the container. On many hosts, including Render's free tier, the container filesystem is not persistent, so data can reset when the service restarts or redeploys. A database (Postgres with next.jdbc) or a persistent disk is the next step.
- The API has no authentication, so anyone with the URL can change data. It is a demo and holds no personal data.
- The file is read on every request, which is fine for a demo but not for many users.
- Routing is a simple `case`; Reitit would handle path parameters and validation.
- No automated tests yet (clojure.test).