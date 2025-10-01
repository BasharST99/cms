import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { propertiesSearchQueryOptions } from "@/lib/directus/queries";
import { mapRecord } from "../utils";
import type { MapMarker } from "../types";

export type UsePropertiesSearchArgs = {
  page: number;
  pageSize: number;
  typeFilter: string;
  minBeds: number;
  minBaths: number;
  sortBy: string;
  areaSearch?: string;
  areaId?: string | number;
  cityId?: string | number;
};

export function usePropertiesSearch({
  page,
  pageSize,
  typeFilter,
  minBeds,
  minBaths,
  sortBy,
  areaSearch,
  areaId,
  cityId,
}: UsePropertiesSearchArgs) {
  const dataQ = useQuery(
    propertiesSearchQueryOptions({
      page,
      pageSize,
      type: typeFilter,
      minBeds,
      minBaths,
      sort: sortBy as any,
      areaSearch,
      areaId,
      cityId,
    })
  );

  const items = useMemo(() => dataQ.data?.data ?? [], [dataQ.data]);
  const properties = useMemo(() => items.map(mapRecord), [items]);
  const filterCount = (dataQ.data as any)?.meta?.filter_count ?? items.length;
  const totalPages = Math.max(1, Math.ceil(filterCount / pageSize));

  const markersLocations = useMemo<MapMarker[]>(
    () =>
      properties
        .map((p) =>
          p.lat != null && p.lon != null
            ? { coords: [p.lat, p.lon] as [number, number], name: p.title }
            : null
        )
        .filter((v): v is MapMarker => v !== null),
    [properties]
  );

  return {
    properties,
    markersLocations,
    filterCount,
    totalPages,
    isLoading: dataQ.isLoading,
  };
}
