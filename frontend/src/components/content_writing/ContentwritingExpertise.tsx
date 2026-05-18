import React from "react";
import ArrowUpRight from "../../assets/icons/top-left.png";
import { motion } from "framer-motion";
const ContentWritingExpertise = () => {
  const features = [
    {
      id: 1,
      heading: "Content writers and SEO experts with a lot of experience",
    },
    {
      id: 2,
      heading: "Content that is high-quality and free of plagiarism",
    },
    {
      id: 3,
      heading: "Writing with SEO in mind to get better rankings",
    },
    {
      id: 4,
      heading: "Content strategy that focuses on conversions",
    },
    {
      id: 5,
      heading: "Delivery on time with quality that stays the same",
    },
    {
      id: 6,
      heading: "Communication that is clear and open",
    },
  ];

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #000000 0%, #0E1828 100%)",
      }}
      className="relative w-full  overflow-hidden">
      {/* Container */}
      <div className="container py-16 lg:py-24">
        {/* Badge */}
        <span className="inline-block bg-primary mb-8 sm:mb-10 md:mb-12 text-black text-xs sm:text-base font-outfit font-medium px-4 sm:px-7 py-1.5 sm:py-2 border ">
          Our Expertise
        </span>

        {/* Heading */}
        <motion.div
          className="mb-12 sm:mb-16 md:mb-20 lg:mb-24"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}>
          <h2 className="text-white text-h2 font-stoke font-thin leading-[1.3] ">
            Why pick Aireb Solutions for
            <br className="hidden sm:block" />
            Content Writing?
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-[#0E1828] border-2 border-[#7474741F] px-4  py-6 md:py-8 transition-all duration-300 hover:bg-primary overflow-hidden sm:min-h-[150px] h-full flex flex-col justify-center">
              {/* Card Content */}
              {/* Text with fixed height and overflow handling */}
              <h1 className="text-primary text-center relative z-10 group-hover:text-textColor font-outfit text-lg sm:text-xl md:text-2xl font-normal leading-[1.3] pr-8 mb-3 ">
                {feature.heading}
              </h1>

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
        <p className="text-white text-center text-sm sm:text-base md:text-lg font-outfit font-normal leading-relaxed mt-10 ">
          {" "}
          Affordable solutions that provide you the most value
        </p>
      </div>
    </section>
  );
};

export default ContentWritingExpertise;
