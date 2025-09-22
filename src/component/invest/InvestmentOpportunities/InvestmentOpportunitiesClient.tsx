"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Building2, Home, Building, Briefcase, CheckCircle2, ArrowUpRight,
} from "lucide-react";

type Card = {
  title: string;
  description: string;
  avgLabel: string;
  avgValue: string;
  minLabel: string;
  minValue: string;
  riskLabel: string;
  riskValue: string;       // "Low" | "Low-Medium" | "Medium" | "Medium-High" | "High"
  features: string[];
  buttonText: string;
};

const iconByTitle: Record<string, React.ComponentType<{ className?: string }>> = {
  "commercial real estate": Building2,
  "residential properties": Home,
  "mixed-use developments": Building,
  "reits": Briefcase,
  "reit investments": Briefcase,
};

function pickIcon(title: string) {
  const key = title?.toLowerCase?.() ?? "";
  for (const k of Object.keys(iconByTitle)) {
    if (key.includes(k)) return iconByTitle[k];
  }
  return Building2;
}

function riskClass(value?: string) {
  const v = (value ?? "").toLowerCase();
  if (v === "low") return "text-green-600 bg-green-100";
  if (v === "low-medium" || v === "low medium") return "text-yellow-600 bg-yellow-100";
  if (v === "medium") return "text-orange-600 bg-orange-100";
  if (v === "medium-high" || v === "medium high") return "text-red-600 bg-red-100";
  if (v === "high") return "text-red-700 bg-red-100";
  return "text-gray-700 bg-gray-100";
}

export default function InvestmentOpportunitiesView({
  heading,
  subheading,
  cards,
}: {
  heading: string;
  subheading: string;
  cards: Card[];
}) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{heading}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => {
            const Icon = pickIcon(card.title);
            return (
              <motion.div
                key={`${card.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#0B3557] rounded-2xl flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-600">{card.description}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-semibold text-[#0B3557]">{card.avgValue}</div>
                    <div className="text-sm text-gray-600">{card.avgLabel}</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-semibold text-[#0B3557]">{card.minValue}</div>
                    <div className="text-sm text-gray-600">{card.minLabel}</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Badge className={`${riskClass(card.riskValue)} text-xs`}>
                      {card.riskValue}
                    </Badge>
                    <div className="text-sm text-gray-600 mt-1">{card.riskLabel}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {card.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">{f}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-[#0B3557] hover:bg-[#0B3557]/90">
                  {card.buttonText || "Explore Properties"}
                  <ArrowUpRight className="h-4 w-4 ml-2" />
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
