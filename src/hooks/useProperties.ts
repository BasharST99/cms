"use client";

import { useQuery } from "@tanstack/react-query";
import { featuredPropertiesQueryOptions } from "@/lib/directus/queries";
import { getAssetURL } from "@/lib/directus/client";

export function useProperties() {
  return useQuery(featuredPropertiesQueryOptions());
}

export { getAssetURL };
