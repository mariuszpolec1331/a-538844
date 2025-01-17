import React from 'react';
import MetricCard from '@/components/MetricCard';
import MonthlyChart from '@/components/MonthlyChart';
import CustomerRequests from '@/components/CustomerRequests';

const DashboardTab = () => {
  return (
    <>
      <header className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-medium mb-2">Dashboard</h1>
        <p className="text-sm md:text-base text-dashboard-muted">Below is an example dashboard created using charts from this plugin</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
        <MetricCard
          title="AI Agents"
          value={1370}
          color="#9b87f5"
        />
        <MetricCard
          title="Predefined Scenarios"
          value={340}
          color="#7E69AB"
        />
        <MetricCard
          title="AI Experts"
          value={760}
          color="#6E59A5"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <MonthlyChart />
        <CustomerRequests />
      </div>
    </>
  );
};

export default DashboardTab;