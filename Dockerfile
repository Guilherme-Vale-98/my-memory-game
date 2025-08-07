FROM node:20-alpine

WORKDIR /memory-game/

COPY public/ /memory-game/public
COPY src/ /memory-game/src
COPY package.json /memory-game/
COPY tailwind.config.js /memory-game/

RUN npm install

CMD ["npm", "start"]