# Job Application Tracker (CLI) Demo 1

A small command-line tool, written in Clojure and run with Babashka, for tracking job applications.

## The problem
When applying for junior developer roles, I lose track of where I applied and what stage each application is in. I wanted a fast tool that lives in the terminal where I already work.

## Usage
    bb job.clj list [status]
    bb job.clj add <company> <role>
    bb job.clj status <company> <new-status>

Statuses: applied, interview, offer, rejected.

## Why Clojure and Babashka
- **Data, not classes:** each application is a plain map, and the whole app is functions over a list of maps.
- **Immutability:** adding or updating returns a new list instead of mutating the old one, so a bug cannot corrupt data halfway through.
- **EDN storage:** the data file is Clojure data, so it is read and written with no parsing code or extra libraries.
- **Babashka:** the script starts in milliseconds, which makes a CLI feel instant, unlike a normal JVM startup.
- **REPL-driven development:** I built each function and tested it live before wiring it to the command line.

## What I would improve
- Delete command and search.
- Date applied and notes fields.
- Tests with clojure.test.

## Setup
Requires [Babashka](https://github.com/babashka/babashka). On macOS:

    brew install borkdude/brew/babashka

Run every command from inside the `job-tracker-cli` folder, because the tool reads and writes `applications.edn` in the current folder:

    cd job-tracker-cli

## Commands

### List all applications

    bb job.clj list

Example output:

    Acme - Junior Developer - applied
    Globex - Backend Intern - interview

### List applications by status

    bb job.clj list applied
    bb job.clj list interview
    bb job.clj list offer
    bb job.clj list rejected

### Add a new application

    bb job.clj add <company> <role>

Example:

    bb job.clj add "Spotify" "Backend Developer"

The new application is saved with the status `applied`. Use quotes when the company or role has more than one word.

### Change the status of an application

    bb job.clj status <company> <new-status>

Example:

    bb job.clj status Spotify interview

Valid statuses: `applied`, `interview`, `offer`, `rejected`.
The company name must match exactly (it is case-sensitive).

### Show help

    bb job.clj

Running the tool with no command, or an unknown command, prints the usage message.

## Typical workflow

    bb job.clj add "Spotify" "Backend Developer"   # applied today
    bb job.clj status Spotify interview            # got an interview
    bb job.clj status Spotify offer                # got an offer
    bb job.clj list offer                          # see all offers

## Error handling

- Invalid status: `bb job.clj status Spotify banana` prints the list of valid statuses.
- Unknown company: `bb job.clj status Nobody offer` prints `No application found for: Nobody`.
- Missing arguments: prints the usage message instead of crashing.

## Data
Applications are stored as plain Clojure data in `applications.edn`. You can open it in any editor, but the commands above are the safer way to change it.