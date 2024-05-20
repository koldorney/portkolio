FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY .. .
# Generalizes Node version.
RUN npm rebuild
RUN npm run build
EXPOSE 3000
CMD ["node", "build"]

