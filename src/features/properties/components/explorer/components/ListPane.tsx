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
    <div className="h-full p-3 overflow-y-auto">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {properties.map((property, index) => (
          <div
            key={property.id}
            onClick={(e) => onCardClick(property, e)}
            className="cursor-pointer"
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
