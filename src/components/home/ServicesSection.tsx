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
    <section className="relative w-full py-28  bg-black px-0 lg:px-8">
      <div className="w-full flex flex-col lg:flex-row items-start px-4 sm:px-6 lg:px-0">
        {/* <!-- Left Column: Button + Text --> */}
        <div className="flex-1 flex flex-col items-start gap-[45px] md:gap-[33px] lg:mb-0 md:mb-4">
          {/* <!-- Our Service Button --> */}
          <button className="px-7 py-1 bg-primary text-white font-outfit font-medium  text-lg shadow-md hover:bg-blue-700 transition-all duration-300">
            Our Service
          </button>

          {/* <!-- Description Text --> */}
          <p className="lg:max-w-[80vh] text-2xl sm:text-lg md:text-4xl leading-10 font-normal font-outfit text-white">
            We deliver custom digital solutions, including web and mobile
            development, UI/UX, DevOps, e-commerce, AI, and system integrations
            helping businesses scale with efficient, high-performance
            technology.
          </p>
          <div className="md:block hidden  mt-[134px]">
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
        <div className="w-full lg:w-auto md:mt-0 mt-8">
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

// import { useEffect, useRef, useState } from "react";
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
//   const [activeIndex, setActiveIndex] = useState(0);
//   const containerRef = useRef(null);
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = cardRefs.current.indexOf(entry.target);
//             if (index !== -1) {
//               setActiveIndex(index);
//             }
//           }
//         });
//       },
//       {
//         root: null,
//         rootMargin: "-50% 0px -50% 0px", // Trigger when 50% of card is visible
//         threshold: 0,
//       },
//     );

//     cardRefs.current.forEach((card) => {
//       if (card) observer.observe(card);
//     });

//     return () => {
//       cardRefs.current.forEach((card) => {
//         if (card) observer.unobserve(card);
//       });
//     };
//   }, []);

//   return (
//     <section className="relative w-full bg-black">
//       <div className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
//           {/* Left Column: Sticky Content */}
//           <div className="lg:sticky lg:top-20 lg:self-start h-fit">
//             <div className="flex flex-col items-start gap-8 lg:gap-10">
//               <button className="px-7 py-2 bg-primary text-white font-outfit font-medium text-base lg:text-lg shadow-md hover:bg-blue-700 transition-all duration-300">
//                 Our Service
//               </button>

//               <p className="max-w-full lg:max-w-[550px] text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-relaxed lg:leading-[3rem] font-normal font-outfit text-white">
//                 We deliver custom digital solutions, including web and mobile
//                 development, UI/UX, DevOps, e-commerce, AI, and system
//                 integrations helping businesses scale with efficient,
//                 high-performance technology.
//               </p>

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

//           {/* Right Column: Cards with Intersection Observer */}
//           <div className="relative" ref={containerRef}>
//             <div className="space-y-8 lg:space-y-12">
//               {services.map((service, index) => (
//                 <div
//                   key={index}
//                   ref={(el) => (cardRefs.current[index] = el)}
//                   className={`transition-all duration-700 ${
//                     index === activeIndex
//                       ? "opacity-100 scale-100"
//                       : "opacity-40 scale-95"
//                   }`}
//                   style={{
//                     height: "80vh",
//                     minHeight: "500px",
//                     scrollSnapAlign: "start",
//                   }}>
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

//         {/* Mobile Button */}
//         <div className="lg:hidden mt-12 px-4">
//           <button
//             style={{ paddingLeft: 14 }}
//             className="group flex items-center text-black font-outfit gap-4 bg-white px-1 py-1 text-base font-medium tracking-wide transition w-full sm:w-auto">
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
