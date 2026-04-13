# Full Stack Test Task - Solution

## Author: Khaliava Ivan

## Live Demo
**Production Link:** http://3.121.214.102

## Completed Requirements
 - Backend
    - Server: Built a RESTful API using Node.js, Express, and TypeScript.
    - Database: Integrated MongoDB with Mongoose for structured data management.
    - API Endpoint: Implemented GET endpoint to fetch product data dynamically.

 - Docker Integration
    - Containerization: Orchestrated the entire stack (Backend + MongoDB + Frontend) using Docker Compose.
    - Hot Reload: Configured Docker Volumes with Nodemon to ensure instant code updates during development.

 - Frontend Integration
    - Data Fetching: Refactored the provided frontend to replace static mock files with asynchronous API calls to the backend with pagination.
    - Environment Sync: Ensured the frontend correctly communicates with the backend container across the Docker bridge network.

## Tech Stack
 - **Backend**: Node.js, Express.js, TypeScript
 - **ODM**: Mongoose
 - **Database**: MongoDB
 - **Dev Tools**: tsx, nodemon, Docker Compose
 - **Deployment**: AWS (EC2), Nginx, Docker

## Setup & Installation

**install Docker:** https://docs.docker.com/engine/install/

**Option A: Using Make (Linux/macOS/Windows(if installed))**

- `make dev` - Start development environment (Hot Reload enabled).
- `make prod` - Start production simulation (Nginx + Optimized builds).

**Option B: Using NPM (Windows)**
- `npm run docker:dev` - Start development environment (Hot Reload enabled).
- `npm run docker:prod` - Start production simulation (Nginx + Optimized builds).

**Option C: Pure Docker**
- `docker compose up -d --build` - Start development environment (Hot Reload enabled).
- `docker compose -f docker-compose.prod.yml up -d --build` - Start production simulation (Nginx + Optimized builds).

**Development**:
    http://localhost:5173

**Production (Local)**:
    http://localhost

**Production (Live)**:
    http://3.121.214.102
