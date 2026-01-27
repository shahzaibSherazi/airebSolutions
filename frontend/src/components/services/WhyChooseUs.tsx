import React from "react";
import { Hand } from "lucide-react";
import { PiHandPalmLight } from "react-icons/pi";

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
      className="min-h-screen text-white py-16 md:py-32 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(135.23deg, #000000 2.74%, #030933 97.26%)",
      }}>
      <div className="">
        {/* Header */}
        <div className="text-center mb-16 md:mb-[85px]">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-stoke leading-[56px] mb-[15px]">
            Why Choose Us
          </h1>
          <p className="text-[#D9D9D9] font-outfit font-normal text-sm sm:text-lg leading-[40px]">
            We Design for the Future to Drive Today's Success
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* First Row - 2 Large Cards */}
          <div
            className={`rounded-[5px] p-1 pb-8 group transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.01]
${
  features[0].color === "dark-blue"
    ? "bg-gradient-to-br from-[#030933] to-[#041167] border border-[#4B4B4B]"
    : "bg-gradient-to-br from-blue-600 to-blue-700"
}`}>
            <div
              className={`inline-flex px-7 py-[19px] rounded mb-6 ${
                features[0].color === "dark-blue" ? "bg-primary" : "bg-white"
              }`}>
              <PiHandPalmLight className="w-10 h-10 text-white transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-[-20deg]" />
            </div>

            <div className="px-5">
              <h3 className="text-lg leading-10 font-bold mb-[7px]">
                {features[0].title}
              </h3>
              <p className="text-white text-base font-outfit font-light leading-[28px]">
                {features[0].description}
              </p>
            </div>
          </div>

          <div
            className="rounded-[5px] p-1 bg-[#0B23C8] pb-8 group transition-all duration-300 ease-out
hover:-translate-y-2 hover:scale-[1.01]">
            <div className="mb-6">
              <div className="inline-flex px-7 py-[19px] rounded bg-white">
                <PiHandPalmLight className="w-10 h-10 text-primary transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-[-20deg]" />
              </div>
            </div>
            <div className="px-5">
              <h3 className="text-lg leading-10 font-bold mb-[7px]">
                {features[1].title}
              </h3>
              <p className="text-white text-base font-outfit font-light leading-[28px]">
                {features[1].description}
              </p>
            </div>
          </div>

          {/* Second Row - 3 Small Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-4 ">
            {features.slice(2).map((feature) => (
              <div
                key={feature.id}
                className="rounded-[5px] p-1 bg-gradient-to-br from-[#030933] to-[#041167] border border-[#4B4B4B] pb-8 group transition-all duration-300 ease-out
hover:-translate-y-2 hover:scale-[1.01]">
                <div className="mb-6">
                  <div className="inline-flex px-7 py-[19px] rounded bg-primary">
                    <PiHandPalmLight className="w-10 h-10 text-white transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-[-20deg]" />
                  </div>
                </div>
                <div className="px-5">
                  <h3 className="text-lg leading-10 font-bold mb-[7px]">
                    {feature.title}
                  </h3>
                  <p className="text-white text-base font-outfit font-light leading-[28px]">
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
