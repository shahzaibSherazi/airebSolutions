import AnimatedText from "../ui/animatedText";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen  flex justify-center items-center w-full overflow-hidden text-white">
      {/* 🔹 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full min-h-full object-cover">
        <source src="/src/assets/hero-video.mp4" type="video/mp4" />
      </video>

      {/* 🔹 HERO CONTENT (TRUE CENTER) */}
      <div className="relative z-20 flex items-center mt-[17vh]  sm:mt-[24vh] justify-center  px-4">
        <div className=" text-center">
          <p
            className="font-outfit
    font-normal
    text-[14px]
    leading-[24px]
    tracking-[0px]
    text-center
    max-w-[321px]
    mx-auto
    opacity-100 uppercase">
            THOUGHTFUL DESIGN ACROSS <br /> BRANDS, PRODUCTS, AND DIGITAL
            EXPERIENCES
          </p>

          {/* Heading */}
          <h1 className="font-stoke leading-[45px] md:leading-snug tracking-widest mt-[22px] md:mt-3 md:mb-[19px] mb-[22px]">
            <div className="overflow-hidden">
              <AnimatedText
                text="DESIGN"
                className="text-[50px] md:text-[8vh]"
              />
            </div>
            <div className="overflow-hidden">
              <AnimatedText text="FOR" className="text-[50px] md:text-[8vh]" />
            </div>
            <div className="overflow-hidden">
              <AnimatedText
                text="EVERYONE"
                className="text-[50px] md:text-[8vh]"
              />
            </div>
          </h1>

          {/* Description */}
          <p
            className=" font-outfit
    font-normal
    text-[14px]
    leading-[24px]
    tracking-[0px]
    text-center
    max-w-[321px]
    mx-auto
    opacity-100 uppercase">
            Where ideas become clear, usable, and beautifully crafted.
          </p>

          {/* CTA */}
          <div className="mt-[7.31vh] md:mt-[10.37vh] flex justify-center">
            <button
              style={{ paddingLeft: 14 }}
              className="group flex items-center  gap-4 bg-[#0B23C8] px-1 py-1 text-lg tracking-wide hover:bg-blue-700 transition">
              Get Started
              <span className="bg-white w-[46px] h-[43px] text-black flex items-center justify-center transition group-hover:translate-x-1">
                <ArrowRight size={14} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
