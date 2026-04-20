import React from "react";
import HeroImg from "@/assets/Dialer_assets/hero_img.svg?react";
import { Link } from "react-router-dom";
import { motion } from "../ui/motion";

const DialerHero = () => {
  return (
    <section
      style={{
        background:
          "linear-gradient(66.03deg, #629DFF -38.71%, #629DFF -38.7%, #000000 114.21%)",
      }}
      className="heros_height relative overflow-hidden  flex flex-col justify-center sm:text-start text-center">
      <div className="container px-2 lg:px-8 py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-2 w-full h-full ">
        {/* Left Side - Content */}
        <div className="flex flex-col sm:items-start items-center justify-end">
          {/* Title */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}>
            <h1 className="text-textColor text-h1 font-stoke font-normal mb-4 lg:mb-2">
              AI-Powered Custom <br className="hidden lg:block" />
              Dialer Solutions
            </h1>
            {/* Subtitle */}
            <p className="text-textColor font-outfit text-p tracking-wide mb-10">
              We provide advanced AI-powered dialer solutions to automate
              outbound calls, make agents more productive, and get customers
              more involved. We help organizations get more conversions, better
              manage leads, and give customers personalized communication
              experiences by using AI, predictive analytics, and smart
              automation together.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 w-fit gap-3 sm:gap-4">
            <Link
              to="/resources/portfolio"
              className="font-outfit font-normal text-center text-sm md:text-lg  px-6 sm:px-7 py-2 sm:py-[9px] bg-black text-textColor rounded hover:bg-textColor hover:text-black transition-all duration-300 shadow-md hover:shadow-lg">
              Discover It
            </Link>
            <a
              href="#contact-form"
              className="font-outfit font-normal text-sm md:text-lg  px-6 sm:px-7 py-2 sm:py-[9px] bg-black text-textColor rounded  hover:bg-textColor hover:text-black transition-all duration-300 shadow-md hover:shadow-lg">
              Start A Project
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center lg:justify-end w-full h-[100%]">
          <HeroImg className="w-full h-[100%] object-contain" />
        </div>
      </div>
    </section>
  );
};

export default DialerHero;
