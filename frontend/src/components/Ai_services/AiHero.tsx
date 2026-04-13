import bgImg from "../../assets/Ai_hero_bg.png";

const AiHero = () => {
  return (
    <section className="heros_height relative w-full flex flex-col justify-end bg-black">
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
      <div className="relative z-10  px-6 py-8  lg:py-10 flex flex-col justify-end gap-4 ">
        <h1 className="font-stoke text-[clamp(18px,5vw,56px)] leading-[1.28] text-white">
          AI and Machine <br /> Learning Services
        </h1>
        <p className="font-outfit text-[clamp(14px,1.5vw,18px)] leading-[1.6] text-white max-w-2xl">
          We provide smart AI-powered solutions that make workflows run more
          smoothly, analyse data, and help people make better decisions. We
          build AI systems that are scalable, safe, and ready for the future.
          These systems use predictive analytics, natural language processing,
          computer vision, and generative AI to help businesses grow.
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

export default AiHero;
