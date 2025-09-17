"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

type Card = {
  title: string; type: string; date: string; summary: string; trend: string; button: string;
};
type Stat = { label: string; value: string; change: string };

export default function MarketInsightsView({
  heading,
  subheading,
  cards,
  stats,
}: {
  heading: string;
  subheading: string;
  cards: Card[];
  stats: Stat[];
}) {
  return (
    <section id="insights" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{heading}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subheading}</p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {cards.map((insight, index) => (
            <motion.div
              key={`${insight.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <Badge variant="secondary">{insight.type}</Badge>
                <div className="text-green-600 font-semibold">{insight.trend}</div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">{insight.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{insight.summary}</p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{insight.date}</span>
                <Button size="sm" variant="ghost" className="text-[#0B3557]">
                  {insight.button} <ArrowUpRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={`${stat.label}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 text-center shadow-lg"
            >
              <div className="text-2xl font-bold text-[#0B3557] mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
              <div className="text-xs text-green-600 font-medium">{stat.change}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
