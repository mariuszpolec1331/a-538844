import React from 'react';
import { Bar } from 'recharts';

interface MetricCardProps {
  title: string;
  value: number;
  color: string;
}

const MetricCard = ({ title, value, color }: MetricCardProps) => {
  const maxValue = 1500; // Setting max value for bar scale

  return (
    <div className="metric-card p-4 bg-dashboard-dark/50 rounded-lg">
      <div className="relative h-8 w-full bg-white/5 rounded mb-4">
        <div 
          className="h-full rounded transition-all duration-500 ease-in-out"
          style={{ 
            width: `${(value / maxValue) * 100}%`,
            backgroundColor: color 
          }}
        />
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-base md:text-lg font-medium text-dashboard-text">{title}</h3>
        <span className="text-lg md:text-xl font-bold" style={{ color }}>+{value}</span>
      </div>
    </div>
  );
};

export default MetricCard;