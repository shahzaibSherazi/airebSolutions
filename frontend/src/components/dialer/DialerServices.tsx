import React from "react";
import { motion } from "framer-motion";
import CustomDialerIcon from "@/assets/icons/dialer/services-icons/custom-dialer.svg?react";
import PredictiveIcon from "@/assets/icons/dialer/services-icons/predictive.svg?react";
import IvrIcon from "@/assets/icons/dialer/services-icons/ivr.svg?react";
import OutbondingIcon from "@/assets/icons/dialer/services-icons/outbonding.svg?react";
import AnalyticIcon from "@/assets/icons/dialer/services-icons/analytic.svg?react";
import SupportIcon from "@/assets/icons/dialer/services-icons/support.svg?react";
const DialerServices = () => {
  const services = [
    {
      id: 1,
      iconPath: <CustomDialerIcon />,
      title: "AI-Powered Custom Dialer Solutions",
      description:
        "We create AI-powered dialer systems that automate calling, improve productivity,and enhance customer communication experiences efficiently.",
    },
    {
      id: 2,
      iconPath: <PredictiveIcon />,
      title: "AI-Driven Predictive Dialer",
      description:
        "We develop predictive dialers that automatically place calls, reduce agent downtime, and increase overall operational efficiency.",
    },
    {
      id: 3,
      iconPath: <IvrIcon />,
      title: "Intelligent IVR (Interactive Voice Response)",
      description:
        "We build AI-powered IVR systems for smart call routing, faster responses, and improved customer support experiences.",
    },
    {
      id: 4,
      iconPath: <OutbondingIcon />,
      title: "Automated Outbound Dialing",
      description:
        "We automate outbound calling processes using AI to improve lead conversion and boost sales team productivity effectively.",
    },
    {
      id: 5,
      iconPath: <AnalyticIcon />,
      title: "Voice AI & Speech Analytics",
      description:
        "We use Voice AI and speech analytics to monitor conversations, analyze sentiment, and improve customer communication quality.",
    },
    {
      id: 6,
      iconPath: <SupportIcon />,
      title: "Omni-Channel Support",
      description:
        "We integrate calls, SMS, emails, and social media channels for seamless customer communication and engagement across platforms.",
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
            Our AI Custom Dialer <br className="hidden lg:block" /> solutions
            Services
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

export default DialerServices;
