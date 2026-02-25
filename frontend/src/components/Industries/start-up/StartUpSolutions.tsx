import LogoSlider from "@/components/ui/logoSlider";

const StartUpSolutions = () => {
  return (
    <section className=" bg-[#02070F]">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr,1.5fr] gap-14 py-16 lg:py-24 px-6 lg:px-8">
        <div>
          <h1 className="font-stoke text-[clamp(24px,4vw,42px)] font-normal mb-12">
            Empowering Startups with Cutting-Edge Digital Solutions
          </h1>
          <div className="md:flex justify-start">
            <LogoSlider />
          </div>
        </div>
        <div>
          <p className="font-outfit text-[clamp(14px,1.5vw,18px)] font-normal">
            Starting a new business comes with a unique set of challenges. From
            managing limited resources to creating a strong brand presence in a
            competitive market, startups need innovative and cost-effective
            solutions to thrive. At Aireb Solutions, we specialize in providing
            startups with the tools they need to scale quickly, optimize their
            operations, and stand out in their respective industries. Our
            comprehensive suite of digital solutions ensures that startups can
            not only launch successfully but also grow sustainably.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StartUpSolutions;
