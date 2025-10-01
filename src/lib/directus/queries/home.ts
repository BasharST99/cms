import {
  directusFetch,
  type DirectusItemResponse,
  type DirectusListResponse,
} from "../fetcher";
import type { QueryFunction } from "@tanstack/react-query";
import type {
  AgentRecord,
  ContactRecord,
  FeaturedPropertyRecord,
  HeroRecord,
  InvestmentToolsRecord,
  MarketInsightRecord,
  OurServicesRecord,
} from "@/types/directus";

/**
 * Home page content: hero stats, featured properties, contact CTA, and supporting sections.
 */
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
  DirectusItemResponse<FeaturedPropertyRecord[]>,
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
