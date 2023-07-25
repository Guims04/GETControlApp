# Use a imagem base do Node.js
FROM node:lts-alpine as api

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app/api

# Copie os arquivos de definição de pacote
COPY package*.json ./
COPY tsconfig.json ./
COPY ./prisma ./prisma

# Install Prisma CLI
RUN npm install -g prisma

# Instale as dependências
RUN npm install

# Copie o código fonte da API
COPY . .

# Exponha a porta da API
EXPOSE 3000

# Defina o comando padrão para iniciar a API
RUN npx prisma generate
CMD [ "npm", "run", "start:migrate" ]
