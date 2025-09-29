"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Heart, MapPin, CheckCircle2 } from "lucide-react";

type FilterKey = "all" | "commercial" | "residential" | "mixed";

type Filters = {
  all: string; commercial: string; residential: string; mixed: string;
};

type Card = {
  id: number;
  imageUrl: string;
  title: string;
  location: string;
  price: string;
  type: FilterKey;                // normalized for filtering
  propertyType: string;
  roiText: string;

  annualRentLabel: string;
  annualRentValue: string;
  occupancyLabel: string;
  occupancyValue: string;
  totalUnitsLabel: string;
  totalUnitsValue: string;

  riskLabel: string;
  riskValue: string;              // "Low" | "Low-Medium" | ...

  features: string[];
  grade: string;                  // "Grade A+"
  button1: string;
  button2: string;
};

function riskClass(v: string) {
  const s = v.toLowerCase();
  if (s === "low") return "text-green-600 bg-green-100";
  if (s === "low-medium" || s === "low medium") return "text-yellow-600 bg-yellow-100";
  if (s === "medium") return "text-orange-600 bg-orange-100";
  if (s === "medium-high" || s === "medium high") return "text-red-600 bg-red-100";
  if (s === "high") return "text-red-700 bg-red-100";
  return "text-gray-700 bg-gray-100";
}

function gradeClass(grade: string) {
  const g = grade.replace(/^grade\s*/i, ""); // strip "Grade "
  if (g.startsWith("A")) return "bg-emerald-100 text-emerald-600";
  if (g.startsWith("B")) return "bg-blue-100 text-blue-600";
  return "bg-gray-100 text-gray-600";
}

export default function InvestmentPropertiesView({
  heading,
  subheading,
  ctaLabel,
  filters,
  cards,
}: {
  heading: string;
  subheading: string;
  ctaLabel: string;
  filters: Filters;
  cards: Card[];
}) {
  const [filter, setFilter] = useState<FilterKey>("all");
  const [favorites, setFavorites] = useState<number[]>([]);

  const filtered = useMemo(
    () => (filter === "all" ? cards : cards.filter((c) => c.type === filter)),
    [filter, cards]
  );

  const toggleFavorite = (id: number) =>
    setFavorites((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{heading}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subheading}</p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {(["all", "commercial", "residential", "mixed"] as FilterKey[]).map((key) => (
            <Button
              key={key}
              variant={filter === key ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(key)}
              className={filter === key ? "bg-[#0B3557] hover:bg-[#0B3557]/90" : ""}
            >
              {{
                all: filters.all,
                commercial: filters.commercial,
                residential: filters.residential,
                mixed: filters.mixed,
              }[key]}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filtered.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64">
                <Image
                  src={p.imageUrl}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                />

                {/* Top-left badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-[#0B3557] text-white">{p.propertyType}</Badge>
                  <Badge className={gradeClass(p.grade)}>{p.grade}</Badge>
                </div>

                {/* Top-right actions */}
                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => toggleFavorite(p.id)}
                    className={`p-2 rounded-full backdrop-blur-sm transition-all ${
                      favorites.includes(p.id)
                        ? "bg-red-500 text-white"
                        : "bg-white/80 text-gray-700 hover:bg-white hover:text-red-500"
                    }`}
                    aria-label="favorite"
                  >
                    <Heart className="h-4 w-4" fill={favorites.includes(p.id) ? "currentColor" : "none"} />
                  </button>
                </div>

                {/* Bottom overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="text-xl font-bold text-[#0B3557]">{p.price}</div>
                  </div>
                  {p.roiText && (
                    <div className="bg-green-500 text-white rounded-lg px-3 py-2">
                      <div className="font-semibold">{p.roiText}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{p.title}</h3>
                    <div className="flex items-center gap-1 text-gray-600 mb-3">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{p.location}</span>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-3">
                      <div className="text-sm text-gray-600">{p.annualRentLabel}</div>
                      <div className="font-semibold text-[#0B3557]">{p.annualRentValue}</div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="text-sm text-gray-600">{p.occupancyLabel}</div>
                      <div className="font-semibold text-green-600">{p.occupancyValue}</div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="text-sm text-gray-600">{p.totalUnitsLabel}</div>
                      <div className="font-semibold">{p.totalUnitsValue}</div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="text-sm text-gray-600">{p.riskLabel}</div>
                      <Badge className={riskClass(p.riskValue)}>{p.riskValue}</Badge>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {p.features.slice(0, 3).map((f, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {f}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1 bg-[#0B3557] hover:bg-[#0B3557]/90">{p.button1}</Button>
                    <Button variant="outline" className="flex-1">
                      {p.button2}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-[#0B3557] text-[#0B3557] hover:bg-[#0B3557] hover:text-white"
          >
            {ctaLabel}
            <ArrowUpRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
