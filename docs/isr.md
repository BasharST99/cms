# Incremental Static Regeneration (ISR)

The Real Estate Website balances fast page loads with near-real-time CMS updates by combining ISR with React Query hydration.

## Why ISR?

- **Marketing site performance:** A largely static landing page benefits from pre-rendered HTML. ISR keeps time-to-first-byte low without sacrificing SEO or metrics.
- **CMS-driven content:** Editors update copy, hero stats, and featured listings via Directus. ISR ensures changes appear automatically after the defined revalidation window, with no manual redeploys.
- **Predictable caching:** Each section declares its own revalidation cadence, matching the expected update frequency (e.g. hero copy changes less often than featured listings).

## Implementation Details

1. Server components call `directusFetch` (via query option factories) with a `revalidate` value.
2. Next.js stores the rendered result and re-fetches the content after the `revalidate` window when traffic hits the page.
3. Prefetched data is dehydrated into React Query, so the client sees a hydrated cache immediately.
4. Client components can still refetch on interaction if the query is configured to do so (default behaviour is to trust the server result for 60s because of the global QueryClient options).

### Example

```ts
// src/lib/directus/queries.ts
export const heroQueryOptions = () => ({
  queryKey: ["hero"],
  queryFn: ({ signal }) => directusFetch("/items/properties", {
    params: { fields: "...", limit: "1" },
    revalidate: 300,
    signal,
  }),
});
```

- The hero section revalidates every 5 minutes (`300` seconds).
- Properties and agents sections use shorter windows (120s/60s) because they change more frequently.
- Contact/footer content revalidate hourly since they are rarely updated.

## Relationship with React Query

- Server-side prefetch + `HydrationBoundary` seeds the cache.
- Client queries inherit the prefetched data and only hit the network if the cache becomes stale according to the QueryClient defaults (`staleTime = 60_000ms`).
- If you need on-demand freshness, override `staleTime` in the query option or call `queryClient.invalidateQueries(queryKey)` after performing a mutation.

## Operational Considerations

- Changes in Directus propagate automatically after the configured revalidate window. For immediate updates, trigger a revalidation hook (e.g. Next.js `revalidateTag`) or temporarily lower the interval.
- Keep revalidation values conservative to avoid excessive Directus load. Collections with hourly or daily changes can use higher numbers (e.g. `3600` or `86400`).
- Ensure your hosting provider (Vercel, etc.) supports ISR. Deploy previews maintain the same behaviour.

Refer back to `docs/cms-integration.md` for guidance on adding new queries with appropriate revalidation settings.
