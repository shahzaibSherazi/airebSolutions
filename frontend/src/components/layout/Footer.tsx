// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { LuReply } from "react-icons/lu";
// import replyIcon from "../../assets/icons/reply.png";
// import AnimatedParagraph from "../ui/AnimatedParagraph";

// const Footer = () => {
//   return (
//     <div
//       className=" flex flex-col"
//       style={{
//         background: "linear-gradient(180deg, #629DFF 0%, #000000 100%)",
//       }}>
//       {/* Main Content */}
//       <div className="flex md:pt-[87px] md:px-[29px] pt-[91px] px-[14px] w-full">
//         <div className="w-full">
//           {/* Top Section */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-2 xl:gap-[14px] gap-[94px] mb-[27px]">
//             {/* Portfolio Card  */}
//             <div className="bg-[#FFFFFF] lg:max-w-[459px] max-w-none 2xl:max-w-full text-black rounded-[7px] md:px-[19px] px-[18px] md:pt-[15px] pt-3 pb-[18px] md:pb-[22px] overflow-hidden transition-transform duration-300 hover:scale-95 cursor-pointer">
//               <p className="text-[22px] leading-[56px] font-stoke font-medium mb-[10px] md:mb-6">
//                 Portfolio
//               </p>
//               <h2 className="text-[48px] md:text-[58px] leading-[78px] font-stoke font-medium mb-[76px]">
//                 Project &<br />
//                 Blogs
//               </h2>
//               <a
//                 href="#"
//                 className="inline-flex items-center text-[16px] leading-[56px] font-medium font-stoke border-b-[1px] border-black group">
//                 View Portfolio
//                 <img
//                   src={replyIcon}
//                   className="ml-[14px] w-[26px] h-[26px] group-hover:translate-x-1 transition-transform"
//                 />
//               </a>
//             </div>
//             {/* Navigation Menu */}
//             <div className="flex flex-col justify-center lg:max-w-[510px] max-w-none 2xl:max-w-full">
//               {["Home", "Services", "Industries", "Resources", "About Us"].map(
//                 (item) => (
//                   <a
//                     key={item}
//                     href="#"
//                     className="flex items-center justify-between text-white border-b border-white  hover:border-white transition-colors group">
//                     <span className="text-[18px] leading-[56px]">{item}</span>
//                     <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />{" "}
//                   </a>
//                 ),
//               )}
//             </div>
//           </div>
//           <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-[14px] gap-[65px]">
//             <div className="lg:col-span-2 bg-primary rounded-[7px] text-white pt-[28px] pl-[35px] md:pl-[29px] md:pr-[14px] pr-[10px] pb-[26px] md:pb-[28px] overflow-hidden transition-transform duration-300 hover-zoom cursor-pointer">
//               <p className="text-[22px] leading-[56px] font-medium font-stoke mb-[11px] md:mb-[27px]">
//                 Get In Touch
//               </p>
//               <h1 className="text-[32px] md:text-[68px] font-normal font-stoke mb-[91px] md:mb-[125px] leading-[100%]">
//                 Start A Project
//               </h1>
//               <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-[213px] gap-[42px]">
//                 <p className="text-[24px] md:text-[25px] font-stoke font-normal">
//                   Enhance Your Brand Potential
//                 </p>
//                 <div className="flex self-end max-w-full">
//                   <a
//                     href="#"
//                     className="inline-flex items-center gap-[50px] whitespace-nowrap
//                text-[22px] leading-[56px] font-medium font-stoke
//                border-b border-white group
//                max-w-full overflow-hidden">
//                     <span className="truncate">Contact Us</span>
//                     <img
//                       src={replyIcon}
//                       alt="reply"
//                       className="w-[26px] h-[26px] shrink-0 invert
//                  group-hover:translate-x-1 transition-transform"
//                     />
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="lg:col-span-1 md:bg-[#F5F5F0] md:text-black rounded-[7px] px-[21px] md:px-[33px] py-[28px] overflow-hidden transition-transform duration-300 hover:scale-95 cursor-pointer text-white">
//               <h3 className="text-[32px] leading-[22px] font-stoke mb-9">
//                 Location
//               </h3>
//               <div className="space-y-6">
//                 <div className=" ">
//                   <AnimatedParagraph
//                     textColor="md:text-black text-white"
//                     className="text-[17px] font-normal  leading-7 font-stoke border-b md:border-black   pb-[15px] border-white "
//                     text={`1309 Coffeen Avenue STE 1200\nSheridan, Wyoming 82801`}
//                   />
//                 </div>
//                 <div>
//                   <AnimatedParagraph
//                     textColor="md:text-black text-white"
//                     className="text-[17px] font-normal  leading-7 font-stoke border-b-[0.25px] md:border-black   pb-[15px] border-white"
//                     text={`55 Village Centre Place, Suite 200,\n Mississauga, ON L4Z1V9`}
//                   />
//                 </div>
//                 <div>
//                   <AnimatedParagraph
//                     textColor="md:text-black text-white"
//                     className="text-[17px] font-normal  leading-7 font-stoke border-b md:border-black   pb-[15px] border-white"
//                     text={`8, Farooq Avenue, G Block, Johar Town,\n Lahore Pakistan.`}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Footer */}
//       <footer className=" text-white py-14 md:px-9 px-[22px]">
//         <div className=" flex flex-row flex-wrap justify-between gap-y-[38px]">
//           <a
//             href="#"
//             className="text-base hover:underline font-stoke font-normal">
//             Privacy Policy
//           </a>
//           <p className="text-base hover:underline font-stoke font-normal md:border-l-0 border-l border-white pl-[14px] md:pl-0">
//             Terms & Conditions
//           </p>
//           <a
//             href="#"
//             className="text-base hover:underline font-stoke font-normal">
//             © 2025 AirebSolutions
//           </a>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;

import { useState } from "react";
import logo from "@/assets/aireb_logo.png";

// ── Data ──────────────────────────────────────────────────────────────────────
const ALL_SERVICES = [
  "Expert Web Development Services",
  "Expert Web Development Services",
  "Expert Web Development Services",
  "Expert Web Development Services",
  "Expert Web Development Services",
  "UI/UX Design Services",
  "Mobile App Development",
  "Cloud Solutions & DevOps",
  "AI & Machine Learning Solutions",
  "Digital Marketing Services",
];

const ALL_INDUSTRIES = [
  "Expert Web Development Services",
  "Expert Web Development Services",
  "Expert Web Development Services",
  "Expert Web Development Services",
  "Expert Web Development Services",
  "Healthcare & Pharmaceuticals",
  "E-commerce Solutions",
  "Education Technology",
  "Fintech & Banking",
  "Real Estate & PropTech",
];

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
      <div className=" px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {/* Services */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-stoke font-medium text-lg mb-1">
              Services
            </h4>
            {visibleServices.map((item, i) => (
              <a
                key={i}
                href="#"
                className="text-textColor text-base font-outfit font-light hover:text-black transition-colors duration-200 leading-snug">
                {item}
              </a>
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
              <a
                key={i}
                href="#"
                className="text-textColor text-base font-outfit font-light hover:text-black transition-colors duration-200 leading-snug">
                {item}
              </a>
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
            <h4 className="text-white font-outfit font-medium text-base mb-1">
              Resources
            </h4>
            {["Blogs", "White Papers", "Careers", "Contact Us"].map(
              (item, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-textColor text-base font-outfit font-light hover:text-black transition-colors duration-200 leading-snug">
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
                flag: "🇺🇸",
                addr: "1309 Caffeen Avenue STE 1200\nSheridan, Wyoming 82801",
              },
              {
                flag: "🇨🇦",
                addr: "55 Village Centre Place, Suite 200,\nMississauga, ON L4Z1V9",
              },
              {
                flag: "🇵🇰",
                addr: "55 Village Centre Place, Suite 200,\nMississauga, ON L4Z1V9",
              },
            ].map(({ flag, addr }, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-md flex-shrink-0 flex items-center justify-center bg-white/10 text-lg leading-none">
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
      <div className=" px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr,1fr] items-start gap-10 lg:gap-6">
          {/* Left — brand + description */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1">
              <h3 className="bg-gradient-to-r from-primary to-textColor bg-clip-text text-transparent font-bold text-xl">
                Aireb Solutions
              </h3>
            </div>
            <p className="text-textColor font-outfit text-sm leading-relaxed ">
              Aireb Solutions empowers businesses with innovative fintech and
              AI-driven services. From CRM integrations to digital content and
              automation, we tailor solutions that drive growth.
            </p>
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
                href="#"
                className="text-white font-outfit hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <span className="text-white font-outfit">and</span>
              <a
                href="#"
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
          <div className="flex lg:justify-end items-start">
            <div className="flex items-center gap-4 mt-1">
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
                  className="flex items-center justify-center transition-all duration-200 hover:scale-110 hover:brightness-125"
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
