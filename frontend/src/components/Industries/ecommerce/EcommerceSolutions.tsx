import LogoSlider from "@/components/ui/logoSlider";

const EcommerceSolutions = () => {
  return (
    <section className=" bg-[#02070F]">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr,1.5fr] gap-14 py-16 lg:py-24 px-6 lg:px-8">
        <div>
          <h1 className="font-stoke text-[clamp(24px,4vw,42px)] font-normal mb-12">
            Drive sales with Advanced E-commerce Solutions
          </h1>
          <div className="md:flex justify-start">
            <LogoSlider />
          </div>
        </div>
        <div>
          <p className="font-outfit text-[clamp(14px,1.5vw,18px)] font-normal">
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
