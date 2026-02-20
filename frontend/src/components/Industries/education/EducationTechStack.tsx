import { useState } from "react";
import CapIcon from "@/assets/icons/industries/health-care/tech-stack_icons/cap.svg?react";

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

const rectBorder = {
  backgroundImage:
    "linear-gradient(#0A1837,#0A1837),linear-gradient(102.7deg, #4285F4 18.78%, #000000 51.5%, #4285F4 80.92%)",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
};

export default function EducationTechStack() {
  return (
    <>
      <section className=" bg-[#02070F] px-6 sm:px-8  py-16 md:py-24">
        <div className="">
          {/* ── Top Header Row ── */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10 md:mb-14">
            {/* Left: Title + Description */}
            <div className="">
              <h1 className="text-textColor font-outfit font-extralight leading-tight mb-4 text-[clamp(42px,5vw,52px)]">
                Tech Stack & Compliance
                <br className="" />
                Expertise
              </h1>
              <p className="text-textColor font-outfit text-sm md:text-base max-w-2xl leading-[1.85] font-light">
                Our fintech application development services combine proven
                regulatory expertise with a robust, modern tech stack to deliver
                secure, scalable, and compliant fintech solutions.
              </p>
            </div>

            {/* Right: Contact Us button */}
            <div className="flex-shrink-0 sm:pt-2">
              <button
                className="group flex items-center gap-3 border border-primary  hover:bg-[#1d4ed8] text-white text-sm lg:text-lg font-bold px-6 py-3 rounded-[9px] transition-all duration-200 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(90deg, #4285F4 0%, #02070F 100%)",
                }}>
                Contact Us
                <span className="text-lg font-bold group-hover:text-white text-primary">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* ── Main Content Row ── */}
          <div className="flex flex-col md:flex-row gap-5">
            {/* ── Left Card: Gradient yellow-blue education card ── */}
            <div
              className="relative flex-shrink-0 w-full md:w-[240px] lg:w-[260px] rounded-[9px] overflow-hidden flex flex-col justify-between p-6 min-h-[320px] md:min-h-0"
              style={{
                background: "linear-gradient(180deg, #FFDB53 0%, #4285F4 100%)",
              }}>
              {/* Graduation cap icon */}
              <div className="flex items-start">
                <div className="w-16 h-16 flex items-center justify-center">
                  <CapIcon />
                </div>
              </div>

              {/* Bottom text + button */}
              <div className="mt-8">
                <p className="text-black font-outfit font-light text-sm lg:text-base leading-[1.75] mb-5 ">
                  Build the future of education or elevate your current platform
                  with Aireb Solutions' advanced education technology services.
                </p>
                <button className="flex items-center font-outfit font-bold gap-2 bg-black hover:bg-white hover:text-black text-white text-sm  px-4 py-2.5 rounded-full transition-all duration-200 border border-white/10">
                  Start A Project
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* ── Right Card: Tech grid ── */}
            <div
              className="flex-1 rounded-[9px]  p-6 sm:p-8"
              style={rectBorder}>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-3 group cursor-pointer">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-xl bg-[#ffffff08] group-hover:bg-[#ffffff12] transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-[0_8px_20px_rgba(66,133,244,0.15)]">
                      {tech.icon}
                    </div>
                    <span className="text-textColor font-outfit  text-base font-bold text-center group-hover:text-white transition-colors duration-200">
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
