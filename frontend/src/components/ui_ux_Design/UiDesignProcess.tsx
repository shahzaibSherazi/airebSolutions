// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// const steps = [
//   {
//     number: "01",
//     title: "Discovery & Strategy",
//     description:
//       "Understand your business goals and target users to create a strategic design plan.",
//   },
//   {
//     number: "02",
//     title: "User Research & Insights",
//     description:
//       "Conduct detailed research to understand user behaviors, preferences, and pain points.",
//   },
//   {
//     number: "03",
//     title: "Wireframing & Prototyping",
//     description:
//       "Create initial wireframes and prototypes to visualize user flow and interactions.",
//   },
//   {
//     number: "04",
//     title: "Design & Iteration",
//     description:
//       "Finalize the UI/UX design while iterating based on usability testing and feedback.",
//   },
//   {
//     number: "05",
//     title: "Development & Implementation",
//     description:
//       "Collaborate with developers to bring the design to life, ensuring all UI/UX principles are implemented.",
//   },
//   {
//     number: "06",
//     title: "Post-Launch Optimization",
//     description:
//       "Continuously monitor user behavior and optimize the design to ensure ongoing satisfaction.",
//   },
// ];

// export default function UIUXProcess() {
//   const [activeStep, setActiveStep] = useState(0);
//   const [revealedSteps, setRevealedSteps] = useState([0]);
//   const sectionRef = useRef(null);
//   const stepsRef = useRef([]);
//   const containerRef = useRef(null);

//   gsap.registerPlugin(ScrollTrigger);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const totalSteps = steps.length;

//     const trigger = ScrollTrigger.create({
//       trigger: section,
//       start: "top top",
//       end: "bottom bottom",
//       scrub: true,
//       onUpdate: (self) => {
//         const progress = self.progress;

//         const currentStep = Math.min(
//           Math.floor(progress * totalSteps),
//           totalSteps - 1,
//         );

//         setActiveStep(currentStep);
//         setRevealedSteps(Array.from({ length: currentStep + 1 }, (_, i) => i));
//       },
//     });

//     return () => {
//       trigger.kill();
//     };
//   }, []);

//   const stickyHeight = `${(steps.length + 1) * 100}vh`;

//   return (
//     <div className="w-full bg-[#0E1828]">
//       {/* Scrollable driver */}
//       <div
//         ref={sectionRef}
//         style={{ height: stickyHeight }}
//         className="relative">
//         {/* Sticky viewport */}
//         <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
//           {/* ── Header ── */}
//           <div className="pt-20 mb-12 px-6 md:px-8 flex-shrink-0">
//             <h1 className="text-textColor font-extralight font-outfit text-[clamp(28px,5vw,52px)] mb-3 leading-tight">
//               Our UI/UX Design Process
//             </h1>
//             <p className="text-textColor font-outfit text-sm md:text-base  font-light leading-relaxed">
//               At Aireb Solutions, we follow a streamlined on-demand app
//               development <br className="hidden lg:block" /> cycle that ensures
//               efficiency and innovation
//             </p>
//           </div>

//           {/* ── Steps ── */}
//           <div
//             ref={containerRef}
//             className="flex-1 flex flex-col justify-start overflow-hidden relative px-6 md:px-8  pb-8">
//             {steps.map((step, index) => {
//               const isActive = index === activeStep;
//               const isRevealed = revealedSteps.includes(index);
//               const isPast = index < activeStep;

//               return (
//                 <div
//                   key={index}
//                   ref={(el) => (stepsRef.current[index] = el)}
//                   className="relative transition-all duration-700 ease-out"
//                   style={{
//                     opacity: isRevealed ? 1 : 0,
//                     transform: isRevealed
//                       ? "translateY(0)"
//                       : "translateY(32px)",
//                     transitionDelay: isRevealed ? `${index * 40}ms` : "0ms",
//                     zIndex: index + 1,
//                     marginBottom: isActive ? "0" : "-2px",
//                   }}>
//                   {/* Row */}
//                   <div
//                     className={`relative grid items-center rounded-sm overflow-hidden transition-all duration-700 ease-in-out ${isActive ? "bg-primary" : ""}`}
//                     style={{
//                       gridTemplateColumns: "1.5fr 0.5fr 2fr",

//                       backdropFilter: isActive ? "blur(12px)" : "none",
//                       boxShadow: isActive
//                         ? "0 0 60px rgba(66, 99, 235, 0.25), 0 8px 32px rgba(0,0,0,0.4)"
//                         : "none",
//                       minHeight: isActive ? "72px" : "60px",
//                       padding: isActive ? "0 20px" : "0 20px",
//                     }}>
//                     {/* Left — Title */}
//                     <div className="flex items-center gap-3 pr-4">
//                       <span
//                         className="font-light font-stoke transition-all duration-700 text-left"
//                         style={{
//                           fontSize: isActive
//                             ? "clamp(18px, 2.2vw, 24px)"
//                             : "clamp(16px, 1.8vw, 22px)",
//                           color: isActive
//                             ? "#ffffff"
//                             : "rgba(200, 215, 255, 0.65)",
//                           letterSpacing: "0.01em",
//                         }}>
//                         {step.title}
//                       </span>
//                     </div>

//                     {/* Center — Step number circle */}
//                     <div className="flex flex-col items-center justify-center flex-shrink-0 px-2">
//                       {/* Connector line FROM previous step's circle bottom TO this circle top
//                           Only render when this step is revealed AND previous step was also revealed */}
//                       <div
//                         className="w-px transition-all duration-700"
//                         style={{
//                           height:
//                             index > 0 &&
//                             revealedSteps.includes(index - 1) &&
//                             isRevealed
//                               ? isActive
//                                 ? "14px"
//                                 : "10px"
//                               : "0px",
//                           opacity:
//                             index > 0 &&
//                             revealedSteps.includes(index - 1) &&
//                             isRevealed
//                               ? 1
//                               : 0,
//                           background: isActive
//                             ? "rgba(255,255,255,0.4)"
//                             : "rgba(99,130,255,0.35)",
//                           overflow: "hidden",
//                         }}
//                       />

//                       {/* circle */}
//                       <div
//                         className="flex items-center justify-center rounded-full transition-all duration-700 flex-shrink-0"
//                         style={{
//                           width: isActive ? "52px" : "44px",
//                           height: isActive ? "52px" : "44px",
//                           background: isActive
//                             ? "rgba(255,255,255,0.95)"
//                             : "transparent",
//                           border: isActive
//                             ? "none"
//                             : "1px solid rgba(99, 130, 255, 0.5)",
//                           boxShadow: isActive
//                             ? "0 0 20px rgba(255,255,255,0.3)"
//                             : "none",
//                         }}>
//                         <span className="text-primary font-outfit font-bold text-lg md:text-[22px] transition-all duration-700">
//                           {step.number}
//                         </span>
//                       </div>

//                       {/* Connector line FROM this circle bottom TO next step's circle top
//                           Only render when next step is also revealed */}
//                       <div
//                         className="w-px transition-all duration-700"
//                         style={{
//                           height:
//                             index < steps.length - 1 &&
//                             revealedSteps.includes(index + 1)
//                               ? isActive
//                                 ? "14px"
//                                 : "10px"
//                               : "0px",
//                           opacity:
//                             index < steps.length - 1 &&
//                             revealedSteps.includes(index + 1)
//                               ? 1
//                               : 0,
//                           background: isActive
//                             ? "rgba(255,255,255,0.4)"
//                             : "rgba(99,130,255,0.35)",
//                           overflow: "hidden",
//                         }}
//                       />
//                     </div>

//                     {/* Right — Description */}
//                     <div className="">
//                       <p className="transition-all text-textColor font-outfit font-light duration-700 text-sm md:text-base leading-relaxed">
//                         {step.description}
//                       </p>
//                     </div>

//                     {/* Active overlay shimmer */}
//                     {isActive && (
//                       <div
//                         className="absolute inset-0 pointer-events-none"
//                         style={{
//                           background:
//                             "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.04) 50%, transparent 70%)",
//                           animation: "shimmer 3s ease-in-out infinite",
//                         }}
//                       />
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useRef, useState } from "react";

// const steps = [
//   {
//     number: "01",
//     title: "Discovery & Strategy",
//     description:
//       "Understand your business goals and target users to create a strategic design plan.",
//   },
//   {
//     number: "02",
//     title: "User Research & Insights",
//     description:
//       "Conduct detailed research to understand user behaviors, preferences, and pain points.",
//   },
//   {
//     number: "03",
//     title: "Wireframing & Prototyping",
//     description:
//       "Create initial wireframes and prototypes to visualize user flow and interactions.",
//   },
//   {
//     number: "04",
//     title: "Design & Iteration",
//     description:
//       "Finalize the UI/UX design while iterating based on usability testing and feedback.",
//   },
//   {
//     number: "05",
//     title: "Development & Implementation",
//     description:
//       "Collaborate with developers to bring the design to life, ensuring all UI/UX principles are implemented.",
//   },
//   {
//     number: "06",
//     title: "Post-Launch Optimization",
//     description:
//       "Continuously monitor user behavior and optimize the design to ensure ongoing satisfaction.",
//   },
// ];

// export default function UIUXProcess() {
//   const [activeStep, setActiveStep] = useState(0);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = sectionRef.current;
//       if (!section) return;
//       const sectionTop = section.getBoundingClientRect().top;
//       const sectionHeight = section.scrollHeight - window.innerHeight;
//       const scrolled = -sectionTop;
//       if (scrolled < 0) {
//         setActiveStep(0);
//         return;
//       }
//       const stepHeight = sectionHeight / (steps.length - 1);
//       const currentStep = Math.min(
//         Math.floor(scrolled / stepHeight),
//         steps.length - 1,
//       );
//       setActiveStep(currentStep);
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const stickyHeight = `${(steps.length + 1) * 100}vh`;

//   return (
//     <div className="w-full bg-[#0E1828]">
//       <div
//         ref={sectionRef}
//         style={{ height: stickyHeight }}
//         className="relative">
//         {/* ── Sticky full-screen frame ── */}
//         <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">
//           {/* ── Header ── */}
//           <div className="flex-shrink-0 pt-8 sm:pt-10 pb-3 sm:pb-5 px-4 sm:px-6 md:px-8">
//             <h1 className="text-textColor font-extralight font-outfit text-[clamp(20px,4vw,52px)] mb-1 sm:mb-2 leading-tight">
//               Our UI/UX Design Process
//             </h1>
//             <p className="text-textColor/70 font-outfit text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-md">
//               At Aireb Solutions, we follow a streamlined on-demand app
//               development cycle that ensures efficiency and innovation
//             </p>
//           </div>

//           {/* ── Steps area: flex rows as skeleton + absolute overlay cards ── */}
//           <div className="flex-1 min-h-0 relative px-4 sm:px-6 md:px-8">
//             {/*
//               SKELETON: invisible flex rows — purely to claim the layout height
//               so the container knows how tall each row slot is.
//             */}
//             {/* <div className="w-full h-full flex flex-col">
//               {steps.map((_, i) => (
//                 <div key={i} className="flex-1 min-h-0" />
//               ))}
//             </div> */}

//             {/*
//               OVERLAY CARDS: each step is absolute, positioned at its slot's top.
//               When a step becomes active it stretches from its slot all the way
//               to the bottom of the container — covering all rows below it.
//               Higher index = higher z-index, so newer steps always sit on top.
//             */}
//             {steps.map((step, index) => {
//               const isActive = index === activeStep;
//               const isRevealed = index <= activeStep;

//               // Each slot is 1/N of the container height
//               const slotTopPct = (index / steps.length) * 100;

//               return (
//                 <div
//                   key={index}
//                   aria-hidden={!isActive}
//                   className="absolute left-0 right-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
//                   style={{
//                     /*
//                       Not yet revealed → sit at its own slot position, invisible
//                       Revealed but not active → already overlaid, hidden behind active card
//                       Active → slides to top:0, covers everything below
//                     */
//                     top: isRevealed ? "0%" : `${slotTopPct}%`,
//                     bottom: 0,
//                     opacity: isRevealed ? 1 : 0,
//                     transform: isRevealed
//                       ? "translateY(0)"
//                       : "translateY(20px)",
//                     zIndex: index + 1,
//                     // Only the active card is interactive; others sit silently behind
//                     pointerEvents: isActive ? "auto" : "none",
//                   }}>
//                   {/* Card: only render content once revealed */}
//                   {isRevealed && (
//                     <div
//                       className={[
//                         "w-full relative overflow-hidden rounded-sm",
//                         "transition-colors duration-700",
//                         isActive ? "bg-primary" : "bg-[#0E1828]",
//                       ].join(" ")}
//                       style={{
//                         boxShadow: isActive
//                           ? "0 0 60px rgba(66,99,235,0.2), 0 8px 32px rgba(0,0,0,0.5)"
//                           : "none",
//                       }}>
//                       {/* ── Row content ── */}
//                       <div
//                         className="w-full px-3 sm:px-4 md:px-5 py-3 sm:py-4"
//                         style={{
//                           display: "grid",
//                           /* mobile: title | circle | desc all in one line but narrower
//                              md+: generous columns */
//                           gridTemplateColumns:
//                             "minmax(0,1.4fr) auto minmax(0,2fr)",
//                           alignItems: "center",
//                           gap: "0 6px",
//                         }}>
//                         {/* Left — Title */}
//                         <div className="min-w-0 pr-2 sm:pr-3 md:pr-4">
//                           <span
//                             className={[
//                               "block font-light font-stoke leading-snug transition-all duration-700",
//                               "text-[clamp(11px,2vw,22px)]",
//                               isActive ? "text-white" : "text-white/55",
//                             ].join(" ")}>
//                             {step.title}
//                           </span>
//                         </div>

//                         {/* Center — circle */}
//                         <div className="flex flex-col items-center justify-center flex-shrink-0 px-1 sm:px-2">
//                           {/* line above */}
//                           <div
//                             className={[
//                               "w-px",
//                               isActive ? "bg-white/40" : "bg-blue-400/30",
//                             ].join(" ")}
//                             style={{ height: "8px" }}
//                           />
//                           {/* circle */}
//                           <div
//                             className={[
//                               "flex items-center justify-center rounded-full flex-shrink-0 transition-all duration-700",
//                               isActive
//                                 ? "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/95 shadow-[0_0_16px_rgba(255,255,255,0.25)]"
//                                 : "w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-transparent border border-blue-400/50",
//                             ].join(" ")}>
//                             <span
//                               className={[
//                                 "font-outfit font-bold transition-all duration-700",
//                                 "text-[9px] sm:text-[11px] md:text-sm",
//                                 isActive ? "text-primary" : "text-blue-300/80",
//                               ].join(" ")}>
//                               {step.number}
//                             </span>
//                           </div>
//                           {/* line below */}
//                           <div
//                             className={[
//                               "w-px",
//                               isActive ? "bg-white/40" : "bg-blue-400/30",
//                             ].join(" ")}
//                             style={{ height: "8px" }}
//                           />
//                         </div>

//                         {/* Right — Description */}
//                         <div className="min-w-0 pl-2 sm:pl-3">
//                           <p
//                             className={[
//                               "font-outfit font-light leading-relaxed transition-all duration-700",
//                               "text-[10px] sm:text-xs md:text-sm lg:text-base",
//                               isActive ? "text-blue-50/90" : "text-white/40",
//                             ].join(" ")}>
//                             {step.description}
//                           </p>
//                         </div>
//                       </div>

//                       {/* Shimmer sweep */}
//                       {isActive && (
//                         <div
//                           className="absolute inset-0 pointer-events-none"
//                           style={{
//                             background:
//                               "linear-gradient(105deg,transparent 30%,rgba(255,255,255,0.05) 50%,transparent 70%)",
//                             animation: "shimmer 3s ease-in-out infinite",
//                           }}
//                         />
//                       )}
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "Understand your business goals and target users to create a strategic design plan.",
  },
  {
    number: "02",
    title: "User Research & Insights",
    description:
      "Conduct detailed research to understand user behaviors, preferences, and pain points.",
  },
  {
    number: "03",
    title: "Wireframing & Prototyping",
    description:
      "Create initial wireframes and prototypes to visualize user flow and interactions.",
  },
  {
    number: "04",
    title: "Design & Iteration",
    description:
      "Finalize the UI/UX design while iterating based on usability testing and feedback.",
  },
  {
    number: "05",
    title: "Development & Implementation",
    description:
      "Collaborate with developers to bring the design to life, ensuring all UI/UX principles are implemented.",
  },
  {
    number: "06",
    title: "Post-Launch Optimization",
    description:
      "Continuously monitor user behavior and optimize the design to ensure ongoing satisfaction.",
  },
];

export default function UiDesignProcess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          // When a card sticks to top (intersecting near top of viewport)
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        {
          // Trigger when card hits ~top-24 (96px) sticky position
          rootMargin: "-90px 0px -80% 0px",
          threshold: 0,
        },
      );

      observer.observe(card);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="w-full bg-[#0E1828] py-16 lg:py-24">
      <div className="px-6 md:px-8 max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div className="mb-16">
          <h1 className="text-textColor font-extralight font-outfit text-[clamp(20px,4vw,52px)] mb-4 leading-tight">
            Our UI/UX Design Process
          </h1>
          <p className="text-textColor/70 font-outfit font-light text-sm sm:text-base max-w-xl leading-relaxed">
            At Aireb Solutions, we follow a streamlined on-demand app
            development cycle that ensures efficiency and innovation
          </p>
        </div>

        {/* ── Steps ── */}
        <div className="space-y-8 sm:space-y-16">
          {steps.map((step, index) => {
            const isTop = index === activeIndex;

            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="sticky top-24"
                style={{ zIndex: index + 1 }}>
                <div
                  className={[
                    "rounded-md shadow-xl transition-all duration-500",
                    isTop
                      ? "bg-primary"
                      : "bg-[#0a1220] border border-blue-400/10",
                  ].join(" ")}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-center px-5 sm:px-7 md:px-8 py-5 sm:py-6 md:py-7">
                    {/* Left — Title */}
                    <h3
                      className={[
                        "font-stoke font-light text-[clamp(16px,2vw,24px)] leading-snug transition-colors duration-500",
                        isTop ? "text-white" : "text-white/50",
                      ].join(" ")}>
                      {step.title}
                    </h3>

                    {/* Center — Circle */}
                    <div className="flex justify-center">
                      <div
                        className={[
                          "w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-500",
                          isTop
                            ? "bg-white shadow-[0_0_20px_rgba(255,255,255,0.25)]"
                            : "bg-transparent border border-blue-400/40",
                        ].join(" ")}>
                        <span
                          className={[
                            "font-outfit font-bold text-sm sm:text-base transition-colors duration-500",
                            isTop ? "text-primary" : "text-blue-300/60",
                          ].join(" ")}>
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Right — Description */}
                    <p
                      className={[
                        "font-outfit font-light text-sm sm:text-base leading-relaxed transition-colors duration-500",
                        isTop ? "text-blue-50/90" : "text-white/40",
                      ].join(" ")}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* bottom spacer so last card can fully stick */}
        {/* <div className="h-20" /> */}
      </div>
    </section>
  );
}
