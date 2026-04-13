import { useEffect, useRef, useState } from "react";
import AssessmentIcon from "@/assets/icons/industries/health-care/development-cycle/assessment.svg?react";
import PrototypingIcon from "@/assets/icons/industries/health-care/development-cycle/prototyping.svg?react";
import DevelopmentIcon from "@/assets/icons/industries/health-care/development-cycle/development.svg?react";
import GoliveIcon from "@/assets/icons/industries/health-care/development-cycle/go-live.svg?react";

const squareBorder = {
  backgroundImage:
    "linear-gradient(#02070F,#02070F), linear-gradient(180deg,#111111 0%,#2563EB 56.73%,#0D0D0D 100%)",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
};

const rectBorder = {
  backgroundImage:
    "linear-gradient(#02070F,#02070F), linear-gradient(89.99deg,#4285F4 0.01%,#000000 44.71%,#4285F4 99.99%)",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
};

const steps = [
  {
    id: 1,
    number: "01",
    title: "Assessment &\nPlanning",
    description:
      "We analyze your current systems and understand needs and goals, then create a custom strategy following regulations and healthcare requirements.",
    icon: <AssessmentIcon />,
  },
  {
    id: 2,
    number: "02",
    title: "Design &\nPrototyping",
    description:
      "We design and create prototypes to visualize solutions, ensuring usability, functionality, and compliance with healthcare standards.",
    icon: <PrototypingIcon />,
  },
  {
    id: 3,
    number: "03",
    title: "Development &\nIntegration",
    description:
      "We develop the system with secure features, compliance, and AI tools, ensuring smooth integration with existing platforms.",
    icon: <DevelopmentIcon />,
  },
  {
    id: 4,
    number: "04",
    title: "Deployment &\nGo-Live",
    description:
      "After testing and optimization, we deploy the solution and make sure it works smoothly in a live environment.",
    icon: <GoliveIcon />,
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function StepRow({ step, index }) {
  const [ref, inView] = useInView(0.08);
  const sqDelay = index * 160;
  const recDelay = index * 160 + 200;

  return (
    <div ref={ref} className="flex flex-col mb-6 md:mb-10">
      {/* ─── MOBILE layout: stacked (square on top, rect below) ─────── */}
      <div className="flex flex-col gap-4 md:hidden">
        {/* Square card — full width on mobile */}
        <div
          className="w-full group p-3 border border-transparent  flex flex-col items-center justify-center gap-3 py-8 px-6 relative transition-all duration-700"
          style={{
            ...squareBorder,
            transitionDelay: `${sqDelay}ms`,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(-24px)",
          }}>
          <div className="group-hover:bg-primary py-2 bg-white w-full h-full flex flex-col items-center justify-center gap-3 z-10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)">
            <div className="flex items-center justify-center text-[#02070F] group-hover:text-white">
              {step.icon}
            </div>

            <h3 className="text-[#02070F] group-hover:text-textColor font-stoke font-normal text-center text-lg md:text-xl  leading-snug whitespace-pre-line px-3 m-0">
              {step.title}
            </h3>
          </div>
        </div>

        {/* Rectangle card — full width on mobile */}
        <div
          className="w-full border border-transparent  relative flex items-center px-6 py-7 transition-all duration-700"
          style={{
            ...rectBorder,
            transitionDelay: `${recDelay}ms`,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
          }}>
          <p className="text-textColor font-outfit font-normal text-sm md:text-base leading-[1.9]  m-0">
            {step.description}
          </p>
        </div>
      </div>

      {/* ─── DESKTOP layout: overlapping square on rect top-left ──────── */}
      <div className="hidden md:block relative pt-8">
        {/* Rectangle card */}
        <div
          className="relative healthCareRectangleCard_edge ml-36 lg:ml-44 min-h-[200px]  border border-transparent  flex items-center pl-28 lg:pl-32 pr-10 py-8 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            ...rectBorder,
            transitionDelay: `${recDelay}ms`,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(80px)",
          }}>
          <p className="text-textColor font-outfit font-normal text-sm md:text-base leading-[1.9]  m-0">
            {step.description}
          </p>
        </div>

        {/* Square card — absolutely overlapping top-left of rect */}
        <div
          className="group healthCareSevricesCard_edge p-3 absolute top-0 left-0 w-[200px] lg:w-[230px] h-[200px] border border-transparent flex flex-col items-center justify-center gap-3 z-10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            ...squareBorder,
            transitionDelay: `${sqDelay}ms`,
            opacity: inView ? 1 : 0,
            transform: inView ? "translate(0,0)" : "translate(-50px,-16px)",
          }}>
          <div className="group-hover:bg-primary bg-white w-full h-full flex flex-col items-center justify-center gap-3 z-10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
            <div className=" flex items-center justify-center text-[#02070F] group-hover:text-white">
              {step.icon}
            </div>

            <h3 className="text-[#02070F] group-hover:text-textColor font-stoke font-normal text-center text-lg md:text-xl  leading-snug whitespace-pre-line px-3 m-0">
              {step.title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HealthCareCycle() {
  const [headerRef, headerInView] = useInView(0.3);

  return (
    <>
      <section className="min-h-screen bg-[#02070F] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-[960px] mx-auto">
          {/* Header */}
          <div
            ref={headerRef}
            className="text-center mb-12 md:mb-16 transition-all duration-700 ease-out"
            style={{
              opacity: headerInView ? 1 : 0,
              transform: headerInView ? "translateY(0)" : "translateY(28px)",
            }}>
            <h1 className="text-textColor font-normal leading-tight mb-4 md:mb-5 text-[clamp(32px,4vw,42px)]">
              Our Healthcare & Pharmaceuticals
              <br className="hidden sm:block" /> Development Cycle
            </h1>
            <p className="text-textColor text-sm md:text-base font-outfit leading-[1.85] font-light">
              We follow a structured and comprehensive development cycle to
              ensure that every healthcare and{" "}
              <br className="hidden sm:block" /> pharmaceutical solution we
              deliver is secure, compliant, and optimized for performance.
            </p>
          </div>

          {/* Steps */}
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <StepRow key={step.id} step={step} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
