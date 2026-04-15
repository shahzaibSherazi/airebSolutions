import LogoSlider from "@/components/ui/logoSlider";

const RetailSolutions = () => {
  return (
    <section className=" bg-[#02070F]">
      <div className=" container grid grid-cols-1 lg:grid-cols-[2fr,1.5fr] gap-14 py-16 lg:py-24 px-6 lg:px-8">
        <div>
          <h1 className="font-stoke text-h2 font-normal mb-12">
            Revolutionizing Retail & Consumer Goods with Digital Innovation
          </h1>
          <div className="md:flex justify-start">
            <LogoSlider />
          </div>
        </div>
        <div>
          <p className="font-outfit text-p font-normal">
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
