// src/component/investmentTools/InvestmentToolsSection.tsx (SERVER)
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { investmentToolsQueryOptions } from "@/lib/directus/queries";
import InvestmentToolsSectionClient from "./InvestmentToolsSectionClient";

export default async function InvestmentToolsSection() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(investmentToolsQueryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <InvestmentToolsSectionClient />
    </HydrationBoundary>
  );
}
