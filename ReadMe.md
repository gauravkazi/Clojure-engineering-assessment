# Clojure Engineering Assessment

Demos built with Clojure and its ecosystem, all around one real problem: tracking my job applications while I look for a junior developer role.

Each demo has its own folder and its own README with setup steps.

## Demos

| # | Demo | Folder | Stack |
|---|---|---|---|
| 1 | CLI tool | [`job-tracker-cli`](job-tracker-cli) | Clojure, Babashka |
| 2 | Backend API | [`job-tracker-api`](job-tracker-api) | Clojure, Ring, Jetty, jsonista |

`hello` is my first practice program and is not part of the assessment.

## The problem

When I apply for jobs, I lose track of where I applied and what stage each application is in. Each demo solves a part of that problem in a different way, and the later demos build on the earlier ones.

## How the demos connect

```
CLI (terminal)  ->  Backend API (HTTP + JSON)
```

- **CLI:** the logic lives here first. Applications are plain Clojure maps saved in an `.edn` file. You can add an application, list them (optionally by status) and change a status.
- **Backend API:** the same idea made available over HTTP. A request comes in as a map, and a handler returns a response map. It supports listing, creating and changing the status of applications, with proper status codes for errors.

The application is the same map in both demos, so the logic carried over almost unchanged. Only the way it is called changed, from a terminal command to an HTTP request.

## Quick start

### Demo 1: CLI

    cd job-tracker-cli
    bb job.clj list
    bb job.clj add "Spotify" "Backend Developer"
    bb job.clj status Spotify interview

Requires [Babashka](https://github.com/babashka/babashka).

### Demo 2: Backend API

    cd job-tracker-api
    clojure -M -m api.core

The server starts on http://localhost:3000. See the demo's README for the endpoints and Postman examples.

Requires Java and the Clojure CLI.

## Why Clojure for this

- **Data over classes.** An application is just a map, and the programs are functions over lists of maps.
- **Immutability.** Adding or updating returns a new value, and the data file is written only after the new value is ready.
- **One data format.** EDN is Clojure data, so reading and writing the data file needs no parsing code.
- **Right tool per job.** Babashka starts in milliseconds, which suits a CLI, and the JVM with Ring suits a long-running server.
- **REPL-driven development.** I built and tested functions interactively before wiring them to a command or a route.

## What I would improve

- Identify applications by ID instead of company name.
- Store data in a database instead of a file.
- Add automated tests with `clojure.test`.
- Share one data layer between the CLI and the API.

## Planned

More demos will be added to this repository.