import { directusFetch } from "@/lib/directus/fetcher";
import type { QueryFunction } from "@tanstack/react-query";

export type Area = { id: string | number; name: string };
export type City = { id: string | number; name: string; area_id: string | number };
export type Agent = {
  id: number | string;
  name: string;
  location?: string;
  sales?: string;
  sales_value?: string;
  experience?: string;
  experience_value?: string;
  specialties?: string;
  specialties_tag1?: string;
  specialties_tag2?: string;
  contact?: string;
  call?: string;
  image?: string | null;
  rating?: number | string;
  city_id?: string | number;
};

export const areasKey = ["areas"] as const;
type AreasFn = QueryFunction<{ data: Area[] }, typeof areasKey>;
export const areasQueryOptions = () => ({
  queryKey: areasKey,
  queryFn: (({ signal }) =>
    directusFetch<{ data: Area[] }>("/items/areas", {
      params: { fields: "id,name", sort: "name" },
      revalidate: 600,
      tags: ["areas"],
      signal,
    })) as AreasFn,
});

export const citiesKey = (areaId: string | number) => ["cities", areaId] as const;
type CitiesFn = QueryFunction<{ data: City[] }, ReturnType<typeof citiesKey>>;
export const citiesQueryOptions = (areaId: string | number) => ({
  queryKey: citiesKey(areaId),
  queryFn: (({ signal }) =>
    directusFetch<{ data: City[] }>("/items/cities", {
      params: {
        fields: "id,name,area_id",
        sort: "name",
        ...(areaId !== "all" ? { "filter[area_id][_eq]": String(areaId) } : {}),
      },
      revalidate: 600,
      tags: ["cities", `area:${areaId}`],
      signal,
    })) as CitiesFn,
});

export type AgentListParams = {
  search?: string;
  areaId?: string | number;
  cityId?: string | number;
  page?: number;
  pageSize?: number;
};

export const agentsKey = (p: AgentListParams) => [
  "agents",
  {
    s: p.search ?? "",
    a: p.areaId ?? "all",
    c: p.cityId ?? "all",
    pg: p.page ?? 1,
    ps: p.pageSize ?? 4,
  },
] as const;

type AgentsFn = QueryFunction<
  { data: Agent[]; meta?: { filter_count?: number; total_count?: number } },
  ReturnType<typeof agentsKey>
>;

export const agentsQueryOptions = (p: AgentListParams) => ({
  queryKey: agentsKey(p),
  queryFn: (({ signal }) =>
    directusFetch<{
      data: Agent[];
      meta?: { filter_count?: number; total_count?: number };
    }>("/items/agents", {
      params: {
        limit: String(p.pageSize ?? 4),
        page: String(p.page ?? 1),
        meta: "filter_count",
        ...(p.search ? { search: p.search } : {}),
        ...(p.cityId && p.cityId !== "all"
          ? { "filter[city_id][_eq]": String(p.cityId) }
          : p.areaId && p.areaId !== "all"
          ? { "filter[city_id][area_id][_eq]": String(p.areaId) }
          : {}),
      },
      revalidate: 600,
      tags: [
        "agents",
        ...(p.areaId ? [`area:${p.areaId}`] : []),
        ...(p.cityId ? [`city:${p.cityId}`] : []),
      ],
      signal,
    })) as AgentsFn,
});

