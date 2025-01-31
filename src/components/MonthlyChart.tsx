import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from 'recharts';

const data = [
  { month: 'J', value: 30, revenue: 40 },
  { month: 'F', value: 35, revenue: 45 },
  { month: 'M', value: 40, revenue: 35 },
  { month: 'A', value: 38, revenue: 30 },
  { month: 'M', value: 42, revenue: 25 },
  { month: 'J', value: 48, revenue: 40 },
  { month: 'J', value: 0, revenue: 45 },
  { month: 'A', value: 100, revenue: 50 },
  { month: 'S', value: 200, revenue: 45 },
  { month: 'O', value: 300, revenue: 55 },
  { month: 'N', value: 450, revenue: 50 },
  { month: 'D', value: 600, revenue: 60 },
];

const MonthlyChart = () => {
  return (
    <div className="dashboard-card h-[300px] md:h-[400px]">
      <h2 className="text-lg md:text-xl font-medium mb-4 md:mb-6">Monthly interactions with the scenarios</h2>
      <div className="h-[calc(100%-3.5rem)] md:h-[calc(100%-4rem)]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="month" stroke="#828179" tick={{ fontSize: 12 }} />
            <YAxis stroke="#828179" tick={{ fontSize: 12 }} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8989DE"
              strokeWidth={2}
              dot={{ fill: '#8989DE', r: 4 }}
            />
            <Bar dataKey="revenue" fill="#61AAF2" opacity={0.3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlyChart;