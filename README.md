# Real Estate Website

A marketing and lead-generation site for a premium real estate brand. The app is built on **Next.js 15 (App Router)** with **React 18**, server components, and **@tanstack/react-query** for cached data access from a Directus headless CMS.

## Quick Start

1. Install dependencies with `pnpm install` (or `npm install` if you prefer npm).
2. Provide the required environment variables (see below).
3. Run the development server with `pnpm dev`.
4. Visit `http://localhost:3000` to view the site.

### Environment Variables

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_DIRECTUS_URL` | Yes | Base URL of the Directus project (used on client and server). |
| `DIRECTUS_TOKEN` | Optional | Server-side static token for authenticated Directus requests (prefetching, ISR). |
| `NEXT_PUBLIC_DIRECTUS_TOKEN` | Optional | Public read-only token for client-side queries; omit for fully public Directus instances. |

> Configure variables in `.env.local`. Tokens can be omitted if the Directus collection permissions are open for anonymous reads.

## Tech Stack

- Next.js 15 App Router with shared server/client components
- React 18 + TypeScript, Tailwind CSS, Framer Motion animations
- @tanstack/react-query (v5) with server-side prefetch + hydration
- Directus headless CMS for structured content

## Project Structure

The codebase is organised around feature sections, keeping CMS access logic in `src/lib/directus/*` and presentation in `src/component/*`:

- `src/app` – App Router entry points, root layout, and global providers.
- `src/component` – UI sections split into server shells and client views.
- `src/lib/directus` – Fetch utilities, query definitions, and legacy helpers.
- `src/components/ui` – Shared design-system components (Radix UI wrappers, charts, carousels, etc.).

See `docs/architecture.md` for a detailed breakdown and request flow diagrams.

## Documentation

The `docs/` directory contains deeper dives into the major concerns:

- `docs/architecture.md` – Module layout, rendering boundaries, and React Query data flow.
- `docs/cms-integration.md` – Directus configuration, query helpers, and content modelling tips.
- `docs/isr.md` – Incremental Static Regeneration strategy and cache controls.
- `docs/api.md` – High level Directus REST endpoints used by the front-end and example requests.

## Development Workflow

- **Formatting & linting:** the project relies on Next.js/TypeScript defaults. Run `pnpm exec eslint .` once the ESLint config is finalised.
- **Type checking:** `pnpm exec tsc --noEmit`.
- **Build:** `pnpm build` (runs Next.js production build with the current ISR settings).

## Conventions

- Prefer server components for CMS fetch + hydration via React Query wrappers.
- Keep UI logic in client-only files (`"use client"`) and ensure they consume the documented query options.
- When extending CMS content, add new query definitions under `src/lib/directus/queries.ts` for consistency.

For more context or onboarding guidance, start with `docs/architecture.md` and work through the linked topics.
