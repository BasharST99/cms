import { Bed, Bath, Maximize2, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { PropertyCardData as Property } from "@/types/components";

type CardSummaryProps = {
  property: Property;
  areaLabel: string;
  onViewDetails: () => void;
};

export function CardSummary({ property, areaLabel, onViewDetails }: CardSummaryProps) {
  return (
    <div className="p-6">
      <div className="flex h-full flex-col gap-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900 line-clamp-2 min-h-[3.5rem]">
            {property.title}
          </h3>
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <MapPin className="h-4 w-4 shrink-0" />
            <span className="line-clamp-1">{areaLabel}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-xs sm:text-sm text-gray-600">
          <div className="flex items-center gap-1 truncate">
            <Bed className="h-4 w-4" />
            <span>{property.beds} beds</span>
          </div>
          <div className="flex items-center gap-1 truncate">
            <Bath className="h-4 w-4" />
            <span>{property.baths} baths</span>
          </div>
          <div className="flex items-center gap-1 truncate">
            <Maximize2 className="h-4 w-4" />
            <span>{property.sqft} sqft</span>
          </div>
        </div>



        <div className="mt-auto flex gap-2 pt-2">
          <Button
            onClick={onViewDetails}
            variant="outline"
            className="flex-1"
          >
            View Details
          </Button>
          <Button className="flex-1 bg-[#0B3557] hover:bg-[#0B3557]/90">Contact Agent</Button>
        </div>
      </div>
    </div>
  );
}
