FROM nginx:1.19.5

WORKDIR /usr/share/nginx/html

COPY . .


EXPOSE 80