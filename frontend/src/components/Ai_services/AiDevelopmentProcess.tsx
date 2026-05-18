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
        <div className="container relative z-10 flex flex-col justify-center py-16 w-full">
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
