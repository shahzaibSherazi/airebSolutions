import LogoSlider from "@/components/ui/logoSlider";

const AboutUsSolutions = () => {
  return (
    <section
      style={{
        background: "linear-gradient(269.9deg, #102545 43.69%, #02070F 99.92%)",
      }}>
      <div className="container grid grid-cols-1 lg:grid-cols-[2fr,1.5fr] gap-14 py-16 lg:py-24 px-6 lg:px-8">
        <div>
          <h1 className="font-stoke font-light text-h2 mb-12">
            Elevating brands with <br className="hidden lg:block" /> digital
            solutions that <br className="hidden lg:block" /> boost experiences
            and <br className="hidden lg:block" /> drive growth.
          </h1>
          <div className="md:flex lg:justify-start justify-center">
            <LogoSlider />
          </div>
        </div>
        <div>
          <p className="font-outfit text-p font-normal">
            At Aireb Solutions, our mission is to provide exceptional digital
            solutions that empower businesses to grow and thrive in the modern
            digital landscape. We focus on creating high-quality, customized
            technologies that not only strengthen our clients' brand presence
            but also deliver seamless and engaging customer experiences. By
            blending innovation with strategy, we help businesses streamline
            operations, enhance user satisfaction, and drive sustainable growth
            through every solution we build.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSolutions;
