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

    return {
      id: (record as any).id,
      title: (record as any).title ?? "",
      location: (record as any).location ?? "",
      price,
      beds: Number((record as any).bedrooms_value ?? 0),
      baths: Number((record as any).bathrooms_value ?? 0),
      sqft: Number((record as any).sq_ft_value ?? 0),
      type: ((record as any).properties_list_2 ?? "").toString().toLowerCase(),
      featured: Boolean((record as any).featured),
      amenities: Array.isArray((record as any).amenities)
        ? ((record as any).amenities as string[])
        : [],
      image: imageId
        ? getAssetURL(imageId, { width: 1200, quality: 75 })
        : "/assets/fallback.png",
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
  const row = data?.data ?? null;

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
