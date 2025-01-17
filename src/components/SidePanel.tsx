import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutDashboard, Settings, Mic2, Info, Plus } from "lucide-react";
import { useRef, useEffect, useState } from "react";

interface SidePanelProps {
  onTabChange: (value: string) => void;
}

const SidePanel = ({ onTabChange }: SidePanelProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showRightIndicator, setShowRightIndicator] = useState(false);
  const [activeTab, setActiveTab] = useState('intro');

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowRightIndicator(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

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
                className={`flex-1 md:w-full justify-center md:justify-start gap-2 text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all snap-start scroll-ml-4 min-w-[100px] md:min-w-full ${activeTab === 'intro' ? 'bg-white/10 text-white border-dashboard-accent1' : 'text-white/70'}`}
              >
                <Info className="w-4 h-4" />
                <span className="hidden md:inline">Intro</span>
              </TabsTrigger>
              <TabsTrigger 
                value="settings" 
                className={`flex-1 md:w-full justify-center md:justify-start gap-2 text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all snap-start scroll-ml-4 min-w-[100px] md:min-w-full ${activeTab === 'settings' ? 'bg-white/10 text-white border-dashboard-accent1' : 'text-white/70'}`}
              >
                <Settings className="w-4 h-4" />
                <span className="hidden md:inline">Layers</span>
              </TabsTrigger>
              <TabsTrigger 
                value="new" 
                className={`flex-1 md:w-full justify-center md:justify-start gap-2 text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all snap-start scroll-ml-4 min-w-[100px] md:min-w-full ${activeTab === 'new' ? 'bg-white/10 text-white border-dashboard-accent1' : 'text-white/70'}`}
              >
                <Plus className="w-4 h-4" />
                <span className="hidden md:inline">Killer Feature</span>
              </TabsTrigger>
              <TabsTrigger 
                value="dashboard" 
                className={`flex-1 md:w-full justify-center md:justify-start gap-2 text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all snap-start scroll-ml-4 min-w-[100px] md:min-w-full ${activeTab === 'dashboard' ? 'bg-white/10 text-white border-dashboard-accent1' : 'text-white/70'}`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span className="hidden md:inline">Dashboard</span>
              </TabsTrigger>
              <TabsTrigger 
                value="ui" 
                className={`flex-1 md:w-full justify-center md:justify-start gap-2 text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all snap-start scroll-ml-4 min-w-[100px] md:min-w-full ${activeTab === 'ui' ? 'bg-white/10 text-white border-dashboard-accent1' : 'text-white/70'}`}
              >
                <Mic2 className="w-4 h-4" />
                <span className="hidden md:inline">UI</span>
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default SidePanel;