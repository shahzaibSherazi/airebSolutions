import { useEffect, useRef, useState } from "react";
import LogoSlider from "../ui/logoSlider";
import BtnIcon from "@/assets/icons/btn_icon.svg?react";
import { useInView } from "framer-motion";

const ResultSection = () => {
  const [counts, setCounts] = useState({ count95: 0, count45: 0, count99: 0 });
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const targets = { count95: 95, count45: 45, count99: 99 };
  const duration = 2000; // all counters animate over 2 seconds

  useEffect(() => {
    if (!isInView) return;

    let start = null;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const newCounts = {};

      Object.keys(targets).forEach((key) => {
        // Calculate the value based on linear progress
        const value = Math.min(
          Math.floor((progress / duration) * targets[key]),
          targets[key],
        );
        newCounts[key] = value;
      });

      setCounts(newCounts);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView]);

  return (
    <section ref={sectionRef} className="bg-primary w-full ">
      {/* Header */}
      <div className="container flex flex-col px-6 lg:px-8 py-16 lg:py-24 items-center">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-1 lg:gap-0 w-full ">
          <div className="flex flex-col md:gap-[30px] gap-[7px] lg:w-1/3">
            <h1 className="text-xl font-normal text-white">Results</h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-stoke lg:text-white text-black">
              Impact you can feel
            </p>
          </div>
          <p className="text-white text-base font-normal font-outfit leading-[28px] lg:w-1/3">
            Our approach allows us to deliver exceptional experiences that drive
            growth and success for all stakeholders. Let's rise to new heights
            with the power of digital transformation.
          </p>
          <button className="group hidden md:flex lg:justify-end items-center gap-2 text-textColor bg-black text-xs sm:text-sm font-medium px-[21px] py-[18px] hover:bg-white hover:text-black transition whitespace-nowrap">
            Read More About Us
            <BtnIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-current  transition-colors duration-300" />
          </button>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col sm:flex-row gap-6 md:pt-[50px] pt-[56px] lg:gap-12 w-full">
          <div className="flex flex-col items-start sm:flex-1 gap-2">
            <p className="text-black font-normal text-[24px] sm:text-[42px]">
              {counts.count95}%
            </p>
            <p className="text-textColor text-sm text-left">
              Clients who stay because we consistently deliver results
            </p>
          </div>

          <div className="flex flex-col items-start sm:flex-1 gap-2 lg:border-l-2 lg:pl-4 border-textColor">
            <p className="text-black font-normal text-[24px] sm:text-[42px]">
              {counts.count45}%
            </p>
            <p className="text-textColor text-sm text-left">
              Conversion growth driven by thoughtful design and optimisation
            </p>
          </div>

          <div className="flex flex-col items-start sm:flex-1 gap-2 lg:border-l-2 lg:pl-4 border-textColor">
            <p className="text-black font-normal text-[24px] sm:text-[42px]">
              {counts.count99}%
            </p>
            <p className="text-textColor text-sm text-left">
              Reliable, secure systems that perform with unwavering stability
            </p>
          </div>

          <div className="md:hidden justify-start pt-6 sm:pt-8">
            <button className="group inline-flex items-center gap-2 text-textColor bg-black text-xs sm:text-sm font-medium px-[21px] py-[18px] hover:bg-white hover:text-black transition whitespace-nowrap">
              Read More About Us
              <BtnIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-current  transition-colors duration-300" />
            </button>
          </div>
        </div>

        {/* Footer Slider */}
        <div className="w-full mt-[clamp(64px,8vh,111px)]">
          <LogoSlider />
        </div>
      </div>
    </section>
  );
};

export default ResultSection;
