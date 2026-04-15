import React from "react";
import { motion } from "framer-motion";
import VoiceIcon from "@/assets/icons/contact-center/services-icon/voice.svg?react";
import NonVoiceIcon from "@/assets/icons/contact-center/services-icon/non-voice.svg?react";
import TechnicalIcon from "@/assets/icons/contact-center/services-icon/technical.svg?react";

const ContactCenterServices = () => {
  const services = [
    {
      id: 1,
      iconPath: <VoiceIcon />,
      title: "Voice support",
      description:
        "Voice support We handle all inbound and outbound call center services, ensuring seamless customer interactions while you stay focused on your core business priorities.",
    },
    {
      id: 2,
      iconPath: <NonVoiceIcon />,
      title: "Non-voice support",
      description:
        "Providing cost-effective, efficient, and tailor-made non-voice customer support designed to align perfectly with your brand.",
    },
    {
      id: 3,
      iconPath: <TechnicalIcon />,
      title: "Technical support",
      description:
        "We offer Tier-1 support services enhanced with automation tools and streamlined processes,enabling our experts to deliver swift first-contact resolutions.",
    },
  ];

  return (
    <section className="relative w-full bg-black ">
      <div className="container py-16 lg:py-24 px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-[6vh] sm:mb-[8vh] lg:mb-[10vh]"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}>
          <h2 className="font-stoke font-normal text-h2 leading-[1.3] text-white mb-[2vh] sm:mb-[3vh]">
            Seamless Engagement & Swift <br className="hidden lg:block" />
            Resolutions Exactly What We Deliver!
          </h2>
        </motion.div>

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
                <div className="w-[clamp(44px,5vh,56px)] h-[clamp(44px,5vh,56px)] mb-[clamp(16px,2.5vh,32px)] bg-white text-black  flex items-center justify-center transition-all duration-500">
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

export default ContactCenterServices;
