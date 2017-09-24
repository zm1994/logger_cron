FROM node

WORKDIR /app

WORKDIR /tmp
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN npm i -g nodemon
RUN mkdir -p /app && cp -a /tmp/node_modules /app

WORKDIR /app
COPY . /app