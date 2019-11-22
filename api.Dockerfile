FROM node:alpine

EXPOSE 5000

ENV NPM_CONFIG_LOGLEVEL info
ENV NODE_ENV production
ENV NODE_PORT 5000
ENV NODE_HOSTNAME 0.0.0.0

WORKDIR /usr/app

# build already app
COPY ./api/dist/ ./dist
COPY ./api/package.json .
COPY ./api/.production.env .

RUN yarn install &&\
  yarn cache clean

RUN apk add --no-cache netcat-openbsd

COPY ./wait-for-mongo.sh .

RUN chmod +x wait-for-mongo.sh

ENTRYPOINT ["/bin/sh", "./wait-for-mongo.sh", "node", "dist/index.js"]