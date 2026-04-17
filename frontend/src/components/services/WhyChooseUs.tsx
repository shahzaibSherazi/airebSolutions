import React from "react";
import { Hand } from "lucide-react";
import { PiHandPalmLight } from "react-icons/pi";
import { motion } from "framer-motion";
const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Perfect Until You Approve",
      description:
        "We refine every detail until it matches your vision. Your satisfaction is our top priority we'll keep improving the design until it feels just right.",
      size: "large",
      color: "dark-blue",
    },
    {
      id: 2,
      title: "Perfect Until You Approve",
      description:
        "We refine every detail until it matches your vision. Your satisfaction is our top priority we'll keep improving the design until it feels just right.",
      size: "large",
      color: "bright-blue",
    },
    {
      id: 3,
      title: "Perfect Until You Approve",
      description:
        "We refine every detail until it matches your vision. Your satisfaction is our top priority we'll keep improving the design until it feels just right.",
      size: "small",
      color: "dark-blue",
    },
    {
      id: 4,
      title: "Perfect Until You Approve",
      description:
        "We refine every detail until it matches your vision. Your satisfaction is our top priority we'll keep improving the design until it feels just right.",
      size: "small",
      color: "dark-blue",
    },
    {
      id: 5,
      title: "Perfect Until You Approve",
      description:
        "We refine every detail until it matches your vision. Your satisfaction is our top priority we'll keep improving the design until it feels just right.",
      size: "small",
      color: "dark-blue",
    },
  ];

  return (
    <div
      className=" text-white "
      style={{
        background: "linear-gradient(135.23deg, #4285F4 2.74%, #629DFF 97.26%)",
      }}>
      <div className="container py-16 lg:py-24 px-2 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-[85px]">
          <h1 className="text-h2 text-black font-normal font-stoke leading-[56px] mb-[20px]">
            Why Choose Us
          </h1>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}>
            <p className="text-textColor font-outfit font-normal text-p">
              We Design for the Future to Drive Today's Success
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* First Row - 2 Large Cards */}
          <div className="rounded-[5px] p-1 pb-8 hover:bg-black border-025 border-[#141414] group transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.01]">
            <div className="inline-flex px-7 py-[19px] rounded mb-6 bg-black">
              <PiHandPalmLight className="w-10 h-10 text-white transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-[-20deg]" />
            </div>

            <div className="px-2 sm:px-5">
              <h3 className="text-lg text-black group-hover:text-textColor leading-10 font-bold mb-[7px]">
                {features[0].title}
              </h3>
              <p className="text-black group-hover:text-textColor text-p font-outfit font-light leading-[28px]">
                {features[0].description}
              </p>
            </div>
          </div>

          <div
            className="rounded-[5px] p-1 hover:bg-black border-025 border-[#141414] pb-8 group transition-all duration-300 ease-out
hover:-translate-y-2 hover:scale-[1.01]">
            <div className="mb-6">
              <div className="inline-flex px-7 py-[19px] rounded bg-black">
                <PiHandPalmLight className="w-10 h-10 text-white transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-[-20deg]" />
              </div>
            </div>
            <div className="px-2 sm:px-5">
              <h3 className="text-lg text-black group-hover:text-textColor leading-10 font-bold mb-[7px]">
                {features[1].title}
              </h3>
              <p className="text-black group-hover:text-textColor text-p font-outfit font-light leading-[28px]">
                {features[1].description}
              </p>
            </div>
          </div>

          {/* Second Row - 3 Small Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-4 ">
            {features.slice(2).map((feature) => (
              <div
                key={feature.id}
                className="rounded-[5px] p-1 hover:bg-black border-025 border-[#141414] pb-8 group transition-all duration-300 ease-out
hover:-translate-y-2 hover:scale-[1.01]">
                <div className="mb-6">
                  <div className="inline-flex px-7 py-[19px] rounded bg-black">
                    <PiHandPalmLight className="w-10 h-10 text-white transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-[-20deg]" />
                  </div>
                </div>
                <div className="px-5">
                  <h3 className="text-lg text-black group-hover:text-textColor leading-10 font-bold mb-[7px]">
                    {feature.title}
                  </h3>
                  <p className="text-black group-hover:text-textColor text-base font-outfit font-light leading-[28px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
