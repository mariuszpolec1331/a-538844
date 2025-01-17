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

const colors = ['#FF6B6B', '#61AAF2', '#FFD93D']; // red, blue, yellow

const CustomerRequests = () => {
  const generateRandomMarkers = () => {
    const markers = [];
    const centerX = 50;
    const centerY = 50;
    const radius = 25;

    for (let i = 0; i < 160; i++) {
      const angle = Math.random() * 2 * Math.PI;
      const sectionIndex = Math.floor((angle / (2 * Math.PI)) * data.length);
      const maxDistance = (data[sectionIndex].value / 100) * radius;
      const distance = Math.random() * maxDistance;
      
      const x = centerX + distance * Math.cos(angle);
      const y = centerY + distance * Math.sin(angle);
      
      markers.push({
        left: `${x}%`,
        top: `${y}%`,
        color: colors[Math.floor(Math.random() * colors.length)],
        animation: `animate-pulse-ring-${Math.floor(Math.random() * 3) + 1}`
      });
    }
    return markers;
  };

  const randomMarkers = generateRandomMarkers();

  return (
    <div className="dashboard-card h-[300px] md:h-[400px]">
      <h2 className="text-lg md:text-xl font-medium mb-4 md:mb-6">Matrix of pre-defined expert scenarios</h2>
      <div className="relative h-full">
        {randomMarkers.map((marker, index) => (
          <span
            key={index}
            className={`absolute text-xs ${marker.animation}`}
            style={{
              left: marker.left,
              top: marker.top,
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              color: marker.color,
              opacity: 0.6
            }}
          >
            x
          </span>
        ))}
        
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
    </div>
  );
};

export default CustomerRequests;