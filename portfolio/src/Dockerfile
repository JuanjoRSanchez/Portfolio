FROM node:latest

WORKDIR /PortfolioPrueba

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]