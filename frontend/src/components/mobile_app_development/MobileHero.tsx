import React from "react";
import { ArrowRight } from "lucide-react";

const MobileHero = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#020b3a] via-[#061a7a] to-[#020b3a] overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT CONTENT */}
          <div
            className="text-white"
            style={{
              marginTop: "clamp(60px, 15vh, 291px)",
            }}>
            <h1 className="font-stoke font-medium leading-tight sm:text-start text-center text-[8vw] sm:text-[clamp(32px,5.5vh,52px)] mb-8">
              Transforming Ideas
              <br className="hidden lg:block" />
              into High-Performing
              <br className="hidden lg:block" />
              Mobile Apps & Games
            </h1>

            <p className="max-w-[520px] sm:text-start text-center font-outfit text-sm sm:text-base leading-relaxed text-white/90 mb-14">
              We create modern websites and webshops powered by efficient code,
              intelligent architecture, and seamless brand experiences built to
              deliver long-term commercial value.
            </p>
            <div className="flex sm:justify-start justify-center">
              <button className="group flex items-center  gap-3 sm:gap-4 bg-[#0B23C8] pl-4 sm:pl-6 pr-1 py-1 text-base sm:text-lg tracking-wide hover:bg-blue-700 transition-all duration-300">
                <span className="whitespace-nowrap">Get Started</span>
                <span className="bg-white w-11 h-11 sm:w-12 sm:h-12 text-black flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div
            className="
              relative
              flex
              justify-center
              lg:justify-end
              w-full
              lg:mt-[10vh]
              md:pb-0
              pb-10
            "
            style={
              {
                //   marginTop: "clamp(35px, 11vh, 208px)",
              }
            }>
            <div className="relative w-full max-w-[420px] h-[380px] sm:h-[420px] md:h-[460px] lg:h-[520px]">
              {/* Back rectangle */}
              <div
                className="
                  absolute
                  left-0
                  top-[14%]
                  w-[clamp(240px,60vw,338px)]
                  h-[clamp(280px,65vw,371px)]
                  border border-white/40
                "
                style={{ borderWidth: "0.25px" }}
              />

              {/* Front rectangle */}
              <div
                className="
                  absolute
                  right-0
                  top-0
                  w-[clamp(240px,60vw,338px)]
                  h-[clamp(280px,65vw,371px)]
                  border border-white/50
                "
                style={{ borderWidth: "0.25px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileHero;
