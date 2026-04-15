import bgImg from "@/assets/Industies/telecommunication/hero-bg.png";

const TelecommunicationHero = () => {
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
      <div className="container relative z-10 px-6 lg:px-8 py-8 lg:py-10 flex flex-col justify-end ">
        <p
          style={{
            background: "linear-gradient(180deg, #4285F4 0%, #02070F 100%)",
          }}
          className="font-outfit text-[clamp(14px,1.5vw,22px)] font-bold mb-[2vh] sm:mb-[3vh] border border-primary rounded-sm w-fit px-10 py-3">
          Sector
        </p>

        <h1 className="font-stoke text-h1 leading-[1.28] text-white">
          Telecommunication
          <br />
          Solutions
        </h1>
      </div>
    </section>
  );
};

export default TelecommunicationHero;
