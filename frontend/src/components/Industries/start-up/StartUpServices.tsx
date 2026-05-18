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
    title: "Website Development for Startups",
    description:
      "We build fast, mobile-friendly websites that look professional, rank well on search engines, and convert visitors into customers.",
  },
  {
    id: 2,
    icon: <MhealthIcon />,
    title: "Mobile App Development",
    description:
      "We create easy-to-use mobile apps for Android and iOS to help startups connect with users anytime.",
  },
  {
    id: 3,
    icon: <LabIcon />,
    title: "Branding & Graphic Design",
    description:
      "We design strong brand identities that help your startup stand out and attract the right audience.",
  },
  {
    id: 4,
    icon: <MachinLearningIcon />,
    title: "Digital Marketing for Startups",
    description:
      "We provide marketing strategies to reach your audience, generate leads, and grow sales within your budget.",
  },
  {
    id: 5,
    icon: <CloudIcon />,
    title: "Cloud-Based Solutions",
    description:
      "We offer flexible cloud solutions to manage operations efficiently and scale your business easily.",
  },
  {
    id: 6,
    icon: <DigitalIcon />,
    title: "CRM & Automation Solutions",
    description:
      "We provide CRM systems to manage leads, automate tasks, and improve customer relationships.",
  },
  {
    id: 7,
    icon: <DigitalIcon />,
    title: "Funding & Investment Solutions",
    description:
      "We help startups manage funding, connect with investors, and track financial performance effectively.",
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
      className="border border-primary flex flex-col gap-4 p-4 transition-all duration-300 hover:-translate-y-1 group"
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
      <h3 className="text-textColor font-stoke font-normal text-title leading-[1.3] ">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-p text-textColor font-outfit font-light leading-[1.3] line-clamp-3 overflow-hidden ">
        {service.description}
      </p>
    </div>
  );
}

export default function StartUpServices() {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, INITIAL_COUNT);
  return (
    <>
      <section className="  bg-[#02070F]">
        <div className="container py-16 lg:py-24">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="font-stoke text-h2 font-normal leading-[1.28] text-white mb-5">
              Our Gaming Industry
              <br className="hidden lg:block" />
              Services
            </h1>
            <p className="font-outfit font-normal  mx-auto text-p leading-[1.3]">
              At Aireb Solutions, we offer tailored solutions that help startups
              from the ground up. Whether <br /> you're looking to build a
              website, develop a mobile app, or scale your marketing efforts, we{" "}
              <br /> provide the expertise and support you need to succeed.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:mx-auto xl:max-w-screen-2xl">
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
