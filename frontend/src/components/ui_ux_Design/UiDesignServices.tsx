import React from "react";
import { motion } from "framer-motion";
import ResearchIcon from "@/assets/icons/ui-ux_icons/services_icons/research.svg?react";
import WireFrameIcon from "@/assets/icons/ui-ux_icons/services_icons/wireframe.svg?react";
import UserInterfaceIcon from "@/assets/icons/ui-ux_icons/services_icons/user_interface.svg?react";
import UserExperienceIcon from "@/assets/icons/ui-ux_icons/services_icons/user_experience.svg?react";
import UseabilityIcon from "@/assets/icons/ui-ux_icons/services_icons/useability.svg?react";
import MoibleDesignIcon from "@/assets/icons/ui-ux_icons/services_icons/design-content.svg?react";
import EcommerceIcon from "@/assets/icons/ui-ux_icons/services_icons/ecommerce.svg?react";
import DesignSystemIcon from "@/assets/icons/ui-ux_icons/services_icons/design-system.svg?react";
import AccessibilityIcon from "@/assets/icons/ui-ux_icons/services_icons/accessibility.svg?react";
const UiDesignServices = () => {
  const services = [
    {
      id: 1,
      iconPath: <ResearchIcon />,
      title: "User Research & Analysis",
      description:
        "We analyze users, market trends, and business goals to create data-driven and user-focused design experiences.",
    },
    {
      id: 2,
      iconPath: <WireFrameIcon />,
      title: "Wireframing & Prototyping",
      description:
        "We create wireframes and interactive prototypes to improve structure, usability, and user experience before development.",
    },
    {
      id: 3,
      iconPath: <UserInterfaceIcon />,
      title: "UI Design (User Interface)",
      description:
        "We design visually appealing, user-friendly interfaces that match your brand and enhance user engagement.",
    },
    {
      id: 4,
      iconPath: <UserExperienceIcon />,
      title: "UX Design (User Experience)",
      description:
        "We create intuitive user experiences that improve navigation, accessibility, and overall customer satisfaction.",
    },
    {
      id: 5,
      iconPath: <UseabilityIcon />,
      title: "Usability Testing",
      description:
        "We test designs with real users to improve functionality, usability, and overall product performance.",
    },
    {
      id: 6,
      iconPath: <MoibleDesignIcon />,
      title: "Mobile UI/UX Design",
      description:
        "We design responsive mobile interfaces optimized for seamless experiences across all screen sizes.",
    },
    {
      id: 7,
      iconPath: <EcommerceIcon />,
      title: "E-commerce UI/UX Design",
      description:
        "We create user-friendly e-commerce designs that simplify shopping and improve conversions and customer satisfaction.",
    },
    {
      id: 8,
      iconPath: <DesignSystemIcon />,
      title: "Design System & Style Guides",
      description:
        "We develop consistent design systems and style guides to strengthen branding and user experience.",
    },
    {
      id: 9,
      iconPath: <AccessibilityIcon />,
      title: "Accessibility Design",
      description:
        "We create accessible designs following WCAG standards to ensure usability for all users.",
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
            Our UI/UX Design Services
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
                <div className="w-[clamp(44px,5vh,56px)] mb-[clamp(12px,2.5vh,28px)] h-[clamp(44px,5vh,56px)] bg-white text-black  flex items-center justify-center transition-all duration-500">
                  {service.iconPath}
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

export default UiDesignServices;
