import LogoSlider from "@/components/ui/logoSlider";

const TravelHospitalitySolutions = () => {
  return (
    <section className=" bg-[#02070F]">
      <div className="container grid grid-cols-1 lg:grid-cols-[2fr,1.5fr] gap-14 py-16 lg:py-24 px-6 lg:px-8">
        <div>
          <h1 className="font-stoke text-h2 font-normal mb-12">
            Transforming Travel & Hospitality with Smart Digital Solutions
          </h1>
          <div className="md:flex justify-start">
            <LogoSlider />
          </div>
        </div>
        <div>
          <p className="font-outfit text-p font-normal">
            The travel and hospitality industry is growing and changing fast.
            Aireb Solutions provides smart digital solutions to improve guest
            experience, streamline operations, and stay competitive. Whether you
            run a hotel, travel agency, or transport service, our solutions help
            you manage your business better and deliver smooth, memorable
            customer experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TravelHospitalitySolutions;
