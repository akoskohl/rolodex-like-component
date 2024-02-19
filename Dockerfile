# Use an official Node runtime as the base image
FROM node:16

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Use an official lightweight Node.js runtime as a second stage build
FROM node:16-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Install serve to run your application
RUN npm install -g serve

# Copy build output from the first stage
COPY --from=0 /app/build ./build

# Make port 5000 available to the outside of the Docker container
EXPOSE 5000

# Run the application
CMD ["serve", "-s", "build", "-l", "5000"]