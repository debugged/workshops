FROM node:12-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY main.js .

CMD [ "node", "main.js" ]
