FROM node:16-alpine

# TODO: copy dependency definitions and then source code
COPY . .

# download dependencies
RUN npm install

CMD ["node", "main.js"]