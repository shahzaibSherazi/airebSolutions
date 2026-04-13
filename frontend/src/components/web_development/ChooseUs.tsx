import React from "react";
import ChooseUsAnimated from "./components/ChoosUsAnimated";

const ChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Experienced web developers and UI/UX designers",
    },
    {
      id: 2,
      title: "Clean, scalable, and maintainable code",
    },
    {
      id: 3,
      title: "Business focus development approach",
    },
    {
      id: 4,
      title: "On-time project delivery",
    },
    {
      id: 5,
      title: "Transparent Communication Process",
    },
    {
      id: 6,
      title: "Strong focus on performance and security",
    },
  ];

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #000000 61.15%, #629DFF 100%)",
      }}
      className=" w-full bg-gradient-to-br py-16  lg:py-24 ">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group flex flex-col  items-center justify-center text-center  border-025 border-[#E4E4E4] px-4 sm:px-5 md:px-6 py-6 md:py-8 transition-all duration-300 hover:bg-primary  cursor-pointer overflow-hidden">
              {/* Card Content */}
              {/* Text */}
              <h3 className="text-white font-outfit text-sm sm:text-base md:text-xl font-normal leading-relaxed ">
                {feature.title}
              </h3>
              {/* <p className="text-white font-outfit text-sm sm:text-base  font-light leading-relaxed">
                {feature.description}
              </p> */}
            </div>
          ))}
        </div>
        <p className="mt-10 text-white font-outfit text-sm sm:text-base md:text-lg font-light leading-relaxed text-center">
          We do not just build a website, we build a reliable digital platforms
          that deliver results.
        </p>
      </div>
    </section>
  );
};

export default ChooseUs;
