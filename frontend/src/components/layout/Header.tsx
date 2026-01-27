// import { useState, useEffect } from "react";
// import { X } from "lucide-react";
// import { Link } from "react-router-dom";
// import logo from "@/assets/aireb_logo.png";
// import { Button } from "../ui/button";

// const leftMenu = [
//   { name: "Home", items: [] },
//   {
//     name: "Services",
//     items: [
//       "Web Development",
//       "Mobile App Development",
//       "UI/UX Design",
//       "Cloud Solutions",
//       "AI & Machine Learning",
//       "DevOps Services",
//       "Quality Assurance",
//       "Digital Marketing",
//       "E-commerce Solutions",
//       "Custom Software",
//       "API Integration",
//       "Consulting Services",
//       "Quality Assurance",
//       "Digital Marketing",
//       "E-commerce Solutions",
//       "Custom Software",
//     ],
//   },
//   {
//     name: "Industries",
//     items: [
//       "Healthcare",
//       "Finance & Banking",
//       "E-commerce & Retail",
//       "Education",
//       "Real Estate",
//       "Manufacturing",
//       "Transportation",
//       "Media & Entertainment",
//       "Hospitality",
//       "Energy & Utilities",
//       "Agriculture",
//       "Government",
//     ],
//   },
//   {
//     name: "Resources",
//     items: [
//       "Blog Articles",
//       "Case Studies",
//       "Whitepapers",
//       "Webinars",
//       "E-books",
//       "Documentation",
//       "Video Tutorials",
//       "Podcasts",
//       "Infographics",
//       "Research Reports",
//       "Best Practices",
//       "FAQs",
//     ],
//   },
//   {
//     name: "About Us",
//     items: [
//       "Our Story",
//       "Team",
//       "Careers",
//       "Partners",
//       "Testimonials",
//       "Awards",
//       "News & Press",
//       "Corporate Culture",
//       "Leadership",
//       "Office Locations",
//       "CSR Initiatives",
//       "Contact Info",
//     ],
//   },
// ];

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState("Services");

//   // Close on ESC
//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === "Escape") setMenuOpen(false);
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, []);

//   // Prevent body scroll when menu is open
//   useEffect(() => {
//     if (menuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [menuOpen]);

//   const activeContent = leftMenu.find((item) => item.name === activeTab);

//   return (
//     <header className=" w-full z-50">
//       {/* TOP BAR */}
//       <div className="  px-8">
//         <div className="flex items-start justify-between h-36 pt-8">
//           {/* MENU BUTTON */}
//           <Button
//             asChild
//             className="max-sm:size-sm"
//             onClick={() => setMenuOpen(true)}>
//             <div>
//               <span className="absolute top-1.5 right-1.5 size-1.5 bg-black rounded-full z-50 group-hover:bg-white"></span>
//               <span className="group-hover:text-white tracking-wide">MENU</span>
//             </div>
//           </Button>

//           {/* LOGO */}
//           <Link to="/" className="flex items-center gap-3">
//             <img src={logo} alt="Logo" className="max-sm:w-36" />
//           </Link>

//           {/* CONTACT BUTTON */}
//           <Button
//             asChild
//             className="max-md:hidden"
//             onClick={() => (window.location.href = "/contact")}>
//             <div>
//               <span className="absolute top-1.5 right-1.5 size-1.5 bg-black rounded-full z-50 group-hover:bg-white"></span>
//               <span className="text-lg leading-3 group-hover:text-white tracking-wide">
//                 CONTACT
//               </span>
//             </div>
//           </Button>
//         </div>
//       </div>

//       {/* MEGA MENU OVERLAY */}
//       {menuOpen && (
//         <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm overflow-y-auto">
//           <div className="min-h-screen flex items-start justify-center p-4 sm:p-6 lg:p-8 pt-20 sm:pt-24 lg:pt-28">
//             <div className="relative w-full max-w-7xl rounded-xl bg-gradient-to-br from-[#050b2e] via-[#0B23C8] to-[#1a34d6] p-6 sm:p-8 lg:p-10 shadow-2xl">
//               {/* CLOSE BUTTON */}
//               <button
//                 onClick={() => setMenuOpen(false)}
//                 className="absolute -top-2 -right-1 sm:top-0 sm:right-0 text-white hover:bg-white/10 rounded-full p-2 transition-colors">
//                 <X size={24} className="sm:w-7 sm:h-7" />
//               </button>

//               {/* DESKTOP & TABLET LAYOUT */}
//               <div className="hidden lg:grid lg:grid-cols-12 gap-6 lg:gap-10 text-white">
//                 {/* LEFT NAV - Keep as is */}
//                 <div className="col-span-3 flex flex-col gap-4 lg:gap-6">
//                   {leftMenu.map((item) => (
//                     <button
//                       key={item.name}
//                       onClick={() => setActiveTab(item.name)}
//                       className={`text-left px-4 py-2.5 lg:py-3 rounded-md transition-all text-sm lg:text-base font-medium ${
//                         activeTab === item.name
//                           ? "bg-blue-600 shadow-lg scale-105"
//                           : "hover:bg-white/10 hover:translate-x-1"
//                       }`}>
//                       {item.name}
//                     </button>
//                   ))}

//                   <button
//                     onClick={() => (window.location.href = "/contact")}
//                     className="mt-6 lg:mt-8 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2.5 lg:py-3 w-fit rounded-md transition-all shadow-lg hover:shadow-xl text-sm lg:text-base font-medium">
//                     CONTACT
//                     <svg
//                       className="w-3 h-3 lg:w-4 lg:h-4"
//                       fill="currentColor"
//                       viewBox="0 0 20 20">
//                       <path
//                         fillRule="evenodd"
//                         d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </button>
//                 </div>

//                 {/* MODIFIED CONTENT GRID - 3 columns layout */}
//                 <div className="col-span-9 text-sm lg:text-base border rounded-[8px] border-white px-[34px] py-[21px]">
//                   {/* 3 COLUMNS GRID */}
//                   <div className="grid grid-cols-[1fr_1fr_1.5fr] gap-6">
//                     {/* COLUMN 1 - First 6 items */}
//                     <div className="space-y-6 ">
//                       {activeContent?.items.slice(0, 6).map((item, i) => (
//                         <button
//                           key={i}
//                           className="text-left cursor-pointer border-b border-white hover:text-blue-300 transition-colors py-2 hover:translate-x-1 duration-200 whitespace-nowrap w-full">
//                           {item}
//                         </button>
//                       ))}
//                     </div>

//                     {/* COLUMN 2 - Next 4 items */}
//                     <div className="space-y-6">
//                       {activeContent?.items.slice(6, 12).map((item, i) => (
//                         <button
//                           key={i}
//                           className="text-left border-b border-white cursor-pointer hover:text-blue-300 transition-colors py-2 hover:translate-x-1 duration-200 whitespace-nowrap w-full">
//                           {item}
//                         </button>
//                       ))}
//                     </div>

//                     {/* COLUMN 3 - Last 4 items + Engagement Models */}
//                     <div className=" flex flex-col justify-center items-center">
//                       {/* Last 4 items */}
//                       <div className="max-w-[200px] space-y-6">
//                         {activeContent?.items.slice(12, 16).map((item, i) => (
//                           <button
//                             key={i}
//                             className="text-left border-b border-white cursor-pointer hover:text-blue-300 transition-colors py-2 hover:translate-x-1 duration-200 whitespace-nowrap w-full">
//                             {item}
//                           </button>
//                         ))}
//                       </div>
//                       {/* Engagement Models section at bottom of 3rd column */}
//                       <div className="mt-6 border-025 border-white/30 rounded-md p-4 max-w-[311px]">
//                         <p className="font-normal font-stoke mb-3 text-base lg:text-lg">
//                           Engagement Models
//                         </p>

//                         <div className="flex flex-col md:flex-row gap-2">
//                           <button className="bg-primary px-[7px] py-1.5 rounded text-xs font-normal font-outfit transition-all shadow-sm hover:shadow">
//                             Project Based Delivery
//                           </button>
//                           <button className=" bg-primary px-[7px] py-1.5 rounded text-xs font-normal font-outfit transition-all  ">
//                             Dedicated Team
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* MOBILE LAYOUT */}
//               <div className="lg:hidden text-white space-y-6">
//                 {/* TABS */}
//                 <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
//                   {leftMenu.map((item) => (
//                     <button
//                       key={item.name}
//                       onClick={() => setActiveTab(item.name)}
//                       className={`whitespace-nowrap px-4 py-2 rounded-md text-sm font-medium transition-all ${
//                         activeTab === item.name
//                           ? "bg-blue-600 shadow-lg"
//                           : "bg-white/10"
//                       }`}>
//                       {item.name}
//                     </button>
//                   ))}
//                 </div>

//                 {/* CONTENT */}
//                 <div className="grid grid-cols-1 gap-3 max-h-[50vh] overflow-y-auto">
//                   {activeContent?.items.map((item, i) => (
//                     <button
//                       key={i}
//                       className="text-left py-2.5 px-3 hover:bg-white/10 rounded-md transition-colors text-sm">
//                       {item}
//                     </button>
//                   ))}
//                 </div>

//                 {/* ENGAGEMENT MODELS - MOBILE */}
//                 <div className="border-t border-white/30 pt-6">
//                   <p className="font-semibold mb-4 text-base">
//                     Engagement Models
//                   </p>
//                   <div className="grid grid-cols-2 gap-2 text-xs">
//                     <button className="bg-blue-600 px-3 py-2 rounded-md">
//                       Project Based
//                     </button>
//                     <button className="border border-white px-3 py-2 rounded-md">
//                       Dedicated Team
//                     </button>
//                   </div>
//                 </div>

//                 {/* CONTACT BUTTON - MOBILE */}
//                 <button
//                   onClick={() => (window.location.href = "/contact")}
//                   className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-md transition-all shadow-lg text-sm font-medium">
//                   CONTACT US
//                   <svg
//                     className="w-4 h-4"
//                     fill="currentColor"
//                     viewBox="0 0 20 20">
//                     <path
//                       fillRule="evenodd"
//                       d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/aireb_logo.png";
import { Button } from "../ui/button";

// Define routes for all menu items
const itemRoutes = {
  // Home
  Home: "/",

  // Services routes
  "Web Development": "/web-development",
  "Mobile App Development": "/mobile-app-development",
  "UI/UX Design": "/ui-ux-design",
  "Cloud Solutions": "/cloud-solutions",
  "AI & Machine Learning": "/ai-machine-learning",
  "DevOps Services": "/devops-services",
  "Quality Assurance": "/quality-assurance",
  "Digital Marketing": "/digital-marketing",
  "E-commerce Solutions": "/ecommerce-solutions",
  "Custom Software": "/custom-software",
  "API Integration": "/api-integration",
  "Consulting Services": "/consulting-services",

  // Industries routes
  Healthcare: "/industries/healthcare",
  "Finance & Banking": "/industries/finance-banking",
  "E-commerce & Retail": "/industries/ecommerce-retail",
  Education: "/industries/education",
  "Real Estate": "/industries/real-estate",
  Manufacturing: "/industries/manufacturing",
  Transportation: "/industries/transportation",
  "Media & Entertainment": "/industries/media-entertainment",
  Hospitality: "/industries/hospitality",
  "Energy & Utilities": "/industries/energy-utilities",
  Agriculture: "/industries/agriculture",
  Government: "/industries/government",

  // Resources routes
  "Blog Articles": "/resources/blog",
  "Case Studies": "/resources/case-studies",
  Whitepapers: "/resources/whitepapers",
  Webinars: "/resources/webinars",
  "E-books": "/resources/ebooks",
  Documentation: "/resources/documentation",
  "Video Tutorials": "/resources/video-tutorials",
  Podcasts: "/resources/podcasts",
  Infographics: "/resources/infographics",
  "Research Reports": "/resources/research-reports",
  "Best Practices": "/resources/best-practices",
  FAQs: "/resources/faqs",

  // About Us routes
  "Our Story": "/about/our-story",
  Team: "/about/team",
  Careers: "/about/careers",
  Partners: "/about/partners",
  Testimonials: "/about/testimonials",
  Awards: "/about/awards",
  "News & Press": "/about/news-press",
  "Corporate Culture": "/about/corporate-culture",
  Leadership: "/about/leadership",
  "Office Locations": "/about/office-locations",
  "CSR Initiatives": "/about/csr-initiatives",
  "Contact Info": "/about/contact-info",
};

const leftMenu = [
  { name: "Home", items: [] },
  {
    name: "Services",
    items: [
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "Cloud Solutions",
      "AI & Machine Learning",
      "DevOps Services",
      "Quality Assurance",
      "Digital Marketing",
      "E-commerce Solutions",
      "Custom Software",
      "API Integration",
      "Consulting Services",
      "Quality Assurance",
      "Digital Marketing",
      "E-commerce Solutions",
      "Custom Software",
    ],
  },
  {
    name: "Industries",
    items: [
      "Healthcare",
      "Finance & Banking",
      "E-commerce & Retail",
      "Education",
      "Real Estate",
      "Manufacturing",
      "Transportation",
      "Media & Entertainment",
      "Hospitality",
      "Energy & Utilities",
      "Agriculture",
      "Government",
    ],
  },
  {
    name: "Resources",
    items: [
      "Blog Articles",
      "Case Studies",
      "Whitepapers",
      "Webinars",
      "E-books",
      "Documentation",
      "Video Tutorials",
      "Podcasts",
      "Infographics",
      "Research Reports",
      "Best Practices",
      "FAQs",
    ],
  },
  {
    name: "About Us",
    items: [
      "Our Story",
      "Team",
      "Careers",
      "Partners",
      "Testimonials",
      "Awards",
      "News & Press",
      "Corporate Culture",
      "Leadership",
      "Office Locations",
      "CSR Initiatives",
      "Contact Info",
    ],
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Services");
  const navigate = useNavigate();

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const activeContent = leftMenu.find((item) => item.name === activeTab);

  // Handle item click - navigate and close menu
  const handleItemClick = (itemName) => {
    const route = itemRoutes[itemName];
    if (route) {
      navigate(route);
      setMenuOpen(false);
    }
  };

  // Handle main tab click
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    // If it's Home tab, navigate immediately
    if (tabName === "Home") {
      navigate("/");
      setMenuOpen(false);
    }
  };

  return (
    <header className="w-full z-50">
      {/* TOP BAR */}
      <div className="px-8">
        <div className="flex items-start justify-between h-36 pt-8">
          {/* MENU BUTTON */}
          <Button
            asChild
            className="max-sm:size-sm"
            onClick={() => setMenuOpen(true)}>
            <div>
              <span className="absolute top-1.5 right-1.5 size-1.5 bg-black rounded-full z-50 group-hover:bg-white"></span>
              <span className="group-hover:text-white tracking-wide">MENU</span>
            </div>
          </Button>

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="max-sm:w-36" />
          </Link>

          {/* CONTACT BUTTON */}
          <Button
            asChild
            className="max-md:hidden"
            onClick={() => navigate("/contact")}>
            <div>
              <span className="absolute top-1.5 right-1.5 size-1.5 bg-black rounded-full z-50 group-hover:bg-white"></span>
              <span className="text-lg leading-3 group-hover:text-white tracking-wide">
                CONTACT
              </span>
            </div>
          </Button>
        </div>
      </div>

      {/* MEGA MENU OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm overflow-y-auto">
          <div className="min-h-screen flex items-start justify-center p-4 sm:p-6 lg:p-8 pt-20 sm:pt-24 lg:pt-28">
            <div className="relative w-full max-w-7xl rounded-xl bg-gradient-to-br from-[#050b2e] via-[#0B23C8] to-[#1a34d6] p-6 sm:p-8 lg:p-10 shadow-2xl">
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute -top-2 -right-1 sm:top-0 sm:right-0 text-white hover:bg-white/10 rounded-full p-2 transition-colors">
                <X size={24} className="sm:w-7 sm:h-7" />
              </button>

              {/* DESKTOP & TABLET LAYOUT */}
              <div className="hidden lg:grid lg:grid-cols-12 gap-6 lg:gap-10 text-white">
                {/* LEFT NAV */}
                <div className="col-span-3 flex flex-col gap-4 lg:gap-6">
                  {leftMenu.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleTabClick(item.name)}
                      className={`text-left px-4 py-2.5 lg:py-3 rounded-md transition-all text-sm lg:text-base font-medium ${
                        activeTab === item.name
                          ? "bg-blue-600 shadow-lg scale-105"
                          : "hover:bg-white/10 hover:translate-x-1"
                      }`}>
                      {item.name}
                    </button>
                  ))}

                  <button
                    onClick={() => {
                      navigate("/contact");
                      setMenuOpen(false);
                    }}
                    className="mt-6 lg:mt-8 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2.5 lg:py-3 w-fit rounded-md transition-all shadow-lg hover:shadow-xl text-sm lg:text-base font-medium">
                    CONTACT
                    <svg
                      className="w-3 h-3 lg:w-4 lg:h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                {/* MODIFIED CONTENT GRID - 3 columns layout */}
                <div className="col-span-9 text-sm lg:text-base border rounded-[8px] border-white px-[34px] py-[21px]">
                  {/* 3 COLUMNS GRID */}
                  <div className="grid grid-cols-[1fr_1fr_1.5fr] gap-6">
                    {/* COLUMN 1 - First 6 items */}
                    <div className="space-y-6">
                      {activeContent?.items.slice(0, 6).map((item, i) => (
                        <button
                          key={i}
                          onClick={() => handleItemClick(item)}
                          className="text-left cursor-pointer border-b border-white hover:text-blue-300 transition-colors py-2 hover:translate-x-1 duration-200 whitespace-nowrap w-full">
                          {item}
                        </button>
                      ))}
                    </div>

                    {/* COLUMN 2 - Next 4 items */}
                    <div className="space-y-6">
                      {activeContent?.items.slice(6, 12).map((item, i) => (
                        <button
                          key={i}
                          onClick={() => handleItemClick(item)}
                          className="text-left border-b border-white cursor-pointer hover:text-blue-300 transition-colors py-2 hover:translate-x-1 duration-200 whitespace-nowrap w-full">
                          {item}
                        </button>
                      ))}
                    </div>

                    {/* COLUMN 3 - Last 4 items + Engagement Models */}
                    <div className="flex flex-col justify-center items-center">
                      {/* Last 4 items */}
                      <div className="max-w-[200px] space-y-6">
                        {activeContent?.items.slice(12, 16).map((item, i) => (
                          <button
                            key={i}
                            onClick={() => handleItemClick(item)}
                            className="text-left border-b border-white cursor-pointer hover:text-blue-300 transition-colors py-2 hover:translate-x-1 duration-200 whitespace-nowrap w-full">
                            {item}
                          </button>
                        ))}
                      </div>
                      {/* Engagement Models section at bottom of 3rd column */}
                      <div className="mt-6 border-025 border-white/30 rounded-md p-4 max-w-[311px]">
                        <p className="font-normal font-stoke mb-3 text-base lg:text-lg">
                          Engagement Models
                        </p>

                        <div className="flex flex-col md:flex-row gap-2">
                          <button
                            onClick={() => {
                              navigate("/engagement-models/project-based");
                              setMenuOpen(false);
                            }}
                            className="bg-primary px-[7px] py-1.5 rounded text-xs font-normal font-outfit transition-all shadow-sm hover:shadow hover:cursor-pointer">
                            Project Based Delivery
                          </button>
                          <button
                            onClick={() => {
                              navigate("/engagement-models/dedicated-team");
                              setMenuOpen(false);
                            }}
                            className="bg-primary px-[7px] py-1.5 rounded text-xs font-normal font-outfit transition-all hover:cursor-pointer">
                            Dedicated Team
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* MOBILE LAYOUT */}
              <div className="lg:hidden text-white space-y-6">
                {/* TABS */}
                <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
                  {leftMenu.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleTabClick(item.name)}
                      className={`whitespace-nowrap px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        activeTab === item.name
                          ? "bg-blue-600 shadow-lg"
                          : "bg-white/10"
                      }`}>
                      {item.name}
                    </button>
                  ))}
                </div>

                {/* CONTENT */}
                <div className="grid grid-cols-1 gap-3 max-h-[50vh] overflow-y-auto">
                  {activeContent?.items.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => handleItemClick(item)}
                      className="text-left py-2.5 px-3 hover:bg-white/10 rounded-md transition-colors text-sm">
                      {item}
                    </button>
                  ))}
                </div>

                {/* ENGAGEMENT MODELS - MOBILE */}
                <div className="border-t border-white/30 pt-6">
                  <p className="font-semibold mb-4 text-base">
                    Engagement Models
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <button
                      onClick={() => {
                        navigate("/engagement-models/project-based");
                        setMenuOpen(false);
                      }}
                      className="bg-blue-600 px-3 py-2 rounded-md hover:cursor-pointer">
                      Project Based
                    </button>
                    <button
                      onClick={() => {
                        navigate("/engagement-models/dedicated-team");
                        setMenuOpen(false);
                      }}
                      className="border border-white px-3 py-2 rounded-md hover:cursor-pointer">
                      Dedicated Team
                    </button>
                  </div>
                </div>

                {/* CONTACT BUTTON - MOBILE */}
                <button
                  onClick={() => {
                    navigate("/contact");
                    setMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-md transition-all shadow-lg text-sm font-medium">
                  CONTACT US
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
