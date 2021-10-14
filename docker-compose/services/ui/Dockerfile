# build environment
FROM node:16-alpine as base
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm i

COPY . ./

FROM base as dev
CMD ["npm", "start"]

FROM base as build
WORKDIR /app
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]