FROM node:14.16.0-alpine3.13

RUN addgroup api && adduser -S -G api api
USER api

WORKDIR /api
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 8080

CMD ["npm", "start"]
