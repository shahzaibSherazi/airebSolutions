import React from "react";
import { Hand } from "lucide-react";
import { PiHandPalmLight } from "react-icons/pi";
import DeepLearningIcon from "../../assets/icons/AI-services-icons/machine-learning.svg?react";
import CustomAiIcon from "../../assets/icons/AI-services-icons/custom_ai.svg?react";
import ScalableIcon from "../../assets/icons/AI-services-icons/computer-vision.svg?react";
const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Expertise in Advanced AI Technologies",
      description:
        "Our team of AI specialists and data scientists build state-of-the-art AI solutions that drive business transformation.",
      size: "large",
      color: "dark-blue",
      icon: <DeepLearningIcon />,
    },
    {
      id: 2,
      title: "Custom AI Solutions for Diverse Industries",
      description:
        "From healthcare and finance to retail and manufacturing, we design AI-driven applications that address industry-specific challenges.",
      size: "large",
      color: "bright-blue",
      icon: <CustomAiIcon />,
    },
    {
      id: 3,
      title: "Scalable & Secure AI Implementations",
      description:
        "Security and scalability are at the core of our AI solutions, ensuring compliance and robustness for long-term success.",
      size: "small",
      color: "dark-blue",
      icon: <ScalableIcon />,
    },
    {
      id: 4,
      title: "End-to-End AI Development & Support",
      description:
        "We provide comprehensive AI consulting, development, deployment, and ongoing support to ensure seamless integration into your business operations.",
      size: "small",
      color: "dark-blue",
      icon: <DeepLearningIcon />,
    },
    {
      id: 5,
      title: "Ethical & Responsible AI Development",
      description:
        "We prioritize fairness, transparency, and accountability in AI, ensuring bias-free and ethical AI solutions.",
      size: "small",
      color: "dark-blue",
      icon: <DeepLearningIcon />,
    },
  ];

  return (
    <div className="min-h-screen text-white py-16 md:py-32 px-4 sm:px-6 lg:px-8 bg-primary">
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
          <div className="rounded-[5px] p-1 pb-8 group border-025 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.01]">
            <div className=" px-7 py-[19px] w-10 h-10 text-textColor transition-transform duration-300 ease-out group-hover:scale-125 mb-6 ">
              {features[0].icon}
            </div>

            <div className="px-5">
              <h3 className="text-lg text-textColor leading-10 font-bold mb-[7px]">
                {features[0].title}
              </h3>
              <p className="text-white text-base font-outfit font-light leading-[28px]">
                {features[0].description}
              </p>
            </div>
          </div>

          <div
            className="rounded-[5px] border-025 p-1 pb-8 group transition-all duration-300 ease-out
hover:-translate-y-2 hover:scale-[1.01]">
            <div className="mb-6">
              <div className=" px-7 py-[19px] w-10 h-10 text-textColor transition-transform duration-300 ease-out group-hover:scale-125  mb-6 ">
                {features[1].icon}
              </div>
            </div>
            <div className="px-5">
              <h3 className="text-lg text-textColor leading-10 font-bold mb-[7px]">
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
                className="rounded-[5px] p-1  border-025 pb-8 group transition-all duration-300 ease-out
hover:-translate-y-2 hover:scale-[1.01]">
                <div className="mb-6">
                  <div className=" px-7 py-[19px] w-10 h-10 text-textColor transition-transform duration-300 ease-out group-hover:scale-125 mb-6 ">
                    {feature.icon}
                  </div>
                </div>
                <div className="px-5">
                  <h3 className="text-lg text-textColor leading-10 font-bold mb-[7px]">
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
