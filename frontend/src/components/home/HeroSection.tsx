import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
// import bgVideo from "@/assets/home/hero/hero-video.mp4";
import heroPoster from "@/assets/home/hero/poster.jpeg";
import AnimatedText from "../ui/LetterStagger";
import { Link } from "react-router-dom";
import { smoothScroll } from "@/lib/smooth-scroll";

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
    <section className="heros_height relative  flex justify-center items-center w-full overflow-hidden text-white">
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
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* HERO CONTENT */}
      <div className="container relative z-20 flex flex-col items-center justify-center text-center w-full h-full px-1 lg:px-8 py-6 lg:py-8">
        <p className="font-outfit font-normal text-p leading-relaxed tracking-wide text-center max-w-xs sm:max-w-lg mx-auto opacity-100 uppercase">
          THOUGHTFUL DESIGN ACROSS <br className="hidden sm:inline" />
          BRANDS, PRODUCTS, AND DIGITAL EXPERIENCES
        </p>

        <div className="font-stoke leading-tight tracking-widest mt-8 mb-8 ">
          {["DESIGN", "FOR", "EVERYONE"].map((word, idx) => (
            <div key={idx} className="overflow-hidden">
              <AnimatedText
                text={word}
                active={activeIndex === idx}
                completed={completed[idx]}
                onComplete={handleComplete}
                className="text-4xl lg:text-6xl "
              />
            </div>
          ))}
        </div>

        <p className="font-outfit font-normal text-p leading-relaxed tracking-wide text-center max-w-xs sm:max-w-lg mx-auto opacity-100 uppercase">
          We create smart digital solutions that help businesses grow, automate
          processes, and deliver better results through modern technology.
        </p>

        <div className="mt-10 flex justify-center">
          <button
            onClick={scrollToContact}
            className="group ml-2 h-12 flex items-center text-textColor hover:text-black hover:bg-white font-outfit gap-4 bg-primary p-2 ps-4  text-base lg:text-lg font-medium tracking-wide transition duration-300 ease-in-out hover:shadow-lg">
            Get Started
            <span className="bg-white group-hover:bg-primary h-[100%] px-3 text-black flex items-center justify-center transition-transform group-hover:translate-x-1">
              <ArrowRight size={16} className="sm:w-5 sm:h-5" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
