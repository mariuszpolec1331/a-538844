import React, { useState } from 'react';
import { Bell, ZoomIn } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const SettingsTab = () => {
  const [showTopLayerImage, setShowTopLayerImage] = useState(false);
  const [showMiddleLayerImage, setShowMiddleLayerImage] = useState(false);
  const [showBottomLayerImage, setShowBottomLayerImage] = useState(false);
  const [imageScale, setImageScale] = useState(1);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const handleTopLayerToggle = (checked: boolean) => {
    setShowTopLayerImage(checked);
  };

  const handleMiddleLayerToggle = (checked: boolean) => {
    setShowMiddleLayerImage(checked);
  };

  const handleBottomLayerToggle = (checked: boolean) => {
    setShowBottomLayerImage(checked);
  };

  const handleImageClick = (imageSrc: string) => {
    if (zoomedImage === imageSrc) {
      setZoomedImage(null);
    } else {
      setZoomedImage(imageSrc);
    }
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
                <p className="text-sm text-dashboard-text">Layer that defines the operations and outcomes of Meta Agent</p>
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
              <Switch onCheckedChange={handleBottomLayerToggle} />
            </div>
          </div>
          {showTopLayerImage && (
            <div className="mt-6 relative group cursor-pointer" onClick={() => handleImageClick("/lovable-uploads/7a52356a-82ad-4416-9439-20426688f8d5.png")}>
              <img 
                src="/lovable-uploads/7a52356a-82ad-4416-9439-20426688f8d5.png" 
                alt="Top Layer Diagram"
                className="w-full h-auto max-w-[800px] mx-auto rounded-lg border border-white/10 transition-all duration-300"
              />
              <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-5 h-5 text-white" />
              </div>
            </div>
          )}
          {showMiddleLayerImage && (
            <div className="mt-6 relative group cursor-pointer" onClick={() => handleImageClick("/lovable-uploads/72b11c77-1fdc-4af6-b83d-fde89a806e80.png")}>
              <img 
                src="/lovable-uploads/72b11c77-1fdc-4af6-b83d-fde89a806e80.png" 
                alt="Middle Layer Diagram"
                className="w-full h-auto max-w-[800px] mx-auto rounded-lg border border-white/10 transition-all duration-300"
              />
              <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-5 h-5 text-white" />
              </div>
            </div>
          )}
          {showBottomLayerImage && (
            <div className="mt-6 relative group cursor-pointer" onClick={() => handleImageClick("/lovable-uploads/59e18ed0-207e-4c0e-8540-b62b802aed5b.png")}>
              <img 
                src="/lovable-uploads/59e18ed0-207e-4c0e-8540-b62b802aed5b.png" 
                alt="Bottom Layer Diagram"
                className="w-full h-auto max-w-[800px] mx-auto rounded-lg border border-white/10 transition-all duration-300"
              />
              <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-5 h-5 text-white" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Zoomed Image Overlay */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setZoomedImage(null)}
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />
          <div className="relative z-50 w-full max-w-7xl">
            <img 
              src={zoomedImage} 
              alt="Zoomed Diagram"
              className="w-full h-auto rounded-lg border border-white/20 shadow-2xl glass-card"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsTab;