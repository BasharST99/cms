// src/component/marketInsights/MarketInsightsSection.tsx (SERVER)
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { marketInsightsQueryOptions } from "@/lib/directus/queries";
import MarketInsightsSectionClient from "./MarketInsightsSectionClient";

export default async function MarketInsightsSection() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(marketInsightsQueryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MarketInsightsSectionClient />
    </HydrationBoundary>
  );
}
