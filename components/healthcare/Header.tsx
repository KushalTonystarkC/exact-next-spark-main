import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-healthcare-card border-b border-healthcare-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="bg-primary text-primary-foreground px-3 py-1 rounded-md font-semibold">
              CareLeads
            </div>
          </div>
          <nav className="flex items-center space-x-6">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Dashboard
            </Button>
            <Button variant="ghost" className="text-primary font-medium">
              Leads
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Patients
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Calendar
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Reports
            </Button>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-healthcare-text-light h-4 w-4" />
            <Input
              placeholder="Search..."
              className="pl-10 w-64 bg-healthcare-bg border-healthcare-border"
            />
          </div>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full text-xs w-5 h-5 flex items-center justify-center">
              3
            </span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;