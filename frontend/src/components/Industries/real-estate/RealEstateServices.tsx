import { useState } from "react";
import SoftwareDevIcon from "@/assets/icons/industries/health-care/services-icons/software_dev.svg?react";
import MhealthIcon from "@/assets/icons/industries/health-care/services-icons/mHealth.svg?react";
import LabIcon from "@/assets/icons/industries/health-care/services-icons/lab.svg?react";
import MachinLearningIcon from "@/assets/icons/industries/health-care/services-icons/machin-learning.svg?react";
import CloudIcon from "@/assets/icons/industries/health-care/services-icons/cloud.svg?react";
import DigitalIcon from "@/assets/icons/industries/health-care/services-icons/digital.svg?react";
const services = [
  {
    id: 1,
    icon: <SoftwareDevIcon />,
    title: "Real Estate Website Development",
    description:
      "We create professional and easy-to-use real estate websites to showcase properties, attract clients, and provide helpful information to potential buyers.",
  },
  {
    id: 2,
    icon: <MhealthIcon />,
    title: "Real Estate Mobile App Development",
    description:
      "We build custom mobile apps for real estate businesses so users can view listings, contact agents, and schedule property visits anytime, anywhere.",
  },
  {
    id: 3,
    icon: <LabIcon />,
    title: "Real Estate CRM Solutions",
    description:
      "We develop CRM systems to help real estate businesses manage clients, track leads, automate follow-ups, and improve sales efficiency.",
  },
  {
    id: 4,
    icon: <MachinLearningIcon />,
    title: "Virtual Property Tours and AR Solutions",
    description:
      "We offer property management software to simplify daily tasks like tenant communication, rent tracking, and lease management for landlords and agencies.",
  },
  {
    id: 5,
    icon: <CloudIcon />,
    title: "Property Management Solutions",
    description:
      "We offer property management software to simplify daily tasks like tenant communication, rent tracking, and lease management for landlords and agencies.",
  },
  {
    id: 6,
    icon: <DigitalIcon />,
    title: "Real Estate Marketplaces and E-commerce Solutions",
    description:
      "We build online marketplace platforms for buying, selling, and renting properties, making transactions easier, faster, and more visible for real estate businesses.",
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
  // minHeight: "347px",
};

function ServiceCard({ service, animationDelay = 0 }) {
  return (
    <div
      className="border border-primary flex flex-col gap-4 sm:p-8 p-4 transition-all duration-300 hover:-translate-y-1 group"
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
      <p className="text-p text-textColor font-outfit font-light line-clamp-4 overflow-hidden leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}

export default function RealEstateServices() {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, INITIAL_COUNT);
  const hiddenCount = services.length - INITIAL_COUNT;

  return (
    <>
      <section className="  bg-[#02070F]">
        <div className="container py-16 lg:py-24 px-2 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="font-stoke text-h2 font-normal leading-[1.28] text-white mb-5">
              Our Real Estate Solutions
            </h1>
            <p className="font-outfit font-normal max-w-4xl  text-p leading-relaxed">
              At Aireb Solutions, we provide complete services for real estate
              businesses. Whether you are an agent, property manager, or
              developer, our solution helps simplify your work, improve customer
              engagement, and increase overall business efficiency and
              performance.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
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
