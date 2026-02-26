import LogoSlider from "@/components/ui/logoSlider";

const RealEstateSolutions = () => {
  return (
    <section className=" bg-[#02070F]">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr,1.5fr] gap-14 py-16 lg:py-24 px-6 lg:px-8">
        <div>
          <h1 className="font-stoke text-[clamp(24px,4vw,42px)] font-normal mb-12">
            Transforming Real Estate with Innovative Digital Solutions
          </h1>
          <div className="md:flex justify-start">
            <LogoSlider />
          </div>
        </div>
        <div>
          <p className="font-outfit text-[clamp(14px,1.5vw,18px)] font-normal">
            The real estate industry is constantly evolving, and technology is
            playing a vital role in shaping the future of property buying,
            selling, and management. Aireb Solutions empowers real estate
            businesses with innovative solutions that streamline operations,
            enhance customer experiences, and drive business growth. From
            property management platforms to virtual property tours, we provide
            a range of services designed to meet the unique challenges of the
            real estate industry and enhance its overall efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RealEstateSolutions;
