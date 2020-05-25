FROM node:10
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .
# COPY . /app

EXPOSE 3000

# CMD node index.js
CMD [ "npm", "start" ]
