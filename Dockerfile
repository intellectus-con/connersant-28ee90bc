FROM node:22-alpine AS build

# Create app directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy everything and build
COPY . .
RUN npm run build