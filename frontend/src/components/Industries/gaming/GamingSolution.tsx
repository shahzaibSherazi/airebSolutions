import LogoSlider from "@/components/ui/logoSlider";

const GamingSolutions = () => {
  return (
    <section className=" bg-[#02070F]">
      <div className="container grid grid-cols-1 lg:grid-cols-[2fr,1.5fr] gap-14 py-16 lg:py-24 px-2 lg:px-8">
        <div>
          <h1 className="font-stoke text-h2 font-normal mb-12">
            Elevating the Gaming Industry with Smart Digital Solutions
          </h1>
          <div className="md:flex justify-start">
            <LogoSlider />
          </div>
        </div>
        <div>
          <p className="font-outfit text-p font-normal">
            Aireb Solutions helps gaming businesses grow with innovative digital
            solutions. We improve game development, player engagement, and
            performance using modern technologies. From mobile games to online
            platforms, we provide tools that create immersive experiences, boost
            efficiency, and help gaming companies succeed in a fast-growing
            industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GamingSolutions;
