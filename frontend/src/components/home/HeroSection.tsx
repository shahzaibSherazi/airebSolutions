import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import bgVideo from "@/assets/hero-video.mp4";

// AnimatedText component
const AnimatedText = ({ text, className }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <span
      className={`inline-block transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      } ${className}`}>
      {text}
    </span>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex justify-center items-center w-full overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover">
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-black/40 z-10"></div> */}

      {/* HERO CONTENT - Centered with consistent spacing */}
      <div className="relative z-20 flex items-center justify-center w-full h-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center max-w-7xl mx-auto">
          {/* Top Description */}
          <p className="font-outfit font-normal text-sm sm:text-base leading-relaxed tracking-wide text-center max-w-xs sm:max-w-md mx-auto opacity-100 uppercase  mt-16 sm:mt-20 lg:mt-16">
            THOUGHTFUL DESIGN ACROSS <br className="hidden sm:inline" />
            BRANDS, PRODUCTS, AND DIGITAL EXPERIENCES
          </p>

          {/* Main Heading - Responsive sizing */}
          <h1 className="font-stoke leading-tight tracking-widest mt-8 lg:mt-10 mb-8 lg:mb-10">
            <div className="overflow-hidden">
              <AnimatedText text="DESIGN" className="hero-heading" />
            </div>
            <div className="overflow-hidden">
              <AnimatedText text="FOR" className="hero-heading" />
            </div>
            <div className="overflow-hidden">
              <AnimatedText text="EVERYONE" className="hero-heading" />
            </div>
          </h1>

          {/* Bottom Description */}
          <p className="font-outfit font-normal text-sm sm:text-base leading-relaxed tracking-wide text-center max-w-xs sm:max-w-md mx-auto opacity-100 uppercase">
            Where ideas become clear, usable, and beautifully crafted.
          </p>

          {/* CTA Button - Consistent spacing */}
          <div className="mt-12 sm:mt-16 lg:mt-12 flex justify-center">
            <button className="group flex items-center gap-3 sm:gap-4 bg-[#0B23C8] pl-4 sm:pl-6 pr-1 py-1 text-base sm:text-lg tracking-wide hover:bg-blue-700 transition-all duration-300">
              <span className="whitespace-nowrap">Get Started</span>
              <span className="bg-white w-11 h-11 sm:w-12 sm:h-12 text-black flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowRight size={16} className="sm:w-5 sm:h-5" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
