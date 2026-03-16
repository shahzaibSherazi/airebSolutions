import ServiceCard from "../ui/serviceCard";
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
    <section className="relative w-full bg-black">
      <div className="w-full min-h-screen px-4 sm:px-6 lg:px-8  pt-20 pb-20 lg:pb-20  lg:pt-32">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Sticky Content */}
          <div className="lg:sticky lg:top-20 lg:self-start">
            <div className="flex flex-col items-start gap-8 lg:gap-10">
              {/* Our Service Button */}
              <button className="px-7 py-2 bg-primary cursor-default text-white font-outfit font-medium text-base lg:text-lg">
                Our Service
              </button>

              {/* Description Text */}
              <p
                className="max-w-full lg:max-w-[550px] xl:max-w-full  text-lg leading-[1.7]
  sm:text-xl sm:leading-[1.75]
  md:text-2xl md:leading-[1.8]
  lg:text-4xl lg:leading-[1.25]  font-normal font-outfit text-white">
                We deliver custom digital solutions, including web and mobile
                development, UI/UX, DevOps, e-commerce, AI, and system
                integrations helping businesses scale with efficient,
                high-performance technology.
              </p>

              {/* View All Button - Desktop */}
              <div className="hidden lg:block mt-8">
                <Link to="/services" className="inline-block">
                  <button
                    style={{ paddingLeft: 14 }}
                    className="group flex items-center text-textColor hover:text-black hover:bg-white font-outfit gap-4 bg-primary px-1 py-1 text-base lg:text-lg font-medium tracking-wide transition-all hover:shadow-lg">
                    View All Services
                    <span className="bg-white w-[46px] h-[43px] text-black group-hover:bg-primary flex items-center justify-center transition-all group-hover:translate-x-1">
                      <ArrowRight size={18} />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Scrolling Cards */}
          <div className="relative">
            <div className="space-y-8 lg:space-y-12 flex flex-col lg:justify-end lg:items-end">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="sticky top-20 transition-all duration-500">
                  <ServiceCard
                    image={service.image}
                    title={service.title}
                    gradient={service.gradient}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button - Mobile */}
        <div className="lg:hidden mt-12">
          <Link to="/services" className="inline-block">
            <button
              style={{ paddingLeft: 14 }}
              className="group flex items-center text-textColor hover:text-black hover:bg-white font-outfit gap-4 bg-primary px-1 py-1 text-base lg:text-lg font-medium tracking-wide transition hover:shadow-lg">
              View All Services
              <span className="bg-white w-[46px] h-[43px] text-black group-hover:bg-primary flex items-center justify-center transition group-hover:translate-x-1">
                <ArrowRight size={18} />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
