FROM node:alpine

WORKDIR /src
COPY package.json .
RUN yarn install --only=prod
COPY . .

CMD ["yarn", "start-dev"]