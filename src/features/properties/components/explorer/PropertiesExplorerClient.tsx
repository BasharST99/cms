"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
const EstatesMap = dynamic(() => import("@/features/properties/components/Map"), {
  ssr: false,
});
import { useQueryClient } from "@tanstack/react-query";
import type { SortOption } from "@/types/components";
import type { MapMarker } from "./types";
import { FiltersBar, ListPane } from "./components";
import { usePropertiesFilters, usePropertiesSearch } from "./hooks";
import { useDebounce } from "./hooks/useDebounce";
import { propertyDetailsQueryOptions } from "@/lib/directus/queries";
import { mapRecord } from "./utils";

const PAGE_SIZE = 10;

export default function PropertiesExplorerClient() {
  // Load filter options
  const filters = usePropertiesFilters();
  const queryClient = useQueryClient();
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [minBeds, setMinBeds] = useState<number>(0);
  const [minBaths, setMinBaths] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>("price_low");
  const [areaSearch, setAreaSearch] = useState<string>(""); // Immediate area search state
  const [page, setPage] = useState<number>(1);
  const [zoomCoords, setZoomCoords] = useState<[number, number] | null>(null);
  
  // Add debounced area search (500ms delay)
  const debouncedAreaSearch = useDebounce(areaSearch, 500);
  
  useEffect(() => {
    setPage(1);
  }, [typeFilter, minBeds, minBaths, sortBy, debouncedAreaSearch]);
  
  // Server-side filtered + paginated fetch - use debounced value
  const { properties, markersLocations, filterCount, totalPages, isLoading } =
    usePropertiesSearch({
      page,
      pageSize: PAGE_SIZE,
      typeFilter,
      minBeds,
      minBaths,
      sortBy,
      areaSearch: debouncedAreaSearch, // Use debounced value for API calls
    });

  const loadPropertyDetails = useCallback(
    async (propertyId: number | string) => {
      const detailResponse = await queryClient.ensureQueryData(
        propertyDetailsQueryOptions(propertyId)
      );
      return mapRecord(detailResponse?.data ?? {});
    },
    [queryClient]
  );
  
  // Derive options from Directus response
  const { types: filterTypes, bedOptions, bathOptions, sortOptions } = filters;
  
  return (
    <div className="min-h-screen bg-white pt-[90px]">
      {/* Fixed Filters Bar */}
      <div className="sticky top-[90px] z-20 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 pt-6 pb-4">
          <FiltersBar
            typeFilter={typeFilter}
            minBeds={minBeds}
            minBaths={minBaths}
            sortBy={sortBy}
            areaSearch={areaSearch} // Pass immediate value for responsive UI
            onTypeChange={setTypeFilter}
            onMinBedsChange={setMinBeds}
            onMinBathsChange={setMinBaths}
            onSortChange={setSortBy}
            onAreaSearchChange={setAreaSearch} // Update immediate value
            onReset={() => {
              setTypeFilter("all");
              setMinBeds(0);
              setMinBaths(0);
              setSortBy((sortOptions?.[0]?.key as string) || "price_low");
              setAreaSearch(""); // Reset both immediate and debounced
              setPage(1);
              setZoomCoords(null);
            }}
            types={filterTypes}
            bedOptions={bedOptions}
            bathOptions={bathOptions}
            sortOptions={sortOptions as SortOption[]}
          />

        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 h-[calc(100vh-90px)]">
        {/* Map - spans 2/3 on desktop */}
        <div className="lg:col-span-2 h-full">
          <EstatesMap
            mapSearch={debouncedAreaSearch} // Pass debounced value to map
            markersLocations={markersLocations}
            zoomCoords={zoomCoords}
          />
        </div>
        {/* Properties List - spans 1/3 */}
        <div className="lg:col-span-1 h-full overflow-y-auto border-l">
          <ListPane
            properties={properties}
            onCardClick={(property, e) => {
              const target = e.target as HTMLElement;
              if (
                target.closest(
                  "button, a, [role=button], [data-slot=dialog-overlay], [data-slot=dialog-content]"
                )
              )
                return;
              if (property.lat != null && property.lon != null) {
                setZoomCoords([property.lat, property.lon]);
              }
            }}
            page={page}
            totalPages={totalPages}
            onPrev={() => setPage((p) => Math.max(1, p - 1))}
            onNext={() => setPage((p) => Math.min(totalPages, p + 1))}
            onLoadDetails={loadPropertyDetails}
          />
        </div>
      </div>
    </div>
  );
}
