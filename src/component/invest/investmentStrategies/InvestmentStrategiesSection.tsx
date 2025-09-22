// SERVER COMPONENT (no "use client")
import { dxGet } from "@/lib/directus/server";
import InvestmentStrategiesView from "./InvestmentStrategiesclient";

type CardItem = {
  id: number;
  title?: string;
  subtitle?: string;
  timeframe?: string; // label
  timeframe_value?: string; // "5+ years"
  risk_level?: string; // label
  risk_level_value?: string; // "Low-Medium"
  pros?: string; // label
  cons?: string; // label
  pros_tag_1?: string;
  pros_tag_2?: string;
  pros_tag_3?: string;
  cons_tag_1?: string;
  cons_tag_2?: string;
  cons_tag_3?: string;
  best_for?: string; // label, often "Best For:"
  best_for_value?: string;
  button?: string; // "Learn More"
};

type Row = {
  id: number;
  title?: string;
  subtitle?: string;
  investment_strategies_cards?: { item: CardItem }[];
};

export default async function InvestmentStrategiesSection() {
  const { data } = await dxGet<{ data: Row[] }>(
    "/items/investment_strategies/",
    { fields: "*,investment_strategies_cards.item.*", limit: "1" },
    1800 // ISR: 30 min
  );

  const row = data?.[0];
  if (!row) return null;

  const cards = (row.investment_strategies_cards ?? []).map(({ item }) => ({
    title: item.title ?? "",
    description: item.subtitle ?? "",
    timeframeLabel: item.timeframe ?? "Timeframe",
    timeframeValue: item.timeframe_value ?? "",
    riskLabel: item.risk_level ?? "Risk Level",
    riskValue: item.risk_level_value ?? "Medium",
    prosLabel: item.pros ?? "Pros",
    consLabel: item.cons ?? "Cons",
    pros: [item.pros_tag_1, item.pros_tag_2, item.pros_tag_3].filter(
      Boolean
    ) as string[],
    cons: [item.cons_tag_1, item.cons_tag_2, item.cons_tag_3].filter(
      Boolean
    ) as string[],
    bestForLabel: (item.best_for ?? "Best For").replace(/:+$/, ""),
    bestForValue: item.best_for_value ?? "",
    buttonText: item.button ?? "Learn More",
  }));

  return (
    <InvestmentStrategiesView
      heading={row.title ?? "Investment Strategies"}
      subheading={
        row.subtitle ??
        "Choose the right investment approach based on your goals, timeline, and risk tolerance"
      }
      cards={cards}
    />
  );
}
