// SERVER COMPONENT (no "use client")
import { dxGet } from "@/lib/directus/server";
import MarketAnalysisView from "./MarketAnalysisView";

type LocationItem = {
  id: number;
  location: string;
  appreciation: string;
  rental_yield: string;
  avg_price: string;
  forecast: string;
  trend: "up" | "stable" | "down" | string;
};

type InsightItem = {
  id: number;
  stat_value: string;
  title: string;
  subtitle?: string;
  color_theme?: "green" | "blue" | "purple" | "yellow" | "red" | string;
};

type Row = {
  id: number;
  title?: string;
  subtitle?: string;
  market_analysis_locations?: { item: LocationItem }[];
  market_analysis_insights?: { item: InsightItem }[];
};

export default async function MarketAnalysisSection() {
  const { data } = await dxGet<{ data: Row[] }>(
    "/items/market_analysis",
    { fields: "*,market_analysis_locations.item.*,market_analysis_insights.item.*", limit: "1" },
    1800 // ISR: 30 minutes
  );

  const row = data?.[0];
  if (!row) return null;

  // normalize to simple arrays
  const locations = (row.market_analysis_locations ?? []).map(({ item }) => ({
    location: item.location,
    appreciation: item.appreciation,
    rentalYield: item.rental_yield,
    avgPrice: item.avg_price,
    forecast: item.forecast,
    trend: item.trend,
  }));
  
  const insights = (row.market_analysis_insights ?? []).map(({ item }) => ({
    statValue: item.stat_value,
    title: item.title,
    subtitle: item.subtitle ?? "",
    theme: (item.color_theme ?? "green").toLowerCase(),
  }));

  return (
    <MarketAnalysisView
      heading={row.title ?? "Market Analysis"}
      subheading={row.subtitle ?? "Real-time market insights to help you make informed investment decisions"}
      locations={locations}
      insights={insights}
    />
  );
}
