import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutDashboard, Settings, Mic2, Info, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

interface SidePanelProps {
  onTabChange: (value: string) => void;
}

const SidePanel = ({ onTabChange }: SidePanelProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showRightIndicator, setShowRightIndicator] = useState(false);
  const [showLeftIndicator, setShowLeftIndicator] = useState(false);
  const [activeTab, setActiveTab] = useState('intro');

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowRightIndicator(scrollLeft + clientWidth < scrollWidth - 10);
      setShowLeftIndicator(scrollLeft > 10);
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

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="md:h-screen fixed bottom-0 md:left-0 md:top-0 w-full md:w-64 glass-card border-t md:border-r border-white/10 z-50">
      <div className="p-4 md:p-6">
        <Tabs 
          defaultValue={activeTab}
          value={activeTab}
          onValueChange={handleTabChange}
          orientation="horizontal"
          className="w-full"
        >
          <div className="relative">
            {showLeftIndicator && (
              <button 
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 md:hidden bg-black/50 rounded-full p-1"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>
            )}
            {showRightIndicator && (
              <button 
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 md:hidden bg-black/50 rounded-full p-1"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            )}
            <TabsList 
              ref={scrollContainerRef}
              onScroll={checkScroll}
              className="flex md:flex-col h-auto bg-transparent text-white w-full justify-between md:justify-start gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide scroll-smooth px-6 md:px-0" 
            >
              <TabsTrigger 
                value="intro" 
                className={`flex-1 md:w-full justify-center md:justify-start gap-2 text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all snap-start scroll-ml-4 min-w-[100px] md:min-w-full ${activeTab === 'intro' ? 'bg-white/10' : ''}`}
              >
                <Info className="w-4 h-4" />
                <span className="hidden md:inline">Intro</span>
              </TabsTrigger>
              <TabsTrigger 
                value="settings" 
                className={`flex-1 md:w-full justify-center md:justify-start gap-2 text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all snap-start scroll-ml-4 min-w-[100px] md:min-w-full ${activeTab === 'settings' ? 'bg-white/10' : ''}`}
              >
                <Settings className="w-4 h-4" />
                <span className="hidden md:inline">Layers</span>
              </TabsTrigger>
              <TabsTrigger 
                value="new" 
                className={`flex-1 md:w-full justify-center md:justify-start gap-2 text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all snap-start scroll-ml-4 min-w-[100px] md:min-w-full ${activeTab === 'new' ? 'bg-white/10' : ''}`}
              >
                <Plus className="w-4 h-4" />
                <span className="hidden md:inline">Killer Feature</span>
              </TabsTrigger>
              <TabsTrigger 
                value="dashboard" 
                className={`flex-1 md:w-full justify-center md:justify-start gap-2 text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all snap-start scroll-ml-4 min-w-[100px] md:min-w-full ${activeTab === 'dashboard' ? 'bg-white/10' : ''}`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span className="hidden md:inline">Dashboard</span>
              </TabsTrigger>
              <TabsTrigger 
                value="ui" 
                className={`flex-1 md:w-full justify-center md:justify-start gap-2 text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all snap-start scroll-ml-4 min-w-[100px] md:min-w-full ${activeTab === 'ui' ? 'bg-white/10' : ''}`}
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