import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import bgImg from "@/assets/service_hero_bg.png";
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
    <section
      className=" min-h-screen flex justify-center items-center w-full overflow-hidden text-white bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}>
      <div className=" flex md:justify-start justify-center md:items-start items-center w-full h-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="  ">
          <h1 className="font-stoke leading-10 md:text-start text-center lg:leading-[86px] mt-8 sm:mt-20 lg:mt-16 md:mb-0 mb-4 ">
            <div className="overflow-hidden">
              <AnimatedText
                text="AI Consulting, 
 
"
                className="text-4xl md:text-5xl lg:text-[62px]  "
              />
            </div>
            <div className="overflow-hidden">
              <AnimatedText
                text="IT & Digital"
                className="text-4xl md:text-5xl lg:text-[62px]"
              />
            </div>
            <div className="overflow-hidden">
              <AnimatedText
                text="Services"
                className="text-4xl md:text-5xl lg:text-[62px]"
              />
            </div>
          </h1>

          {/* Bottom Description */}
          <p className="font-outfit font-normal text-sm sm:text-base   max-w-xs sm:max-w-4xl  opacity-100 uppercase">
            We create modern websites and webshops powered by efficient code,
            intelligent architecture, and seamless brand experiences built to
            deliver long-term commercial value.
          </p>

          {/* CTA Button - Consistent spacing */}
          <div className="mt-12 sm:mt-16 lg:mt-20 flex md:justify-start justify-center">
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
