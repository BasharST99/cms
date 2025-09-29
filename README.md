# Real Estate Website

A marketing and lead-generation site for a premium real estate brand. The app is built on **Next.js 15 (App Router)** with **React 18**, server components, and **@tanstack/react-query** for cached data access from a Directus headless CMS. Recent updates include a Directus-backed authentication flow (signup/login/logout + session refresh) and a modular property card system with richer detail dialogs.

## Quick Start

1. Install dependencies with `pnpm install` (or `npm install` if you prefer npm).
2. Provide the required environment variables (see below).
3. Run the development server with `pnpm dev`.
4. Visit `http://localhost:3000` to view the site.

### Environment Variables

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_DIRECTUS_URL` | Yes | Base URL of the Directus project (used on client and server). |
| `DIRECTUS_URL` | Yes | Server-side Directus base URL (used by Next.js API routes for auth/session). |
| `DIRECTUS_TOKEN` | Optional | Server-side static token for authenticated Directus requests (prefetching, ISR). |
| `NEXT_PUBLIC_DIRECTUS_TOKEN` | Optional | Public read-only token for client-side queries; omit for fully public Directus instances. |

> Configure variables in `.env.local`. Tokens can be omitted if the Directus collection permissions are open for anonymous reads.

## Tech Stack

- Next.js 15 App Router with shared server/client components
- React 18 + TypeScript, Tailwind CSS, Framer Motion animations
- @tanstack/react-query (v5) with server-side prefetch + hydration
- Directus headless CMS for structured content
- Directus auth endpoints surfaced via custom Next.js API routes (`/api/auth/*`)

## Project Structure

The codebase is organised around feature sections, keeping CMS access logic in `src/lib/directus/*` and presentation in `src/features/*`:

- `src/app` – App Router entry points, root layout, and global providers (including auth API routes under `src/app/api/auth`).
- `src/features` – UI sections split into server shells and client views (now includes `auth/` for login/signup screens and shared shells).
- `src/lib/directus` – Fetch utilities, query definitions, and legacy helpers.
- `src/hooks` – Client utilities such as the shared `useSession` store used across navigation and auth views.
- `src/components/ui` – Shared design-system components (Radix UI wrappers, charts, carousels, etc.), including the modular `PropertiesCard/` folder introduced by the latest refactor.

See `docs/architecture.md` for a detailed breakdown and request flow diagrams.

## Authentication

User authentication is handled via Next.js API routes that proxy to Directus:

- `POST /api/auth/signup` – Registers a Directus user and redirects to login on success.
- `POST /api/auth/login` – Exchanges credentials for Directus access/refresh tokens and stores them as HTTP-only cookies.
- `POST /api/auth/logout` – Revokes the refresh token server-side and clears cookies.
- `POST /api/auth/refresh` – Swaps a refresh token for a new access token (used by the session endpoint).
- `GET /api/auth/session` – Fetches the current user profile, automatically refreshing tokens when possible.

Client components rely on the `useSession` hook (`src/hooks/useSession.ts`) which keeps an in-memory store in sync with the session endpoint so navigation and auth flows update instantly without page reloads.

## UI Highlights

- The property listing card has been decomposed into dedicated subcomponents (`CardMedia`, `CardSummary`, `PropertyDetailsDialog`, `PropertyGalleryDialog`) under `src/components/ui/PropertiesCard/`, making it easier to extend the detail view, gallery, or contact form independently.
- Navigation conditionally renders auth actions based on the shared session store and exposes a responsive logout button that invalidates Directus tokens.

## Documentation

The `docs/` directory contains deeper dives into the major concerns:

- `docs/architecture.md` – Module layout, rendering boundaries, and React Query data flow.
- `docs/cms-integration.md` – Directus configuration, query helpers, and content modelling tips.
- `docs/isr.md` – Incremental Static Regeneration strategy and cache controls.
- `docs/api.md` – High level Directus REST endpoints used by the front-end and example requests.

## Development Workflow

- **Formatting & linting:** run `pnpm lint` (ESLint) before submitting changes.
- **Type checking:** `pnpm exec tsc --noEmit`.
- **Build:** `pnpm build` (runs Next.js production build with the current ISR settings).

## Conventions

- Prefer server components for CMS fetch + hydration via React Query wrappers.
- Keep UI logic in client-only files (`"use client"`) and ensure they consume the documented query options.
- When extending CMS content, add new query definitions under `src/lib/directus/queries.ts` for consistency.

For more context or onboarding guidance, start with `docs/architecture.md` and work through the linked topics.
