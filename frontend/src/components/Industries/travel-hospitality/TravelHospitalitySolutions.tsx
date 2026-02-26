import LogoSlider from "@/components/ui/logoSlider";

const TravelHospitalitySolutions = () => {
  return (
    <section className=" bg-[#02070F]">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr,1.5fr] gap-14 py-16 lg:py-24 px-6 lg:px-8">
        <div>
          <h1 className="font-stoke text-[clamp(24px,4vw,42px)] font-normal mb-12">
            Transforming Travel & Hospitality with Innovative Digital Solutions
          </h1>
          <div className="md:flex justify-start">
            <LogoSlider />
          </div>
        </div>
        <div>
          <p className="font-outfit text-[clamp(14px,1.5vw,18px)] font-normal">
            The travel and hospitality industry is ever-evolving, with
            businesses constantly seeking innovative solutions to enhance guest
            experiences, streamline operations, and remain competitive. At Aireb
            Solutions, we understand the unique challenges faced by businesses
            in this sector and offer a wide range of cutting-edge digital
            solutions designed to meet these needs. Whether you're a hotel,
            travel agency, or transportation service provider, our solutions
            help you optimize your operations, engage with customers, and
            provide seamless, memorable experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TravelHospitalitySolutions;
