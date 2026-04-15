import { useState } from "react";
import teckStackImg from "@/assets/Industies/gaming/techStack-img.png";
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

export default function GamingTechStack() {
  return (
    <>
      <section className=" bg-[#02070F] ">
        <div className="container px-6 sm:px-8  py-16 md:py-24">
          {/* ── Top Header Row ── */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10 md:mb-14">
            {/* Left: Title + Description */}
            <div className="">
              <h1 className="text-textColor font-stoke font-extralight leading-tight mb-4 text-h2">
                Tech Stack & Compliance
                <br className="" />
                Expertise
              </h1>
              <p className="text-textColor font-outfit text-sm md:text-base max-w-2xl leading-[1.85] font-light">
                Our gaming application development services combine proven
                regulatory expertise with a robust, modern tech stack to deliver
                secure, scalable, and compliant fintech solutions.
              </p>
            </div>

            {/* Right: Contact Us button */}
            <div className="flex-shrink-0 sm:pt-2">
              <a
                href="#contact-form"
                className="group flex items-center gap-3 border border-primary  hover:bg-[#1d4ed8] text-white text-sm lg:text-lg font-bold px-6 py-3 rounded-[9px] transition-all duration-200 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(90deg, #4285F4 0%, #02070F 100%)",
                }}>
                Contact Us
                <span className="text-lg font-bold group-hover:text-white text-primary">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* ── Main Content Row ── */}
          <div className="flex flex-col md:flex-row gap-5  ">
            {/* ── Left Card: Gradient yellow-blue education card ── */}
            <div
              className="relative rounded-[9px] 
             w-full max-w-[333px] 
             
             flex flex-col justify-end 
             pt-24 pb-6 px-6"
              style={{
                background: "linear-gradient(180deg, #E23237 0%, #629DFF 100%)",
              }}>
              {/* Floating Image */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-[70%] max-w-[220px]">
                <img
                  src={teckStackImg}
                  alt="Tech Stack"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Button */}
              <button
                style={{
                  background:
                    "linear-gradient(90deg, #4285F4 0%, #000000 100%)",
                }}
                className="absolute group bottom-6 flex items-center font-outfit font-bold gap-2  hover:text-black text-white text-sm px-2 py-2 rounded-full transition-all duration-200 border border-primary">
                Start A Project
                <span className="group-hover:text-primary text-white">→</span>
              </button>
            </div>

            {/* ── Right Card: Tech grid ── */}
            <div
              className="flex-1 rounded-[9px]  p-6 sm:p-8 flex items-center justify-center"
              style={rectBorder}>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 w-full place-items-center auto-rows-fr  gap-4 sm:gap-6">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-3 group cursor-pointer">
                    <div className=" w-[clamp(44px,6vw,64px)] h-[clamp(clamp(44px,6vw,64px))] flex items-center justify-center rounded-xl bg-[#ffffff08] group-hover:bg-[#ffffff12] transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-[0_8px_20px_rgba(66,133,244,0.15)]">
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
