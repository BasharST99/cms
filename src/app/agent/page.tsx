import AgentsPage from "@/component/agent/AgentsPage";
import Navigation from "@/component/Navigation";

export default function Page() {
  return (
    
    <div className="min-h-screen bg-white">

      <AgentsPage
        title="Estate Agents"
        subtitle="Search for the agent by name or region or state."
        buttonLabel="Load More"
        searchPlaceholder="Search by name, specialties, etc." // <- stable prop
      />
    </div>
  );
}
