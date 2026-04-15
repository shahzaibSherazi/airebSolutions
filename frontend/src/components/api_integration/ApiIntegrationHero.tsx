import React from "react";
import heroImg from "@/assets/api_hero_img.png";

const ApiIntegrationHero = () => {
  return (
    <section
      style={{
        background:
          "linear-gradient(66.03deg, #629DFF -38.71%, #629DFF -38.7%, #000000 114.21%)",
      }}
      className="heros_height  flex flex-col justify-center overflow-hidden">
      <div className="container py-8 lg:py-10 px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
        {/* Left Side - Content */}
        <div className="flex flex-col gap-4 justify-end h-full ">
          {/* Title */}
          <h1 className="text-white text-h1 font-stoke font-normal">
            API Development <br />
            Services
          </h1>
          {/* Subtitle */}
          <p className="text-textColor font-outfit text-p tracking-wide">
            We build secure, scalable APIs that connect your systems and
            streamline operations. From custom APIs to third-party integrations,
            we ensure fast, reliable data flow to improve efficiency, enhance
            user experience, and support business growth.
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
        <div className="flex items-start justify-center lg:justify-end h-full">
          <div
            className="relative"
            style={{
              width: "100%",
              maxWidth: "671px",
              aspectRatio: "671 / 442",
            }}>
            <img
              src={heroImg}
              alt="API Development"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiIntegrationHero;
