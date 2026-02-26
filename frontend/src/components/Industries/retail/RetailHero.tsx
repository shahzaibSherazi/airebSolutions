import React from "react";
import heroImg from "@/assets/Industies/retail/hero-bg.png";

const RetailHero = () => {
  return (
    <section
      style={{
        background:
          "linear-gradient(257.21deg, #4285F4 1.73%, rgba(0, 0, 0, 0.3) 41.65%, #192C4B 88.19%)",
      }}
      className="relative overflow-hidden min-h-screen px-6 lg:px-8 py-16 lg:py-24">
      <div className="w-full h-full ">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 h-full min-h-[calc(100vh-10rem)]">
          {/* Left Side - Content */}
          <div className=" flex flex-col justify-end mb-8">
            <div
              style={{
                background: "linear-gradient(180deg, #4285F4 0%, #02070F 100%)",
              }}
              className="mb-[2vh] sm:mb-[3vh] border border-primary rounded-sm w-fit px-10 py-3">
              <p className="font-outfit text-[clamp(14px,1.5vw,22px)] font-bold ">
                Sector
              </p>
            </div>

            <h1 className="font-stoke text-[clamp(24px,5vw,56px)] leading-[1.28] text-white">
              Retail & Consumer
              <br />
              Goods
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
      </div>
    </section>
  );
};

export default RetailHero;
