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
      case 'users':
        return (
          <>
            <header className="mb-8">
              <h1 className="text-3xl font-medium mb-2">Users</h1>
              <p className="text-dashboard-muted">Manage your users and their permissions</p>
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
              <h1 className="text-3xl font-medium mb-2">Settings</h1>
              <p className="text-dashboard-muted">Configure your application settings</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="dashboard-card">
                <div className="flex items-center gap-3 mb-4">
                  <Bell className="w-5 h-5 text-yellow-400" />
                  <h2 className="text-xl font-medium">Notifications</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-gray-400">Receive email updates</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Push Notifications</p>
                      <p className="text-sm text-gray-400">Receive push notifications</p>
                    </div>
                    <Switch />
                  </div>
                </div>
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
      case 'ui':
        return (
          <>
            <header className="mb-8">
              <h1 className="text-3xl font-medium mb-2">Voice AI Interface</h1>
              <p className="text-dashboard-muted">Interact with our AI assistant using voice commands</p>
            </header>
            <div className="grid grid-cols-1 gap-6">
              <div className="dashboard-card">
                <div className="flex flex-col items-center justify-center p-8 text-center">
                  <button
                    onClick={() => setIsListening(!isListening)}
                    className={`p-8 rounded-full transition-all duration-300 ${
                      isListening 
                        ? 'bg-dashboard-accent1 text-white' 
                        : 'bg-dashboard-card hover:bg-dashboard-accent1/20'
                    }`}
                  >
                    <Mic2 className={`w-12 h-12 ${isListening ? 'animate-pulse' : ''}`} />
                  </button>
                  <p className="mt-4 text-lg">
                    {isListening ? 'Listening...' : 'Click to start speaking'}
                  </p>
                  <p className="mt-2 text-dashboard-muted text-sm">
                    {isListening 
                      ? 'Speak clearly into your microphone' 
                      : 'Tap the microphone to begin a conversation'}
                  </p>
                </div>
              </div>
              <div className="dashboard-card">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Conversation History</h3>
                  <div className="space-y-4 max-h-[400px] overflow-y-auto">
                    <div className="p-4 glass-card">
                      <p className="text-sm text-dashboard-muted mb-1">You</p>
                      <p>What can you help me with?</p>
                    </div>
                    <div className="p-4 glass-card bg-dashboard-accent1/10">
                      <p className="text-sm text-dashboard-muted mb-1">AI Assistant</p>
                      <p>I can help you with various tasks. Just ask me anything!</p>
                    </div>
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
    <div className="min-h-screen">
      <SidePanel onTabChange={setActiveTab} />
      <div className="pl-0 md:pl-64">
        <div className="p-4 md:p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Index;
