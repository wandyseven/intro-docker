FROM node:22-bookworm

WORKDIR /app 

#COPY <host-path> <container-path>
COPY package*.json ./

#Install dependencies
RUN npm install 

COPY . .

CMD ["npm","start"]