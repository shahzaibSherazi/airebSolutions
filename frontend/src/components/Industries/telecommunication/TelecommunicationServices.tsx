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
    title: "Network Infrastructure and Cloud Services",
    description:
      "We create and set up safe and scalable network and cloud solutions to make sure that communication goes well and that the telecom business can flourish.",
  },
  {
    id: 2,
    icon: <MhealthIcon />,
    title: " Solutions for Customer Relationship Management (CRM)",
    description:
      "We offer CRM systems to help telecom companies better manage consumers, increase service quality, and speed up their business processes.",
  },
  {
    id: 3,
    icon: <LabIcon />,
    title: "Billing and Payment Solutions",
    description:
      "We offer billing and payment solutions to help you keep track of invoices, make sure the data is correct, and give clients a smooth and dependable way to pay.",
  },
  {
    id: 4,
    icon: <MachinLearningIcon />,
    title: "Making mobile apps",
    description:
      "We make mobile apps that are easy to use and assist telecom businesses in giving customers instant access to services and get them more involved.",
  },
  {
    id: 5,
    icon: <CloudIcon />,
    title: "IT Solutions and Digital Transformation",
    description:
      "We assist telecom companies in using new technologies like the Internet of Things (IoT) to make their services better, operate their networks better, and be more efficient overall.",
  },
  {
    id: 6,
    icon: <DigitalIcon />,
    title: "Business Intelligence and Data Analytics",
    description:
      "We offer data analytics tools that turn telecom data into meaningful information that can help you make better decisions, understand your customers better, and improve the performance of your network.",
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
    title: "Cybersecurity Solutions",
    description:
      "We offer powerful security solutions to keep telecom systems, networks, and consumer data safe from cyber threats.",
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
    title: "VoIP & Communication Solutions",
    description:
      "We offer VoIP services that make communication cheaper and better so that businesses can work better and stay connected.",
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

export default function TelecommunicationServices() {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, INITIAL_COUNT);
  const hiddenCount = services.length - INITIAL_COUNT;

  return (
    <>
      <section className=" bg-[#02070F]">
        <div className="container  py-16 lg:py-24">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="font-stoke text-h2 font-normal leading-[1.3] text-white mb-5">
              Our Telecommunications Solutions
            </h1>
            <p className="font-outfit font-normal  mx-auto text-p leading-[1.3]">
              Whether you're looking to modernize your infrastructure, improve
              customer support, or optimize <br className="hidden lg:block" />{" "}
              service delivery, Aireb Solutions provides the expertise and tools
              necessary to help you achieve <br className="hidden lg:block" />{" "}
              your business goals.
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
