// import { ArrowRight } from "lucide-react";
// import { useState, useEffect } from "react";
// import bgVideo from "@/assets/home/hero/hero-video.mp4";
// import AnimatedText from "../ui/LetterStagger";
// import heroPoster from "@/assets/home/hero/poster.jpeg";

// const HeroSection = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [completed, setCompleted] = useState([false, false, false]);
//   const [videoLoaded, setVideoLoaded] = useState(false);

//   const handleComplete = () => {
//     const next = activeIndex + 1;

//     const updated = [...completed];
//     updated[activeIndex] = true;
//     setCompleted(updated);

//     if (next < 3) {
//       setActiveIndex(next);
//     } else {
//       // all words completed
//       setTimeout(() => {
//         setCompleted([false, false, false]);
//         setActiveIndex(0);
//       }, 2000);
//     }
//   };
//   return (
//     <section className="relative min-h-screen flex justify-center items-center w-full overflow-hidden text-white">
//       {/* Background Video */}
//       {/* Background Image (shown while video loads) */}
//       <img
//         src={heroPoster}
//         alt="Hero background"
//         className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
//           videoLoaded ? "opacity-0" : "opacity-100"
//         }`}
//       />

//       {/* Background Video */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         onLoadedData={() => setVideoLoaded(true)}
//         className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
//           videoLoaded ? "opacity-100" : "opacity-0"
//         }`}>
//         <source src={bgVideo} type="video/mp4" />
//       </video>
//       {/* Dark Overlay for better text readability */}
//       {/* <div className="absolute inset-0 bg-black/40 z-10"></div> */}

//       {/* HERO CONTENT - Centered with consistent spacing */}
//       <div className="relative z-20 flex items-center justify-center w-full h-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
//         <div className="text-center max-w-7xl mx-auto">
//           {/* Top Description */}
//           <p className="font-outfit font-normal text-sm sm:text-base leading-relaxed tracking-wide text-center max-w-xs sm:max-w-md mx-auto opacity-100 uppercase  ">
//             THOUGHTFUL DESIGN ACROSS <br className="hidden sm:inline" />
//             BRANDS, PRODUCTS, AND DIGITAL EXPERIENCES
//           </p>

//           {/* Main Heading - Responsive sizing */}
//           <h1 className="font-stoke leading-tight tracking-widest mt-8 lg:mt-10 mb-8 lg:mb-10">
//             <div className="overflow-hidden">
//               <AnimatedText
//                 text="DESIGN"
//                 active={activeIndex === 0}
//                 completed={completed[0]}
//                 onComplete={handleComplete}
//                 className="text-[clamp(2.5rem,8vw,10rem)] sm:text-[clamp(2.5rem,8vh,10rem)] leading-[1.1]"
//               />
//             </div>
//             <div className="overflow-hidden">
//               <AnimatedText
//                 text="FOR"
//                 active={activeIndex === 1}
//                 completed={completed[1]}
//                 onComplete={handleComplete}
//                 className="text-[clamp(2.5rem,8vw,10rem)] sm:text-[clamp(2.5rem,8vh,10rem)] leading-[1.1]"
//               />
//             </div>
//             <div className="overflow-hidden">
//               <AnimatedText
//                 text="EVERYONE"
//                 active={activeIndex === 2}
//                 completed={completed[2]}
//                 onComplete={handleComplete}
//                 className="text-[clamp(2.5rem,8vw,10rem)] sm:text-[clamp(2.5rem,8vh,10rem)] leading-[1.1]"
//               />
//             </div>
//           </h1>

//           {/* Bottom Description */}
//           <p className="font-outfit font-normal text-sm sm:text-base leading-relaxed tracking-wide text-center max-w-xs sm:max-w-md mx-auto opacity-100 uppercase">
//             Where ideas become clear, usable, and beautifully crafted.
//           </p>

//           {/* CTA Button - Consistent spacing */}
//           <div className="mt-12 sm:mt-16 lg:mt-12 flex justify-center">
//             <button className="group flex items-center gap-3 sm:gap-4 bg-primary pl-4 sm:pl-6 pr-1 py-1 text-base sm:text-lg tracking-wide hover:bg-white transition-all duration-300">
//               <span className="whitespace-nowrap text-textColor group-hover:text-black">
//                 Get Started
//               </span>
//               <span className="bg-white group-hover:bg-primary w-11 h-11 sm:w-12 sm:h-12 text-black flex items-center justify-center transition-transform group-hover:translate-x-1">
//                 <ArrowRight size={16} className="sm:w-5 sm:h-5" />
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
import { useState, useEffect, useRef } from "react";
import bgVideo from "@/assets/home/hero/hero-video.mp4";
import heroPoster from "@/assets/home/hero/poster.jpeg";
import AnimatedText from "../ui/LetterStagger";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [completed, setCompleted] = useState([false, false, false]);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef(null);

  const handleComplete = () => {
    const next = activeIndex + 1;
    const updated = [...completed];
    updated[activeIndex] = true;
    setCompleted(updated);
    if (next < 3) setActiveIndex(next);
    else
      setTimeout(() => {
        setCompleted([false, false, false]);
        setActiveIndex(0);
      }, 2000);
  };

  // Optional: ensure video plays as soon as ready
  useEffect(() => {
    if (videoReady && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay blocked, mute video is required
          videoRef.current.muted = true;
          videoRef.current.play();
        });
      }
    }
  }, [videoReady]);

  return (
    <section className="relative min-h-screen flex justify-center items-center w-full overflow-hidden text-white">
      {/* Background Poster Image */}
      <img
        src={heroPoster}
        alt="Hero background"
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlayThrough={() => setVideoReady(true)}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}>
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Optional dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* HERO CONTENT */}
      <div className="relative z-20 flex items-center justify-center w-full h-full px-6 lg:px-8 py-16  lg:py-24">
        <div className="text-center max-w-7xl mx-auto">
          <p className="font-outfit font-normal text-sm sm:text-base leading-relaxed tracking-wide text-center max-w-xs sm:max-w-lg mx-auto opacity-100 uppercase">
            THOUGHTFUL DESIGN ACROSS <br className="hidden sm:inline" />
            BRANDS, PRODUCTS, AND DIGITAL EXPERIENCES
          </p>

          <h1 className="font-stoke leading-tight tracking-widest mt-8 mb-8">
            {["DESIGN", "FOR", "EVERYONE"].map((word, idx) => (
              <div key={idx} className="overflow-hidden">
                <AnimatedText
                  text={word}
                  active={activeIndex === idx}
                  completed={completed[idx]}
                  onComplete={handleComplete}
                  className="text-[clamp(2.5rem,8vw,10rem)] sm:text-[clamp(2.5rem,8vh,10rem)] leading-[1.1]"
                />
              </div>
            ))}
          </h1>

          <p className="font-outfit font-normal text-sm sm:text-base leading-relaxed tracking-wide text-center max-w-xs sm:max-w-lg mx-auto opacity-100 uppercase">
            We create smart digital solutions that help businesses grow,
            automate processes, and deliver better results through modern
            technology.
          </p>

          <div className="mt-8 flex justify-center">
            <button className="group flex items-center gap-3 sm:gap-4 bg-primary pl-4 sm:pl-6 pr-1 py-1 text-base sm:text-lg tracking-wide hover:bg-white transition-all duration-300">
              <span className="whitespace-nowrap text-textColor group-hover:text-black">
                Get Started
              </span>
              <span className="bg-white group-hover:bg-primary w-11 h-11 sm:w-12 sm:h-12 text-black flex items-center justify-center transition-transform group-hover:translate-x-1">
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
