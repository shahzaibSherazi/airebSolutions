import React from "react";

const HowWeGetItDone = () => {
  const steps = [
    {
      id: 1,
      title: "Discovery &\nPlanning",
      heading:
        "Defining features, creating wireframes, and selecting tech stacks.",
      description:
        "We analyze client requirements, conduct market research, and outline technical specifications to create a well-structured development roadmap.",
    },
    {
      id: 2,
      title: "UI / UX Design",
      heading: "Designing user-friendly interfaces and prototypes.",
      description:
        "Our design team crafts wireframes, prototypes, and high-fidelity designs to ensure the best user experience.",
    },
    {
      id: 3,
      title: "Development &\nImplementation",
      heading: "Writing code, integrating features, and backend setup.",
      description:
        "Our developers use industry-leading tools and technologies to bring the app or game to life with robust coding and functionality.",
    },
    {
      id: 4,
      title: "Testing &\nQuality Assurance",
      heading:
        "Identifying bugs, optimizing performance, and ensuring security.",
      description:
        "We conduct thorough testing, including functional, security, and performance testing, to identify and fix any issues before deployment.",
    },
    {
      id: 5,
      title: "Deployment & Launch",
      heading: "Releasing the app on app stores",
      description:
        "We deploy the app to the respective platforms, ensuring a smooth rollout with zero downtime.",
    },
    {
      id: 6,
      title: "Maintenance & Updates",
      heading: "Fixing issues, adding new features, and improving performance.",
      description:
        "We provide ongoing support, updates, and feature enhancements to keep your app relevant and efficient.",
    },
  ];

  return (
    <section className="relative w-full bg-black py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-[89px]">
          <span className="bg-primary font-outfit text-white px-4 py-1.5 sm:px-[29px] sm:py-[9px] uppercase text-xs sm:text-base font-medium">
            Our Work Process
          </span>
          <h2 className="text-white font-stoke font-normal text-2xl sm:text-3xl md:text-4xl lg:text-[42px] mt-3 sm:mt-[34px]">
            How we get it done
          </h2>
          <p className="font-outfit font-normal text-base mt-[27px]">
            Our structured development approach ensures successful{" "}
            <br className="hidden sm:block" /> project execution and delivery
          </p>
        </div>

        {/* Steps with Gaps and Connecting Lines */}
        <div className="">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Card Row */}
              <div className="grid grid-cols-1 md:grid-cols-[230px_1fr] lg:grid-cols-[280px_1fr] gap-0 group">
                {/* Left: Blue Box with Title */}
                <div className="bg-primary  flex items-center justify-center py-8 px-10 sm:px-16 sm:py-6  border-025 rounded-tl-[7px] rounded-bl-[7px] border-blue-500 shadow-lg shadow-blue-600/30 transition-all duration-300 group-hover:shadow-blue-600/50 group-hover:bg-blue-700">
                  <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-[22px] font-bold text-center leading-tight whitespace-pre-line">
                    {step.title}
                  </h3>
                </div>

                {/* Right: Content Box */}
                <div className="relative flex flex-col lg:py-0 md:py-1 py-3 justify-center bg-black border-025 rounded-tr-[7px] rounded-br-[7px] border-gray-800 px-4 md:px-5 lg:px-6 transition-all duration-300 group-hover:border-gray-700">
                  {/* Top border accent */}

                  {/* Heading */}
                  <h4 className="text-white text-base font-outfit font-medium mb-3 sm:mb-4">
                    {step.heading}
                  </h4>

                  {/* Description */}
                  <p className="text-[#D9D9D9] font-outfit font-light text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Vertical Connecting Line at Bottom Center (except for last card) */}
              {index < steps.length - 1 && (
                <div className="flex justify-center">
                  <div className="relative flex flex-col items-center ">
                    {/* Vertical line */}
                    <div className="w-[2px] h-6 bg-gradient-to-b from-blue-500 via-blue-500/60 to-blue-500/20"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeGetItDone;
