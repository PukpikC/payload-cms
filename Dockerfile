FROM node:18.15.0-alpine as base

FROM base as builder

WORKDIR /home/node/app

#RUN wget https://s3.amazonaws.com/rds-downloads/rds-combined-ca-bundle.pem

COPY package*.json ./
COPY rds-combined-ca-bundle.pem ./
COPY . .

RUN yarn install

RUN yarn build

FROM base as runtime

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

WORKDIR /home/node/app
COPY package*.json ./
COPY rds-combined-ca-bundle.pem ./

RUN yarn install --production
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build

EXPOSE 3000

CMD ["node", "dist/server.js"]
