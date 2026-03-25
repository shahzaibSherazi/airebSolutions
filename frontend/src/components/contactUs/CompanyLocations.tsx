import { useState } from "react";
import togetherImg from "@/assets/contact-us/together.png";
import UsaIcon from "@/assets/contact-us/usa-flag.svg?react";
import CanadaIcon from "@/assets/contact-us/canada-flag.svg?react";
import PakIcon from "@/assets/contact-us/pak-flag.svg?react";
import { Link } from "react-router-dom";
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

export default function CompanyLocations() {
  const [activeTab, setActiveTab] = useState("USA");
  const current = locations[activeTab];

  return (
    <div
      style={{
        background: "linear-gradient(270deg, #102545 39.88%, #02070F 73.8%)",
      }}
      className="min-h-screen text-white ">
      {/* ── HERO SECTION ── */}
      <section className="px-6 lg:px-8 py-16 flex lg:flex-row flex-col items-center justify-between gap-10">
        {/* Left */}
        <div className="">
          <h1 className="text-[clamp(32px,4vw,42px)] font-stoke font-normal mb-8 text-white">
            Together, We Write What's Next
          </h1>
          <p className="text-[clamp(14px,1.5vw,18px)] leading-relaxed font-outfit font-light mb-12 w-full lg:max-w-3xl">
            Here, you're more than your role. Your story, dreams, and voice
            inspire the future we create together. We nurture your passions,
            support your growth, and help you become the best version of
            yourself professionally and personally.
          </p>
          <button className="inline-flex items-center font-outfit font-bold gap-2 bg-primary hover:bg-white hover:text-black text-white text-sm  px-5 py-3 rounded-sm transition-all duration-200 hover:translate-x-0.5 cursor-pointer border-0">
            See Opportunity <ArrowIcon />
          </button>
        </div>

        {/* Right illustration */}
        <div className="  flex justify-center items-center">
          <img src={togetherImg} className="w-full h-full object-contain" />
        </div>
      </section>

      {/* ── LOCATIONS SECTION ── */}
      <section className="px-6 lg:px-8 py-24 flex lg:flex-row flex-col items-center lg:items-start justify-between gap-16">
        {/* Left */}
        <div className="">
          <h2 className="text-[clamp(32px,4vw,42px)] font-stoke font-normal leading-tight mb-8 text-white">
            Company Locations
          </h2>
          <p className="text-[clamp(14px,1.5vw,18px)] leading-relaxed font-outfit font-light mb-12 w-full lg:max-w-2xl">
            Our hybrid model brings together the trust and close collaboration
            of a local partner with the agility, scalability, and
            cost-efficiency of top global talent giving you seamless
            communication, faster delivery, and exceptional results.
          </p>
          <Link
            to="/about-us"
            className="inline-flex items-center gap-2 font-outfit font-bold bg-primary hover:bg-white hover:text-black text-white text-sm px-5 py-3 rounded-sm transition-all duration-200 hover:translate-x-0.5 cursor-pointer border-0">
            About Us <ArrowIcon />
          </Link>
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
      </section>
    </div>
  );
}
