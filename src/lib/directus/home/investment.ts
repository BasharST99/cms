// src/lib/directus/home/investment.ts
import { fetchJSON } from "../client";
export type InvestmentToolsRow = { id: number; title: string; subtitle: string; /* …rest */ };

export async function fetchInvestmentTools({ auth }: { auth?: "public" | "server" } = {}) {
  return (
    await fetchJSON<{ data: InvestmentToolsRow[] }>("/items/investment_tools", { limit: "1" }, { auth })
  ).data?.[0] ?? null;
}
