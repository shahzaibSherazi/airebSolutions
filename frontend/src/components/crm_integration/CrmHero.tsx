import bgImg from "../../assets/CRM_hero_bg.png";

const CrmHero = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImg})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(66deg,#629DFF_-90%,rgba(0,0,0,0.2)_114%)]" />

      {/* Content */}
      <div className="relative z-10 min-h-[100vh] px-8 py-[8vh] sm:py-[10vh] lg:py-[16vh] flex flex-col justify-end gap-[2vh] sm:gap-[3vh] lg:gap-[4.5vh]">
        <p className="font-outfit text-[clamp(14px,1.5vw,18px)] leading-[1.6] text-textColor max-w-2xl">
          Seamless brand experiences built to deliver long-term commercial
          value.
        </p>

        <h1 className="font-stoke text-[clamp(28px,5vw,56px)] leading-[1.28] text-textColor">
          CRM Integration's for <br className="hidden lg:block" /> Smarter
          Business Growth!
        </h1>
      </div>
    </section>
  );
};

export default CrmHero;
