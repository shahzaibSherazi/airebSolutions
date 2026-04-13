import LogoSlider from "@/components/ui/logoSlider";

const RealEstateSolutions = () => {
  return (
    <section className=" bg-[#02070F]">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr,1.5fr] gap-14 py-16 lg:py-24 px-6 lg:px-8">
        <div>
          <h1 className="font-stoke text-[clamp(24px,4vw,42px)] font-normal mb-12">
            Transforming Real Estate with Smart Digital Solutions
          </h1>
          <div className="md:flex justify-start">
            <LogoSlider />
          </div>
        </div>
        <div>
          <p className="font-outfit text-[clamp(14px,1.5vw,18px)] font-normal">
            The real estate industry is changing fast with technology. At Aireb
            Solutions, we provide smart digital solutions to improve property
            buying, selling, and management. Our services include property
            platforms and virtual tours to enhance customer experience, simplify
            operations, and help real estate businesses grow efficiently.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RealEstateSolutions;
