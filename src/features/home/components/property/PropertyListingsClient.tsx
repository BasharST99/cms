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

} from "lucide-react";

import type { PropertyCardData as Property } from "@/types/components";
import PropertyCard from "@/components/ui/PropertiesCard";
import Link from "next/link";



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

  const seen = new Set<string>();
  const uniqueFiltered = filtered.filter((property) => {
    const identifier = property.id ?? property.title ?? `${property.price}-${property.type}`;
    const key = String(identifier).toLowerCase();

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
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
          {uniqueFiltered.map((property, index) => (
            <PropertyCard
              key={
                property.id !== undefined && property.id !== null
                  ? String(property.id)
                  : `${property.title ?? "property"}-${index}`
              }
              property={property}
              index={index}
              onFavorite={toggleFavorite}
              isFavorite={favorites.includes(property.id)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/properties" passHref>
          <Button
            size="lg"
            variant="outline"
            className="border-[#0B3557] text-[#0B3557] hover:bg-[#0B3557] hover:text-white"
            
          >
            {propertiesButton}
            <ArrowUpRight className="h-4 w-4 ml-2" />
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
