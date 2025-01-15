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
    <div className="dashboard-card h-[400px]">
      <h2 className="text-xl font-medium mb-6">Predefined expert scenarios</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid stroke="rgba(255,255,255,0.1)" />
          <PolarAngleAxis dataKey="subject" stroke="#828179" />
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