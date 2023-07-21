# Estágio 1: compilando o código da aplicação
FROM node:lts-alpine

WORKDIR /usr/src/app/webapp

COPY package*.json ./

RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install

EXPOSE 4200

CMD ["npm", "start"]
