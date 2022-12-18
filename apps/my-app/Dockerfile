FROM node:16-alpine

ARG NODE_ENV
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy all files, except those in .dockerignore
COPY ./ ./

# Build application
RUN npm run build

# Run application as a non-privileged user
USER node
CMD node --enable-source-maps dist/apps/my-app/main.js
EXPOSE 3000
