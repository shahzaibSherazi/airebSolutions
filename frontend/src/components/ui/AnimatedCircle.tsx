import { useEffect, useRef, useState } from "react";

const AnimatedCircle = () => {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  const r = 200;
  const cx = 200;
  const cy = 180;
  const circumference = Math.round(2 * Math.PI * r);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.8 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      className="absolute -top-30 -left-16 m-auto max-w-[530px]  h-[385px] lg:block hidden pointer-events-none"
      viewBox="0 100 530 440"
      style={{ zIndex: 0 }}>
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
  );
};

export default AnimatedCircle;
