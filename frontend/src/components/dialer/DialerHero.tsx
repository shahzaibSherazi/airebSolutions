import React from "react";
import HeroImg from "@/assets/Dialer_assets/hero_img.svg?react";

const DialerHero = () => {
  return (
    <section
      style={{
        background:
          "linear-gradient(66.03deg, #629DFF -38.71%, #629DFF -38.7%, #000000 114.21%)",
      }}
      className="relative overflow-hidden min-h-screen py-10 lg:py-24 flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-300/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="w-full h-full px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-2">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-end">
            <div className="space-y-6 lg:space-y-8 mb-[2vh] lg:mb-[3vh]">
              {/* Subtitle */}
              <p className="text-textColor font-outfit text-sm lg:text-base tracking-wide">
                Making it faster, more accurate, and cost-effective.
              </p>

              {/* Title */}
              <h1
                className="text-textColor font-stoke font-normal"
                style={{
                  fontSize: "clamp(32px, 5vw, 56px)",
                  lineHeight: "1.15",
                  //   letterSpacing: "0.02em",
                }}>
                AI-Powered Custom <br className="hidden lg:block" />
                Dialer Solutions
              </h1>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center lg:justify-end w-full h-[100%]">
            <HeroImg className="w-full h-[100%] object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DialerHero;
