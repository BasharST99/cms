// src/app/page.tsx  (SERVER — no "use client", no framer-motion imports)
import Navigation from "@/component/Navigation"; // client component
import HeroSection from "@/component/home/HeroSection"; // server component (fetches data)
import PropertyListings from "@/component/property/PropertySection"; // server or client-safe
import ServicesSection from "@/component/ourServices/OurServicesSection"; // server
import InvestmentTools from "@/component/investmentTools/InvestmentToolsSection"; // server
import AgentsSection from "@/component/agent/AgentsSection"; // server
import FooterSection from "@/component/footer/FooterSection";
import MarketInsightsSection from "@/component/marketInsights/MarketInsightsSection"; // server
import ContactSection from "@/component/contact/ContactSection";



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
