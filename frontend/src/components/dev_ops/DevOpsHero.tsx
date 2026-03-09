import { Link } from "react-router-dom";
import bgImg from "../../assets/devops_hero_bg.png";
import BtnIcon from "@/assets/icons/btn_icon.svg?react";

const DevOpsHero = () => {
  return (
    <section className="relative w-full bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(66deg,#629DFF_-90%,rgba(0,0,0,0.2)_114%)]" />
      {/* Content */}
      <div className="relative z-10 min-h-screen px-6 lg:px-8 py-16 lg:py-24 flex flex-col justify-center ">
        <div className="space-y-8 ">
          <h1 className="font-stoke text-[clamp(28px,5vw,56px)] leading-[1.28] text-white">
            Transforming Software <br /> Development with <br /> DevOps
          </h1>
          <p className="font-outfit text-[clamp(14px,1.5vw,18px)] leading-[1.6] text-gray-300 max-w-2xl">
            At Aireb solutions we help businesses accelerate software delivery
            with powerful DevOps practices. Our solution improves collaboration,
            automation workflow,
          </p>
          <a
            href="#contact-form"
            style={{
              background: "linear-gradient(90deg, #4285F4 0%, #02070F 100%)",
            }}
            className="group border border-primary inline-flex items-center gap-2 text-textColor text-xs sm:text-sm font-medium px-[21px] py-[16px] hover:scale-105 transition-all whitespace-nowrap">
            Request DevOps Services
            <BtnIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-current  transition-colors duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DevOpsHero;
