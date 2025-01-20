const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 opacity-[0.05]">
      {/* Horizontal Lines with Matrix Numbers */}
      {[...Array(20)].map((_, i) => (
        <div key={`h-${i}`} className="relative">
          <div
            className="absolute h-px bg-dashboard-text"
            style={{
              top: `${i * 5}%`,
              left: '0',
              right: '0',
              animation: `slide-x ${3 + i % 3}s linear infinite`,
              transform: `translateX(${i % 2 === 0 ? '-100%' : '100%'})`,
            }}
          />
          {[...Array(10)].map((_, j) => (
            <div
              key={`h-${i}-${j}`}
              className="absolute font-mono text-xs text-dashboard-accent1"
              style={{
                top: `${i * 5 - 1}%`,
                left: `${j * 10}%`,
                animation: `matrix-fall ${2 + Math.random() * 3}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: 0.7
              }}
            >
              {Math.floor(Math.random() * 10)}
            </div>
          ))}
        </div>
      ))}

      {/* Vertical Lines with Matrix Numbers */}
      {[...Array(20)].map((_, i) => (
        <div key={`v-${i}`} className="relative">
          <div
            className="absolute w-px bg-dashboard-text"
            style={{
              left: `${i * 5}%`,
              top: '0',
              bottom: '0',
              animation: `slide-y ${4 + i % 3}s linear infinite`,
              transform: `translateY(${i % 2 === 0 ? '-100%' : '100%'})`,
            }}
          />
          {[...Array(10)].map((_, j) => (
            <div
              key={`v-${i}-${j}`}
              className="absolute font-mono text-xs text-dashboard-accent1"
              style={{
                left: `${i * 5 - 1}%`,
                top: `${j * 10}%`,
                animation: `matrix-fall ${2 + Math.random() * 3}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: 0.7
              }}
            >
              {Math.floor(Math.random() * 10)}
            </div>
          ))}
        </div>
      ))}

      {/* Diagonal Lines with Matrix Numbers */}
      {[...Array(10)].map((_, i) => (
        <div key={`d-${i}`} className="relative">
          <div
            className="absolute w-px bg-dashboard-text origin-bottom-left"
            style={{
              left: `${i * 10}%`,
              top: '0',
              height: '141.4%',
              transform: `rotate(45deg) translateY(${i % 2 === 0 ? '-100%' : '100%'})`,
              animation: `slide-diagonal ${5 + i % 3}s linear infinite`,
            }}
          />
          {[...Array(10)].map((_, j) => (
            <div
              key={`d-${i}-${j}`}
              className="absolute font-mono text-xs text-dashboard-accent1"
              style={{
                left: `${i * 10}%`,
                top: `${j * 10}%`,
                transform: 'rotate(45deg)',
                animation: `matrix-fall ${2 + Math.random() * 3}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: 0.7
              }}
            >
              {Math.floor(Math.random() * 10)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedBackground;