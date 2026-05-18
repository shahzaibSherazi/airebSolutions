import React from "react";
import cardIcon from "../../assets/icons/webService_icon.png";
import { motion } from "framer-motion";
import CustomMobielIcon from "@/assets/icons/mobile_app/services_icons/custom_mobile_dev.svg?react";
import NativeMobielIcon from "@/assets/icons/mobile_app/services_icons/native_mobile_dev.svg?react";
import CrossPlatformIcon from "@/assets/icons/mobile_app/services_icons/cross_platform.svg?react";
import EnterpriseIcon from "@/assets/icons/mobile_app/services_icons/enterprise.svg?react";
import OptimizationIcon from "@/assets/icons/mobile_app/services_icons/optimization.svg?react";
import ArIcon from "@/assets/icons/mobile_app/services_icons/ar_vr.svg?react";
import TestingIcon from "@/assets/icons/mobile_app/services_icons/testing.svg?react";
import MaintenanceIcon from "@/assets/icons/mobile_app/services_icons/maintinance.svg?react";
const MobileAppServices = () => {
  const services = [
    {
      id: 1,
      iconPath: <CustomMobielIcon />,
      title: "Custom Mobile App Development",
      description:
        "We build high-performing iOS and Android apps that improve user engagement and support business growth effectively.",
    },
    {
      id: 2,
      iconPath: <NativeMobielIcon />,
      title: "Native Mobile App Development",
      description:
        "We develop native iOS and Android apps optimized for performance, responsiveness, and seamless device integration.",
    },
    {
      id: 3,
      iconPath: <CrossPlatformIcon />,
      title: "Cross-Platform App Development",
      description:
        "We create cross-platform apps using Flutter and React Native for consistent performance across iOS and Android devices.",
    },
    {
      id: 4,
      iconPath: <EnterpriseIcon />,
      title: "Enterprise Mobility Solutions",
      description:
        "We build enterprise mobile apps that improve workflows, automate processes, and enhance team collaboration efficiently.",
    },
    {
      id: 5,
      iconPath: <OptimizationIcon />,
      title: "Mobile App Modernization & Optimization",
      description:
        "We modernize outdated apps with redesigns, feature upgrades, and performance optimization for better user experiences.",
    },
    {
      id: 6,
      iconPath: <ArIcon />,
      title: "AR & VR App Development",
      description:
        "We develop immersive AR and VR mobile apps for gaming, training, retail, and interactive business experiences.",
    },
    {
      id: 7,
      iconPath: <TestingIcon />,
      title: "App Testing & Quality Assurance",
      description:
        "We perform detailed app testing to ensure security, performance, stability, and bug-free user experiences across devices.",
    },
    {
      id: 8,
      iconPath: <MaintenanceIcon />,
      title: "Mobile App Maintenance & Support",
      description:
        "We provide ongoing app maintenance, updates, troubleshooting, and optimization to keep applications secure and efficient.",
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
            Our Mobile App & Game <br /> Development Services
          </h2>
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
                <div className="mb-[clamp(12px,2.5vh,28px)]">
                  <div className="w-[clamp(44px,5vh,56px)] h-[clamp(44px,5vh,56px)] bg-white text-black  flex items-center justify-center transition-all duration-500">
                    {service.iconPath}
                  </div>
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

export default MobileAppServices;
