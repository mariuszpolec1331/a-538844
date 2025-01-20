import React, { useState, useEffect } from 'react';
import { Circle } from 'lucide-react';

const UITab = () => {
  const [isListening, setIsListening] = useState(false);
  const [time, setTime] = useState(0);
  const [agents, setAgents] = useState(15670);
  const [experts, setExperts] = useState(2340);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let agentInterval: NodeJS.Timeout;
    let expertInterval: NodeJS.Timeout;
    
    if (isListening) {
      // Timer interval
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);

      // Agent counter interval (random between 1-3 seconds)
      const updateAgent = () => {
        const randomDelay = Math.floor(Math.random() * (3000 - 1000 + 1) + 1000);
        setAgents(prev => prev + 1);
        agentInterval = setTimeout(updateAgent, randomDelay);
      };
      updateAgent();

      // Expert counter interval (every 5 seconds)
      expertInterval = setInterval(() => {
        setExperts(prev => prev + 1);
      }, 5000);
    } else {
      setTime(0);
      setAgents(15670);
      setExperts(2340);
    }

    return () => {
      if (interval) clearInterval(interval);
      if (agentInterval) clearTimeout(agentInterval);
      if (expertInterval) clearInterval(expertInterval);
    };
  }, [isListening]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const handleMicClick = () => {
    setIsListening(!isListening);
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] relative">
      {/* Timer and stats at the top */}
      {isListening && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2">
          <div className="hidden md:flex space-x-8 items-center justify-center">
            <p className="text-sm font-mono text-dashboard-muted">
              timer: {formatTime(time)}
            </p>
            <p className="text-sm font-mono text-dashboard-muted">
              ai agents {agents.toLocaleString()} (active agents)
            </p>
            <p className="text-sm font-mono text-dashboard-muted">
              ai experts {experts.toLocaleString()} (active experts)
            </p>
          </div>
          
          {/* Mobile layout */}
          <div className="md:hidden space-y-2">
            <p className="text-sm font-mono text-dashboard-muted text-center">
              timer: {formatTime(time)}
            </p>
            <p className="text-sm font-mono text-dashboard-muted text-center">
              ai agents {agents.toLocaleString()} (active agents)
            </p>
            <p className="text-sm font-mono text-dashboard-muted text-center">
              ai experts {experts.toLocaleString()} (active experts)
            </p>
          </div>
        </div>
      )}
      
      <div className="relative">
        {/* Pre-click subtle animations */}
        {!isListening && (
          <div className="absolute -inset-4 rounded-full bg-dashboard-text/5 animate-pulse-ring-3" />
        )}
        
        {/* Post-click metaverse animations */}
        {isListening && (
          <>
            <div className="absolute -inset-8 rounded-full bg-dashboard-accent2/20 animate-pulse-ring-1" />
            <div className="absolute -inset-16 rounded-full bg-dashboard-accent2/20 animate-pulse-ring-2" />
            <div className="absolute -inset-24 rounded-full bg-dashboard-accent2/20 animate-pulse-ring-3" />
            
            {/* Circular wave indicators */}
            <div className="absolute -inset-32 flex items-center justify-center">
              {[...Array(8)].map((_, index) => (
                <Circle
                  key={index}
                  className="absolute w-4 h-4 text-dashboard-accent2/30"
                  style={{
                    animation: `pulse ${4 + index * 0.5}s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
                    transform: `rotate(${index * 45}deg) translateX(${120}px)`
                  }}
                />
              ))}
            </div>
          </>
        )}
        
        <button
          onClick={handleMicClick}
          className={`relative z-10 p-1 rounded-full transition-all duration-500 transform hover:scale-105 overflow-hidden ${
            isListening 
              ? 'ring-4 ring-dashboard-accent2 ring-opacity-50' 
              : 'hover:ring-2 hover:ring-dashboard-text/20'
          }`}
        >
          <div className="w-32 h-32 rounded-full overflow-hidden">
            <img 
              src="/lovable-uploads/57fe78b3-8a3e-49a6-a4a4-379ee09bf75d.png" 
              alt="Meta Agent"
              className={`w-full h-full object-cover transition-transform duration-300 ${
                isListening ? 'scale-110' : 'scale-100'
              }`}
            />
          </div>
        </button>
      </div>
      
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-300 ${
        isListening ? 'opacity-100' : 'opacity-70'
      }`}>
        <p className="text-xl font-medium text-dashboard-text text-center">
          {isListening ? 'Set your goals...' : 'Ask Agent'}
        </p>
        <p className="mt-2 text-dashboard-muted text-center">
          {isListening 
            ? 'identifying and activating the scenario' 
            : 'Tap to begin your conversation'}
        </p>
      </div>
    </div>
  );
};

export default UITab;