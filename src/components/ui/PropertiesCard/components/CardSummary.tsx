import { Bed, Bath, Maximize2, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { PropertyCardData as Property } from "@/types/components";

type CardSummaryProps = {
  property: Property;
  areaLabel: string;
  onViewDetails: () => void;
};

export function CardSummary({ property, areaLabel, onViewDetails }: CardSummaryProps) {
  return (
    <div className="p-6">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
          <div className="flex items-center gap-1 text-gray-600">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{areaLabel}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{property.beds} beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{property.baths} baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize2 className="h-4 w-4" />
            <span>{property.sqft} sqft</span>
          </div>
        </div>

        {!!property.amenities?.length && (
          <div className="flex flex-wrap gap-2">
            {property.amenities.slice(0, 3).map((amenity, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {amenity}
              </Badge>
            ))}
          </div>
        )}

        <div className="flex gap-2 pt-2">
          <Button onClick={onViewDetails} variant="outline" className="flex-1">
            View Details
          </Button>
          <Button className="flex-1 bg-[#0B3557] hover:bg-[#0B3557]/90">Contact Agent</Button>
        </div>
      </div>
    </div>
  );
}
