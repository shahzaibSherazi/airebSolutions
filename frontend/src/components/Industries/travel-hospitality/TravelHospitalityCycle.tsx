import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: 1,
    title: "Consultation & Strategy",
    description:
      "We analyze your challenges, customer needs, and goals to craft a clear strategy, ensuring our solutions align with your objectives.",
  },
  {
    number: 2,
    title: "Design & Prototyping",
    description:
      "We design intuitive solutions to enhance guest experiences and optimize operations, refining prototypes through testing and feedback.",
  },
  {
    number: 3,
    title: "Development & Integration",
    description:
      "We develop secure, scalable solutions tailored to your needs, integrating systems for seamless functionality and enhanced guest experiences.",
  },
  {
    number: 4,
    title: "Testing",
    description:
      "We test everything carefully to ensure it is bug-free, easy to use, and works smoothly on all platforms.",
  },
  {
    number: 5,
    title: "Deployment & Launch",
    description:
      "After testing, we launch your solution smoothly with full integration and ensure everything runs properly.",
  },
  {
    number: 6,
    title: "Ongoing Support",
    description:
      "We provide continuous support to fix issues, monitor performance, and improve your solution as your business grows.",
  },
];

function Badge({ number }) {
  return (
    <div
      className="w-12 h-12 md:w-[52px] md:h-[52px] rounded-full flex items-center justify-center
                    bg-primary
                    text-white font-outfit font-bold text-lg shadow-lg
                    ring-4 ring-blue-500/20">
      {number}
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex items-center flex-1 ml-4 min-w-0">
      <div
        style={{
          backgroundImage: "linear-gradient(90deg, #0E1828 0%, #FFFFFF 100%)",
        }}
        className="h-[1px] flex-1"
      />
      <svg
        viewBox="0 0 10 16"
        className="w-3 h-4 text-white flex-shrink-0"
        fill="none">
        <polyline
          points="2,2 8,8 2,14"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function StepCard({ step }) {
  return (
    <div className="flex flex-col">
      {/* Badge + Arrow */}
      <div className="flex items-center mb-6">
        <Badge number={step.number} />
        <Arrow />
      </div>

      {/* Content */}
      <h3 className="text-textColor font-stoke font-normal text-base md:text-lg lg:text-xl mb-3 line-clamp-2 overflow-hidden">
        {step.title}
      </h3>

      <p className="text-textColor font-outfit text-sm md:text-base font-light line-clamp-5 overflow-hidden leading-relaxed">
        {step.description}
      </p>
    </div>
  );
}

export default function TravelHospitalityCycle() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Header: fade + slide up on scroll ──────────────────────────────
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // ── Cards: stagger one-by-one as section enters viewport ───────────
      const cards = cardsRef.current?.querySelectorAll(".step-card");
      if (!cards?.length) return;

      // Set initial hidden state immediately (no flash)
      gsap.set(cards, { opacity: 0, y: 50, scale: 0.96 });

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: {
          each: 0.18, // 0.18s between each card → smooth one-by-one
          from: "start", // left to right, top to bottom
        },
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%", // starts when grid top hits 80% viewport
          toggleActions: "play none none none",
        },
      });

      // ── Badge pulse: scale pop when each card animates in ──────────────
      const badges = cardsRef.current?.querySelectorAll(".badge-el");
      if (!badges?.length) return;

      gsap.set(badges, { scale: 0.5, opacity: 0 });

      gsap.to(badges, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.8)",
        stagger: { each: 0.18, from: "start" },
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // ── Arrow lines: draw left-to-right after badge pops ───────────────
      const arrows = cardsRef.current?.querySelectorAll(".arrow-line");
      if (!arrows?.length) return;

      gsap.set(arrows, {
        scaleX: 0,
        transformOrigin: "left center",
        opacity: 0,
      });

      gsap.to(arrows, {
        scaleX: 1,
        opacity: 1,
        duration: 0.55,
        ease: "power2.out",
        stagger: { each: 0.18, from: "start" },
        delay: 0.12, // slight delay so arrow draws after badge appears
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#0E1828] ">
      <div className="container py-16 md:py-24 px-2 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="mb-16 md:mb-20">
          <h1 className="font-stoke text-h2 leading-[1.28] text-white mb-6">
            Our Travel & Hospitality Development Cycle
          </h1>
          <p className="text-textColor text-sm leading-relaxed">
            At Aireb Solutions, we follow a structured development cycle to
            ensure that our travel and hospitality solutions are optimized for
            success, security, <br /> and performance.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-12">
          {steps.map((step) => (
            <div key={step.number} className="step-card flex flex-col">
              {/* Badge + Arrow */}
              <div className="flex items-center mb-6">
                {/* Badge wrapper — animated separately */}
                <div className="badge-el">
                  <Badge number={step.number} />
                </div>

                {/* Arrow — line draws left-to-right */}
                <div className="flex items-center flex-1 ml-4 min-w-0">
                  <div
                    className="arrow-line h-[1px] flex-1"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #0E1828 0%, #FFFFFF 100%)",
                    }}
                  />
                  <svg
                    viewBox="0 0 10 16"
                    className="w-3 h-4 text-white flex-shrink-0"
                    fill="none">
                    <polyline
                      points="2,2 8,8 2,14"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-textColor font-stoke font-normal line-clamp-2 overflow-hidden text-base md:text-lg lg:text-xl mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="text-textColor font-outfit text-sm md:text-base line-clamp-4 overflow-hidden font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
