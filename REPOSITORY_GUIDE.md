# Exotic Co. Repository Guide

Welcome to the internal engineering architecture guide for the Exotic Co. Portfolio v1.0.0.

## 📂 Folder Overview
- `src/app`: The Next.js 14 App Router containing all static and dynamic routes.
- `src/components/layout`: Global architectural components (Navbar, Footer, Providers).
- `src/components/sections`: Large semantic blocks used to compose pages (Hero, Projects, Testimonials).
- `src/components/ui`: Fundamental, reusable Design System primitives (Buttons, Cards, Inputs).
- `src/components/typography`: Strict typographic boundaries (H1, H2, Body, Lead).
- `src/lib/design`: The Exotic Design System source of truth (Tokens, Motion Physics).
- `src/data`: Hardcoded content (projects, services, company data) mimicking a CMS.

## 🏗️ Architecture Overview
The platform leverages React Server Components (RSC) heavily for static rendering. The entire portfolio is pre-compiled using Static Site Generation (SSG) for sub-100ms TTFB. Interactivity is delegated exclusively to specific client components (`"use client"`) usually associated with Framer Motion scroll reveals.

## 🔄 Data Flow
Currently, data is statically defined in `src/data/*.ts`. 
When a dynamic route like `/projects/[slug]` is requested during build time, Next.js executes `generateStaticParams()` to fetch all slugs from `src/data/projects.ts` and compiles them into static HTML files.

## 🎨 Design System Usage
**CRITICAL:** Developers must NEVER use fragmented Tailwind utility classes for colors, shadows, border-radiuses, or easing curves. 
- All layout structure must use primitives from `src/components/layout/`.
- All text must be wrapped in `src/components/typography/` elements.
- All motion must import `exoticMotion` presets or `easePremium` from `src/lib/design/motion.ts`.

## 🛠️ How to Add a New Page
1. Create a new folder inside `src/app/` (e.g., `src/app/careers`).
2. Create `page.tsx` within that folder.
3. Import `<Container>`, `<Section>`, and typography primitives to structure the page.
4. Ensure you export a `generateMetadata` function for SEO compliance.

## 🚀 Deployment Workflow
The `main` branch is locked and protected.
1. Create a `feature/*` branch.
2. Develop locally (`npm run dev`).
3. Ensure absolute strictness (`npm run build`, `npm run lint`).
4. Submit a Pull Request.
5. Upon approval, merging to `main` triggers a zero-downtime Vercel production deployment.
