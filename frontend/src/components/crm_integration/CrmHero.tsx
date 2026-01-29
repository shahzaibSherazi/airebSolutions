import service1 from "../../assets/service1.png";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CrmHero = () => {
  return (
    <section className="relative w-full  bg-black flex items-center">
      <div className="w-full px-8 py-[8vh] sm:py-[10vh] lg:py-[12vh]">
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-end justify-between gap-[6vh] lg:gap-[4vw] xl:gap-[6vw]">
          {/* Left Column: Text Content */}
          <div
            className="w-full  flex flex-col items-start gap-[2vh] sm:gap-[3vh] lg:gap-[4.5vh] lg:pt-0 sm:pt-20 pt-6"
            style={{
              marginTop: "clamp(60px, 15vh, 291px)",
            }}>
            {/* Description Text */}
            <p className="font-outfit font-normal text-[clamp(14px,1.5vw,18px)] leading-[1.6] tracking-[0px] text-gray-300  w-full">
              We create modern websites and webapps powered by efficient code,
              intelligent architecture, and seamless brand experiences built to
              deliver long-term commercial value.
            </p>

            {/* Get Started Button */}
            <div className="mt-[2vh] sm:mt-[3vh] lg:mt-[4vh]">
              <button className="group flex items-center  gap-3 sm:gap-4 bg-[#0B23C8] pl-4 sm:pl-6 pr-1 py-1 text-base sm:text-lg tracking-wide hover:bg-blue-700 transition-all duration-300">
                <span className="whitespace-nowrap">Get Started</span>
                <span className="bg-white w-11 h-11 sm:w-12 sm:h-12 text-black flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Card  */}
          <div
            className="w-full lg:w-[48%] xl:w-[45%] flex justify-center lg:justify-end"
            style={{
              marginTop: "clamp(40px, 11.7vh, 225px)",
            }}>
            <div className="card-container relative w-full lg:max-w-[473px] h-[clamp(420px,54vh,519px)]">
              {/* Card with cut corners */}
              <div
                className="p-2 sm:p-3 relative w-full h-full border border-[#001FEF] overflow-hidden"
                style={{
                  background:
                    "linear-gradient(180deg, #0B23C8 0%, rgba(0,0,0,0) 100%)",
                }}>
                {/* Image Container */}
                <div className="w-full h-full overflow-hidden relative">
                  <img
                    src={service1}
                    alt="Web Development Service"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrmHero;
