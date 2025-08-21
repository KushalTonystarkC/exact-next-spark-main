import { useState } from "react";
import Header from "./Header";
import LeadSidebar from "./LeadSidebar";
import LeadDetails from "./LeadDetails";
import ActivityTimeline from "./ActivityTimeline";
import type { Lead } from "./LeadSidebar";

const CareLeadsDashboard = () => {
  const [selectedLeadId, setSelectedLeadId] = useState('1');

  // Mock lead data - in a real app this would come from an API
  const selectedLead: Lead = {
    id: '1',
    name: 'Eleanor Wilson',
    age: 78,
    careType: 'Memory Care',
    location: 'Oakland, CA',
    distance: '3.2 miles',
    matchedDays: '2 days ago',
    assignedTo: 'Dr. James Miller',
    status: 'contacted'
  };

  return (
    <div className="h-screen bg-healthcare-bg flex flex-col">
      <Header />
      
      <div className="flex-1 flex overflow-hidden">
        <LeadSidebar 
          selectedLeadId={selectedLeadId} 
          onSelectLead={setSelectedLeadId} 
        />
        
        <LeadDetails lead={selectedLead} />
        
        <ActivityTimeline />
      </div>
    </div>
  );
};

export default CareLeadsDashboard;