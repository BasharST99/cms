"use client";

import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getAssetURL as asset } from "@/lib/directus/client";
import { investHeroQueryOptions } from "@/lib/directus/queries";
import type { InvestHeroRecord } from "@/types/directus";
import { Calculator, Target } from "lucide-react";

export default function InvestHeroView() {
  const { data } = useQuery(investHeroQueryOptions());
  const row: InvestHeroRecord | undefined = data?.data?.[0];
  const bgUrl = asset(row?.hero_image, { width: 1920, quality: 75 });

  return (
    <section className="relative bg-gradient-to-br from-[#0B3557] via-[#1a4b6b] to-[#2d5f7f] py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${bgUrl}')` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {row?.title ?? "Build Wealth Through"}
            <span className="block text-[#bb9a74]">
              {row?.subtitle ?? "Real Estate Investment"}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            {row?.paragraph ??
              "Discover premium investment opportunities in Saudi Arabia's fastest-growing real estate markets"}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-[#bb9a74] hover:bg-[#bb9a74]/90 text-white" size="lg">
              <Target className="h-5 w-5 mr-2" />
              {row?.button1 ?? "Find Investment Properties"}
            </Button>
            <Button size="lg" variant="outline" className="border-white !text-[#0B3557] hover:bg-white hover:text-[#0B3557]">
              <Calculator className="h-5 w-5 mr-2" />
              {row?.button2 ?? "Calculate Returns"}
            </Button>
          </div>

          {/* Key stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: row?.tag1 ?? "Total Investments", value: row?.tag1_value ?? "₹2.8B+" },
              { label: row?.tag2 ?? "Average ROI", value: row?.tag2_value ?? "8.5%" },
              { label: row?.tag3 ?? "Investment Properties", value: row?.tag3_value ?? "500+" },
              { label: row?.tag4 ?? "Satisfied Investors", value: row?.tag4_value ?? "1,200+" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold mb-2">{s.value}</div>
                <div className="text-white/80">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
