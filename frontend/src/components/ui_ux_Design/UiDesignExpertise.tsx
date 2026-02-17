import React from "react";
import ArrowUpRight from "../../assets/icons/top-left.png";

const UiDesignExpertise = () => {
  const features = [
    {
      id: 1,
      heading: "Tailored Solutions",
      title:
        "Our UI/UX designs are custom-tailored to your specific business needs and user expectations",
    },
    {
      id: 2,
      heading: "User-Centered Approach",
      title:
        "We prioritize creating user-friendly and engaging experiences that enhance user satisfaction.",
    },
    {
      id: 3,
      heading: "Collaboration",
      title:
        "We work closely with your team to ensure that the design aligns perfectly with your brand vision and goals",
    },
    {
      id: 4,
      heading: "Experience & Expertise",
      title:
        "Our team is made up of highly skilled UI/UX designers with years of experience in delivering top-notch designs",
    },
    {
      id: 5,
      heading: "24/7 Support & Maintenance",
      title: "Continuous updates and technical assistance.",
    },
  ];

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #000000 0%, #0E1828 100%)",
      }}
      className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Container */}
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <span className="inline-block bg-primary text-black text-xs sm:text-base font-outfit font-medium px-4 sm:px-7 py-1.5 sm:py-2 border ">
            Our Expertise
          </span>
        </div>

        {/* Heading */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-outfit font-thin leading-10 lg:leading-[72px] ">
            Why Choose Aireb Solutions for Your
            <br className="hidden sm:block" />
            UI/UX Design Needs?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-[#0E1828] border-2 border-[#7474741F] px-4  py-6 md:py-8 transition-all duration-300 hover:bg-primary cursor-pointer overflow-hidden sm:min-h-[150px] h-full flex flex-col">
              {/* Card Content */}
              <div className="relative z-10 flex-1 flex flex-col">
                {/* Text with fixed height and overflow handling */}
                <div className=" overflow-hidden">
                  <h1 className="text-primary group-hover:text-textColor font-outfit text-lg sm:text-xl md:text-2xl font-normal leading-relaxed pr-8 line-clamp-2 mb-3 ">
                    {feature.heading}
                  </h1>
                  <h3 className="text-white font-outfit text-sm sm:text-base  font-light leading-relaxed pr-8 line-clamp-2 h-full">
                    {feature.title}
                  </h3>
                </div>
              </div>

              {/* Arrow Icon with Curved Line - Bottom Right Corner */}
              <div className="">
                <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 curved-line">
                  {/* Arrow Icon */}
                  <div className="absolute bottom-2 right-2">
                    <img
                      src={ArrowUpRight}
                      className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform duration-300 group-hover:-translate-x-1 "
                      alt="arrow icon"
                    />
                  </div>
                </div>
              </div>

              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UiDesignExpertise;
