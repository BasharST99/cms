"use client";

import { useQuery } from "@tanstack/react-query";
import { getAssetURL } from "@/lib/directus/client";
import { agentsQueryOptions } from "@/lib/directus/queries";
import type { AgentRecord } from "@/types/directus";
import AgentsView from "./AgentsView";

export default function AgentsSectionClient() {
  const { data } = useQuery(agentsQueryOptions());
  const row: AgentRecord | undefined = data?.data?.[0];

  if (!row) return null;

  const agents = (row.agents ?? []).map(({ item }) => {
    const record = (item ?? {}) as Record<string, any>;
    const imageId = record.image as string | null | undefined;

    return {
      id: record.id,
      name: record.name,
      location: record.location,
      salesLabel: record.sales,
      experienceLabel: record.experience,
      specialtiesLabel: record.specialties,
      specialties: [record.specialties_tag1, record.specialties_tag2].filter(
        (value): value is string => typeof value === "string" && value.length > 0
      ),
      contactLabel: record.contact,
      callLabel: record.call,
      salesValue: record.sales_value,
      experienceValue: record.experience_value,
      imageUrl: getAssetURL(imageId, { width: 200, height: 200, fit: "cover" }),
      rating:
        typeof record.rating === "string"
          ? Number(record.rating)
          : typeof record.rating === "number"
          ? record.rating
          : undefined,
    };
  });

  return (
    <AgentsView
      title={row.title}
      subtitle={row.subtitle}
      buttonLabel={row.agents_button}
      agents={agents}
    />
  );
}
