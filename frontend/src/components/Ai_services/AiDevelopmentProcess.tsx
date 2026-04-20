// import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Register GSAP plugin
// gsap.registerPlugin(ScrollTrigger);

// const AIDevelopmentProcess = () => {
//   const sectionRef = useRef(null);
//   const headerRef = useRef(null);
//   const containerRef = useRef(null);
//   const pairRefs = useRef([]);
//   const [activeStep, setActiveStep] = useState(null);
//   const getIsMobile = () =>
//     typeof window !== "undefined" &&
//     window.matchMedia("(max-width: 1023px)").matches;

//   const [isMobile, setIsMobile] = useState(getIsMobile);
//   useEffect(() => {
//     const mq = window.matchMedia("(max-width: 1023px)");
//     const handler = (e) => setIsMobile(e.matches);

//     mq.addEventListener("change", handler);
//     return () => mq.removeEventListener("change", handler);
//   }, []);
//   const steps = [
//     {
//       id: 1,
//       number: "Step 1",
//       title: "Requirement Analysis & Data Collection",
//       description:
//         "Understanding business needs and gathering relevant data for AI model training.",
//     },
//     {
//       id: 2,
//       number: "Step 2",
//       title: "Data Preprocessing & Feature Engineering",
//       description:
//         "Cleaning, organizing, and optimizing datasets for accurate model training.",
//     },
//     {
//       id: 3,
//       number: "Step 3",
//       title: "Model Development & Training",
//       description:
//         "Building and training AI models using industry-leading frameworks.",
//     },
//     {
//       id: 4,
//       number: "Step 4",
//       title: "Testing & Validation",
//       description:
//         "Conducting rigorous evaluations to ensure performance, accuracy, and reliability.",
//     },
//     {
//       id: 5,
//       number: "Step 5",
//       title: "Deployment & Integration",
//       description:
//         "Seamlessly integrating AI models into business applications and workflows.",
//     },
//     {
//       id: 6,
//       number: "Step 6",
//       title: "Monitoring & Continuous Improvement",
//       description:
//         "Providing ongoing model updates and enhancements for long-term efficiency.",
//     },
//   ];

//   // Group steps into pairs
//   const stepPairs = [];
//   for (let i = 0; i < steps.length; i += 2) {
//     stepPairs.push(steps.slice(i, i + 2));
//   }

//   useLayoutEffect(() => {
//     let ctx;

//     if (isMobile) {
//       ScrollTrigger.killAll();
//       return;
//     }

//     // ✅ DESKTOP ONLY
//     ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: `+=${stepPairs.length * 100}%`,
//           pin: true,
//           scrub: 1,
//           anticipatePin: 1,
//         },
//       });

//       tl.from(headerRef.current, { opacity: 0.1, y: 40, duration: 0.3 }, 0);

//       stepPairs.forEach((_, index) => {
//         if (index > 0) {
//           const t = index * 1;

//           tl.to(
//             pairRefs.current[index - 1],
//             {
//               opacity: 0,
//               y: -70,
//               scale: 0.75,
//               duration: 0.3,
//               ease: "power2.inOut",
//             },
//             t,
//           );

//           tl.fromTo(
//             pairRefs.current[index],
//             {
//               opacity: 0,
//               y: 100,
//               scale: 0.75,
//             },
//             {
//               opacity: 1,
//               y: 0,
//               scale: 1,
//               duration: 0.3,
//               ease: "power3.out",
//             },
//             t + 0.3,
//           );
//         }
//       });

//       ScrollTrigger.refresh();
//     }, sectionRef);

//     return () => ctx?.revert();
//   }, [isMobile]);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full bg-black overflow-hidden">
//       {/* Content */}
//       <div className="container relative z-10 flex flex-col justify-center py-16 px-2 lg:px-8">
//         {/* Section Header */}
//         <div ref={headerRef} className="text-center mb-12 lg:mb-16">
//           <h2 className="text-white text-h2 mb-6 font-stoke font-normal">
//             Our AI Development Process
//           </h2>
//           <p className="text-white max-w-2xl mx-auto font-outfit font-normal text-p">
//             At Aireb Solutions, we follow a proven, results-driven process that
//             ensures the delivery of high-quality, scalable, and secure
//             solutions:
//           </p>
//         </div>

//         {/* Steps Container */}
//         <div ref={containerRef} className="relative w-full">
//           {/* Vertical Connection Line for Desktop */}
//           <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary hidden lg:block -translate-x-1/2 z-0" />

//           {/* All step pairs in same position */}
//           <div className={isMobile ? "space-y-0" : "relative min-h-[500px]"}>
//             {stepPairs.map((pair, pairIndex) => (
//               <div
//                 key={pairIndex}
//                 ref={(el) => (pairRefs.current[pairIndex] = el)}
//                 className={`w-full ${
//                   isMobile
//                     ? "relative opacity-100"
//                     : `absolute inset-0 ${
//                         pairIndex === 0 ? "opacity-100" : "opacity-0"
//                       }`
//                 }`}
//                 style={{
//                   transform: isMobile
//                     ? "none"
//                     : pairIndex === 0
//                       ? "translateY(0)"
//                       : "translateY(100px)",
//                 }}>
//                 {/* Desktop Layout */}
//                 <div className="hidden lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
//                   {/* Center Circle Indicator */}
//                   <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
//                     <div className="relative">
//                       {/* Pulsing Ring */}
//                       <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping-slow opacity-75" />

//                       {/* Center Circle */}
//                       <div className="relative w-12 h-12 rounded-full bg-gray-900 border-2 border-primary flex items-center justify-center shadow-lg shadow-primary/50">
//                         <div className="w-3 h-3 rounded-full bg-primary" />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Left Card */}
//                   {pair[0] && (
//                     <div className="relative pr-8">
//                       <StepCard
//                         step={pair[0]}
//                         align="right"
//                         activeStep={activeStep}
//                         setActiveStep={setActiveStep}
//                       />
//                     </div>
//                   )}

//                   {/* Right Card */}
//                   {pair[1] && (
//                     <div className="relative pl-8">
//                       <StepCard
//                         step={pair[1]}
//                         align="left"
//                         activeStep={activeStep}
//                         setActiveStep={setActiveStep}
//                       />
//                     </div>
//                   )}
//                 </div>

//                 {/* Mobile Layout */}
//                 <div className="lg:hidden space-y-6">
//                   {pair[0] && (
//                     <StepCard
//                       step={pair[0]}
//                       activeStep={activeStep}
//                       setActiveStep={setActiveStep}
//                     />
//                   )}
//                   {pair[1] && (
//                     <StepCard
//                       step={pair[1]}
//                       activeStep={activeStep}
//                       setActiveStep={setActiveStep}
//                     />
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const StepCard = ({ step, align = "left", activeStep, setActiveStep }) => {
//   const isActive = activeStep === step.id;

//   return (
//     <div
//       className="group relative"
//       onMouseEnter={() => setActiveStep(step.id)}
//       onMouseLeave={() => setActiveStep(null)}>
//       <div
//         className={`relative p-6 sm:p-8 transition-all duration-500 flex flex-col min-h-[240px]
//           ${align === "right" ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"}
//         `}>
//         {/* Step Badge */}
//         <div
//           className={`inline-flex items-center gap-2 px-4 py-2 mb-4 bg-primary badge-with-dot
//             ${align === "right" ? "lg:self-end" : "lg:self-start"}`}>
//           <span
//             className="text-white font-semibold"
//             style={{
//               fontFamily: "Outfit, sans-serif",
//               fontSize: "14px",
//             }}>
//             {step.number}
//           </span>
//         </div>

//         {/* Title */}
//         <h3
//           className="text-white mb-3 line-clamp-2 flex-shrink-0 font-outfit font-bold"
//           style={{
//             fontSize: "clamp(14px, 2vw, 18px)",
//             lineHeight: "1.4",
//           }}>
//           {step.title}
//         </h3>

//         {/* Description */}
//         <p
//           style={{
//             background: "linear-gradient(180deg, #141414 0%, #141414 100%)",
//           }}
//           className="text-textColor line-clamp-4 flex-grow font-outfit font-normal text-base rounded-[5px] border border-[#4B4B4B] p-4">
//           {step.description}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AIDevelopmentProcess;

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";

const steps = [
  {
    id: 1,
    number: "Step 1",
    title: "Requirement Analysis & Data Collection",
    description:
      "Understanding business needs and gathering relevant data for AI model training.",
  },
  {
    id: 2,
    number: "Step 2",
    title: "Data Preprocessing & Feature Engineering",
    description:
      "Cleaning, organizing, and optimizing datasets for accurate model training.",
  },
  {
    id: 3,
    number: "Step 3",
    title: "Model Development & Training",
    description:
      "Building and training AI models using industry-leading frameworks.",
  },
  {
    id: 4,
    number: "Step 4",
    title: "Testing & Validation",
    description:
      "Conducting rigorous evaluations to ensure performance, accuracy, and reliability.",
  },
  {
    id: 5,
    number: "Step 5",
    title: "Deployment & Integration",
    description:
      "Seamlessly integrating AI models into business applications and workflows.",
  },
  {
    id: 6,
    number: "Step 6",
    title: "Monitoring & Continuous Improvement",
    description:
      "Providing ongoing model updates and enhancements for long-term efficiency.",
  },
];

// Group into pairs: [[s1,s2],[s3,s4],[s5,s6]]
const stepPairs = steps.reduce<(typeof steps)[]>((acc, _, i) => {
  if (i % 2 === 0) acc.push(steps.slice(i, i + 2));
  return acc;
}, []);

/* ─────────────────────────────────────────
   STEP CARD — unchanged UI
───────────────────────────────────────── */
const StepCard = ({
  step,
  align = "left",
  activeStep,
  setActiveStep,
}: {
  step: (typeof steps)[0];
  align?: "left" | "right";
  activeStep: number | null;
  setActiveStep: (id: number | null) => void;
}) => (
  <div
    className="group relative"
    onMouseEnter={() => setActiveStep(step.id)}
    onMouseLeave={() => setActiveStep(null)}>
    <div
      className={`relative p-6 sm:p-8 transition-all duration-500 flex flex-col min-h-[240px]
        ${align === "right" ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"}`}>
      {/* Step Badge */}
      <div
        className={`inline-flex items-center gap-2 px-4 py-2 mb-4 bg-primary badge-with-dot
          ${align === "right" ? "lg:self-end" : "lg:self-start"}`}>
        <span className="text-white font-semibold font-outfit text-sm">
          {step.number}
        </span>
      </div>

      {/* Title */}
      <h3
        className="text-white mb-3 line-clamp-2 flex-shrink-0 font-outfit font-bold"
        style={{ fontSize: "clamp(14px, 2vw, 18px)", lineHeight: "1.4" }}>
        {step.title}
      </h3>

      {/* Description */}
      <p
        className="text-textColor line-clamp-4 flex-grow font-outfit font-normal text-base rounded-[5px] border border-[#4B4B4B] p-4"
        style={{
          background: "linear-gradient(180deg, #141414 0%, #141414 100%)",
        }}>
        {step.description}
      </p>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
const AIDevelopmentProcess = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [activePair, setActivePair] = useState(0);

  // Outer tall container — gives scroll room on desktop
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Drive activePair from scroll (same pattern as OurWorkProcess)
  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      const next = Math.min(
        stepPairs.length - 1,
        Math.floor(v * stepPairs.length),
      );
      setActivePair(next);
    });
    return () => unsub();
  }, [scrollYProgress]);

  return (
    // Outer: tall on desktop for scroll room, auto on mobile
    <div ref={containerRef} className="h-auto lg:h-[300vh]">
      {/* Sticky on desktop, static on mobile */}
      <div className="relative lg:sticky lg:top-0 w-full bg-black  flex items-center">
        <div className="container relative z-10 flex flex-col justify-center py-16 px-2 lg:px-8 w-full">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-white text-h2 mb-6 font-stoke font-normal">
              Our AI Development Process
            </h2>
            <p className="text-white max-w-2xl mx-auto font-outfit font-normal text-p">
              At Aireb Solutions, we follow a proven, results-driven process
              that ensures the delivery of high-quality, scalable, and secure
              solutions:
            </p>
          </div>

          {/* Steps Container */}
          <div className="relative w-full">
            {/* Vertical line — desktop only */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary hidden lg:block -translate-x-1/2 z-0" />

            {/* ── MOBILE: all pairs flat, no animation ── */}
            <div className="block lg:hidden space-y-6">
              {stepPairs.map((pair, pi) => (
                <div key={pi} className="space-y-6">
                  {pair[0] && (
                    <StepCard
                      step={pair[0]}
                      activeStep={activeStep}
                      setActiveStep={setActiveStep}
                    />
                  )}
                  {pair[1] && (
                    <StepCard
                      step={pair[1]}
                      activeStep={activeStep}
                      setActiveStep={setActiveStep}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* ── DESKTOP: single animated pair ── */}
            <div className="hidden lg:block relative min-h-[500px]">
              {/* Center circle indicator */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping-slow opacity-75" />
                  <div className="relative w-12 h-12 rounded-full bg-gray-900 border-2 border-primary flex items-center justify-center shadow-lg shadow-primary/50">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                </div>
              </div>

              {/* Animated pair — key change triggers enter animation */}
              <motion.div
                key={activePair}
                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -70, scale: 0.75 }}
                transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="grid grid-cols-2 gap-24 items-center">
                {/* Left card */}
                {stepPairs[activePair]?.[0] && (
                  <div className="relative pr-8">
                    <StepCard
                      step={stepPairs[activePair][0]}
                      align="right"
                      activeStep={activeStep}
                      setActiveStep={setActiveStep}
                    />
                  </div>
                )}

                {/* Right card */}
                {stepPairs[activePair]?.[1] && (
                  <div className="relative pl-8">
                    <StepCard
                      step={stepPairs[activePair][1]}
                      align="left"
                      activeStep={activeStep}
                      setActiveStep={setActiveStep}
                    />
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIDevelopmentProcess;
