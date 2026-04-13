import LogoSlider from "@/components/ui/logoSlider";

const TelecommunicationSolutions = () => {
  return (
    <section className=" bg-[#02070F]">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr,1.5fr] gap-14 py-16 lg:py-24 px-6 lg:px-8">
        <div>
          <h1 className="font-stoke text-[clamp(24px,4vw,42px)] font-normal mb-12">
            Giving telecommunications strength with smart digital solutions
          </h1>
          <div className="md:flex justify-start">
            <LogoSlider />
          </div>
        </div>
        <div>
          <p className="font-outfit text-[clamp(14px,1.5vw,18px)] font-normal">
            The telecoms sector is growing quickly because of new technologies
            and client needs. We at Aireb Solutions offer smart solutions to
            help telecom companies improve their services, run their businesses
            more efficiently, and stay ahead of the competition. Our services
            improve the customer experience, increase productivity, and
            encourage new ideas that will help your business flourish in the
            long run.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TelecommunicationSolutions;
