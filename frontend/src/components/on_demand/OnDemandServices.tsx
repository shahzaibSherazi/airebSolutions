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
        "We develop feature-rich on-demand apps with real-time tracking, secure payments, and seamless user experiences across industries.",
    },
    {
      id: 2,
      iconPath: <MarketPlaceIcon />,
      title: "On-Demand Marketplace Solutions",
      description:
        "We build scalable on-demand marketplaces with vendor management, automated scheduling, analytics, and smooth order processing systems. ",
    },
    {
      id: 3,
      iconPath: <DeliveryIcon />,
      title: "On-Demand Delivery Solutions",
      description:
        "We create delivery apps with real-time tracking, route optimization, and secure payment systems for faster operations.",
    },
    {
      id: 4,
      iconPath: <HealthcareIcon />,
      title: "On-Demand Healthcare Services",
      description:
        "We develop telemedicine apps with appointment scheduling, virtual consultations, and secure patient data management solutions.",
    },
    {
      id: 5,
      iconPath: <TransportationIcon />,
      title: "On-Demand Transportation & Ride-Sharing",
      description:
        "We build ride-sharing apps with GPS tracking, automated dispatch, secure payments, and route optimization features.",
    },
    {
      id: 6,
      iconPath: <HomeIcon />,
      title: "On-Demand Home Services",
      description:
        "We create home service apps connecting customers and service providers with real-time booking and efficient management systems.",
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
          <h2 className="font-stoke font-normal text-[clamp(28px,4.5vw,42px)] leading-[1.3] text-white mb-[2vh] sm:mb-[3vh]">
            Our On-Demand Services
          </h2>
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

export default OnDemandServices;
