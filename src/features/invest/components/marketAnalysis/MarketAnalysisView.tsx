"use client";

import { motion } from "framer-motion"; // ✅ not "motion/react"
import { TrendingUp } from "lucide-react";

type Location = {
  location: string;
  appreciation: string;
  rentalYield: string;
  avgPrice: string;
  forecast: string;
  trend: string; // up | stable | down
};

type Insight = {
  statValue: string;
  title: string;
  subtitle: string;
  theme: string; // green | blue | purple | etc.
};

function trendClasses(trend: string) {
  const t = trend.toLowerCase();
  if (t === "up") return { box: "bg-green-100", icon: "text-green-600" };
  if (t === "stable") return { box: "bg-yellow-100", icon: "text-yellow-600" };
  if (t === "down") return { box: "bg-red-100", icon: "text-red-600" };
  return { box: "bg-gray-100", icon: "text-gray-600" };
}

function themeClasses(theme: string) {
  const t = theme.toLowerCase();
  if (t === "green")  return { wrap: "bg-green-50",  text: "text-green-600"  };
  if (t === "blue")   return { wrap: "bg-blue-50",   text: "text-blue-600"   };
  if (t === "purple") return { wrap: "bg-purple-50", text: "text-purple-600" };
  if (t === "yellow") return { wrap: "bg-yellow-50", text: "text-yellow-700" };
  if (t === "red")    return { wrap: "bg-red-50",    text: "text-red-600"    };
  return { wrap: "bg-gray-50", text: "text-gray-700" };
}

export default function MarketAnalysisView({
  heading,
  subheading,
  locations,
  insights,
}: {
  heading: string;
  subheading: string;
  locations: Location[];
  insights: Insight[];
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
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subheading}</p>
        </motion.div>

        {/* Location cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {locations.map((mkt, index) => {
            const t = trendClasses(mkt.trend);
            return (
              <motion.div
                key={`${mkt.location}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{mkt.location}</h3>
                    <p className="text-sm text-gray-600">{mkt.forecast}</p>
                  </div>
                  <div className={`p-2 rounded-lg ${t.box}`}>
                    <TrendingUp className={`h-4 w-4 ${t.icon}`} />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-semibold text-green-600">{mkt.appreciation}</div>
                    <div className="text-xs text-gray-600">Appreciation</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-semibold text-blue-600">{mkt.rentalYield}</div>
                    <div className="text-xs text-gray-600">Rental Yield</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-semibold text-[#0B3557]">{mkt.avgPrice}</div>
                    <div className="text-xs text-gray-600">Avg. Price</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Key insights */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            {/* optional icon */}
            {/* <LineChart className="h-6 w-6 text-[#0B3557]" /> */}
            Key Market Insights
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((i, idx) => {
              const theme = themeClasses(i.theme);
              return (
                <div key={`${i.title}-${idx}`} className={`text-center p-6 ${theme.wrap} rounded-xl`}>
                  <div className={`text-3xl font-bold mb-2 ${theme.text}`}>{i.statValue}</div>
                  <div className="text-sm text-gray-700">{i.title}</div>
                  {i.subtitle ? <div className="text-xs text-gray-600 mt-2">{i.subtitle}</div> : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
