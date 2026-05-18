import React, { useState, useEffect, useRef } from "react";
import { Bookmark, ChevronRight, Frame, Maximize2 } from "lucide-react";
import { motion } from "framer-motion";
import BtnIcon from "../../assets/icons/btn_icon.svg?react";
import AiBg from "@/assets/AllServices_assets/Ai_card_bg.webp";
import WebBg from "@/assets/AllServices_assets/web_card_bg.webp";
import ApiBg from "@/assets/AllServices_assets/api_card_bg.webp";
import MobileBg from "@/assets/AllServices_assets/mobile_card_bg.webp";
import CrmBg from "@/assets/AllServices_assets/crm_card_bg.webp";
import UiBg from "@/assets/AllServices_assets/ui_card_bg.webp";
import LogoBg from "@/assets/AllServices_assets/logo_card_bg.webp";
import ContentBg from "@/assets/AllServices_assets/content_card_bg.webp";
import ContactBg from "@/assets/AllServices_assets/contact_card_bg.webp";
import DevOpsBg from "@/assets/AllServices_assets/devOps_card_bg.webp";
import OnDemandBg from "@/assets/AllServices_assets/ondemand_card_bg.webp";
import EcommerceBg from "@/assets/AllServices_assets/ecomerce_card_bg.webp";
import DialerBg from "@/assets/AllServices_assets/dialer_card_bg.webp";
import { Link } from "react-router-dom";

const TechSolutionsSection = () => {
  const [activeTab, setActiveTab] = useState("technology");
  const [scrolledCards, setScrolledCards] = useState(0);
  const containerRef = useRef(null);

  const allCards = [
    {
      id: 1,
      title: "AI & Machine Learning",
      category: "technology",
      backgroundImage: AiBg,
      link: "/services/ai-services",
    },
    {
      id: 2,
      title: "Web Development",
      category: "technology",
      backgroundImage: WebBg,
      link: "/services/web-development",
    },
    {
      id: 3,
      title: "API Development",
      category: "technology",
      backgroundImage: ApiBg,
      link: "/services/api-integration",
    },
    {
      id: 4,
      title: "Mobile Apps & Games",
      category: "technology",
      backgroundImage: MobileBg,
      link: "/services/mobile-app-development",
    },
    {
      id: 5,
      title: "API & CRM Integration",
      category: "technology",
      backgroundImage: CrmBg,
      link: "/services/api-integration",
    },
    {
      id: 6,
      title: "UI/UX Design",
      category: "design",
      backgroundImage: UiBg,
      link: "/services/ui-ux-design",
    },
    {
      id: 7,
      title: "Content Writing",
      category: "design",
      backgroundImage: ContentBg,
      link: "/services/content-writing",
    },
    {
      id: 8,
      title: "Logo Design",
      category: "design",
      backgroundImage: LogoBg,
      link: "/services/logo-design",
    },
    {
      id: 9,
      title: "AI Dialer Software",
      category: "business",
      backgroundImage: DialerBg,
      link: "/services/dialer",
    },
    {
      id: 10,
      title: "Contact Center Solutions",
      category: "business",
      backgroundImage: ContactBg,
      link: "/services/contact-center",
    },
    {
      id: 11,
      title: "E-commerce",
      category: "business",
      backgroundImage: EcommerceBg,
      link: "/services/ecommerce",
    },
    {
      id: 12,
      title: "DevOPS",
      category: "technology",
      backgroundImage: DevOpsBg,
      link: "/services/devops-services",
    },
    {
      id: 13,
      title: "On-Demand",
      category: "technology",
      backgroundImage: OnDemandBg,
      link: "/services/on-demand",
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
    <div className="min-h-screen bg-black text-white ">
      <div className="container lg:py-24 py-16 flex flex-col justify-center items-center">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16 lg:mb-[91px]"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}>
          <h1 className="text-h2 font-normal font-stoke mb-2 lg:leading-[58px]">
            Innovative Technology, Design, and{" "}
            <br className="hidden lg:block" />
            Communication Solutions
          </h1>
          {/* <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-normal font-stoke mb-6">
            Communication Solutions
          </h1> */}
          <p className="text-white text-p font-outfit font-normal max-w-3xl mx-auto">
            We don't just create strategies we show the numbers. Growth means
            higher conversions, lower costs, and stronger brands. Discover how
            we help brands grow smarter
          </p>
        </motion.div>
        {/* Center Card - Filter */}
        <div className="sticky top-48 z-50">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="gap-1 sm:gap-3  bg-white rounded-full px-1 sm:px-4 py-1 sm:py-[10px] flex item-center justify-center">
            <button
              onClick={() => setActiveTab("technology")}
              className={`px-1 sm:px-3 py-[3px] rounded-full border font-outfit text-xs font-normal transition-all duration-300 text-center ${
                activeTab === "technology"
                  ? "bg-primary text-white border-none"
                  : " text-black hover:bg-black hover:text-white"
              }`}>
              Technology
            </button>
            <button
              onClick={() => setActiveTab("design")}
              className={`px-1 sm:px-3 py-[3px] rounded-full border font-outfit text-xs font-normal transition-all duration-300 text-center ${
                activeTab === "design"
                  ? "bg-primary text-white border-none"
                  : " text-black hover:bg-black hover:text-white"
              }`}>
              Design
            </button>
            <button
              onClick={() => setActiveTab("business")}
              className={`flex-1 px-1 sm:px-3 py-[3px] rounded-full border font-outfit text-xs font-normal transition-all duration-300 text-center ${
                activeTab === "business"
                  ? "bg-primary text-white border-none"
                  : " text-black hover:bg-black hover:text-white"
              }`}>
              Business & Communication
            </button>
          </motion.div>
        </div>
        {/* Cards Container with Fixed Filter */}
        {/* Sticky Filter Card - Centered in Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative pt-4">
          {filteredCards.map((card, index) => (
            <div
              key={card.id}
              className="relative sevicesCard_edge group  px-[19px] py-[27px] transition-all duration-500 opacity-0 animate-fadeInUp h-[331px] "
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
              <div
                style={{
                  background:
                    "linear-gradient(66.03deg, #629DFF -78.71%, rgba(0, 0, 0, 0.2) 114.21%)",
                }}
                className="absolute inset-0 "
              />
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
                  <Link
                    to={card.link}
                    className="inline-flex items-center justify-center  gap-[15px] bg-white hover:bg-black hover:text-textColor text-black px-[21px] py-2 font-outfit text-sm font-medium transition-colors">
                    Start A Project
                    <BtnIcon className="w-[9px] h-[9px]" />
                  </Link>
                </div>

                {/* Bottom Section - Button */}
              </div>
            </div>
          ))}

          {/* Technology & Engineering Info Card */}
          <div
            key={activeTab}
            className="relative overflow-hidden bg-primary opacity-0 animate-fadeInUp h-[331px]"
            style={{
              animationDelay: `${filteredCards.length * 100}ms`,
              animationFillMode: "forwards",
            }}>
            <div className="h-full flex flex-col p-4 sm:p-6 md:p-8 lg:px-[25px] lg:py-[10px]">
              <h3 className="text-xl sm:text-2xl md:text-[26px] text-black font-outfit font-bold mb-3 sm:mb-4 md:mb-[19px] leading-tight">
                {currentInfo.title}
              </h3>

              <p className="text-textColor font-outfit font-light mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm leading-relaxed">
                {currentInfo.description}
              </p>

              <ul className="space-y-2 sm:space-y-3">
                {currentInfo.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 sm:gap-3">
                    <span className="text-white mt-1 text-sm sm:text-base">
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
  );
};

export default TechSolutionsSection;
