# Code Architecture

This document explains how the Real Estate Website project is structured, how data flows through the app, and how each layer relates to the Directus CMS.

## High-Level Overview

```text
src/
├─ app/                 # Next.js App Router entrypoints
│  ├─ layout.tsx        # Root layout with global providers
│  └─ page.tsx          # Home page composition (server component)
├─ features/            # Feature sections and supporting UI (home, properties, auth, layout, ...)
│  ├─ <feature>/        # Section-specific server + client components
│  └─ ...
├─ components/ui/       # Design system primitives (Radix wrappers, property card atoms, etc.)
├─ hooks/               # Client-side stores/hooks (e.g. `useSession`)
├─ lib/directus/        # CMS fetch helpers and query definitions
└─ imports/             # Static assets (SVG paths, etc.)
```

The app follows a **server-first** approach. Each page-level section loads CMS content on the server, prefetches data into a React Query cache, and hydrates a client component that handles interactivity.

## Rendering Boundaries

- `src/app/page.tsx` is a server component that stitches together feature sections.
- Each `*Section.tsx` under `src/features/*` is a server wrapper that:
  1. Instantiates a `QueryClient`.
  2. Prefetches a CMS query via `src/lib/directus/queries.ts`.
  3. Wraps the interactive client view with `HydrationBoundary`.
- Client views (e.g. `src/features/home/components/hero/HeroView.tsx`, `PropertyListingsClient.tsx`) import the matching query option and call `useQuery`. Their stateful UI (forms, sliders, dialogs) lives entirely client-side.

Two notable client systems build on top of this pattern:

- **Authentication** – `src/features/auth` renders login/signup shells that call `/api/auth/*` routes. They subscribe to the shared `useSession` hook under `src/hooks/useSession.ts`, which keeps navigation and dialogs in sync without full page reloads.
- **Property cards** – `src/components/ui/PropertiesCard/` contains composable atoms for the listing card, detail dialog, and gallery. Server sections still prefetch data, but the client-side card orchestrates media, contact forms, and favourites.

This pattern keeps all Directus access in one place and allows ISR to cache responses while still enabling dynamic UI interactions.

## Data Access Layer

- `src/lib/directus/fetcher.ts` centralises Directus REST calls. It handles:
  - Token negotiation between server (`DIRECTUS_TOKEN`) and public client tokens (`NEXT_PUBLIC_DIRECTUS_TOKEN`).
  - Request cache hints (`cache` for client fetches, `next.revalidate` for ISR).
  - Query parameter serialisation and asset URL helpers.
- `src/lib/directus/queries.ts` exports typed query keys/options for every CMS collection the site consumes. Server and client modules both import from here for consistency.
- Legacy convenience wrappers (`src/lib/directus/server.ts`, `client.ts`) proxy to the shared fetcher to maintain backwards compatibility.

## Feature Modules

Each feature folder under `src/features/` typically contains:

- A server shell: `FeatureSection.tsx`
- A client implementation: `FeatureSectionClient.tsx` or `FeatureView.tsx`
- Any auxiliary UI/utility files needed for the section

For example, the **Property Listings** feature is composed of:

- `src/features/home/components/property/PropertySection.tsx` – server prefetch + hydration.
- `src/features/home/components/property/PropertySectionClient.tsx` – normalises Directus data and renders `PropertyListingsClient`.
- `src/features/home/components/property/PropertyListingsClient.tsx` – interactive grid with filters, dialogs, and modals.
- `src/components/ui/PropertiesCard/` – reusable card primitives (media, summary, detail dialog, gallery) shared by listings and explorer views.

## Global Providers

`src/app/providers.tsx` wraps the entire app with a shared React Query client configured for 60s stale data and no refetch on focus. Additional global providers (themes, analytics) can be added here. Cross-cutting client state (e.g. the auth session store) lives under `src/hooks/` and is consumed via hooks such as `useSession`.

## Styling & UI System

- Tailwind CSS drives most styling (`src/app/globals.css`).
- `src/components/ui/*` contains wrapped Radix primitives, charting tools, and shared buttons/inputs. Many rely on external packages (lucide icons, recharts). Ensure corresponding type packages are installed when running type checks.

## Development Notes

- Type checking: `pnpm exec tsc --noEmit`
- Linting (once ESLint config is finalised): `pnpm exec eslint .`
- Build: `pnpm build`

Refer to `docs/cms-integration.md` for details on the Directus setup, and `docs/isr.md` for caching strategy specifics.
