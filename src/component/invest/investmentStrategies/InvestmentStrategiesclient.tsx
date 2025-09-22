"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Zap,
  Building2,
  Users,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
} from "lucide-react";

type Card = {
  title: string;
  description: string;
  timeframeLabel: string;
  timeframeValue: string;
  riskLabel: string;
  riskValue: string;
  prosLabel: string;
  consLabel: string;
  pros: string[];
  cons: string[];
  bestForLabel: string;
  bestForValue: string;
  buttonText: string;
};

function riskClass(v: string) {
  const s = v.toLowerCase();
  if (s === "low") return "text-green-600 bg-green-100";
  if (s === "low-medium" || s === "low medium")
    return "text-yellow-600 bg-yellow-100";
  if (s === "medium") return "text-orange-600 bg-orange-100";
  if (s === "medium-high" || s === "medium high")
    return "text-red-600 bg-red-100";
  if (s === "high") return "text-red-700 bg-red-100";
  return "text-gray-700 bg-gray-100";
}

const iconByTitle: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  "buy & hold": TrendingUp,
  "fix & flip": Zap,
  "reit investment": Building2,
  reits: Building2,
  "real estate syndication": Users,
};

function pickIcon(title: string) {
  const key = (title || "").toLowerCase();
  for (const k of Object.keys(iconByTitle))
    if (key.includes(k)) return iconByTitle[k];
  return TrendingUp;
}

export default function InvestmentStrategiesView({
  heading,
  subheading,
  cards,
}: {
  heading: string;
  subheading: string;
  cards: Card[];
}) {
  return (
    <section className="py-20 bg-white">
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
          {cards.map((c, index) => {
            const Icon = pickIcon(c.title);
            return (
              <motion.div
                key={`${c.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#0B3557] rounded-xl flex items-center justify-center">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {c.title}
                    </h3>
                    <p className="text-sm text-gray-600">{c.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-1">
                      {c.timeframeLabel}
                    </div>
                    <div className="text-sm text-[#0B3557] font-semibold">
                      {c.timeframeValue}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-1">
                      {c.riskLabel}
                    </div>
                    <Badge className={`${riskClass(c.riskValue)} text-xs`}>
                      {c.riskValue}
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h5 className="text-sm font-semibold text-green-700 mb-2">
                      {c.prosLabel}
                    </h5>
                    <ul className="space-y-1">
                      {c.pros.slice(0, 3).map((pro, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle2 className="h-3 w-3 text-green-500" />
                          <span className="text-gray-600">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-red-700 mb-2">
                      {c.consLabel}
                    </h5>
                    <ul className="space-y-1">
                      {c.cons.slice(0, 3).map((con, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm"
                        >
                          <AlertTriangle className="h-3 w-3 text-red-500" />
                          <span className="text-gray-600">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">
                    {c.bestForLabel}
                  </div>
                  <p className="text-sm text-gray-600">{c.bestForValue}</p>
                </div>

                <Button className="w-full bg-[#0B3557] hover:bg-[#0B3557]/90">
                  {c.buttonText}
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
