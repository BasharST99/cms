// Server component for Agents with ISR
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import AgentsView from "./AgentsView";
import { areasQueryOptions, agentsQueryOptions } from "@/lib/agents/queries";

export const revalidate = 600;

export default async function AgentsSection({
  title,
  subtitle,
  buttonLabel,
}: {
  title: string;
  subtitle: string;
  buttonLabel: string;
}) {
  const qc = new QueryClient();
  await qc.prefetchQuery(areasQueryOptions());
  await qc.prefetchQuery(
    agentsQueryOptions({ search: "", areaId: "all", cityId: "all", page: 1, pageSize: 4 })
  );

  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <AgentsView title={title} subtitle={subtitle} buttonLabel={buttonLabel} />
    </HydrationBoundary>
  );
}

