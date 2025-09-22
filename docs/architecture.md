# Code Architecture

This document explains how the Real Estate Website project is structured, how data flows through the app, and how each layer relates to the Directus CMS.

## High-Level Overview

```text
src/
├─ app/                 # Next.js App Router entrypoints
│  ├─ layout.tsx        # Root layout with global providers
│  └─ page.tsx          # Home page composition (server component)
├─ component/           # Feature sections and supporting UI
│  ├─ <feature>/        # Section-specific server + client components
│  └─ ...
├─ components/ui/       # Design system primitives (Radix wrappers, etc.)
├─ lib/directus/        # CMS fetch helpers and query definitions
└─ imports/             # Static assets (SVG paths, etc.)
```

The app follows a **server-first** approach. Each page-level section loads CMS content on the server, prefetches data into a React Query cache, and hydrates a client component that handles interactivity.

## Rendering Boundaries

- `src/app/page.tsx` is a server component that stitches together feature sections.
- Each `*Section.tsx` under `src/component/*` is a server wrapper that:
  1. Instantiates a `QueryClient`.
  2. Prefetches a CMS query via `src/lib/directus/queries.ts`.
  3. Wraps the interactive client view with `HydrationBoundary`.
- Client views (e.g. `src/component/home/HeroView.tsx`, `PropertyListingsClient.tsx`) import the matching query option and call `useQuery`. Their stateful UI (forms, sliders, dialogs) lives entirely client-side.

This pattern keeps all Directus access in one place and allows ISR to cache responses while still enabling dynamic UI interactions.

## Data Access Layer

- `src/lib/directus/fetcher.ts` centralises Directus REST calls. It handles:
  - Token negotiation between server (`DIRECTUS_TOKEN`) and public client tokens (`NEXT_PUBLIC_DIRECTUS_TOKEN`).
  - Request cache hints (`cache` for client fetches, `next.revalidate` for ISR).
  - Query parameter serialisation and asset URL helpers.
- `src/lib/directus/queries.ts` exports typed query keys/options for every CMS collection the site consumes. Server and client modules both import from here for consistency.
- Legacy convenience wrappers (`src/lib/directus/server.ts`, `client.ts`) proxy to the shared fetcher to maintain backwards compatibility.

## Feature Modules

Each feature folder under `src/component/` typically contains:

- A server shell: `FeatureSection.tsx`
- A client implementation: `FeatureSectionClient.tsx` or `FeatureView.tsx`
- Any auxiliary UI/utility files needed for the section

For example, the **Property Listings** feature is composed of:

- `src/component/property/PropertySection.tsx` – server prefetch + hydration.
- `src/component/property/PropertySectionClient.tsx` – normalises Directus data and renders `PropertyListingsClient`.
- `src/component/property/PropertyListingsClient.tsx` – interactive grid with filters, dialogs, and modals.

## Global Providers

`src/app/providers.tsx` wraps the entire app with a shared React Query client configured for 60s stale data and no refetch on focus. Additional global providers (themes, analytics) can be added here.

## Styling & UI System

- Tailwind CSS drives most styling (`src/app/globals.css`).
- `src/components/ui/*` contains wrapped Radix primitives, charting tools, and shared buttons/inputs. Many rely on external packages (lucide icons, recharts). Ensure corresponding type packages are installed when running type checks.

## Development Notes

- Type checking: `pnpm exec tsc --noEmit`
- Linting (once ESLint config is finalised): `pnpm exec eslint .`
- Build: `pnpm build`

Refer to `docs/cms-integration.md` for details on the Directus setup, and `docs/isr.md` for caching strategy specifics.
