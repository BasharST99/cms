import Navigation from "@/features/layout/components/Navigation";
import FooterSection from "@/features/layout/components/footer/FooterSection";
import PropertiesExplorerClient from "@/features/properties/components/explorer";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <PropertiesExplorerClient />
      <FooterSection />
    </div>
  );
}
