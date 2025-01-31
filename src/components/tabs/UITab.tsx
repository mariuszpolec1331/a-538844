import React, { useState, useEffect } from 'react';
import { Circle, Mic } from 'lucide-react';

const UITab = () => {
  const [isListening, setIsListening] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isListening) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      setTime(0);
    }

    return () => {
      if (interval) clearInterval(interval);
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
    <div className="flex flex-col items-center justify-center min-h-[80vh] relative overflow-hidden">
      {/* Timer Row */}
      {isListening && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-full px-4">
          <div className="flex items-center justify-center text-sm font-mono text-dashboard-muted">
            <span>timer: {formatTime(time)}</span>
          </div>
        </div>
      )}

      {/* Animated Background Lines */}
      <div className="absolute inset-0 opacity-[0.05]">
        {/* Horizontal Lines */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-dashboard-text"
            style={{
              top: `${i * 5}%`,
              left: '0',
              right: '0',
              animation: `slide-x ${3 + i % 3}s linear infinite`,
              transform: `translateX(${i % 2 === 0 ? '-100%' : '100%'})`,
            }}
          />
        ))}
        {/* Vertical Lines */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-dashboard-text"
            style={{
              left: `${i * 5}%`,
              top: '0',
              bottom: '0',
              animation: `slide-y ${4 + i % 3}s linear infinite`,
              transform: `translateY(${i % 2 === 0 ? '-100%' : '100%'})`,
            }}
          />
        ))}
        {/* Diagonal Lines */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`d-${i}`}
            className="absolute w-px bg-dashboard-text origin-bottom-left"
            style={{
              left: `${i * 10}%`,
              top: '0',
              height: '141.4%', // √2 * 100% to ensure full coverage
              transform: `rotate(45deg) translateY(${i % 2 === 0 ? '-100%' : '100%'})`,
              animation: `slide-diagonal ${5 + i % 3}s linear infinite`,
            }}
          />
        ))}
      </div>
      
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
      
      <div className={`mt-16 mb-16 transition-opacity duration-300 ${
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