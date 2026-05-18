import LogosSlider from "@/components/ui/logosSlider";

const EducationSolutions = () => {
  return (
    <section className=" bg-[#02070F]">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 py-16 lg:py-24">
        <div>
          <h1 className="font-stoke text-h3 font-normal mb-12">
            Transforming Education with Smart Digital Solutions
          </h1>
          {/* <div className="md:flex justify-start"> */}
          <LogosSlider />
          {/* </div> */}
        </div>
        <div>
          <p className="font-outfit text-p leading-[1.3] font-normal">
            Aireb Solutions helps schools, universities, and online platforms
            grow through digital solutions. We improve operations, enhance
            student experience, and support innovation using mobile apps, AI
            tools, and custom systems. From course management to virtual
            classrooms, we provide everything needed to succeed in today's
            modern, tech-driven education world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EducationSolutions;
