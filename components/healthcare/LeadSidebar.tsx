import { Search, Plus, X } from "lucide-react";
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
  status: "contacted" | "new" | "interested" | "scheduled";
}

const leads: Lead[] = [
  {
    id: "1",
    name: "Eleanor Wilson",
    age: 78,
    careType: "Memory Care",
    location: "Oakland, CA",
    distance: "3.2 miles",
    matchedDays: "2 days ago",
    assignedTo: "Dr. James Miller",
    status: "contacted",
  },
  {
    id: "2",
    name: "Robert Thompson",
    age: 82,
    careType: "Assisted Living",
    location: "Berkeley, CA",
    distance: "5.7 miles",
    matchedDays: "today",
    assignedTo: "Unassigned",
    status: "new",
  },
  {
    id: "3",
    name: "Margaret Davis",
    age: 75,
    careType: "Independent Living",
    location: "San Francisco, CA",
    distance: "8.3 miles",
    matchedDays: "3 days ago",
    assignedTo: "Sarah Johnson",
    status: "interested",
  },
  {
    id: "4",
    name: "William Clark",
    age: 80,
    careType: "Skilled Nursing",
    location: "Alameda, CA",
    distance: "4.1 miles",
    matchedDays: "5 days ago",
    assignedTo: "Dr. James Miller",
    status: "scheduled",
  },
  {
    id: "5",
    name: "Patricia Lewis",
    age: 73,
    careType: "Memory Care",
    location: "Richmond, CA",
    distance: "6.8 miles",
    matchedDays: "1 day ago",
    assignedTo: "Unassigned",
    status: "new",
  },
];

const statusColors = {
  contacted: "bg-status-contacted text-white",
  new: "bg-status-new text-white",
  interested: "bg-status-interested text-white",
  scheduled: "bg-status-scheduled text-white",
};

interface LeadSidebarProps {
  selectedLeadId: string;
  onSelectLead: (leadId: string) => void;
  isOpen?: boolean; // 👈 for mobile drawer
  onClose?: () => void; // 👈 close handler for mobile
}

const LeadSidebar = ({
  selectedLeadId,
  onSelectLead,
  isOpen = false,
  onClose,
}: LeadSidebarProps) => {
  return (
    <>
      {/* Overlay (mobile only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 sm:w-80 bg-healthcare-sidebar border-r border-healthcare-border flex flex-col transform transition-transform duration-300 md:static md:translate-x-0 md:w-80
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header (with close button on mobile) */}
        <div className="p-4 border-b border-healthcare-border flex items-center justify-between">
          <h2 className="text-lg font-semibold text-foreground">Lead Inbox</h2>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              className="bg-primary hover:bg-primary-hover text-primary-foreground hidden sm:flex"
            >
              <Plus className="h-4 w-4 mr-1" />
              New Lead
            </Button>
            {/* Close button (mobile only) */}
            {onClose && (
              <button
                className="md:hidden p-2 rounded hover:bg-healthcare-card"
                onClick={onClose}
              >
                <X className="h-5 w-5 text-healthcare-text-light" />
              </button>
            )}
          </div>
        </div>

        {/* Search + Filters */}
        <div className="p-4 border-b border-healthcare-border">
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-healthcare-text-light h-4 w-4" />
            <Input
              placeholder="Search leads..."
              className="pl-10 bg-healthcare-card border-healthcare-border"
            />
          </div>

          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" className="text-sm">
              All Leads
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-sm text-healthcare-text-light"
            >
              New
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-sm text-healthcare-text-light"
            >
              Contacted
            </Button>
          </div>
        </div>

        {/* Lead List */}
        <div className="flex-1 overflow-y-auto">
          {leads.map((lead) => (
            <div
              key={lead.id}
              onClick={() => {
                onSelectLead(lead.id);
                if (onClose) onClose(); // close drawer on select (mobile)
              }}
              className={`p-4 border-b border-healthcare-border cursor-pointer hover:bg-healthcare-card transition-colors ${
                selectedLeadId === lead.id
                  ? "bg-healthcare-card border-l-4 border-l-primary"
                  : ""
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-foreground">{lead.name}</h3>
                <Badge
                  className={`text-xs px-2 py-1 ${statusColors[lead.status]} capitalize`}
                >
                  {lead.status}
                </Badge>
              </div>

              <div className="text-sm text-healthcare-text-light space-y-1">
                <p>
                  {lead.age} years old • {lead.careType}
                </p>
                <p>
                  {lead.location} • {lead.distance}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs">Matched {lead.matchedDays}</span>
                  <span className="text-xs">{lead.assignedTo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LeadSidebar;
export type { Lead };
