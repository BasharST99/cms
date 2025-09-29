"use client";

import { useQuery } from "@tanstack/react-query";
import { investmentToolsQueryOptions } from "@/lib/directus/queries";
import type { InvestmentToolsRecord } from "@/types/directus";
import InvestmentToolsView from "./InvestmentToolsView";

export default function InvestmentToolsSectionClient() {
  const { data } = useQuery(investmentToolsQueryOptions());
  const row: InvestmentToolsRecord | undefined = data?.data?.[0];

  if (!row) return null;

  return <InvestmentToolsView data={row} />;
}
