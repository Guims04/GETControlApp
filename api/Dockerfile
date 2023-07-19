# Use a imagem base do Node.js
FROM node:lts-alpine as api

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app/api

# Copie os arquivos de definição de pacote
COPY package*.json ./
COPY prisma ./prisma/

# Instale as dependências
RUN npm install

# Copie o código fonte da API
COPY . .


FROM node:lts-alpine

COPY --from=api /usr/src/app/api/node_modules ./node_modules
COPY --from=api /usr/src/app/api/package*.json ./
COPY --from=api /usr/src/app/api ../
COPY --from=api /usr/src/app/api/prisma ./prisma

# Exponha a porta da API
EXPOSE 3000

# Defina o comando padrão para iniciar a API
CMD [  "npm", "run", "start:migrate:prod" ]
