import bgImg from "../../assets/Ondemand_assets/hero_bg.png";

const OnDemandHero = () => {
  return (
    <section className="heros_height relative w-full flex justify-end flex-col bg-black">
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
      <div className="container relative z-10 px-6 lg:px-8 py-8 lg:py-10 flex flex-col justify-end gap-4 ">
        <h1 className="font-stoke text-h1 leading-[1.28] text-white">
          Smart On-Demand
          <br className="hidden lg:block" /> Solutions Provider
        </h1>
        <p className="font-outfit text-p leading-[1.6] text-textColor max-w-2xl">
          We develop strong digital platforms that let customers connect with
          services in real time. We make scalable, safe, and easy-to-use
          solutions for anything from mobile apps and marketplaces to delivery,
          healthcare, transportation, and home services. These solutions are
          meant to boost business development, engagement, and efficiency.
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

export default OnDemandHero;
