import service2 from "../../assets/service2.png";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WebHeroSection = () => {
  return (
    <section className="relative w-full  bg-black flex items-center">
      <div className="w-full px-8 py-[8vh] sm:py-[10vh] lg:py-[12vh]">
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-[6vh] lg:gap-[4vw] xl:gap-[6vw]">
          {/* Left Column: Text Content */}
          <div
            className="w-full  flex flex-col items-start gap-[2vh] sm:gap-[3vh] lg:gap-[4.5vh] lg:pt-0 sm:pt-20 pt-6"
            style={{
              marginTop: "clamp(60px, 15vh, 291px)",
            }}>
            {/* Main Heading - Figma Typography: Stoke, 56px, 72px line-height */}
            <h1 className="font-stoke font-normal w-full block text-[clamp(28px,5vw,56px)] leading-[1.28] tracking-[0px] text-white">
              {/* <span className="block text-[clamp(28px,5vw,56px)] leading-[1.28] tracking-[0px] text-white"> */}
              Turning Ideas into <br className="lg:block hidden" />{" "}
              High-Performing <br className="lg:block hidden" /> Websites
            </h1>

            {/* Description Text */}
            <p className="font-outfit font-normal text-[clamp(14px,1.5vw,18px)] leading-[1.6] tracking-[0px] text-gray-300  w-full">
              We create modern websites and webapps powered by efficient code,
              intelligent architecture, and seamless brand experiences built to
              deliver long-term commercial value.
            </p>

            {/* Get Started Button */}
            <div className="mt-[2vh] sm:mt-[3vh] lg:mt-[4vh]">
              <Link to="/" className="inline-block">
                <button
                  type="button"
                  className="group flex items-center text-black font-outfit gap-[0.5vw] bg-white px-[clamp(12px,1.5vw,24px)] py-[clamp(8px,1vh,16px)] text-[clamp(13px,1.2vw,16px)] font-medium tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-white/20 whitespace-nowrap">
                  Get Started
                  <span className="bg-primary w-[clamp(32px,3vw,44px)] h-[clamp(32px,3vw,44px)] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0">
                    <ArrowRight className="w-[clamp(14px,1.5vw,18px)] h-[clamp(14px,1.5vw,18px)]" />
                  </span>
                </button>
              </Link>
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
                    src={service2}
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

export default WebHeroSection;
