#no idea if this works
FROM node:8
WORKDIR /app
COPY package*.json ./
# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]