import { useState } from "react";
import logo from "@/assets/aireb_logo.png";
import UsaFlag from "@/assets/icons/footer/usa-flag.svg?react";
import CanadaFlag from "@/assets/icons/footer/canada-flag.svg?react";
import PakFlag from "@/assets/icons/footer/pak-flag.svg?react";
import bgImg from "@/assets/icons/footer/circle.png";
import { Link } from "react-router-dom";

// ── Data ──────────────────────────────────────────────────────────────────────
const ALL_SERVICES = [
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
];

const ALL_INDUSTRIES = [
  "Healthcare",
  "Education",
  "E-commerce",
  "Banking & FinTech",
  "Real Estate",
  "Gaming",
  "Telecommunication",
  "Start Up",
  "Retail",
  "Travel & Hospitality",
];

const ROUTES: Record<string, string> = {
  // Services
  "Web Development": "/web-development",
  "Mobile App Development": "/mobile-app-development",
  "UI/UX Design": "/ui-ux-design",
  "Content Writing": "/content-writing",
  "AI Services": "/ai-services",
  "DevOps Services": "/devops-services",
  "CRM Integration": "/crm-integration",
  "API Integration": "/api-integration",
  Dialer: "/dialer",
  "E-commerce Solutions": "/ecommerce",
  "On Demand": "/on-demand",
  "Logo Design": "/logo-design",
  "Contact Center": "/contact-center",

  // Industries
  Healthcare: "/industries/healthcare",
  Education: "/industries/education",
  "E-commerce": "/industries/ecommerce",
  "Banking & FinTech": "/industries/finance-banking",
  "Real Estate": "/industries/real-estate",
};

const INITIAL_COUNT = 5;

export default function Footer() {
  const [showAllServices, setShowAllServices] = useState(false);
  const [showAllIndustries, setShowAllIndustries] = useState(false);

  const visibleServices = showAllServices
    ? ALL_SERVICES
    : ALL_SERVICES.slice(0, INITIAL_COUNT);
  const visibleIndustries = showAllIndustries
    ? ALL_INDUSTRIES
    : ALL_INDUSTRIES.slice(0, INITIAL_COUNT);

  return (
    <footer
      className="w-full"
      style={{
        background: "linear-gradient(180deg, #4285F4 0%, #02070F 100%)",
      }}>
      {/* ── Top: 4 columns ─────────────────────────────────────────────────── */}
      <div className=" px-6 lg:px-8 pt-16 lg:pt-24 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {/* Services */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-stoke font-medium text-lg mb-1">
              Services
            </h4>
            {visibleServices.map((item, i) => (
              <Link
                to={ROUTES[item] || "#"}
                className="text-textColor text-base font-outfit font-thin hover:text-black transition-colors duration-200 leading-snug">
                {item}
              </Link>
            ))}
            <button
              onClick={() => setShowAllServices((p) => !p)}
              className="text-white font-outfit text-base font-light mt-1 text-left hover:underline transition-all duration-200">
              {showAllServices ? "View Less Services ↑" : "View All Services"}
            </button>
          </div>

          {/* Industries */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-stoke font-medium text-lg mb-1">
              Industries
            </h4>
            {visibleIndustries.map((item, i) => (
              <Link
                to={ROUTES[item] || "#"}
                className="text-textColor text-base font-outfit font-thin hover:text-black transition-colors duration-200 leading-snug">
                {item}
              </Link>
            ))}
            <button
              onClick={() => setShowAllIndustries((p) => !p)}
              className="text-white font-outfit text-base font-light mt-1 text-left hover:underline transition-all duration-200">
              {showAllIndustries
                ? "View Less Industries ↑"
                : "View All Industries"}
            </button>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-stoke font-medium text-lg mb-1">
              Resources
            </h4>
            {["Blogs", "White Papers", "Careers", "Contact Us"].map(
              (item, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-textColor text-base font-outfit font-thin hover:text-black transition-colors duration-200 leading-snug">
                  {item}
                </a>
              ),
            )}
          </div>

          {/* About Us */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-outfit font-medium text-base mb-1">
              About Us
            </h4>
            {[
              {
                flag: <UsaFlag />,
                addr: "1309 Caffeen Avenue STE 1200\nSheridan, Wyoming 82801",
              },
              {
                flag: <CanadaFlag />,
                addr: "55 Village Centre Place, Suite 200,\nMississauga, ON L4Z1V9",
              },
              {
                flag: <PakFlag />,
                addr: "55 Village Centre Place, Suite 200,\nMississauga, ON L4Z1V9",
              },
            ].map(({ flag, addr }, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-md flex-shrink-0 flex items-center justify-center bg-white text-lg leading-none">
                  {flag}
                </div>
                <p className="text-textColor font-outfit text-sm leading-snug whitespace-pre-line">
                  {addr}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom section ─────────────────────────────────────────────────── */}
      <div className=" px-6 lg:px-8 pt-10 lg:pb-24 pb-16 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr,1fr] items-start gap-28">
          {/* Left — brand + description */}
          <div className=" ">
            {/* Content sits above the circle */}
            <div className="relative flex flex-col gap-3">
              <div
                className="absolute -top-50 -left-50 w-[200px] h-[200px] 
                  bg-[radial-gradient(circle_at_center,_#3b82f6_0%,_#2563eb_40%,_#1e40af_70%,_transparent_75%)]
                  blur-3xl opacity-70 rounded-full"></div>
              <div
                className="absolute lg:block hidden pointer-events-none"
                style={{
                  width: 430,
                  height: 340,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.1)",
                  top: "55%",
                  left: "30%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 0,
                }}
              />{" "}
              <div className="flex items-center gap-1">
                {" "}
                <h3 className="bg-gradient-to-r from-primary to-textColor bg-clip-text text-transparent font-bold text-xl">
                  {" "}
                  Aireb Solutions{" "}
                </h3>{" "}
              </div>{" "}
              <p className="text-textColor font-outfit text-sm leading-relaxed max-w-[320px]">
                {" "}
                Aireb Solutions empowers businesses with innovative fintech and
                AI-driven services. From CRM integrations to digital content and
                automation, we tailor solutions that drive growth.{" "}
              </p>{" "}
            </div>
          </div>

          {/* Center — logo in circle + contact + legal */}
          <div className="flex flex-col items-center gap-4 w-full">
            {/* Logo wrapped in circular gradient border */}
            <div className="footerLogo_edge relative flex items-center justify-center w-full  mb-8 border-t border-b  border-primary px-12 py-4">
              <div className="max-w-[234px] h-[90px]">
                <img src={logo} className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Phone numbers */}
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <a
                href="tel:+13074567721"
                className="text-white font-outfit text-sm font-medium hover:text-primary transition-colors">
                +1 (307) 456-7721
              </a>
              <span className="text-white">|</span>
              <a
                href="tel:+13652972499"
                className="text-white font-outfit text-sm font-medium hover:text-primary transition-colors">
                +1 (365) 297-2499
              </a>
            </div>

            {/* Email */}
            <a
              href="mailto:sales@airebsolutions.com"
              className="text-white tracking-[1px] font-outfit text-sm font-medium hover:text-primary transition-colors">
              sales@airebsolutions.com
            </a>

            {/* Privacy + Terms */}
            <div className="flex items-center gap-2 text-sm">
              <a
                href="/privacy-policy"
                className="text-white font-outfit hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <span className="text-white font-outfit">|</span>
              <a
                href="/terms&conditions"
                className="text-white font-outfit hover:text-primary transition-colors">
                Terms of Use
              </a>
            </div>

            {/* Copyright */}
            <p className="text-white font-outfit text-sm">
              © 2025 AirebSolutions
            </p>
          </div>

          {/* Right — social icons with circular gradient border */}
          <div className=" flex lg:justify-end justify-center items-start">
            <div className="relative flex items-center gap-4 mt-1">
              <div
                className="absolute pointer-events-none"
                style={{
                  width: 380,
                  height: 360,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.1)",
                  top: "40%",
                  right: "-180%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 0,
                }}
              />
              {[
                {
                  label: "Facebook",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      stroke="white"
                      fill="none"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                },
              ].map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="relative z-10 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:brightness-125"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "12%",
                    padding: "2px",
                    background:
                      "linear-gradient(180deg,#4285F4 0%,#000 50%,#4285F4 100%)",
                  }}>
                  <div
                    className="flex items-center justify-center w-full h-full rounded-[4px]"
                    style={{
                      background:
                        "linear-gradient(180deg, #4285F4 20%, #02070F 100%)",
                    }}>
                    {icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
