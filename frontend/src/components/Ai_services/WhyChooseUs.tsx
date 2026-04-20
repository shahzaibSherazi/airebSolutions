import React from "react";
import { motion } from "framer-motion";
import DeepLearningIcon from "../../assets/icons/AI-services-icons/machine-learning.svg?react";
import CustomAiIcon from "../../assets/icons/AI-services-icons/custom_ai.svg?react";
import ScalableIcon from "../../assets/icons/AI-services-icons/computer-vision.svg?react";
const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "AI engineers and data scientists with a lot of experience",

      size: "small",
      color: "dark-blue",
      icon: <DeepLearningIcon />,
    },
    {
      id: 2,
      title: "AI solutions made just for your business needs",

      size: "small",
      color: "bright-blue",
      icon: <CustomAiIcon />,
    },
    {
      id: 3,
      title: "AI architecture that can grow and is ready for the future",

      size: "small",
      color: "dark-blue",
      icon: <ScalableIcon />,
    },
    {
      id: 4,
      title: "Business-focused way to put AI into action",

      size: "small",
      color: "dark-blue",
      icon: <DeepLearningIcon />,
    },
    {
      id: 5,
      title: "Delivery on time with clear communication",

      size: "small",
      color: "dark-blue",
      icon: <DeepLearningIcon />,
    },
    {
      id: 6,
      title: "A strong focus on security, accuracy, and performance",

      size: "small",
      color: "dark-blue",
      icon: <DeepLearningIcon />,
    },
  ];

  return (
    <div className=" text-white  bg-primary">
      {/* Header */}
      <div className="container py-16 lg:py-24 px-2 lg:px-8">
        <motion.div
          className="text-center mb-16 md:mb-[85px]"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}>
          <h1 className="text-h2 font-normal font-stoke leading-[56px] mb-[15px]">
            Why Choose Us
          </h1>
          <p className="text-white font-outfit font-normal text-p leading-[40px]">
            We Design for the Future to Drive Today's Success
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-4 ">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="rounded-[5px] px-4 py-6 border-025 group transition-all duration-300 ease-out
hover:-translate-y-2 hover:scale-[1.01]">
              <h3 className="text-lg text-textColor  font-outfit ">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
        <p className="text-center text-textColor font-outfit font-normal text-p leading-[40px] mt-10">
          AI solutions that are cheap and give you a high return on investment
        </p>
      </div>
    </div>
  );
};

export default WhyChooseUs;
