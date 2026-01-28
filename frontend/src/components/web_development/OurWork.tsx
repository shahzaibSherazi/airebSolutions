import React from "react";
import workImg from "../../assets/ourWork_img.png";
const OurWork = () => {
  return (
    <section className=" w-full bg-black py-8 lg:py-[41] overflow-hidden">
      {/* Container */}
      <div className=" px-4 sm:px-6 lg:px-8 py-24 rounded-[17px] bg-white">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 w-full lg:w-auto text-center lg:text-left">
            {/* Label */}
            <div className="inline-block mb-4 sm:mb-10 border-025 px-3 py-[1.5] sm:px-5 sm:py-1 ">
              <p className="text-xs sm:text-base font-light font-outfit text-black tracking-[-1px] uppercase ">
                See Our Work
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal font-stoke text-black mb-4 sm:mb-6">
              How we get it done
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg font-outfit font-light text-[#141414] mb-6 sm:mb-12 max-w-lg mx-auto lg:mx-0">
              Dive into our collection of projects that showcase creativity,
              precision, and purpose.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button className="w-full font-outfit font-bold text-sm md:text-lg sm:w-auto px-6 sm:px-7 py-2 sm:py-[9px] bg-white text-gray-900 rounded border-025 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
                Discover It
              </button>
              <button className="w-full font-outfit font-bold text-sm md:text-lg sm:w-auto px-6 sm:px-7 py-2 sm:py-[9px] bg-white text-gray-900 rounded border-025 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
                Start A Project
              </button>
            </div>
          </div>

          {/* Right Image  */}
          <div className=" flex w-full lg:w-auto items-center justify-center">
            {/* <div className="relative max-w-[552px] w-full"> */}
            <img src={workImg} className="w-full h-full" />
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
