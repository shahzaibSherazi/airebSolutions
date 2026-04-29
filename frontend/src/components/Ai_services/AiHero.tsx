import { Link } from "react-router-dom";
import bgImg from "../../assets/Ai_hero_bg.webp";
import { motion } from "../ui/motion";
import { useCallback } from "react";
import { smoothScroll } from "@/lib/smooth-scroll";

const AiHero = () => {
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
    <section className="heros_height relative w-full flex flex-col justify-center sm:text-start text-center  bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0  bg-[linear-gradient(180deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.5)_50%,rgba(66,133,244,0.25)_100%)] sm:bg-[linear-gradient(66deg,#629DFF_-90%,rgba(0,0,0,0.2)_114%)]" />
      {/* Content */}
      <div className="container relative z-10  px-6 py-8  lg:py-10 flex flex-col sm:items-start items-center justify-end">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}>
          <h1 className="font-stoke text-h1 leading-[1.28] text-white mb-4 lg:mb-2">
            AI and Machine <br /> Learning Services
          </h1>
          <p className="font-outfit text-p leading-[1.6] text-white max-w-2xl mb-10">
            We provide smart AI-powered solutions that make workflows run more
            smoothly, analyse data, and help people make better decisions. We
            build AI systems that are scalable, safe, and ready for the future.
            These systems use predictive analytics, natural language processing,
            computer vision, and generative AI to help businesses grow.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-fit gap-3 sm:gap-4">
          <Link
            to="/resources/portfolio"
            className="font-outfit font-normal text-center text-sm md:text-lg  px-6 sm:px-7 py-2 sm:py-[9px] bg-black text-textColor rounded hover:bg-textColor hover:text-black transition-all duration-300 shadow-md hover:shadow-lg">
            Discover It
          </Link>
          <button
            onClick={scrollToContact}
            className="font-outfit font-normal text-sm md:text-lg  px-6 sm:px-7 py-2 sm:py-[9px] bg-black text-textColor rounded  hover:bg-textColor hover:text-black transition-all duration-300 shadow-md hover:shadow-lg">
            Start A Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default AiHero;
