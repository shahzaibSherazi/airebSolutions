import React from "react";
import ArrowUpRight from "../../assets/icons/top-left.png";
import { motion } from "framer-motion";

const ChooseUs = () => {
  const features = [
    {
      id: 1,
      title:
        "A group of developers and integrators who have worked together for a long time",
    },
    {
      id: 2,
      title: "Safe and reliable ways to combine",
    },
    {
      id: 3,
      title: "Systems that can expand with your business",
    },
    {
      id: 4,
      title: "Approach based on automation",
    },
    {
      id: 5,
      title: "Clear communication and getting everything done on time",
    },
    {
      id: 6,
      title: "A heavy focus on data accuracy and performance",
    },
  ];

  return (
    <section className="relative w-full bg-primary overflow-hidden">
      {/* Container */}
      <div className="container py-16  lg:py-24">
        {/* Badge */}
        <span className="inline-block bg-primary mb-8 sm:mb-10 md:mb-12 text-black text-xs sm:text-base font-outfit font-medium px-4 sm:px-7 py-1.5 sm:py-2 border ">
          Why Choose Us
        </span>

        {/* Heading */}
        <motion.div
          className="mb-12 sm:mb-16 md:mb-20 lg:mb-24"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}>
          <h2 className="text-black text-h2 font-stoke font-thin leading-[1.3] ">
            Why you choose Aireb Solutions for <br /> API & CRM Integration
            Services
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative  border-025 hover:bg-black border-black px-4  py-6 md:py-8 transition-all duration-300 overflow-hidden sm:min-h-[150px] flex flex-col justify-center h-full">
              {/* Card Content */}
              {/* Text with fixed height and overflow handling */}
              <h3 className="text-white text-center font-outfit relative z-10 text-title font-normal leading-[1.3] pr-8  ">
                {feature.title}
              </h3>

              {/* Arrow Icon with Curved Line - Bottom Right Corner */}
              <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 curved-line">
                {/* Arrow Icon */}
                <div className="absolute bottom-2 right-2">
                  <img
                    src={ArrowUpRight}
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform duration-300 group-hover:-translate-x-1 "
                    alt="arrow icon"
                  />
                </div>
              </div>

              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
        <p className="text-white text-center text-p font-outfit font-normal leading-[1.3] mt-10">
          We deliver reliable integration solutions at a budget-friendly cost.
        </p>
      </div>
    </section>
  );
};

export default ChooseUs;
