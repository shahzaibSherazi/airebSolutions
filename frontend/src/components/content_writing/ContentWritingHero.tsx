import { Link } from "react-router-dom";
import bgImg from "../../assets/content-writing_assets/hero_bg.png";

const ContentWritingHero = () => {
  return (
    <section className="heros_height relative w-full flex flex-col justify-center sm:text-start text-center bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.7)_100%)] sm:bg-[linear-gradient(66deg,#629DFF_-90%,rgba(0,0,0,0.2)_114%)]" />
      {/* Content */}
      <div className="container relative z-10  px-6 py-8 lg:py-10 flex flex-col justify-end sm:items-start items-center gap-4">
        <h1 className="font-stoke text-h1 leading-[1.28] text-white">
          High Quality Content
          <br className="hidden lg:block" /> Writing Services
        </h1>
        <p className="font-outfit text-p leading-[1.6] text-white max-w-2xl">
          Aireb solutions write high-quality content that is optimised for
          search engines and gets people to visit your site, interact with your
          content, and make purchases. Our content solutions help your brand
          grow and stand out. They include blog posts, website text, product
          descriptions, social media postings, press releases, and email
          campaigns.
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

export default ContentWritingHero;
