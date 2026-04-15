import bgImg from "../../assets/Ecommerce_assets/hero_bg.png";

const EcommerceHero = () => {
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
      <div className="container relative z-10 px-6 lg:px-8 py-8  lg:py-10 flex flex-col justify-end gap-4">
        <h1 className="font-stoke text-h1 leading-[1.28] text-white">
          Smart and Secure
          <br className="hidden lg:block" /> E-commerce Services
        </h1>
        <p className="font-outfit text-p leading-[1.6] text-textColor max-w-2xl">
          We build powerful, scalable e-commerce stores designed to grow your
          business. From custom store development to multi-channel integrations
          and AI-driven features, we create secure, high-performing online
          stores that deliver seamless shopping experiences and maximize
          conversions.
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

export default EcommerceHero;
