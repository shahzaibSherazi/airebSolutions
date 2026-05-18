import { useState } from "react";
import WebIcon from "@/assets/Industies/retail/services/web-development.svg?react";
import MobileIcon from "@/assets/Industies/retail/services/mobile-app.svg?react";
import SupplyIcon from "@/assets/Industies/retail/services/supply-chain.svg?react";
import CrmIcon from "@/assets/Industies/retail/services/crm.svg?react";
import CgpIcon from "@/assets/Industies/retail/services/cgp.svg?react";
import ArIcon from "@/assets/Industies/retail/services/ar.svg?react";
const services = [
  {
    id: 1,
    icon: <WebIcon />,
    title: "E-Commerce Website Development",
    description:
      "A strong online presence is essential for any retail business. We design and develop e-commerce websites that provide customers with an intuitive, fast, and secure shopping experience. Our websites are fully optimized for mobile devices, ensuring that customers can shop anytime, anywhere.",
  },
  {
    id: 2,
    icon: <MobileIcon />,
    title: "Mobile App Development for Retail",
    description:
      "Mobile apps are becoming a critical tool for retailers to engage with customers and increase sales. We create custom mobile apps that deliver an exceptional shopping experience, integrate loyalty programs, and offer personalized recommendations.",
  },
  {
    id: 3,
    icon: <SupplyIcon />,
    title: "Inventory and Supply Chain Management Systems",
    description:
      "Efficient inventory and supply chain management are key to the success of retail and CGP businesses. We offer software solutions that automate inventory tracking, manage stock levels, and streamline supply chain operations.",
  },
  {
    id: 4,
    icon: <CrmIcon />,
    title: "Customer Relationship Management (CRM)",
    description:
      "Effective customer management is essential for building loyalty and increasing sales. Our CRM solutions help retail businesses manage customer interactions, track sales leads, and create personalized marketing campaigns.",
  },
  {
    id: 5,
    icon: <CgpIcon />,
    title: "Digital Marketing for Retail & CGP",
    description:
      "To remain competitive, businesses must leverage digital marketing strategies that attract and retain customers. We offer a wide range of digital marketing services to help retail and CGP companies boost their online visibility and drive sales.",
  },
  {
    id: 6,
    icon: <ArIcon />,
    title: "Augmented Reality (AR) Solutions",
    description:
      "Augmented Reality is transforming the shopping experience by allowing customers to visualize products in real-time before making a purchase. We help retail businesses create AR solutions that provide customers with immersive experiences.",
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
    title: "Patient Engagement Solutions",
    description:
      "We build platforms that foster stronger patient-provider relationships through personalized communication, remote care tools, and intelligent health tracking systems.",
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
    title: "Healthcare Cybersecurity",
    description:
      "Protecting sensitive patient data is critical. We provide robust cybersecurity frameworks, compliance audits, and threat monitoring tailored for healthcare environments.",
  },
  {
    id: 9,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5"
        stroke="#4285F4"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Health Data Analytics",
    description:
      "Turn raw clinical and operational data into actionable insights. Our analytics platforms help healthcare organizations improve outcomes, reduce costs, and optimize resource allocation.",
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
      className="border border-primary flex flex-col gap-4 p-4 sm:p-8 transition-all duration-300 hover:-translate-y-1 group"
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
      <h3 className="text-textColor font-stoke font-normal text-title leading-[1.3]">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-p text-textColor font-outfit font-light line-clamp-4 overflow-hidden leading-[1.3] ">
        {service.description}
      </p>
    </div>
  );
}

export default function RetailServices() {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, INITIAL_COUNT);
  const hiddenCount = services.length - INITIAL_COUNT;

  return (
    <>
      <section className="  bg-[#02070F]">
        <div className="container py-16 lg:py-24">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="font-stoke text-h2 font-normal leading-[1.3] text-white mb-5">
              Our Retail & CGP Solutions
            </h1>
            <p className="font-outfit font-normal  mx-auto text-p leading-[1.3]">
              At Aireb Solutions, we provide innovative services that empower
              retail and consumer goods <br /> businesses to drive growth,
              improve customer engagement, and optimize operations. Our digital{" "}
              <br />
              solutions enable retailers to create seamless, personalized
              shopping experiences, manage <br /> complex supply chains, and
              stay competitive in the dynamic market.
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
