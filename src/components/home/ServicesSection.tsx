import ServiceCard from "../ui/serviceCard";
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";

const services = [
  {
    image: service1,
    title: "AI & Machine Learning",
    gradient: "linear-gradient(180deg, #0B23C8 0%, rgba(0,0,0,0) 100%)",
  },
  {
    image: service2,
    title: "Web Development",
    gradient: "linear-gradient(180deg, #FF6B6B 0%, rgba(0,0,0,0) 100%)",
  },
  {
    image: service3,
    title: "UI/UX Design",
    gradient: "linear-gradient(180deg, #1DD1A1 0%, rgba(0,0,0,0) 100%)",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative w-full py-24 bg-black px-8">
      <div className="w-full mx-auto flex flex-col lg:flex-row items-start gap-28 px-6 lg:px-0">
        {/* <!-- Left Column: Button + Text --> */}
        <div className="flex-1 flex flex-col gap-8">
          {/* <!-- Our Service Button --> */}
          <button className="w-[164px] h-[38px] bg-blue-600 text-white font-stoke font-normal text-base rounded-md shadow-md hover:bg-blue-700 transition-all duration-300">
            Our Service
          </button>

          {/* <!-- Description Text --> */}
          <p className="w-full max-w-[846px] text-[42px] leading-[1.3] font-stoke text-white">
            We deliver custom digital solutions, including web and mobile
            development, UI/UX, DevOps, e-commerce, AI, and system integrations
            helping businesses scale with efficient, high-performance
            technology.
          </p>
          <div className="  mt-6">
            <button className="px-6 py-3 bg-white border border-gray-300 text-gray-800 font-stoke font-normal rounded-md shadow hover:bg-gray-100 transition-all duration-300">
              View All Services
            </button>
          </div>
        </div>

        {/* <!-- Right Column: Image Carousel --> */}
        <div className="w-full lg:w-auto">
          <div
            className="
       
      h-[574px]
      overflow-y-auto
      snap-y snap-mandatory
      scrollbar-hide
      flex flex-col
      gap-8
    
            ">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                image={service.image}
                title={service.title}
                gradient={service.gradient}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
