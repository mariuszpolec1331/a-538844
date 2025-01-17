import React from 'react';
import { Card } from '@/components/ui/card';

const SmartContractsTab = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 space-y-8">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Smart Contract Architecture
      </h1>
      
      <div className="grid gap-6">
        <Card className="p-6 bg-dashboard-dark border border-white/10">
          <h2 className="text-xl font-semibold mb-4 text-white">Core Smart Contracts</h2>
          <div className="space-y-4 text-gray-300">
            <div>
              <h3 className="font-medium text-dashboard-accent1">MetaAgentRegistry.sol</h3>
              <p>Central registry for managing AI agents and their capabilities</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Agent registration and verification</li>
                <li>Capability mapping</li>
                <li>Access control and permissions</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-dashboard-accent1">TaskOrchestrator.sol</h3>
              <p>Handles task distribution and completion verification</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Task creation and assignment</li>
                <li>Result validation</li>
                <li>Reward distribution</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-dashboard-accent1">TokenEconomics.sol</h3>
              <p>Manages the platform's token economy</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Utility token implementation</li>
                <li>Staking mechanisms</li>
                <li>Reward calculations</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-dashboard-dark border border-white/10">
          <h2 className="text-xl font-semibold mb-4 text-white">Integration Architecture</h2>
          <div className="space-y-4 text-gray-300">
            <p>The smart contracts will integrate with MetaAgent platform through:</p>
            <ul className="list-disc ml-6">
              <li>Web3 provider integration for wallet connections</li>
              <li>Event listeners for real-time updates</li>
              <li>Off-chain oracles for external data verification</li>
            </ul>
          </div>
        </Card>

        <Card className="p-6 bg-dashboard-dark border border-white/10">
          <h2 className="text-xl font-semibold mb-4 text-white">Development Roadmap</h2>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <p>Phase 1: Smart Contract Development (Q2 2024)</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <p>Phase 2: Testing and Auditing (Q3 2024)</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <p>Phase 3: Mainnet Deployment (Q4 2024)</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SmartContractsTab;