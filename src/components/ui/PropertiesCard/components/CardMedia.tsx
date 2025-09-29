import Image from "next/image";
import { Heart, Eye } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { PropertyCardData as Property } from "@/types/components";

type CardMediaProps = {
  property: Property;
  cover: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onQuickLook: () => void;
};

export function CardMedia({
  property,
  cover,
  isFavorite,
  onToggleFavorite,
  onQuickLook,
}: CardMediaProps) {
  return (
    <div className="relative h-56 md:h-64 overflow-hidden">
      <Image
        src={cover}
        alt={property.title}
        fill
        sizes="(max-width:768px) 100vw, 600px"
        className="object-cover"
      />

      <div className="absolute top-4 left-4 flex gap-2">
        {property.type && (
          <Badge className="bg-[#0B3557] text-white">{property.type}</Badge>
        )}
        {property.featured && (
          <Badge className="bg-[#bb9a74] text-white">Featured</Badge>
        )}
      </div>

      <div className="absolute top-4 right-4 flex gap-2">
        <button
          onClick={onToggleFavorite}
          className={`p-2 rounded-full backdrop-blur-sm transition-all ${
            isFavorite
              ? "bg-red-500 text-white"
              : "bg-white/80 text-gray-700 hover:bg-white hover:text-red-500"
          }`}
          aria-label="Favorite"
        >
          <Heart className="h-4 w-4" fill={isFavorite ? "currentColor" : "none"} />
        </button>
        <button
          onClick={onQuickLook}
          className="p-2 rounded-full bg-white/80 text-gray-700 hover:bg-white hover:text-[#0B3557] backdrop-blur-sm transition-all"
          aria-label="Quick look"
        >
          <Eye className="h-4 w-4" />
        </button>
      </div>

      <div className="absolute bottom-4 left-4">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
          <div className="text-2xl font-bold text-[#0B3557]">{property.price}</div>
        </div>
      </div>
    </div>
  );
}
