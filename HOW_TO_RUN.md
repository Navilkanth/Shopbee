# ShopBee — How to Run Guide

This document provides step-by-step instructions to run the **ShopBee** web platform on your local machine.

---

## 📋 System Prerequisites

Ensure you have the following installed:
1. **Node.js**: `v20.0.0` or higher ([Download Node.js](https://nodejs.org/))
2. **npm**: `v10.0.0` or higher (bundled with Node.js)
3. **Docker Desktop** (Recommended for local MySQL 8.4 database)
   - *Alternative*: If you don't use Docker, a locally running MySQL 8 instance on port 3306 is required.

---

## ⚡ Quick Start (Option 1: Full-Stack with Database)

### 1. Configure Environment Variables
Copy `.env.example` to `.env`:

**Windows (PowerShell):**
```powershell
Copy-Item .env.example .env
```
**Windows (CMD):**
```cmd
copy .env.example .env
```
**macOS / Linux:**
```bash
cp .env.example .env
```

### 2. Install Dependencies
Run from the root directory:
```bash
npm install
```

### 3. Start Database (MySQL)
Make sure Docker Desktop is running, then execute:
```bash
docker compose up -d mysql
```

### 4. Setup Database Schema & Seed Data
Generate the Prisma client, apply database migrations, and seed sample catalog data:
```bash
npx prisma generate
npx prisma migrate dev --name init
npx prisma db seed
```

### 5. Launch Development Servers

You will need two terminal windows (or tabs):

- **Terminal 1: Backend API (Express.js - Port 4000)**
  ```bash
  npm run dev:api
  ```
  *Verify API health:* [http://localhost:4000/api/v1/health](http://localhost:4000/api/v1/health)

- **Terminal 2: Frontend Web Storefront (Next.js - Port 3000)**
  ```bash
  npm run dev:web
  ```
  *Open Storefront:* [http://localhost:3000](http://localhost:3000)

---

## 🚀 Quick Preview (Option 2: Frontend Only without Database)

The ShopBee frontend contains built-in fallback data and mock catalog handling. If you want to quickly preview and test the UI without setting up Docker or MySQL:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the Next.js Storefront directly:**
   ```bash
   npm run dev:web
   ```

3. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000). The app will automatically render using the built-in fallback catalog and store content.

---

## 🌐 URLs & Service Endpoints

| Service | Address | Description |
| :--- | :--- | :--- |
| **Storefront Web App** | [http://localhost:3000](http://localhost:3000) | Next.js 15 customer storefront |
| **Backend REST API** | [http://localhost:4000](http://localhost:4000) | Express.js API |
| **API Health Check** | [http://localhost:4000/api/v1/health](http://localhost:4000/api/v1/health) | Verifies server & DB connection |
| **Prisma Studio** | `npx prisma studio` (Port 5555) | GUI database browser |
| **MySQL Database** | `localhost:3306` | User: `shopbee` / Pass: `shopbee` / DB: `shopbee` |

---

## 🛠️ Helpful NPM Scripts

Run these from the repository root:

| Command | Action |
| :--- | :--- |
| `npm run dev:web` | Starts Next.js development server on port 3000 |
| `npm run dev:api` | Starts Express API development server on port 4000 |
| `npm run db:generate` | Generates the Prisma client |
| `npm run db:migrate` | Runs Prisma database migrations |
| `npm run db:push` | Pushes the Prisma schema state directly to database |
| `npm run db:seed` | Seeds the database with sample products and categories |
| `npx prisma studio` | Opens web-based GUI to browse and edit database records |
| `npm run lint` | Runs ESLint across web and API packages |
| `npm run format` | Formats codebase using Prettier |

---

## ❓ Troubleshooting

1. **Port 3306 already in use:**
   - If you already have a local MySQL or MariaDB running on your system, stop the local service or change the port mapping in `docker-compose.yml` (e.g. `"3307:3306"`) and update `DATABASE_URL` in `.env`.

2. **Docker daemon not running:**
   - Launch Docker Desktop before running `docker compose up -d mysql`.

3. **Prisma connection error (`P1001`):**
   - Ensure the MySQL container is healthy by checking `docker ps` or waiting 5–10 seconds after starting the container before running `npx prisma migrate dev`.

