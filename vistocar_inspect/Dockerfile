ARG NODE_VERSION=11-alpine
FROM node:${NODE_VERSION}

# Copy dependency definitions
ADD ["package*.json", "/sources/"]

# Change directory so that our commands run inside this new directory
WORKDIR /sources/

# Install dependecies
RUN npm ci

# Get all the code needed to run the app
ADD . /sources/

# Expose the port the app runs in
EXPOSE 8100 8200

# Serve the app
CMD ["npm", "run", "start-lab"]
