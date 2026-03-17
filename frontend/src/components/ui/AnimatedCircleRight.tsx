import { useEffect, useRef, useState } from "react";

const PremiumCircle = ({
  size = 430,
  aspect = "430/340",
  positionClass = "",
}) => {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  const cx = 300;
  const cy = 230;
  const r = 250;
  const circumference = Math.round(2 * Math.PI * r);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.4 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`absolute pointer-events-none flex items-center justify-center ${positionClass}`}>
      <svg
        className="w-[400px] max-w-[600px] h-[300px] lg:h-[480px]"
        viewBox="0 0 600 300">
        <defs>
          {/* Gradient Stroke */}
          <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%">
            <stop offset="0%" stopColor="#4285F4" />
            <stop offset="50%" stopColor="#9B72FF" />
            <stop offset="100%" stopColor="#00C2FF" />
          </linearGradient>
        </defs>

        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="url(#circleGradient)"
          strokeWidth="1.5"
          pathLength="1"
          transform={`rotate(-90 ${cx} ${cy})`}
          style={{
            strokeDasharray: 1,
            strokeDashoffset: 1,
            animation: "drawLoop 3s linear infinite",
          }}
        />
      </svg>
    </div>
  );
};

export default PremiumCircle;
