import React from "react";
import { motion } from "framer-motion";
import TailoredIcon from "@/assets/icons/logo-design/services-icon/tailored.svg?react";
import IdentityIcon from "@/assets/icons/logo-design/services-icon/identity.svg?react";
import VerstailIcon from "@/assets/icons/logo-design/services-icon/verstail.svg?react";
import HighResolutionIcon from "@/assets/icons/logo-design/services-icon/high-resolution.svg?react";
import VariationIcon from "@/assets/icons/logo-design/services-icon/variation.svg?react";
import HomeIcon from "@/assets/icons/logo-design/services-icon/home.svg?react";
const LogoDesignServices = () => {
  const services = [
    {
      id: 1,
      iconPath: <TailoredIcon />,
      title: "Tailored Logo Creation",
      description:
        "We design unique logos aligned with your brand vision, industry, and values for a strong visual identity.",
    },
    {
      id: 2,
      iconPath: <IdentityIcon />,
      title: "Brand Identity Development",
      description:
        "We create complete brand identity systems, including colors, typography, and design consistency across all platforms.",
    },
    {
      id: 3,
      iconPath: <VerstailIcon />,
      title: "Versatile Logo Solutions",
      description:
        "We design logos optimized for web, print, social media, merchandise, and all branding applications.",
    },
    {
      id: 4,
      iconPath: <HighResolutionIcon />,
      title: "Vector & High-Resolution Files",
      description:
        "We deliver logos in multiple formats, ensuring scalability, clarity, and quality across all media platforms.",
    },
    {
      id: 5,
      iconPath: <VariationIcon />,
      title: "Logo Variations & File Packages",
      description:
        "We provide multiple logo versions, including primary, secondary, monochrome, favicon, and social media icons.",
    },
    {
      id: 6,
      iconPath: <HomeIcon />,
      title: "Animated Logo Design",
      description:
        "We create dynamic animated logos that enhance engagement, improve brand recall, and strengthen digital presence.",
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
            Our Logo Design Services
          </h2>
        </motion.div>

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

export default LogoDesignServices;
