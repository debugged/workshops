FROM node:16-alpine as deps

COPY package.json package-lock.json ./

# download dependencies
RUN npm ci

FROM deps as builder

# copy source code
COPY . .

# compile code
CMD npm run build

FROM node:16-alpine

COPY package.json package-lock.json ./
RUN npm install --production

COPY --from=builder dist ./

CMD [ "node", "main.js" ]