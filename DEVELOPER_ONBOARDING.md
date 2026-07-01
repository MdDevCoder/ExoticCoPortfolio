# Exotic Co. Developer Onboarding

Welcome to Exotic Co. You are now part of an elite engineering collective. This document will guide you through setting up your local environment and adhering to our production standards.

## 💻 Required Software
- **Node.js**: v18.17.0 or higher.
- **Package Manager**: npm (v9+).
- **IDE**: VS Code (Recommended) with ESLint, Prettier, and Tailwind CSS IntelliSense extensions.
- **Git**: Latest version.

## ⚙️ Installation & Running Locally
1. Clone the repository: `git clone <repo_url>`
2. Install dependencies: `npm install`
3. Spin up the development server: `npm run dev`
4. The application will be running at `http://localhost:3000`.

## 🏗️ Build Commands
Before submitting any Pull Request, you must verify the build integrity:
- `npm run build`: Compiles the Next.js production build using Turbopack. Must complete with zero errors.
- `npm run lint`: Verifies strict ESLint compliance.
- `npx tsc --noEmit`: Verifies TypeScript integrity.

## 📜 Coding Conventions
- **TypeScript Strictness**: We do not use `any` unless explicitly bypassing Framer Motion array typing bugs (which must be accompanied by an `eslint-disable` comment). Interfaces must be defined for all component props.
- **Component Anatomy**: Use functional components. Export default. Destructure props in the function signature.
- **No Magic Numbers**: Avoid hardcoding pixel values. Use Tailwind's token scale.

## 🌿 Branch Strategy & PR Guidelines
- We follow trunk-based development. The `main` branch is the immutable production baseline.
- **Branch Naming**: `feature/<name>`, `bugfix/<name>`, `hotfix/<name>`.
- **Commit Messages**: Must follow Conventional Commits (e.g., `feat: added new CryptiqVerse case study`, `fix: resolved hydration error on mobile nav`).
- **PR Approval**: Requires at least one Senior Architect review, passing CI pipeline, and a perfect Lighthouse score on the Vercel preview deployment.
