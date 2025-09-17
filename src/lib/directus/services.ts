// src/lib/directus/services.ts
import { fetchJSON } from "./client";
export type OurServices = { id: number; title?: string; subtitle?: string; services_data?: { item: any }[] };

export async function fetchOurServices({ auth }: { auth?: "public" | "server" } = {}) {
  return (
    await fetchJSON<{ data: OurServices[] }>("/items/our_services", {
      fields: ["*","services_data.item.*"].join(","),
      limit: "1",
    }, { auth })
  ).data?.[0] ?? null;
}
