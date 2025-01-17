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
};

export default DashboardTab;