FROM node:16-alpine

WORKDIR /app

COPY ./build .

# INSTALL MODULES
RUN npm install express cors

ENTRYPOINT ["node", "express.js"]