const Particle = ({ delay, size, x, y }) => (
    <div
      className="absolute rounded-full bg-blue-500 opacity-20 animate-pulse"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`,
        animation: `float 6s ease-in-out infinite ${delay}s`,
      }}
    />
  );

const Animated = () =>{
    return(
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Particle
            key={i}
            delay={i * 0.4}
            size={Math.random() * 25 + 8}
            x={Math.random() * 100}
            y={Math.random() * 100}
          />
        ))}
      </div>
    )
}
export default Animated;