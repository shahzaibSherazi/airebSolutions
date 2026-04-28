import React, { useCallback } from "react";
import heroImg from "@/assets/api_hero_img.png";
import { Link } from "react-router-dom";
import { motion } from "../ui/motion";
import { smoothScroll } from "@/lib/smooth-scroll";

const ApiIntegrationHero = () => {
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
    <section
      style={{
        background:
          "linear-gradient(66.03deg, #629DFF -38.71%, #629DFF -38.7%, #000000 114.21%)",
      }}
      className="heros_height  flex flex-col justify-center sm:text-start text-center overflow-hidden">
      <div className="container py-8 lg:py-10 px-2 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
        {/* Left Side - Content */}
        <div className="flex flex-col justify-end sm:items-start items-center h-full ">
          {/* Title */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}>
            <h1 className="text-white text-h1 font-stoke font-normal mb-4 lg:mb-2">
              API Development <br />
              Services
            </h1>
            {/* Subtitle */}
            <p className="text-textColor font-outfit text-p tracking-wide mb-10">
              We build secure, scalable APIs that connect your systems and
              streamline operations. From custom APIs to third-party
              integrations, we ensure fast, reliable data flow to improve
              efficiency, enhance user experience, and support business growth.
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

        {/* Right Side */}
        <div className="flex items-start justify-center lg:justify-end h-full">
          <div
            className="relative"
            style={{
              width: "100%",
              maxWidth: "671px",
              aspectRatio: "671 / 442",
            }}>
            <img
              src={heroImg}
              alt="API Development"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiIntegrationHero;
