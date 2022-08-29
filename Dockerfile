FROM node:latest

WORKDIR /next_app

COPY package.json .


COPY . .

LABEL version="1.0.0"
LABEL maitainer ="ih_djebabria@esi.dz"




CMD npm install ; npm run dev