import React, { useState } from 'react';
import { Mic2 } from 'lucide-react';

const UITab = () => {
  const [isListening, setIsListening] = useState(false);

  const handleMicClick = () => {
    setIsListening(!isListening);
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] relative">
      <div className="relative">
        <div className={`absolute inset-0 rounded-full ${
          isListening ? 'bg-dashboard-accent1/20 animate-pulse-ring' : ''
        }`} />
        
        <div className={`absolute inset-2 rounded-full ${
          isListening ? 'bg-dashboard-accent1/30 animate-pulse-ring [animation-delay:0.4s]' : ''
        }`} />
        
        <div className={`absolute inset-4 rounded-full ${
          isListening ? 'bg-dashboard-accent1/40 animate-pulse-ring [animation-delay:0.8s]' : ''
        }`} />
        
        <button
          onClick={handleMicClick}
          className={`relative z-10 p-12 rounded-full transition-all duration-500 transform hover:scale-105 ${
            isListening 
              ? 'bg-dashboard-accent1 text-white shadow-lg shadow-dashboard-accent1/50' 
              : 'bg-dashboard-card hover:bg-dashboard-accent1/20'
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
        <p className="text-xl font-medium text-center">
          {isListening ? 'Listening...' : 'Click to start speaking'}
        </p>
        <p className="mt-2 text-dashboard-muted text-center">
          {isListening 
            ? 'Speak clearly into your microphone' 
            : 'Tap the microphone to begin'}
        </p>
      </div>
    </div>
  );
};

export default UITab;