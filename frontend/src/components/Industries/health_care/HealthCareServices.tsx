import { useState } from "react";
import { motion } from "framer-motion";
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
    title: "Healthcare Software Development",
    description:
      "We specialize in the development of custom healthcare software solutions that help streamline clinical workflows, enhance patient management, and improve operational efficiencies.",
  },
  {
    id: 2,
    icon: <MhealthIcon />,
    title: "Mobile Health (mHealth) Applications",
    description:
      "Mobile health applications are transforming patient care by providing patients and healthcare providers with tools for real-time monitoring, appointment scheduling, and treatment management.",
  },
  {
    id: 3,
    icon: <LabIcon />,
    title: "Pharmaceutical Solutions",
    description:
      "The pharmaceutical industry requires secure, efficient, and compliant solutions for research, drug development, supply chain management, and patient support.",
  },
  {
    id: 4,
    icon: <MachinLearningIcon />,
    title: "AI and Machine Learning in Healthcare",
    description:
      "Artificial Intelligence (AI) and Machine Learning (ML) are playing a significant role in the healthcare industry by enhancing decision-making, improving diagnostics, and personalizing treatment plans.",
  },
  {
    id: 5,
    icon: <CloudIcon />,
    title: "Healthcare Cloud Solutions",
    description:
      "Cloud technology is transforming how healthcare organizations store and access data, improving collaboration and providing greater scalability and flexibility.",
  },
  {
    id: 6,
    icon: <DigitalIcon />,
    title: "Healthcare Digital Marketing",
    description:
      "Effective digital marketing is essential for healthcare providers and pharmaceutical companies to reach patients and stakeholders, promote their services, and improve brand visibility.",
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
  minHeight: "347px",
};

function ServiceCard({ service, animationDelay = 0 }) {
  return (
    <div
      className="border border-primary flex flex-col gap-4 p-8 transition-all duration-300 hover:-translate-y-1 group"
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
      <h3 className="text-textColor font-stoke font-normal text-[clamp(18px,1vw,24px)] leading-snug">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-[clamp(14px,1vw,16px)] text-textColor font-outfit font-light leading-relaxed flex-1">
        {service.description}
      </p>
    </div>
  );
}

export default function HealthCareServices() {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, INITIAL_COUNT);
  const hiddenCount = services.length - INITIAL_COUNT;

  return (
    <>
      <section className=" py-16 lg:py-24 px-6 bg-[#02070F]">
        <div className="">
          {/* Header */}
          <div className="text-center mb-14">
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}>
              <h1 className="font-stoke text-[clamp(24px,4vw,42px)] font-normal leading-[1.28] text-white mb-5">
                Our Healthcare & <br className="hidden lg:block" />
                Pharmaceuticals Services
              </h1>
              <p className="font-outfit font-normal  mx-auto text-sm md:text-lg leading-relaxed">
                At Aireb Solutions, we provide a range of services designed to
                support healthcare and <br className="hidden lg:block" />{" "}
                pharmaceutical businesses in navigating digital challenges,
                optimizing processes, and <br className="hidden lg:block" />{" "}
                meeting the needs of patients, providers, and stakeholders.
              </p>
            </motion.div>
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
