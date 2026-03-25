import { useState, useEffect } from "react";

import teckStackImg from "@/assets/Industies/ecommerce/teckStack_card.png";
import teckStackImg2 from "@/assets/Industies/ecommerce/teckStack_2.png";
import teckStackImg3 from "@/assets/Industies/ecommerce/techStack_3.png";

const techStack = [
  {
    name: "Node.Js",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        alt="Node.js"
        className="w-12 h-12 object-contain"
      />
    ),
  },
  {
    name: "Html",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        alt="HTML5"
        className="w-12 h-12 object-contain"
      />
    ),
  },
  {
    name: "Javascript",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        alt="JavaScript"
        className="w-12 h-12 object-contain"
      />
    ),
  },
  {
    name: "Firebase",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
        alt="Firebase"
        className="w-12 h-12 object-contain"
      />
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        alt="TypeScript"
        className="w-12 h-12 object-contain"
      />
    ),
  },
  {
    name: "Swift",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
        alt="Swift"
        className="w-12 h-12 object-contain"
      />
    ),
  },
  {
    name: "Angular",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
        alt="Angular"
        className="w-12 h-12 object-contain"
      />
    ),
  },
  {
    name: "Flutter",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
        alt="Flutter"
        className="w-12 h-12 object-contain"
      />
    ),
  },
  {
    name: "Php",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
        alt="PHP"
        className="w-12 h-12 object-contain"
      />
    ),
  },
  {
    name: "Python",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        className="w-12 h-12 object-contain"
      />
    ),
  },
];

// ── 3 left-side card definitions ──────────────────────────────────────────────
const leftCards = [
  {
    id: 0,
    label: "E-commerce Projects",

    gradient: "linear-gradient(160deg, #FFDB53 0%, #4285F4 100%)",
    image: teckStackImg,
  },
  {
    id: 1,
    label: "E-commerce Projects",

    gradient: "linear-gradient(180deg, #000000 0%, #64496C 100%)",
    image: teckStackImg2,
  },
  {
    id: 2,
    label: "E-commerce Projects",

    gradient: "linear-gradient(180deg, #000000 0%, #DB1A1A 100%)",
    image: teckStackImg3,
  },
];

const rectBorder = {
  backgroundImage:
    "linear-gradient(#0A1837,#0A1837),linear-gradient(102.7deg, #4285F4 18.78%, #000000 51.5%, #4285F4 80.92%)",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
};

export default function EcommerceTechStack() {
  const [activeCard, setActiveCard] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("in"); // "in" | "out"

  // Auto-rotate every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      triggerTransition((activeCard + 1) % leftCards.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [activeCard]);

  function triggerTransition(nextIndex) {
    setDirection("out");
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCard(nextIndex);
      setDirection("in");
      setTimeout(() => setIsAnimating(false), 350);
    }, 300);
  }

  const card = leftCards[activeCard];

  // CSS animation states
  const cardStyle = {
    opacity: isAnimating && direction === "out" ? 0 : 1,
    transform:
      isAnimating && direction === "out"
        ? "translateY(12px) scale(0.97)"
        : "translateY(0) scale(1)",
    transition: "opacity 0.3s ease, transform 0.3s ease",
  };

  return (
    <>
      <section className="bg-[#02070F] px-6 sm:px-8 py-16 md:py-24">
        <div className="">
          {/* ── Top Header Row ── */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10 md:mb-14">
            <div className="">
              <h1 className="text-white font-outfit font-extralight leading-tight mb-4 text-[clamp(42px,5vw,52px)]">
                Tech Stack & Compliance
                <br />
                Expertise
              </h1>
              <p className="text-white/70 font-outfit text-sm md:text-base max-w-2xl leading-[1.85] font-light">
                Our fintech application development services combine proven
                regulatory expertise with a robust, modern tech stack to deliver
                secure, scalable, and compliant fintech solutions.
              </p>
            </div>
            <div className="flex-shrink-0 sm:pt-2">
              <a
                href="#contact-form"
                className="group flex items-center gap-3 border border-blue-500 text-white text-sm lg:text-lg font-bold px-6 py-3 rounded-[9px] transition-all duration-200 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(90deg, #4285F4 0%, #02070F 100%)",
                }}>
                Contact Us
                <span className="text-lg font-bold group-hover:text-white text-blue-400">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* ── Main Content Row ── */}
          <div className="flex flex-col md:flex-row gap-5">
            {/* ── Left: Rotating Card ── */}
            <div className="flex flex-col gap-3">
              {/* Card */}
              <div
                className="rounded-[9px] overflow-hidden flex flex-col justify-between p-6 relative"
                style={{
                  background: card.gradient,
                  minHeight: "320px",
                  width: "clamp(260px,30vw,340px)",
                  ...cardStyle,
                }}>
                {/* Top label */}
                <p
                  className={`font-bold  text-base md:text-lg ${card.id === 0 ? "text-black" : "text-white"}`}>
                  {card.label}
                </p>

                {/* Center: image or placeholder */}
                <div className="flex items-center justify-center my-4">
                  {/* If you have a real image, replace the div below with: */}
                  <img
                    src={card.image}
                    className="w-full h-[clamp(120px,16vw,200px)] object-contain"
                  />
                </div>

                {/* Bottom button */}
                <button className="mt-4 flex items-center font-bold gap-2 bg-black hover:bg-white hover:text-black text-white text-sm px-4 py-2.5 rounded-full transition-all duration-200 border border-white/10 w-fit">
                  Start A Project <span>→</span>
                </button>
              </div>
            </div>

            {/* ── Right Card: Tech grid ── */}
            <div
              className="flex-1 rounded-[9px] p-6 sm:p-8 flex items-center justify-center border-2"
              style={rectBorder}>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 w-full place-items-center auto-rows-fr gap-4 sm:gap-6">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-3 group cursor-pointer">
                    <div className="w-[clamp(44px,6vw,64px)] h-[clamp(44px,6vw,64px)] flex items-center justify-center rounded-xl bg-[#ffffff08] group-hover:bg-[#ffffff12] transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-[0_8px_20px_rgba(66,133,244,0.15)]">
                      {tech.icon}
                    </div>
                    <span className="text-white font-outfit text-base font-bold text-center group-hover:text-white transition-colors duration-200">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
