FROM mhart/alpine-node:16 as build
WORKDIR /app
COPY . .
RUN npm i
RUN npm run tailwind:build && \
    npm run build

FROM mhart/alpine-node:slim-16
WORKDIR /app
COPY --from=build /app/build /app/build
COPY --from=build /app/package.json /app
RUN ls -la
EXPOSE 3000
ENTRYPOINT [ "node", "/app/build" ]