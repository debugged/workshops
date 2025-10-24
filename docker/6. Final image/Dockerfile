FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json .

# download and install dependencies
RUN npm ci

COPY . .

# build static bundle
RUN npm run build

FROM nginx:1.29-alpine3.22 AS runtime

COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

# nginx image already contains a CMD directive - so not necessary to add here
