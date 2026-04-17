import { useEffect, useRef, useState } from "react";
import AssessmentIcon from "@/assets/icons/industries/gaming/assessment.svg?react";
import PrototypingIcon from "@/assets/icons/industries/gaming/prototyping.svg?react";
import DevelopmentIcon from "@/assets/icons/industries/gaming/development.svg?react";
import GoliveIcon from "@/assets/icons/industries/gaming/go-live.svg?react";
import DesignIcon from "@/assets/icons/industries/gaming/testing.svg?react";
import SupportIcon from "@/assets/icons/industries/gaming/support.svg?react";

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
    title: "Game Concept",
    description:
      "We collaborate to shape your game's vision, including story, mechanics, and player experience.",
    description2:
      "Our design team crafts wireframes, mockups, and prototypes to visualize the game and user experience pre-development.",
    icon: <AssessmentIcon />,
  },
  {
    id: 2,
    number: "02",
    title: "Game Development",
    description:
      "We use cutting-edge tools to develop your game, integrating features, graphics, and mechanics to bring your vision to life.",
    description2:
      "We rigorously test for bugs, intuitive Ut, and a seamless playor experience.",
    icon: <DevelopmentIcon />,
  },
  {
    id: 3,
    number: "03",
    title: "Launch & Marketing",
    description:
      "We support launch strategies, marketing, and promotions to maximize your game's reach and player engagement.",
    icon: <GoliveIcon />,
    description2:
      "We provide ongoing support with bug fixes, updates, and optimizations to keep your gamo engaging and up-to-date.",
  },
];

const rightSteps = [
  { id: 1, number: "01", title: "Game Design", icon: <DesignIcon /> },
  {
    id: 2,
    number: "02",
    title: "Quality Assurance",
    icon: <PrototypingIcon />,
  },
  {
    id: 3,
    number: "03",
    title: "Support & Updates",
    icon: <SupportIcon />,
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

// Square card size in px — single source of truth
const SQ = 230;
// How much of the square hangs outside the rect on each side
const OVERHANG = SQ / 2; // 115px

function StepRow({ step, index, rightStep }) {
  const [ref, inView] = useInView(0.08);
  const sqDelay = index * 160;
  const recDelay = index * 160 + 200;

  return (
    <div ref={ref} className="mb-6 md:mb-16">
      {/* ── MOBILE: vertical stack ─────────────────────────────────── */}
      <div className="flex flex-col gap-4 lg:hidden">
        {/* Left square */}
        <div
          className="w-full group p-3 border border-transparent transition-all duration-700"
          style={{
            ...squareBorder,
            transitionDelay: `${sqDelay}ms`,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(-24px)",
          }}>
          <div className="group-hover:bg-primary bg-[#0E1828] w-full flex flex-col items-center justify-center gap-3 py-8 px-6 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
            <div className="flex items-center justify-center text-[#02070F] group-hover:text-white">
              {step.icon}
            </div>
            <h3 className="text-[#02070F] group-hover:text-textColor font-stoke font-normal text-center text-lg leading-snug whitespace-pre-line px-3 m-0">
              {step.title}
            </h3>
          </div>
        </div>

        {/* Rect */}
        <div
          className="w-full border border-transparent px-6 py-7 transition-all duration-700"
          style={{
            ...rectBorder,
            transitionDelay: `${recDelay}ms`,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
          }}>
          <p className="text-textColor font-outfit font-normal text-sm leading-[1.9] m-0">
            {step.description}
          </p>
        </div>

        {/* Right square */}
        <div
          className="w-full group p-3 border border-transparent transition-all duration-700"
          style={{
            ...squareBorder,
            transitionDelay: `${recDelay + 120}ms`,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
          }}>
          <div className="group-hover:bg-primary bg-[#0E1828] w-full flex flex-col items-center justify-center gap-3 py-8 px-6 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
            <div className="flex items-center justify-center text-white group-hover:text-black">
              {rightStep.icon}
            </div>
            <h3 className="text-textColor group-hover:text-black font-stoke font-normal text-center text-lg leading-snug whitespace-pre-line px-3 m-0">
              {rightStep.title}
            </h3>
          </div>
        </div>
        <div
          className="w-full border border-transparent px-6 py-7 transition-all duration-700"
          style={{
            ...rectBorder,
            transitionDelay: `${recDelay}ms`,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
          }}>
          <p className="text-textColor font-outfit font-normal text-sm leading-[1.9] m-0">
            {step.description2}
          </p>
        </div>
      </div>

      {/* ── DESKTOP: absolute overlap ──────────────────────────────────
          Left square:  left = -OVERHANG  → half outside left edge of rect
          Right square: right = -OVERHANG → half outside right edge of rect
          Container padding = OVERHANG so neither square escapes the section.
          Rect paddingLeft/Right = OVERHANG + gap so text never slides under a square.
      ──────────────────────────────────────────────────────────────── */}
      <div className="hidden lg:block relative">
        {/* Rectangle */}
        <div
          className="relative healthCareRectangleCard_edge border border-transparent flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            ...rectBorder,
            minHeight: SQ * 1.4,
            paddingTop: 32,
            paddingBottom: 32,
            paddingLeft: 150,
            paddingRight: 150,
            transitionDelay: `${recDelay}ms`,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(80px)",
            zIndex: 1,
          }}>
          <p className="text-textColor font-outfit font-normal  text-sm md:text-base line-clamp-2 overflow-hidden leading-[1.9] m-0">
            {step.description}
          </p>
          <p className="text-textColor font-outfit font-normal text-sm md:text-base line-clamp-2 overflow-hidden leading-[1.9] m-0">
            {step.description2 || step.description}
          </p>
        </div>

        {/* TOP-LEFT square — fully ABOVE rect, half outside left edge */}
        <div
          className="group healthCareSevricesCard_edge p-3 absolute border border-transparent flex flex-col items-center justify-center gap-3 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            ...squareBorder,
            width: SQ,
            height: SQ,
            top: -50, // top of wrapper, rect starts at paddingTop=SQ, so square is fully above rect
            left: -OVERHANG, // half hangs outside left edge of rect
            transitionDelay: `${sqDelay}ms`,
            opacity: inView ? 1 : 0,
            transform: inView ? "translate(0,0)" : "translate(-50px,-16px)",
            zIndex: 10,
          }}>
          <div className="group-hover:bg-primary bg-[#0E1828] w-full h-full flex flex-col items-center justify-center gap-3 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
            <div className="flex items-center justify-center text-textColor group-hover:text-black">
              {step.icon}
            </div>
            <h3 className="text-textColor group-hover:text-black font-stoke font-normal text-center text-lg md:text-xl leading-snug whitespace-pre-line px-3 m-0">
              {step.title}
            </h3>
          </div>
        </div>

        {/* BOTTOM-RIGHT square — half outside right edge, bottom-aligned with rect bottom */}
        <div
          className="group gamingRectangleCard_edge p-3 absolute border border-transparent flex flex-col items-center justify-center gap-3 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            ...squareBorder,
            width: SQ,
            height: SQ,
            bottom: -50, // bottom of wrapper, rect ends at paddingBottom=SQ, so square is fully below rect
            right: -OVERHANG, // half hangs outside right edge of rect
            transitionDelay: `${sqDelay}ms`,
            opacity: inView ? 1 : 0,
            transform: inView ? "translate(0,0)" : "translate(50px,16px)",
            zIndex: 10,
          }}>
          <div className="group-hover:bg-primary bg-[#0E1828] w-full h-full flex flex-col items-center justify-center gap-3 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
            <div className="flex items-center justify-center text-white group-hover:text-black">
              {rightStep.icon}
            </div>
            <h3 className="text-textColor group-hover:text-black font-stoke font-normal text-center text-lg md:text-xl leading-snug whitespace-pre-line px-3 m-0">
              {rightStep.title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GamingDevelopmentCycle() {
  const [headerRef, headerInView] = useInView(0.3);

  return (
    <section className="min-h-screen bg-[#02070F] ">
      <div
        className="max-w-[767px] mx-auto py-16 lg:py-24 px-2"
        style={
          {
            /*
            paddingLeft/Right = OVERHANG (115px) so the square cards
            that use left:-OVERHANG / right:-OVERHANG always land
            inside the section — zero page overflow on any screen size.
          */
            // paddingLeft: OVERHANG,
            // paddingRight: OVERHANG,
          }
        }>
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-12 md:mb-16 transition-all duration-700 ease-out"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(28px)",
          }}>
          <h1 className="text-textColor font-normal leading-tight mb-4 md:mb-5 text-h2 font-stoke">
            Our Gaming Development Cycle
          </h1>
          <p className="text-textColor text-p font-outfit leading-[1.85] font-light">
            Our development cycle ensures that every game we help create or
            enhance is optimized for <br className="hidden lg:block" />
            quality, engagement, and performance.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-12">
          {steps.map((step, i) => (
            <StepRow
              key={step.id}
              step={step}
              rightStep={rightSteps[i]}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
