// src/component/home/HeroSection.tsx (SERVER)
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { dxGet } from "@/lib/directus/server";
import HeroView from "./HeroView";

const qk = ["hero"] as const;

export default async function HeroSection() {
  const qc = new QueryClient();

  await qc.prefetchQuery({
    queryKey: qk,
    queryFn: () =>
      dxGet<{ data: any[] }>("/items/properties", {
        fields:
          "id,title,boldtitle,subtitle,hero_image,premium_properties,premium_properties_value,expert_agents,expert_agents_value,client_satisfaction,client_satisfaction_value",
        limit: "1",
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <HeroView />
    </HydrationBoundary>
  );
}
