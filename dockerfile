# Stage 1: Build Angular App
FROM node:16 AS build

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Angular app for production
RUN npm run build --prod

# Stage 2: Serve with Nginx
FROM nginx:alpine

RUN apk update && apk add --no-cache bash


# Copy the built Angular app from the previous stage
COPY --from=build /usr/src/app/dist/frontend-foyer-chambres/ /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/nginx.conf

# Expose the port that Nginx will use
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]