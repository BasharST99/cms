// src/component/footer/FooterSection.tsx (SERVER)
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { footerQueryOptions } from "@/lib/directus/queries";
import FooterSectionClient from "./FooterSectionClient";

export default async function FooterSection() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(footerQueryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FooterSectionClient />
    </HydrationBoundary>
  );
}
