import React from "react";
import heroImg from "@/assets/Industies/retail/hero-img.webp";
import bgImg from "@/assets/Industies/retail/bg-img.webp";

const RetailHero = () => {
  return (
    <section className="heros_height relative overflow-hidden flex flex-col justify-center ">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      />
      {/* Gradient Overlay */}
      <div
        style={{
          background:
            "linear-gradient(257.21deg, #4285F4 1.73%, rgba(0, 0, 0, 0.7) 41.65%, #192C4B 98.27%)",
        }}
        className="absolute inset-0"
      />
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 h-full py-8 lg:py-10">
        {/* Left Side - Content */}
        <div className="relative flex flex-col items-center lg:items-start justify-center mb-8">
          <div
            style={{
              background: "linear-gradient(180deg, #4285F4 0%, #02070F 100%)",
            }}
            className="mb-[2vh] sm:mb-[3vh] border border-primary rounded-sm w-fit px-10 py-3">
            <p className="font-outfit text-[clamp(14px,1.5vw,22px)] font-bold ">
              Sector
            </p>
          </div>

          <h1 className="font-stoke text-center lg:text-start text-h1 leading-[1.28] text-white">
            Retail & Consumer Goods
          </h1>
        </div>

        {/* Right Side */}
        <div className="flex items-start justify-center lg:justify-end  h-full">
          <div
            className="relative"
            style={{
              width: "100%",
              maxWidth: "450px",
              aspectRatio: "450 / 450",
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

export default RetailHero;
