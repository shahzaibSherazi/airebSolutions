import LogosSlider from "@/components/ui/logosSlider";

const StartUpSolutions = () => {
  return (
    <section className=" bg-[#02070F]">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 py-16 lg:py-24">
        <div>
          <h1 className="font-stoke text-h3 font-normal mb-12">
            Empowering Startups with Smart Digital Solutions
          </h1>
          {/* <div className="md:flex justify-start"> */}
          <LogosSlider />
          {/* </div> */}
        </div>
        <div>
          <p className="font-outfit text-p leading-[1.3] font-normal">
            Starting a business is challenging, especially with limited
            resources and high competition. Aireb Solutions provides
            cost-effective digital solutions to help startups build a strong
            brand, improve operations, and grow faster. Our services support
            successful launches and long-term, sustainable growth in a
            competitive market.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StartUpSolutions;
