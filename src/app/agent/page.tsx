import AgentsSection from "@/features/agents/components/AgentsSection";
import Navigation from "@/features/layout/components/Navigation";
import FooterSection from "@/features/layout/components/footer/FooterSection";

export default function Page() {
  return (
    <div className="min-h-screen bg-white space-y-14">
      <Navigation />
      <AgentsSection
        title="Estate Agents"
        subtitle="Search for the agent by name or region or state."
        buttonLabel="Contact"
      />
      <FooterSection />
    </div>
  );
}
