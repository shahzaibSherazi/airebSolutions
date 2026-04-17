import React from "react";
import heroImg from "@/assets/Industies/travel-hospitality/hero-img.png";
import bgImg from "@/assets/Industies/travel-hospitality/hero-bg.png";

const TravelHospitalityHero = () => {
  return (
    <section className="heros_height flex justify-end flex-col  relative overflow-hidden ">
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
            " linear-gradient(257.21deg, rgba(98, 157, 255, 0.6) 1.73%, rgba(0, 0, 0, 0.3) 41.65%, #192C4B 90.02%)",
        }}
        className="absolute inset-0"
      />
      <div className="container px-2 lg:px-8 py-8 lg:py-10 grid lg:grid-cols-2 gap-12 lg:gap-20 h-full">
        {/* Left Side - Content */}
        <div className="relative flex flex-col justify-end mb-8">
          <p
            style={{
              background: "linear-gradient(180deg, #4285F4 0%, #02070F 100%)",
            }}
            className="font-outfit text-[clamp(14px,1.5vw,22px)] font-bold mb-[2vh] sm:mb-[4vh] border border-primary rounded-sm w-fit px-10 py-3 ">
            Sector
          </p>

          <h1 className="font-stoke text-h1 leading-[1.28] text-white">
            Travel & Hospitality
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

export default TravelHospitalityHero;
