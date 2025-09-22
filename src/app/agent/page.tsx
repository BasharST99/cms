import AgentsSection from "@/components/agents/AgentsSection";
import Navigation from "@/component/Navigation";
import FooterSection from "@/component/footer/FooterSection";

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
