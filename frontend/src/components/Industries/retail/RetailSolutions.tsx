import LogosSlider from "@/components/ui/logosSlider";

const RetailSolutions = () => {
  return (
    <section className=" bg-[#02070F]">
      <div className=" container grid grid-cols-1 lg:grid-cols-2 gap-6 py-16 lg:py-24">
        <div>
          <h1 className="font-stoke text-h3 font-normal mb-12">
            Revolutionizing Retail & Consumer Goods with Digital Innovation
          </h1>
          {/* <div className="md:flex justify-start"> */}
          <LogosSlider />
          {/* </div> */}
        </div>
        <div>
          <p className="font-outfit text-p leading-[1.3] font-normal">
            In today's fast-paced retail and consumer goods industry, businesses
            must stay ahead of the curve to meet consumer expectations,
            streamline operations, and enhance customer experiences. Aireb
            Solutions helps retail and CGP businesses thrive by providing
            cutting-edge digital solutions that boost efficiency, optimize
            supply chains, and create immersive customer experiences. From
            e-commerce platforms to inventory management systems, we offer
            comprehensive services that meet the evolving needs of the industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RetailSolutions;
