"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { PropertyCardData as Property } from "@/types/components";
import {
  deriveCityMeta,
  formatSummaryStats,
  resolveAreaLabel,
  resolveCover,
} from "./helpers";

type RelatedPropertiesSectionProps = {
  cityName?: string;
  properties: Property[];
  isLoading: boolean;
  hasError: boolean;
  loadingId: Property["id"] | null;
  errorMessage?: string | null;
  onSelect: (property: Property) => void | Promise<void>;
  activeId: Property["id"];
};

export function RelatedPropertiesSection({
  cityName,
  properties,
  isLoading,
  hasError,
  loadingId,
  errorMessage,
  onSelect,
  activeId,
}: RelatedPropertiesSectionProps) {
  const showSkeleton = isLoading && !properties.length;
  const showContent = properties.length > 0;
  const sectionError = errorMessage ?? (hasError ? "Failed to load related properties." : null);

  if (!showSkeleton && !showContent && !sectionError) {
    return null;
  }

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h4 className="text-lg font-semibold text-gray-900">
          More in {cityName || "this city"}
        </h4>
        {sectionError && <span className="text-sm text-red-500">{sectionError}</span>}
      </div>

      {showSkeleton ? (
        <div className="grid gap-4 md:grid-cols-3">
          {[0, 1, 2].map((idx) => (
            <div key={idx} className="h-48 w-full animate-pulse rounded-xl bg-gray-100" />
          ))}
        </div>
      ) : showContent ? (
        <div className="grid gap-4 md:grid-cols-3">
          {properties.slice(0, 3).map((item) => {
            const cityLabel = deriveCityMeta(item.city_id)?.label ?? "";
            const stats = formatSummaryStats(item);
            const isActive = String(item.id) === String(activeId);
            const isLoadingCurrent =
              loadingId != null && String(loadingId) === String(item.id);

            return (
              <article
                key={item.id}
                className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={resolveCover(item)}
                    alt={item.title}
                    fill
                    sizes="(max-width:1024px) 100vw, 320px"
                    className="object-cover transition-transform duration-300 hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-4">
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    {cityLabel || resolveAreaLabel(item) || ""}
                  </p>
                  <h5 className="line-clamp-2 text-sm font-semibold text-gray-900">
                    {item.title}
                  </h5>
                  {stats && <p className="text-xs text-gray-600">{stats}</p>}
                  <div className="text-lg font-semibold text-[#0B3557]">
                    {item.price}
                  </div>
                  <Button
                    variant={isActive ? "secondary" : "outline"}
                    className="mt-auto w-full"
                    disabled={isLoadingCurrent}
                    onClick={() => {
                      void onSelect(item);
                    }}
                  >
                    {isActive ? "Viewing" : isLoadingCurrent ? "Loading…" : "View"}
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      ) : null}
    </section>
  );
}
