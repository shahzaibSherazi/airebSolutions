import React from "react";
import ChooseUsAnimated from "../web_development/components/ChoosUsAnimated";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Developers and architects with a lot of experience in APIs",
    },
    {
      id: 2,
      title: "Code that is clean, easy to read, and easy to scale",
    },
    {
      id: 3,
      title: "Integration tactics that are good for business",
    },
    {
      id: 4,
      title: "Safe solutions that focus on performance",
    },
    {
      id: 5,
      title: "A clear and smooth way to talk to each other",
    },
  ];

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #000000 61.15%, #0E1828 100%)",
      }}
      className=" w-full ">
      {/* Container */}
      <div className="container py-16  lg:py-24 px-2 lg:px-8 flex flex-col justify-center items-center ">
        {/* Badge */}
        <span className="inline-block mb-8 sm:mb-10 md:mb-12 bg-primary text-white text-xs sm:text-base font-outfit font-medium px-4 sm:px-7 py-1.5 sm:py-2 ">
          Why Choose Us
        </span>
        <ChooseUsAnimated />
        {/* Features Grid */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          {/* First Row - 3 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {features.slice(0, 3).map((feature) => (
              <div
                key={feature.id}
                className="group flex justify-center items-center text-center  bg-black border-2 border-[#7474741F] px-4 sm:px-5 md:px-6 py-6 md:py-8 transition-all duration-300 hover:bg-primary hover:border-blue-700 cursor-pointer overflow-hidden">
                {/* Card Content */}
                {/* Text */}
                <h3 className="text-primary group-hover:text-black font-outfit text-sm sm:text-base md:text-xl font-normal leading-relaxed ">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 w-full lg:w-2/3">
              {features.slice(3, 5).map((feature) => (
                <div
                  key={feature.id}
                  className="group flex justify-center items-center text-center bg-black border-2 border-[#7474741F] px-4 sm:px-5 md:px-6 py-6 md:py-8 transition-all duration-300 hover:bg-primary hover:border-blue-700 cursor-pointer overflow-hidden">
                  {/* Card Content */}
                  {/* Text */}
                  <h3 className="text-primary group-hover:text-black font-outfit text-sm sm:text-base md:text-xl font-normal leading-relaxed ">
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          <p className="text-white text-center font-outfit text-sm sm:text-base  font-light leading-relaxed">
            Affordable prices for high-quality API solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
