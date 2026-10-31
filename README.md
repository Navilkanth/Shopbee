<<<<<<< HEAD
# Shopbee
ShopBee is a next-generation fashion e-commerce and retail management platform designed to transform the traditional clothing shopping experience into a modern, interactive digital experience.
=======
# ShopBee

Premium fashion e-commerce platform (Phase 1 foundation): Next.js storefront, Express REST API, MySQL, Prisma.

Tagline: **Shop Your Style. Explore Beyond Fashion.**

Currency: INR · Time zone for display: Asia/Kolkata · API timestamps: UTC.

## What Phase 1 includes

- Monorepo with `apps/web`, `apps/api`, `packages/shared`
- Design system (cream / ink / gold), sticky navigation, footer from store settings
- Animated homepage intro (skipped after first view in a session; respects `prefers-reduced-motion`)
- Category listing pages and product detail pages loaded from MySQL through `/api/v1`
- Seed catalog (development data only — not live shop inventory)
- Placeholder shells for cart, checkout, account, wholesale, festival offers, and 3D store

## What is not in Phase 1

Checkout, Razorpay, Shiprocket, wholesale pricing, admin analytics, and the interactive 3D store.

## Requirements

- Node.js 20+
- Docker Desktop (for local MySQL 8). If Docker is not installed, install it, then run `docker compose up -d mysql` before migrating.
- npm 10+

## Setup

```bash
cd shopbee
copy .env.example .env
docker compose up -d mysql
npm install
npx prisma generate
npx prisma migrate dev --name init
npx prisma db seed
```

On macOS/Linux use `cp .env.example .env`.

### Run

```bash
npm run dev:api
npm run dev:web
```

- Storefront: http://localhost:3000
- API health: http://localhost:4000/api/v1/health

## Environment variables

See `.env.example`. Phase 1 needs:

- `DATABASE_URL`
- `API_PORT` (default 4000)
- `CORS_ORIGIN` (default `http://localhost:3000`)
- `NEXT_PUBLIC_API_URL` / `API_URL`

Cloudinary, Razorpay, and Shiprocket keys are unused until later phases.

## Seed accounts (development only)

- Email: `dev.customer@shopbee.local`
- Password: `ShopBeeDev!123`

Authentication is not wired in Phase 1.

## Image attribution

Hero and product photos are Unsplash URLs used for development. Replace with Cloudinary-hosted shop photography before production.

## Placeholder business copy

About, address, hours, and policies are marked PLACEHOLDER until the shop supplies verified details. Do not treat them as facts.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev:web` | Next.js on port 3000 |
| `npm run dev:api` | Express on port 4000 |
| `npx prisma migrate dev` | Apply migrations |
| `npx prisma db seed` | Load seed catalog |
| `npx prisma studio` | Inspect MySQL |
>>>>>>> 25769fe (feat: complete ShopBee luxury e-commerce platform with 20+ year heritage, 3D store, and full catalog)
