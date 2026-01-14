import AnimatedText from "../ui/animatedText";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen md:mx-auto w-full overflow-hidden text-white">
      {/* 🔹 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full min-h-full object-cover">
        <source src="/src/assets/hero-video.mp4" type="video/mp4" />
      </video>

      {/* 🔹 Overlay */}
      {/* <div className="absolute inset-0 bg-[#050c22]/85" /> */}

      {/* 🔹 HERO CONTENT (TRUE CENTER) */}
      <div className="relative z-20 flex items-center h-full mt-[30vh] justify-center  px-6">
        <div className="max-w-[900px] text-center">
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
            THOUGHTFUL DESIGN ACROSS BRANDS, PRODUCTS, AND DIGITAL EXPERIENCES
          </p>

          {/* Heading */}
          <h1 className="font-serif leading-[1.05] tracking-tight">
            <div className="overflow-hidden">
              <AnimatedText text="DESIGN" className="text-[8vh]" />
            </div>
            <div className="overflow-hidden">
              <AnimatedText text="FOR" className="text-[8vh]" />
            </div>
            <div className="overflow-hidden">
              <AnimatedText text="EVERYONE" className="text-[8vh]" />
            </div>
          </h1>

          {/* Description */}
          <p
            className="mt-6 font-outfit
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
          <div className="mt-[10vh] mb-9 flex justify-center">
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
