"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowUpRight,
  MapPin,
  Bed,
  Bath,
  Maximize2,
  Eye,
  Heart,
  Calendar,
  CheckCircle2,
  Mail,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

type Property = {
  id: number | string;
  title: string;
  location: string;
  price: string; // "$1,234,567"
  beds: number;
  baths: number;
  sqft: number;
  type: string; // "apartment" | "villa" | ...
  featured?: boolean;
  amenities: string[];
  image: string; // fully-resolved URL from server
};

function PropertyCard({
  property,
  index,
  onFavorite,
  isFavorite,
}: {
  property: Property;
  index: number;
  onFavorite: (id: number | string) => void;
  isFavorite: boolean;
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [showVirtualTour, setShowVirtualTour] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        <div className="relative h-64 overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
              onClick={() => onFavorite(property.id)}
              className={`p-2 rounded-full backdrop-blur-sm transition-all ${
                isFavorite
                  ? "bg-red-500 text-white"
                  : "bg-white/80 text-gray-700 hover:bg-white hover:text-red-500"
              }`}
              aria-label="Favorite"
            >
              <Heart
                className="h-4 w-4"
                fill={isFavorite ? "currentColor" : "none"}
              />
            </button>
            <button
              onClick={() => setShowVirtualTour(true)}
              className="p-2 rounded-full bg-white/80 text-gray-700 hover:bg-white hover:text-[#0B3557] backdrop-blur-sm transition-all"
              aria-label="Virtual tour"
            >
              <Eye className="h-4 w-4" />
            </button>
          </div>

          <div className="absolute bottom-4 left-4">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
              <div className="text-2xl font-bold text-[#0B3557]">
                {property.price}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {property.title}
              </h3>
              <div className="flex items-center gap-1 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{property.location}</span>
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

            <div className="flex flex-wrap gap-2">
              {property.amenities?.slice(0, 3).map((a, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
                  {a}
                </Badge>
              ))}
            </div>

            <div className="flex gap-2 pt-2">
              <Button
                onClick={() => setShowDetails(true)}
                variant="outline"
                className="flex-1"
              >
                View Details
              </Button>
              <Button className="flex-1 bg-[#0B3557] hover:bg-[#0B3557]/90">
                Contact Agent
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Details Modal */}
      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{property.title}</DialogTitle>
            <DialogDescription>
              View detailed information about this property including features,
              amenities, and pricing.
            </DialogDescription>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>{property.location}</span>
            </div>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-64 object-cover rounded-lg"
              />

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <Bed className="h-6 w-6 mx-auto mb-2 text-[#0B3557]" />
                  <div className="font-semibold">{property.beds}</div>
                  <div className="text-sm text-gray-600">Bedrooms</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <Bath className="h-6 w-6 mx-auto mb-2 text-[#0B3557]" />
                  <div className="font-semibold">{property.baths}</div>
                  <div className="text-sm text-gray-600">Bathrooms</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <Maximize2 className="h-6 w-6 mx-auto mb-2 text-[#0B3557]" />
                  <div className="font-semibold">{property.sqft}</div>
                  <div className="text-sm text-gray-600">Sq Ft</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="text-3xl font-bold text-[#0B3557] mb-2">
                  {property.price}
                </div>
                <div className="text-lg text-gray-600">
                  $
                  {Math.round(
                    parseFloat(property.price.replace(/[$,]/g, "")) /
                      (property.sqft || 1)
                  ).toLocaleString()}{" "}
                  per sq ft
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Property Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {property.amenities?.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-[#0B3557] hover:bg-[#0B3557]/90">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Tour
                </Button>
                <Button variant="outline" className="w-full">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Agent
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Virtual Tour Modal */}
      <Dialog open={showVirtualTour} onOpenChange={setShowVirtualTour}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Virtual Tour - {property.title}</DialogTitle>
            <DialogDescription>
              Take a 360° virtual tour of this property.
            </DialogDescription>
          </DialogHeader>
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-64 object-cover rounded-lg"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default function PropertyListingsClient({
  sectionTitle,
  subtitle,
  initialProperties,
  filterTypes,
  sortOptions,
  propertiesButton,
}: {
  sectionTitle: string;
  subtitle: string;
  initialProperties: Property[];
  filterTypes: string[];
  sortOptions: { key: string; label: string }[];
  propertiesButton: string;
}) {
  const [filter, setFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("price_low");
  const [favorites, setFavorites] = useState<Array<number | string>>([]);

  const toggleFavorite = (id: number | string) =>
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  // Filtering
  let filtered =
    filter.toLowerCase() === "all"
      ? initialProperties
      : initialProperties.filter((p) => p.type === filter.toLowerCase());

  // Sorting
  filtered = [...filtered].sort((a, b) => {
    const priceA = parseFloat(String(a.price).replace(/[$,]/g, "")) || 0;
    const priceB = parseFloat(String(b.price).replace(/[$,]/g, "")) || 0;
    switch (sortBy) {
      case "price_low":
        return priceA - priceB;
      case "price_high":
        return priceB - priceA;
      case "sqft":
        return (b.sqft || 0) - (a.sqft || 0);
      default:
        return 0;
    }
  });

  return (
    <section id="property-listings" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {sectionTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {filterTypes.map((type) => (
              <Button
                key={type}
                variant={
                  filter.toLowerCase() === type.toLowerCase()
                    ? "default"
                    : "outline"
                }
                size="sm"
                onClick={() => setFilter(type)}
                className={
                  filter.toLowerCase() === type.toLowerCase()
                    ? "bg-[#0B3557] hover:bg-[#0B3557]/90"
                    : ""
                }
              >
                {type === "all" ? "All Properties" : type}
              </Button>
            ))}
          </div>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-56">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.length ? (
                sortOptions.map((s) => (
                  <SelectItem key={s.key} value={s.key}>
                    {s.label}
                  </SelectItem>
                ))
              ) : (
                <>
                  <SelectItem value="price_low">Price: Low to High</SelectItem>
                  <SelectItem value="price_high">Price: High to Low</SelectItem>
                  <SelectItem value="sqft">Square Footage</SelectItem>
                </>
              )}
            </SelectContent>
          </Select>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              index={index}
              onFavorite={toggleFavorite}
              isFavorite={favorites.includes(property.id)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-[#0B3557] text-[#0B3557] hover:bg-[#0B3557] hover:text-white"
          >
            {propertiesButton}
            <ArrowUpRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
