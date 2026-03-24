import bgImg from "../../assets/Ondemand_assets/hero_bg.png";

const OnDemandHero = () => {
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
      <div className="relative z-10 min-h-screen px-8 py-[8vh] sm:py-[10vh] lg:py-[14vh] flex flex-col justify-end ">
        <div className="mb-[2vh] sm:mb-[3vh] ">
          <p className="font-outfit text-[clamp(14px,1.5vw,18px)] leading-[1.6] text-textColor max-w-2xl">
            Scalable, flexible, and instant solutions
          </p>
        </div>

        <h1 className="font-stoke text-[clamp(28px,5vw,56px)] leading-[1.28] text-white">
          Smart On-Demand
          <br className="hidden lg:block" /> Solutions Provider
        </h1>
      </div>
    </section>
  );
};

export default OnDemandHero;
