// src/lib/directus/featured.ts
import { fetchJSON } from "./client";
export async function fetchFeaturedProperties(id = 1, { auth }: { auth?: "public" | "server" } = {}) {
  return (
    await fetchJSON<{ data: any }>(`/items/featured_properties/${id}`, {
      fields: "*,blocks.item.*,properties_list.item.*,sort_by.item.*",
    }, { auth })
  ).data;
}
