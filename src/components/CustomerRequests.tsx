import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const data = [
  { subject: 'Sales/Marketing', value: 85 },
  { subject: 'Production/Operations', value: 75 },
  { subject: 'Finance/Accounting', value: 65 },
  { subject: 'Education/Development', value: 80 },
  { subject: 'HR/Human Resources', value: 70 },
  { subject: 'IT/Technology', value: 85 },
  { subject: 'Management/Strategy', value: 75 },
  { subject: 'Administration/Legal', value: 60 },
];

const CustomerRequests = () => {
  return (
    <div className="dashboard-card h-[300px] md:h-[400px]">
      <h2 className="text-lg md:text-xl font-medium mb-4 md:mb-6">Predefined expert scenarios</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
          <PolarGrid stroke="rgba(255,255,255,0.1)" />
          <PolarAngleAxis 
            dataKey="subject" 
            stroke="#828179" 
            tick={{ fontSize: 10, fill: '#828179' }}
          />
          <Radar
            name="Value"
            dataKey="value"
            stroke="#61AAF2"
            fill="#61AAF2"
            fillOpacity={0.3}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomerRequests;