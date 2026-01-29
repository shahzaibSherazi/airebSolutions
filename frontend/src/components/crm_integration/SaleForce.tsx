// import React, { useEffect, useRef, useState } from "react";

// export default function SalesforceIntegration() {
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionRef.current) return;

//       const rect = sectionRef.current.getBoundingClientRect();
//       const sectionHeight = rect.height;
//       const viewportHeight = window.innerHeight;

//       // Calculate scroll progress through the section
//       const scrollStart = rect.top + sectionHeight - viewportHeight;
//       const scrollEnd = rect.top;
//       const scrollRange = scrollStart - scrollEnd;
//       const currentScroll = -scrollEnd;

//       let progress = currentScroll / scrollRange;
//       progress = Math.max(0, Math.min(1, progress));

//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Initial call

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const orbits = [
//     {
//       radius: 140,
//       direction: "clockwise",
//       rotations: 0.5, // Number of full rotations during scroll
//       logos: [
//         { name: "Twilio", color: "bg-red-500" },
//         { name: "FreeAgent", color: "bg-blue-400" },
//         { name: "HubSpot", color: "bg-orange-500" },
//       ],
//     },
//     {
//       radius: 220,
//       direction: "anticlockwise",
//       rotations: 0.4,
//       logos: [
//         { name: "Xero", color: "bg-blue-500" },
//         { name: "Engage", color: "bg-green-500" },
//         { name: "Asana", color: "bg-pink-500" },
//         { name: "Zoho", color: "bg-red-600" },
//       ],
//     },
//     {
//       radius: 300,
//       direction: "clockwise",
//       rotations: 0.3,
//       logos: [
//         { name: "Pipedrive", color: "bg-green-600" },
//         { name: "FAST", color: "bg-gray-800" },
//         { name: "Terminus", color: "bg-purple-600" },
//         { name: "MS", color: "bg-blue-600" },
//         { name: "Procore", color: "bg-orange-600" },
//       ],
//     },
//     {
//       radius: 380,
//       direction: "anticlockwise",
//       rotations: 0.25,
//       logos: [
//         { name: "Slack", color: "bg-purple-500" },
//         { name: "Demio", color: "bg-blue-500" },
//         { name: "QuickBooks", color: "bg-green-500" },
//         { name: "Zoom", color: "bg-blue-400" },
//         { name: "Chargebee", color: "bg-orange-500" },
//         { name: "Jira", color: "bg-blue-700" },
//       ],
//     },
//   ];

//   return (
//     <div
//       ref={sectionRef}
//       className="relative min-h-screen bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 overflow-hidden flex items-center justify-center">
//       {/* Decorative grid background */}
//       <div className="absolute inset-0 opacity-10">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `
//             linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
//           `,
//             backgroundSize: "50px 50px",
//           }}
//         />
//       </div>

//       {/* Diagonal lines decoration */}
//       <div className="absolute inset-0 opacity-5">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute h-full w-px bg-white transform rotate-45"
//             style={{ left: `${i * 5}%` }}
//           />
//         ))}
//       </div>

//       <div className="relative w-full max-w-4xl aspect-square flex items-center justify-center">
//         {/* Center Salesforce logo */}
//         <div className="absolute z-20 w-48 h-48 bg-white rounded-full shadow-2xl flex items-center justify-center">
//           <div className="text-center">
//             <div className="text-4xl font-bold text-blue-500 mb-1">
//               <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto">
//                 <path
//                   fill="#00A1E0"
//                   d="M35 20c-8.3 0-15 6.7-15 15 0 1.5.2 3 .6 4.4C14.4 41.9 10 47.9 10 55c0 9.4 7.6 17 17 17h46c9.4 0 17-7.6 17-17 0-7.1-4.4-13.1-10.6-15.6.4-1.4.6-2.9.6-4.4 0-8.3-6.7-15-15-15-2.1 0-4.1.4-5.9 1.2C56.6 14.8 50 10 42.5 10c-5.8 0-11 2.7-14.4 6.9C36.8 20.3 35.9 20 35 20z"
//                 />
//               </svg>
//             </div>
//             <div className="text-xl font-bold text-blue-500">salesforce</div>
//           </div>
//         </div>

//         {/* Orbital rings with logos */}
//         {orbits.map((orbit, orbitIndex) => {
//           // Calculate rotation based on scroll progress
//           const rotationMultiplier = orbit.direction === "clockwise" ? 1 : -1;
//           const scrollRotation =
//             scrollProgress * 360 * orbit.rotations * rotationMultiplier;

//           return (
//             <div
//               key={orbitIndex}
//               className="absolute inset-0 flex items-center justify-center transition-transform duration-100 ease-linear"
//               style={{
//                 transform: `rotate(${scrollRotation}deg)`,
//               }}>
//               {/* Orbital ring */}
//               <div
//                 className="absolute border border-blue-300/30 rounded-full"
//                 style={{
//                   width: `${orbit.radius * 2}px`,
//                   height: `${orbit.radius * 2}px`,
//                 }}
//               />

//               {/* Small dots on the orbital ring */}
//               {[...Array(8)].map((_, dotIndex) => (
//                 <div
//                   key={`dot-${dotIndex}`}
//                   className="absolute w-1.5 h-1.5 bg-blue-300/40 rounded-full"
//                   style={{
//                     transform: `rotate(${dotIndex * 45}deg) translateY(-${orbit.radius}px)`,
//                   }}
//                 />
//               ))}

//               {/* Logos on orbit - fixed to the ring */}
//               {orbit.logos.map((logo, logoIndex) => {
//                 const angleOffset = (360 / orbit.logos.length) * logoIndex;

//                 return (
//                   <div
//                     key={`${orbitIndex}-${logoIndex}`}
//                     className="absolute"
//                     style={{
//                       transform: `rotate(${angleOffset}deg) translateY(-${orbit.radius}px)`,
//                     }}>
//                     {/* Counter-rotate the logo card so it stays upright */}
//                     <div
//                       className="relative"
//                       style={{
//                         transform: `rotate(-${scrollRotation + angleOffset}deg)`,
//                       }}>
//                       {/* Logo card */}
//                       <div className="bg-white rounded-lg shadow-lg px-4 py-2 flex items-center justify-center min-w-[80px] hover:scale-110 transition-transform duration-300">
//                         <div
//                           className={`w-2 h-2 rounded-full ${logo.color} mr-2`}
//                         />
//                         <span className="text-xs font-semibold text-gray-800 whitespace-nowrap">
//                           {logo.name}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           );
//         })}

//         {/* Subtle glow effect */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="w-64 h-64 bg-blue-300/10 rounded-full blur-3xl" />
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";

// const ScrollConstellation = () => {
//   const containerRef = useRef(null);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   // Orbits data
//   const orbitsData = [
//     { radius: 80, color: "#41528c", speed: 0.3, dash: "2,4" },
//     { radius: 120, color: "#4d71dd", speed: 0.5, dash: "1,3" },
//     { radius: 160, color: "#41528c", speed: 0.8, dash: "2,4" },
//     { radius: 200, color: "#4d71dd", speed: 1.1, dash: "1,3" },
//     { radius: 240, color: "#41528c", speed: 1.4, dash: "2,4" },
//     { radius: 280, color: "#4d71dd", speed: 1.7, dash: "1,3" },
//   ];

//   // Labels data
//   const labelsData = [
//     { orbit: 0, position: 0, text: "ERP", color: "#4d71dd" },
//     { orbit: 0, position: 120, text: "Email", color: "#4d71dd" },
//     { orbit: 1, position: 45, text: "WMS", color: "#4d71dd" },
//     { orbit: 1, position: 165, text: "TMS", color: "#4d71dd" },
//     { orbit: 2, position: 30, text: "FMS", color: "#4d71dd" },
//     { orbit: 2, position: 150, text: "3PL", color: "#d7824b" },
//     { orbit: 3, position: 0, text: "Importer", color: "#d7824b" },
//     { orbit: 3, position: 90, text: "Invoices", color: "#d7824b" },
//     { orbit: 3, position: 180, text: "Packing", color: "#d7824b" },
//     { orbit: 3, position: 270, text: "PO", color: "#d7824b" },
//     { orbit: 4, position: 20, text: "BOL", color: "#d7824b" },
//     { orbit: 4, position: 80, text: "Notice", color: "#d7824b" },
//     { orbit: 4, position: 140, text: "Suppliers", color: "#4d71dd" },
//     { orbit: 4, position: 200, text: "Carrier", color: "#4d71dd" },
//     { orbit: 4, position: 260, text: "Broker", color: "#4d71dd" },
//     { orbit: 4, position: 320, text: "Forwarder", color: "#4d71dd" },
//     { orbit: 5, position: 30, text: "Maritime", color: "#4d71dd" },
//     { orbit: 5, position: 120, text: "Port", color: "#4d71dd" },
//     { orbit: 5, position: 210, text: "Financial", color: "#4d71dd" },
//     { orbit: 5, position: 300, text: "Exporter", color: "#4d71dd" },
//   ];

//   // Handle scroll progress
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollHeight =
//         document.documentElement.scrollHeight - window.innerHeight;
//       const scrolled = window.scrollY;
//       const progress =
//         scrollHeight > 0 ? Math.min(scrolled / scrollHeight, 1) : 0;
//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Initial call

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Animation on scroll progress change
//   useEffect(() => {
//     if (!containerRef.current) return;

//     // Animate orbits
//     orbitsData.forEach((orbit, index) => {
//       const rotation = scrollProgress * 360 * orbit.speed;
//       const orbitElements = containerRef.current.querySelectorAll(
//         `[data-orbit="${index}"]`,
//       );

//       orbitElements.forEach((el) => {
//         gsap.set(el, {
//           rotation: rotation,
//           transformOrigin: "center center",
//         });
//       });
//     });

//     // Animate labels
//     labelsData.forEach((label, index) => {
//       const labelElement = containerRef.current.querySelector(
//         `[data-label="${index}"]`,
//       );
//       if (!labelElement) return;

//       const orbit = orbitsData[label.orbit];
//       const angle = label.position + scrollProgress * 360 * orbit.speed;
//       const rad = (angle * Math.PI) / 180;
//       const x = Math.cos(rad) * orbit.radius;
//       const y = Math.sin(rad) * orbit.radius;

//       gsap.set(labelElement, {
//         x: x,
//         y: y,
//         scale: 1 + scrollProgress * 0.3,
//         opacity: 0.7 + scrollProgress * 0.3,
//       });
//     });

//     // Animate central logo
//     const logoElement = containerRef.current.querySelector(".central-logo");
//     if (logoElement) {
//       gsap.set(logoElement, {
//         rotation: scrollProgress * 180,
//         scale: 1 + scrollProgress * 0.2,
//       });
//     }
//   }, [scrollProgress]);

//   return (
//     <div className="relative w-full min-h-[400vh]">
//       {/* Scroll Progress Bar */}

//       {/* Sticky Constellation Container */}
//       <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none z-20">
//         <div
//           ref={containerRef}
//           className="relative w-full h-full flex items-center justify-center">
//           {/* Background Glow */}
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-orange-500/10 blur-3xl rounded-full" />

//           {/* Orbits */}
//           {orbitsData.map((orbit, index) => (
//             <div
//               key={index}
//               data-orbit={index}
//               className="absolute rounded-full border border-dashed will-change-transform"
//               style={{
//                 width: `${orbit.radius * 2}px`,
//                 height: `${orbit.radius * 2}px`,
//                 borderColor: orbit.color,
//                 borderWidth: "1px",
//                 borderDasharray: orbit.dash,
//                 transform: "translate(-50%, -50%)",
//               }}
//             />
//           ))}

//           {/* Central Logo */}
//           <div className="absolute central-logo">
//             <div className="relative w-24 h-24">
//               {/* Glow effect */}
//               <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full" />

//               {/* Logo SVG */}
//               <svg
//                 width="96"
//                 height="96"
//                 viewBox="0 0 96 96"
//                 fill="none"
//                 className="relative z-10">
//                 <path
//                   d="M48 18L33 48L48 78L63 48L48 18Z"
//                   fill="url(#logoGradient)"
//                   stroke="#4d71dd"
//                   strokeWidth="2"
//                 />
//                 <circle
//                   cx="48"
//                   cy="48"
//                   r="15"
//                   fill="#121b4a"
//                   stroke="#4d71dd"
//                   strokeWidth="2"
//                 />
//                 <circle cx="48" cy="48" r="6" fill="#4d71dd" />

//                 <defs>
//                   <linearGradient
//                     id="logoGradient"
//                     x1="48"
//                     y1="18"
//                     x2="48"
//                     y2="78"
//                     gradientUnits="userSpaceOnUse">
//                     <stop stopColor="#4d71dd" />
//                     <stop offset="1" stopColor="#d7824b" />
//                   </linearGradient>
//                 </defs>
//               </svg>
//             </div>
//           </div>

//           {/* Labels */}
//           {labelsData.map((label, index) => (
//             <div
//               key={index}
//               data-label={index}
//               className="absolute will-change-transform pointer-events-auto cursor-pointer transition-all duration-300"
//               style={{
//                 transform: "translate(-50%, -50%)",
//               }}>
//               <div
//                 className={`
//                 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap
//                 border backdrop-blur-sm transition-all duration-300
//                 hover:scale-110 hover:shadow-lg hover:z-50
//                 ${
//                   label.color === "#d7824b"
//                     ? "bg-gray-900/80 border-orange-500/40 text-white"
//                     : "bg-gray-900/80 border-blue-500/40 text-white"
//                 }
//               `}>
//                 {label.text}
//               </div>
//             </div>
//           ))}

//           {/* Connection Lines */}
//           <svg className="absolute w-full h-full pointer-events-none">
//             <defs>
//               <linearGradient
//                 id="lineGradient"
//                 x1="0%"
//                 y1="0%"
//                 x2="100%"
//                 y2="0%">
//                 <stop offset="0%" stopColor="#4d71dd" stopOpacity="0.3" />
//                 <stop offset="100%" stopColor="#d7824b" stopOpacity="0.3" />
//               </linearGradient>
//             </defs>

//             {labelsData.map((label, index) => {
//               const orbit = orbitsData[label.orbit];
//               const angle = label.position + scrollProgress * 360 * orbit.speed;
//               const rad = (angle * Math.PI) / 180;
//               const x = Math.cos(rad) * orbit.radius;
//               const y = Math.sin(rad) * orbit.radius;

//               return (
//                 <line
//                   key={index}
//                   x1="50%"
//                   y1="50%"
//                   x2={`calc(50% + ${x}px)`}
//                   y2={`calc(50% + ${y}px)`}
//                   stroke="url(#lineGradient)"
//                   strokeWidth="0.5"
//                   strokeDasharray="2,2"
//                   opacity={0.2 + scrollProgress * 0.3}
//                 />
//               );
//             })}
//           </svg>
//         </div>
//       </div>

//       {/* Content Sections (for scrolling) */}
//     </div>
//   );
// };

// export default ScrollConstellation;

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const ScrollConstellation = () => {
  const containerRef = useRef(null);
  const parentRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Orbits data
  const orbitsData = [
    { radius: 80, color: "#41528c", speed: 0.3, dash: "2,4" },
    { radius: 120, color: "#4d71dd", speed: 0.5, dash: "1,3" },
    { radius: 160, color: "#41528c", speed: 0.8, dash: "2,4" },
    { radius: 200, color: "#4d71dd", speed: 1.1, dash: "1,3" },
    { radius: 240, color: "#41528c", speed: 1.4, dash: "2,4" },
    { radius: 280, color: "#4d71dd", speed: 1.7, dash: "1,3" },
  ];

  // Labels data
  const labelsData = [
    { orbit: 0, position: 0, text: "ERP", color: "#4d71dd" },
    { orbit: 0, position: 120, text: "Email", color: "#4d71dd" },
    { orbit: 1, position: 45, text: "WMS", color: "#4d71dd" },
    { orbit: 1, position: 165, text: "TMS", color: "#4d71dd" },
    { orbit: 2, position: 30, text: "FMS", color: "#4d71dd" },
    { orbit: 2, position: 150, text: "3PL", color: "#d7824b" },
    { orbit: 3, position: 0, text: "Importer", color: "#d7824b" },
    { orbit: 3, position: 90, text: "Invoices", color: "#d7824b" },
    { orbit: 3, position: 180, text: "Packing", color: "#d7824b" },
    { orbit: 3, position: 270, text: "PO", color: "#d7824b" },
    { orbit: 4, position: 20, text: "BOL", color: "#d7824b" },
    { orbit: 4, position: 80, text: "Notice", color: "#d7824b" },
    { orbit: 4, position: 140, text: "Suppliers", color: "#4d71dd" },
    { orbit: 4, position: 200, text: "Carrier", color: "#4d71dd" },
    { orbit: 4, position: 260, text: "Broker", color: "#4d71dd" },
    { orbit: 4, position: 320, text: "Forwarder", color: "#4d71dd" },
    { orbit: 5, position: 30, text: "Maritime", color: "#4d71dd" },
    { orbit: 5, position: 120, text: "Port", color: "#4d71dd" },
    { orbit: 5, position: 210, text: "Financial", color: "#4d71dd" },
    { orbit: 5, position: 300, text: "Exporter", color: "#4d71dd" },
  ];

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (!parentRef.current) return;

      const rect = parentRef.current.getBoundingClientRect();
      const parentHeight = parentRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate progress: 0 when section enters bottom, 1 when it exits top
      const start = viewportHeight;
      const end = -parentHeight + viewportHeight;
      const range = start - end;
      const current = rect.top;

      let progress = (start - current) / range;
      progress = Math.max(0, Math.min(1, progress));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation on scroll progress change
  useEffect(() => {
    if (!containerRef.current) return;

    // Animate orbits
    orbitsData.forEach((orbit, index) => {
      const rotation = scrollProgress * 360 * orbit.speed;
      const orbitElements = containerRef.current.querySelectorAll(
        `[data-orbit="${index}"]`,
      );

      orbitElements.forEach((el) => {
        gsap.to(el, {
          rotation: rotation,
          transformOrigin: "center center",
          duration: 0.1,
          ease: "none",
        });
      });
    });

    // Animate labels
    labelsData.forEach((label, index) => {
      const labelElement = containerRef.current.querySelector(
        `[data-label="${index}"]`,
      );
      if (!labelElement) return;

      const orbit = orbitsData[label.orbit];
      const angle = label.position + scrollProgress * 360 * orbit.speed;
      const rad = (angle * Math.PI) / 180;
      const x = Math.cos(rad) * orbit.radius;
      const y = Math.sin(rad) * orbit.radius;

      gsap.to(labelElement, {
        x: x,
        y: y,
        scale: 1 + scrollProgress * 0.3,
        opacity: 0.7 + scrollProgress * 0.3,
        duration: 0.1,
        ease: "none",
      });
    });

    // Animate central logo
    const logoElement = containerRef.current.querySelector(".central-logo");
    if (logoElement) {
      gsap.to(logoElement, {
        rotation: scrollProgress * 180,
        scale: 1 + scrollProgress * 0.2,
        duration: 0.1,
        ease: "none",
      });
    }
  }, [scrollProgress]);

  return (
    <div
      ref={parentRef}
      className="relative w-full min-h-[400vh] bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* Sticky Constellation Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none z-20">
        <div
          ref={containerRef}
          className="relative w-full h-full flex items-center justify-center">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-orange-500/10 blur-3xl rounded-full" />

          {/* Orbits Container - Centered */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* Orbits */}
            {orbitsData.map((orbit, index) => (
              <div
                key={index}
                data-orbit={index}
                className="absolute top-1/2 left-1/2 rounded-full border border-dashed will-change-transform"
                style={{
                  width: `${orbit.radius * 2}px`,
                  height: `${orbit.radius * 2}px`,
                  borderColor: orbit.color,
                  borderWidth: "1px",
                  borderDasharray: orbit.dash,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}

            {/* Central Logo */}
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-1">
                <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto">
                  <path
                    fill="#00A1E0"
                    d="M35 20c-8.3 0-15 6.7-15 15 0 1.5.2 3 .6 4.4C14.4 41.9 10 47.9 10 55c0 9.4 7.6 17 17 17h46c9.4 0 17-7.6 17-17 0-7.1-4.4-13.1-10.6-15.6.4-1.4.6-2.9.6-4.4 0-8.3-6.7-15-15-15-2.1 0-4.1.4-5.9 1.2C56.6 14.8 50 10 42.5 10c-5.8 0-11 2.7-14.4 6.9C36.8 20.3 35.9 20 35 20z"
                  />
                </svg>
              </div>

              <div className="text-xl font-bold text-blue-500">salesforce</div>
            </div>
            {/* Labels */}
            {labelsData.map((label, index) => (
              <div
                key={index}
                data-label={index}
                className="absolute top-1/2 left-1/2 will-change-transform pointer-events-auto cursor-pointer transition-all duration-300"
                style={{
                  transform: "translate(-50%, -50%)",
                }}>
                <div
                  className={`
                  px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap
                  border backdrop-blur-sm transition-all duration-300
                  hover:scale-110 hover:shadow-lg hover:z-50
                  ${
                    label.color === "#d7824b"
                      ? "bg-gray-900/80 border-orange-500/40 text-white"
                      : "bg-gray-900/80 border-blue-500/40 text-white"
                  }
                `}>
                  {label.text}
                </div>
              </div>
            ))}

            {/* Connection Lines */}
            <svg
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{ width: "600px", height: "600px" }}>
              <defs>
                <linearGradient
                  id="lineGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%">
                  <stop offset="0%" stopColor="#4d71dd" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#d7824b" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {labelsData.map((label, index) => {
                const orbit = orbitsData[label.orbit];
                const angle =
                  label.position + scrollProgress * 360 * orbit.speed;
                const rad = (angle * Math.PI) / 180;
                const x = Math.cos(rad) * orbit.radius;
                const y = Math.sin(rad) * orbit.radius;

                return (
                  <line
                    key={index}
                    x1="300"
                    y1="300"
                    x2={300 + x}
                    y2={300 + y}
                    stroke="url(#lineGradient)"
                    strokeWidth="0.5"
                    strokeDasharray="2,2"
                    opacity={0.2 + scrollProgress * 0.3}
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollConstellation;
