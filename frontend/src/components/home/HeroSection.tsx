// import AnimatedText from "../ui/animatedText";
// import { ArrowRight } from "lucide-react";

// const HeroSection = () => {
//   return (
//     <section className="relative h-screen  flex justify-center items-center w-full overflow-hidden text-white">
//       {/* 🔹 Background Video */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute top-0 left-0 w-full min-h-full object-cover">
//         <source src="/src/assets/hero-video.mp4" type="video/mp4" />
//       </video>

//       {/* 🔹 HERO CONTENT (TRUE CENTER) */}
//       <div className="relative z-20 flex items-center mt-[17vh]  sm:mt-[24vh] justify-center  px-4">
//         <div className=" text-center">
//           <p
//             className="font-outfit
//     font-normal
//     text-[14px]
//     leading-[24px]
//     tracking-[0px]
//     text-center
//     max-w-[321px]
//     mx-auto
//     opacity-100 uppercase">
//             THOUGHTFUL DESIGN ACROSS <br /> BRANDS, PRODUCTS, AND DIGITAL
//             EXPERIENCES
//           </p>

//           {/* Heading */}
//           <h1 className="font-stoke leading-[45px] md:leading-snug tracking-widest mt-[22px] md:mt-3 md:mb-[19px] mb-[22px]">
//             <div className="overflow-hidden">
//               <AnimatedText
//                 text="DESIGN"
//                 className="text-[50px] md:text-[8vh]"
//               />
//             </div>
//             <div className="overflow-hidden">
//               <AnimatedText text="FOR" className="text-[50px] md:text-[8vh]" />
//             </div>
//             <div className="overflow-hidden">
//               <AnimatedText
//                 text="EVERYONE"
//                 className="text-[50px] md:text-[8vh]"
//               />
//             </div>
//           </h1>

//           {/* Description */}
//           <p
//             className=" font-outfit
//     font-normal
//     text-[14px]
//     leading-[24px]
//     tracking-[0px]
//     text-center
//     max-w-[321px]
//     mx-auto
//     opacity-100 uppercase">
//             Where ideas become clear, usable, and beautifully crafted.
//           </p>

//           {/* CTA */}
//           <div className="mt-[7.31vh] md:mt-[10.37vh] flex justify-center">
//             <button
//               style={{ paddingLeft: 14 }}
//               className="group flex items-center  gap-4 bg-[#0B23C8] px-1 py-1 text-lg tracking-wide hover:bg-blue-700 transition">
//               Get Started
//               <span className="bg-white w-[46px] h-[43px] text-black flex items-center justify-center transition group-hover:translate-x-1">
//                 <ArrowRight size={14} />
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

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
          <p className="font-outfit font-normal text-sm sm:text-base leading-relaxed tracking-wide text-center max-w-xs sm:max-w-md mx-auto opacity-100 uppercase  mt-16 sm:mt-20 lg:mt-24">
            THOUGHTFUL DESIGN ACROSS <br className="hidden sm:inline" />
            BRANDS, PRODUCTS, AND DIGITAL EXPERIENCES
          </p>

          {/* Main Heading - Responsive sizing */}
          <h1 className="font-serif leading-tight tracking-widest mt-8 sm:mt-10 lg:mt-12 mb-8 sm:mb-10 lg:mb-12">
            <div className="overflow-hidden">
              <AnimatedText
                text="DESIGN"
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
              />
            </div>
            <div className="overflow-hidden">
              <AnimatedText
                text="FOR"
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
              />
            </div>
            <div className="overflow-hidden">
              <AnimatedText
                text="EVERYONE"
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
              />
            </div>
          </h1>

          {/* Bottom Description */}
          <p className="font-outfit font-normal text-sm sm:text-base leading-relaxed tracking-wide text-center max-w-xs sm:max-w-md mx-auto opacity-100 uppercase">
            Where ideas become clear, usable, and beautifully crafted.
          </p>

          {/* CTA Button - Consistent spacing */}
          <div className="mt-12 sm:mt-16 lg:mt-20 flex justify-center">
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
