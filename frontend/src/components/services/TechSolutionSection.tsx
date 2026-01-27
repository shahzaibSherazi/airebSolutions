import React, { useState, useEffect, useRef } from "react";
import { Bookmark, ChevronRight, Frame, Maximize2 } from "lucide-react";
import cardBgImage from "../../assets/techSolution_card_bg.png";
import btnIcon from "../../assets/icons/btn_icon.png";

const TechSolutionsSection = () => {
  const [activeTab, setActiveTab] = useState("technology");
  const [scrolledCards, setScrolledCards] = useState(0);
  const containerRef = useRef(null);

  const allCards = [
    {
      id: 1,
      title: "AI & Machine Learning",
      category: "technology",
      backgroundImage: cardBgImage,
    },
    {
      id: 2,
      title: "Web Development",
      category: "technology",
      backgroundImage: cardBgImage,
    },
    {
      id: 3,
      title: "API Development",
      category: "technology",
      backgroundImage: cardBgImage,
    },
    {
      id: 4,
      title: "Mobile Apps & Games",
      category: "technology",
      backgroundImage: cardBgImage,
    },
    {
      id: 5,
      title: "API & CRM Integration",
      category: "technology",
      backgroundImage: cardBgImage,
    },
    {
      id: 6,
      title: "UI/UX Design",
      category: "design",
      backgroundImage: cardBgImage,
    },
    {
      id: 7,
      title: "Brand Identity",
      category: "design",
      backgroundImage: cardBgImage,
    },
    {
      id: 8,
      title: "Product Design",
      category: "design",
      backgroundImage: cardBgImage,
    },
    {
      id: 9,
      title: "Marketing Strategy",
      category: "business",
      backgroundImage: cardBgImage,
    },
    {
      id: 10,
      title: "Content Creation",
      category: "business",
      backgroundImage: cardBgImage,
    },
    {
      id: 11,
      title: "Social Media",
      category: "business",
      backgroundImage: cardBgImage,
    },
    {
      id: 12,
      title: "Mobile Apps & Games",
      category: "technology",
      backgroundImage: cardBgImage,
    },
    {
      id: 13,
      title: "API & CRM Integration",
      category: "technology",
      backgroundImage: cardBgImage,
    },
    {
      id: 14,
      title: "UI/UX Design",
      category: "design",
      backgroundImage: cardBgImage,
    },
    {
      id: 15,
      title: "Brand Identity",
      category: "design",
      backgroundImage: cardBgImage,
    },
    {
      id: 16,
      title: "Product Design",
      category: "design",
      backgroundImage: cardBgImage,
    },
    {
      id: 17,
      title: "Marketing Strategy",
      category: "business",
      backgroundImage: cardBgImage,
    },
    {
      id: 18,
      title: "Content Creation",
      category: "business",
      backgroundImage: cardBgImage,
    },
    {
      id: 19,
      title: "Social Media",
      category: "business",
      backgroundImage: cardBgImage,
    },
  ];

  // Info card content for each tab
  const infoCardContent = {
    technology: {
      title: "Technology & Engineering",
      description:
        "From architecture to execution. Build scalable, secure, and high-performance solutions that power innovation and long-term growth.",
      items: [
        "Data",
        "E-commerce/Product Management",
        "Marketing & Customer Growth",
      ],
    },
    design: {
      title: "Design & Digital Experience",
      description:
        "From brand to interaction. Craft intuitive, engaging, and visually compelling experiences that connect users with your product.",
      items: ["Strategy", "Product Concept", "Implementation Roadmap"],
    },
    business: {
      title: "Business & Communication",
      description:
        "From conversations to conversions. Enable seamless communication and intelligent systems that drive efficiency, trust, and business growth.",
      items: [
        "Data Strategy & Analytics",
        "AI-Driven Insights",
        "Reporting & Dashboards",
      ],
    },
  };

  const filteredCards = allCards.filter((card) => card.category === activeTab);
  const currentInfo = infoCardContent[activeTab];

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollTop = containerRef.current.scrollTop;
        const cardHeight = 300;
        const scrolled = Math.floor(scrollTop / cardHeight);
        setScrolledCards(scrolled);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white lg:py-24 py-11 px-4 sm:px-6 lg:px-9">
      <div className="">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-[91px]">
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-normal font-stoke mb-2 lg:leading-[58px]">
            Innovative Technology, Design, and <br /> Communication Solutions
          </h1>
          {/* <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-normal font-stoke mb-6">
            Communication Solutions
          </h1> */}
          <p className="text-[#EBEBEB] text-sm sm:text-base font-outfit font-normal max-w-3xl mx-auto">
            We don’t just create strategies we show the numbers. Growth means
            higher conversions, lower costs, and stronger brands. Discover how
            we help brands grow smarter
          </p>
        </div>
        {/* Center Card - Filter */}
        <div className="sticky top-0 z-30 mb-4 flex justify-center items-center">
          <div className=" bg-white rounded-full  px-4 py-[10px] flex item-center justify-center">
            <div className="inline-flex gap-1 sm:gap-3">
              <button
                onClick={() => setActiveTab("technology")}
                className={` px-3 py-[3px] rounded-full border text-xs font-normal transition-all duration-300 text-center ${
                  activeTab === "technology"
                    ? "bg-blue-600 text-white "
                    : " text-black hover:bg-gray-700 hover:text-white"
                }`}>
                Technology
              </button>
              <button
                onClick={() => setActiveTab("design")}
                className={`px-3 py-[3px] rounded-full border text-xs font-normal transition-all duration-300 text-center ${
                  activeTab === "design"
                    ? "bg-blue-600 text-white"
                    : " text-black hover:bg-gray-700 hover:text-white"
                }`}>
                Design
              </button>
              <button
                onClick={() => setActiveTab("business")}
                className={`flex-1 px-3 py-[3px] rounded-full border text-xs font-normal transition-all duration-300 text-center ${
                  activeTab === "business"
                    ? "bg-blue-600 text-white"
                    : " text-black hover:bg-gray-700 hover:text-white"
                }`}>
                Business & Communication
              </button>
            </div>
          </div>
        </div>
        {/* Cards Container with Fixed Filter */}
        <div
          ref={containerRef}
          className="relative h-[800px] overflow-y-auto  scrollbar-hide  ">
          {/* Sticky Filter Card - Centered in Top Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
            {/* First Card - Empty spacer for layout */}
            {/* <div className="hidden lg:block"></div> */}

            {/* Third Card - Empty spacer for layout */}
            {/* <div className="hidden lg:block"></div> */}

            {/* Service Cards - Start from second row */}
            {filteredCards.map((card, index) => (
              <div
                key={card.id}
                className="relative group  px-[19px] py-[27px] transition-all duration-500 opacity-0 animate-fadeInUp h-[331px] "
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "forwards",
                  backgroundImage: card.backgroundImage
                    ? `url(${card.backgroundImage})`
                    : "linear-gradient(135deg, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3))",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}>
                {/* <span className="contactForm_corner contactForm_bottom-right" /> */}
                {/* Expand Icon */}
                <button className="absolute top-4 right-4 z-10 text-white/60 hover:text-white transition-colors">
                  <Bookmark size={20} />
                </button>

                {/* Card Content Container */}
                <div className="relative justify-end h-full flex flex-col  z-10">
                  {/* Top Section - Title and Icon */}

                  {/* Title */}
                  <h3 className="text-[22px] leading-[64px] font-outfit font-bold  text-white">
                    {card.title}
                  </h3>
                  <div className="">
                    <button className="inline-flex items-center justify-center  gap-[15px] bg-primary hover:bg-blue-700 text-white px-[21px] py-2 font-outfit text-sm font-medium transition-colors">
                      Start A Project
                      <img src={btnIcon} className="w-[9px] h-[9px]" />
                    </button>
                  </div>

                  {/* Bottom Section - Button */}
                </div>
              </div>
            ))}

            {/* Technology & Engineering Info Card */}
            <div
              key={activeTab}
              className="relative overflow-hidden bg-primary border border-blue-500/30 opacity-0 animate-fadeInUp h-[331px]"
              style={{
                animationDelay: `${filteredCards.length * 100}ms`,
                animationFillMode: "forwards",
              }}>
              <div className="h-full flex flex-col p-4 sm:p-6 md:p-8 lg:px-[25px] lg:py-[10px]">
                <h3 className="text-xl sm:text-2xl md:text-[26px] font-outfit font-bold mb-3 sm:mb-4 md:mb-[19px] leading-tight">
                  {currentInfo.title}
                </h3>

                <p className="text-[#D9D9D9] font-outfit font-light mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm leading-relaxed">
                  {currentInfo.description}
                </p>

                <ul className="space-y-2 sm:space-y-3">
                  {currentInfo.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <span className="text-blue-400 mt-1 text-sm sm:text-base">
                        •
                      </span>
                      <span className="text-white font-outfit font-medium text-sm sm:text-base leading-5 break-words">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSolutionsSection;
