import type { SortOption } from "@/types/components";

export type MapMarker = { coords: [number, number]; name: string };

export type PropertiesFilterOptions = {
  types: string[];
  bedOptions: number[];
  bathOptions: number[];
  sortOptions: SortOption[];
};

