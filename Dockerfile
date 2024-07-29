FROM node:18-bullseye

WORKDIR /app
COPY package*.json ./

RUN npm install
RUN npx primsma generate

COPY . .
EXPOSE 3000
CMD npm run dev