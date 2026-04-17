import LogoSlider from "@/components/ui/logoSlider";

const BankingSolutions = () => {
  return (
    <section className=" bg-[#02070F]">
      <div className="container grid grid-cols-1 lg:grid-cols-[2fr,1.5fr] gap-14 py-16 lg:py-24 px-2 lg:px-8">
        <div>
          <h1 className="font-stoke text-h2 font-normal mb-12">
            Banking and Fintech Solutions
          </h1>
          <div className="md:flex justify-start">
            <LogoSlider />
          </div>
        </div>
        <div>
          <p className="font-outfit text-p font-normal">
            At Aireb Solutions, we provide smart banking and fintech solutions
            to help financial businesses grow in the digital world. Our services
            improve customer experience, ensure security, and streamline
            operations. From core banking systems to modern technologies, we
            deliver solutions that reduce risks and support long-term business
            success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BankingSolutions;
