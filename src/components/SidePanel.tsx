import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutDashboard, Settings, Mic2, Info, Plus, Phone } from "lucide-react";
import { useState } from "react";

interface SidePanelProps {
  onTabChange: (value: string) => void;
}

const SidePanel = ({ onTabChange }: SidePanelProps) => {
  const [activeTab, setActiveTab] = useState('');

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    onTabChange(value);
  };

  return (
    <div className="md:h-screen fixed bottom-0 md:left-0 md:top-0 w-full md:w-64 glass-card border-t md:border-r border-white/10 z-50">
      <div className="p-4 md:p-6">
        <Tabs 
          value={activeTab}
          onValueChange={handleTabChange}
          orientation="horizontal"
          className="w-full"
        >
          <TabsList 
            className="grid grid-cols-6 md:grid-cols-1 h-auto bg-transparent text-white w-full gap-2 md:gap-4" 
          >
            <TabsTrigger 
              value="intro" 
              className={`flex justify-center md:justify-start gap-2 text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all ${activeTab === 'intro' ? 'bg-white/10' : ''}`}
            >
              <Info className="w-4 h-4" />
              <span className="hidden md:inline">Intro</span>
            </TabsTrigger>
            <TabsTrigger 
              value="new" 
              className={`flex justify-center md:justify-start gap-2 text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all ${activeTab === 'new' ? 'bg-white/10' : ''}`}
            >
              <Plus className="w-4 h-4" />
              <span className="hidden md:inline">Killer Feature</span>
            </TabsTrigger>
            <TabsTrigger 
              value="dashboard" 
              className={`flex justify-center md:justify-start gap-2 text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all ${activeTab === 'dashboard' ? 'bg-white/10' : ''}`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span className="hidden md:inline">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger 
              value="settings" 
              className={`flex justify-center md:justify-start gap-2 text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all ${activeTab === 'settings' ? 'bg-white/10' : ''}`}
            >
              <Settings className="w-4 h-4" />
              <span className="hidden md:inline">Layers</span>
            </TabsTrigger>
            <TabsTrigger 
              value="ui" 
              className={`flex justify-center md:justify-start gap-2 text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all ${activeTab === 'ui' ? 'bg-white/10' : ''}`}
            >
              <Mic2 className="w-4 h-4" />
              <span className="hidden md:inline">Interface</span>
            </TabsTrigger>
            <TabsTrigger 
              value="contact" 
              className={`flex justify-center md:justify-start gap-2 text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all ${activeTab === 'contact' ? 'bg-white/10' : ''}`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">Contact</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default SidePanel;