import { Card } from "@/components/ui/card";

const KillerFeatureTab = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Scenario Execution Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6 bg-dashboard-card border-white/10">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-24 h-24 rounded-full bg-blue-500/20 flex items-center justify-center">
              <div className="w-16 h-16 text-blue-500">
                {/* Icon for Identify Business Problem */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white">Identify Business Problem</h3>
          </div>
        </Card>

        <Card className="p-6 bg-dashboard-card border-white/10">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center">
              <div className="w-16 h-16 text-green-500">
                {/* Icon for Select Scenario */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white">Select Scenario</h3>
          </div>
        </Card>

        <Card className="p-6 bg-dashboard-card border-white/10">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-24 h-24 rounded-full bg-yellow-500/20 flex items-center justify-center">
              <div className="w-16 h-16 text-yellow-500">
                {/* Icon for Assign AI Agents */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white">Assign AI Agents and Experts</h3>
          </div>
        </Card>

        <Card className="p-6 bg-dashboard-card border-white/10">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-24 h-24 rounded-full bg-purple-500/20 flex items-center justify-center">
              <div className="w-16 h-16 text-purple-500">
                {/* Icon for Guide User */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white">Guide User Step by Step</h3>
          </div>
        </Card>

        <Card className="p-6 bg-dashboard-card border-white/10">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-24 h-24 rounded-full bg-indigo-500/20 flex items-center justify-center">
              <div className="w-16 h-16 text-indigo-500">
                {/* Icon for Achieve Goal */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white">Achieve Goal</h3>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default KillerFeatureTab;