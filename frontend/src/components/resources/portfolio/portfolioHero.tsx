import React from "react";
import { Link } from "react-router-dom";
import bgImage from "@/assets/resources/portfolio/hero-bg.png";

const PortfolioHero = () => {
  return (
    <section className="relative bg-[#02070F] min-h-screen w-full flex items-center justify-center px-4 py-16 sm:py-24 overflow-hidden">
      {/* Background glow circle image — full section */}
      <img
        src={bgImage}
        alt=""
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none w-[734px] max-w-full h-auto"
      />
      {/* ── Card sits on top of bg image ── */}
      <div
        className="relative z-10 careerHeroImg_Edge"
        style={{
          // left and right 1px gradient strips
          border: "1px solid transparent",
          backgroundImage:
            "linear-gradient(180deg, #02070F 0%, #103775 100%), linear-gradient(180deg,#000000 0%,#000000 6.73%,#4285F4 55.77%,#000000 97.12%)",
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
        }}>
        {/* Content */}
        <div className="flex flex-col items-center justify-center text-center px-[clamp(16px,2.8vw,32px)]  py-[clamp(32px,6vw,64px)]  gap-10">
          <h2 className="font-stoke text-white text-[clamp(30px,4.8vw,50px)] font-normal leading-tight tracking-wide uppercase">
            We Create Digital
            <br />
            Experiences That
            <br />
            Matter
          </h2>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link to="/services">
              <button className="px-8 py-3 bg-primary text-sm sm:text-base font-outfit font-bold text-white tracking-wide transition-all duration-200 hover:opacity-90 hover:scale-105">
                View Service
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-8 py-3 bg-primary text-sm sm:text-base font-outfit font-bold text-white tracking-wide transition-all duration-200 hover:opacity-90 hover:scale-105">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
