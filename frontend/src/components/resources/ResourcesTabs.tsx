import { useState } from "react";
import AllBlogs from "./blogs/AllBlogs";
import BlogsHero from "./blogs/BlogsHero";
import AllWhitePapers from "./white-paper/AllWhitePapers";
import WhitePaperHero from "./white-paper/WhitePaperHero";
import AllCaseStudies from "./case-studies/AllCaseStudies";
import CaseStudiesHero from "./case-studies/CaseStudiesHero";
import AllProjects from "./portfolio/AllProjects";
import PortfolioHero from "./portfolio/portfolioHero";

type TabType = "blogs" | "whitepapers" | "case-studies" | "portfolio";

interface Tab {
  id: TabType;
  label: string;
  heading: string;
  description: string;
  component: React.ReactNode;
}

interface TabContent {
  heading: string;
  description: string;
}

const ResourcesTabs = () => {
  const [activeTab, setActiveTab] = useState<TabType>("blogs");

  const tabs: Tab[] = [
    {
      id: "blogs",
      label: "Blogs",
      heading: "Blogs",
      description:
        "Explore our latest blog posts covering industry insights, best practices, and helpful tips to stay updated with the latest trends in technology and business.",
      component: <AllBlogs />,
    },
    {
      id: "whitepapers",
      label: "White Papers",
      heading: "White Papers",
      description:
        "Access in-depth white papers and research documents that provide comprehensive analysis and strategic insights into complex business and technical topics.",
      component: <AllWhitePapers />,
    },
    {
      id: "case-studies",
      label: "Case Studies",
      heading: "Case Studies",
      description:
        "Discover real-world case studies showcasing how we've helped businesses solve complex challenges and achieve remarkable results.",
      component: <AllCaseStudies />,
    },
    {
      id: "portfolio",
      label: "Portfolio",
      heading: "Portfolio",
      description:
        "Browse our diverse portfolio of completed projects that demonstrate our expertise and capabilities across various industries and technologies.",
      component: <AllProjects />,
    },
  ];

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <>
      {/* ── Hero Section ── */}
      <section className="bg-[#02070F] pt-24 pb-4 md:pb-6">
        <div className="container px-2 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-textColor font-stoke font-normal leading-tight mb-4 text-h1">
              {activeTabData?.heading}
            </h1>
            <p className="text-textColor font-outfit text-p max-w-3xl mx-auto leading-[1.85] font-normal">
              {activeTabData?.description}
            </p>
          </div>

          {/* ── Tabs Navigation ── */}
          <div className="flex justify-center">
            <div className="flex gap-1 flex-wrap bg-[#ffffff05] rounded-full p-1.5 border border-[#ffffff10] backdrop-blur-sm">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-2 py-2 md:px-6 md:py-3 rounded-full font-outfit font-normal text-xs sm:text-sm md:text-base transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-primary text-white"
                      : "text-textColor hover:text-white hover:bg-[#ffffff08]"
                  }`}>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Content Section ── */}
      <section className="bg-[#02070F]">
        <div className="animate-fadeIn">
          {tabs.find((tab) => tab.id === activeTab)?.component}
        </div>
      </section>
    </>
  );
};

export default ResourcesTabs;
