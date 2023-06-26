FROM node:16

WORKDIR /app

COPY ./package* ./

RUN npm install -g npm@9.7.2

COPY . . 

RUN npm install uuid@latest

RUN npm install -g npm@9.7.2 pm2

RUN npm install uuid@latest

EXPOSE 3000

CMD pm2 start index.js && pm2 logs
