# =========================
# Stage 1: Build Stage
# =========================
FROM alpine:3.20 AS builder

# Create working directory
WORKDIR /app

# Copy all project files into build stage
COPY . .

# (Optional) You can add minification steps here later
# Example: HTML/CSS/JS optimization tools

# =========================
# Stage 2: Production Stage
# =========================
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from builder stage
COPY --from=builder /app /usr/share/nginx/html

# Security improvement (optional but good practice)
RUN echo "server_tokens off;" >> /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
