"use client"
import { useQuery } from "@tanstack/react-query"
import { fetchProperties, getAssetURL, type Property } from "@/lib/directus"

export function useProperties() {
  return useQuery<Property[]>({
    queryKey: ["properties"],
    queryFn: fetchProperties,
  })
}

export { getAssetURL }
