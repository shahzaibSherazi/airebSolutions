import LogosSlider from "@/components/ui/logosSlider";

const BankingSolutions = () => {
  return (
    <section className=" bg-[#02070F]">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 py-16 lg:py-24">
        <div>
          <h1 className="font-stoke text-h3 font-normal mb-12">
            Banking and Fintech Solutions
          </h1>
          {/* <div className="md:flex justify-start"> */}
          <LogosSlider />
          {/* </div> */}
        </div>
        <div>
          <p className="font-outfit text-p leading-[1.3] font-normal">
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
