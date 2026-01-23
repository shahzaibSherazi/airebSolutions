import React, { useState, useEffect, useRef } from "react";
import { ChevronRight, Maximize2 } from "lucide-react";

const TechSolutionsSection = () => {
  const [activeTab, setActiveTab] = useState("technology");
  const [scrolledCards, setScrolledCards] = useState(0);
  const containerRef = useRef(null);

  const allCards = [
    {
      id: 1,
      title: "AI & Machine Learning",
      category: "technology",
      description: "Build intelligent systems",
    },
    {
      id: 2,
      title: "Web Development",
      category: "technology",
      description: "Create powerful websites",
    },
    {
      id: 3,
      title: "API Development",
      category: "technology",
      description: "Build robust APIs",
    },
    {
      id: 4,
      title: "Mobile Apps & Games",
      category: "technology",
      description: "Develop mobile solutions",
    },
    {
      id: 5,
      title: "API & CRM Integration",
      category: "technology",
      description: "Connect your systems",
    },
    {
      id: 6,
      title: "UI/UX Design",
      category: "design",
      description: "Beautiful interfaces",
    },
    {
      id: 7,
      title: "Brand Identity",
      category: "design",
      description: "Visual storytelling",
    },
    {
      id: 8,
      title: "Product Design",
      category: "design",
      description: "User-centered design",
    },
    {
      id: 9,
      title: "Marketing Strategy",
      category: "business",
      description: "Growth strategies",
    },
    {
      id: 10,
      title: "Content Creation",
      category: "business",
      description: "Engaging content",
    },
    {
      id: 11,
      title: "Social Media",
      category: "business",
      description: "Digital presence",
    },
    {
      id: 12,
      title: "Mobile Apps & Games",
      category: "technology",
      description: "Develop mobile solutions",
    },
    {
      id: 13,
      title: "API & CRM Integration",
      category: "technology",
      description: "Connect your systems",
    },
    {
      id: 14,
      title: "UI/UX Design",
      category: "design",
      description: "Beautiful interfaces",
    },
    {
      id: 15,
      title: "Brand Identity",
      category: "design",
      description: "Visual storytelling",
    },
    {
      id: 16,
      title: "Product Design",
      category: "design",
      description: "User-centered design",
    },
    {
      id: 17,
      title: "Marketing Strategy",
      category: "business",
      description: "Growth strategies",
    },
    {
      id: 18,
      title: "Content Creation",
      category: "business",
      description: "Engaging content",
    },
    {
      id: 119,
      title: "Social Media",
      category: "business",
      description: "Digital presence",
    },
  ];

  const techItems = [
    "Data",
    "E-commerce/Product Management",
    "Marketing & Customer Growth",
  ];

  const filteredCards = allCards.filter((card) => card.category === activeTab);

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
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Innovative Technology, Design, and
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Communication Solutions
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
            We don’t just create strategies we show the numbers. Growth means
            higher conversions, lower costs, and stronger brands. Discover how
            we help brands grow smarter
          </p>
        </div>

        {/* Cards Container with Fixed Filter */}
        <div
          ref={containerRef}
          className="relative h-[800px] overflow-y-auto  scrollbar-hide  ">
          {/* Sticky Filter Card - Centered in Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {/* First Card - Empty spacer for layout */}
            <div className="hidden lg:block"></div>

            {/* Center Card - Filter */}
            <div className="sticky top-20 z-30 lg:col-start-2 flex justify-center items-center">
              <div className=" bg-white rounded-full  px-4 py-[10px] flex item-center justify-center">
                <div className="inline-flex  gap-3">
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
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
                        : " text-black hover:bg-gray-700 hover:text-white"
                    }`}>
                    Design
                  </button>
                  <button
                    onClick={() => setActiveTab("business")}
                    className={`flex-1 px-3 py-[3px] rounded-full border text-xs font-normal transition-all duration-300 text-center ${
                      activeTab === "business"
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
                        : " text-black hover:bg-gray-700 hover:text-white"
                    }`}>
                    Business & Communication
                  </button>
                </div>
              </div>
            </div>

            {/* Third Card - Empty spacer for layout */}
            <div className="hidden lg:block"></div>

            {/* Service Cards - Start from second row */}
            {filteredCards.map((card, index) => (
              <div
                key={card.id}
                className="relative group overflow-hidden rounded-lg bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 opacity-0 animate-fadeInUp"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "forwards",
                }}>
                {/* Expand Icon */}
                <button className="absolute top-4 right-4 z-10 text-white/60 hover:text-white transition-colors">
                  <Maximize2 size={20} />
                </button>

                {/* Card Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 to-blue-600/40">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <div className="text-6xl">🤝</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                  <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors">
                    Read More
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}

            {/* Technology & Engineering Info Card */}
            <div
              className="relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 p-8 opacity-0 animate-fadeInUp"
              style={{
                animationDelay: `${filteredCards.length * 100}ms`,
                animationFillMode: "forwards",
              }}>
              <h3 className="text-2xl font-bold mb-6">
                Technology & Engineering
              </h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Empowering businesses with the best intelligent solutions to
                stay on top of your brand
              </p>
              <ul className="space-y-3">
                {techItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
        
        /* Custom Scrollbar */
        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #374151;
          border-radius: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #4B5563;
        }
      `}</style>
    </div>
  );
};

export default TechSolutionsSection;
