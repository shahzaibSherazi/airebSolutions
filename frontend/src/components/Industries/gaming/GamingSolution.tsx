import LogosSlider from "@/components/ui/logosSlider";

const GamingSolutions = () => {
  return (
    <section className=" bg-[#02070F]">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 py-16 lg:py-24">
        <div>
          <h1 className="font-stoke text-h3 font-normal mb-12">
            Elevating the Gaming Industry with Smart Digital Solutions
          </h1>
          {/* <div className="md:flex justify-start"> */}
          <LogosSlider />
          {/* </div> */}
        </div>
        <div>
          <p className="font-outfit leading-[1.3] text-p font-normal">
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
