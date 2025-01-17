import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const SettingsTab = () => {
  const [showTopLayerImage, setShowTopLayerImage] = useState(false);

  const handleTopLayerToggle = (checked: boolean) => {
    setShowTopLayerImage(checked);
  };

  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-medium mb-2">Every Business is a Set of Scenarios</h1>
        <p className="text-dashboard-muted">Configure your application settings</p>
      </header>
      <div className="w-full">
        <div className="dashboard-card">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="w-5 h-5 text-yellow-400" />
            <h2 className="text-xl font-medium">Layers</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Top Layer</p>
                <p className="text-sm text-gray-400">Layer that defines the operations and outcomes of AI-powered systems.</p>
              </div>
              <Switch onCheckedChange={handleTopLayerToggle} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Middle Layer</p>
                <p className="text-sm text-gray-400">Agent Orchestration Layer</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Bottom Layer</p>
                <p className="text-sm text-gray-400">Agent Infrastructure Layer</p>
              </div>
              <Switch />
            </div>
          </div>
          {showTopLayerImage && (
            <div className="mt-6">
              <img 
                src="/lovable-uploads/223bba23-7273-4e04-b02a-269086de984b.png" 
                alt="Top Layer Diagram"
                className="w-full h-auto max-w-[800px] mx-auto rounded-lg border border-white/10 transition-all duration-300 animate-fade-in"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SettingsTab;