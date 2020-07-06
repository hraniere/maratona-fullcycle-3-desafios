FROM node:12.14.1-alpine3.10

WORKDIR /usr/src/app

COPY . .

RUN npm i

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]