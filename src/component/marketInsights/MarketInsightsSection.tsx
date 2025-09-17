// SERVER COMPONENT (no "use client")
import { dxGet } from "@/lib/directus/server";
import MarketInsightsView from "./MarketInsightsView";

type InsightItem = {
  id: number;
  title?: string;
  type?: string;
  date?: string;
  summary?: string;
  trend?: string | number;
  button?: string;
};

type StatItem = {
  id: number;
  label?: string;
  value?: string;
  change?: string;
};

type MarketInsightsRow = {
  id: number;
  title?: string;
  subtitle?: string;
  insights?: { item: InsightItem }[];
  insights_trendin?: { item: StatItem }[]; // spelled like your API
};

function formatTrend(t: unknown) {
  if (typeof t === "number") return `${t > 0 ? "+" : ""}${t}%`;
  if (typeof t === "string") {
    if (t.includes("%") || t.startsWith("+") || t.startsWith("-")) return t;
    const n = Number(t);
    return Number.isNaN(n) ? t : `${n > 0 ? "+" : ""}${n}%`;
  }
  return "";
}

export default async function MarketInsightsSection() {
  const { data } = await dxGet<{ data: MarketInsightsRow[] }>(
    "/items/market_insights",
    { fields: "*,insights.item.*,insights_trendin.item.*", limit: "1" },
    300 // ISR: revalidate every 5 min (tune as you like)
  );

  const row = data?.[0];
  if (!row) return null;

  const cards = (row.insights ?? []).map(({ item }) => ({
    title: item.title ?? "",
    type: item.type ?? "",
    date: item.date ?? "",
    summary: item.summary ?? "",
    trend: formatTrend(item.trend),
    button: item.button ?? "Read More",
  }));

  const stats = (row.insights_trendin ?? []).map(({ item }) => ({
    label: item.label ?? "",
    value: item.value ?? "",
    change: item.change ?? "",
  }));

  return (
    <MarketInsightsView
      heading={row.title ?? "Market Insights"}
      subheading={row.subtitle ?? "Stay informed with the latest real estate trends and market analysis"}
      cards={cards}
      stats={stats}
    />
  );
}
