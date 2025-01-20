const AnimatedBackground = () => {
  return (
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
  );
};

export default AnimatedBackground;