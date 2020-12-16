FROM node:15-alpine as samus

WORKDIR /home/build

COPY . .

RUN npm i

RUN npm run build

FROM nginx:1.19.5

WORKDIR /usr/share/nginx/html

COPY --from=samus /home/build/public .

EXPOSE 80