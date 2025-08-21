import { Bell, Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-healthcare-card border-b border-healthcare-border px-4 sm:px-6 py-3 sm:py-4">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-4 sm:space-x-8">
          {/* Logo */}
          <div className="bg-primary text-primary-foreground px-3 py-1 rounded-md font-semibold">
            CareLeads
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
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

        {/* Right Section */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Desktop Search */}
          <div className="hidden sm:block relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-healthcare-text-light h-4 w-4" />
            <Input
              placeholder="Search..."
              className="pl-10 w-48 sm:w-64 bg-healthcare-bg border-healthcare-border"
            />
          </div>

          {/* Mobile Search Icon */}
          <Button variant="ghost" size="icon" className="sm:hidden">
            <Search className="h-5 w-5" />
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full text-xs w-5 h-5 flex items-center justify-center">
              3
            </span>
          </Button>

          {/* Profile */}
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>

          {/* Mobile Menu */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <nav className="md:hidden mt-3 space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start text-primary font-medium">
            Leads
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Patients
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Calendar
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Reports
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
