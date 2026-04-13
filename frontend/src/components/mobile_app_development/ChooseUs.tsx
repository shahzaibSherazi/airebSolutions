import React from "react";
import ArrowUpRight from "../../assets/icons/top-left.png";
import { motion } from "framer-motion";
const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Smart UI/UX designers and mobile app developers",
    },
    {
      id: 2,
      title: "Apps that are easy to grow, keep up with, and work well",
    },
    {
      id: 3,
      title: "Mobile methods that help businesses",
    },
    {
      id: 4,
      title: "Getting projects done on time",
    },
    {
      id: 5,
      title: "Clear communication all the way through the development phase",
    },
    {
      id: 6,
      title: "A lot of attention is paid to safety and reliability.",
    },
  ];

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #000000 0%, #0E1828 100%)",
      }}
      className="relative w-full py-16 lg:py-24 overflow-hidden">
      {/* Container */}
      <div className="px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <span className="inline-block bg-primary text-white text-xs sm:text-base font-outfit font-medium px-4 sm:px-7 py-1.5 sm:py-2 border ">
            Why Choose Us
          </span>
        </div>

        {/* Heading */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}>
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-outfit leading-10 lg:leading-[72px] ">
              Why you should choose Aireb Solutions for <br /> your Mobile Apps
            </h2>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-[#0E1828] border-2 border-[#7474741F] px-4  py-6 md:py-8 transition-all duration-300 hover:bg-primary cursor-pointer overflow-hidden sm:min-h-[150px] h-full flex flex-col">
              {/* Card Content */}
              <div className="relative z-10 flex-1 flex flex-col">
                {/* Text with fixed height and overflow handling */}
                <div className=" overflow-hidden">
                  <h3 className="text-white font-outfit text-sm sm:text-base md:text-xl font-normal leading-relaxed pr-8 line-clamp-2 h-full">
                    {feature.title}
                  </h3>
                </div>
              </div>

              {/* Arrow Icon with Curved Line - Bottom Right Corner */}
              <div className="">
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
              </div>

              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
        <p className="text-white text-center text-sm sm:text-base md:text-lg font-outfit font-normal leading-relaxed mt-10">
          Affordable solutions without compromising quality.
        </p>
      </div>
    </section>
  );
};

export default WhyChooseUs;
