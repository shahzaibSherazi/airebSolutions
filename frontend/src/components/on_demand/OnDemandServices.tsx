import React from "react";
import { motion } from "framer-motion";
import AppDevelopmentIcon from "@/assets/icons/on-demand/services-icon/app-development.svg?react";
import MarketPlaceIcon from "@/assets/icons/on-demand/services-icon/market-place.svg?react";
import DeliveryIcon from "@/assets/icons/on-demand/services-icon/delivery.svg?react";
import HealthcareIcon from "@/assets/icons/on-demand/services-icon/health-care.svg?react";
import TransportationIcon from "@/assets/icons/on-demand/services-icon/transportation.svg?react";
import HomeIcon from "@/assets/icons/on-demand/services-icon/home.svg?react";
const OnDemandServices = () => {
  const services = [
    {
      id: 1,
      iconPath: <AppDevelopmentIcon />,
      title: "On-Demand App Development",
      description:
        "We design and develop feature-rich on-demand applications that cater to various industries. Our apps are equipped with advanced functionalities such as real-time tracking, secure payment gateways, AI-powered recommendations, and seamless UI/UX to enhance user engagement and retention.",
    },
    {
      id: 2,
      iconPath: <MarketPlaceIcon />,
      title: "On-Demand Marketplace Solutions",
      description:
        "Launch your own on-demand service marketplace with our custom-built solutions. We integrate multi-vendor management, automated scheduling, smart analytics, and seamless order processing to create a scalable and high-performing platform. ",
      featured: true,
    },
    {
      id: 3,
      iconPath: <DeliveryIcon />,
      title: "On-Demand Delivery Solutions",
      description:
        "Speed, efficiency, and accuracy define our on-demand delivery systems. Whether it’s food, groceries, medical supplies, or logistics, our real-time tracking, smart route optimization, and contactless payment features make delivery operations smoother than ever.",
    },
    {
      id: 4,
      iconPath: <HealthcareIcon />,
      title: "On-Demand Healthcare Services",
      description:
        "Empower your healthcare business with on-demand telemedicine, appointment scheduling, and virtual consultations. Our HIPAA-compliant solutions provide patients with instant access to healthcare providers while ensuring secure data management and seamless patient-doctor interactions.",
    },
    {
      id: 5,
      iconPath: <TransportationIcon />,
      title: "On-Demand Transportation & Ride-Sharing",
      description:
        "We develop high-performance ride-hailing and logistics solutions with real-time GPS tracking, automated dispatch, secure payment integration, and AI-powered route optimization to enhance fleet management and improve user experience.",
    },
    {
      id: 6,
      iconPath: <HomeIcon />,
      title: "On-Demand Home Services",
      description:
        "From house cleaning and repair services to beauty and wellness, our customized on-demand home service applications allow businesses to connect service providers with customers in real-time, ensuring efficiency and convenience.",
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
              Our On-Demand Services
            </h2>
          </motion.div>
        </div>

        {/* Services Grid */}
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

export default OnDemandServices;
