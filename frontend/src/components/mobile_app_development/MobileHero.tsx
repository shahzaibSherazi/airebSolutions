import bgImg from "../../assets/mobile_hero_bg.png";

const MobileHero = () => {
  return (
    <section className="heros_height relative w-full flex flex-col justify-end bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 py-8 lg:py-10 flex flex-col justify-end gap-[2vh] sm:gap-[3vh] lg:gap-[4.5vh]">
        <h1 className="font-stoke text-[clamp(28px,5vw,56px)] leading-[1.28] text-white">
          Mobile Apps & Gaming <br className="hidden lg:block" />
          Service
        </h1>
        <p className="font-outfit text-[clamp(14px,1.5vw,18px)] leading-[1.6] text-textColor max-w-2xl">
          We build mobile apps and games for iOS and Android that are simple to
          use and work effectively. Our solutions are designed to help
          organisations grow from the idea stage to deployment by making
          workflows easier, increasing engagement, and more.
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

export default MobileHero;
