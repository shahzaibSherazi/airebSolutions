import LogoSlider from "@/components/ui/logoSlider";

const EducationSolutions = () => {
  return (
    <section className=" bg-[#02070F]">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr,1.5fr] gap-14 py-16 lg:py-24 px-6 lg:px-8">
        <div>
          <h1 className="font-stoke text-[clamp(24px,4vw,42px)] font-normal mb-12">
            Transforming Education with Innovative Digital Solutions
          </h1>
          <LogoSlider />
        </div>
        <div>
          <p className="font-outfit text-[clamp(14px,1.5vw,18px)] font-normal">
            In today's rapidly evolving education landscape, Aireb Solutions
            empowers educational institutions to thrive by embracing digital
            transformation. Whether you're a school, university, online learning
            platform, or education service provider, our tailored solutions help
            streamline operations, enhance student experiences, and foster
            innovation.By integrating advanced technologies, including ecommerce
            solutions, mobile apps, AI-powered tools, and custom development, we
            ensure your institution stays ahead in a competitive, tech-driven
            world. From course management systems to virtual classrooms, we have
            the tools and expertise to meet the unique challenges of the
            education sector.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EducationSolutions;
