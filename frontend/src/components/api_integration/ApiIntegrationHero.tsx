import React from "react";
import heroImg from "@/assets/api_hero_img.png";

const ApiIntegrationHero = () => {
  return (
    <section
      style={{
        background:
          "linear-gradient(66.03deg, #629DFF -38.71%, #629DFF -38.7%, #000000 114.21%)",
      }}
      className="relative overflow-hidden min-h-screen py-20 lg:py-24">
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 h-full min-h-[calc(100vh-10rem)]">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-end h-full pb-20">
            <div className="space-y-6 lg:space-y-8">
              {/* Subtitle */}
              <p className="text-blue-200/90 font-outfit text-sm lg:text-base tracking-wide">
                Seamless brand experiences built to deliver long-term commercial
                value.
              </p>

              {/* Title */}
              <h1
                className="text-white font-stoke font-normal"
                style={{
                  fontSize: "clamp(32px, 5vw, 56px)",
                  lineHeight: "1.15",
                  letterSpacing: "0.02em",
                }}>
                API Development <br />
                Services
              </h1>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-start justify-center lg:justify-end  h-full">
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
      </div>
    </section>
  );
};

export default ApiIntegrationHero;
