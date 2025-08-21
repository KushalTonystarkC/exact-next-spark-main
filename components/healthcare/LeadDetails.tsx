import { Phone, Mail, Calendar, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Lead } from "./LeadSidebar";

interface LeadDetailsProps {
  lead: Lead;
}

const LeadDetails = ({ lead }: LeadDetailsProps) => {
  return (
    <div className="flex-1 bg-healthcare-card p-6">
      <div className="max-w-2xl">
        {/* Lead Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-lg">
              {lead.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h1 className="text-xl font-semibold text-foreground">{lead.name}</h1>
              <p className="text-healthcare-text-light">{lead.age} years old • {lead.careType}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              Edit Profile
            </Button>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Status and Assignment */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="text-sm font-medium text-foreground block mb-2">Lead Status</label>
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
            <label className="text-sm font-medium text-foreground block mb-2">Assigned To</label>
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
        <div className="flex space-x-3 mb-8">
          <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
            <Phone className="h-4 w-4 mr-2" />
            Call
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Mail className="h-4 w-4 mr-2" />
            Email
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule
          </Button>
        </div>

        {/* Lead Details */}
        <div className="bg-healthcare-bg rounded-lg p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Lead Details</h2>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-healthcare-text-light">Full Name</label>
                <p className="text-foreground">{lead.name}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-healthcare-text-light">Phone Number</label>
                <p className="text-foreground">(510) 555-7890</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-healthcare-text-light">Current Location</label>
                <p className="text-foreground">{lead.location}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-healthcare-text-light">Care Needs</label>
                <p className="text-foreground">{lead.careType} - Early stage Alzheimer's, requires medication management and daily assistance with activities.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-healthcare-text-light">Date of Birth</label>
                <p className="text-foreground">March 15, 1945 ({lead.age} years)</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-healthcare-text-light">Email Address</label>
                <p className="text-foreground">eleanor.wilson@example.com</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-healthcare-text-light">Distance</label>
                <p className="text-foreground">{lead.distance} from facility</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-healthcare-text-light">Insurance</label>
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