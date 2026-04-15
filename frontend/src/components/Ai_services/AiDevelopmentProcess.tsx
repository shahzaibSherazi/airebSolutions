import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const AIDevelopmentProcess = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const containerRef = useRef(null);
  const pairRefs = useRef([]);
  const [activeStep, setActiveStep] = useState(null);

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

  // Group steps into pairs
  const stepPairs = [];
  for (let i = 0; i < steps.length; i += 2) {
    stepPairs.push(steps.slice(i, i + 2));
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${stepPairs.length * 100}%`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Header animation
      tl.from(headerRef.current, { opacity: 0.1, y: 40, duration: 0.3 }, 0);

      stepPairs.forEach((_, index) => {
        if (index > 0) {
          const t = index * 1;

          // Exit animation - current pair fades out and moves up
          tl.to(
            pairRefs.current[index - 1],
            {
              opacity: 0,
              y: -70,
              scale: 0.75,
              duration: 0.3,
              ease: "power2.inOut",
            },
            t,
          );

          // Entry animation - next pair comes from bottom
          tl.fromTo(
            pairRefs.current[index],
            {
              opacity: 0,
              y: 100,
              scale: 0.75,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "power3.out",
            },
            t + 0.3,
          );
        }
      });

      // 🔑 CRITICAL
      ScrollTrigger.refresh(true);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black overflow-hidden">
      {/* Content */}
      <div className="container relative z-10 flex flex-col justify-center py-16 px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12 lg:mb-16">
          <h2 className="text-white text-h2 mb-6 font-stoke font-normal">
            Our AI Development Process
          </h2>
          <p className="text-white max-w-2xl mx-auto font-outfit font-normal text-p">
            At Aireb Solutions, we follow a proven, results-driven process that
            ensures the delivery of high-quality, scalable, and secure
            solutions:
          </p>
        </div>

        {/* Steps Container */}
        <div ref={containerRef} className="relative max-w-7xl mx-auto w-full">
          {/* Vertical Connection Line for Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary hidden lg:block -translate-x-1/2 z-0" />

          {/* All step pairs in same position */}
          <div className="relative min-h-[500px]">
            {stepPairs.map((pair, pairIndex) => (
              <div
                key={pairIndex}
                ref={(el) => (pairRefs.current[pairIndex] = el)}
                className={`absolute inset-0 w-full ${
                  pairIndex === 0 ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  transform:
                    pairIndex === 0 ? "translateY(0)" : "translateY(100px)",
                }}>
                {/* Desktop Layout */}
                <div className="hidden lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
                  {/* Center Circle Indicator */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="relative">
                      {/* Pulsing Ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping-slow opacity-75" />

                      {/* Center Circle */}
                      <div className="relative w-12 h-12 rounded-full bg-gray-900 border-2 border-primary flex items-center justify-center shadow-lg shadow-primary/50">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Left Card */}
                  {pair[0] && (
                    <div className="relative pr-8">
                      <StepCard
                        step={pair[0]}
                        align="right"
                        activeStep={activeStep}
                        setActiveStep={setActiveStep}
                      />
                    </div>
                  )}

                  {/* Right Card */}
                  {pair[1] && (
                    <div className="relative pl-8">
                      <StepCard
                        step={pair[1]}
                        align="left"
                        activeStep={activeStep}
                        setActiveStep={setActiveStep}
                      />
                    </div>
                  )}
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden space-y-6">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ step, align = "left", activeStep, setActiveStep }) => {
  const isActive = activeStep === step.id;

  return (
    <div
      className="group relative"
      onMouseEnter={() => setActiveStep(step.id)}
      onMouseLeave={() => setActiveStep(null)}>
      <div
        className={`relative p-6 sm:p-8 transition-all duration-500 flex flex-col min-h-[240px]
          ${align === "right" ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"}
        `}>
        {/* Step Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 mb-4 bg-primary badge-with-dot
            ${align === "right" ? "lg:self-end" : "lg:self-start"}`}>
          <span
            className="text-white font-semibold"
            style={{
              fontFamily: "Outfit, sans-serif",
              fontSize: "14px",
            }}>
            {step.number}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-white mb-3 line-clamp-2 flex-shrink-0 font-outfit font-bold"
          style={{
            fontSize: "clamp(14px, 2vw, 18px)",
            lineHeight: "1.4",
          }}>
          {step.title}
        </h3>

        {/* Description */}
        <p
          style={{
            background: "linear-gradient(180deg, #141414 0%, #141414 100%)",
          }}
          className="text-textColor line-clamp-4 flex-grow font-outfit font-normal text-base rounded-[5px] border border-[#4B4B4B] p-4">
          {step.description}
        </p>
      </div>
    </div>
  );
};

export default AIDevelopmentProcess;
