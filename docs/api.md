# API Documentation

The frontend communicates with two categories of endpoints:

1. **Directus REST API** – retrieves CMS content via `/items/<collection>` routes.
2. **Internal API routes** – currently limited to a placeholder `/api/contact` POST (to be implemented).

## Directus Endpoints

The table below summarises the collections consumed by the site and the helper used to access them.

| Collection | Endpoint | Query Helper | Notes |
| --- | --- | --- | --- |
| `properties` | `/items/properties` | `heroQueryOptions()` | Fetches hero headline, stats, and hero image (limit 1). |
| `featured_properties` | `/items/featured_properties/1` | `featuredPropertiesQueryOptions()` | Retrieves a single featured set with nested `blocks`, `properties_list`, and `sort_by` relations. |
| `contact` | `/items/contact` | `contactQueryOptions()` | Returns contact copy, form placeholders, and `service_needed` options (limit 1). |
| `expert_agents` | `/items/expert_agents` | `agentsQueryOptions()` | Supplies agent roster and CTA text (limit 1). |
| `market_insights` | `/items/market_insights` | `marketInsightsQueryOptions()` | Insight cards + supporting stats (limit 1). |
| `our_services` | `/items/our_services` | `ourServicesQueryOptions()` | Services cards content (limit 1). |
| `investment_tools` | `/items/investment_tools` | `investmentToolsQueryOptions()` | ROI calculator messaging (limit 1). |
| `footer` | `/items/footer` | `footerQueryOptions()` | Footer logo asset, legal links, socials, locations (limit 1). |

### Example Request (Server Side)

```ts
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { heroQueryOptions } from "@/lib/directus/queries";

const queryClient = new QueryClient();
await queryClient.prefetchQuery(heroQueryOptions());
const state = dehydrate(queryClient);
```

`directusFetch` (used under the hood) applies authentication tokens and sets the `next.revalidate` header according to the query option.

### Example Request (Client Side)

```ts
import { useQuery } from "@tanstack/react-query";
import { heroQueryOptions } from "@/lib/directus/queries";

export function HeroView() {
  const { data } = useQuery(heroQueryOptions());
  const row = data?.data?.[0];
  // render UI...
}
```

If you need an ad-hoc fetch outside React Query, call `directusFetch` directly:

```ts
import { directusFetch } from "@/lib/directus/fetcher";

const response = await directusFetch("/items/custom_collection", {
  params: { fields: "*,relation.item.*", filter: JSON.stringify({ status: "published" }) },
  revalidate: 600,
});
```

## Authentication

- Server requests prefer `DIRECTUS_TOKEN`, falling back to `NEXT_PUBLIC_DIRECTUS_TOKEN` or anonymous access.
- Client requests use `NEXT_PUBLIC_DIRECTUS_TOKEN` when present.
- For collections requiring elevated permissions, provide a read-only role tied to the server token.

## Internal API Routes

- `POST /api/contact` (client stub). The contact form currently posts to this path, but the API route is not implemented yet. Add a handler under `src/app/api/contact/route.ts` to forward submissions to Directus, email, or any CRM of your choice.

### Suggested Handler Skeleton

```ts
// src/app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();
  // TODO: validate payload and forward to Directus / external service.
  return NextResponse.json({ ok: true });
}
```

Remember to update the form success/error handling in `ContactView` once the endpoint is live.
