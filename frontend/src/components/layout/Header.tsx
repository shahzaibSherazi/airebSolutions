import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/aireb_logo.png";

// ─── Route Map ───────────────────────────────────────────────────────────────

const itemRoutes: Record<string, string> = {
  // Home
  Home: "/",

  // Services
  "Web Development": "/services/web-development",
  "Mobile App Development": "/services/mobile-app-development",
  "UI/UX Design": "/services/ui-ux-design",
  "Content Writing": "/services/content-writing",
  "AI Services": "/services/ai-services",
  "DevOps Services": "/services/devops-services",
  "CRM Integration": "/services/crm-integration",
  Dialer: "/services/dialer",
  "E-commerce Solutions": "/services/ecommerce",
  "On Demand": "/services/on-demand",
  "API Integration": "/services/api-integration",
  "Logo Design": "/services/logo-design",
  "Contact Center": "/services/contact-center",

  // Industries
  Healthcare: "/industries/healthcare",
  "Banking & Fintech": "/industries/banking-fintech",
  "E-commerce": "/industries/ecommerce",
  Education: "/industries/education",
  "Real Estate": "/industries/real-estate",
  Gaming: "/industries/gaming",
  Telecommunication: "/industries/telecommunication",
  "Start Up": "/industries/start-up",
  Retail: "/industries/retail",
  "Travel & Hospitality": "/industries/travel-hospitality",

  // Resources
  Blogs: "/resources/blogs",
  "Case Studies": "/resources/case-studies",
  Whitepapers: "/resources/white-papers",
  Portfolio: "/resources/portfolio",

  // About Us
  "Our Story": "/about-us",
  Careers: "/about/careers",
};

// ─── Menu Structure ───────────────────────────────────────────────────────────

const menuItems = [
  { name: "Home", items: [] },
  {
    name: "Services",
    items: [
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "Content Writing",
      "AI Services",
      "DevOps Services",
      "CRM Integration",
      "API Integration",
      "Dialer",
      "E-commerce Solutions",
      "On Demand",
      "Logo Design",
      "Contact Center",
    ],
  },
  {
    name: "Industries",
    items: [
      "Healthcare",
      "Education",
      "E-commerce",
      "Banking & Fintech",
      "Real Estate",
      "Gaming",
      "Telecommunication",
      "Start Up",
      "Retail",
      "Travel & Hospitality",
    ],
  },
  {
    name: "Resources",
    items: ["Blogs", "Case Studies", "Whitepapers", "Portfolio"],
  },
  {
    name: "About Us",
    items: ["Our Story", "Careers"],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const location = useLocation();

  // ─── Helpers ──────────────────────────────────────────────────────────────

  /**
   * Returns true ONLY for the parent menu whose direct child routes
   * include the current pathname — exact match, no startsWith.
   */
  const isParentActive = (menuName: string): boolean => {
    const path = location.pathname;

    // "Home" has no children — match its own route exactly
    if (menuName === "Home") return path === "/";

    const menu = menuItems.find((m) => m.name === menuName);
    if (!menu || menu.items.length === 0) return false;

    const childRoutes = menu.items.map((item) => itemRoutes[item]);
    return childRoutes.includes(path);
  };

  const clearDropdownTimeout = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
  };

  const scheduleDropdownClose = () => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  // ─── Scroll: show / hide header ──────────────────────────────────────────

  useEffect(() => {
    const handleScroll = () => {
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // ─── Body scroll lock when mobile menu is open ───────────────────────────

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
      if (scrollY) window.scrollTo(0, parseInt(scrollY) * -1);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // ─── Close mobile menu on resize to desktop ──────────────────────────────

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

  // ─── Close desktop dropdown on outside click ─────────────────────────────

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ─── Cleanup timeout on unmount ──────────────────────────────────────────

  useEffect(() => {
    return () => clearDropdownTimeout();
  }, []);

  // ─── Handlers ────────────────────────────────────────────────────────────

  const handleMobileMenuToggle = (menuName: string) => {
    if (menuName === "Home") {
      navigate("/");
      setIsMobileMenuOpen(false);
      setActiveMobileMenu(null);
    } else {
      setActiveMobileMenu((prev) => (prev === menuName ? null : menuName));
    }
  };

  const handleItemClick = (itemName: string) => {
    const route = itemRoutes[itemName];
    if (route) {
      navigate(route);
      setActiveDropdown(null);
      setActiveMobileMenu(null);
      setIsMobileMenuOpen(false);
    }
  };

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <>
      {/* ── Fixed Header ── */}
      <header
        ref={headerRef}
        className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-black backdrop-blur-md ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}>
        <div className="container px-2 lg:px-8">
          <div className="flex items-center justify-between header">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 z-50">
              <img src={logo} alt="Logo" className="h-10 sm:h-12 w-auto" />
            </Link>

            {/* ── Desktop Navigation ── */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((menu) => (
                <div
                  key={menu.name}
                  className="relative"
                  onMouseEnter={() => {
                    clearDropdownTimeout();
                    setActiveDropdown(menu.name);
                  }}
                  onMouseLeave={scheduleDropdownClose}>
                  {/* Parent nav button — uses isParentActive only, NOT NavLink isActive,
                      because to="#" makes React Router mark every item as active */}
                  <NavLink
                    to={menu.items.length === 0 ? itemRoutes[menu.name] : "#"}
                    className={() =>
                      `px-4 py-2 font-stoke font-medium text-sm flex items-center gap-1 transition-all rounded-lg
                      ${
                        isParentActive(menu.name)
                          ? "bg-white/20 text-white"
                          : activeDropdown === menu.name
                            ? "bg-white/10 text-white"
                            : "text-white/90 hover:text-white hover:bg-white/10"
                      }`
                    }>
                    {menu.name}
                    {menu.items.length > 0 && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          activeDropdown === menu.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </NavLink>

                  {/* Dropdown */}
                  {menu.items.length > 0 && activeDropdown === menu.name && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 backdrop-blur-xl shadow-2xl rounded-xl p-4 animate-fadeIn"
                      style={{
                        minWidth: menu.items.length > 6 ? "600px" : "320px",
                        background:
                          "linear-gradient(180deg, #629DFF 0%, #000000 100%)",
                      }}
                      onMouseEnter={() => {
                        clearDropdownTimeout();
                        setActiveDropdown(menu.name);
                      }}
                      onMouseLeave={scheduleDropdownClose}>
                      <div className="grid gap-2 grid-cols-2">
                        {menu.items.map((item) => (
                          <NavLink
                            key={item}
                            to={itemRoutes[item]}
                            className={({ isActive }) =>
                              `text-left px-4 py-2.5 font-outfit text-sm rounded-lg transition-all block
                              ${
                                isActive
                                  ? "bg-white/20 text-white"
                                  : "text-white hover:bg-white/20 hover:text-white"
                              }`
                            }
                            onClick={() => setActiveDropdown(null)}>
                            {item}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Contact Button — Desktop */}
            <div className="hidden lg:block">
              <button
                onClick={() => navigate("/contact-us")}
                className="relative bg-primary hover:bg-primary/90 font-stoke text-white px-6 py-2 font-medium text-sm transition-all shadow-lg hover:shadow-xl">
                CONTACT
                <span className="absolute -top-2 right-2 w-3 h-3 animate-pulse">
                  .
                </span>
              </button>
            </div>

            {/* Hamburger — Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
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

      {/* ── Mobile Backdrop ── */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fadeIn"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* ── Mobile Menu Panel ── */}
      <div
        ref={mobileMenuRef}
        style={{
          background: "linear-gradient(180deg, #629DFF 0%, #000000 100%)",
        }}
        className={`lg:hidden fixed top-16 sm:top-20 bottom-0 left-0 right-0 z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div className="h-full overflow-y-auto overscroll-contain">
          <div className="px-4 py-6 space-y-4 pb-24">
            {menuItems.map((menu) => (
              <div key={menu.name} className="border-b border-white/20 pb-4">
                {/* Parent row */}
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

                {/* Submenu — smooth height animation */}
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

                      {/* Engagement Models — Services only */}
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

            {/* Contact Button — Mobile */}
            <button
              onClick={() => {
                navigate("/contact-us");
                setIsMobileMenuOpen(false);
                setActiveMobileMenu(null);
              }}
              className="w-fit bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium shadow-lg border border-white/20 transition-all">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
