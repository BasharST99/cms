"use client";
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAssetURL } from "@/lib/directus/client";
import { featuredPropertiesQueryOptions } from "@/lib/directus/queries";
import type { FeaturedPropertyRecord } from "@/types/directus";
import PropertyListingsClient from "./PropertyListingsClient";
import type { NormalizedProperty, SortOption } from "@/types/components";

function normalizeProperties(data?: FeaturedPropertyRecord | null) {
  if (!data) {
    return {
      sectionTitle: "Featured Properties",
      subtitle: "",
      properties: [] as NormalizedProperty[],
      filterTypes: ["all"],
      sortOptions: [] as SortOption[],
      propertiesButton: "",
    };
  }

  const properties = (data.blocks ?? []).map(({ item }) => {
    const record = item ?? {};
    const priceRaw = (record as any).value ?? (record as any).subprice ?? "";
    const price =
      typeof priceRaw === "number"
        ? `$${priceRaw.toLocaleString()}`
        : String(priceRaw ?? "");

    const imageId = (record as any).image as string | null | undefined;
    const cover = (record as any).image ?? "/assets/fallback.png";
    const imageUrls = (record as any).image_list
    // Ensure at least one image


    const latRaw =
      (record as any).lat ?? (record as any).latitude ?? (record as any).lat_value ?? (record as any).latitude_value;
    const lonRaw =
      (record as any).lon ?? (record as any).lng ?? (record as any).longitude ?? (record as any).lon_value ?? (record as any).longitude_value;

    return {
      id: (record as any).id,
      title: (record as any).title ?? "",
      areas_id: (record as any).areas_id?.name ?? "",
      price,
      beds: Number((record as any).bedrooms_value ?? 0),
      baths: Number((record as any).bathrooms_value ?? 0),
      sqft: Number((record as any).sq_ft_value ?? 0),
      type: ((record as any).properties_list_2 ?? "").toString().toLowerCase(),
      featured: Boolean((record as any).featured),
      amenities: Array.isArray((record as any).amenities) ? (record as any).amenities : [],
      image: imageId
        ? getAssetURL(imageId, { width: 1200, quality: 75 })
        : "/assets/fallback.png",
      lat: latRaw != null && latRaw !== "" ? Number(latRaw) : undefined,
      lon: lonRaw != null && lonRaw !== "" ? Number(lonRaw) : undefined,
      image_list: imageUrls,
      contact_agent_button: (record as any).contact_agent_button ?? "",
      request_tour_button: (record as any).request_tour_button ?? "",
      properties_list_features: (record as any).properties_list_features,
      properties_list_special: (record as any).properties_list_special,
      description: (record as any).description ?? undefined,
      what_special: (record as any).what_special ?? undefined,
      phone: (record as any).phone ?? undefined,
      email: (record as any).email ?? undefined,
      name: (record as any).name ?? undefined,
      financing_info: (record as any).financing_info ?? undefined,
      disclosure_notice: (record as any).disclosure_notice ?? undefined,
      contact_buyer: (record as any).contact_buyer ?? undefined,
      contact_an_agent: (record as any).contact_an_agent ?? undefined,
      conatct_description: (record as any).conatct_description ?? undefined,
      message: (record as any).message ?? undefined,
    } satisfies NormalizedProperty;
  });

  const ignoreKeys = new Set(["id", "status"]);
  const filterValues = Object.entries(data.properties_list?.[0]?.item ?? {})
    .filter(([key, value]) => !ignoreKeys.has(key) && typeof value === "string")
    .map(([, value]) => value as string);
  const filterTypes = ["all", ...filterValues];

  const sortOptions = Object.entries(data.sort_by?.[0]?.item ?? {})
    .filter(([key]) => key !== "id" && key !== "status")
    .map(([key, label]) => ({ key, label: String(label) }));

  return {
    sectionTitle: data.title ?? "Featured Properties",
    subtitle: data.subtitle ?? "",
    properties,
    filterTypes,
    sortOptions,
    propertiesButton: data.properties_button ?? "",
  };
}

export default function PropertySectionClient() {
  const { data } = useQuery(featuredPropertiesQueryOptions());
  const row = data?.data[0] ?? null;

  const normalized = useMemo(() => normalizeProperties(row), [row]);

  if (!row) return null;

  return (
    <PropertyListingsClient
      sectionTitle={normalized.sectionTitle}
      subtitle={normalized.subtitle}
      initialProperties={normalized.properties}
      filterTypes={normalized.filterTypes}
      sortOptions={normalized.sortOptions}
      propertiesButton={normalized.propertiesButton}
    />
  );
}
