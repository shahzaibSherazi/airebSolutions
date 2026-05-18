import React from "react";
import { motion } from "framer-motion";
import CustomIcon from "@/assets/icons/api_development/services_icons/custom_api.svg?react";
import IntegrationIcon from "@/assets/icons/api_development/services_icons/third_party.svg?react";
import AuthenticationIcon from "@/assets/icons/api_development/services_icons/authentication.svg?react";
import MicroservicesIcon from "@/assets/icons/api_development/services_icons/microservices.svg?react";
import CloudApiIcon from "@/assets/icons/api_development/services_icons/cloud_api.svg?react";
import DocumentationIcon from "@/assets/icons/api_development/services_icons/documentation.svg?react";
const ApiServices = () => {
  const services = [
    {
      id: 1,
      iconPath: <CustomIcon />,
      title: "Custom API Development",
      description:
        "We build scalable APIs, including REST, SOAP, and GraphQL, for seamless data exchange and high performance.",
    },
    {
      id: 2,
      iconPath: <IntegrationIcon />,
      title: "Third-Party API Integration",
      description:
        "We integrate payment gateways, CRM, ERP, and social media APIs to improve workflows and system efficiency.",
    },
    {
      id: 3,
      iconPath: <AuthenticationIcon />,
      title: "API Security & Authentication",
      description:
        "We implement OAuth, JWT, and secure authentication methods to protect data and ensure safe API communication.",
    },
    {
      id: 4,
      iconPath: <MicroservicesIcon />,
      title: "Microservices API Development",
      description:
        "We develop microservices-based APIs that improve scalability, flexibility, and system maintainability for complex applications.",
    },
    {
      id: 5,
      iconPath: <CloudApiIcon />,
      title: "Cloud API Development",
      description:
        "We create cloud-based APIs for AWS, Azure, and Google Cloud, ensuring high availability and performance.",
    },
    {
      id: 6,
      iconPath: <DocumentationIcon />,
      title: "API Documentation & Support",
      description:
        "We provide clear API documentation and ongoing support for easy integration and smooth system performance.",
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
            Our API Development Services
          </h2>
          <p className="font-outfit font-normal text-p leading-[1.3] text-[#EBEBEB] max-w-[800px] mx-auto px-4">
            We don't just create strategies we show the numbers. Growth means
            higher conversions, lower costs, and stronger brands. Discover how
            we help brands grow smarter
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

export default ApiServices;
