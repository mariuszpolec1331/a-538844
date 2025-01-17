import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IntroTab from "./tabs/IntroTab";
import LayersTab from "./tabs/LayersTab";
import KillerFeatureTab from "./tabs/KillerFeatureTab";
import DashboardTab from "./tabs/DashboardTab";
import UsersTab from "./tabs/UsersTab";
import UITab from "./tabs/UITab";
import GTMTab from "./tabs/GTMTab";
import SmartContractsTab from "./tabs/SmartContractsTab";

const SidePanel = () => {
  const [activeTab, setActiveTab] = React.useState("intro");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "intro":
        return <IntroTab />;
      case "layers":
        return <LayersTab />;
      case "killer":
        return <KillerFeatureTab />;
      case "dashboard":
        return <DashboardTab />;
      case "users":
        return <UsersTab />;
      case "ui":
        return <UITab />;
      case "gtm":
        return <GTMTab />;
      case "smart-contracts":
        return <SmartContractsTab />;
      default:
        return <IntroTab />;
    }
  };

  return (
    <div className="h-full flex flex-col">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1">
        <div className="border-b border-white/10">
          <div className="px-4">
            <TabsList className="h-10 items-center justify-start w-full rounded-none bg-transparent space-x-6">
              <TabsTrigger
                value="intro"
                className="text-sm data-[state=active]:bg-transparent data-[state=active]:text-white"
              >
                Intro
              </TabsTrigger>
              <TabsTrigger
                value="layers"
                className="text-sm data-[state=active]:bg-transparent data-[state=active]:text-white"
              >
                Layers
              </TabsTrigger>
              <TabsTrigger
                value="killer"
                className="text-sm data-[state=active]:bg-transparent data-[state=active]:text-white"
              >
                Killer Feature
              </TabsTrigger>
              <TabsTrigger
                value="dashboard"
                className="text-sm data-[state=active]:bg-transparent data-[state=active]:text-white"
              >
                Dashboard
              </TabsTrigger>
              <TabsTrigger
                value="users"
                className="text-sm data-[state=active]:bg-transparent data-[state=active]:text-white"
              >
                Users
              </TabsTrigger>
              <TabsTrigger
                value="ui"
                className="text-sm data-[state=active]:bg-transparent data-[state=active]:text-white"
              >
                UI
              </TabsTrigger>
              <TabsTrigger
                value="gtm"
                className="text-sm data-[state=active]:bg-transparent data-[state=active]:text-white"
              >
                GTM
              </TabsTrigger>
              <TabsTrigger
                value="smart-contracts"
                className="text-sm data-[state=active]:bg-transparent data-[state=active]:text-white"
              >
                Smart Contracts
              </TabsTrigger>
            </TabsList>
          </div>
        </div>
        <div className="flex-1 overflow-auto">
          {renderActiveTab()}
        </div>
      </Tabs>
    </div>
  );
};

export default SidePanel;