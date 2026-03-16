// import { useEffect, useRef, useState } from "react";

// const AnimatedCircle = () => {
//   const ref = useRef(null);
//   const [animate, setAnimate] = useState(false);

//   const r = 160;
//   const cx = 215;
//   const cy = 170;
//   const circumference = Math.round(2 * Math.PI * r); // ≈ 1005

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setAnimate(true);
//       },
//       { threshold: 0.4 },
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <svg
//       ref={ref}
//       className="absolute lg:block hidden pointer-events-none"
//       width="430"
//       height="340"
//       viewBox="0 0 430 340"
//       style={{
//         top: "55%",
//         left: "30%",
//         transform: "translate(-50%, -50%)",
//         zIndex: 0,
//       }}>
//       <circle
//         cx={cx}
//         cy={cy}
//         r={r}
//         stroke="rgba(255,255,255,0.15)"
//         strokeWidth="1"
//         fill="none"
//         // -90deg so stroke starts at 12 o'clock, draws clockwise
//         transform={`rotate(-90 ${cx} ${cy})`}
//         style={{
//           strokeDasharray: circumference,
//           strokeDashoffset: animate ? 0 : circumference,
//           transition: "stroke-dashoffset 2.5s cubic-bezier(0.4, 0, 0.2, 1)",
//         }}
//       />
//     </svg>
//   );
// };

// export default AnimatedCircle;

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
      className="absolute -top-20 -left-10 m-auto max-w-[530px]  h-[385px] lg:block hidden pointer-events-none"
      viewBox="0 0 530 440"
      style={{ zIndex: 0 }}>
      <circle
        cx={cx}
        cy={cy}
        r={r}
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1"
        fill="none"
        transform={`rotate(-90 ${cx} ${cy})`}
        style={{
          strokeDasharray: circumference,
          strokeDashoffset: animate ? 0 : circumference,
          transition: "stroke-dashoffset 2.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
    </svg>
  );
};

export default AnimatedCircle;
