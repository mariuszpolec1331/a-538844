import { useState } from 'react';
import { UserPlus, Key, Shield, Bell, Globe, Mic2 } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import MetricCard from '@/components/MetricCard';
import MonthlyChart from '@/components/MonthlyChart';
import CustomerRequests from '@/components/CustomerRequests';
import SidePanel from '@/components/SidePanel';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isListening, setIsListening] = useState(false);
  const [showTopLayerImage, setShowTopLayerImage] = useState(false);

  const handleMicClick = () => {
    setIsListening(!isListening);
  };

  const handleTopLayerToggle = (checked: boolean) => {
    setShowTopLayerImage(checked);
  };

  // ... keep existing code (renderContent dashboard and ui cases)

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <>
            <header className="mb-6 md:mb-8">
              <h1 className="text-2xl md:text-3xl font-medium mb-2">Dashboard</h1>
              <p className="text-sm md:text-base text-dashboard-muted">Below is an example dashboard created using charts from this plugin</p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
              <MetricCard
                title="Shop"
                value={68}
                color="#7EBF8E"
              />
              <MetricCard
                title="Mobile"
                value={52}
                color="#8989DE"
              />
              <MetricCard
                title="Other"
                value={85}
                color="#61AAF2"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              <MonthlyChart />
              <CustomerRequests />
            </div>
          </>
        );
      case 'ui':
        return (
          <div className="flex items-center justify-center min-h-[80vh] relative">
            <div className="relative">
              {/* Outer ring animation */}
              <div className={`absolute inset-0 rounded-full ${
                isListening ? 'bg-dashboard-accent1/20 animate-pulse-ring' : ''
              }`} />
              
              {/* Middle ring animation */}
              <div className={`absolute inset-2 rounded-full ${
                isListening ? 'bg-dashboard-accent1/30 animate-pulse-ring [animation-delay:0.4s]' : ''
              }`} />
              
              {/* Inner ring animation */}
              <div className={`absolute inset-4 rounded-full ${
                isListening ? 'bg-dashboard-accent1/40 animate-pulse-ring [animation-delay:0.8s]' : ''
              }`} />
              
              {/* Main button */}
              <button
                onClick={handleMicClick}
                className={`relative z-10 p-12 rounded-full transition-all duration-500 transform hover:scale-105 ${
                  isListening 
                    ? 'bg-dashboard-accent1 text-white shadow-lg shadow-dashboard-accent1/50' 
                    : 'bg-dashboard-card hover:bg-dashboard-accent1/20'
                }`}
              >
                <Mic2 className={`w-16 h-16 transition-transform duration-300 ${
                  isListening ? 'scale-110' : 'scale-100'
                }`} />
              </button>
            </div>
            
            <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-300 ${
              isListening ? 'opacity-100' : 'opacity-70'
            }`}>
              <p className="text-xl font-medium text-center">
                {isListening ? 'Listening...' : 'Click to start speaking'}
              </p>
              <p className="mt-2 text-dashboard-muted text-center">
                {isListening 
                  ? 'Speak clearly into your microphone' 
                  : 'Tap the microphone to begin'}
              </p>
            </div>
          </div>
        );
      case 'users':
        return (
          <>
            <header className="mb-8">
              <h1 className="text-3xl font-medium mb-2">You set the goal, MetaAgent delivers</h1>
              <p className="text-dashboard-muted">MetaAgent orchestrates your transformation and AI integration</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="dashboard-card">
                <div className="flex items-center gap-3 mb-4">
                  <UserPlus className="w-5 h-5 text-blue-400" />
                  <h2 className="text-xl font-medium">Active Users</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 glass-card">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">JD</div>
                      <div>
                        <p className="font-medium">John Doe</p>
                        <p className="text-sm text-gray-400">Administrator</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Key className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-400">Active</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 glass-card">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">AS</div>
                      <div>
                        <p className="font-medium">Alice Smith</p>
                        <p className="text-sm text-gray-400">Editor</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Key className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-400">Active</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dashboard-card">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-5 h-5 text-purple-400" />
                  <h2 className="text-xl font-medium">Permissions</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 glass-card">
                    <div>
                      <p className="font-medium">Admin Access</p>
                      <p className="text-sm text-gray-400">Full system access</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between p-3 glass-card">
                    <div>
                      <p className="font-medium">Editor Access</p>
                      <p className="text-sm text-gray-400">Content management</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 'settings':
        return (
          <>
            <header className="mb-8">
              <h1 className="text-3xl font-medium mb-2">Every Business is a Set of Scenarios</h1>
              <p className="text-dashboard-muted">Configure your application settings</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="dashboard-card">
                <div className="flex items-center gap-3 mb-4">
                  <Bell className="w-5 h-5 text-yellow-400" />
                  <h2 className="text-xl font-medium">Layers</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Top Layer</p>
                      <p className="text-sm text-gray-400">Configure top layer settings</p>
                    </div>
                    <Switch onCheckedChange={handleTopLayerToggle} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Middle Layer</p>
                      <p className="text-sm text-gray-400">Configure middle layer settings</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Bottom Layer</p>
                      <p className="text-sm text-gray-400">Configure bottom layer settings</p>
                    </div>
                    <Switch />
                  </div>
                </div>
                {showTopLayerImage && (
                  <div className="mt-6">
                    <img 
                      src="/lovable-uploads/223bba23-7273-4e04-b02a-269086de984b.png" 
                      alt="Top Layer Diagram"
                      className="w-full rounded-lg border border-white/10 transition-all duration-300 animate-fade-in"
                    />
                  </div>
                )}
              </div>
              <div className="dashboard-card">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-5 h-5 text-green-400" />
                  <h2 className="text-xl font-medium">Preferences</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Language</p>
                      <p className="text-sm text-gray-400">Select your language</p>
                    </div>
                    <select className="bg-transparent border border-white/10 rounded-md px-2 py-1">
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Dark Mode</p>
                      <p className="text-sm text-gray-400">Toggle dark mode</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Persistent Top Bar */}
      <div className="fixed top-0 left-0 right-0 bg-dashboard-dark/80 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-white text-center">META AGENT</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-16 pb-20"> {/* Added padding-top to account for the fixed header */}
        <SidePanel onTabChange={setActiveTab} />
        <div className="pl-0 md:pl-64">
          <div className="p-4 md:p-8">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Persistent Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-dashboard-dark/80 backdrop-blur-lg z-50 border-t border-white/10">
        <div className="container mx-auto px-4 py-3">
          <p className="text-dashboard-text text-center text-sm md:text-base">
            MetaAgent orchestrates your transformation and AI integration
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
