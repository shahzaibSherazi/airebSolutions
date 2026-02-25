import LogoSlider from "@/components/ui/logoSlider";

const BankingSolutions = () => {
  return (
    <section className=" bg-[#02070F]">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr,1.5fr] gap-14 py-16 lg:py-24 px-6 lg:px-8">
        <div>
          <h1 className="font-stoke text-[clamp(24px,4vw,42px)] font-normal mb-12">
            Banking and Fintech Solutions
          </h1>
          <div className="md:flex justify-start">
            <LogoSlider />
          </div>
        </div>
        <div>
          <p className="font-outfit text-[clamp(14px,1.5vw,18px)] font-normal">
            At Aireb Solutions, we specialize in providing innovative banking
            and fintech solutions that empower financial institutions and
            technology-driven businesses to thrive in the digital economy. Our
            expertise in this dynamic industry enables us to help clients
            navigate complex financial landscapes, enhance customer experiences,
            and ensure secure, scalable, and efficient operations.With a deep
            understanding of the banking sector, financial services, and the
            latest fintech trends, we deliver tailored solutions that enable our
            clients to drive growth, reduce risks, and meet the ever-evolving
            demands of consumers and regulatory bodies. From core banking
            systems to blockchain integration, our fintech solutions are
            designed to future-proof your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BankingSolutions;
