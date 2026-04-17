import React from "react";
import { motion } from "framer-motion";
import IdeationIcon from "@/assets/logoDesign_assets/ideation_icon.svg?react";
import InvestigationIcon from "@/assets/logoDesign_assets/investigation_icon.svg?react";
import IterationIcon from "@/assets/logoDesign_assets/iteration_icon.svg?react";
import ImplementationIcon from "@/assets/logoDesign_assets/implementation_icon.svg?react";
const LogoDesignDevelopment = () => {
  const processes = [
    {
      icon: <IdeationIcon />,
      title: "Ideation",

      description:
        "We start with your vision or help shape one through brainstorming and discussions. By creatively aligning with your business essence, we craft a brand image that authentically tells your story.",
    },
    {
      icon: <InvestigationIcon />,
      title: "Investigation",

      description:
        "Understanding your audience's preferences is key to designing elements that attract and engage them. We carefully choose the visuals and styles that resonate with your target market, ensuring a strong and lasting connection.",
    },
    {
      icon: <IterationIcon />,
      title: "Iteration",

      description:
        "We seamlessly blend your brand identity with research insights to create visually compelling elements. Through multiple design iterations, we refine and perfect the best combination for maximum impact.",
    },
    {
      icon: <ImplementationIcon />,
      title: "Implementation",

      description:
        "We are dedicated to elevating your brand message by seamlessly integrating your logo across all platforms. Our commitment goes beyond the competition, ensuring your logo stands out and leaves a lasting impression.",
    },
    {
      icon: <IdeationIcon />,
      title: "Ideation",

      description:
        "We start with your vision or help shape one through brainstorming and discussions. By creatively aligning with your business essence, we craft a brand image that authentically tells your story.",
    },
  ];

  return (
    <section className="w-full bg-[#0E1828] ">
      <div className=" max-w-5xl mx-auto py-16  lg:py-24 px-2 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}>
          <h2 className="text-white font-stoke text-h2 font-extralight mb-4 sm:mb-6">
            Our Development Process
          </h2>
          <p className="text-textColor font-outfit text-p max-w-3xl mx-auto">
            At Aireb Solutions, we follow a streamlined on-demand app
            development
            <br className="hidden sm:block" />
            cycle that ensures efficiency and innovation
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-0">
          {processes.map((process, index) => (
            <div
              key={index}
              className="border-b border-l border-r border-primary px-3">
              <div className="grid grid-cols-1 lg:grid-cols-[1.8fr,3fr] gap-6 lg:gap-0 py-4 md:py-6">
                {/* Left Column - Title */}
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <div>{process.icon}</div>
                  <h3 className="text-white text-title font-stoke font-light leading-tight">
                    {process.title}
                  </h3>
                </div>

                {/* Right Column - Description */}
                <div className="flex items-center text-center md:text-start">
                  <p className="text-textColor font-outfit text-sm sm:text-base font-light leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoDesignDevelopment;
