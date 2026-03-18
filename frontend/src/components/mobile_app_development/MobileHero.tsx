import bgImg from "../../assets/mobile_hero_bg.png";

const MobileHero = () => {
  return (
    <section className="relative w-full bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen px-8 py-[8vh] sm:py-[10vh] lg:py-[12vh] flex flex-col justify-end gap-[2vh] sm:gap-[3vh] lg:gap-[4.5vh]">
        <div className="">
          <p className="font-outfit text-[clamp(14px,1.5vw,18px)] leading-[1.6] text-textColor max-w-2xl">
            Seamless brand experiences built to deliver long-term commercial
            value.
          </p>
        </div>

        <h1 className="font-stoke text-[clamp(28px,5vw,56px)] leading-[1.28] text-white">
          Mobile Apps & Gaming <br className="hidden lg:block" />
          Service
        </h1>
      </div>
    </section>
  );
};

export default MobileHero;
