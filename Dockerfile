FROM alpine

RUN apk add npm
RUN npm install -g serve

COPY src /app/src
COPY public /app/public
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

WORKDIR /app
ENV NODE_ENV=production
RUN npm install
CMD npm run build ; cd build/ ; serve