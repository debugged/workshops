FROM node:16-alpine as development

COPY package*.json ./
RUN npm ci

FROM node:16-alpine As build

COPY package*.json ./
COPY --from=development /node_modules ./node_modules
COPY main.ts tsconfig.json ./
RUN npm run build

FROM node:16-alpine

COPY package*.json ./
COPY --from=development /node_modules ./node_modules
RUN npm prune --production
COPY --from=build /dist/main.js ./

CMD ["node", "main.js"]