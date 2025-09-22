// src/component/home/HeroSection.tsx (SERVER)
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { investHeroQueryOptions } from "@/lib/directus/queries";
import HeroView from "./HeroView";

export default async function HeroSection() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(investHeroQueryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HeroView />
    </HydrationBoundary>
  );
}
