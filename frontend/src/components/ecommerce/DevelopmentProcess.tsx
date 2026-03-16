import React from "react";
import processImg from "../../assets/Ecommerce_assets/development_img.png";
const DevelopmentProcess = () => {
  return (
    <section className="relative w-full bg-primary py-16 lg:py-24 px-6 lg:px-8">
      <div className="">
        {/* Header Section */}
        <div className="flex flex-col text-center ">
          <h2 className="font-stoke font-normal text-[clamp(28px,4.5vw,42px)] leading-[1.3] text-black mb-[2vh] sm:mb-[3vh]">
            Our E-commerce
            <br className="hidden lg:block" /> Development Process
          </h2>
          <div className="flex w-full lg:h-[639px]">
            <img src={processImg} className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
