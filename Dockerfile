# Frontend Build Stage
FROM node:18-alpine AS frontend-build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Backend Stage
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY server ./server
COPY --from=frontend-build /app/dist ./dist

EXPOSE 5000
CMD ["node", "server/index.js"]
