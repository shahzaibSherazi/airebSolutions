import { ArrowRight } from "lucide-react";
import service1 from "../../assets/service1.png";

const AiHero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Conic Gradient Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "conic-gradient(from 95.36deg at 59.1% 107.16%, #000000 0deg, #000000 261.35deg, #0B23C8 297.69deg, rgba(7, 21, 120, 0.701075) 339.21deg, rgba(9, 28, 160, 0.600891) 358.74deg, #000000 360deg)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full min-h-screen flex items-center">
        <div className=" px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div
              style={{
                marginTop: "clamp(60px, 15vh, 291px)",
              }}
              className="space-y-6 lg:space-y-8">
              {/* Heading */}
              <h1
                className="text-white leading-tight font-stoke font-normal"
                style={{
                  fontSize: "clamp(30px, 5vw, 56px)",
                }}>
                Revolutionizing the Future with AI & Machine Learning
              </h1>

              {/* Description */}
              <p className="text-gray-300 font-outfit font-normal text-base">
                We create modern websites and webshops powered by efficient
                code, intelligent architecture, and seamless brand experiences
                built to deliver long-term commercial value.
              </p>

              {/* CTA Button */}
              <button className="group flex items-center  gap-3 sm:gap-4 bg-[#0B23C8] pl-4 sm:pl-6 pr-1 py-1 text-base sm:text-lg tracking-wide hover:bg-blue-700 transition-all duration-300">
                <span className="whitespace-nowrap">Get Started</span>
                <span className="bg-white w-11 h-11 sm:w-12 sm:h-12 text-black flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                </span>
              </button>
            </div>

            {/* Right Content - AI Robot Card */}
            <div className="relative flex justify-center lg:justify-end mt-10">
              {/* Card Container */}
              <div
                className="p-2 sm:p-3 relative lg:max-w-[445px] aspect-[455/490] h-full w-full border border-[#001FEF] overflow-hidden"
                style={{
                  background:
                    "linear-gradient(180deg, #0B23C8 0%, rgba(0,0,0,0) 100%)",
                }}>
                {/* Image Container */}
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
    </section>
  );
};

export default AiHero;
