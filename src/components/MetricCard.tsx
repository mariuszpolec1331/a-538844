import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface MetricCardProps {
  title: string;
  value: number;
  color: string;
}

const MetricCard = ({ title, value, color }: MetricCardProps) => {
  return (
    <div className="metric-card">
      <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-6">
        <CircularProgressbar
          value={value}
          text={`${value}%`}
          styles={buildStyles({
            textSize: '1.25rem',
            pathColor: color,
            textColor: color,
            trailColor: 'rgba(255,255,255,0.1)',
          })}
        />
      </div>
      <h3 className="text-base md:text-lg font-medium text-dashboard-text">{title}</h3>
    </div>
  );
};

export default MetricCard;