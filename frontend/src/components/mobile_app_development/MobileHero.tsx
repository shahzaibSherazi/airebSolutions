import { Link } from "react-router-dom";
import bgImg from "../../assets/mobile_hero_bg.png";

const MobileHero = () => {
  return (
    <section className="heros_height relative w-full flex flex-col justify-center sm:text-start text-center bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      />
      {/* <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(66.03deg, #629DFF -22.54%, rgba(0, 0, 0, 0.2) 77.45%)",
        }}
      /> */}
      <div
        className="
    absolute inset-0
    bg-[linear-gradient(90deg,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.2)_40%,transparent_70%)]
    sm:bg-[linear-gradient(66.03deg,#629DFF_-80.54%,rgba(0,0,0,0.2)_77.45%)]
  "
      />
      {/* Content */}
      <div className="container relative z-10 px-6 py-8 lg:py-10 flex flex-col items-center sm:items-start justify-end gap-[2vh] sm:gap-[3vh] lg:gap-[4.5vh]">
        <h1 className="font-stoke text-h1 leading-[1.28] text-white">
          Mobile Apps & Gaming <br className="hidden lg:block" />
          Service
        </h1>
        <p className="font-outfit text-p leading-[1.6] text-textColor max-w-2xl">
          We build mobile apps and games for iOS and Android that are simple to
          use and work effectively. Our solutions are designed to help
          organisations grow from the idea stage to deployment by making
          workflows easier, increasing engagement, and more.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-fit gap-3 sm:gap-4">
          <Link
            to="/resources/portfolio"
            className="font-outfit font-bold text-center text-sm md:text-lg  px-6 sm:px-7 py-2 sm:py-[9px] bg-black text-textColor rounded hover:bg-textColor hover:text-black transition-all duration-300 shadow-md hover:shadow-lg">
            Discover It
          </Link>
          <a
            href="#contact-form"
            className="font-outfit font-bold text-sm md:text-lg  px-6 sm:px-7 py-2 sm:py-[9px] bg-black text-textColor rounded  hover:bg-textColor hover:text-black transition-all duration-300 shadow-md hover:shadow-lg">
            Start A Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default MobileHero;
