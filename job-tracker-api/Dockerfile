FROM clojure:temurin-21-tools-deps

WORKDIR /app

COPY deps.edn .

RUN clojure -P

COPY src ./src
COPY applications.edn .

EXPOSE 3000

CMD ["clojure", "-M", "-m", "api.core"]