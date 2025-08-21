import { Clock, Phone, UserCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Activity {
  id: string;
  type: "status_change" | "phone_call" | "assignment" | "note";
  title: string;
  description: string;
  time: string;
  duration?: string;
  status?: string;
  date?: string;
}

const activities: Activity[] = [
  {
    id: "1",
    type: "status_change",
    title: "Status Changed",
    description:
      "Status changed from New to Contacted by Dr. James Miller",
    time: "10:35 AM",
    status: "Contacted",
  },
  {
    id: "2",
    type: "phone_call",
    title: "Phone Call",
    description:
      "Initial call to introduce our facility. Eleanor expressed interest in memory care services. She has early stage Alzheimer's and needs daily assistance. Daughter (Mary) is helping with the search. Will follow up with more information via email.",
    time: "10:30 AM",
    duration: "3 min",
  },
  {
    id: "3",
    type: "assignment",
    title: "Lead Assigned",
    description: "Lead assigned to Dr. James Miller by Sarah Johnson",
    time: "2:15 PM",
    date: "Yesterday",
  },
];

const getActivityIcon = (type: string) => {
  switch (type) {
    case "status_change":
      return <UserCheck className="h-4 w-4" />;
    case "phone_call":
      return <Phone className="h-4 w-4" />;
    case "assignment":
      return <UserCheck className="h-4 w-4" />;
    default:
      return <Clock className="h-4 w-4" />;
  }
};

const ActivityTimeline = () => {
  return (
    <div className="w-full max-w-sm md:w-80 bg-healthcare-card border-l border-healthcare-border p-4 sm:p-6">
      <h2 className="text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6">
        Activity Timeline
      </h2>

      {/* Scrollable filter buttons on mobile */}
      <div className="flex space-x-4 mb-4 sm:mb-6 overflow-x-auto no-scrollbar">
        <button className="text-sm font-medium text-primary border-b-2 border-primary pb-1 whitespace-nowrap">
          All Activities
        </button>
        <button className="text-sm text-healthcare-text-light hover:text-foreground whitespace-nowrap">
          Notes
        </button>
        <button className="text-sm text-healthcare-text-light hover:text-foreground whitespace-nowrap">
          Calls
        </button>
        <button className="text-sm text-healthcare-text-light hover:text-foreground whitespace-nowrap">
          Emails
        </button>
      </div>

      <div className="space-y-6">
        {/* Today */}
        <div>
          <h3 className="text-xs sm:text-sm font-medium text-healthcare-text-light mb-2 sm:mb-3">
            Today
          </h3>
          <div className="space-y-4">
            {activities.slice(0, 2).map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                  {getActivityIcon(activity.type)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h4 className="text-sm font-medium text-foreground">
                      {activity.title}
                    </h4>
                    <div className="flex items-center space-x-2 mt-1 sm:mt-0">
                      <span className="text-xs text-healthcare-text-light">
                        {activity.time}
                      </span>
                      {activity.status && (
                        <Badge className="bg-status-contacted text-white text-xs px-2 py-0.5">
                          {activity.status}
                        </Badge>
                      )}
                      {activity.duration && (
                        <span className="text-xs text-healthcare-text-light">
                          {activity.duration}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-healthcare-text-light leading-relaxed">
                    {activity.description}
                  </p>

                  {activity.type === "phone_call" && (
                    <div className="mt-2 p-2 sm:p-3 bg-healthcare-bg rounded-md">
                      <p className="text-xs sm:text-sm text-foreground">
                        {activity.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Yesterday */}
        <div>
          <h3 className="text-xs sm:text-sm font-medium text-healthcare-text-light mb-2 sm:mb-3">
            Yesterday
          </h3>
          <div className="space-y-4">
            {activities.slice(2).map((activity) => (
              <div
                key={activity.id}
                className="flex items-start space-x-3"
              >
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                  {getActivityIcon(activity.type)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h4 className="text-sm font-medium text-foreground">
                      {activity.title}
                    </h4>
                    <span className="text-xs text-healthcare-text-light">
                      {activity.time}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-healthcare-text-light">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty state */}
        <div>
          <h3 className="text-xs sm:text-sm font-medium text-healthcare-text-light mb-2 sm:mb-3">
            April 12, 2023
          </h3>
          <div className="text-xs sm:text-sm text-healthcare-text-light text-center py-3 sm:py-4">
            No activities
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityTimeline;
