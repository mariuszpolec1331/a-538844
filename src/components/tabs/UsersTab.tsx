import React from 'react';
import { UserPlus, Key, Shield } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const UsersTab = () => {
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
};

export default UsersTab;