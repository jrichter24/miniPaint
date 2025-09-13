#Written by Ange Cesari
# Use official Node.js based on Alpine
FROM node:16-alpine

# Create dir for application
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm i

# Copy the rest of the application code
COPY . .

# Expose the port the application will run on
EXPOSE 8080

# Run the application
CMD ["npm", "run", "server"]