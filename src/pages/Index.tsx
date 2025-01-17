import IntroTab from '@/components/tabs/IntroTab';
import DashboardTab from '@/components/tabs/DashboardTab';
import UITab from '@/components/tabs/UITab';
import UsersTab from '@/components/tabs/UsersTab';
import LayersTab from '@/components/tabs/LayersTab';
import KillerFeatureTab from '@/components/tabs/KillerFeatureTab';
import GTMTab from '@/components/tabs/GTMTab';
import SidePanel from '@/components/SidePanel';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Persistent Top Bar */}
      <div className="fixed top-0 left-0 right-0 bg-dashboard-dark/80 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-white text-center"></h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-16 pb-20">
        <SidePanel />
        <div className="pl-0 md:pl-64">
          <div className="p-4 md:p-8">
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
};

export default Index;