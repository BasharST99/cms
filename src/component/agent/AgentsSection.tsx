// src/component/agent/AgentsSection.tsx (SERVER)
import { dxGet, getAssetURL } from "@/lib/directus/server";
import AgentsView from "./AgentsView";

type AgentItem = {
  id: number;
  name: string;
  location: string;
  sales: string;
  experience: string;
  specialties: string;
  specialties_tag1?: string;
  specialties_tag2?: string;
  contact: string;
  call: string;
  sales_value: string;
  experience_value: string;
  image?: string | null;
  rating?: string;
};
type ExpertAgentsRow = {
  id: number;
  title: string;
  subtitle: string;
  agents_button: string;
  agents: { item: AgentItem }[];
};

export default async function AgentsSection() {
  const { data } = await dxGet<{ data: ExpertAgentsRow[] }>(
    "/items/expert_agents",
    {
      fields: [
        "id",
        "title",
        "subtitle",
        "agents_button",
        "agents.item.*",
      ].join(","),
      limit: "1",
    },
    60
  );

  const row = data?.[0];
  if (!row) return null;

  const agents = (row.agents ?? []).map(({ item }) => ({
    id: item.id,
    name: item.name,
    location: item.location,
    salesLabel: item.sales,
    experienceLabel: item.experience,
    specialtiesLabel: item.specialties,
    specialties: [item.specialties_tag1, item.specialties_tag2].filter(
      Boolean
    ) as string[],
    contactLabel: item.contact,
    callLabel: item.call,
    salesValue: item.sales_value,
    experienceValue: item.experience_value,
    imageUrl: getAssetURL(item.image, {
      width: 200,
      height: 200,
      fit: "cover",
    }),
    rating: item.rating ? Number(item.rating) : undefined,
  }));

  return (
    <AgentsView
      title={row.title}
      subtitle={row.subtitle}
      buttonLabel={row.agents_button}
      agents={agents}
    />
  );
}
