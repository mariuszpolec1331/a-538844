import React from 'react';
import { User, FileText, Bot, Brain } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: number;
  color: string;
  type: 'agent' | 'scenario' | 'expert';
}

const MetricCard = ({ title, value, color, type }: MetricCardProps) => {
  // Set fixed number of icons (14) for all categories
  const iconCount = 14;
  
  const getIcon = () => {
    switch(type) {
      case 'agent':
        return <Bot size={20} color={color} />;
      case 'expert':
        return <Brain size={20} color={color} />;
      case 'scenario':
        return <FileText size={20} color={color} />;
    }
  };

  return (
    <div className="metric-card">
      <div className="flex mb-4 min-h-[96px] items-center justify-center relative overflow-hidden">
        <div className="flex gap-2 flex-wrap max-w-[200px] justify-center">
          {[...Array(iconCount)].map((_, index) => (
            <div 
              key={index}
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