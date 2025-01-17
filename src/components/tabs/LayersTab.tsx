import React from 'react';

const LayersTab = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Layers</h2>
      <div className="space-y-6">
        <div className="glass-card p-6">
          <h3 className="text-xl font-semibold mb-4">Architecture Layers</h3>
          <div className="space-y-4">
            <div className="border border-white/10 rounded-lg p-4">
              <h4 className="font-medium mb-2">Presentation Layer</h4>
              <p className="text-gray-400">User interface and experience components</p>
            </div>
            <div className="border border-white/10 rounded-lg p-4">
              <h4 className="font-medium mb-2">Business Logic Layer</h4>
              <p className="text-gray-400">Core business rules and workflows</p>
            </div>
            <div className="border border-white/10 rounded-lg p-4">
              <h4 className="font-medium mb-2">Data Layer</h4>
              <p className="text-gray-400">Data persistence and management</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayersTab;