// src/component/ourServices/OurServicesSection.tsx (SERVER)
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { ourServicesQueryOptions } from "@/lib/directus/queries";
import ServicesSectionClient from "./ServicesSectionClient";

export default async function ServicesSection() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(ourServicesQueryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ServicesSectionClient />
    </HydrationBoundary>
  );
}
