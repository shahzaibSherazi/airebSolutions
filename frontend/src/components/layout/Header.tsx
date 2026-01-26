// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import logo from "@/assets/aireb_logo.png";

// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Services", href: "/services" },
//   { name: "Projects", href: "/projects" },
//   { name: "Contact", href: "/contact" },
// ];

// const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const location = useLocation();

//   return (
//     <header className="px-3 z-30">
//       <nav className="container mx-auto px-1 sm:!px-2 lg:px-12">
//         <div className="flex items-start justify-between h-36 pt-8">
//           {/* Mobile Menu Button */}
//           {/* <button
//             className="md:hidden text-foreground p-2"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           > */}
//           {/* <button
//             className="text-foreground p-2 "
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button> */}

//           {/* Button */}
//           <Button asChild className="max-sm:size-sm">
//             <Link to="/contact">
//               <span className="absolute top-1.5 right-1.5 size-1.5 bg-black rounded-full z-50 group-hover:bg-white"></span>
//               <span className="group-hover:text-white tracking-wide">MENU</span>
//             </Link>
//           </Button>

//           {/* Logo */}
//           {/* <Link to="/" className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
//               <span className="text-primary-foreground font-bold text-xl">D</span>
//             </div>
//             <span className="text-xl font-bold text-foreground tracking-tight">DesignCo</span>
//           </Link> */}
//           <Link to="/" className="flex items-center gap-3">
//             <img src={logo} alt="Logo" className="max-sm:w-36" />
//           </Link>

//           {/* Desktop Navigation */}
//           {/* <div className="hidden md:flex items-center gap-10">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 className={cn(
//                   "text-sm font-medium transition-colors relative py-2",
//                   location.pathname === item.href
//                     ? "text-primary"
//                     : "text-muted-foreground hover:text-foreground"
//                 )}
//               >
//                 {item.name}
//                 {location.pathname === item.href && (
//                   <span className="absolute -bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
//                 )}
//               </Link>
//             ))}
//           </div> */}

//           {/* CTA Button */}
//           {/* <div className="hidden md:block"> */}
//           {/* Button */}
//           <Button asChild className="max-sm:hidden">
//             <Link to="/contact">
//               <span className="absolute top-1.5 right-1.5 size-1.5 bg-black rounded-full z-50 group-hover:bg-white"></span>
//               <span className="text-lg leading-3 group-hover:text-white tracking-wide">
//                 CONTACT
//               </span>
//             </Link>
//           </Button>
//         </div>

//         {/* Mobile Navigation */}
//         {mobileMenuOpen && (
//           // <div className="md:hidden py-6 animate-fade-in border-t border-border">
//           <div className="py-6 animate-fade-in border-t border-border">
//             <div className="flex flex-col gap-4">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className={cn(
//                     "text-base font-medium transition-colors py-2",
//                     location.pathname === item.href
//                       ? "text-primary"
//                       : "text-muted-foreground hover:text-foreground",
//                   )}
//                   onClick={() => setMobileMenuOpen(false)}>
//                   {item.name}
//                 </Link>
//               ))}
//               {/* <Button asChild className="mt-4">
//                 <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
//                   Get Started
//                 </Link>
//               </Button> */}
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/aireb_logo.png";
import { Button } from "../ui/button";

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

  return (
    <header className=" w-full z-50">
      {/* TOP BAR */}
      <div className="  px-8">
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
            onClick={() => (window.location.href = "/contact")}>
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
                {/* LEFT NAV - Keep as is */}
                <div className="col-span-3 flex flex-col gap-4 lg:gap-6">
                  {leftMenu.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => setActiveTab(item.name)}
                      className={`text-left px-4 py-2.5 lg:py-3 rounded-md transition-all text-sm lg:text-base font-medium ${
                        activeTab === item.name
                          ? "bg-blue-600 shadow-lg scale-105"
                          : "hover:bg-white/10 hover:translate-x-1"
                      }`}>
                      {item.name}
                    </button>
                  ))}

                  <button
                    onClick={() => (window.location.href = "/contact")}
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
                    <div className="space-y-6 ">
                      {activeContent?.items.slice(0, 6).map((item, i) => (
                        <button
                          key={i}
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
                          className="text-left border-b border-white cursor-pointer hover:text-blue-300 transition-colors py-2 hover:translate-x-1 duration-200 whitespace-nowrap w-full">
                          {item}
                        </button>
                      ))}
                    </div>

                    {/* COLUMN 3 - Last 4 items + Engagement Models */}
                    <div className=" flex flex-col justify-center items-center">
                      {/* Last 4 items */}
                      <div className="max-w-[200px] space-y-6">
                        {activeContent?.items.slice(12, 16).map((item, i) => (
                          <button
                            key={i}
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
                          <button className="bg-primary px-[7px] py-1.5 rounded text-xs font-normal font-outfit transition-all shadow-sm hover:shadow">
                            Project Based Delivery
                          </button>
                          <button className=" bg-primary px-[7px] py-1.5 rounded text-xs font-normal font-outfit transition-all  ">
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
                      onClick={() => setActiveTab(item.name)}
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
                    <button className="bg-blue-600 px-3 py-2 rounded-md">
                      Project Based
                    </button>
                    <button className="border border-white px-3 py-2 rounded-md">
                      Dedicated Team
                    </button>
                  </div>
                </div>

                {/* CONTACT BUTTON - MOBILE */}
                <button
                  onClick={() => (window.location.href = "/contact")}
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
