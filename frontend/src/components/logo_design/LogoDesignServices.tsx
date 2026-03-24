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
        "We work closely with you to create logos that reflect your brand's values and vision. Each design is unique, creative, and aligned with your business goals — whether minimalist, typographic, emblematic, or abstract. Our designers research your industry, analyze competitors, and craft distinctive logos that are both meaningful and impactful.",
    },
    {
      id: 2,
      iconPath: <IdentityIcon />,
      title: "Brand Identity Development",
      description:
        "A logo is just the beginning of your brand's identity. At Aireb Solutions, we create a cohesive brand presence that effectively communicates your message across all platforms. Our approach includes carefully selecting color palettes that evoke the right emotions and resonate with your audience, choosing typography that aligns with your brand personality for consistency ",
    },
    {
      id: 3,
      iconPath: <VerstailIcon />,
      title: "Versatile Logo Solutions",
      description:
        "We design logos optimized for various applications, ensuring they look exceptional across digital platforms, print materials, merchandise, and signage. Our designs are adaptable to all branding needs, from business cards to billboards. Whether you need a logo for your website, social media, or physical store, we make sure it maintains clarity and impact in any format.",
    },
    {
      id: 4,
      iconPath: <HighResolutionIcon />,
      title: "Vector & High-Resolution Files",
      description:
        "We provide your logo in multiple formats to ensure maximum usability and versatility.Each file format ensures that your logo maintains its sharpness and clarity across different mediums, whether it's displayed on a website, printed on a brochure, or embroidered on company apparel.",
    },
    {
      id: 5,
      iconPath: <VariationIcon />,
      title: "Logo Variations & File Packages",
      description:
        "To maximize usability, we provide different versions of your logo to accommodate various branding needs,Primary Logo, Secondary Logo, Monochrome Logo, Favicon & Social Media Icons Responsive & Adaptive Logos",
    },
    {
      id: 6,
      iconPath: <HomeIcon />,
      title: "Animated Logo Design",
      description:
        "An animated logo adds movement and engagement to your brand identity. We create dynamic, engaging animated logos that bring life to your brand for digital content, video marketing, and website applications. Our motion graphics experts craft animations that enhance brand recall and captivate audiences.",
    },
  ];

  return (
    <section className="relative w-full bg-black py-[8vh] sm:py-[10vh] lg:py-[12vh] px-8">
      <div className="">
        {/* Header Section */}
        <div className="text-center mb-[6vh] sm:mb-[8vh] lg:mb-[10vh]">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}>
            <h2 className="font-stoke font-normal text-[clamp(28px,4.5vw,42px)] leading-[1.3] text-white mb-[2vh] sm:mb-[3vh]">
              Our Logo Design Services
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(16px,2vh,24px)]">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card group relative bg-black hover:bg-primary
  border border-gray-800 p-[clamp(24px,3vh,40px)]
  transition-all duration-500 ease-in-out hover:border-primary
  overflow-hidden
  ">
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false }}>
                {/* Icon Container */}
                <div className="mb-[clamp(16px,2.5vh,32px)]">
                  <div className="w-[clamp(44px,5vh,56px)] h-[clamp(44px,5vh,56px)] bg-white text-black  flex items-center justify-center transition-all duration-500">
                    {service.iconPath}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="font-outfit font-semibold text-white
  text-[clamp(16px,1.8vw,22px)] leading-[1.3]
  mb-[clamp(12px,1.5vh,20px)]
  line-clamp-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="font-outfit font-normal text-gray-400 group-hover:text-white
  text-[clamp(12px,1.3vw,15px)] leading-[1.7]
  transition-colors duration-500
  line-clamp-5">
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
