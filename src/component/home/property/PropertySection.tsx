// src/component/property/PropertySection.tsx (SERVER)
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { featuredPropertiesQueryOptions } from "@/lib/directus/queries";
import PropertySectionClient from "./PropertySectionClient";

export default async function PropertySection() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(featuredPropertiesQueryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PropertySectionClient />
    </HydrationBoundary>
  );
}
