"use client";

import PropertyCard from "@/components/ui/PropertiesCard";
import Pagination from "./Pagination";
import type { ListPaneProps } from "./ListPane.types";

export default function ListPane({
  properties,
  onCardClick,
  page,
  totalPages,
  onPrev,
  onNext,
  onLoadDetails,
}: ListPaneProps) {
  return (
    <div className="h-full overflow-y-auto p-4">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 auto-rows-[minmax(0,1fr)]">
        {properties.map((property, index) => (
          <div
            key={property.id}
            onClick={(e) => onCardClick(property, e)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onCardClick(property, event);
              }
            }}
            className="group h-full cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#0B3557]/70"
          >
            <PropertyCard
              property={property}
              index={index}
              onFavorite={() => {}}
              isFavorite={false}
              loadDetails={
                onLoadDetails
                  ? () => onLoadDetails(property.id)
                  : undefined
              }
            />
          </div>
        ))}
      </div>

      <Pagination page={page} totalPages={totalPages} onPrev={onPrev} onNext={onNext} />
    </div>
  );
}
