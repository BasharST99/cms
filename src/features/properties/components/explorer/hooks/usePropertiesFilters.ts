import { useQuery } from "@tanstack/react-query";
import { propertiesFiltersQueryOptions } from "@/lib/directus/queries";
import type { SortOption } from "@/types/components";

export function usePropertiesFilters() {
  const filtersQ = useQuery(propertiesFiltersQueryOptions());

  const items = (filtersQ.data?.data ?? []) as Array<any>;
  const typeSet = new Set<string>();
  const bedSet = new Set<number>([0]);
  const bathSet = new Set<number>([0]);
  for (const r of items) {
    const t = (r?.properties_list_2 ?? "").toString().trim();
    if (t) typeSet.add(t);
    const b = Number(r?.bedrooms_value ?? r?.bedrooms ?? 0);
    const ba = Number(r?.bathrooms_value ?? r?.bathrooms ?? 0);
    if (Number.isFinite(b)) bedSet.add(b);
    if (Number.isFinite(ba)) bathSet.add(ba);
  }

  const types = ["all", ...Array.from(typeSet).sort()];
  const bedOptions = Array.from(bedSet).sort((a, b) => a - b);
  const bathOptions = Array.from(bathSet).sort((a, b) => a - b);
  const sortOptions: SortOption[] = [
    { key: "price_low", label: "Price: Low to High" },
    { key: "price_high", label: "Price: High to Low" },
    { key: "beds_high", label: "Beds: High to Low" },
    { key: "beds_low", label: "Beds: Low to High" },
    { key: "baths_high", label: "Baths: High to Low" },
    { key: "baths_low", label: "Baths: Low to High" },
    { key: "sqft", label: "Square Footage" },
  ];

  return {
    types,
    bedOptions,
    bathOptions,
    sortOptions,
    isLoading: filtersQ.isLoading,
  };
}

