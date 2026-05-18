import LogosSlider from "@/components/ui/logosSlider";

const RealEstateSolutions = () => {
  return (
    <section className=" bg-[#02070F]">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 py-16 lg:py-24 ">
        <div>
          <h1 className="font-stoke text-h3 font-normal mb-12">
            Transforming Real Estate with Smart Digital Solutions
          </h1>
          {/* <div className="md:flex justify-start"> */}
          <LogosSlider />
          {/* </div> */}
        </div>
        <div>
          <p className="font-outfit text-p leading-[1.3] font-normal">
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
