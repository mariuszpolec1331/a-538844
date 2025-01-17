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
        <h2 className="text-lg md:text-xl font-medium mb-4 md:mb-6 hidden md:block">Navigation</h2>
        <Tabs 
          defaultValue="intro" 
          orientation="horizontal"
          className="w-full"
          onValueChange={handleTabChange}
          value={activeTab}
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
                className="flex-1 md:w-full justify-center md:justify-start gap-2 data-[state=active]:bg-white/10 data-[state=active]:text-white data-[state=active]:border-dashboard-accent1 text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all snap-start scroll-ml-4 min-w-[100px] md:min-w-full"
              >
                <Info className="w-4 h-4" />
                <span className="hidden md:inline">Intro</span>
              </TabsTrigger>
              <TabsTrigger 
                value="settings" 
                className="flex-1 md:w-full justify-center md:justify-start gap-2 data-[state=active]:bg-white/10 data-[state=active]:text-white data-[state=active]:border-dashboard-accent1 text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all snap-start scroll-ml-4 min-w-[100px] md:min-w-full"
              >
                <Settings className="w-4 h-4" />
                <span className="hidden md:inline">Layers</span>
              </TabsTrigger>
              <TabsTrigger 
                value="new" 
                className="flex-1 md:w-full justify-center md:justify-start gap-2 data-[state=active]:bg-white/10 data-[state=active]:text-white data-[state=active]:border-dashboard-accent1 text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all snap-start scroll-ml-4 min-w-[100px] md:min-w-full"
              >
                <Plus className="w-4 h-4" />
                <span className="hidden md:inline">Killer Feature</span>
              </TabsTrigger>
              <TabsTrigger 
                value="dashboard" 
                className="flex-1 md:w-full justify-center md:justify-start gap-2 data-[state=active]:bg-white/10 data-[state=active]:text-white data-[state=active]:border-dashboard-accent1 text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all snap-start scroll-ml-4 min-w-[100px] md:min-w-full"
              >
                <LayoutDashboard className="w-4 h-4" />
                <span className="hidden md:inline">Dashboard</span>
              </TabsTrigger>
              <TabsTrigger 
                value="ui" 
                className="flex-1 md:w-full justify-center md:justify-start gap-2 data-[state=active]:bg-white/10 data-[state=active]:text-white data-[state=active]:border-dashboard-accent1 text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all snap-start scroll-ml-4 min-w-[100px] md:min-w-full"
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