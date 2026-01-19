import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(180deg, #0A20B9 0%, #000000 100%)",
      }}>
      {/* Main Content */}
      <div className="flex-grow p-4 md:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Portfolio Card  */}
            <div className="bg-[#F5F5F0] text-black rounded-lg p-8 md:p-10 overflow-hidden transition-transform duration-300 hover:scale-95 cursor-pointer">
              <p className="text-sm font-medium mb-4">Portfolio</p>
              <h2 className="text-4xl md:text-5xl font-serif mb-8">
                Project &<br />
                Blogs
              </h2>
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium hover:underline group">
                View Portfolio
                <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />{" "}
              </a>
            </div>
            {/* Navigation Menu */}
            <div className="flex flex-col justify-center space-y-3">
              {["Home", "Services", "Industries", "Resources", "About Us"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="flex items-center justify-between text-white border-b border-white/30 pb-3 hover:border-white transition-colors group">
                    <span className="text-base md:text-lg">{item}</span>
                    <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />{" "}
                  </a>
                ),
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-[#0A20B9] rounded-lg text-white py-8 md:py-12 px-8 md:px-10 overflow-hidden transition-transform duration-300 hover-zoom cursor-pointer">
              <p className="text-sm mb-4">Get In Touch</p>
              <h1 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
                Start A Project
              </h1>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <p className="text-lg md:text-xl">
                  Enhance Your Brand Potential
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-base hover:underline group w-fit">
                  Contact Us
                  <FaArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />{" "}
                </a>
              </div>
            </div>
            <div className="lg:col-span-1 bg-[#F5F5F0] text-black rounded-lg p-8 md:p-10 overflow-hidden transition-transform duration-300 hover:scale-95 cursor-pointer">
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
