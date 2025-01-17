import React, { useState, useEffect } from 'react';
import { Mic2, Circle } from 'lucide-react';

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
      if (interval) {
        clearInterval(interval);
      }
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
      <div className="relative">
        {/* Pre-click subtle animations */}
        {!isListening && (
          <div className="absolute -inset-4 rounded-full bg-dashboard-text/5 animate-pulse-ring-3" />
        )}
        
        {/* Post-click metaverse animations */}
        {isListening && (
          <>
            <div className="absolute -inset-8 rounded-full bg-dashboard-accent1/20 animate-pulse-ring-1" />
            <div className="absolute -inset-16 rounded-full bg-dashboard-accent2/20 animate-pulse-ring-2" />
            <div className="absolute -inset-24 rounded-full bg-dashboard-accent3/20 animate-pulse-ring-3" />
            
            {/* Circular wave indicators */}
            <div className="absolute -inset-32 flex items-center justify-center">
              {[...Array(8)].map((_, index) => (
                <Circle
                  key={index}
                  className="absolute w-4 h-4 text-dashboard-text/30"
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
          className={`relative z-10 p-12 rounded-full transition-all duration-500 transform hover:scale-105 ${
            isListening 
              ? 'bg-dashboard-text text-dashboard-dark shadow-lg shadow-dashboard-text/50' 
              : 'bg-dashboard-card hover:bg-dashboard-text/20'
          }`}
        >
          <Mic2 className={`w-16 h-16 transition-transform duration-300 ${
            isListening ? 'scale-110' : 'scale-100'
          }`} />
        </button>
      </div>
      
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-300 ${
        isListening ? 'opacity-100' : 'opacity-70'
      }`}>
        <p className="text-xl font-medium text-dashboard-text text-center">
          {isListening ? 'Set your goals...' : 'Click to Start Speaking'}
        </p>
        {isListening && (
          <p className="text-2xl font-bold text-dashboard-accent1 mt-2 text-center">
            {formatTime(time)}
          </p>
        )}
        <p className="mt-2 text-dashboard-muted text-center">
          {isListening 
            ? 'Processing your voice input with advanced AI' 
            : 'Tap the microphone to begin your conversation'}
        </p>
      </div>
    </div>
  );
};

export default UITab;