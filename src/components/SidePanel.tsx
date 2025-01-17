import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutDashboard, Settings, Users, Mic2, Info, Plus, GitMerge } from "lucide-react";
import IntroTab from "./tabs/IntroTab";
import LayersTab from "./tabs/LayersTab";
import KillerFeatureTab from "./tabs/KillerFeatureTab";
import DashboardTab from "./tabs/DashboardTab";
import UsersTab from "./tabs/UsersTab";
import UITab from "./tabs/UITab";
import GTMTab from "./tabs/GTMTab";

const SidePanel = () => {
  return (
    <div className="md:h-screen fixed bottom-0 md:left-0 md:top-0 w-full md:w-64 glass-card border-t md:border-r border-white/10 z-50">
      <div className="p-4 md:p-6">
        <h2 className="text-lg md:text-xl font-medium mb-4 md:mb-6 hidden md:block">Navigation</h2>
        <Tabs 
          defaultValue="intro" 
          orientation="horizontal"
          className="w-full"
        >
          <TabsList className="flex md:flex-col h-auto bg-transparent text-white w-full justify-between md:justify-start gap-4">
            <TabsTrigger 
              value="intro" 
              className="flex-1 md:w-full justify-center md:justify-start gap-2 data-[state=active]:bg-white/10 data-[state=active]:text-white text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all"
            >
              <Info className="w-4 h-4" />
              <span className="hidden md:inline">Intro</span>
            </TabsTrigger>
            <TabsTrigger 
              value="layers" 
              className="flex-1 md:w-full justify-center md:justify-start gap-2 data-[state=active]:bg-white/10 data-[state=active]:text-white text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden md:inline">Layers</span>
            </TabsTrigger>
            <TabsTrigger 
              value="killer" 
              className="flex-1 md:w-full justify-center md:justify-start gap-2 data-[state=active]:bg-white/10 data-[state=active]:text-white text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden md:inline">Killer Feature</span>
            </TabsTrigger>
            <TabsTrigger 
              value="dashboard" 
              className="flex-1 md:w-full justify-center md:justify-start gap-2 data-[state=active]:bg-white/10 data-[state=active]:text-white text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span className="hidden md:inline">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger 
              value="users" 
              className="flex-1 md:w-full justify-center md:justify-start gap-2 data-[state=active]:bg-white/10 data-[state=active]:text-white text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all"
            >
              <Users className="w-4 h-4" />
              <span className="hidden md:inline">Users</span>
            </TabsTrigger>
            <TabsTrigger 
              value="ui" 
              className="flex-1 md:w-full justify-center md:justify-start gap-2 data-[state=active]:bg-white/10 data-[state=active]:text-white text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all relative overflow-hidden before:absolute before:inset-0 before:bg-dashboard-accent1/20 before:animate-pulse-ring"
            >
              <Mic2 className="w-4 h-4 animate-bounce" />
              <span className="hidden md:inline">UI</span>
            </TabsTrigger>
            <TabsTrigger 
              value="gtm" 
              className="flex-1 md:w-full justify-center md:justify-start gap-2 data-[state=active]:bg-white/10 data-[state=active]:text-white text-xs md:text-sm p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all"
            >
              <GitMerge className="w-4 h-4" />
              <span className="hidden md:inline">GTM</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="intro"><IntroTab /></TabsContent>
          <TabsContent value="layers"><LayersTab /></TabsContent>
          <TabsContent value="killer"><KillerFeatureTab /></TabsContent>
          <TabsContent value="dashboard"><DashboardTab /></TabsContent>
          <TabsContent value="users"><UsersTab /></TabsContent>
          <TabsContent value="ui"><UITab /></TabsContent>
          <TabsContent value="gtm"><GTMTab /></TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SidePanel;