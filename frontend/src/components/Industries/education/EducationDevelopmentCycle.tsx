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
    title: " Planning & Strategy",
    description:
      "We understand your goals, challenges, and requirements to create a clear and effective plan.",
    icon: <AnalysisIcon />,
    defaultActive: true,
  },
  {
    id: 2,
    title: "Design & Prototyping",
    description:
      "We design user-friendly layouts and create prototypes to visualize the platform before development.",
    icon: <PrototypingIcon />,
  },
  {
    id: 3,
    title: "Development & Integration",
    description:
      "We build the system and integrate all features to ensure smooth performance and functionality.",
    icon: <DevelopmentIcon />,
  },
  {
    id: 4,
    title: "Testing & Quality Assurance",
    description:
      "We test everything carefully to fix issues and ensure the platform works perfectly.",
    icon: <TestingIcon />,
  },
  {
    id: 5,
    title: "Launch & Deployment",
    description:
      "We launch your solution and make it ready for users with full support.",
    icon: <LaunchIcon />,
  },
  {
    id: 6,
    title: "Support & Improvement",
    description:
      "We provide ongoing support and updates to keep your system improved and up to date.",
    icon: <SupportIcon />,
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
  const showContent = step.defaultActive || hovered;
  const descRef = useRef(null);
  const [descHeight, setDescHeight] = useState(0);

  useEffect(() => {
    if (descRef.current) {
      setDescHeight(descRef.current.scrollHeight);
    }
  }, []);

  return (
    <div
      className="flex-1 min-w-0 cursor-pointer"
      style={{
        opacity: sectionInView ? 1 : 0,
        transform: sectionInView ? "translateY(0)" : "translateY(48px)",
        transitionDelay: sectionInView ? `${index * 120}ms` : "0ms",
        transitionProperty: "opacity, transform",
        transitionDuration: "0.65s",
        transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <div
        style={{
          border: "1px solid transparent",
          backgroundImage:
            "linear-gradient(#02070F, #02070F), linear-gradient(180deg, #111111 0%, #629DFF 56.73%, #0D0D0D 100%)",
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
        }}
        className="relative education-cycle w-full p-1 md:p-2">
        {/* ✅ Inner div grows in height when expanded */}
        <div
          className={`flex flex-col items-center text-center px-3 pt-4 pb-4 gap-4
            ${showContent ? "bg-primary" : "bg-[#1B2941]"}`}
          style={{
            // ✅ Smoothly transitions between collapsed and expanded height
            minHeight: showContent
              ? `clamp(260px, 30vh, 320px)`
              : "clamp(130px, 16vh, 200px)",
            transition:
              "min-height 0.5s cubic-bezier(0.22,1,0.36,1), background-color 0.3s ease",
          }}>
          {/* Icon */}
          <div
            className="flex items-center justify-center flex-shrink-0 transition-all duration-300"
            style={{
              width: "clamp(44px,3.5vw,56px)",
              height: "clamp(44px,3.5vw,56px)",
              minWidth: "clamp(44px,3.5vw,56px)",
              minHeight: "clamp(44px,3.5vw,56px)",
              color: showContent ? "#000000" : "#ffffff",
            }}>
            {step.icon}
          </div>

          {/* Title */}
          <h3
            className={`whitespace-pre-line flex items-center justify-center
              text-[clamp(10px,1.08vw,18px)] font-stoke font-normal leading-snug
              transition-colors duration-300 w-full
              ${showContent ? "text-black" : "text-textColor"}`}>
            {step.title}
          </h3>

          {/* Description — slides down */}
          <div
            style={{
              maxHeight: showContent ? `${descHeight + 8}px` : "0px",
              overflow: "hidden",
              transition:
                "max-height 0.5s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease",
              opacity: showContent ? 1 : 0,
            }}>
            <p
              ref={descRef}
              className="font-outfit pb-1 font-light  overflow-hidden
                text-textColor leading-relaxed text-[clamp(12px,0.9vw,14px)]">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main ──────────────────────────────────────────────────────────────────────
export default function EducationDevelopmentCycle() {
  const [sectionRef, sectionInView] = useInView(0.1);
  const [headerRef, headerInView] = useInView(0.2);

  return (
    <section className="w-full bg-[#02070F]  overflow-hidden">
      <div className="container py-16  lg:py-24 px-2 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-12 sm:mb-16 transition-all duration-700 ease-out"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(24px)",
          }}>
          <h2 className="font-stoke text-h2 font-normal text-white leading-tight mb-4">
            Our Education Development Cycle
          </h2>
          <p className="font-outfit font-light text-p text-textColor  leading-relaxed">
            At Aireb Solutions, we follow a structured development cycle to
            ensure that your educational <br className="hidden lg:block" />{" "}
            platform meets the highest standards of quality, security, and
            usability.
          </p>
        </div>

        {/* 
          Cards row:
          - items-start → all cards anchor to the TOP, expand DOWNWARD on hover
          - flex-col on mobile, flex-row on sm+
          - equal width via flex-1 on each card
        */}
        <div
          ref={sectionRef}
          className="flex flex-col sm:flex-row gap-3 lg:gap-4 items-start">
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
