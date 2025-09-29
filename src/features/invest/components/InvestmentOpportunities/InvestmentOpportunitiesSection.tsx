// SERVER COMPONENT (no "use client")
import { dxGet } from "@/lib/directus/server";
import InvestmentOpportunitiesView from "./InvestmentOpportunitiesClient";

type CardItem = {
  id: number;
  title?: string;                 // "Commercial Real Estate"
  subtitle?: string;              // description
  avg_roi?: string;               // label "Avg. ROI"
  avg_roi_value?: string;         // "10-15%"
  min_investment?: string;        // label "Min. Investment"
  min_investment_value?: string;  // "₹5M"
  risk_level?: string;            // label "Risk Level"
  risk_level_value?: string;      // "Medium"
  tag1?: string; tag2?: string; tag3?: string; tag4?: string; // features
  button_text?: string;           // "Explore Properties"
};

type Row = {
  id: number;
  title?: string;                 // section title
  subtitle?: string;              // section subtitle
  investment_opportunities_cards?: { item: CardItem }[];
};

export default async function InvestmentOpportunitiesSection() {
  const { data } = await dxGet<{ data: Row[] }>(
    "/items/investment_opportunities",
    { fields: "*,investment_opportunities_cards.item.*", limit: "1" },
    1800 // ISR: 30 min
  );

  const row = data?.[0];
  if (!row) return null;

  const cards = (row.investment_opportunities_cards ?? []).map(({ item }) => ({
    title: item.title ?? "",
    description: item.subtitle ?? "",
    avgLabel: item.avg_roi ?? "Avg. ROI",
    avgValue: item.avg_roi_value ?? "",
    minLabel: item.min_investment ?? "Min. Investment",
    minValue: item.min_investment_value ?? "",
    riskLabel: item.risk_level ?? "Risk Level",
    riskValue: item.risk_level_value ?? "Medium",
    features: [item.tag1, item.tag2, item.tag3, item.tag4].filter(Boolean) as string[],
    buttonText: item.button_text ?? "Explore Properties",
  }));

  return (
    <InvestmentOpportunitiesView
      heading={row.title ?? "Investment Opportunities"}
      subheading={row.subtitle ?? "Choose from various investment types that match your risk profile and return expectations"}
      cards={cards}
    />
  );
}
