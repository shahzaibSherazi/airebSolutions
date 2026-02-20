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
    title: "Requirement Analysis",
    description:
      "This initial step focuses on understanding specific educational goals and the needs of students and faculty to create tailored solutions.",
    icon: <AnalysisIcon />,
    defaultActive: true,
  },
  {
    id: 2,
    title: "Design & Prototyping",
    description:
      "Our design team crafts intuitive prototypes and wireframes that align with your educational vision and user experience goals.",
    icon: <PrototypingIcon />,
  },
  {
    id: 3,
    title: "Development & Integration",
    description:
      "We build scalable, secure platforms with seamless integration of third-party tools, LMS systems, and APIs.",
    icon: <DevelopmentIcon />,
  },
  {
    id: 4,
    title: "Testing & Quality Assurance",
    description:
      "Rigorous testing ensures your platform performs flawlessly across devices, browsers, and user scenarios.",
    icon: <TestingIcon />,
  },
  {
    id: 5,
    title: "Launch & Optimization",
    description:
      "We deploy your solution and continuously optimize performance, scalability, and user engagement post-launch.",
    icon: <LaunchIcon />,
  },
  {
    id: 6,
    title: "Ongoing \nSupport",
    description:
      "Our dedicated team provides continuous support, updates, and enhancements to keep your platform ahead of the curve.",
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
      // flex-1 so all cards share equal width in the row
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
      {/* 
        The card itself has NO fixed height.
        Collapsed state = icon + title only (natural height).
        Hover state = icon + title + description (natural height, grows downward).
        All cards have the same width because parent is flex-1.
        Collapsed height is kept identical via fixed padding + icon + title sizes.
      */}
      <div
        style={{
          border: "1px solid transparent",
          backgroundImage:
            "linear-gradient(#02070F, #02070F), linear-gradient(180deg, #111111 0%, #629DFF 56.73%, #0D0D0D 100%)",
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
        }}
        className="relative education-cycle w-full p-1 md:p-2  transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
        {/* Inner content — fixed padding so collapsed height is identical across all cards */}
        <div
          className={`flex flex-col items-center text-center px-3 pt-4  gap-4 
  ${showContent ? "bg-primary" : "bg-[#1B2941]"}`}
          style={{
            minHeight: "clamp(130px, 16vh, 180px)", // 👈 ensures equal collapsed height
          }}>
          {/* Icon — fixed size via clamp, never changes */}
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

          <h3
            className={` whitespace-pre-line flex items-center justify-center text-[clamp(10px,1.08vw,18px)] font-stoke font-normal leading-snug transition-colors duration-300 w-full ${showContent ? "text-black" : "text-textColor"}`}>
            {step.title}
          </h3>

          {/* Description — animates max-height 0 → real height, expands downward */}
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
              className="font-outfit pb-1 font-light line-clamp-4 overflow-hidden text-textColor leading-relaxed text-[clamp(12px,0.9vw,14px)]">
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
    <section className="w-full bg-[#02070F] py-16  lg:py-24 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-12 sm:mb-16 transition-all duration-700 ease-out"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(24px)",
          }}>
          <h2 className="font-stoke text-[clamp(22px,4vw,48px)] font-normal text-white leading-tight mb-4">
            Our Education Development Cycle
          </h2>
          <p className="font-outfit font-light text-[clamp(13px,1.1vw,16px)] text-textColor mx-auto leading-relaxed">
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
