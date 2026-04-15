import { useState } from "react";
import SoftwareDevIcon from "@/assets/icons/industries/education/services/custom.svg?react";
import MobileIcon from "@/assets/icons/industries/education/services/mobile.svg?react";
import LmsIcon from "@/assets/icons/industries/education/services/lms.svg?react";
import VirtualIcon from "@/assets/icons/industries/education/services/virtual.svg?react";
import WebIcon from "@/assets/icons/industries/education/services/web.svg?react";
import CrmIcon from "@/assets/icons/industries/education/services/crm.svg?react";
const services = [
  {
    id: 1,
    icon: <SoftwareDevIcon />,
    title: "Core Banking Systems",
    description:
      "We build secure and scalable core banking systems that streamline operations and support fast, real-time transactions.",
  },
  {
    id: 2,
    icon: <MobileIcon />,
    title: "Payment Processing Solutions",
    description:
      "We create secure payment systems supporting mobile wallets, cards, and transfers for fast and smooth transactions.",
  },
  {
    id: 3,
    icon: <LmsIcon />,
    title: "Blockchain & Cryptocurrency Solutions",
    description:
      "We develop blockchain solutions for secure, transparent systems, including cryptocurrencies, smart contracts, and DeFi platforms.",
  },
  {
    id: 4,
    icon: <VirtualIcon />,
    title: "Robo-Advisory Solutions",
    description:
      "We build AI-based robo-advisors that provide automated and personalized investment advice based on user goals.",
  },
  {
    id: 5,
    icon: <WebIcon />,
    title: "Digital Banking Solutions",
    description:
      "We help banks offer online banking, mobile apps, and digital wallets for easy access to financial services.",
  },
  {
    id: 6,
    icon: <CrmIcon />,
    title: "Regulatory Compliance Solutions",
    description:
      "We provide solutions to help businesses follow financial regulations, manage risks, and ensure secure and compliant operations.",
  },
  {
    id: 7,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5"
        stroke="#4285F4"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Lending Solutions",
    description:
      "We develop lending systems with credit scoring and loan management to simplify and improve the lending process.",
  },
  {
    id: 8,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5"
        stroke="#4285F4"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Insurtech Solutions",
    description:
      "We offer insurtech solutions to automate claims, improve underwriting, and provide personalized insurance services.",
  },
];

const INITIAL_COUNT = 6;

const cardStyle = {
  border: "1.5px solid transparent",
  backgroundImage:
    "linear-gradient(#02070F, #02070F), linear-gradient(180deg, #4285F4 0%, #000000 99.51%, #4285F4 99.52%)",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
  borderRadius: "9px",
  width: "100%",
  maxWidth: "450px",
  minHeight: "347px",
};

function ServiceCard({ service, animationDelay = 0 }) {
  return (
    <div
      className="border border-primary flex flex-col gap-8 p-8 transition-all duration-300 hover:-translate-y-1 group"
      style={{
        ...cardStyle,
        animation: `faddeUp 0.4s ease ${animationDelay}ms both`,
        boxShadow: "0 0 0 rgba(66,133,244,0)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 16px 40px rgba(66,133,244,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 0 0 rgba(66,133,244,0)";
      }}>
      {/* Icon */}
      <div
        className="w-11 h-11  flex items-center justify-center rounded-[2px] p-[1px] flex-shrink-0"
        style={{
          backgroundImage: "linear-gradient(180deg, #4285F4 0%, #000000 100%)",
        }}>
        <div className="bg-[#02070F] flex items-center justify-center w-full h-full">
          {service.icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-textColor font-stoke font-normal text-title leading-snug">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-p text-textColor font-outfit font-light line-clamp-4 overflow-hidden leading-relaxed ">
        {service.description}
      </p>
    </div>
  );
}

export default function BankingServices() {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, INITIAL_COUNT);
  const hiddenCount = services.length - INITIAL_COUNT;

  return (
    <>
      <section className="  bg-[#02070F]">
        <div className="container py-16 lg:py-24 px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="font-stoke text-h2 font-normal leading-[1.28] text-white mb-5">
              Our Banking and Fintech Services
            </h1>
            <p className="font-outfit font-normal max-w-4xl  mx-auto text-sm md:text-lg leading-relaxed">
              We provide complete banking and fintech solutions, from payment
              processing to compliance. Our expertise helps businesses improve
              efficiency, adopt digital transformation, and create new growth
              opportunities.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleServices.map((service, i) => (
              <div key={service.id} className="flex justify-center">
                <ServiceCard
                  service={service}
                  animationDelay={
                    showAll && i >= INITIAL_COUNT
                      ? (i - INITIAL_COUNT) * 100
                      : 0
                  }
                />
              </div>
            ))}
          </div>

          {/* View More / Less Button */}
          {services.length > INITIAL_COUNT && (
            <div className="flex justify-center mt-14">
              <button
                onClick={() => setShowAll((prev) => !prev)}
                className="relative overflow-hidden border border-primary text-textColor text-sm md:text-base lg:text-[22px] font-bold font-outfit px-12 py-3.5 rounded-md transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(90deg, #4285F4 0%, #02070F 100%)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 8px 28px rgba(66,133,244,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(66,133,244,0.3)";
                }}>
                <span className="relative z-10">
                  {showAll ? "View Less" : `View More`}
                </span>
                {/* Shine overlay */}
                <span
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.15), transparent)",
                  }}
                />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
