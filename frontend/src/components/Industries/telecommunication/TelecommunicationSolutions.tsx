import LogosSlider from "@/components/ui/logosSlider";

const TelecommunicationSolutions = () => {
  return (
    <section className=" bg-[#02070F]">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 py-16 lg:py-24 ">
        <div>
          <h1 className="font-stoke text-h3 font-normal mb-12">
            Giving telecommunications strength with smart digital solutions
          </h1>
          {/* <div className="md:flex justify-start"> */}
          <LogosSlider />
          {/* </div> */}
        </div>
        <div>
          <p className="font-outfit text-p leading-[1.3] font-normal">
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
