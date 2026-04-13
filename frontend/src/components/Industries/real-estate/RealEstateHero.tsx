import bgImg from "@/assets/Industies/real-estate/hero-bg.png";

const RealEstateHero = () => {
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
      <div
        style={{
          background:
            "linear-gradient(257.21deg, rgba(0, 0, 0, 0.3) 1.73%, #4285F4 98.27%)",
        }}
        className="absolute inset-0"
      />
      {/* Content */}
      <div className="relative z-10 px-6 lg:px-8 py-8 lg:py-10 flex flex-col justify-end  ">
        <div
          style={{
            background: "linear-gradient(180deg, #4285F4 0%, #02070F 100%)",
          }}
          className="mb-[2vh] sm:mb-[3vh] border border-primary rounded-sm w-fit px-10 py-3">
          <p className="font-outfit text-[clamp(14px,1.5vw,22px)] font-bold ">
            Sector
          </p>
        </div>

        <h1 className="font-stoke text-[clamp(18px,5vw,56px)] leading-[1.28] text-white">
          Real Estate Digital
          <br className="hidden lg:block" /> Solutions
        </h1>
      </div>
    </section>
  );
};

export default RealEstateHero;
