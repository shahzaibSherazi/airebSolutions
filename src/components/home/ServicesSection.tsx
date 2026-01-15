import ServiceCard from "../ui/serviceCard";
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import { ArrowRight } from "lucide-react";

const services = [
  {
    image: service1,
    title: "AI & Machine Learning",
    gradient: "linear-gradient(180deg, #0B23C8 0%, rgba(0,0,0,0) 100%)",
  },
  {
    image: service2,
    title: "Web Development",
    gradient: "linear-gradient(180deg, #0B23C8 0%, rgba(0,0,0,0) 100%)",
  },
  {
    image: service3,
    title: "UI/UX Design",
    gradient: "linear-gradient(180deg, #0B23C8 0%, rgba(0,0,0,0) 100%)",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative w-full pt-10 md:py-24 bg-black px-0 lg:px-8">
      <div className="w-full flex flex-col lg:flex-row items-start px-4 sm:px-6 lg:px-0">
        {/* <!-- Left Column: Button + Text --> */}
        <div className="flex-1 flex flex-col items-start gap-8 lg:mb-0 md:mb-4">
          {/* <!-- Our Service Button --> */}
          <button className="px-7 py-1 bg-primary text-white font-outfit font-medium  text-lg shadow-md hover:bg-blue-700 transition-all duration-300">
            Our Service
          </button>

          {/* <!-- Description Text --> */}
          <p className="lg:max-w-[80vh] text-base sm:text-lg md:text-4xl font-normal font-outfit text-white">
            We deliver custom digital solutions, including web and mobile
            development, UI/UX, DevOps, e-commerce, AI, and system integrations
            helping businesses scale with efficient, high-performance
            technology.
          </p>
          <div className="md:block hidden  mt-6">
            <button
              style={{ paddingLeft: 14 }}
              className="group flex items-center text-black font-outfit  gap-4 bg-white px-1 py-1 text-lg font-medium tracking-wide  transition">
              View All Services
              <span className="bg-primary w-[46px] h-[43px] text-white flex items-center justify-center transition group-hover:translate-x-1">
                <ArrowRight size={14} />
              </span>
            </button>
          </div>
        </div>

        {/* <!-- Right Column: Image Carousel --> */}
        <div className="w-full lg:w-auto">
          <div
            className="
       
      h-screen max-h-[574px] 
      overflow-y-auto
      snap-y snap-mandatory
      scrollbar-hide
     
    
            ">
            {services.map((service, index) => (
              <div
                key={index}
                className="h-full flex items-center justify-center snap-start my-3">
                <ServiceCard
                  key={index}
                  image={service.image}
                  title={service.title}
                  gradient={service.gradient}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
