import LogoSlider from "@/components/ui/logoSlider";

const GamingSolutions = () => {
  return (
    <section className=" bg-[#02070F]">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr,1.5fr] gap-14 py-16 lg:py-24 px-6 lg:px-8">
        <div>
          <h1 className="font-stoke text-[clamp(24px,4vw,42px)] font-normal mb-12">
            Elevating the Gaming Industry with Cutting-Edge Digital Solutions
          </h1>
          <div className="md:flex justify-start">
            <LogoSlider />
          </div>
        </div>
        <div>
          <p className="font-outfit text-[clamp(14px,1.5vw,18px)] font-normal">
            The gaming industry is growing at an unprecedented rate, and to stay
            competitive, game developers, publishers, and platforms must
            leverage innovative digital technologies. Aireb Solutions empowers
            gaming businesses by providing tailored solutions that enhance game
            development, player engagement, and operational efficiency. From
            game development and mobile gaming apps to e-commerce solutions and
            data analytics, we deliver the tools you need to succeed in a
            fast-paced and evolving market.Whether you're creating AAA titles,
            mobile games, or an online gaming platform, Aireb Solutions ensures
            that your gaming experience is immersive, engaging, and optimized
            for performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GamingSolutions;
