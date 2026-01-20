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
    <section className="relative w-full bg-black">
      <div className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="w-full flex flex-col lg:flex-row items-start gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* <!-- Left Column: Button + Text --> */}
          <div className="w-full lg:flex-1 flex flex-col items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* <!-- Our Service Button --> */}
            <button className="px-5 sm:px-6 md:px-7 py-2 bg-primary text-white font-outfit font-medium text-sm sm:text-base md:text-lg shadow-md hover:bg-blue-700 transition-all duration-300">
              Our Service
            </button>

            {/* <!-- Description Text --> */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl leading-relaxed sm:leading-snug md:leading-snug lg:leading-snug font-normal font-outfit text-white max-w-full lg:max-w-3xl 2xl:max-w-full">
              We deliver custom digital solutions, including web and mobile
              development, UI/UX, DevOps, e-commerce, AI, and system
              integrations helping businesses scale with efficient,
              high-performance technology.
            </p>

            {/* View All Services Button - Hidden on mobile, shown on tablet+ */}
            <div className="hidden md:block mt-6 sm:mt-8 md:mt-10 lg:mt-16">
              <button className="group flex items-center text-black font-outfit gap-2 sm:gap-3 md:gap-4 bg-white px-3 sm:px-4 md:px-4 py-2 md:py-2 text-xs sm:text-sm md:text-base font-medium tracking-wide transition whitespace-nowrap">
                View All Services
                <span className="bg-primary w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 text-white flex items-center justify-center transition group-hover:translate-x-1 flex-shrink-0">
                  <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                </span>
              </button>
            </div>
          </div>

          {/* <!-- Right Column: Image Carousel --> */}
          <div className="w-full lg:flex lg:w-auto">
            <div className="h-[572px] sm:h-[572px] md:h-[572px] lg:h-[574px] overflow-y-auto snap-y snap-mandatory scrollbar-hide">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="h-[572px] sm:h-[572px] md:h-[572px] lg:h-[574px] flex items-center justify-center snap-start py-2 sm:py-3">
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
      </div>
    </section>
  );
};

export default ServicesSection;

// import ServiceCard from "../ui/serviceCard";
// import service1 from "../../assets/service1.png";
// import service2 from "../../assets/service2.png";
// import service3 from "../../assets/service3.png";
// import { ArrowRight } from "lucide-react";

// const services = [
//   {
//     image: service1,
//     title: "AI & Machine Learning",
//     gradient: "linear-gradient(180deg, #0B23C8 0%, rgba(0,0,0,0) 100%)",
//   },
//   {
//     image: service2,
//     title: "Web Development",
//     gradient: "linear-gradient(180deg, #0B23C8 0%, rgba(0,0,0,0) 100%)",
//   },
//   {
//     image: service3,
//     title: "UI/UX Design",
//     gradient: "linear-gradient(180deg, #0B23C8 0%, rgba(0,0,0,0) 100%)",
//   },
// ];

// const ServicesSection = () => {
//   return (
//     <section className="relative w-full bg-black">
//       <div className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
//           {/* Left Column: Sticky Content */}
//           <div className="lg:sticky lg:top-20 lg:self-start h-fit">
//             <div className="flex flex-col items-start gap-8 lg:gap-10">
//               {/* Our Service Button */}
//               <button className="px-7 py-2 bg-primary text-white font-outfit font-medium text-base lg:text-lg shadow-md hover:bg-blue-700 transition-all duration-300">
//                 Our Service
//               </button>

//               {/* Description Text */}
//               <p className="max-w-full lg:max-w-[550px] text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-relaxed lg:leading-[3rem] font-normal font-outfit text-white">
//                 We deliver custom digital solutions, including web and mobile
//                 development, UI/UX, DevOps, e-commerce, AI, and system
//                 integrations helping businesses scale with efficient,
//                 high-performance technology.
//               </p>

//               {/* View All Button - Desktop */}
//               <div className="hidden lg:block mt-8">
//                 <button
//                   style={{ paddingLeft: 14 }}
//                   className="group flex items-center text-black font-outfit gap-4 bg-white px-1 py-1 text-base lg:text-lg font-medium tracking-wide transition hover:shadow-lg">
//                   View All Services
//                   <span className="bg-primary w-[46px] h-[43px] text-white flex items-center justify-center transition group-hover:translate-x-1">
//                     <ArrowRight size={18} />
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Scrolling Cards */}
//           <div className="relative">
//             <div className="space-y-8 lg:space-y-12">
//               {services.map((service, index) => (
//                 <div
//                   key={index}
//                   className="sticky top-20 transition-all duration-500">
//                   <ServiceCard
//                     image={service.image}
//                     title={service.title}
//                     gradient={service.gradient}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* View All Button - Mobile */}
//         <div className="lg:hidden mt-12 px-4">
//           <button
//             style={{ paddingLeft: 14 }}
//             className="group flex items-center text-black font-outfit gap-4 bg-white px-1 py-1 text-base lg:text-lg font-medium tracking-wide transition hover:shadow-lg">
//             View All Services
//             <span className="bg-primary w-[46px] h-[43px] text-white flex items-center justify-center transition group-hover:translate-x-1">
//               <ArrowRight size={18} />
//             </span>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;
