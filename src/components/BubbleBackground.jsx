import { useEffect, useState } from "react";

export default function BubbleBackground() {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const temp = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      size: Math.random() * 140 + 90,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 30 + 30,
    }));
    setBubbles(temp);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {bubbles.map((b) => (
        <span
          key={b.id}
          className="bubble"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
