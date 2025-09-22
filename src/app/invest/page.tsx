// (SERVER — no "use client", no framer-motion imports)

import HeroSection from "@/component/invest/hero/HeroSection";
import FooterSection from "@/component/footer/FooterSection";
import Navigation from "@/component/Navigation"; // client component
import InvestmentOpportunitiesSection from "@/component/invest/InvestmentOpportunities/InvestmentOpportunitiesSection";
import InvestmentPropertiesSection from "@/component/invest/investmentProperties/investmentPropertiesSection";
import InvestmentCalculatorSection from "@/component/invest/investCalculator/InvestmentCalculatorSection";
import InvestmentStrategiesSection from "@/component/invest/investmentStrategies/InvestmentStrategiesSection";
import MarketAnalysisSection from "@/component/invest/marketAnalysis/MarketAnalysisSection";
import InvestmentCTASection  from "@/component/invest/investmentCTA/InvestmentCTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invest in Real Estate — Opportunities, Strategies, Tools",
  description:
    "Find curated investment opportunities, market analysis, and calculators to plan and grow your real estate portfolio.",
  keywords: [
    "real estate investment",
    "ROI",
    "market analysis",
    "investment properties",
    "calculator",
    "Saudi Arabia",
  ],
};

export default function InvestmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <InvestmentOpportunitiesSection />
      <InvestmentPropertiesSection />
      <InvestmentCalculatorSection />
      <InvestmentStrategiesSection />
      <MarketAnalysisSection />
      <InvestmentCTASection  />

      <FooterSection />
    </div>
  );
}
