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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  useEffect(() => {
    if (isMobile) return; // 🚀 STOP on mobile

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
  }, [isMobile]);
  return (
    <div
      style={{
        background:
          "linear-gradient(359.99deg, #02070F 39.11%, #102545 57.01%)",
      }}>
      <div className="container px-2 lg:px-8 py-16 lg:py-24">
        <section
          ref={sectionRef}
          className="relative w-full text-white"
          style={{
            height: isMobile ? "auto" : `${(values.length + 1) * 100}vh`,
          }}>
          {/* Single sticky container — no bg on it, section bg shows through */}
          <div
            className={`${
              isMobile ? "relative" : "sticky top-0"
            } flex flex-col items-center justify-center text-center`}>
            {/* Circle image */}
            <img
              src={img}
              alt="circle background"
              className="absolute  pointer-events-none select-none"
            />

            <div className="relative z-10 max-w-2xl w-full">
              {/* Static heading */}
              <p className="font-stoke text-[clamp(14px,1.8vw,18px)] text-textColor underline-offset-[12px] underline font-medium tracking-widest uppercase mb-4">
                Our Values
              </p>
              <h2 className="font-stoke font-normal text-textColor text-h2 mb-6">
                Redefining The Standard
              </h2>
              <p className="font-outfit font-normal text-[clamp(12px,1.8vw,18px)] text-textColor mb-36">
                At Aireb Solutions, we value honesty, innovation, and client
                success delivering reliable, scalable solutions with real
                impact.
              </p>

              {/* Only ONE card shown at a time — text swaps, no bg needed */}
              <div className="relative min-h-[120px] flex flex-col items-center justify-center">
                {isMobile ? (
                  <div className="flex flex-col gap-8">
                    {values.map((item, index) => (
                      <div key={index} className="text-center">
                        <h3 className="font-stoke font-normal text-[clamp(14px,1.8vw,18px)] mb-4 underline-offset-[12px] underline">
                          {item.title}
                        </h3>
                        <p className="font-outfit font-normal text-[clamp(14px,1.8vw,18px)] max-w-xl mx-auto">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  values.map((item, index) => (
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
                  ))
                )}
              </div>
            </div>
          </div>
        </section>
        <div className="flex lg:flex-row flex-col items-center justify-between gap-10 mt-20">
          <div className="">
            <h2 className="text-h2 font-stoke font-normal leading-tight mb-8 text-white">
              Our Prime Locations <br /> Across Worlwide
            </h2>
            <p className="text-p leading-relaxed font-outfit font-light mb-12 w-full lg:max-w-2xl">
              Our hybrid model brings together the trust and close collaboration
              of a local partner with the agility, scalability, and
              cost-efficiency of top global talent giving you seamless
              communication, faster delivery, and exceptional results.
            </p>
            <a href="#contact-form" className="inline-flex items-center gap-2 font-outfit font-bold bg-primary hover:bg-white hover:text-black text-white text-sm px-5 py-3 rounded-sm transition-all duration-200 hover:translate-x-0.5 cursor-pointer border-0">
              About Us <ArrowIcon />
            </a>
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
    </div>
  );
};

export default OurValues;
