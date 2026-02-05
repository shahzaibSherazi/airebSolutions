import React, { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import PlanningIcon from "@/assets/icons/web_development_icons/planning.svg?react";
import DesignIcon from "@/assets/icons/web_development_icons/design.svg?react";
import DevolopmentIcon from "@/assets/icons/web_development_icons/development.svg?react";
import TestingIcon from "@/assets/icons/web_development_icons/testing.svg?react";
import OptimizationIcon from "@/assets/icons/web_development_icons/optimization.svg?react";
import MaintienanceIcon from "@/assets/icons/web_development_icons/maintenance.svg?react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    icon: <PlanningIcon className="w-10 h-10 sm:w-16 sm:h-16" />,
  },
  {
    id: 2,
    title: "UI/UX Design & Prototyping",
    description:
      "Crafting wireframes and interactive designs for an optimal user experience.",
    icon: <DesignIcon className="w-10 h-10 sm:w-16 sm:h-16" />,
  },
  {
    id: 3,
    title: "Development & Implementation",
    description:
      "Writing clean, maintainable code using industry-leading frameworks and tools.",
    icon: <DevolopmentIcon className="w-10 h-10 sm:w-16 sm:h-16" />,
  },
  {
    id: 4,
    title: "Testing & Quality Assurance",
    description:
      "Conducting rigorous testing to ensure security, performance, and usability.",
    icon: <TestingIcon className="w-10 h-10 sm:w-16 sm:h-16" />,
  },
  {
    id: 5,
    title: "Deployment & Launch",
    description:
      "Launching your product with seamless deployment and monitoring.",
    icon: <OptimizationIcon className="w-10 h-10 sm:w-16 sm:h-16" />,
  },
  {
    id: 6,
    title: "Maintenance & Support",
    description:
      "Providing ongoing support, updates, and optimization for long-term success.",
    icon: <MaintienanceIcon className="w-10 h-10 sm:w-16 sm:h-16" />,
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
      <div className="flex items-center gap-3 sm:gap-6 md:gap-8 lg:gap-[clamp(24px,3.5vw,48px)]">
        {/* Step number */}
        <div
          className={`relative flex-shrink-0 z-20 timeline-dot  ${step.id === 6 ? "last" : ""} `}>
          <div
            className={`w-8 h-8 sm:w-10 sm:h-10 md:w-[44px] md:h-[44px] rounded-full flex items-center justify-center font-bold text-sm sm:text-base ${
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
          className={`flex-1 rounded-[5px] relative p-4 sm:p-6 md:p-7 lg:p-[clamp(24px,3.2vh,32px)] ${
            isBlue ? "bg-primary" : "bg-primary"
          }`}>
          <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4 md:gap-6">
            <div className="flex-1">
              <h3 className="text-white text-base sm:text-lg md:text-2xl font-outfit font-bold mb-1 sm:mb-2">
                {step.title}
              </h3>
              <p className="text-white font-outfit font-normal text-sm sm:text-base">
                {step.description}
              </p>
            </div>

            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-[64px] md:h-[64px] flex items-center justify-center  text-white flex-shrink-0">
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
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const triggers = gsap.utils.toArray<HTMLElement>(".scroll-trigger");

      triggers.forEach((el, index) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveIndex(index + 2),
          onEnterBack: () => setActiveIndex(index + 2),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const fixedSteps = steps.slice(0, 2);
  const dynamicStep = steps[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black py-10 sm:py-12 md:py-16 lg:py-[15vh]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Sticky block */}
        <div className="sticky top-0 z-10 ">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-[89px]">
            <span className="bg-primary font-outfit text-white px-4 py-1.5 sm:px-[29px] sm:py-[9px] uppercase text-xs sm:text-base font-medium">
              Our Work Process
            </span>
            <h2 className="text-white font-stoke font-normal text-2xl sm:text-3xl md:text-4xl lg:text-[42px] mt-3 sm:mt-[34px]">
              How we get it done
            </h2>
            <p className="font-outfit font-normal text-base mt-[27px]">
              Cleaning, organizing, and optimizing datasets for accurate model
              training.
            </p>
          </div>

          {/* Cards */}
          <div className="max-w-[900px] mx-auto space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 relative -translate-y-4 sm:-translate-y-6 md:-translate-y-8">
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
        <div className="mt-[30vh] sm:mt-[35vh] md:mt-[40vh]">
          {steps.slice(2).map((step) => (
            <div
              key={step.id}
              className="scroll-trigger h-[40vh] sm:h-[45vh] md:h-[50vh]"
              data-step={step.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessTimeline;
