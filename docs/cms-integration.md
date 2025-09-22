# CMS Integration (Directus)

This project consumes content from a Directus instance. The integration focuses on type-safe fetch helpers, predictable caching, and a clear separation between server and client concerns.

## Environment & Authentication

Set the following variables in `.env.local`:

- `NEXT_PUBLIC_DIRECTUS_URL` – Base URL of the Directus project (e.g. `https://cms.example.com`).
- `DIRECTUS_TOKEN` – Optional server-only token for elevated read access. Used when prefetching data or requesting non-public collections.
- `NEXT_PUBLIC_DIRECTUS_TOKEN` – Optional public token. Client components fall back to unauthenticated requests if omitted.

The shared fetcher in `src/lib/directus/fetcher.ts` chooses the correct token automatically:

- Server components prefer `DIRECTUS_TOKEN`, falling back to the public token.
- Client components use `NEXT_PUBLIC_DIRECTUS_TOKEN` when provided; otherwise they make anonymous requests.

## Fetch Utilities

- `directusFetch` is the low-level helper. It accepts:
  - `path`: Directus REST path (e.g. `/items/properties`).
  - `params`: query string key/value pairs (fields, filter, limit).
  - `revalidate`: seconds passed to `next.revalidate` for ISR.
  - `cache`: optionally override the browser cache policy for client requests.

- `getAssetURL` constructs optimised CDN URLs for Directus assets with width/quality options.

- `src/lib/directus/queries.ts` exports typed query option factories (e.g. `heroQueryOptions`, `contactQueryOptions`). Both server shells and client views import these to keep the request definition and cache key consistent.

## Content Model Mapping

The current site consumes the following collections:

| Collection | Usage |
| --- | --- |
| `properties` | Hero section headline, stats, and hero image. |
| `featured_properties` | Featured property grid, filter metadata, sorting options. |
| `contact` | Contact section copy, form placeholders, service dropdown labels. |
| `expert_agents` | Agent listing (name, stats, specialties, portrait). |
| `market_insights` | Insight cards and supporting stats panels. |
| `our_services` | Services cards (title, subtitle, bullet points, CTA labels). |
| `investment_tools` | ROI calculator copy and marketing CTA content. |
| `footer` | Footer description, logo asset, legal links, social handles, contact info. |

Each query requests a single record (`limit=1`) when the section is designed around a singleton collection. Multi-item grids (agents, properties, insights) are nested within the response via Directus relational fields (`<field>.item.*`).

## Normalisation Layer

Some sections perform light transformation before rendering:

- `PropertySectionClient` converts numeric fields to formatted currency or number strings, resolves asset URLs, and derives filter/sort metadata.
- `ContactSectionClient` reduces the `service_needed` object into a dropdown-friendly array.
- `FooterSectionClient` maps repeated relational data into arrays of links and social handles.

Keep normalisation in the client wrapper so that server components remain focused on prefetch/hydration.

## Assets

When a collection includes file references, pass the asset ID to `getAssetURL(id, { width, quality })`. The helper ensures width/quality queries are appended correctly and gracefully handles missing assets (returns an empty string).

## Adding New Content

1. Create or configure the collection in Directus.
2. Define a new query option in `src/lib/directus/queries.ts` (include the correct `fields` parameter and reasonable `revalidate` window).
3. Prefetch the query in the matching server component.
4. Consume the query option via `useQuery` inside the client component.

This pipeline ensures all sections benefit from the same caching, typing, and authentication guarantees.
