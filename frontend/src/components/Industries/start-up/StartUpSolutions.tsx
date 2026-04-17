import LogoSlider from "@/components/ui/logoSlider";

const StartUpSolutions = () => {
  return (
    <section className=" bg-[#02070F]">
      <div className="container grid grid-cols-1 lg:grid-cols-[2fr,1.5fr] gap-14 py-16 lg:py-24 px-2 lg:px-8">
        <div>
          <h1 className="font-stoke text-h2 font-normal mb-12">
            Empowering Startups with Smart Digital Solutions
          </h1>
          <div className="md:flex justify-start">
            <LogoSlider />
          </div>
        </div>
        <div>
          <p className="font-outfit text-p font-normal">
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
