"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getAssetURL as asset } from "@/lib/directus/client";
import { heroQueryOptions } from "@/lib/directus/queries";

export default function HeroView() {
  const { data } = useQuery(heroQueryOptions());

  const row = data?.data?.[0];
  const bgUrl = asset(row?.hero_image, { width: 1920, quality: 75 }) ;
  const [searchType, setSearchType] = useState<"buy" | "sell" | "invest">(
    "buy"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([
    500_000, 5_000_000,
  ]);

  const title = row?.title ?? "Your Gateway to";
  const boldTitle = row?.boldtitle ?? "Real Estate Success";
  const subtitle =
    row?.subtitle ?? "Buy, sell, or invest in premium properties…";

  const n = (v: any, f: number) => (v == null ? f : Number(v));
  const stat1 = {
    label: row?.premium_properties ?? "Premium Properties",
    value: n(row?.premium_properties_value, 2500),
  };
  const stat2 = {
    label: row?.expert_agents ?? "Expert Agents",
    value: n(row?.expert_agents_value, 150),
  };
  const stat3 = {
    label: row?.client_satisfaction ?? "Client Satisfaction",
    value: n(row?.client_satisfaction_value, 98),
  };

  const handleSearch = () => {
    if (searchQuery.trim())
      document
        .getElementById("property-listings")
        ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${bgUrl}')` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {title}
            <span className="block text-[#bb9a74]">{boldTitle}</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            {subtitle}
          </p>

          {/* search UI (unchanged) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-2xl max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-gray-100 rounded-lg p-1 flex">
                {(["buy", "sell", "invest"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setSearchType(t)}
                    className={`px-6 py-2 rounded-md capitalize ${
                      searchType === t
                        ? "bg-[#0B3557] text-white"
                        : "text-gray-600 hover:text-[#0B3557]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    placeholder="Enter location, property type, or keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    className="pl-12 h-14 text-lg"
                  />
                </div>
                <Button
                  onClick={handleSearch}
                  size="lg"
                  className="h-14 px-8 bg-[#0B3557] hover:bg-[#0B3557]/90"
                >
                  Search
                </Button>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700">
                  Price Range:
                </span>
                <div className="flex-1">
                  <Slider
                    value={priceRange}
                    onValueChange={(v: number[]) =>
                      setPriceRange([v[0], v[1]] as any)
                    }
                    max={10_000_000}
                    min={100_000}
                    step={50_000}
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>${priceRange[0].toLocaleString()}</span>
                    <span>${priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto text-white"
          >
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{stat1.value}+</div>
              <div className="text-white/80">{stat1.label}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{stat2.value}+</div>
              <div className="text-white/80">{stat2.label}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{stat3.value}%</div>
              <div className="text-white/80">{stat3.label}</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
