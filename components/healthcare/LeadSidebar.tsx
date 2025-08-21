import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface Lead {
  id: string;
  name: string;
  age: number;
  careType: string;
  location: string;
  distance: string;
  matchedDays: string;
  assignedTo: string;
  status: 'contacted' | 'new' | 'interested' | 'scheduled';
}

const leads: Lead[] = [
  {
    id: '1',
    name: 'Eleanor Wilson',
    age: 78,
    careType: 'Memory Care',
    location: 'Oakland, CA',
    distance: '3.2 miles',
    matchedDays: '2 days ago',
    assignedTo: 'Dr. James Miller',
    status: 'contacted'
  },
  {
    id: '2',
    name: 'Robert Thompson',
    age: 82,
    careType: 'Assisted Living',
    location: 'Berkeley, CA',
    distance: '5.7 miles',
    matchedDays: 'today',
    assignedTo: 'Unassigned',
    status: 'new'
  },
  {
    id: '3',
    name: 'Margaret Davis',
    age: 75,
    careType: 'Independent Living',
    location: 'San Francisco, CA',
    distance: '8.3 miles',
    matchedDays: '3 days ago',
    assignedTo: 'Sarah Johnson',
    status: 'interested'
  },
  {
    id: '4',
    name: 'William Clark',
    age: 80,
    careType: 'Skilled Nursing',
    location: 'Alameda, CA',
    distance: '4.1 miles',
    matchedDays: '5 days ago',
    assignedTo: 'Dr. James Miller',
    status: 'scheduled'
  },
  {
    id: '5',
    name: 'Patricia Lewis',
    age: 73,
    careType: 'Memory Care',
    location: 'Richmond, CA',
    distance: '6.8 miles',
    matchedDays: '1 day ago',
    assignedTo: 'Unassigned',
    status: 'new'
  }
];

const statusColors = {
  contacted: 'bg-status-contacted text-white',
  new: 'bg-status-new text-white',
  interested: 'bg-status-interested text-white',
  scheduled: 'bg-status-scheduled text-white'
};

interface LeadSidebarProps {
  selectedLeadId: string;
  onSelectLead: (leadId: string) => void;
}

const LeadSidebar = ({ selectedLeadId, onSelectLead }: LeadSidebarProps) => {
  return (
    <div className="w-80 bg-healthcare-sidebar border-r border-healthcare-border flex flex-col">
      <div className="p-4 border-b border-healthcare-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Lead Inbox</h2>
          <Button size="sm" className="bg-primary hover:bg-primary-hover text-primary-foreground">
            <Plus className="h-4 w-4 mr-1" />
            New Lead
          </Button>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-healthcare-text-light h-4 w-4" />
          <Input
            placeholder="Search leads..."
            className="pl-10 bg-healthcare-card border-healthcare-border"
          />
        </div>
        
        <div className="flex space-x-2 mt-4">
          <Button variant="ghost" size="sm" className="text-sm">
            All Leads
          </Button>
          <Button variant="ghost" size="sm" className="text-sm text-healthcare-text-light">
            New
          </Button>
          <Button variant="ghost" size="sm" className="text-sm text-healthcare-text-light">
            Contacted
          </Button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {leads.map((lead) => (
          <div
            key={lead.id}
            onClick={() => onSelectLead(lead.id)}
            className={`p-4 border-b border-healthcare-border cursor-pointer hover:bg-healthcare-card transition-colors ${
              selectedLeadId === lead.id ? 'bg-healthcare-card border-l-4 border-l-primary' : ''
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-foreground">{lead.name}</h3>
              <Badge className={`text-xs px-2 py-1 ${statusColors[lead.status]} capitalize`}>
                {lead.status}
              </Badge>
            </div>
            
            <div className="text-sm text-healthcare-text-light space-y-1">
              <p>{lead.age} years old • {lead.careType}</p>
              <p>{lead.location} • {lead.distance}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs">Matched {lead.matchedDays}</span>
                <span className="text-xs">{lead.assignedTo}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadSidebar;
export type { Lead };