import LogosSlider from "@/components/ui/logosSlider";

const EcommerceSolutions = () => {
  return (
    <section className=" bg-[#02070F]">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 py-16 lg:py-24">
        <div>
          <h1 className="font-stoke text-h3 font-normal mb-12">
            Drive sales with Advanced E-commerce Solutions
          </h1>
          {/* <div className="md:flex justify-start"> */}
          <LogosSlider />
          {/* </div> */}
        </div>
        <div>
          <p className="font-outfit text-p leading-[1.3] font-normal">
            At the Aireb solution, we provide smart e-commerce solutions to help
            your business grow online. Our services improve customer experience,
            increase sales, and streamline operations. We focus on innovation,
            scalability, and user-friendly design. Whether launching a new store
            or upgrading an existing one with AI features, we help you succeed
            in e-commerce.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EcommerceSolutions;
