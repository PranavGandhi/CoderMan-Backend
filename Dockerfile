FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .




EXPOSE 3000 5432



CMD ["node", "dist/main" ]