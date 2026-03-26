# Stage 1: Build the application
FROM node:16 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install production and development dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application (if needed)
RUN npm run build

# Stage 2: Create the runnable application image
FROM node:16 AS runner

# Set the working directory
WORKDIR /app

# Copy only the necessary files and folders
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Install only the production dependencies
RUN npm install --only=production

# Expose the application port (set according to your app)
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/index.js"]