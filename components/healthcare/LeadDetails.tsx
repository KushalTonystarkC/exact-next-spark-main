import { Phone, Mail, Calendar, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import type { Lead } from "./LeadSidebar";

interface LeadDetailsProps {
  lead: Lead;
}
export interface Lead {
  id: string;
  name: string;
  age: number;
  careType: string;
  location: string;
  distance: string;
  matchedDays: string;
  assignedTo: string;
  status: "new" | "contacted" | "interested" | "scheduled";
}


const LeadDetails = ({ lead }: LeadDetailsProps) => {
  return (
    <div className="flex-1 bg-healthcare-card p-4 sm:p-6 overflow-y-auto">
      <div className="max-w-2xl mx-auto">
        {/* Lead Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-lg">
              {lead.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-semibold text-foreground">
                {lead.name}
              </h1>
              <p className="text-healthcare-text-light text-sm sm:text-base">
                {lead.age} years old • {lead.careType}
              </p>
            </div>
          </div>

          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="whitespace-nowrap">
              Edit Profile
            </Button>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Status and Assignment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
          <div>
            <label className="text-sm font-medium text-foreground block mb-2">
              Lead Status
            </label>
            <Select defaultValue={lead.status}>
              <SelectTrigger className="bg-healthcare-bg border-healthcare-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="contacted">Contacted</SelectItem>
                <SelectItem value="interested">Interested</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground block mb-2">
              Assigned To
            </label>
            <Select defaultValue={lead.assignedTo}>
              <SelectTrigger className="bg-healthcare-bg border-healthcare-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Dr. James Miller">Dr. James Miller</SelectItem>
                <SelectItem value="Sarah Johnson">Sarah Johnson</SelectItem>
                <SelectItem value="Unassigned">Unassigned</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0 mb-8">
          <Button className="bg-primary hover:bg-primary-hover text-primary-foreground w-full sm:w-auto">
            <Phone className="h-4 w-4 mr-2" />
            Call
          </Button>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
          >
            <Mail className="h-4 w-4 mr-2" />
            Email
          </Button>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Schedule
          </Button>
        </div>

        {/* Lead Details */}
        <div className="bg-healthcare-bg rounded-lg p-4 sm:p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Lead Details
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-healthcare-text-light">
                  Full Name
                </label>
                <p className="text-foreground">{lead.name}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-healthcare-text-light">
                  Phone Number
                </label>
                <p className="text-foreground">(510) 555-7890</p>
              </div>

              <div>
                <label className="text-sm font-medium text-healthcare-text-light">
                  Current Location
                </label>
                <p className="text-foreground">{lead.location}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-healthcare-text-light">
                  Care Needs
                </label>
                <p className="text-foreground text-sm sm:text-base">
                  {lead.careType} - Early stage Alzheimer's, requires medication
                  management and daily assistance with activities.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-healthcare-text-light">
                  Date of Birth
                </label>
                <p className="text-foreground">
                  March 15, 1945 ({lead.age} years)
                </p>
              </div>

              <div>
                <label className="text-sm font-medium text-healthcare-text-light">
                  Email Address
                </label>
                <p className="text-foreground">eleanor.wilson@example.com</p>
              </div>

              <div>
                <label className="text-sm font-medium text-healthcare-text-light">
                  Distance
                </label>
                <p className="text-foreground">{lead.distance} from facility</p>
              </div>

              <div>
                <label className="text-sm font-medium text-healthcare-text-light">
                  Insurance
                </label>
                <p className="text-foreground">Medicare + Supplemental</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadDetails;
