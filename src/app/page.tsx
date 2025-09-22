// src/app/page.tsx  (SERVER — no "use client", no framer-motion imports)
import Navigation from "@/component/Navigation"; // client component
import type { Metadata } from "next";
import HeroSection from "@/component/home/hero/HeroSection"; // server component (fetches data)
import PropertyListings from "@/component/home/property/PropertySection"; // server or client-safe
import ServicesSection from "@/component/home/ourServices/OurServicesSection"; // server
import InvestmentTools from "@/component/home/investmentTools/InvestmentToolsSection"; // server
import AgentsSection from "@/component/home/agent/AgentsSection"; // server
import FooterSection from "@/component/footer/FooterSection";
import MarketInsightsSection from "@/component/home/marketInsights/MarketInsightsSection"; // server
import ContactSection from "@/component/home/contact/ContactSection";



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
