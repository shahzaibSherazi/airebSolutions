import bgImg from "../../assets/contact-center_assets/hero_bg.png";

const ContactCenterHero = () => {
  return (
    <section className="relative w-full">
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
            look stunning, brand's values and message effectively
          </p>
        </div>

        <h1 className="font-stoke text-[clamp(28px,5vw,56px)] leading-[1.28] text-white">
          Reach, interact, and
          <br className="hidden lg:block" /> influence.
        </h1>
      </div>
    </section>
  );
};

export default ContactCenterHero;
