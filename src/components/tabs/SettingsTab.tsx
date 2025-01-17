import React, { useState } from 'react';
import { Bell, ZoomIn } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const SettingsTab = () => {
  const [showTopLayerImage, setShowTopLayerImage] = useState(false);
  const [showMiddleLayerImage, setShowMiddleLayerImage] = useState(false);
  const [imageScale, setImageScale] = useState(1);

  const handleTopLayerToggle = (checked: boolean) => {
    setShowTopLayerImage(checked);
  };

  const handleMiddleLayerToggle = (checked: boolean) => {
    setShowMiddleLayerImage(checked);
  };

  const handleImageClick = () => {
    setImageScale(prev => prev === 1 ? 1.5 : 1);
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
            <Bell className="w-5 h-5 text-dashboard-text" />
            <h2 className="text-xl font-medium">Layers</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Top Layer</p>
                <p className="text-sm text-dashboard-text">Layer that defines the operations and outcomes of AI-powered systems.</p>
              </div>
              <Switch onCheckedChange={handleTopLayerToggle} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Middle Layer</p>
                <p className="text-sm text-dashboard-text">Agent Orchestration Layer</p>
              </div>
              <Switch onCheckedChange={handleMiddleLayerToggle} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Bottom Layer</p>
                <p className="text-sm text-dashboard-text">Agent Infrastructure Layer</p>
              </div>
              <Switch />
            </div>
          </div>
          {showTopLayerImage && (
            <div className="mt-6 relative group cursor-pointer" onClick={handleImageClick}>
              <img 
                src="/lovable-uploads/223bba23-7273-4e04-b02a-269086de984b.png" 
                alt="Top Layer Diagram"
                className="w-full h-auto max-w-[800px] mx-auto rounded-lg border border-white/10 transition-all duration-300"
                style={{ transform: `scale(${imageScale})`, transformOrigin: 'center' }}
              />
              <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-5 h-5 text-white" />
              </div>
            </div>
          )}
          {showMiddleLayerImage && (
            <div className="mt-6 relative group cursor-pointer" onClick={handleImageClick}>
              <img 
                src="/lovable-uploads/72b11c77-1fdc-4af6-b83d-fde89a806e80.png" 
                alt="Middle Layer Diagram"
                className="w-full h-auto max-w-[800px] mx-auto rounded-lg border border-white/10 transition-all duration-300"
                style={{ transform: `scale(${imageScale})`, transformOrigin: 'center' }}
              />
              <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-5 h-5 text-white" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SettingsTab;