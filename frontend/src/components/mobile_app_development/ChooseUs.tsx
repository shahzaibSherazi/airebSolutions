import React from "react";
// import { ArrowUpRight } from "lucide-react";
import ArrowUpRight from "../../assets/icons/top-left.png";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "User-Centric UI/UX for Engaging Apps & Games",
    },
    {
      id: 2,
      title: "Full-Cycle App & Game Development for the Digital Era",
    },
    {
      id: 3,
      title: "Agile Development with Real-Time Collaboration",
    },
    {
      id: 4,
      title: "Future-Ready Apps with Enterprise-Grade Security",
    },
    {
      id: 5,
      title: "Advanced Frameworks. Smarter Solutions.",
    },
    {
      id: 6,
      title: "Consistent Performance on Every Device",
    },
  ];

  return (
    <section className="relative w-full bg-[#0a1e6e] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Container */}
      <div className=" px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <span className="inline-block bg-primary text-white text-xs sm:text-base font-outfit font-medium px-4 sm:px-7 py-1.5 sm:py-2 border ">
            Why Choose Us
          </span>
        </div>

        {/* Heading */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-outfit font-thin leading-10 lg:leading-[72px] ">
            An established partner that can speed
            <br className="hidden sm:block" />
            up innovation, with a focus on real-
            <br className="hidden sm:block" />
            world applications
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-[#041167] border-2 border-[#7474741F] px-4 sm:px-5 md:px-6 py-6 md:py-8 transition-all duration-300 hover:bg-[#0d2999] hover:border-blue-700 cursor-pointer overflow-hidden">
              {/* Card Content */}
              <div className="relative z-10">
                {/* Text */}
                <h3 className="text-white font-outfit text-sm sm:text-base md:text-xl font-normal leading-relaxed pr-8  ">
                  {feature.title}
                </h3>
              </div>

              {/* Arrow Icon with Curved Line - Bottom Right Corner */}
              <div className="absolute bottom-0 right-0 w-16 h-16 curved-line">
                {/* Arrow Icon */}
                <div className="absolute bottom-2 right-2">
                  <img
                    src={ArrowUpRight}
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform duration-300 group-hover:-translate-x-1 "
                  />
                </div>
              </div>

              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
