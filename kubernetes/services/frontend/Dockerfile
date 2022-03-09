### STAGE 1: Build ###
FROM node:16-alpine AS deps

### Change workdir
WORKDIR /usr/src/app

### Install packages
COPY package.json package-lock.json ./
RUN npm ci

### Copy source code
COPY . .

# Dev environment build
FROM deps as dev
CMD ["npm", "start"]

# Prod environment build
FROM deps as build

### Change workdir
WORKDIR /usr/src/app

## Build the angular app in production mode and store the artifacts in dist folder
RUN $(npm bin)/ng build --configuration production

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/default.conf

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From ‘build’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=build /usr/src/app/dist/kubernetes-workshop /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]