import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import bgImage from "@/assets/resources/portfolio/hero-bg.png";
import { smoothScroll } from "@/lib/smooth-scroll";

const PortfolioHero = () => {
  const scrollToContact = useCallback(() => {
    const el = document.getElementById("contact-form");
    if (!el) return;

    const lenis = smoothScroll.getInstance();

    if (lenis) {
      lenis.scrollTo(el, {
        offset: -100, // header height adjust
        duration: 1.2,
        immediate: false,
      });
    } else {
      // fallback if reduced motion or Lenis disabled
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);
  return (
    <section className="heros_height relative bg-[#02070F] w-full flex items-center justify-center  overflow-hidden px-2 lg:px-8 py-8 lg:py-10">
      {/* Background glow circle image — full section */}
      <img
        src={bgImage}
        alt=""
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none w-[734px] max-w-full h-auto"
      />
      {/* ── Card sits on top of bg image ── */}
      <div
        className=" relative z-10 careerHeroImg_Edge "
        style={{
          // left and right 1px gradient strips
          border: "1px solid transparent",
          backgroundImage:
            "linear-gradient(180deg, #02070F 0%, #103775 100%), linear-gradient(180deg,#000000 0%,#000000 6.73%,#4285F4 55.77%,#000000 97.12%)",
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
        }}>
        {/* Content */}
        <div className="flex flex-col items-center justify-center text-center px-[clamp(8px,2.8vw,32px)]  py-[clamp(32px,6vw,64px)]  gap-10">
          <h2 className="font-stoke text-white text-h2 font-normal leading-tight tracking-wide uppercase">
            We Create Digital
            <br />
            Experiences That
            <br />
            Matter
          </h2>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link
              to="/services"
              className="px-8 py-3 flex w-fit bg-primary text-sm sm:text-base font-outfit font-bold text-white tracking-wide transition-all duration-200 hover:opacity-90 hover:scale-105">
              View Service
            </Link>
            <button
              onClick={scrollToContact}
              className="px-9 py-3 flex w-fit bg-primary text-sm sm:text-base font-outfit font-bold text-white tracking-wide transition-all duration-200 hover:opacity-90 hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
