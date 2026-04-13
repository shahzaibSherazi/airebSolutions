import bgImg from "../../assets/web_hero_bg.png";
import BtnIcon from "@/assets/icons/btn_icon.svg?react";
const WebHeroSection = () => {
  return (
    <section className="heros_height relative w-full bg-black flex justify-end flex-col overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImg})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(66deg,#629DFF_-90%,rgba(0,0,0,0.2)_114%)]" />

      {/* Content */}
      <div className="relative z-10  px-6 py-8 lg:py-10 flex flex-col gap-2 lg:gap-4">
        <h1 className="font-stoke text-[clamp(18px,5vw,56px)] leading-[1.28] text-white">
          Web Development <br className="hidden lg:block" />
          Service
        </h1>
        <p className="font-outfit text-[clamp(14px,1.5vw,18px)] leading-[1.6] text-textColor max-w-2xl">
          We build scalable custom websites and web apps with powerful features
          tailored to your business needs. Our services include CMS development,
          API integrations, AI solutions, and high-performance Progressive Web
          Apps. We deliver secure, user-friendly, and future-ready digital
          solutions that grow with your business.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-fit gap-3 sm:gap-4">
          <button className="font-outfit font-bold text-sm md:text-lg  px-6 sm:px-7 py-2 sm:py-[9px] bg-black text-textColor rounded border-025 hover:bg-textColor hover:text-black transition-all duration-300 shadow-md hover:shadow-lg">
            Discover It
          </button>
          <button className="font-outfit font-bold text-sm md:text-lg  px-6 sm:px-7 py-2 sm:py-[9px] bg-black text-textColor rounded border-025 hover:bg-textColor hover:text-black transition-all duration-300 shadow-md hover:shadow-lg">
            Start A Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default WebHeroSection;
