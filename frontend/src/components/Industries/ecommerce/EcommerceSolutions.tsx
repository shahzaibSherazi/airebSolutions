import LogoSlider from "@/components/ui/logoSlider";

const EcommerceSolutions = () => {
  return (
    <section className=" bg-[#02070F]">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr,1.5fr] gap-14 py-16 lg:py-24 px-6 lg:px-8">
        <div>
          <h1 className="font-stoke text-[clamp(24px,4vw,42px)] font-normal mb-12">
            Drive Sales with Cutting-Edge Ecommerce Solutions!
          </h1>
          <LogoSlider />
        </div>
        <div>
          <p className="font-outfit text-[clamp(14px,1.5vw,18px)] font-normal">
            At Aireb Solutions, we specialize in providing cutting-edge
            ecommerce solutions that enable businesses to thrive in the digital
            marketplace. Our ecommerce services are tailored to meet the unique
            needs of your brand, enhancing customer experiences, boosting sales,
            and improving operational efficiency. With a focus on innovation,
            scalability, and user-centric design, we help businesses build,
            manage, and scale ecommerce platforms that deliver tangible
            results.Whether you are looking to launch a new ecommerce store,
            optimize an existing one, or integrate advanced features like AI and
            automated systems, Aireb Solutions is your trusted partner in
            ecommerce success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EcommerceSolutions;
