# Stage 1: Builder
FROM alpine:3.20 AS builder

WORKDIR /app
COPY . .

# Stage 2: Nginx runtime
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Remove default files
RUN rm -rf ./*

# Copy project
COPY --from=builder /app .

# Expose port
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]
