import bgImg from "../../assets/ui-ux-design_assets/hero_bg.png";

const UiDesignHero = () => {
  return (
    <section className="heros_height relative flex flex-col justify-center text-center sm:text-start w-full bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.7)_100%)] sm:bg-[linear-gradient(66deg,#629DFF_-10%,rgba(0,0,0,0.2)_114%)]" />
      {/* Content */}
      <div className="container relative z-10  px-2 py-8 lg:py-10 flex flex-col gap-4 sm:items-start items-center justify-end ">
        <h1 className="font-stoke text-h1 leading-[1.28] text-white">
          User-Focused,Flexible
          <br className="hidden lg:block" /> Design Solutions.
        </h1>
        <p className="font-outfit text-p leading-[1.6] text-white max-w-2xl">
          We offer full UI/UX design services, from in-depth user research and
          wireframing to modern UI design and smooth user experiences. To make
          sure everything works well on all devices, we use prototyping,
          usability testing, and mobile-first design. We also know a lot about
          designing e-commerce sites, making sure that websites are easy to use
          for everyone, and making sure that design systems are consistent. The
          goal is simple: create digital experiences that are easy to use, make
          sense, and help your company grow.
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

export default UiDesignHero;
