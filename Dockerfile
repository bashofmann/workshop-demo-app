FROM registry.suse.com/bci/nodejs:16

WORKDIR /app

COPY package*.json /app/

RUN npm install --omit=dev

COPY . /app

CMD ["node", "/app/index.js"]
