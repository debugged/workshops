FROM node:16-alpine

COPY . .

# download dependencies
RUN npm install

# expose port 3000 (only for inter-communication)
# EXPOSE 3000

CMD ["node", "main.js"]

# use [docker run -p 3000 ...] to expose this port locally (this will bind to random port locally)
# use [docker run -p 4000:3000 ...] to expose this port locally on port 4000