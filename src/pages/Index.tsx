import { useState, useEffect } from 'react';
import IntroTab from '@/components/tabs/IntroTab';
import DashboardTab from '@/components/tabs/DashboardTab';
import UITab from '@/components/tabs/UITab';
import SettingsTab from '@/components/tabs/SettingsTab';
import NewTab from '@/components/tabs/NewTab';
import SidePanel from '@/components/SidePanel';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const [activeTab, setActiveTab] = useState('intro');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const { toast } = useToast();

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'metaagent') {
      setIsAuthenticated(true);
      toast({
        title: "Access granted",
        description: "Welcome to MetaAgent portal",
      });
    } else {
      toast({
        title: "Access denied",
        description: "Invalid password",
        variant: "destructive",
      });
    }
  };

  const getTabName = (tab: string) => {
    switch (tab) {
      case 'intro':
        return 'Intro';
      case 'dashboard':
        return 'Dashboard';
      case 'ui':
        return 'UI';
      case 'settings':
        return 'Layers';
      case 'new':
        return 'Killer Feature';
      default:
        return '';
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'intro':
        return <IntroTab />;
      case 'dashboard':
        return <DashboardTab />;
      case 'ui':
        return <UITab />;
      case 'settings':
        return <SettingsTab />;
      case 'new':
        return <NewTab />;
      default:
        return <IntroTab />;
    }
  };

  const MainContent = () => (
    <div className="min-h-screen relative">
      {/* Persistent Top Bar */}
      <div className="fixed top-0 left-0 right-0 bg-dashboard-dark/80 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-white text-center md:hidden">{getTabName(activeTab)}</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-16 pb-20">
        <SidePanel onTabChange={setActiveTab} />
        <div className="pl-0 md:pl-64">
          <div className="p-4 md:p-8">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Persistent Bottom Bar - Hidden on Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-dashboard-dark/80 backdrop-blur-lg z-50 border-t border-white/10 hidden md:block">
        <div className="container mx-auto px-4 py-3">
          <p className="text-dashboard-text text-center text-sm md:text-base">
            MetaAgent orchestrates your transformation and AI integration
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative">
      {!isAuthenticated ? (
        <div className="min-h-screen flex items-center justify-center bg-dashboard-dark p-4">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white">Meta Agent Dataset</h2>
              <p className="mt-2 text-sm text-gray-400">Please enter the access code to continue</p>
            </div>
            <form onSubmit={handlePasswordSubmit} className="mt-8 space-y-4">
              <Input
                type="password"
                placeholder="Enter access code"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
              />
              <Button type="submit" className="w-full">
                Access Data
              </Button>
            </form>
          </div>
          <div className="absolute inset-0 z-[-1]">
            <div className="filter blur-md">
              <MainContent />
            </div>
          </div>
        </div>
      ) : (
        <MainContent />
      )}
    </div>
  );
};

export default Index;
