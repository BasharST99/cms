// src/component/contact/ContactSection.tsx (SERVER)
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { contactQueryOptions } from "@/lib/directus/queries";
import ContactSectionClient from "./ContactSectionClient";

export default async function ContactSection() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(contactQueryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ContactSectionClient />
    </HydrationBoundary>
  );
}
