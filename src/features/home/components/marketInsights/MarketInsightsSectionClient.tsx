"use client";

import { useQuery } from "@tanstack/react-query";
import { marketInsightsQueryOptions } from "@/lib/directus/queries";
import type { MarketInsightRecord } from "@/types/directus";
import MarketInsightsView from "./MarketInsightsView";

function formatTrend(value: unknown) {
  if (typeof value === "number") return `${value > 0 ? "+" : ""}${value}%`;
  if (typeof value === "string") {
    if (value.includes("%") || value.startsWith("+") || value.startsWith("-")) {
      return value;
    }
    const numeric = Number(value);
    return Number.isNaN(numeric) ? value : `${numeric > 0 ? "+" : ""}${numeric}%`;
  }
  return "";
}

export default function MarketInsightsSectionClient() {
  const { data } = useQuery(marketInsightsQueryOptions());
  const row: MarketInsightRecord | undefined = data?.data?.[0];

  if (!row) return null;

  const cards = (row.insights ?? []).map(({ item }) => {
    const record = (item ?? {}) as Record<string, any>;
    return {
      title: record.title ?? "",
      type: record.type ?? "",
      date: record.date ?? "",
      summary: record.summary ?? "",
      trend: formatTrend(record.trend),
      button: record.button ?? "Read More",
    };
  });

  const stats = (row.insights_trendin ?? []).map(({ item }) => {
    const record = (item ?? {}) as Record<string, any>;
    return {
      label: record.label ?? "",
      value: record.value ?? "",
      change: record.change ?? "",
    };
  });

  return (
    <MarketInsightsView
      heading={
        row.title ?? "Market Insights"
      }
      subheading={
        row.subtitle ??
        "Stay informed with the latest real estate trends and market analysis"
      }
      cards={cards}
      stats={stats}
    />
  );
}
