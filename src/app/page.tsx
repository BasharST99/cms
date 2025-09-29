// src/app/page.tsx  (SERVER — no "use client", no framer-motion imports)
import Navigation from "@/features/layout/components/Navigation"; // client component
import type { Metadata } from "next";
import HeroSection from "@/features/home/components/hero/HeroSection"; // server component (fetches data)
import PropertyListings from "@/features/home/components/property/PropertySection"; // server or client-safe
import ServicesSection from "@/features/home/components/ourServices/OurServicesSection"; // server
import InvestmentTools from "@/features/home/components/investmentTools/InvestmentToolsSection"; // server
import AgentsSection from "@/features/home/components/agent/AgentsSection"; // server
import FooterSection from "@/features/layout/components/footer/FooterSection";
import MarketInsightsSection from "@/features/home/components/marketInsights/MarketInsightsSection"; // server
import ContactSection from "@/features/home/components/contact/ContactSection";



export const metadata: Metadata = {
  title: "Premium Real Estate — Buy, Sell, Invest",
  description:
    "Explore premium properties, expert agents, and powerful investment tools to achieve your real estate goals.",
  keywords: [
    "real estate",
    "properties",
    "buy",
    "sell",
    "invest",
    "agents",
    "market insights",
  ],
};

export default async function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <PropertyListings />
      <ServicesSection />
      <InvestmentTools />
      <AgentsSection />
      <MarketInsightsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
