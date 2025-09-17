// src/lib/directus/hero.ts
import { fetchJSON } from "./client";

export type HeroRow = {
  id: string;
  title?: string;
  boldtitle?: string;
  subtitle?: string;
  hero_image?: string | null;
  premium_properties?: string;
  premium_properties_value?: number | string;
  expert_agents?: string;
  expert_agents_value?: number | string;
  client_satisfaction?: string;
  client_satisfaction_value?: number | string;
};

export async function fetchHero({ auth }: { auth?: "public" | "server" } = {}) {
  return (
    (
      await fetchJSON<{ data: HeroRow[] }>(
        "/items/properties",
        {
          fields: [
            "id",
            "title",
            "boldtitle",
            "subtitle",
            "hero_image",
            "premium_properties",
            "premium_properties_value",
            "expert_agents",
            "expert_agents_value",
            "client_satisfaction",
            "client_satisfaction_value",
          ].join(","),
          limit: "1",
        },
        { auth }
      )
    ).data?.[0] ?? null
  );
}
