FROM node:16

WORKDIR /home/node/app

ENV DB_USER pruebadb_kevin
ENV DB_PASSWORD asdqwe
ENV DB_DATABASE onetoone

COPY . .

RUN npm install

RUN npm run build

RUN rm -rf src && mv dist src

CMD ["npm", "run", "start"]
