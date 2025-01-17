import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutDashboard, Settings, Users, Mic2, Info, Plus, GitMerge, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

interface SidePanelProps {
  onTabChange: (value: string) => void;
}

const SidePanel = ({ onTabChange }: SidePanelProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showRightIndicator, setShowRightIndicator] = useState(false);
  const [activeTabName, setActiveTabName] = useState("Intro");

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowRightIndicator(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const handleTabChange = (value: string) => {
    onTabChange(value);
    const tabNames: { [key: string]: string } = {
      intro: "Intro",
      settings: "Layers",
      new: "Killer Feature",
      dashboard: "Dashboard",
      users: "Users",
      ui: "UI",
      gtm: "GTM"
    };
    setActiveTabName(tabNames[value]);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  return (
    <div className="md:h-screen fixed bottom-0 md:left-0 md:top-0 w-full md:w-64 glass-card border-t md:border-r border-white/10 z-50">
      <div className="p-4 md:p-6">
        {/* Stats Display - Only visible on mobile */}
        <div className="md:hidden mb-4 flex justify-around text-white/80">
          <div className="text-center">
            <div className="text-sm font-medium">AI Agents</div>
            <div className="text-lg font-bold">1,350</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium">AI Experts</div>
            <div className="text-lg font-bold">653</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium">Scenarios</div>
            <div className="text-lg font-bold">340</div>
          </div>
        </div>

        <h2 className="text-lg md:text-xl font-medium mb-4 md:mb-6 hidden md:block">Navigation</h2>
        {/* Mobile Tab Name Display */}
        <div className="md:hidden text-sm font-medium text-white/80 mb-3 text-center">
          {activeTabName}
        </div>
        <Tabs 
          defaultValue="intro" 
          orientation="horizontal"
          className="w-full"
          onValueChange={handleTabChange}
        >
          <div className="relative">
            <TabsList 
              ref={scrollContainerRef}
              onScroll={checkScroll}
              className="flex md:flex-col h-auto bg-transparent text-white w-full justify-between md:justify-start gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide scroll-smooth" 
              style={{
                scrollBehavior: 'smooth',
                WebkitOverflowScrolling: 'touch',
                msOverflowStyle: '-ms-autohiding-scrollbar'
              }}
            >
              <TabsTrigger 
                value="intro" 
                className="flex-1 md:w-full justify-center md:justify-start gap-2 data-[state=active]:bg-white/10 data-[state=active]:text-white text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all snap-start scroll-ml-4 min-w-[100px] md:min-w-full"
              >
                <Info className="w-6 h-6 md:w-4 md:h-4" />
                <span className="hidden md:inline">Intro</span>
              </TabsTrigger>
              <TabsTrigger 
                value="settings" 
                className="flex-1 md:w-full justify-center md:justify-start gap-2 data-[state=active]:bg-white/10 data-[state=active]:text-white text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all snap-start scroll-ml-4 min-w-[100px] md:min-w-full"
              >
                <Settings className="w-6 h-6 md:w-4 md:h-4" />
                <span className="hidden md:inline">Layers</span>
              </TabsTrigger>
              <TabsTrigger 
                value="new" 
                className="flex-1 md:w-full justify-center md:justify-start gap-2 data-[state=active]:bg-white/10 data-[state=active]:text-white text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all snap-start scroll-ml-4 min-w-[100px] md:min-w-full"
              >
                <Plus className="w-6 h-6 md:w-4 md:h-4" />
                <span className="hidden md:inline">Killer Feature</span>
              </TabsTrigger>
              <TabsTrigger 
                value="dashboard" 
                className="flex-1 md:w-full justify-center md:justify-start gap-2 data-[state=active]:bg-white/10 data-[state=active]:text-white text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all snap-start scroll-ml-4 min-w-[100px] md:min-w-full"
              >
                <LayoutDashboard className="w-6 h-6 md:w-4 md:h-4" />
                <span className="hidden md:inline">Dashboard</span>
              </TabsTrigger>
              <TabsTrigger 
                value="users" 
                className="flex-1 md:w-full justify-center md:justify-start gap-2 data-[state=active]:bg-white/10 data-[state=active]:text-white text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all snap-start scroll-ml-4 min-w-[100px] md:min-w-full"
              >
                <Users className="w-6 h-6 md:w-4 md:h-4" />
                <span className="hidden md:inline">Users</span>
              </TabsTrigger>
              <TabsTrigger 
                value="ui" 
                className="flex-1 md:w-full justify-center md:justify-start gap-2 data-[state=active]:bg-white/10 data-[state=active]:text-white text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all snap-start scroll-ml-4 min-w-[100px] md:min-w-full"
              >
                <Mic2 className="w-6 h-6 md:w-4 md:h-4" />
                <span className="hidden md:inline">UI</span>
              </TabsTrigger>
              <TabsTrigger 
                value="gtm" 
                className="flex-1 md:w-full justify-center md:justify-start gap-2 data-[state=active]:bg-white/10 data-[state=active]:text-white text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all snap-start scroll-ml-4 min-w-[100px] md:min-w-full"
              >
                <GitMerge className="w-6 h-6 md:w-4 md:h-4" />
                <span className="hidden md:inline">GTM</span>
              </TabsTrigger>
            </TabsList>
            {showRightIndicator && (
              <div className="absolute right-0 top-1/2 -translate-y-1/2 md:hidden">
                <ChevronRight className="w-6 h-6 text-white/50 animate-pulse-ring" />
              </div>
            )}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default SidePanel;