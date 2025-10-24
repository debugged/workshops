FROM nginx:1.29-alpine3.22

RUN apk add --update 'nodejs~22' 'npm~11'

# TODO: copy dependency definitions and then source code
COPY . .

# download and install dependencies
RUN npm ci

# build static bundle
RUN npm run build

# copy bundle to nginx directory
COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# nginx image already contains a CMD directive - so not necessary to add here
