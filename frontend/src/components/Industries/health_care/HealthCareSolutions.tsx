import LogoSlider from "@/components/ui/logoSlider";

const HealthCareSolutions = () => {
  return (
    <section className=" bg-[#02070F]">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr,1.5fr] gap-14 py-16 lg:py-24 px-6 lg:px-8">
        <div>
          <h1 className="font-stoke text-[clamp(24px,4vw,42px)] font-normal mb-12">
            Transforming Healthcare & Pharmaceuticals with Innovative Digital
            Solutions
          </h1>
          <div className="md:flex justify-start">
            <LogoSlider />
          </div>
        </div>
        <div>
          <p className="font-outfit text-[clamp(14px,1.5vw,18px)] font-normal">
            In the rapidly evolving healthcare and pharmaceutical industries,
            technology plays a pivotal role in improving patient outcomes,
            optimizing operational efficiency, and ensuring regulatory
            compliance. Aireb Solutions empowers healthcare organizations and
            pharmaceutical companies to leverage cutting-edge technology,
            streamline processes, and deliver superior services. Whether you're
            working with electronic health records (EHR), mobile health
            applications, pharmaceutical research, or patient engagement
            systems, we offer tailored solutions that drive digital
            transformation and improve overall healthcare delivery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HealthCareSolutions;
