FROM node:12-alpine
RUN apk --no-cache --virtual build-dependencies add yarn

WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

CMD ["yarn", "start"]