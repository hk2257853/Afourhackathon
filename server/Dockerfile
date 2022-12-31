FROM node:latest
WORKDIR /usr/src/app
COPY ./package* ./
RUN npm install
COPY . .
EXPOSE 1300
CMD [ "index.js" ]