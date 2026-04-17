// import { useState } from "react";

// const leftSteps = [
//   {
//     id: 1,
//     title: "Consultation & Requirement Analysis",
//     description:
//       "We start by understanding your business goals, target audience, and ecommerce needs. Our team works closely with you to gather requirements and provide recommendations.",
//     defaultOpen: true,
//   },
//   {
//     id: 3,
//     title: "Development & Integration",
//     description:
//       "Our engineers build robust, scalable banking and fintech solutions integrating APIs, payment gateways, and third-party financial tools.",
//     defaultOpen: false,
//   },
//   {
//     id: 5,
//     title: "Launch & Optimization",
//     description:
//       "We deploy your fintech product with a precise launch strategy, monitor performance metrics, and optimize for scale and user adoption.",
//     defaultOpen: false,
//   },
// ];

// const rightSteps = [
//   {
//     id: 2,
//     title: "Planning & Design",
//     description:
//       "We craft intuitive UI/UX designs tailored for fintech users, ensuring compliance, accessibility, and a seamless digital banking experience.",
//     defaultOpen: false,
//   },
//   {
//     id: 4,
//     title: "Robo-Advisory Solutions",
//     description:
//       "We build intelligent robo-advisory platforms that deliver automated, data-driven financial guidance to your customers at scale.",
//     defaultOpen: false,
//   },
//   {
//     id: 6,
//     title: "Testing & Quality Assurance",
//     description:
//       "Rigorous QA testing across all modules ensures your fintech platform is secure, bug-free, and fully compliant with industry standards.",
//     defaultOpen: false,
//   },
//   {
//     id: 7,
//     title: "Ongoing Maintenance & Support",
//     description:
//       "Post-launch, we provide continuous monitoring, updates, and dedicated support to keep your platform performing at its best.",
//     defaultOpen: false,
//   },
// ];

// // ── Step Icon ─────────────────────────────────────────────────────────────────
// function StepIcon() {
//   return (
//     <div
//       className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
//       style={{
//         background: "rgba(255,255,255,0.1)",
//         border: "1px solid rgba(255,255,255,0.15)",
//       }}>
//       <svg
//         viewBox="0 0 24 24"
//         className="w-4 h-4"
//         fill="none"
//         stroke="rgba(255,255,255,0.7)"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round">
//         <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
//         <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
//       </svg>
//     </div>
//   );
// }

// // ── Arrow icon — right or down ────────────────────────────────────────────────
// function ArrowIcon({ isOpen }) {
//   return (
//     <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300">
//       <svg
//         viewBox="0 0 24 24"
//         className="w-3.5 h-3.5 transition-transform duration-300"
//         fill="none"
//         stroke="rgba(255,255,255,0.8)"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}>
//         <line x1="5" y1="12" x2="19" y2="12" />
//         <polyline points="12 5 19 12 12 19" />
//       </svg>
//     </div>
//   );
// }

// // ── Single Step Card ──────────────────────────────────────────────────────────
// function StepCard({ step }) {
//   const [isOpen, setIsOpen] = useState(step.defaultOpen);

//   return (
//     <div
//       className="rounded-xl cursor-pointer transition-all duration-300 px-4 sm:px-7 py-9 border border-primary"
//       style={{
//         background: "linear-gradient(90deg, #4285F4 0%, #0E1828 100%)",
//       }}
//       onMouseEnter={() => setIsOpen(true)}
//       onMouseLeave={() => setIsOpen(step.defaultOpen ? true : false)}>
//       {/* Header row */}
//       <div className="flex items-center justify-between gap-4">
//         <div className="flex items-center gap-3 min-w-0">
//           <StepIcon />
//           <span className="text-white font-bold font-outfit text-title leading-snug">
//             {step.title}
//           </span>
//         </div>
//         <ArrowIcon isOpen={isOpen} />
//       </div>

//       {/* Description — expands on hover */}
//       <div
//         style={{
//           maxHeight: isOpen ? "200px" : "0px",
//           overflow: "hidden",
//           transition:
//             "max-height 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease",
//           opacity: isOpen ? 1 : 0,
//         }}>
//         <p className="text-white font-outfit text-p line-clamp-2 overflow-hidden font-light leading-relaxed mt-4">
//           {step.description}
//         </p>
//       </div>
//     </div>
//   );
// }

// // ── Main ──────────────────────────────────────────────────────────────────────
// export default function BankingCycle() {
//   return (
//     <section className="w-full bg-[#0E1828]">
//       <div className="container py-16 lg:py-24 px-2 lg:px-8">
//         {/* Header */}
//         <div className="mb-12">
//           <h1 className="text-white font-normal leading-tight mb-4 font-stoke text-h2">
//             Banking & Fintech Development <br /> Cycle
//           </h1>
//           <p className="text-textColor font-outfit text-p leading-relaxed">
//             Our development cycle is designed to ensure that every project in
//             the banking and fintech industry meets <br /> industry standards,
//             complies with regulations, and delivers a seamless user experience.
//           </p>
//         </div>

//         {/* Two column grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 items-start">
//           {/* Left column */}
//           <div className="flex flex-col gap-4">
//             {leftSteps.map((step) => (
//               <StepCard key={step.id} step={step} />
//             ))}
//           </div>

//           {/* Right column */}
//           <div className="flex flex-col gap-4">
//             {rightSteps.map((step) => (
//               <StepCard key={step.id} step={step} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";

const leftSteps = [
  {
    id: 1,
    title: "Consultation & Requirement Analysis",
    description:
      "We start by understanding your business goals, target audience, and ecommerce needs. Our team works closely with you to gather requirements and provide recommendations.",
    defaultOpen: true,
  },
  {
    id: 3,
    title: "Development & Integration",
    description:
      "Our engineers build robust, scalable banking and fintech solutions integrating APIs, payment gateways, and third-party financial tools.",
    defaultOpen: false,
  },
  {
    id: 5,
    title: "Launch & Optimization",
    description:
      "We deploy your fintech product with a precise launch strategy, monitor performance metrics, and optimize for scale and user adoption.",
    defaultOpen: false,
  },
];

const rightSteps = [
  {
    id: 2,
    title: "Planning & Design",
    description:
      "We craft intuitive UI/UX designs tailored for fintech users, ensuring compliance, accessibility, and a seamless digital banking experience.",
    defaultOpen: false,
  },
  {
    id: 4,
    title: "Robo-Advisory Solutions",
    description:
      "We build intelligent robo-advisory platforms that deliver automated, data-driven financial guidance to your customers at scale.",
    defaultOpen: false,
  },
  {
    id: 6,
    title: "Testing & Quality Assurance",
    description:
      "Rigorous QA testing across all modules ensures your fintech platform is secure, bug-free, and fully compliant with industry standards.",
    defaultOpen: false,
  },
  {
    id: 7,
    title: "Ongoing Maintenance & Support",
    description:
      "Post-launch, we provide continuous monitoring, updates, and dedicated support to keep your platform performing at its best.",
    defaultOpen: false,
  },
];

// ── Step Icon ─────────────────────────────────────────────────────────────────
function StepIcon() {
  return (
    <div
      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
      style={{
        background: "rgba(255,255,255,0.1)",
        border: "1px solid rgba(255,255,255,0.15)",
      }}>
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4"
        fill="none"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    </div>
  );
}

// ── Arrow Icon ────────────────────────────────────────────────────────────────
function ArrowIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center">
      <svg
        viewBox="0 0 24 24"
        className="w-3.5 h-3.5 transition-transform duration-300"
        fill="none"
        stroke="rgba(255,255,255,0.8)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}>
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </div>
  );
}

// ── Step Card ─────────────────────────────────────────────────────────────────
// KEY FIX: The card has a fixed collapsed height. On hover, the description
// expands using position:absolute so it overlays content below — zero
// layout shift, section height never changes.
function StepCard({
  step,
}: {
  step: (typeof leftSteps)[0] & { defaultOpen: boolean };
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-xl cursor-pointer border border-primary overflow-hidden"
      style={{
        background: "linear-gradient(90deg, #4285F4 0%, #0E1828 100%)",
        minHeight: "56px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className="px-4 sm:px-7 py-4 relative flex items-center justify-between gap-4 min-h-[80px]">
        {/* Title — fades out on hover */}
        <div
          className="flex items-center justify-between gap-3 min-w-0 absolute left-4 sm:left-7 right-12 transition-all duration-300"
          style={{
            opacity: isHovered ? 0 : 1,
            transform: isHovered ? "translateY(-8px)" : "translateY(0px)",
          }}>
          <StepIcon />
          <span className="text-white font-bold font-outfit text-title leading-snug truncate">
            {step.title}
          </span>
          <ArrowIcon isOpen={isHovered} />
        </div>

        {/* Description — fades in on hover */}
        <div
          className="absolute left-2  right-2 transition-all duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateY(0px)" : "translateY(8px)",
            pointerEvents: isHovered ? "auto" : "none",
          }}>
          <p className="text-white font-outfit text-p font-light line-clamp-3 overflow-hidden">
            {step.description}
          </p>
        </div>

        {/* Arrow */}
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function BankingCycle() {
  return (
    <section className="w-full bg-[#0E1828]">
      <div className="container py-16 lg:py-24 px-2 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-white font-normal leading-tight mb-4 font-stoke text-h2">
            Banking & Fintech Development <br /> Cycle
          </h1>
          <p className="text-textColor font-outfit text-p leading-relaxed">
            Our development cycle is designed to ensure that every project in
            the banking and fintech industry meets <br /> industry standards,
            complies with regulations, and delivers a seamless user experience.
          </p>
        </div>

        {/* Two-column grid — overflow:visible so absolute panels show over siblings */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 items-start"
          style={{ overflow: "visible" }}>
          {/* Left column */}
          <div className="flex flex-col gap-4" style={{ overflow: "visible" }}>
            {leftSteps.map((step, index) => (
              <div key={step.id}>
                <StepCard step={step} />
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4" style={{ overflow: "visible" }}>
            {rightSteps.map((step) => (
              <StepCard key={step.id} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
