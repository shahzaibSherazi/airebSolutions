import React from "react";
import HeroImg from "@/assets/Dialer_assets/hero_img.svg?react";

const DialerHero = () => {
  return (
    <section
      style={{
        background:
          "linear-gradient(66.03deg, #629DFF -38.71%, #629DFF -38.7%, #000000 114.21%)",
      }}
      className="heros_height relative overflow-hidden  flex items-center">
      <div className="container px-6 lg:px-8 py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-2 w-full h-full ">
        {/* Left Side - Content */}
        <div className="flex flex-col gap-4 justify-end">
          {/* Title */}
          <h1 className="text-textColor text-h1 font-stoke font-normal">
            AI-Powered Custom <br className="hidden lg:block" />
            Dialer Solutions
          </h1>
          {/* Subtitle */}
          <p className="text-textColor font-outfit text-p tracking-wide">
            We provide advanced AI-powered dialer solutions to automate outbound
            calls, make agents more productive, and get customers more involved.
            We help organizations get more conversions, better manage leads, and
            give customers personalized communication experiences by using AI,
            predictive analytics, and smart automation together.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 w-fit gap-3 sm:gap-4">
            <button className="font-outfit font-bold text-sm md:text-lg  px-6 sm:px-7 py-2 sm:py-[9px] bg-black text-textColor rounded border-025 hover:bg-textColor hover:text-black transition-all duration-300 shadow-md hover:shadow-lg">
              Discover It
            </button>
            <button className="font-outfit font-bold text-sm md:text-lg  px-6 sm:px-7 py-2 sm:py-[9px] bg-black text-textColor rounded border-025 hover:bg-textColor hover:text-black transition-all duration-300 shadow-md hover:shadow-lg">
              Start A Project
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center lg:justify-end w-full h-[100%]">
          <HeroImg className="w-full h-[100%] object-contain" />
        </div>
      </div>
    </section>
  );
};

export default DialerHero;
