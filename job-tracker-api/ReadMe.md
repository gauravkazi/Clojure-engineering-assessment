# Job Tracker API (Backend)

A small HTTP API, written in Clojure with Ring, that stores and serves my job applications as JSON. It is the backend for the job tracker: the CLI in `../job-tracker-cli` has the same logic, and this API makes it reachable over HTTP so a web page or other programs can use it.

## The problem
I track my job applications in a terminal tool, but a browser page or another program cannot use that. I needed the same data available over HTTP.

## Setup
Requires Java and the Clojure CLI.

    brew install clojure/tools/clojure

Run from inside the `job-tracker-api` folder, because the API reads `applications.edn` from the current folder:

    clojure -M -m api.core

The server starts on http://localhost:3000.

## Endpoints

| Method | Path | What it does |
|---|---|---|
| GET | `/` | Health message |
| GET | `/applications` | List all applications |
| POST | `/applications` | Create an application (status starts as `applied`) |
| PATCH | `/applications` | Change the status of an application |

### Examples (Postman)

Start the server first (`clojure -M -m api.core`), then create each request in Postman.
For the POST and PATCH requests, open the **Body** tab, choose **raw**, and select **JSON** in the dropdown on the right.

#### 1. List all applications

- **Method:** GET
- **URL:** `http://localhost:3000/applications`
- **Body:** none

Expected response: `200 OK`

      [{"company": "Alpha", "role": "Backend engineering", "status": "interview"},
       {"company": "Beta", "role": "Engineering Intern", "status": "interview"},
       {"company": "Gama", "role": "Software Developer", "status": "applied"},
       {"company": "Theta", "role": "Coffee Maker", "status": "applied"},
       {"company": "Holi", "role": "Backend engineering", "status": "applied"},
       {"company": "Holi", "role": "React Developer", "status": "applied"},
       {"company": "spotify", "role": "backend developer", "status": "applied"}]

#### 2. Create an application

- **Method:** POST
- **URL:** `http://localhost:3000/applications`
- **Body (raw, JSON):**

      {"company": "Omega", "role": "Node Developer"}

Expected response: `201 Created`

      {"company": "Omega", "role": "Node Developer", "status": "applied"}

#### 3. Change the status of an application

- **Method:** PATCH
- **URL:** `http://localhost:3000/applications`
- **Body (raw, JSON):**

      {"company": "Gama", "status": "interview"}

Expected response: `200 OK`

      {"company": "Gama", "role": "Software Developer", "status": "interview"}

Valid statuses: `applied`, `interview`, `offer`, `rejected`.

#### 4. Error cases

| Method | Request body | Expected response |
|---|---|---|
| POST | `{"company": "OnlyCompany"}` | `400` company and role are required |
| PATCH | `{"company": "Gama", "status": "banana"}` | `400` status must be one of: applied, interview, offer, rejected |
| PATCH | `{"company": "Nobody", "status": "offer"}` | `404` No application found for: Nobody |

Note: company names must match exactly, including capital letters, and a PATCH updates every application with that company name (for example, both "Holi" entries).

Valid statuses: `applied`, `interview`, `offer`, `rejected`.

### Responses

| Code | Meaning |
|---|---|
| 200 | Success |
| 201 | Application created |
| 400 | Missing fields, broken JSON or invalid status |
| 404 | Unknown route or unknown company |

## Why Clojure and Ring
- **Requests and responses are plain maps.** A handler is just a function from a request map to a response map, so it is easy to read and to test without a server.
- **Immutable data.** Creating or updating returns a new list instead of changing the old one, and the file is only written once the new list is ready.
- **Same data model as the CLI.** The application is a map in both projects, so the logic carried over almost unchanged.
- **EDN storage.** The data file is Clojure data, so no database or parsing code is needed for a demo.

## Limits and what I would improve
- Applications are identified by company name; a real API would use IDs.
- A file is used instead of a database (next.jdbc with SQLite or Postgres would be the next step).
- The file is read on every request, which is fine for a demo but not for many users.
- Routing is a simple `case`; Reitit would handle path parameters and validation.
- No tests yet (clojure.test).