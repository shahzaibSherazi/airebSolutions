import LogoSlider from "@/components/ui/logoSlider";

const EducationSolutions = () => {
  return (
    <section className=" bg-[#02070F]">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr,1.5fr] gap-14 py-16 lg:py-24 px-6 lg:px-8">
        <div>
          <h1 className="font-stoke text-[clamp(24px,4vw,42px)] font-normal mb-12">
            Transforming Education with Smart Digital Solutions
          </h1>
          <div className="md:flex justify-start">
            <LogoSlider />
          </div>
        </div>
        <div>
          <p className="font-outfit text-[clamp(14px,1.5vw,18px)] font-normal">
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
