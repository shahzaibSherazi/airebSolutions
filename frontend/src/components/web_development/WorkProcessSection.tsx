// import React, { useEffect, useState } from "react";
// import {
//   Lightbulb,
//   Palette,
//   Code,
//   TestTube,
//   Rocket,
//   BarChart,
// } from "lucide-react";

// /* ---------------- DATA ---------------- */
// const steps = [
//   {
//     id: 1,
//     title: "Planning & Strategy",
//     description: "Defining the project scope, timeline, and technology stack.",
//     icon: <Lightbulb className="w-8 h-8" />,
//   },
//   {
//     id: 2,
//     title: "UI/UX Design & Prototyping",
//     description:
//       "Crafting wireframes and interactive designs for an optimal user experience.",
//     icon: <Palette className="w-8 h-8" />,
//   },
//   {
//     id: 3,
//     title: "Development & Implementation",
//     description:
//       "Writing clean, maintainable code using industry-leading frameworks and tools.",
//     icon: <Code className="w-8 h-8" />,
//   },
//   {
//     id: 4,
//     title: "Testing & Quality Assurance",
//     description:
//       "Conducting rigorous testing to ensure security, performance, and usability.",
//     icon: <TestTube className="w-8 h-8" />,
//   },
//   {
//     id: 5,
//     title: "Deployment & Launch",
//     description:
//       "Launching your product with seamless deployment and monitoring.",
//     icon: <Rocket className="w-8 h-8" />,
//   },
//   {
//     id: 6,
//     title: "Maintenance & Support",
//     description:
//       "Providing ongoing support, updates, and optimization for long-term success.",
//     icon: <BarChart className="w-8 h-8" />,
//   },
// ];

// /* ---------------- CARD COMPONENT ---------------- */
// const StepCard = ({ step, isActive }) => {
//   // First 3 steps (1, 2, 3) are always blue
//   const isBlue = step.id <= 3;

//   return (
//     <div
//       className="relative transition-all duration-700 ease-out"
//       style={{
//         animation: "slide-in 0.6s ease-out forwards",
//       }}>
//       <div className="flex items-start gap-[clamp(24px,3.5vw,48px)]">
//         {/* Step Number Circle */}
//         <div className="relative flex-shrink-0 z-20">
//           <div
//             className={`w-[clamp(36px,4.5vw,44px)] h-[clamp(36px,4.5vw,44px)] rounded-full flex items-center justify-center font-outfit font-bold text-[clamp(15px,1.6vw,19px)] relative transition-all duration-500 ${
//               isBlue
//                 ? "bg-primary text-white shadow-lg shadow-primary/60"
//                 : "bg-white text-black"
//             }`}>
//             {step.id}
//           </div>
//           {/* Pulse for blue numbers */}
//           {isBlue && (
//             <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
//           )}
//         </div>

//         {/* Content Card */}
//         <div
//           className={`flex-1 border relative transition-all duration-500 group cursor-pointer ${
//             isBlue
//               ? "bg-primary border-primary shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/40 hover:translate-x-2"
//               : "bg-transparent border-gray-700 hover:border-primary/50 hover:bg-gray-900/50 hover:translate-x-1"
//           }`}
//           style={{
//             padding: "clamp(24px, 3.5vh, 40px)",
//           }}>
//           <div className="flex items-start justify-between gap-[clamp(16px,2vw,24px)]">
//             {/* Text Content */}
//             <div className="flex-1">
//               <h3
//                 className={`font-outfit font-semibold text-[clamp(18px,2vw,24px)] leading-[1.25] mb-[clamp(10px,1.2vh,14px)] transition-all duration-500 ${
//                   isBlue ? "text-white" : "text-gray-200 group-hover:text-white"
//                 }`}>
//                 {step.title}
//               </h3>
//               <p
//                 className={`font-outfit font-normal text-[clamp(13px,1.4vw,16px)] leading-[1.65] transition-all duration-500 ${
//                   isBlue
//                     ? "text-white/95"
//                     : "text-gray-400 group-hover:text-gray-300"
//                 }`}>
//                 {step.description}
//               </p>
//             </div>

//             {/* Icon */}
//             <div
//               className={`flex-shrink-0 flex items-center justify-center transition-all duration-500 ${
//                 isBlue
//                   ? "bg-white text-primary group-hover:scale-110 group-hover:rotate-12"
//                   : "bg-primary text-white group-hover:bg-white group-hover:text-primary group-hover:scale-105"
//               }`}
//               style={{
//                 width: "clamp(56px, 7vw, 72px)",
//                 height: "clamp(56px, 7vw, 72px)",
//               }}>
//               {step.icon}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ---------------- MAIN COMPONENT ---------------- */
// const WorkProcessTimeline = () => {
//   // Start with step 3 visible (index 2)
//   const [activeIndex, setActiveIndex] = useState(2);

//   useEffect(() => {
//     const triggers = document.querySelectorAll(".scroll-trigger");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const step = Number(entry.target.dataset.step);
//             setActiveIndex(step - 1);
//           }
//         });
//       },
//       {
//         threshold: 0.6,
//       },
//     );

//     triggers.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   // Fixed steps: always show steps 1 and 2
//   const fixedSteps = steps.slice(0, 2);

//   // Dynamic step: changes based on scroll (steps 3, 4, 5, 6)
//   const dynamicStep = steps[activeIndex];

//   return (
//     <section className="relative w-full bg-black py-[8vh] sm:py-[10vh] lg:py-[15vh] px-[2vw] sm:px-[4vw] lg:px-[6vw]">
//       <div className="max-w-[1400px] mx-auto">
//         {/* Header - Not Sticky */}
//         <div className="sticky top-[12vh] z-10 ">
//           {/* Header */}
//           <div className="text-center mb-[6vh]">
//             <div className="inline-block mb-[2vh]">
//               <span className="bg-primary text-white font-outfit font-medium text-[clamp(11px,1.1vw,14px)] px-[clamp(16px,2vw,24px)] py-[clamp(6px,0.8vh,10px)] uppercase">
//                 Our Work Process
//               </span>
//             </div>

//             <h2 className="font-stoke text-[clamp(32px,5vw,56px)] text-white mb-[2vh]">
//               How we get it done
//             </h2>

//             <p className="font-outfit text-gray-400 max-w-[650px] mx-auto">
//               Chanting, organizing, and optimizing the assets for accurate model
//               training.
//             </p>
//           </div>

//           {/* Timeline Cards */}
//           <div className="max-w-[900px] mx-auto space-y-[clamp(24px,4vh,48px)] relative translate-y-[-8vh]">
//             {/* Vertical Line */}
//             <div className="absolute left-[18px] sm:left-[22px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/60 to-primary/30 -z-10" />

//             {/* Fixed Cards: Step 1 & 2 */}
//             {fixedSteps.map((step) => (
//               <StepCard key={step.id} step={step} isActive={true} />
//             ))}

//             {/* Dynamic Card: Changes on scroll (Step 3, 4, 5, 6) */}
//             {dynamicStep && <StepCard step={dynamicStep} isActive={false} />}
//           </div>
//         </div>
//         {/* ---------------- SCROLL TRIGGERS ---------------- */}
//         <div className="mt-[40vh]">
//           {steps.slice(2).map((step) => (
//             <div
//               key={step.id}
//               className="scroll-trigger h-[50vh]"
//               data-step={step.id}
//             />
//           ))}
//         </div>

//         {/* Progress Indicator */}
//         <div className="fixed bottom-8 right-8 bg-black/80 backdrop-blur-sm border border-gray-800 rounded-lg p-4 hidden lg:block z-30">
//           <div className="flex items-center gap-3">
//             <div className="text-white font-outfit text-center">
//               <div className="text-xs text-gray-400 mb-1">Current Step</div>
//               <div className="text-2xl font-bold text-primary">
//                 {activeIndex + 1}
//               </div>
//               <div className="text-xs text-gray-400 mt-1">of 6</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WorkProcessTimeline;

import React, { useEffect, useState } from "react";
import type { ReactNode } from "react";
import {
  Lightbulb,
  Palette,
  Code,
  TestTube,
  Rocket,
  BarChart,
} from "lucide-react";

/* ---------------- TYPES ---------------- */
type Step = {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
};
const steps: Step[] = [
  {
    id: 1,
    title: "Planning & Strategy",
    description: "Defining the project scope, timeline, and technology stack.",
    icon: <Lightbulb className="w-8 h-8" />,
  },
  {
    id: 2,
    title: "UI/UX Design & Prototyping",
    description:
      "Crafting wireframes and interactive designs for an optimal user experience.",
    icon: <Palette className="w-8 h-8" />,
  },
  {
    id: 3,
    title: "Development & Implementation",
    description:
      "Writing clean, maintainable code using industry-leading frameworks and tools.",
    icon: <Code className="w-8 h-8" />,
  },
  {
    id: 4,
    title: "Testing & Quality Assurance",
    description:
      "Conducting rigorous testing to ensure security, performance, and usability.",
    icon: <TestTube className="w-8 h-8" />,
  },
  {
    id: 5,
    title: "Deployment & Launch",
    description:
      "Launching your product with seamless deployment and monitoring.",
    icon: <Rocket className="w-8 h-8" />,
  },
  {
    id: 6,
    title: "Maintenance & Support",
    description:
      "Providing ongoing support, updates, and optimization for long-term success.",
    icon: <BarChart className="w-8 h-8" />,
  },
];

type StepCardProps = {
  step: Step;
};

const StepCard: React.FC<StepCardProps> = ({ step }) => {
  const isBlue = step.id <= 3;

  return (
    <div
      className="
        relative
        animate-card-in
        transition-all
        duration-500
        ease-out
      ">
      <div className="flex items-start gap-[clamp(24px,3.5vw,48px)]">
        {/* Step number */}
        <div className="relative flex-shrink-0 z-20">
          <div
            className={`w-[44px] h-[44px] rounded-full flex items-center justify-center font-bold ${
              isBlue
                ? "bg-primary text-white shadow-lg shadow-primary/60"
                : "bg-white text-black"
            }`}>
            {step.id}
          </div>
          {isBlue && (
            <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
          )}
        </div>

        {/* Card */}
        <div
          className={`flex-1 border relative ${
            isBlue
              ? "bg-primary border-primary shadow-xl shadow-primary/20"
              : "bg-transparent border-gray-700"
          }`}
          style={{ padding: "clamp(24px, 3.5vh, 40px)" }}>
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-white text-xl font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-white/90">{step.description}</p>
            </div>

            <div className="w-[64px] h-[64px] flex items-center justify-center bg-white text-primary">
              {step.icon}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const WorkProcessTimeline: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(2);

  useEffect(() => {
    const triggers = document.querySelectorAll<HTMLElement>(".scroll-trigger");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const step = Number(entry.target.dataset.step);
            setActiveIndex(step - 1);
          }
        });
      },
      { threshold: 0.6 },
    );

    triggers.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const fixedSteps = steps.slice(0, 2);
  const dynamicStep = steps[activeIndex];

  return (
    <section className="relative w-full bg-black py-[15vh]">
      <div className="max-w-[1400px] mx-auto">
        {/* Sticky block */}
        <div className="sticky top-0 z-10 ">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="bg-primary text-white px-6 py-2 uppercase">
              Our Work Process
            </span>
            <h2 className="text-white text-5xl mt-4">How we get it done</h2>
          </div>

          {/* Cards */}
          <div className="max-w-[900px] mx-auto space-y-12 relative -translate-y-8">
            {fixedSteps.map((step) => (
              <StepCard key={step.id} step={step} />
            ))}

            {/* 🔥 Animated swap */}
            {dynamicStep && (
              <StepCard
                key={dynamicStep.id} // 👈 THIS triggers animation
                step={dynamicStep}
              />
            )}
          </div>
        </div>

        {/* Scroll triggers */}
        <div className="mt-[40vh]">
          {steps.slice(2).map((step) => (
            <div
              key={step.id}
              className="scroll-trigger h-[50vh]"
              data-step={step.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessTimeline;

// import React, { useEffect, useState } from "react";
// import StepCard from "./components/StepCard";
// import { steps } from "./data/data";

// const WorkProcessTimeline: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState<number>(2);

//   useEffect(() => {
//     const triggers = document.querySelectorAll<HTMLElement>(".scroll-trigger");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const step = Number(entry.target.dataset.step);
//             if (!isNaN(step)) setActiveIndex(step - 1);
//           }
//         });
//       },
//       { threshold: 0.6 },
//     );

//     triggers.forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   const fixedSteps = steps.slice(0, 2);
//   const dynamicStep = steps[activeIndex];

//   return (
//     <section className="relative bg-black py-[12vh]">
//       <div className="max-w-[900px] mx-auto space-y-10 sticky top-[12vh]">
//         {/* Fixed cards */}
//         {fixedSteps.map((step) => (
//           <StepCard
//             key={step.id}
//             step={step}
//             isBlue={step.id <= 3}
//             animateKey={step.id}
//           />
//         ))}

//         {/* Dynamic card */}
//         {dynamicStep && (
//           <StepCard
//             step={dynamicStep}
//             isBlue={dynamicStep.id <= 3}
//             animateKey={activeIndex}
//           />
//         )}
//       </div>

//       {/* Scroll triggers */}
//       <div className="mt-[40vh]">
//         {steps.slice(2).map((step) => (
//           <div
//             key={step.id}
//             className="scroll-trigger h-[50vh]"
//             data-step={step.id}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WorkProcessTimeline;
