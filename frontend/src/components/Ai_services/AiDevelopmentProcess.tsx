import React, { useEffect, useRef, useState } from "react";

const AIDevelopmentProcess = () => {
  const [activeStep, setActiveStep] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  // Group steps into pairs for two per row
  const stepPairs = [];
  for (let i = 0; i < steps.length; i += 2) {
    stepPairs.push(steps.slice(i, i + 2));
  }

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black py-20 lg:py-32 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-blue-900/20" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 lg:mb-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <h2
            className="text-white mb-6 font-stoke font-normal"
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              lineHeight: "1.2",
            }}>
            Our AI Development Process
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-outfit font-normal text-base">
            At Aireb Solutions, we follow a proven, results-driven process that
            ensures the delivery of high-quality, scalable, and secure
            solutions:
          </p>
        </div>

        {/* Process Steps Grid - Two per row */}
        <div className="relative">
          {/* Vertical Connection Line for Desktop - Hidden on mobile */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-blue-500 to-blue-500 hidden lg:block -translate-x-1/2" />

          {/* Steps Container with consistent gaps */}
          <div className="space-y-8 lg:space-y-16">
            {stepPairs.map((pair, pairIndex) => {
              const delay = pairIndex * 200;

              return (
                <div
                  key={pairIndex}
                  className={`relative transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  }`}
                  style={{ transitionDelay: `${delay}ms` }}>
                  {/* Desktop Layout - Two cards in a row */}
                  <div className="hidden lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
                    {/* Row Number Indicator - Centered vertically on cards */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="relative">
                        {/* Pulsing Ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-blue-600 animate-ping-slow" />

                        {/* Center Circle */}
                        <div className="relative w-12 h-12 rounded-full bg-gray-900 border-2 border-blue-600 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-blue-500" />
                        </div>
                      </div>
                    </div>

                    {/* Left Card */}
                    {pair[0] && (
                      <div className="relative">
                        <StepCard
                          step={pair[0]}
                          activeStep={activeStep}
                          setActiveStep={setActiveStep}
                        />
                      </div>
                    )}

                    {/* Right Card */}
                    {pair[1] && (
                      <div className="relative">
                        <StepCard
                          step={pair[1]}
                          activeStep={activeStep}
                          setActiveStep={setActiveStep}
                        />
                      </div>
                    )}
                  </div>

                  {/* Mobile Layout - Stacked cards, no vertical lines */}
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ step, activeStep, setActiveStep }) => {
  const isActive = activeStep === step.id;

  return (
    <div
      className="group relative"
      onMouseEnter={() => setActiveStep(step.id)}
      onMouseLeave={() => setActiveStep(null)}>
      <div
        className={`relative p-6 sm:p-8 rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 border transition-all duration-500 flex flex-col min-h-[240px] ${
          isActive
            ? "border-blue-500 shadow-2xl shadow-blue-500/20 scale-105"
            : "border-gray-800 hover:border-gray-700"
        }`}>
        {/* Animated SVG Border - flows around entire card on hover */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none rounded-xl"
          style={{ overflow: "visible" }}>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="none"
            stroke="url(#blueGradient)"
            strokeWidth="2"
            strokeDasharray="10 10"
            strokeDashoffset="0"
            rx="12"
            className={`transition-opacity duration-500 ${
              isActive ? "opacity-100 animate-border-flow" : "opacity-0"
            }`}
          />
          <defs>
            <linearGradient
              id="blueGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Step Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-blue-600 rounded-full self-start">
          <span
            className="text-white font-semibold"
            style={{
              fontFamily: "Outfit, sans-serif",
              fontSize: "14px",
            }}>
            {step.number}
          </span>
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  animationDelay: `${i * 200}ms`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Title - with text clamping */}
        <h3
          className="text-white mb-3 line-clamp-2 flex-shrink-0 font-outfit font-bold"
          style={{
            fontSize: "clamp(14px, 2vw, 18px)",
            lineHeight: "1.4",
          }}>
          {step.title}
        </h3>

        {/* Description - with text clamping */}
        <p className="text-gray-400 line-clamp-4 flex-grow font-outfit font-normal text-base">
          {step.description}
        </p>
      </div>
    </div>
  );
};

export default AIDevelopmentProcess;
