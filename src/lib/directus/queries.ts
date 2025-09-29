import {
  directusFetch,
  type DirectusItemResponse,
  type DirectusListResponse,
} from "./fetcher";
import type { QueryFunction } from "@tanstack/react-query";
import type {
  AgentRecord,
  ContactRecord,
  FeaturedPropertyRecord,
  FooterRecord,
  HeroRecord,
  InvestHeroRecord,
  InvestmentToolsRecord,
  MarketInsightRecord,
  OurServicesRecord,
} from "@/types/directus";

export type {
  AgentRecord,
  ContactRecord,
  FeaturedPropertyRecord,
  FooterRecord,
  HeroRecord,
  InvestHeroRecord,
  InvestmentToolsRecord,
  MarketInsightRecord,
  OurServicesRecord,
} from "@/types/directus";

export const heroQueryKey = ["hero"] as const;
type HeroQueryFn = QueryFunction<
  DirectusListResponse<HeroRecord>,
  typeof heroQueryKey
>;
export const heroQueryOptions = () => ({
  queryKey: heroQueryKey,
  queryFn: (({ signal }) =>
    directusFetch<DirectusListResponse<HeroRecord>>("/items/properties", {
      params: {
        fields:
          "id,title,boldtitle,subtitle,hero_image,premium_properties,premium_properties_value,expert_agents,expert_agents_value,client_satisfaction,client_satisfaction_value",
        limit: "1",
      },
      revalidate: 300,
      signal,
    })) as HeroQueryFn,
});

export const featuredPropertiesQueryKey = ["featured-properties"] as const;
type FeaturedPropertiesQueryFn = QueryFunction<
  DirectusItemResponse<FeaturedPropertyRecord[]>, // 👈 array of records
  typeof featuredPropertiesQueryKey
>;

export const featuredPropertiesQueryOptions = () => ({
  queryKey: featuredPropertiesQueryKey,
  queryFn: (({ signal }) =>
    directusFetch<DirectusItemResponse<FeaturedPropertyRecord[]>>(
      "/items/featured_properties",
      {
        params: {
          fields:
            "*,blocks.item.*,properties_list.item.*,sort_by.item.*,blocks.item.agent_id.name,blocks.item.city_id.name,blocks.item.areas_id.name,blocks.item.properties_list_features.item.feature,blocks.item.image_list.*,blocks.item.properties_list_special.item.feature",
        },
        revalidate: 120,
        signal,
      }
    )) as FeaturedPropertiesQueryFn,
});

// Properties page: full list
export const propertiesListQueryKey = ["properties-list"] as const;
type PropertiesListQueryFn = QueryFunction<
  DirectusListResponse<any>,
  typeof propertiesListQueryKey
>;

export const propertiesListQueryOptions = () => ({
  queryKey: propertiesListQueryKey,
  queryFn: (({ signal }) =>
    directusFetch<DirectusListResponse<any>>("/items/Properties_list", {
      params: {
        fields: "*,agent_id.*,city_id.*,areas_id.*",
      },
      revalidate: 120,
      signal,
    })) as PropertiesListQueryFn,
});

// Server-side filtered + paginated search for Properties_list
export type PropertiesSearchParams = {
  page: number;
  pageSize: number;
  type?: string; // 'all' or exact match
  minBeds?: number;
  minBaths?: number;
  sort?:
    | "price_low"
    | "price_high"
    | "beds_low"
    | "beds_high"
    | "baths_low"
    | "baths_high"
    | "sqft";
  areaSearch?: string;
};

export const propertiesSearchQueryKey = (p: PropertiesSearchParams) =>
  [
    "properties-search",
    p.page,
    p.pageSize,
    p.type ?? "all",
    p.minBeds ?? 0,
    p.minBaths ?? 0,
    p.sort ?? "price_low",
    p.areaSearch?.toLowerCase().trim() ?? "",
  ] as const;

type PropertiesSearchQueryFn = QueryFunction<
  DirectusListResponse<any> & { meta?: Record<string, any> },
  ReturnType<typeof propertiesSearchQueryKey>
>;

export const propertiesSearchQueryOptions = (p: PropertiesSearchParams) => {
  const offset = Math.max(0, (p.page - 1) * p.pageSize);

  let sortField = "subprice"; // numeric price field fallback
  switch (p.sort) {
    case "price_low":
      sortField = "subprice";
      break;
    case "price_high":
      sortField = "-subprice";
      break;
    case "beds_low":
      sortField = "bedrooms_value";
      break;
    case "beds_high":
      sortField = "-bedrooms_value";
      break;
    case "baths_low":
      sortField = "bathrooms_value";
      break;
    case "baths_high":
      sortField = "-bathrooms_value";
      break;
    case "sqft":
      sortField = "-sq_ft_value";
      break;
    default:
      sortField = "subprice";
      break;
  }

  const params: Record<string, string> = {
    fields:
      "id,image,title,bedrooms,sq_ft_value,bathrooms_value,value,areas_id.*,properties_list_features.item.feature,lat,lon",
    limit: String(p.pageSize),
    offset: String(offset),
    sort: sortField,
    meta: "filter_count",
  };

  if (p.type && p.type !== "all") {
    params["filter[properties_list_2][_eq]"] = p.type;
  }
  if (p.minBeds && p.minBeds > 0) {
    params["filter[bedrooms_value][_gte]"] = String(p.minBeds);
  }
  if (p.minBaths && p.minBaths > 0) {
    params["filter[bathrooms_value][_gte]"] = String(p.minBaths);
  }
  if (p.areaSearch && p.areaSearch.trim().length > 0) {
    const search = p.areaSearch.trim();
    params["filter[_or][0][areas_id][name][_icontains]"] = search;
    params["filter[_or][1][title][_icontains]"] = search;
  }

  return {
    queryKey: propertiesSearchQueryKey(p),
    queryFn: (({ signal }) =>
      directusFetch<DirectusListResponse<any> & { meta?: Record<string, any> }>(
        "/items/Properties_list",
        {
          params,
          revalidate: 60,
          signal,
        }
      )) as PropertiesSearchQueryFn,
    staleTime: 60_000,
    gcTime: 5 * 60_000,
    keepPreviousData: true,
    placeholderData: (
      previousData?: DirectusListResponse<any> & { meta?: Record<string, any> }
    ) => previousData,
  };
};

// Filters (from Directus, no Next.js API route)
export const propertiesFiltersQueryKey = ["properties-filters"] as const;
type PropertiesFiltersQueryFn = QueryFunction<
  DirectusListResponse<any>,
  typeof propertiesFiltersQueryKey
>;

export const propertiesFiltersQueryOptions = () => ({
  queryKey: propertiesFiltersQueryKey,
  queryFn: (({ signal }) =>
    directusFetch<DirectusListResponse<any>>("/items/Properties_list", {
      params: {
        fields: "properties_list_2,bedrooms_value,bathrooms_value",
        limit: "500",
      },
      revalidate: 60,
      auth: "server",
      signal,
    })) as PropertiesFiltersQueryFn,
});

// Property details (lazy fetched per ID)
export const propertyDetailsQueryKey = (id: string | number) =>
  ["property-detail", String(id)] as const;

type PropertyDetailsQueryFn = QueryFunction<
  DirectusItemResponse<any>,
  ReturnType<typeof propertyDetailsQueryKey>
>;

export const propertyDetailsQueryOptions = (id: string | number) => ({
  queryKey: propertyDetailsQueryKey(id),
  queryFn: (({ signal }) =>
    directusFetch<DirectusItemResponse<any>>(`/items/Properties_list/${id}`, {
      params: {
        fields:
          "*,agent_id.*,city_id.*,areas_id.*,properties_list_features.item.feature,image_list.*,properties_list_special.item.feature,item.properties_list_special",
      },
      revalidate: 300,
      signal,
    })) as PropertyDetailsQueryFn,
  staleTime: 5 * 60_000,
  gcTime: 30 * 60_000,
});

export const contactQueryKey = ["contact"] as const;
type ContactQueryFn = QueryFunction<
  DirectusListResponse<ContactRecord>,
  typeof contactQueryKey
>;
export const contactQueryOptions = () => ({
  queryKey: contactQueryKey,
  queryFn: (({ signal }) =>
    directusFetch<DirectusListResponse<ContactRecord>>("/items/contact", {
      params: {
        fields: "*,service_needed.item.*",
        limit: "1",
      },
      revalidate: 3600,
      signal,
    })) as ContactQueryFn,
});

export const agentsQueryKey = ["agents"] as const;
type AgentsQueryFn = QueryFunction<
  DirectusListResponse<AgentRecord>,
  typeof agentsQueryKey
>;
export const agentsQueryOptions = () => ({
  queryKey: agentsQueryKey,
  queryFn: (({ signal }) =>
    directusFetch<DirectusListResponse<AgentRecord>>("/items/expert_agents", {
      params: {
        fields: "id,title,subtitle,agents_button,agents.item.*",
        limit: "1",
      },
      revalidate: 60,
      signal,
    })) as AgentsQueryFn,
});

export const marketInsightsQueryKey = ["market-insights"] as const;
type MarketInsightsQueryFn = QueryFunction<
  DirectusListResponse<MarketInsightRecord>,
  typeof marketInsightsQueryKey
>;
export const marketInsightsQueryOptions = () => ({
  queryKey: marketInsightsQueryKey,
  queryFn: (({ signal }) =>
    directusFetch<DirectusListResponse<MarketInsightRecord>>(
      "/items/market_insights",
      {
        params: {
          fields: "*,insights.item.*,insights_trendin.item.*",
          limit: "1",
        },
        revalidate: 300,
        signal,
      }
    )) as MarketInsightsQueryFn,
});

export const ourServicesQueryKey = ["our-services"] as const;
type OurServicesQueryFn = QueryFunction<
  DirectusListResponse<OurServicesRecord>,
  typeof ourServicesQueryKey
>;
export const ourServicesQueryOptions = () => ({
  queryKey: ourServicesQueryKey,
  queryFn: (({ signal }) =>
    directusFetch<DirectusListResponse<OurServicesRecord>>(
      "/items/our_services",
      {
        params: {
          fields: "*,services_data.item.*",
          limit: "1",
        },
        revalidate: 300,
        signal,
      }
    )) as OurServicesQueryFn,
});

export const investmentToolsQueryKey = ["investment-tools"] as const;
type InvestmentToolsQueryFn = QueryFunction<
  DirectusListResponse<InvestmentToolsRecord>,
  typeof investmentToolsQueryKey
>;
export const investmentToolsQueryOptions = () => ({
  queryKey: investmentToolsQueryKey,
  queryFn: (({ signal }) =>
    directusFetch<DirectusListResponse<InvestmentToolsRecord>>(
      "/items/investment_tools",
      {
        params: { limit: "1" },
        revalidate: 120,
        signal,
      }
    )) as InvestmentToolsQueryFn,
});

export const footerQueryKey = ["footer"] as const;
type FooterQueryFn = QueryFunction<
  DirectusListResponse<FooterRecord>,
  typeof footerQueryKey
>;
export const footerQueryOptions = () => ({
  queryKey: footerQueryKey,
  queryFn: (({ signal }) =>
    directusFetch<DirectusListResponse<FooterRecord>>("/items/footer", {
      params: {
        fields:
          "*,services.item.*,legal_links.item.*,locations.item.*,social_links.item.*,contact.item.*",
        limit: "1",
      },
      revalidate: 3600,
      signal,
    })) as FooterQueryFn,
});
export const investHeroQueryKey = ["invest-hero"] as const;
type InvestHeroQueryFn = QueryFunction<
  DirectusListResponse<InvestHeroRecord>,
  typeof investHeroQueryKey
>;
export const investHeroQueryOptions = () => ({
  queryKey: investHeroQueryKey,
  queryFn: (({ signal }) =>
    directusFetch<DirectusListResponse<InvestHeroRecord>>(
      "/items/invest_hero",
      {
        params: {
          fields:
            "id,title,subtitle,paragraph,button1,button2," +
            "tag1,tag1_value,tag2,tag2_value,tag3,tag3_value,tag4,tag4_value,hero_image",
          limit: "1",
        },
        revalidate: 300,
        signal,
      }
    )) as InvestHeroQueryFn,
});
