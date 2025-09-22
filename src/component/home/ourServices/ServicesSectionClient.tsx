"use client";

import { useQuery } from "@tanstack/react-query";
import { ourServicesQueryOptions } from "@/lib/directus/queries";
import type { OurServicesRecord } from "@/types/directus";
import ServicesView from "./ServicesView";

export default function ServicesSectionClient() {
  const { data } = useQuery(ourServicesQueryOptions());
  const row: OurServicesRecord | undefined = data?.data?.[0];

  if (!row) return null;

  return <ServicesView data={row} />;
}
