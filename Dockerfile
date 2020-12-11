FROM node:14-alpine

WORKDIR /app

ADD . /app

RUN yarn

CMD yarn start
