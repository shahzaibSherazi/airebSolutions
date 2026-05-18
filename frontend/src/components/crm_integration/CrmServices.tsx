import React from "react";
import { motion } from "framer-motion";
import SeamlessIcon from "@/assets/icons/crm-integration/services-icons/seamless.svg?react";
import StreamedIcon from "@/assets/icons/crm-integration/services-icons/streamed.svg?react";
import AutomatedIcon from "@/assets/icons/crm-integration/services-icons/automated.svg?react";
import ReportingIcon from "@/assets/icons/crm-integration/services-icons/reporting.svg?react";
import CrmIcon from "@/assets/icons/crm-integration/services-icons/crm.svg?react";
import ThirdPartyIcon from "@/assets/icons/crm-integration/services-icons/third-party.svg?react";

const CrmServices = () => {
  const services = [
    {
      id: 1,
      iconPath: <SeamlessIcon />,
      title: "Seamless Data Synchronization",
      description:
        "OWe sync data across platforms automatically, reducing manual work and keeping your CRM always updated.",
    },
    {
      id: 2,
      iconPath: <StreamedIcon />,
      title: "Streamlined Customer Interaction",
      description:
        "We integrate communication tools with CRM for better customer management and personalized interactions.",
    },
    {
      id: 3,
      iconPath: <AutomatedIcon />,
      title: "Automated Workflows",
      description:
        "We automate tasks like lead management, scheduling, and record updates to improve business efficiency.",
    },
    {
      id: 4,
      iconPath: <ReportingIcon />,
      title: "Enhanced Reporting & Analytics",
      description:
        "We integrate business tools to deliver advanced analytics, reporting, and real-time performance insights.",
    },
    {
      id: 5,
      iconPath: <CrmIcon />,
      title: "CRM with E-Commerce Integrations",
      description:
        "We connect CRMs with e-commerce platforms for seamless order, inventory, and customer management.",
    },
    {
      id: 6,
      iconPath: <ThirdPartyIcon />,
      title: "Third-Party App Integrations",
      description:
        "We integrate CRMs with third-party apps for smooth data flow and improved business operations.",
    },
  ];

  return (
    <section className="relative w-full bg-black ">
      <div className="container py-16 lg:py-24">
        {/* Header Section */}
        <motion.div
          className="text-center mb-[6vh] sm:mb-[8vh] lg:mb-[10vh]"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}>
          <h2 className="font-stoke font-normal text-h2 leading-[1.3] text-white mb-[2vh] sm:mb-[3vh]">
            Our API and CRM Integration Services
          </h2>
          <p className="font-outfit font-normal text-p leading-[1.3] text-[#EBEBEB] max-w-[890px] mx-auto px-4">
            Aireb Solutions, we specialize in creating custom API integrations
            with leading CRM platforms to ensure your business has a unified and
            efficient communication strategy. Our integration services are
            designed to help businesses create a connected ecosystem that
            ensures smooth data flow, improved productivity, and seamless
            customer experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(16px,2vh,24px)]">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card group relative bg-black hover:bg-primary
  border border-gray-800 sm:p-5 p-2
  transition-all duration-500 ease-in-out hover:border-primary
  overflow-hidden
  ">
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false }}>
                {/* Icon Container */}
                <div className="w-[clamp(44px,5vh,56px)] h-[clamp(44px,5vh,56px)] mb-[clamp(12px,2.5vh,28px)] bg-white text-black  flex items-center justify-center transition-all duration-500">
                  {service.iconPath}
                </div>

                {/* Title */}
                <h3
                  className="font-outfit font-semibold text-white
  text-title leading-[1.3]
  mb-[clamp(12px,1.5vh,20px)]
  line-clamp-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="font-outfit font-normal text-white
  text-p leading-[1.3]
  transition-colors duration-500
  line-clamp-3 overflow-hidden">
                  {service.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrmServices;
