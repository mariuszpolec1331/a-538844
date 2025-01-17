import React from 'react';

const KillerFeatureTab = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Killer Features</h2>
      <div className="space-y-6">
        <div className="glass-card p-6">
          <h3 className="text-xl font-semibold mb-4">Core Features</h3>
          <div className="space-y-4">
            <div className="border border-white/10 rounded-lg p-4">
              <h4 className="font-medium mb-2">AI Integration</h4>
              <p className="text-gray-400">Seamless integration with various AI models</p>
            </div>
            <div className="border border-white/10 rounded-lg p-4">
              <h4 className="font-medium mb-2">Automated Workflows</h4>
              <p className="text-gray-400">Intelligent process automation</p>
            </div>
            <div className="border border-white/10 rounded-lg p-4">
              <h4 className="font-medium mb-2">Real-time Analytics</h4>
              <p className="text-gray-400">Live monitoring and insights</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KillerFeatureTab;