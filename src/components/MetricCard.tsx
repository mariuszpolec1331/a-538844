import React from 'react';
import { User, FileText, Bot, Brain } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: number;
  color: string;
  type: 'agent' | 'scenario' | 'expert';
}

const MetricCard = ({ title, value, color, type }: MetricCardProps) => {
  // Calculate how many icons to show (1 icon per 100 items)
  const iconCount = Math.ceil(value / 100);
  
  const getIcon = () => {
    switch(type) {
      case 'agent':
        return <Bot size={24} color={color} />;
      case 'expert':
        return <Brain size={24} color={color} />;
      case 'scenario':
        return <FileText size={24} color={color} />;
    }
  };

  return (
    <div className="metric-card p-4 bg-dashboard-dark/50 rounded-lg">
      <div className="flex mb-4 min-h-[96px] items-center justify-center relative overflow-hidden">
        <div className="flex -space-x-3">
          {[...Array(iconCount)].map((_, index) => (
            <div 
              key={index}
              className="transition-transform hover:scale-110 hover:z-10"
              style={{
                zIndex: index
              }}
            >
              {getIcon()}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-base md:text-lg font-medium text-dashboard-text">{title}</h3>
        <span className="text-lg md:text-xl font-bold" style={{ color }}>+{value}</span>
      </div>
    </div>
  );
};

export default MetricCard;