FROM node:16-alpine

COPY package.json package-lock.json ./

# download dependencies
RUN npm install

COPY . .

CMD ["node", "main.js"]