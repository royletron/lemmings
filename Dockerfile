FROM node

WORKDIR /src

ADD . .

RUN npm install

CMD ["npm", "start"]
