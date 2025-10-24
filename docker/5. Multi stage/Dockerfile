FROM nginx:1.29-alpine3.22

RUN apk add --update 'nodejs~22' 'npm~11'

# TODO: copy dependency definitions and then source code
COPY package*.json .

# download and install dependencies
RUN npm ci

COPY . .

# build static bundle
RUN npm run build

RUN cp -r dist/* /usr/share/nginx/html
RUN cp nginx.conf /etc/nginx/conf.d/default.conf

# nginx image already contains a CMD directive - so not necessary to add here