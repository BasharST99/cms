// src/component/investmentTools/InvestmentToolsSection.tsx (SERVER)
import { dxGet } from "@/lib/directus/server";
import InvestmentToolsView from "./InvestmentToolsView";

type InvestmentToolsRow = {
  id: number;
  title: string;
  subtitle: string;
  roi_calculator_title: string;
  property_value: string;
  monthly_rent: string;
  loan_amount: string;
  interest_rate: string;
  loan_term: string;
  investment_summary: string;
  monthly_payment: string;
  annual_rent: string;
  market_insights: string;
  market_insights_tag1: string;
  market_insights_tag2: string;
  market_insights_tag3: string;
  get_investment_consultation: string;
};

export default async function InvestmentToolsSection() {
  const { data } = await dxGet<{ data: InvestmentToolsRow[] }>(
    "/items/investment_tools",
    { limit: "1" },
    120
  );
  const row = data?.[0] ?? null;
  if (!row) return null;
  return <InvestmentToolsView data={row} />;
}
