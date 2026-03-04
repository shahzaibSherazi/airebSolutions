// import React from "react";

// const values = [
//   {
//     title: "Integrity",
//     desc: "We believe in honesty, transparency, and maintaining the highest ethical standards in all of our dealings.",
//   },
//   {
//     title: "Excellence",
//     desc: "We are committed to delivering excellence in everything we do, ensuring our clients receive the best possible solutions.",
//   },
//   {
//     title: "Collaboration",
//     desc: "We believe in working closely with our clients and partners, fostering strong relationships that lead to long-term success.",
//   },
//   {
//     title: "Innovation",
//     desc: "We strive to push the boundaries of technology and creativity, providing our clients with the most innovative solutions in the market.",
//   },
// ];

// const OurValues = () => {
//   return (
//     <section
//       className="relative w-full text-white"
//       style={{
//         background:
//           "linear-gradient(359.99deg, #02070F 39.11%, #102545 57.01%)",
//       }}>
//       {/* ── Heading ── */}
//       <div className="flex flex-col items-center text-center px-6 pt-16 pb-0">
//         <div className="max-w-2xl">
//           <p className="font-outfit text-sm tracking-widest uppercase mb-4 opacity-80">
//             Our Values
//           </p>
//           <h2 className="font-stoke text-[clamp(32px,4vw,48px)] mb-6">
//             Redefining The Standard
//           </h2>
//           <p className="font-outfit text-base md:text-lg opacity-80">
//             At Aireb Solutions, we value honesty, innovation, and client success
//             delivering reliable, scalable solutions with real impact.
//           </p>
//         </div>
//       </div>

//       {/* ── CARDS ──
//           No background on cards at all.
//           backdrop-filter: blur(0.001px) forces browser to create a new
//           compositing layer — this blocks underlying card text from
//           bleeding through, while section bg shows naturally.
//       ── */}
//       {values.map((item, index) => (
//         <div
//           key={index}
//           className="sticky top-0 bg-[#102545] min-h-screen flex flex-col items-center justify-center text-center px-6"
//           style={{
//             zIndex: index + 10,
//           }}>
//           <h3 className="font-stoke text-2xl md:text-3xl mb-4">{item.title}</h3>
//           <p className="font-outfit text-base md:text-lg opacity-80 max-w-md">
//             {item.desc}
//           </p>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default OurValues;

import React, { useEffect, useRef, useState } from "react";
import img from "@/assets/about-us/value-img.png";
import UsaIcon from "@/assets/contact-us/usa-flag.svg?react";
import CanadaIcon from "@/assets/contact-us/canada-flag.svg?react";
import PakIcon from "@/assets/contact-us/pak-flag.svg?react";
const locations = {
  USA: {
    label: "USA",
    address: "1309 Coffeen Avenue STE 1200 Sheridan, Wyoming 82801",

    flag: <UsaIcon />,
  },
  Canada: {
    label: "Canada",
    address: "55 Village Centre Place, Suite 200, Mississauga, ON L4Z1V9",

    flag: <CanadaIcon />,
  },
  Pakistan: {
    label: "Pakistan",
    address:
      "Farooq Avenue Housing Society Block G Phase 1  Johar Town, Lahore, Pakistan",

    flag: <PakIcon />,
  },
};

const getMapUrl = (address) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

const MapPinIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);
const values = [
  {
    title: "Integrity",
    desc: "We believe in honesty, transparency, and maintaining the highest ethical standards in all of our dealings.",
  },
  {
    title: "Excellence",
    desc: "We are committed to delivering excellence in everything we do, ensuring our clients receive the best possible solutions.",
  },
  {
    title: "Collaboration",
    desc: "We believe in working closely with our clients and partners, fostering strong relationships that lead to long-term success.",
  },
  {
    title: "Innovation",
    desc: "We strive to push the boundaries of technology and creativity, providing our clients with the most innovative solutions in the market.",
  },
];

const OurValues = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("USA");
  const current = locations[activeTab];

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const { top, height } = section.getBoundingClientRect();
      const scrolled = -top;
      const scrollable = height - window.innerHeight;

      if (scrolled < 0 || scrolled > scrollable) return;

      const fraction = scrolled / scrollable;
      const index = Math.min(
        Math.floor(fraction * values.length),
        values.length - 1,
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        background:
          "linear-gradient(359.99deg, #02070F 39.11%, #102545 57.01%)",
      }}>
      <section
        ref={sectionRef}
        className="relative w-full text-white"
        style={{
          height: `${(values.length + 1) * 100}vh`,
        }}>
        {/* Single sticky container — no bg on it, section bg shows through */}
        <div className="sticky top-0  flex flex-col items-center justify-center text-center px-6 py-16 lg:py-24">
          {/* Circle image */}
          <img
            src={img}
            alt="circle background"
            className="absolute  pointer-events-none select-none"
          />

          <div className="relative z-10 max-w-2xl w-full">
            {/* Static heading */}
            <p className="font-outfit text-[clamp(14px,1.8vw,18px)] text-textColor underline-offset-[12px] underline font-medium tracking-widest uppercase mb-4 opacity-80">
              Our Values
            </p>
            <h2 className="font-stoke font-normal text-textColor text-[clamp(28px,4vw,42px)] mb-6">
              Redefining The Standard
            </h2>
            <p className="font-outfit font-normal text-[clamp(12px,1.8vw,18px)] text-textColor mb-36">
              At Aireb Solutions, we value honesty, innovation, and client
              success delivering reliable, scalable solutions with real impact.
            </p>

            {/* Only ONE card shown at a time — text swaps, no bg needed */}
            <div className="relative min-h-[120px] flex flex-col items-center justify-center">
              {values.map((item, index) => (
                <div
                  key={index}
                  className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-700"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform:
                      activeIndex === index
                        ? "translateY(0px)"
                        : activeIndex > index
                          ? "translateY(-30px)"
                          : "translateY(30px)",
                    pointerEvents: activeIndex === index ? "auto" : "none",
                  }}>
                  <h3 className="font-stoke font-normal text-[clamp(14px,1.8vw,18px)] mb-4 underline-offset-[12px] underline">
                    {item.title}
                  </h3>
                  <p className="font-outfit font-normal text-[clamp(14px,1.8vw,18px)] max-w-xl">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="flex lg:flex-row flex-col items-center justify-between gap-10 lg:px-8 px-6 lg:py-24 py-16">
        <div className="">
          <h2 className="text-[clamp(32px,4vw,42px)] font-stoke font-bold leading-tight mb-8 text-white">
            Our Prime Locations <br /> Across Worlwide
          </h2>
          <p className="text-[clamp(14px,1.5vw,18px)] leading-relaxed font-outfit font-light mb-12 w-full lg:max-w-2xl">
            Our hybrid model brings together the trust and close collaboration
            of a local partner with the agility, scalability, and
            cost-efficiency of top global talent giving you seamless
            communication, faster delivery, and exceptional results.
          </p>
          <button className="inline-flex items-center gap-2 font-outfit font-bold bg-primary hover:bg-white hover:text-black text-white text-sm px-5 py-3 rounded-sm transition-all duration-200 hover:translate-x-0.5 cursor-pointer border-0">
            About Us <ArrowIcon />
          </button>
        </div>

        {/* Right: tabs + card */}
        <div className="w-full lg:max-w-sm overflow-hidden">
          {/* Tab bar */}
          <div className="flex items-center justify-between mb-5 bg-[#4285F40D] border border-[#4285F41A] rounded-3xl p-[clamp(2px,0.5vw,6px)] ">
            {Object.keys(locations).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-[clamp(16px,2vw,24px)] py-2 rounded-full text-[clamp(12px,1.5vw,16px)] font-bold font-outfit  border-0 cursor-pointer transition-all duration-200
                  ${
                    activeTab === tab
                      ? "bg-primary text-white shadow-lg shadow-blue-600/40"
                      : "bg-transparent text-slate-500 hover:text-slate-300"
                  }`}>
                {tab}
              </button>
            ))}
          </div>

          {/* Location card */}
          <div
            key={activeTab}
            className="rounded-md p-7 border border-[#FFFFFF0D] shadow-2xl bg-[#4285F426] animate-company-location-fadeSlideIn">
            {/* Country header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-xl shadow-md">
                {current.flag}
              </div>
              <span className="text-base font-outfit font-bold text-white tracking-wide">
                {current.label}
              </span>
            </div>

            {/* Address */}
            <p className="text-base leading-relaxed font-outfit line-clamp-2 overflow-hidden text-textColor mb-5">
              {current.address}
            </p>

            {/* Open in Maps */}
            <a
              href={getMapUrl(current.address)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-outfit font-bold uppercase tracking-widest text-primary hover:text-blue-300 transition-colors duration-200 no-underline">
              <MapPinIcon />
              Open in Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
