import LogosSlider from "@/components/ui/logosSlider";

const HealthCareSolutions = () => {
  return (
    <section className=" bg-[#02070F]">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 py-16 lg:py-24">
        <div>
          <h1 className="font-stoke text-h3 font-normal mb-12">
            Innovative Digital Solutions for Healthcare & Pharma
          </h1>
          {/* <div className="md:flex justify-start"> */}
          <LogosSlider />
          {/* </div> */}
        </div>
        <p className="font-outfit text-p leading-[1.3] font-normal">
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
