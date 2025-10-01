import {
  directusFetch,
  type DirectusItemResponse,
  type DirectusListResponse,
} from "../fetcher";
import type { QueryFunction } from "@tanstack/react-query";

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
  areaId?: string | number;
  cityId?: string | number;
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
    p.areaId != null ? String(p.areaId) : "all",
    p.cityId != null ? String(p.cityId) : "all",
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

  if (p.cityId != null && p.cityId !== "all") {
    params["filter[city_id][_eq]"] = String(p.cityId);
  }

  if (p.areaId != null && p.areaId !== "all") {
    params["filter[areas_id][_eq]"] = String(p.areaId);
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
