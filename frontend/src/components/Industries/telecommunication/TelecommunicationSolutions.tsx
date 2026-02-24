import LogoSlider from "@/components/ui/logoSlider";

const TelecommunicationSolutions = () => {
  return (
    <section className=" bg-[#02070F]">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr,1.5fr] gap-14 py-16 lg:py-24 px-6 lg:px-8">
        <div>
          <h1 className="font-stoke text-[clamp(24px,4vw,42px)] font-normal mb-12">
            Empowering Telecommunications with Innovative Digital Solutions
          </h1>
          <LogoSlider />
        </div>
        <div>
          <p className="font-outfit text-[clamp(14px,1.5vw,18px)] font-normal">
            The telecommunications industry is rapidly evolving, driven by
            technological advancements and growing consumer demand for
            connectivity. To stay competitive, telecommunications businesses
            need to adapt to new technologies, streamline operations, and
            deliver exceptional services to their customers. At Aireb Solutions,
            we offer a range of cutting-edge solutions designed to help
            telecommunications companies thrive in this dynamic environment. Our
            services are tailored to enhance customer engagement, optimize
            operations, and drive innovation, ensuring that your business
            remains at the forefront of the industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TelecommunicationSolutions;
