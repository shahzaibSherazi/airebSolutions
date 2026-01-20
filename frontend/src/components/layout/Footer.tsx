import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { LuReply } from "react-icons/lu";
import replyIcon from "../../assets/icons/reply.png";

const Footer = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(180deg, #0A20B9 0%, #000000 100%)",
      }}>
      {/* Main Content */}
      <div className="flex md:pt-[87px] md:px-[29px] pt-[91px] px-[14px] w-full">
        <div className="w-full">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-2 gap-[94px] mb-[27px]">
            {/* Portfolio Card  */}
            <div className="bg-[#FFFFFF] max-w-[459px] text-black rounded-[7px] md:px-[19px] px-[18px] md:pt-[15px] pt-3 pb-[18px] md:pb-[22px] overflow-hidden transition-transform duration-300 hover:scale-95 cursor-pointer">
              <p className="text-[22px] leading-[56px] font-stoke font-medium mb-[10px] md:mb-6">
                Portfolio
              </p>
              <h2 className="text-[48px] md:text-[58px] leading-[78px] font-stoke font-medium mb-[76px]">
                Project &<br />
                Blogs
              </h2>
              <a
                href="#"
                className="inline-flex items-center text-[16px] leading-[56px] font-medium font-stoke border-b-[1px] border-black group">
                View Portfolio
                <img
                  src={replyIcon}
                  className="ml-[14px] w-[26px] h-[26px] group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
            {/* Navigation Menu */}
            <div className="flex flex-col justify-center max-w-[510px]">
              {["Home", "Services", "Industries", "Resources", "About Us"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="flex items-center justify-between text-white border-b border-white  hover:border-white transition-colors group">
                    <span className="text-[18px] leading-[56px]">{item}</span>
                    <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />{" "}
                  </a>
                ),
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-[14px] gap-[65px]">
            <div className="lg:col-span-2 bg-primary rounded-[7px] text-white pt-[28px] pl-[35px] md:pl-[29px] md:pr-[14px] pr-[10px] pb-[26px] md:pb-[28px] overflow-hidden transition-transform duration-300 hover-zoom cursor-pointer">
              <p className="text-[22px] leading-[56px] font-medium font-stoke mb-[11px] md:mb-[27px]">
                Get In Touch
              </p>
              <h1 className="text-[32px] md:text-[68px] font-normal font-stoke mb-[91px] md:mb-[125px] leading-[100%]">
                Start A Project
              </h1>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-[213px] gap-[42px]">
                <p className="text-[24px] md:text-[25px] font-stoke font-normal">
                  Enhance Your Brand Potential
                </p>
                <a
                  href="#"
                  className="inline-flex self-end items-center text-[22px] leading-[56px] font-medium font-stoke hover:underline group w-fit border-b border-white">
                  Contact Us
                  <img
                    src={replyIcon}
                    className="ml-[50px] w-[26px] h-[26px] opacity-100 invert group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
            <div className="lg:col-span-1 bg-[#F5F5F0] text-black rounded-[7px] p-8 md:p-10 overflow-hidden transition-transform duration-300 hover:scale-95 cursor-pointer">
              <h3 className="text-2xl font-serif mb-6">Location</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm leading-relaxed">
                    1309 Coffeen Avenue STE 1200
                    <br /> Sheridan, Wyoming 82801
                  </p>
                </div>
                <div>
                  <p className="text-sm leading-relaxed">
                    55 Village Centre Place, Suite 200,
                    <br /> Mississauga, ON L4Z1V9
                  </p>
                </div>
                <div>
                  <p className="text-sm leading-relaxed">
                    8, Farooq Avenue, G Block, Johar Town,
                    <br /> Lahore Pakistan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-black text-white py-6 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <a href="#" className="text-sm hover:underline">
            Terms & Conditions
          </a>
          <p className="text-sm">© 2025 AirebSolutions</p>
          <a href="#" className="text-sm hover:underline">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
