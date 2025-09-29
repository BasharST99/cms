import type { SortOption } from "@/types/components";

export type FiltersBarProps = {
  typeFilter: string;
  minBeds: number;
  minBaths: number;
  sortBy: string;
  onTypeChange: (v: string) => void;
  onMinBedsChange: (v: number) => void;
  onMinBathsChange: (v: number) => void;
  onSortChange: (v: string) => void;
  onReset: () => void;
  types: string[];
  bedOptions: number[];
  bathOptions: number[];
  sortOptions: SortOption[];
  onAreaSearchChange: (value: string) => void;
  areaSearch?: string;
};
