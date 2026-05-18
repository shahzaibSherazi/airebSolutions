import React from "react";
import { motion } from "framer-motion";
const OnDemandDevelopment = () => {
  const processes = [
    {
      title: "Discovery & Strategy",
      subtitle: "Discovery Step",
      description:
        "Involves understanding business requirements, conducting market research, and analyzing competitors to define the project scope.",
    },
    {
      title: "UI/UX Design & Prototyping",
      subtitle: "Design step",
      description:
        "Focuses on creating user-friendly interfaces and developing interactive wireframes to visualize the user experience before development begins.",
    },
    {
      title: "Development & Integration",
      subtitle: "Development Step",
      description:
        "Includes writing code for both backend and frontend systems, integrating necessary APIs, and implementing features like AI-driven recommendations.",
    },
    {
      title: "Testing & Quality Assurance",
      subtitle: "",
      description:
        "Ensures the product is reliable and functional through various methods, including performance, security, and usability testing to fix bugs.",
    },
    {
      title: "Deployment & Scaling",
      subtitle: "",
      description:
        "Launches the final product and provides ongoing monitoring, updates, and scalability to meet future demand",
    },
  ];

  return (
    <section className="w-full bg-[#0E1828]">
      <div className="container py-16 lg:py-24">
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
              className="border-t border-gray-700 first:border-t-0">
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false }}>
                <div className="grid grid-cols-1 lg:grid-cols-[1.8fr,2fr] gap-6 lg:gap-10 py-4 sm:py-6 md:py-8">
                  {/* Left Column - Title */}
                  <div className="space-y-2">
                    <h3 className="text-white text-[clamp(18px,3vw,24px)] font-stoke font-light leading-[1.3]">
                      {process.title}
                    </h3>
                    {process.subtitle && (
                      <p className="text-textColor font-outfit font-light text-sm sm:text-base">
                        {process.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Right Column - Description */}
                  <p className="text-textColor flex items-center font-outfit text-sm sm:text-base font-light leading-[1.3]">
                    {process.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 mt-0"></div>
      </div>
    </section>
  );
};

export default OnDemandDevelopment;
