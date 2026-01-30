// import { useState, useEffect } from "react";
// import { X } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "@/assets/aireb_logo.png";
// import { Button } from "../ui/button";

// // Define routes for all menu items
// const itemRoutes = {
//   // Home
//   Home: "/",

//   // Services routes
//   "Web Development": "/web-development",
//   "Mobile App Development": "/mobile-app-development",
//   "UI/UX Design": "/ui-ux-design",
//   "Cloud Solutions": "/cloud-solutions",
//   "AI & Machine Learning": "/ai-machine-learning",
//   "DevOps Services": "/devops-services",
//   "CRM Integration": "/crm-integration",
//   "Digital Marketing": "/digital-marketing",
//   "E-commerce Solutions": "/ecommerce-solutions",
//   "Custom Software": "/custom-software",
//   "API Integration": "/api-integration",
//   "Consulting Services": "/consulting-services",

//   // Industries routes
//   Healthcare: "/industries/healthcare",
//   "Finance & Banking": "/industries/finance-banking",
//   "E-commerce & Retail": "/industries/ecommerce-retail",
//   Education: "/industries/education",
//   "Real Estate": "/industries/real-estate",
//   Manufacturing: "/industries/manufacturing",
//   Transportation: "/industries/transportation",
//   "Media & Entertainment": "/industries/media-entertainment",
//   Hospitality: "/industries/hospitality",
//   "Energy & Utilities": "/industries/energy-utilities",
//   Agriculture: "/industries/agriculture",
//   Government: "/industries/government",

//   // Resources routes
//   "Blog Articles": "/resources/blog",
//   "Case Studies": "/resources/case-studies",
//   Whitepapers: "/resources/whitepapers",
//   Webinars: "/resources/webinars",
//   "E-books": "/resources/ebooks",
//   Documentation: "/resources/documentation",
//   "Video Tutorials": "/resources/video-tutorials",
//   Podcasts: "/resources/podcasts",
//   Infographics: "/resources/infographics",
//   "Research Reports": "/resources/research-reports",
//   "Best Practices": "/resources/best-practices",
//   FAQs: "/resources/faqs",

//   // About Us routes
//   "Our Story": "/about/our-story",
//   Team: "/about/team",
//   Careers: "/about/careers",
//   Partners: "/about/partners",
//   Testimonials: "/about/testimonials",
//   Awards: "/about/awards",
//   "News & Press": "/about/news-press",
//   "Corporate Culture": "/about/corporate-culture",
//   Leadership: "/about/leadership",
//   "Office Locations": "/about/office-locations",
//   "CSR Initiatives": "/about/csr-initiatives",
//   "Contact Info": "/about/contact-info",
// };

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
//       "CRM Integration",
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
//   const navigate = useNavigate();

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

//   // Handle item click - navigate and close menu
//   const handleItemClick = (itemName) => {
//     const route = itemRoutes[itemName];
//     if (route) {
//       navigate(route);
//       setMenuOpen(false);
//     }
//   };

//   // Handle main tab click
//   const handleTabClick = (tabName) => {
//     setActiveTab(tabName);
//     // If it's Home tab, navigate immediately
//     if (tabName === "Home") {
//       navigate("/");
//       setMenuOpen(false);
//     }
//   };

//   return (
//     <header className="w-full z-50">
//       {/* TOP BAR */}
//       <div className="px-8">
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
//             onClick={() => navigate("/contact")}>
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
//                 {/* LEFT NAV */}
//                 <div className="col-span-3 flex flex-col gap-4 lg:gap-6">
//                   {leftMenu.map((item) => (
//                     <button
//                       key={item.name}
//                       onClick={() => handleTabClick(item.name)}
//                       className={`text-left px-4 py-2.5 lg:py-3 rounded-md transition-all text-sm lg:text-base font-medium ${
//                         activeTab === item.name
//                           ? "bg-blue-600 shadow-lg scale-105"
//                           : "hover:bg-white/10 hover:translate-x-1"
//                       }`}>
//                       {item.name}
//                     </button>
//                   ))}

//                   <button
//                     onClick={() => {
//                       navigate("/contact");
//                       setMenuOpen(false);
//                     }}
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
//                     <div className="space-y-6">
//                       {activeContent?.items.slice(0, 6).map((item, i) => (
//                         <button
//                           key={i}
//                           onClick={() => handleItemClick(item)}
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
//                           onClick={() => handleItemClick(item)}
//                           className="text-left border-b border-white cursor-pointer hover:text-blue-300 transition-colors py-2 hover:translate-x-1 duration-200 whitespace-nowrap w-full">
//                           {item}
//                         </button>
//                       ))}
//                     </div>

//                     {/* COLUMN 3 - Last 4 items + Engagement Models */}
//                     <div className="flex flex-col justify-center items-center">
//                       {/* Last 4 items */}
//                       <div className="max-w-[200px] space-y-6">
//                         {activeContent?.items.slice(12, 16).map((item, i) => (
//                           <button
//                             key={i}
//                             onClick={() => handleItemClick(item)}
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
//                           <button
//                             onClick={() => {
//                               navigate("/engagement-models/project-based");
//                               setMenuOpen(false);
//                             }}
//                             className="bg-primary px-[7px] py-1.5 rounded text-xs font-normal font-outfit transition-all shadow-sm hover:shadow hover:cursor-pointer">
//                             Project Based Delivery
//                           </button>
//                           <button
//                             onClick={() => {
//                               navigate("/engagement-models/dedicated-team");
//                               setMenuOpen(false);
//                             }}
//                             className="bg-primary px-[7px] py-1.5 rounded text-xs font-normal font-outfit transition-all hover:cursor-pointer">
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
//                       onClick={() => handleTabClick(item.name)}
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
//                       onClick={() => handleItemClick(item)}
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
//                     <button
//                       onClick={() => {
//                         navigate("/engagement-models/project-based");
//                         setMenuOpen(false);
//                       }}
//                       className="bg-blue-600 px-3 py-2 rounded-md hover:cursor-pointer">
//                       Project Based
//                     </button>
//                     <button
//                       onClick={() => {
//                         navigate("/engagement-models/dedicated-team");
//                         setMenuOpen(false);
//                       }}
//                       className="border border-white px-3 py-2 rounded-md hover:cursor-pointer">
//                       Dedicated Team
//                     </button>
//                   </div>
//                 </div>

//                 {/* CONTACT BUTTON - MOBILE */}
//                 <button
//                   onClick={() => {
//                     navigate("/contact");
//                     setMenuOpen(false);
//                   }}
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

// import { useState, useEffect, useRef } from "react";
// import { ChevronDown } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "@/assets/aireb_logo.png";
// import { Button } from "../ui/button";

// // Define routes for all menu items
// const itemRoutes = {
//   // Home
//   Home: "/",

//   // Services routes
//   "Web Development": "/web-development",
//   "Mobile App Development": "/mobile-app-development",
//   "UI/UX Design": "/ui-ux-design",
//   "Cloud Solutions": "/cloud-solutions",
//   "AI & Machine Learning": "/ai-machine-learning",
//   "DevOps Services": "/devops-services",
//   "CRM Integration": "/crm-integration",
//   "Digital Marketing": "/digital-marketing",
//   "E-commerce Solutions": "/ecommerce-solutions",
//   "Custom Software": "/custom-software",
//   "API Integration": "/api-integration",
//   "Consulting Services": "/consulting-services",

//   // Industries routes
//   Healthcare: "/industries/healthcare",
//   "Finance & Banking": "/industries/finance-banking",
//   "E-commerce & Retail": "/industries/ecommerce-retail",
//   Education: "/industries/education",
//   "Real Estate": "/industries/real-estate",
//   Manufacturing: "/industries/manufacturing",
//   Transportation: "/industries/transportation",
//   "Media & Entertainment": "/industries/media-entertainment",
//   Hospitality: "/industries/hospitality",
//   "Energy & Utilities": "/industries/energy-utilities",
//   Agriculture: "/industries/agriculture",
//   Government: "/industries/government",

//   // Resources routes
//   "Blog Articles": "/resources/blog",
//   "Case Studies": "/resources/case-studies",
//   Whitepapers: "/resources/whitepapers",
//   Webinars: "/resources/webinars",
//   "E-books": "/resources/ebooks",
//   Documentation: "/resources/documentation",
//   "Video Tutorials": "/resources/video-tutorials",
//   Podcasts: "/resources/podcasts",
//   Infographics: "/resources/infographics",
//   "Research Reports": "/resources/research-reports",
//   "Best Practices": "/resources/best-practices",
//   FAQs: "/resources/faqs",

//   // About Us routes
//   "Our Story": "/about/our-story",
//   Team: "/about/team",
//   Careers: "/about/careers",
//   Partners: "/about/partners",
//   Testimonials: "/about/testimonials",
//   Awards: "/about/awards",
//   "News & Press": "/about/news-press",
//   "Corporate Culture": "/about/corporate-culture",
//   Leadership: "/about/leadership",
//   "Office Locations": "/about/office-locations",
//   "CSR Initiatives": "/about/csr-initiatives",
//   "Contact Info": "/about/contact-info",
// };

// const menuItems = [
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
//       "CRM Integration",
//       "Digital Marketing",
//       "E-commerce Solutions",
//       "Custom Software",
//       "API Integration",
//       "Consulting Services",
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
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [headerBg, setHeaderBg] = useState("transparent");
//   const dropdownTimeoutRef = useRef(null);
//   const headerRef = useRef(null);
//   const navigate = useNavigate();

//   // Detect background color of section behind header
//   useEffect(() => {
//     const detectBackground = () => {
//       if (!headerRef.current) return;

//       const headerRect = headerRef.current.getBoundingClientRect();
//       const headerCenter = headerRect.top + headerRect.height / 2;

//       // Get elements at header position (excluding the header itself)
//       const elements = document.elementsFromPoint(
//         window.innerWidth / 2,
//         headerCenter + 1,
//       );

//       // Find the first element that's not the header or its children
//       const backgroundElement = elements.find(
//         (el) =>
//           !headerRef.current.contains(el) &&
//           el !== document.body &&
//           el !== document.documentElement,
//       );

//       if (backgroundElement) {
//         const computedStyle = window.getComputedStyle(backgroundElement);
//         const bgColor = computedStyle.backgroundColor;

//         // Check if background is light or dark
//         const rgb = bgColor.match(/\d+/g);
//         if (rgb && rgb.length >= 3) {
//           const brightness =
//             (parseInt(rgb[0]) * 299 +
//               parseInt(rgb[1]) * 587 +
//               parseInt(rgb[2]) * 114) /
//             1000;

//           // If brightness > 128, it's a light background
//           if (brightness > 128) {
//             setHeaderBg("light");
//           } else {
//             setHeaderBg("dark");
//           }
//         } else {
//           // Default to transparent/dark
//           setHeaderBg("transparent");
//         }
//       } else {
//         setHeaderBg("transparent");
//       }
//     };

//     detectBackground();
//     window.addEventListener("scroll", detectBackground);
//     return () => window.removeEventListener("scroll", detectBackground);
//   }, []);

//   // Handle scroll to show/hide header
//   useEffect(() => {
//     const controlHeader = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY < 10) {
//         // Always show header at top
//         setIsVisible(true);
//       } else if (currentScrollY > lastScrollY) {
//         // Scrolling down - hide header
//         setIsVisible(false);
//         setActiveDropdown(null); // Close any open dropdowns
//       } else {
//         // Scrolling up - show header
//         setIsVisible(true);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", controlHeader);
//     return () => window.removeEventListener("scroll", controlHeader);
//   }, [lastScrollY]);

//   // Handle mouse enter on menu item
//   const handleMouseEnter = (menuName) => {
//     if (dropdownTimeoutRef.current) {
//       clearTimeout(dropdownTimeoutRef.current);
//     }
//     setActiveDropdown(menuName);
//   };

//   // Handle mouse leave from menu item
//   const handleMouseLeave = () => {
//     dropdownTimeoutRef.current = setTimeout(() => {
//       setActiveDropdown(null);
//     }, 200);
//   };

//   // Handle item click
//   const handleItemClick = (itemName) => {
//     const route = itemRoutes[itemName];
//     if (route) {
//       navigate(route);
//       setActiveDropdown(null);
//       setIsMobileMenuOpen(false);
//     }
//   };

//   // Handle main menu click
//   const handleMenuClick = (menuName) => {
//     if (menuName === "Home") {
//       navigate("/");
//       setActiveDropdown(null);
//       setIsMobileMenuOpen(false);
//     }
//   };

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [isMobileMenuOpen]);

//   // Clean up timeout on unmount
//   useEffect(() => {
//     return () => {
//       if (dropdownTimeoutRef.current) {
//         clearTimeout(dropdownTimeoutRef.current);
//       }
//     };
//   }, []);

//   // Get dynamic classes based on background
//   const getHeaderClasses = () => {
//     const baseClasses =
//       "w-full sticky top-0 z-50 transition-all duration-300 ease-in-out";
//     const transformClasses = isVisible ? "translate-y-0" : "-translate-y-full";

//     let bgClasses = "";
//     let borderClasses = "";

//     if (headerBg === "light") {
//       // Light background detected - use dark text and solid white bg
//       bgClasses = "bg-blue-200 backdrop-blur-md shadow-md";
//       borderClasses = "border-b border-gray-200";
//     } else if (headerBg === "dark") {
//       // Dark background detected - use light text and dark bg
//       bgClasses =
//         "bg-gradient-to-r from-blue-900/30 via-blue-600/30 to-blue-900/30 backdrop-blur-md";
//       borderClasses = "border-b border-white/10";
//     } else {
//       // Transparent/default
//       bgClasses =
//         "bg-gradient-to-r from-blue-900/10 via-blue-600/10 to-blue-900/10 backdrop-blur-md";
//       borderClasses = "border-b border-white/10";
//     }

//     return `${baseClasses} ${transformClasses} ${bgClasses} ${borderClasses}`;
//   };

//   // Get dynamic text color classes
//   const getTextClasses = (isActive = false) => {
//     if (headerBg === "light") {
//       return isActive
//         ? "text-blue-600 bg-blue-50"
//         : "text-gray-700 hover:text-blue-600 hover:bg-gray-100";
//     }
//     return isActive
//       ? "text-white bg-white/10"
//       : "text-white/90 hover:text-white hover:bg-white/10";
//   };

//   return (
//     <header ref={headerRef} className={getHeaderClasses()}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link to="/" className="flex-shrink-0">
//             <img src={logo} alt="Logo" className="h-12 w-auto" />
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-1">
//             {menuItems.map((menu) => (
//               <div
//                 key={menu.name}
//                 className="relative"
//                 onMouseEnter={() => handleMouseEnter(menu.name)}
//                 onMouseLeave={handleMouseLeave}>
//                 <button
//                   onClick={() => handleMenuClick(menu.name)}
//                   className={`px-4 py-2 font-medium text-sm flex items-center gap-1 transition-all rounded-lg ${getTextClasses(
//                     activeDropdown === menu.name,
//                   )}`}>
//                   {menu.name}
//                   {menu.items.length > 0 && (
//                     <ChevronDown
//                       size={16}
//                       className={`transition-transform ${
//                         activeDropdown === menu.name ? "rotate-180" : ""
//                       }`}
//                     />
//                   )}
//                 </button>

//                 {/* Dropdown Menu */}
//                 {menu.items.length > 0 && activeDropdown === menu.name && (
//                   <div
//                     className="absolute top-full left-0 mt-2 bg-gradient-to-br from-[#050b2e] via-[#0B23C8] to-[#1a34d6] backdrop-blur-xl shadow-2xl rounded-xl py-4 px-2 min-w-[260px] border border-white/20"
//                     onMouseEnter={() => handleMouseEnter(menu.name)}
//                     onMouseLeave={handleMouseLeave}>
//                     <div className="grid grid-cols-1 gap-1">
//                       {menu.items.map((item, index) => (
//                         <button
//                           key={index}
//                           onClick={() => handleItemClick(item)}
//                           className="text-left px-4 py-2.5 text-sm text-white/90 hover:bg-white/20 hover:text-white rounded-lg transition-all hover:translate-x-1">
//                           {item}
//                         </button>
//                       ))}
//                     </div>

//                     {/* Engagement Models for Services */}
//                     {menu.name === "Services" && (
//                       <div className="mt-4 pt-4 border-t border-white/20">
//                         <p className="px-4 text-xs font-semibold text-white/70 mb-2">
//                           ENGAGEMENT MODELS
//                         </p>
//                         <div className="space-y-1">
//                           <button
//                             onClick={() => {
//                               navigate("/engagement-models/project-based");
//                               setActiveDropdown(null);
//                             }}
//                             className="w-full text-left px-4 py-2 text-sm text-white/90 hover:bg-white/20 hover:text-white rounded-lg transition-all">
//                             Project Based Delivery
//                           </button>
//                           <button
//                             onClick={() => {
//                               navigate("/engagement-models/dedicated-team");
//                               setActiveDropdown(null);
//                             }}
//                             className="w-full text-left px-4 py-2 text-sm text-white/90 hover:bg-white/20 hover:text-white rounded-lg transition-all">
//                             Dedicated Team
//                           </button>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </nav>

//           {/* Contact Button - Desktop */}
//           <div className="hidden lg:block">
//             <Button
//               onClick={() => navigate("/contact")}
//               className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-lg font-medium text-sm transition-all shadow-lg hover:shadow-xl border border-white/20">
//               CONTACT
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className={`lg:hidden p-2 rounded-lg transition-colors ${
//               headerBg === "light"
//                 ? "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
//                 : "text-white/90 hover:text-white hover:bg-white/10"
//             }`}>
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24">
//               {isMobileMenuOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden fixed inset-0 top-20 bg-gradient-to-br from-[#050b2e] via-[#0B23C8] to-[#1a34d6] z-40 overflow-y-auto">
//           <div className="px-4 py-6 space-y-4">
//             {menuItems.map((menu) => (
//               <div key={menu.name} className="border-b border-white/20 pb-4">
//                 <button
//                   onClick={() => {
//                     if (menu.name === "Home") {
//                       handleMenuClick(menu.name);
//                     } else {
//                       setActiveDropdown(
//                         activeDropdown === menu.name ? null : menu.name,
//                       );
//                     }
//                   }}
//                   className="w-full flex items-center justify-between py-2 text-white font-medium">
//                   {menu.name}
//                   {menu.items.length > 0 && (
//                     <ChevronDown
//                       size={20}
//                       className={`transition-transform ${
//                         activeDropdown === menu.name ? "rotate-180" : ""
//                       }`}
//                     />
//                   )}
//                 </button>

//                 {menu.items.length > 0 && activeDropdown === menu.name && (
//                   <div className="mt-2 space-y-1 pl-4">
//                     {menu.items.map((item, index) => (
//                       <button
//                         key={index}
//                         onClick={() => handleItemClick(item)}
//                         className="block w-full text-left py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-lg px-3 transition-colors">
//                         {item}
//                       </button>
//                     ))}

//                     {/* Engagement Models for Services - Mobile */}
//                     {menu.name === "Services" && (
//                       <div className="mt-4 pt-4 border-t border-white/20">
//                         <p className="text-xs font-semibold text-white/70 mb-2 px-3">
//                           ENGAGEMENT MODELS
//                         </p>
//                         <button
//                           onClick={() => {
//                             navigate("/engagement-models/project-based");
//                             setIsMobileMenuOpen(false);
//                           }}
//                           className="block w-full text-left py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-lg px-3 transition-colors">
//                           Project Based Delivery
//                         </button>
//                         <button
//                           onClick={() => {
//                             navigate("/engagement-models/dedicated-team");
//                             setIsMobileMenuOpen(false);
//                           }}
//                           className="block w-full text-left py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-lg px-3 transition-colors">
//                           Dedicated Team
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>
//             ))}

//             {/* Contact Button - Mobile */}
//             <Button
//               onClick={() => {
//                 navigate("/contact");
//                 setIsMobileMenuOpen(false);
//               }}
//               className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-medium shadow-lg border border-white/20">
//               CONTACT US
//             </Button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/aireb_logo.png";

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
  "CRM Integration": "/crm-integration",
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

const menuItems = [
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
      "CRM Integration",
      "Digital Marketing",
      "E-commerce Solutions",
      "Custom Software",
      "API Integration",
      "Consulting Services",
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
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerBg, setHeaderBg] = useState("transparent");
  const dropdownTimeoutRef = useRef(null);
  const headerRef = useRef(null);
  const navigate = useNavigate();

  // Detect background color of section behind header
  useEffect(() => {
    const detectBackground = () => {
      if (!headerRef.current) return;

      const headerRect = headerRef.current.getBoundingClientRect();
      const headerCenter = headerRect.top + headerRect.height / 2;

      // Get elements at header position (excluding the header itself)
      const elements = document.elementsFromPoint(
        window.innerWidth / 2,
        headerCenter + 1,
      );

      // Find the first element that's not the header or its children
      const backgroundElement = elements.find(
        (el) =>
          !headerRef.current.contains(el) &&
          el !== document.body &&
          el !== document.documentElement,
      );

      if (backgroundElement) {
        const computedStyle = window.getComputedStyle(backgroundElement);
        const bgColor = computedStyle.backgroundColor;

        // Check if background is light or dark
        const rgb = bgColor.match(/\d+/g);
        if (rgb && rgb.length >= 3) {
          const brightness =
            (parseInt(rgb[0]) * 299 +
              parseInt(rgb[1]) * 587 +
              parseInt(rgb[2]) * 114) /
            1000;

          // If brightness > 128, it's a light background
          if (brightness > 128) {
            setHeaderBg("light");
          } else {
            setHeaderBg("dark");
          }
        } else {
          // Default to transparent/dark
          setHeaderBg("transparent");
        }
      } else {
        setHeaderBg("transparent");
      }
    };

    detectBackground();
    window.addEventListener("scroll", detectBackground);
    return () => window.removeEventListener("scroll", detectBackground);
  }, []);

  // Handle scroll to show/hide header
  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // Always show header at top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide header
        setIsVisible(false);
        setActiveDropdown(null); // Close any open dropdowns
      } else {
        // Scrolling up - show header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  // Handle mouse enter on menu item
  const handleMouseEnter = (menuName) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menuName);
  };

  // Handle mouse leave from menu item
  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  // Handle item click
  const handleItemClick = (itemName) => {
    const route = itemRoutes[itemName];
    if (route) {
      navigate(route);
      setActiveDropdown(null);
      setIsMobileMenuOpen(false);
    }
  };

  // Handle main menu click
  const handleMenuClick = (menuName) => {
    if (menuName === "Home") {
      navigate("/");
      setActiveDropdown(null);
      setIsMobileMenuOpen(false);
    }
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  // Get dynamic classes based on background
  const getHeaderClasses = () => {
    const baseClasses =
      "w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out";
    const transformClasses = isVisible ? "translate-y-0" : "-translate-y-full";

    let bgClasses = "";
    let borderClasses = "";

    if (headerBg === "light") {
      // Light background detected - use dark text and solid white bg
      bgClasses = "bg-white/95 backdrop-blur-md shadow-md";
      borderClasses = "border-b border-gray-200";
    } else if (headerBg === "dark") {
      // Dark background detected - use light text and dark bg
      bgClasses =
        "bg-gradient-to-r from-blue-900/30 via-blue-600/30 to-blue-900/30 backdrop-blur-md";
      borderClasses = "border-b border-white/10";
    } else {
      // Transparent/default
      bgClasses =
        "bg-gradient-to-r from-blue-900/10 via-blue-600/10 to-blue-900/10 backdrop-blur-md";
      borderClasses = "border-b border-white/10";
    }

    return `${baseClasses} ${transformClasses} ${bgClasses} ${borderClasses}`;
  };

  // Get dynamic text color classes
  const getTextClasses = (isActive = false) => {
    if (headerBg === "light") {
      return isActive
        ? "text-blue-600 bg-blue-50"
        : "text-gray-700 hover:text-blue-600 hover:bg-gray-100";
    }
    return isActive
      ? "text-white bg-white/10"
      : "text-white/90 hover:text-white hover:bg-white/10";
  };

  return (
    <>
      <header ref={headerRef} className={getHeaderClasses()}>
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="Logo" className="h-12 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((menu) => (
                <div
                  key={menu.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(menu.name)}
                  onMouseLeave={handleMouseLeave}>
                  <button
                    onClick={() => handleMenuClick(menu.name)}
                    className={`px-4 py-2 font-medium text-sm flex items-center gap-1 transition-all rounded-lg ${getTextClasses(
                      activeDropdown === menu.name,
                    )}`}>
                    {menu.name}
                    {menu.items.length > 0 && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          activeDropdown === menu.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {menu.items.length > 0 && activeDropdown === menu.name && (
                    <div
                      className="absolute top-full left-0 mt-2 bg-gradient-to-br from-[#050b2e] via-[#0B23C8] to-[#1a34d6] backdrop-blur-xl shadow-2xl rounded-xl py-4 px-2 min-w-[260px] border border-white/20"
                      onMouseEnter={() => handleMouseEnter(menu.name)}
                      onMouseLeave={handleMouseLeave}>
                      <div className="grid grid-cols-1 gap-1">
                        {menu.items.map((item, index) => (
                          <button
                            key={index}
                            onClick={() => handleItemClick(item)}
                            className="text-left px-4 py-2.5 text-sm text-white/90 hover:bg-white/20 hover:text-white rounded-lg transition-all hover:translate-x-1">
                            {item}
                          </button>
                        ))}
                      </div>

                      {/* Engagement Models for Services */}
                      {menu.name === "Services" && (
                        <div className="mt-4 pt-4 border-t border-white/20">
                          <p className="px-4 text-xs font-semibold text-white/70 mb-2">
                            ENGAGEMENT MODELS
                          </p>
                          <div className="space-y-1">
                            <button
                              onClick={() => {
                                navigate("/engagement-models/project-based");
                                setActiveDropdown(null);
                              }}
                              className="w-full text-left px-4 py-2 text-sm text-white/90 hover:bg-white/20 hover:text-white rounded-lg transition-all">
                              Project Based Delivery
                            </button>
                            <button
                              onClick={() => {
                                navigate("/engagement-models/dedicated-team");
                                setActiveDropdown(null);
                              }}
                              className="w-full text-left px-4 py-2 text-sm text-white/90 hover:bg-white/20 hover:text-white rounded-lg transition-all">
                              Dedicated Team
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Contact Button - Desktop */}
            <div className="hidden lg:block">
              <button
                onClick={() => navigate("/contact")}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-lg font-medium text-sm transition-all shadow-lg hover:shadow-xl border border-white/20">
                CONTACT
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                headerBg === "light"
                  ? "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Moved outside header for proper rendering */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-20 bg-gradient-to-br from-[#050b2e] via-[#0B23C8] to-[#1a34d6] overflow-y-auto"
          style={{ zIndex: 9999 }}>
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((menu) => (
              <div key={menu.name} className="border-b border-white/20 pb-4">
                <button
                  onClick={() => {
                    if (menu.name === "Home") {
                      handleMenuClick(menu.name);
                    } else {
                      setActiveDropdown(
                        activeDropdown === menu.name ? null : menu.name,
                      );
                    }
                  }}
                  className="w-full flex items-center justify-between py-2 text-white font-medium">
                  {menu.name}
                  {menu.items.length > 0 && (
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${
                        activeDropdown === menu.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {menu.items.length > 0 && activeDropdown === menu.name && (
                  <div className="mt-2 space-y-1 pl-4">
                    {menu.items.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleItemClick(item)}
                        className="block w-full text-left py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-lg px-3 transition-colors">
                        {item}
                      </button>
                    ))}

                    {/* Engagement Models for Services - Mobile */}
                    {menu.name === "Services" && (
                      <div className="mt-4 pt-4 border-t border-white/20">
                        <p className="text-xs font-semibold text-white/70 mb-2 px-3">
                          ENGAGEMENT MODELS
                        </p>
                        <button
                          onClick={() => {
                            navigate("/engagement-models/project-based");
                            setIsMobileMenuOpen(false);
                          }}
                          className="block w-full text-left py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-lg px-3 transition-colors">
                          Project Based Delivery
                        </button>
                        <button
                          onClick={() => {
                            navigate("/engagement-models/dedicated-team");
                            setIsMobileMenuOpen(false);
                          }}
                          className="block w-full text-left py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-lg px-3 transition-colors">
                          Dedicated Team
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Contact Button - Mobile */}
            <button
              onClick={() => {
                navigate("/contact");
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-medium shadow-lg border border-white/20">
              CONTACT US
            </button>
          </div>
        </div>
      )}

      {/* Spacer div to prevent content from going under fixed header */}
      <div className="h-20" />
    </>
  );
};

export default Header;
