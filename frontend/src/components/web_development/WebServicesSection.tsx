import React from "react";
import { motion } from "framer-motion";
import EcommerceIcon from "@/assets/icons/web_development_icons/services_icons/ecommerce.svg?react";
import CmsIcon from "@/assets/icons/web_development_icons/services_icons/cms.svg?react";
import IntegrationIcon from "@/assets/icons/web_development_icons/services_icons/integration.svg?react";
import WebSolutionIcon from "@/assets/icons/web_development_icons/services_icons/web_solutions.svg?react";
import PwaIcon from "@/assets/icons/web_development_icons/services_icons/pwa.svg?react";
import WebDevelopmentIcon from "@/assets/icons/web_development_icons/services_icons/web_development.svg?react";
const WebServicesSection = () => {
  const services = [
    {
      id: 1,
      iconPath: <WebDevelopmentIcon />,
      title: "Custom Web Development",
      description:
        "We build scalable, high-performance web applications and corporate websites tailored to your business needs.",
    },
    {
      id: 2,
      iconPath: <EcommerceIcon />,
      title: "E-commerce Development",
      description:
        "We create powerful e-commerce stores using Shopify, WooCommerce, Magento, and custom solutions to boost online sales.",
    },
    {
      id: 3,
      iconPath: <CmsIcon />,
      title: "Content Management Systems (CMS)",
      description:
        "We develop user-friendly CMS websites using WordPress, Joomla, and Drupal for easy content management",
    },
    {
      id: 4,
      iconPath: <IntegrationIcon />,
      title: "API Development & Integration",
      description:
        "We build secure APIs and integrate CRM, ERP, payment gateways, and third-party applications seamlessly.",
    },
    {
      id: 5,
      iconPath: <WebSolutionIcon />,
      title: "AI-Powered Web Solutions",
      description:
        "We develop AI-powered websites with chatbots, automation, predictive analytics, and smart user experiences.",
    },
    {
      id: 6,
      iconPath: <PwaIcon />,
      title: "Progressive Web Apps (PWA)",
      description:
        "We create fast, responsive PWAs with offline access and app-like experiences across all devices.",
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
            Our Web Development Services
          </h2>
          <p className="font-outfit font-normal text-p leading-[1.3] text-[#EBEBEB] max-w-[800px] mx-auto px-4">
            We don't just create strategies, we drive the numbers. Growth means
            higher conversion, lower costs, and stronger brands. Discover how we
            help brands grow smarter
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(16px,2vh,24px)]">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card group relative bg-black hover:bg-primary
  border border-gray-800 sm:p-[20px] p-[8px]
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

export default WebServicesSection;
