# ===== Build Frontend =====
FROM node:16-alpine AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# ===== Build Backend =====
FROM node:16-alpine AS backend-build
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend/ ./

# ===== Final Image =====
FROM node:16-alpine
WORKDIR /app

# Copy backend & frontend build
COPY --from=backend-build /app/backend ./backend
COPY --from=frontend-build /app/frontend/build ./frontend/build

# Install static server
RUN npm install -g serve

EXPOSE 3000 4000

CMD sh -c "node backend/index.js & serve -s frontend/build -l 3000"

