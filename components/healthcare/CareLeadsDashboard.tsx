import { useState } from "react";
import Header from "./Header";
import LeadSidebar from "./LeadSidebar";
import LeadDetails from "./LeadDetails";
import ActivityTimeline from "./ActivityTimeline";
import type { Lead } from "./LeadSidebar";

const CareLeadsDashboard = () => {
  const [selectedLeadId, setSelectedLeadId] = useState("1");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock lead data - in a real app this would come from an API
  const selectedLead: Lead = {
    id: "1",
    name: "Eleanor Wilson",
    age: 78,
    careType: "Memory Care",
    location: "Oakland, CA",
    distance: "3.2 miles",
    matchedDays: "2 days ago",
    assignedTo: "Dr. James Miller",
    status: "contacted",
  };

  return (
    <div className="h-screen flex flex-col bg-healthcare-bg">
      {/* Header */}
      <Header onMenuClick={() => setSidebarOpen(true)} />

      {/* Main layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (drawer on mobile, fixed on desktop) */}
        <div
          className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 md:static md:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <LeadSidebar
            selectedLeadId={selectedLeadId}
            onSelectLead={(id) => {
              setSelectedLeadId(id);
              setSidebarOpen(false); // close drawer on mobile select
            }}
          />
        </div>

        {/* Overlay for mobile drawer */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Lead Details */}
          <div className="flex-1 overflow-y-auto p-4">
            <LeadDetails lead={selectedLead} />
          </div>

          {/* Timeline */}
          <div className="w-full md:w-80 border-t md:border-t-0 md:border-l border-healthcare-border overflow-y-auto p-4">
            <ActivityTimeline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareLeadsDashboard;
