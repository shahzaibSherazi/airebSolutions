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
      title: "Our AI-Powered Custom Dialer Solutions",
      description:
        "Our AI-powered custom dialer solutions streamline communication, boost agent productivity, and enhance customer engagement. By leveraging AI, machine learning, and advanced analytics, we deliver automated calling with smarter lead management, higher conversions, and personalized interactions.",
    },
    {
      id: 2,
      iconPath: <PredictiveIcon />,
      title: "AI-Driven Predictive Dialer",
      description:
        "Our predictive dialer uses advanced algorithms to auto-dial at the right time, maximizing agent efficiency. By reducing downtime and prioritizing high-value leads, it boosts productivity and lowers call abandonment rates.",
    },
    {
      id: 3,
      iconPath: <IvrIcon />,
      title: "Intelligent IVR (Interactive Voice Response)",
      description:
        "Our AI-driven Interactive Voice Response (IVR) system helps businesses manage high call volumes by automatically routing calls to the appropriate department or agent. With the power of AI, the IVR can understand natural language, ensuring customers get quick resolutions without waiting for a human agent.",
    },
    {
      id: 4,
      iconPath: <OutbondingIcon />,
      title: "Automated Outbound Dialing",
      description:
        "Our automated outbound dialing solution uses AI to place calls at the most optimal times, maximizing lead conversion. Whether it’s cold calling or following up on leads, AI ensures that calls are made efficiently, enhancing sales productivity.",
    },
    {
      id: 5,
      iconPath: <AnalyticIcon />,
      title: "Voice AI and Speech Analytics",
      description:
        "Our Voice AI technology provides powerful insights into customer conversations, enabling businesses to understand emotions, sentiments, and key concerns. Speech analytics can analyze customer interactions to identify patterns, common issues, and areas for improvement. Get In Touch",
    },
    {
      id: 6,
      iconPath: <SupportIcon />,
      title: "Omni-Channel Support",
      description:
        "Our AI-powered dialer solutions integrate with a variety of communication channels, including phone calls, emails, SMS, and social media. This omni-channel approach ensures that businesses can engage customers on their preferred platform, leading to improved satisfaction and faster issue resolution.",
    },
  ];

  return (
    <section className="relative w-full bg-black ">
      <div className="container py-16 lg:py-24 px-2 lg:px-8">
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
          <p className="font-outfit font-normal text-p leading-[1.6] text-[#EBEBEB] max-w-[800px] mx-auto px-4">
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
  border border-gray-800 sm:p-[10px] p-[8px]
  transition-all duration-500 ease-in-out hover:border-primary
  overflow-hidden
  ">
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false }}>
                {/* Icon Container */}
                <div className="w-[clamp(44px,5vh,56px)] h-[clamp(44px,5vh,56px)] mb-[clamp(16px,2.5vh,32px)] bg-white text-black  flex items-center justify-center transition-all duration-500">
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
                  className="font-outfit font-normal text-gray-400 group-hover:text-white
  text-p leading-[1.7]
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

export default DialerServices;
