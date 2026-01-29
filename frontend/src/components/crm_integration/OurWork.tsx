import React from "react";
import workImg from "../../assets/mobile_work_img.png";
const OurWork = () => {
  return (
    <section className=" w-full bg-black pt-8 lg:pt-[41] overflow-hidden">
      {/* Container */}
      <div className=" px-4 sm:px-6 lg:px-8 py-24  bg-white">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 w-full lg:w-auto text-center lg:text-left">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal md:leading-[55px] font-stoke text-black mb-4 sm:mb-6">
              Power Up Your Workflow with <br /> 50 + CRM Integration
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg font-outfit font-light text-[#141414] mb-6 sm:mb-12  lg:mx-0">
              Aireb Solutions empowers businesses with 50+ CRM integrations,
              streamlining workflows, automating processes, <br /> and ensuring
              seamless data synchronization for enhanced efficiency and
              productivity.
            </p>

            {/* Buttons */}
            <div className="flex items-center justify-center lg:justify-start">
              <button className="w-full font-outfit font-bold text-sm md:text-lg sm:w-auto px-6 sm:px-7 py-2 sm:py-[9px] bg-white text-primary rounded border-025 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
