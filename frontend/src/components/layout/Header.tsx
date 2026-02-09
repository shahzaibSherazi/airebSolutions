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
  // "UI/UX Design": "/ui-ux-design",
  // "Cloud Solutions": "/cloud-solutions",
  "AI Services": "/ai-services",
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
      // "UI/UX Design",
      // "Cloud Solutions",
      "AI Services",
      "DevOps Services",
      "CRM Integration",
      "API Integration",
      "Digital Marketing",
      "E-commerce Solutions",
      "Custom Software",

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
  const [activeMobileMenu, setActiveMobileMenu] = useState(null); // Separate state for mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownTimeoutRef = useRef(null);
  const headerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navigate = useNavigate();

  // Handle scroll to show/hide header
  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setActiveDropdown(null);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlHeader, { passive: true });
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const scrollY = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";

      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setActiveMobileMenu(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  // Handle mouse enter on menu item (Desktop)
  const handleMouseEnter = (menuName) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menuName);
  };

  // Handle mouse leave from menu item (Desktop)
  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  // Handle mobile menu toggle
  const handleMobileMenuToggle = (menuName) => {
    if (menuName === "Home") {
      handleMenuClick(menuName);
    } else {
      // Toggle: if same menu clicked, close it. Otherwise, open new one
      setActiveMobileMenu(activeMobileMenu === menuName ? null : menuName);
    }
  };

  // Handle item click
  const handleItemClick = (itemName) => {
    const route = itemRoutes[itemName];
    if (route) {
      navigate(route);
      setActiveDropdown(null);
      setActiveMobileMenu(null);
      setIsMobileMenuOpen(false);
    }
  };

  // Handle main menu click
  const handleMenuClick = (menuName) => {
    if (menuName === "Home") {
      navigate("/");
      setActiveDropdown(null);
      setActiveMobileMenu(null);
      setIsMobileMenuOpen(false);
    }
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  // Close dropdown when clicking outside (Desktop)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-black/95 backdrop-blur-md border-b border-white/10 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}>
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 z-50">
              <img src={logo} alt="Logo" className="h-10 sm:h-12 w-auto" />
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
                    className={`px-4 py-2 font-medium text-sm flex items-center gap-1 transition-all rounded-lg ${
                      activeDropdown === menu.name
                        ? "text-white bg-white/10"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}>
                    {menu.name}
                    {menu.items.length > 0 && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          activeDropdown === menu.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Dropdown Menu - Grid Layout */}
                  {menu.items.length > 0 && activeDropdown === menu.name && (
                    <div
                      className="absolute top-full left-0 mt-2 backdrop-blur-xl shadow-2xl rounded-xl p-4 border border-white/20 animate-fadeIn"
                      style={{
                        minWidth: menu.items.length > 6 ? "600px" : "320px",
                        background:
                          "linear-gradient(180deg, #629DFF 0%, #000000 100%)",
                      }}
                      onMouseEnter={() => handleMouseEnter(menu.name)}
                      onMouseLeave={handleMouseLeave}>
                      <div
                        className={`grid gap-2 ${
                          menu.items.length > 6 ? "grid-cols-2" : "grid-cols-1"
                        }`}>
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
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              onClick={() => {
                                navigate("/engagement-models/project-based");
                                setActiveDropdown(null);
                              }}
                              className="text-left px-4 py-2 text-sm text-white/90 hover:bg-white/20 hover:text-white rounded-lg transition-all">
                              Project Based Delivery
                            </button>
                            <button
                              onClick={() => {
                                navigate("/engagement-models/dedicated-team");
                                setActiveDropdown(null);
                              }}
                              className="text-left px-4 py-2 text-sm text-white/90 hover:bg-white/20 hover:text-white rounded-lg transition-all">
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
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-[3px] font-medium text-sm transition-all shadow-lg hover:shadow-xl border border-white/20">
                CONTACT
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors text-white/90 hover:text-white hover:bg-white/10 z-50"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}>
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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fadeIn"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-16 sm:top-20 bottom-0 left-0 right-0 z-40 bg-gradient-to-br from-[#050b2e] via-[#0B23C8] to-[#1a34d6] transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div className="h-full overflow-y-auto overscroll-contain">
          <div className="px-4 py-6 space-y-4 pb-24">
            {menuItems.map((menu) => (
              <div key={menu.name} className="border-b border-white/20 pb-4">
                <button
                  onClick={() => handleMobileMenuToggle(menu.name)}
                  className="w-full flex items-center justify-between py-2 text-white font-medium">
                  {menu.name}
                  {menu.items.length > 0 && (
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-200 ${
                        activeMobileMenu === menu.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Submenu with smooth animation */}
                {menu.items.length > 0 && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      activeMobileMenu === menu.name
                        ? "max-h-[1000px] opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}>
                    <div className="space-y-1 pl-4">
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
                              setActiveMobileMenu(null);
                            }}
                            className="block w-full text-left py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-lg px-3 transition-colors">
                            Project Based Delivery
                          </button>
                          <button
                            onClick={() => {
                              navigate("/engagement-models/dedicated-team");
                              setIsMobileMenuOpen(false);
                              setActiveMobileMenu(null);
                            }}
                            className="block w-full text-left py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-lg px-3 transition-colors">
                            Dedicated Team
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Contact Button - Mobile */}
            <button
              onClick={() => {
                navigate("/contact");
                setIsMobileMenuOpen(false);
                setActiveMobileMenu(null);
              }}
              className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium shadow-lg border border-white/20 transition-all">
              CONTACT US
            </button>
          </div>
        </div>
      </div>

      {/* Spacer div to prevent content from going under fixed header */}
      <div className="h-16 sm:h-20" />
    </>
  );
};

export default Header;
