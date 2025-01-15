import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutDashboard, Settings, Users } from "lucide-react";

interface SidePanelProps {
  onTabChange: (value: string) => void;
}

const SidePanel = ({ onTabChange }: SidePanelProps) => {
  return (
    <div className="md:h-screen fixed bottom-0 md:left-0 md:top-0 w-full md:w-64 glass-card border-t md:border-r border-white/10 z-50">
      <div className="p-4 md:p-6">
        <h2 className="text-lg md:text-xl font-medium mb-4 md:mb-6 hidden md:block">Navigation</h2>
        <Tabs 
          defaultValue="dashboard" 
          orientation="horizontal"
          className="w-full"
          onValueChange={onTabChange}
        >
          <TabsList className="flex md:flex-col h-auto bg-transparent text-white w-full justify-between md:justify-start">
            <TabsTrigger 
              value="dashboard" 
              className="flex-1 md:w-full justify-center md:justify-start gap-2 data-[state=active]:bg-white/10 data-[state=active]:text-white text-xs md:text-sm"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span className="hidden md:inline">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger 
              value="users" 
              className="flex-1 md:w-full justify-center md:justify-start gap-2 data-[state=active]:bg-white/10 data-[state=active]:text-white text-xs md:text-sm"
            >
              <Users className="w-4 h-4" />
              <span className="hidden md:inline">Users</span>
            </TabsTrigger>
            <TabsTrigger 
              value="settings" 
              className="flex-1 md:w-full justify-center md:justify-start gap-2 data-[state=active]:bg-white/10 data-[state=active]:text-white text-xs md:text-sm"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden md:inline">Settings</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default SidePanel;