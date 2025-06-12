FROM node:24-alpine

COPY package.json /app/
COPY pages /app/pages
COPY components /app/components
COPY public /app/public
COPY styles /app/styles

WORKDIR /app
RUN npm install 

CMD ["npm", "run", "dev"]