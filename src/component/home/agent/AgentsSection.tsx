// src/component/agent/AgentsSection.tsx (SERVER)
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { agentsQueryOptions } from "@/lib/directus/queries";
import AgentsSectionClient from "./AgentsSectionClient";

export default async function AgentsSection() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(agentsQueryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AgentsSectionClient />
    </HydrationBoundary>
  );
}
