// (SERVER — no "use client", no framer-motion imports)

import HeroSection from "@/features/invest/components/hero/HeroSection";
import FooterSection from "@/features/layout/components/footer/FooterSection";
import Navigation from "@/features/layout/components/Navigation"; // client component
import InvestmentOpportunitiesSection from "@/features/invest/components/InvestmentOpportunities/InvestmentOpportunitiesSection";
import InvestmentPropertiesSection from "@/features/invest/components/investmentProperties/investmentPropertiesSection";
import InvestmentCalculatorSection from "@/features/invest/components/investCalculator/InvestmentCalculatorSection";
import InvestmentStrategiesSection from "@/features/invest/components/investmentStrategies/InvestmentStrategiesSection";
import MarketAnalysisSection from "@/features/invest/components/marketAnalysis/MarketAnalysisSection";
import InvestmentCTASection  from "@/features/invest/components/investmentCTA/InvestmentCTASection";
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
