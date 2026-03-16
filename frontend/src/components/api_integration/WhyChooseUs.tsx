import React from "react";
import ChooseUsAnimated from "../web_development/components/ChoosUsAnimated";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Agile Development Approach",
      description:
        "We use Agile methodologies for seamless execution, ensuring flexibility, efficiency, and continuous collaboration",
    },
    {
      id: 2,
      title: "Secure & Scalable Solutions",
      description:
        "Security first with encryption, authentication, and compliance for user protection",
    },
    {
      id: 3,
      title: "Transparent Communication & Support",
      description:
        "We Building lasting client relationships with clear communication, timely delivery, and support.",
    },
    {
      id: 4,
      title: "Secure & Scalable Solutions",
      description:
        "Security first with encryption, authentication, and compliance for user protection",
    },
    {
      id: 5,
      title: "Transparent Communication & Support",
      description:
        "We Building lasting client relationships with clear communication, timely delivery, and support.",
    },
  ];

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #000000 61.15%, #0E1828 100%)",
      }}
      className=" w-full py-16  lg:py-24 ">
      {/* Container */}
      <div className="flex flex-col justify-center items-center px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <span className="inline-block bg-primary text-white text-xs sm:text-base font-outfit font-medium px-4 sm:px-7 py-1.5 sm:py-2 ">
            Why Choose Us
          </span>
        </div>
        <ChooseUsAnimated />
        {/* Features Grid */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          {/* First Row - 3 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {features.slice(0, 3).map((feature) => (
              <div
                key={feature.id}
                className="group flex flex-col  items-center text-center space-y-4  bg-black border-2 border-[#7474741F] px-4 sm:px-5 md:px-6 py-6 md:py-8 transition-all duration-300 hover:bg-primary hover:border-blue-700 cursor-pointer overflow-hidden">
                {/* Card Content */}
                {/* Text */}
                <h3 className="text-primary group-hover:text-black font-outfit text-sm sm:text-base md:text-xl font-normal leading-relaxed ">
                  {feature.title}
                </h3>
                <p className="text-white font-outfit text-sm sm:text-base  font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 w-full lg:w-2/3">
              {features.slice(3, 5).map((feature) => (
                <div
                  key={feature.id}
                  className="group flex flex-col  items-center text-center space-y-4  bg-black border-2 border-[#7474741F] px-4 sm:px-5 md:px-6 py-6 md:py-8 transition-all duration-300 hover:bg-primary hover:border-blue-700 cursor-pointer overflow-hidden">
                  {/* Card Content */}
                  {/* Text */}
                  <h3 className="text-primary group-hover:text-black font-outfit text-sm sm:text-base md:text-xl font-normal leading-relaxed ">
                    {feature.title}
                  </h3>
                  <p className="text-white font-outfit text-sm sm:text-base  font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
