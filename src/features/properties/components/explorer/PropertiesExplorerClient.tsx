"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
const EstatesMap = dynamic(
  () => import("@/features/properties/components/Map"),
  {
    ssr: false,
  }
);
import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { SortOption } from "@/types/components";
import type { MapMarker } from "./types";
import { FiltersBar, ListPane } from "./components";
import { usePropertiesSearch } from "./hooks";
import { useDebounce } from "./hooks/useDebounce";
import { propertyDetailsQueryOptions } from "@/lib/directus/queries";
import { mapRecord } from "./utils";
import { areasQueryOptions, citiesQueryOptions } from "@/lib/agents/queries";

const PAGE_SIZE = 10;

export default function PropertiesExplorerClient() {
  const queryClient = useQueryClient();
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [minBeds, setMinBeds] = useState<number>(0);
  const [minBaths, setMinBaths] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>("price_low");
  const [areaSearch, setAreaSearch] = useState<string>("");
  const [selectedArea, setSelectedArea] = useState<string>("all");
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [page, setPage] = useState<number>(1);
  const [zoomCoords, setZoomCoords] = useState<[number, number] | null>(null);

  // Add debounced area search (500ms delay)
  const debouncedAreaSearch = useDebounce(areaSearch, 500);

  useEffect(() => {
    setPage(1);
  }, [
    typeFilter,
    minBeds,
    minBaths,
    sortBy,
    debouncedAreaSearch,
    selectedArea,
    selectedCity,
  ]);

  const areasQ = useQuery(areasQueryOptions());
  const citiesQ = useQuery({
    ...citiesQueryOptions(selectedArea),
    enabled: selectedArea !== "all",
  });

  // Server-side filtered + paginated fetch - use debounced value
  const { properties, markersLocations, filterCount, totalPages, isLoading } =
    usePropertiesSearch({
      page,
      pageSize: PAGE_SIZE,
      typeFilter,
      minBeds,
      minBaths,
      sortBy,
      areaSearch: debouncedAreaSearch,
      areaId: selectedArea,
      cityId: selectedCity,
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
  const filterTypes = [
    "all",
    "Apartment",
    "Compound",
    "Loft",
    "Penthouse",
    "Townhouse",
    "Villa",
  ];
  const bedOptions = [0, 1, 2, 3, 4, 5];
  const bathOptions = [0, 1, 2, 3, 4];
  const sortOptions = [
    {
      key: "price_low",
      label: "Price: Low to High",
    },
    {
      key: "price_high",
      label: "Price: High to Low",
    },
    {
      key: "sqft",
      label: "Square Footage",
    },
  ];

  const areaOptions = useMemo(
    () => [
      { value: "all", label: "All Areas" },
      ...((areasQ.data?.data ?? []).map((area) => ({
        value: String(area.id),
        label: area.name,
      })) ?? []),
    ],
    [areasQ.data]
  );

  const cityOptions = useMemo(
    () => {
      const base = [{ value: "all", label: "All Cities" }];
      if (selectedArea === "all") {
        return base;
      }
      const rows = citiesQ.data?.data ?? [];
      return [
        ...base,
        ...rows.map((city) => ({ value: String(city.id), label: city.name })),
      ];
    },
    [citiesQ.data, selectedArea]
  );

  const isCityDisabled = selectedArea === "all" || citiesQ.isLoading;

  return (
    <div className="min-h-screen bg-white pt-[90px] ">
      {/* Fixed Filters Bar */}
      <div className="sticky top-[90px] z-20 bg-white border-b shadow-sm ">
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
              setSelectedArea("all");
              setSelectedCity("all");
              setPage(1);
              setZoomCoords(null);
            }}
            types={filterTypes}
            bedOptions={bedOptions}
            bathOptions={bathOptions}
            sortOptions={sortOptions as SortOption[]}
            selectedArea={selectedArea}
            selectedCity={selectedCity}
            onAreaChange={(value) => {
              setSelectedArea(value);
              setSelectedCity("all");
            }}
            onCityChange={setSelectedCity}
            areaOptions={areaOptions}
            cityOptions={cityOptions}
            isCityDisabled={isCityDisabled}
          />
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 h-[calc(100vh-90px)]">
        {/* Map - spans 2/3 on desktop */}
        <div className="lg:col-span-3 h-full">
          <EstatesMap
            mapSearch={debouncedAreaSearch} // Pass debounced value to map
            markersLocations={markersLocations}
            zoomCoords={zoomCoords}
          />
        </div>
        {/* Properties List - spans 1/3 */}
        <div className="lg:col-span-2 h-full overflow-y-auto border-l">
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
