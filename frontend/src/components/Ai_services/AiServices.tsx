import React from "react";
import { motion } from "framer-motion";
import IntegraionIcon from "../../assets/icons/AI-services-icons/integration.svg?react";
import DataInsightsIcon from "../../assets/icons/AI-services-icons/data-insights.svg?react";
import NlpIcon from "../../assets/icons/AI-services-icons/nlp.svg?react";
import VisionIcon from "../../assets/icons/AI-services-icons/computer-vision.svg?react";
import DeepLearningIcon from "../../assets/icons/AI-services-icons/machine-learning.svg?react";
import AiPoweredIcon from "../../assets/icons/AI-services-icons/ai-powered.svg?react";
const AiServicesSection = () => {
  const services = [
    {
      id: 1,
      iconPath: <IntegraionIcon />,
      title: "AI Integration & Automation",
      description:
        "We integrate AI solutions to automate workflows, improve productivity, and reduce manual business operations.",
    },
    {
      id: 2,
      iconPath: <DataInsightsIcon />,
      title: "Predictive Analytics & Data Insights",
      description:
        "We use AI analytics to forecast trends, optimize strategies, and support smarter business decisions.",
    },
    {
      id: 3,
      iconPath: <NlpIcon />,
      title: "Natural Language Processing (NLP)",
      description:
        "We develop AI chatbots, voice assistants, and NLP solutions to improve communication and customer engagement.",
    },
    {
      id: 4,
      iconPath: <VisionIcon />,
      title: "Computer Vision & Image Recognition",
      description:
        "We create AI vision systems for object detection, facial recognition, and intelligent image analysis.",
    },
    {
      id: 5,
      iconPath: <DeepLearningIcon />,
      title: "Generative AI & Deep Learning",
      description:
        "We build advanced AI models for content generation, automation, and complex data-driven problem solving.",
    },
    {
      id: 6,
      iconPath: <AiPoweredIcon />,
      title: "AI-Powered Recommendation Systems",
      description:
        "We develop AI recommendation engines that personalize content, products, and customer experiences.",
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
            Our AI & Machine Learning Services
          </h2>
          <p className="font-outfit font-normal text-p leading-[1.3] text-textColor max-w-[890px] mx-auto px-4">
            We don't just create strategies we show the numbers. Growth means
            higher conversions, lower costs, and stronger brands. Discover how
            we help brands grow smarter
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-[3px] border-primary gap-0">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card group relative bg-black hover:bg-primary
  border-[3px] border-primary sm:p-5 p-2
  transition-all duration-500 ease-in-out 
  overflow-hidden
  ">
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false }}>
                {/* Icon Container */}
                <div className=" flex w-full  justify-between gap-2 group">
                  {/* Title */}
                  <h3
                    className="font-outfit font-semibold text-white
  text-title leading-[1.3]
  mb-[clamp(12px,1.5vh,20px)]
  line-clamp-2">
                    {service.title}
                  </h3>
                  <div className="group-hover:text-black text-primary">
                    {service.iconPath}
                  </div>
                </div>

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

export default AiServicesSection;
