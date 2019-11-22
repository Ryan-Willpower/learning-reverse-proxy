FROM nginx:alpine

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.6.0/wait /wait

RUN chmod +x /wait

ENTRYPOINT /wait && nginx -g "daemon off;"