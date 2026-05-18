import React, { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import PlanningIcon from "@/assets/icons/web_development_icons/planning.svg?react";
import DesignIcon from "@/assets/icons/web_development_icons/design.svg?react";
import DevolopmentIcon from "@/assets/icons/web_development_icons/development.svg?react";
import TestingIcon from "@/assets/icons/web_development_icons/testing.svg?react";
import OptimizationIcon from "@/assets/icons/web_development_icons/optimization.svg?react";
import MaintienanceIcon from "@/assets/icons/web_development_icons/maintenance.svg?react";
import { motion, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";

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

/* ---------------- STEP CARD ---------------- */
type StepCardProps = { step: Step };

const StepCard: React.FC<StepCardProps> = ({ step }) => {
  const isBlue = step.id <= 3;

  return (
    <div className="relative animate-card-in transition-all duration-500 ease-out">
      <div className="flex items-center gap-3 sm:gap-6 md:gap-8 lg:gap-[clamp(24px,3.5vw,48px)]">
        {/* Step number */}
        <div
          className={`sm:block relative hidden flex-shrink-0 z-20 timeline-dot ${
            step.id === 6 ? "last" : ""
          }`}>
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
        <div className="flex-1 rounded-[5px] relative p-4 sm:p-6 md:p-7 lg:p-[clamp(24px,3.2vh,32px)] bg-primary">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4 md:gap-6">
            <div className="flex-1">
              <h3 className="text-white text-base sm:text-lg md:text-2xl font-outfit font-bold mb-1 sm:mb-2">
                {step.title}
              </h3>
              <p className="text-white font-outfit font-normal text-sm sm:text-base">
                {step.description}
              </p>
            </div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-[64px] md:h-[64px] flex items-center justify-center text-white flex-shrink-0">
              {step.icon}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- SCROLL TRIGGER (desktop only) ---------------- */
// Each dynamic step (steps[2..5]) gets an invisible sentinel div.
// When it enters/leaves the viewport center, we update activeIndex.
type SentinelProps = {
  onEnter: () => void;
};

const Sentinel: React.FC<SentinelProps> = ({ onEnter }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onEnter();
      },
      {
        // Fire when sentinel crosses the vertical center of the viewport
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [onEnter]);

  return <div ref={ref} className="h-[40vh] sm:h-[45vh] md:h-[50vh]" />;
};

/* ---------------- MAIN COMPONENT ---------------- */
const WorkProcessTimeline: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(2);
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black pb-12 md:pb-16 pt-16 lg:pt-24">
      <div className="container">
        {/* ── Sticky block ── */}
        <div className="sticky -top-12 z-10">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 ">
            <span className="bg-primary font-outfit text-white px-4 py-1.5 sm:px-[29px] sm:py-[9px] uppercase text-xs sm:text-base font-medium">
              Our Work Process
            </span>
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}>
              <h2 className="text-white font-stoke font-normal text-h2 mt-6 sm:mt-[34px]">
                How we get it done
              </h2>
              <p className="font-outfit font-normal text-p mt-2">
                Cleaning, organizing, and optimizing datasets for accurate model
                training.
              </p>
            </motion.div>
          </div>

          {/* Cards */}
          <div className="max-w-[900px] mx-auto space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 relative -translate-y-4 sm:-translate-y-6 md:-translate-y-8">
            {/* ── MOBILE: all cards — hidden on lg+ ── */}
            <div className="block lg:hidden space-y-6 sm:space-y-8">
              {steps.map((step) => (
                <StepCard key={step.id} step={step} />
              ))}
            </div>

            {/* ── DESKTOP: first 2 fixed + 1 dynamic — hidden below lg ── */}
            <div className="hidden lg:block space-y-6 sm:space-y-8 ">
              {steps.slice(0, 2).map((step) => (
                <StepCard key={step.id} step={step} />
              ))}

              {steps[activeIndex] && (
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}>
                  <StepCard step={steps[activeIndex]} />
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* ── Scroll sentinels (desktop only, CSS-hidden on mobile) ── */}
        <div className="hidden lg:block mt-[40vh]">
          {steps.slice(2).map((step, i) => (
            <Sentinel key={step.id} onEnter={() => setActiveIndex(i + 2)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessTimeline;
