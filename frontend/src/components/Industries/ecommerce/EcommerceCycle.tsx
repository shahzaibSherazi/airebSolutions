import { useEffect, useRef, useState } from "react";
import AnalysisIcon from "@/assets/icons/industries/education/development-cycle/assessment.svg?react";
import PrototypingIcon from "@/assets/icons/industries/education/development-cycle/prototyping.svg?react";
import DevelopmentIcon from "@/assets/icons/industries/education/development-cycle/development.svg?react";
import LaunchIcon from "@/assets/icons/industries/education/development-cycle/go-live.svg?react";
import TestingIcon from "@/assets/icons/industries/education/development-cycle/testing.svg?react";
import SupportIcon from "@/assets/icons/industries/education/development-cycle/support.svg?react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const steps = [
  {
    id: 1,
    title: "Phase",
    description: "Requirement Analysis",
    icon: <AnalysisIcon />,
  },
  {
    id: 2,
    title: "Process",
    description:
      "Understanding business goals, target audience, and ecommerce needs.",
    icon: <PrototypingIcon />,
  },
  {
    id: 3,
    title: "Collaboration",
    description: "A team works closely with the client.",
    icon: <DevelopmentIcon />,
  },
  {
    id: 4,
    title: "Outcome",
    description: "Gathering requirements and providing recommendations.",
    icon: <TestingIcon />,
  },
];

// ─── useInView ─────────────────────────────────────────────────────────────────
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

// ─── Card ──────────────────────────────────────────────────────────────────────
function StepCard({ step, index, sectionInView }) {
  const [hovered, setHovered] = useState(false);

  const descRef = useRef(null);
  const [descHeight, setDescHeight] = useState(0);

  useEffect(() => {
    if (descRef.current) {
      setDescHeight(descRef.current.scrollHeight);
    }
  }, []);

  return (
    <div
      // flex-1 so all cards share equal width in the row
      className="flex-1  w-full cursor-pointer"
      style={{
        opacity: sectionInView ? 1 : 0,
        transform: sectionInView ? "translateY(0)" : "translateY(48px)",
        transitionDelay: sectionInView ? `${index * 120}ms` : "0ms",
        transitionProperty: "opacity, transform",
        transitionDuration: "0.65s",
        transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
      }}>
      <div
        style={{
          border: "1px solid transparent",
          backgroundImage:
            "linear-gradient(#02070F, #02070F), linear-gradient(180deg, #111111 0%, #629DFF 56.73%, #0D0D0D 100%)",
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
        }}
        className="group h-[clamp(280px,30vh,308px)]  w-full  education-cycle p-1 md:p-2  transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
        <div className="flex flex-col items-center justify-center text-center px-3 group-hover:bg-primary bg-[#1B2941]  gap-4 h-full">
          <div className="flex items-center justify-center flex-shrink-0 transition-all duration-300 text-white group-hover:text-black">
            {step.icon}
          </div>

          <h3 className=" whitespace-pre-line flex items-center justify-center text-title font-stoke font-normal leading-snug transition-colors duration-300 w-full group-hover:text-black text-textColor">
            {step.title}
          </h3>

          <div>
            <p
              ref={descRef}
              className="font-outfit pb-1 font-light line-clamp-4 overflow-hidden group-hover:text-black text-textColor  leading-relaxed text-[clamp(14px,0.9vw,16px)]">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main ──────────────────────────────────────────────────────────────────────
export default function EcommerceCycle() {
  const [sectionRef, sectionInView] = useInView(0.1);
  const [headerRef, headerInView] = useInView(0.2);

  return (
    <section className="w-full bg-[#02070F]  overflow-hidden">
      <div className="container py-16  lg:py-24 px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-12 sm:mb-16 transition-all duration-700 ease-out"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(24px)",
          }}>
          <h2 className="font-stoke text-h2 font-normal text-white leading-tight mb-4">
            Our E-commerce <br className="hidden lg:block" /> Development Cycle
          </h2>
          <p className="font-outfit font-light text-p text-textColor mx-auto leading-relaxed">
            At Aireb Solutions, we follow a streamlined e-commerce development
            cycle to ensure <br className="hidden lg:block" /> that your project
            is completed on time, within budget, and to the highest quality
            standards.
          </p>
        </div>

        <div
          ref={sectionRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4 items-center">
          {steps.map((step, i) => (
            <StepCard
              key={step.id}
              step={step}
              index={i}
              sectionInView={sectionInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
