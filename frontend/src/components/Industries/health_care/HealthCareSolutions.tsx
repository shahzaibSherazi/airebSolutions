import LogoSlider from "@/components/ui/logoSlider";

const HealthCareSolutions = () => {
  return (
    <section className=" bg-[#02070F]">
      <div className="container grid grid-cols-1 lg:grid-cols-[2fr,1.5fr] gap-14 py-16 lg:py-24 px-2 lg:px-8">
        <div>
          <h1 className="font-stoke text-h2 font-normal mb-12">
            Innovative Digital Solutions for Healthcare & Pharma
          </h1>
          <div className="md:flex justify-start">
            <LogoSlider />
          </div>
        </div>
        <p className="font-outfit text-p font-normal">
          Aireb Solutions helps healthcare and pharmaceutical industries use new
          technology to follow the rules, improve patient care, and work more
          efficiently. We make easy-to-use digital tools for research, EHR
          systems, mobile health apps, and getting patients involved. We want to
          help with digital transformation and make healthcare services faster,
          easier, and better.
        </p>
      </div>
    </section>
  );
};

export default HealthCareSolutions;
