import React from "react";
import { Hand } from "lucide-react";
import piHand from "../../assets/AllServices_assets/choosUs/pi.png";
import inovativeIcon from "../../assets/AllServices_assets/choosUs/inovativ.png";
import expertiseIcon from "../../assets/AllServices_assets/choosUs/experties.png";
import endtoendIcon from "../../assets/AllServices_assets/choosUs/end.png";
import focusIcon from "../../assets/AllServices_assets/choosUs/focus.png";
import { motion } from "framer-motion";
const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Tailored Solutions",
      description:
        "We understand your business needs and create custom solutions that match your goals.",
      size: "large",
      color: "dark-blue",
      icon: piHand,
    },
    {
      id: 2,
      title: "Expertise Across Industries",
      description:
        "We work with multiple industries like e-commerce, fintech, real estate, education, and more, with proven experience.",
      size: "large",
      color: "bright-blue",
      icon: expertiseIcon,
    },
    {
      id: 3,
      title: "End-to-End Services",
      description:
        "From design and development to integration, marketing, and support — we handle everything.",
      size: "small",
      color: "dark-blue",
      icon: endtoendIcon,
    },
    {
      id: 4,
      title: "Innovative Technology",
      description:
        "We use modern technologies like AI, cloud, automation, and mobile solutions to keep your business ahead.",
      size: "small",
      color: "dark-blue",
      icon: inovativeIcon,
    },
    {
      id: 5,
      title: "Customer-Focused Approach",
      description:
        "We focus on delivering real results, better user experience, and long-term business growth.",
      size: "small",
      color: "dark-blue",
      icon: focusIcon,
    },
  ];

  return (
    <div
      className=" text-white "
      style={{
        background: "linear-gradient(135.23deg, #4285F4 2.74%, #629DFF 97.26%)",
      }}>
      <div className="container py-16 lg:py-24 ">
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
              At Aireb Solutions, we help businesses grow with modern, reliable,
              and scalable digital solutions.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* First Row - 2 Large Cards */}
          <div className="rounded-[5px] p-1 pb-8 hover:bg-black border-025 border-[#141414] group transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.01]">
            <div className="inline-flex px-2 py-2 rounded mb-6 bg-black">
              <img
                src={features[0].icon}
                alt={features[0].title}
                className="w-10 h-10 text-white transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-[-20deg] "
              />
            </div>

            <div className="px-2 sm:px-5">
              <h3 className="text-lg text-black group-hover:text-textColor leading-10 font-stoke font-bold mb-[7px]">
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
              <div className="inline-flex px-2 py-2 rounded bg-black">
                <img
                  src={features[1].icon}
                  alt={features[1].title}
                  className="w-10 h-10 text-white transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-[-20deg] brightness-100 invert"
                />
              </div>
            </div>
            <div className="px-2 sm:px-5">
              <h3 className="text-lg text-black group-hover:text-textColor leading-10 font-stoke font-bold mb-[7px]">
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
                  <div className="inline-flex px-2 py-2 rounded bg-black">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-10 h-10 text-white transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-[-20deg] brightness-100 invert"
                    />
                  </div>
                </div>
                <div className="px-5">
                  <h3 className="text-lg text-black group-hover:text-textColor leading-10 font-stoke font-bold mb-[7px]">
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
