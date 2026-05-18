// import { useEffect, useRef, useState } from "react";
// import ServiceCard from "../ui/serviceCard";
// import service1 from "../../assets/service1.png";
// import service2 from "../../assets/service2.png";
// import service3 from "../../assets/service3.png";
// import { ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";

// const services = [
//   {
//     image: service1,
//     title: "AI & Machine Learning",
//     link: "/services/ai-services",
//     gradient: "linear-gradient(180deg, #0B23C8 0%, rgba(0,0,0,0) 100%)",
//   },
//   {
//     image: service2,
//     title: "Web Development",
//     link: "/services/web-development",
//     gradient: "linear-gradient(180deg, #0B23C8 0%, rgba(0,0,0,0) 100%)",
//   },
//   {
//     image: service3,
//     title: "Contact Center",
//     link: "/services/contact-center",
//     gradient: "linear-gradient(180deg, #0B23C8 0%, rgba(0,0,0,0) 100%)",
//   },
// ];

// const ServicesSection = () => {
//   const sectionRef = useRef(null);
//   const [activeCard, setActiveCard] = useState(0);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     let ticking = false;

//     const handleScroll = () => {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           const rect = section.getBoundingClientRect();
//           const sectionTop = rect.top;
//           const sectionHeight = rect.height;
//           const windowHeight = window.innerHeight;

//           // Scroll progress only inside section
//           const scrollableDistance = sectionHeight - windowHeight;
//           const progress = Math.min(
//             Math.max(-sectionTop / scrollableDistance, 0),
//             1,
//           );

//           // Divide section into equal steps for each card
//           const cardIndex = Math.min(
//             Math.floor(progress * services.length),
//             services.length - 1,
//           );

//           setActiveCard(cardIndex);
//           ticking = false;
//         });

//         ticking = true;
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full bg-black relative"
//       style={{
//         height: `${services.length * 100}vh`, // lock section until all cards scroll
//       }}>
//       <div className="sticky top-0 h-screen flex items-center overflow-hidden">
//         <div className="container">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-12 items-center">
//             {/* LEFT CONTENT */}
//             <div className="flex flex-col gap-8 lg:gap-10">
//               <div className="p-[0.5px] rounded-full bg-[linear-gradient(90deg,#000000_0%,#4285F4_100%)] w-fit">
//                 <div className="main_heading rounded-full px-7 py-2 text-white font-outfit font-medium text-base lg:text-lg bg-black">
//                   Our Service
//                 </div>
//               </div>

//               <p className="max-w-full lg:max-w-[550px] xl:max-w-full text-base leading-[1.7] sm:text-xl sm:leading-[1.75] md:leading-[1.8] lg:text-2xl lg:leading-[1.25] font-normal font-outfit text-white">
//                 We build powerful digital solutions, including web apps, mobile
//                 apps, UI/UX design, DevOps, AI systems, and e-commerce platforms
//                 that help businesses grow faster and operate efficiently.
//               </p>

//               <Link
//                 to="/services"
//                 className="group h-12 w-fit flex items-center text-textColor hover:text-black hover:bg-white font-outfit gap-4 bg-primary p-2 ps-4 text-base lg:text-lg font-medium tracking-wide transition duration-300 ease-in-out hover:shadow-lg">
//                 View All Services
//                 <div className="bg-white h-full px-3 text-black group-hover:bg-primary flex items-center justify-center transition-all group-hover:translate-x-1">
//                   <ArrowRight size={18} />
//                 </div>
//               </Link>
//             </div>

//             {/* RIGHT CARDS */}
//             <div className="relative lg:h-[420px] flex items-center   justify-center lg:justify-end">
//               {services.map((service, index) => (
//                 <div
//                   key={index}
//                   className={`absolute w-full max-w-[500px] transition-all duration-500 ease-out ${
//                     index === activeCard
//                       ? "opacity-100 translate-y-0 scale-100"
//                       : index < activeCard
//                         ? "opacity-0 -translate-y-10 scale-95 pointer-events-none"
//                         : "opacity-0 translate-y-10 scale-95 pointer-events-none"
//                   }`}>
//                   <ServiceCard {...service} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

import { useEffect, useRef, useState } from "react";
import ServiceCard from "../ui/serviceCard";
import service1 from "../../assets/service1.webp";
import service2 from "../../assets/service2.webp";
import service3 from "../../assets/service3.webp";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    image: service1,
    title: "AI & Machine Learning",
    link: "/services/ai-services",
    gradient: "linear-gradient(180deg, #0B23C8 0%, rgba(0,0,0,0) 100%)",
  },
  {
    image: service2,
    title: "Web Development",
    link: "/services/web-development",
    gradient: "linear-gradient(180deg, #0B23C8 0%, rgba(0,0,0,0) 100%)",
  },
  {
    image: service3,
    title: "Contact Center",
    link: "/services/contact-center",
    gradient: "linear-gradient(180deg, #0B23C8 0%, rgba(0,0,0,0) 100%)",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  // ✅ Detect desktop (lg = 1024px+)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // ✅ Sticky scroll logic — only runs on desktop
  useEffect(() => {
    if (!isDesktop) return;

    const section = sectionRef.current;
    if (!section) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = (section as HTMLElement).getBoundingClientRect();
          const sectionTop = rect.top;
          const sectionHeight = rect.height;
          const windowHeight = window.innerHeight;

          const scrollableDistance = sectionHeight - windowHeight;
          const progress = Math.min(
            Math.max(-sectionTop / scrollableDistance, 0),
            1,
          );

          const cardIndex = Math.min(
            Math.floor(progress * services.length),
            services.length - 1,
          );

          setActiveCard(cardIndex);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop]);

  return (
    <>
      {/* ── DESKTOP — sticky scroll section ─────────────────────── */}
      <section
        ref={sectionRef}
        className="w-full bg-black relative hidden lg:block"
        style={{ height: `${services.length * 100}vh` }}>
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="container">
            <div className="grid grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div className="flex flex-col gap-8 lg:gap-10">
                <div className="p-[0.5px] bg-[linear-gradient(90deg,#000000_0%,#4285F4_100%)] w-fit main_heading rounded-full px-7 py-2 text-white font-outfit font-medium text-base lg:text-lg bg-black">
                  Our Service
                </div>

                <p className="max-w-full lg:max-w-[550px] xl:max-w-full text-base leading-[1.7] sm:text-xl sm:leading-[1.75] md:leading-[1.8] lg:text-2xl lg:leading-[1.25] font-normal font-outfit text-white">
                  We build powerful digital solutions, including web apps,
                  mobile apps, UI/UX design, DevOps, AI systems, and e-commerce
                  platforms that help businesses grow faster and operate
                  efficiently.
                </p>

                <Link
                  to="/services"
                  className="group h-12 w-fit flex items-center text-textColor hover:text-black hover:bg-white font-outfit gap-4 bg-primary p-2 ps-4 text-base lg:text-lg font-medium tracking-wide transition duration-300 ease-in-out hover:shadow-lg">
                  View All Services
                  <div className="bg-white h-full px-3 text-black group-hover:bg-primary flex items-center justify-center transition-all group-hover:translate-x-1">
                    <ArrowRight size={18} />
                  </div>
                </Link>
              </div>

              {/* Right — animated cards */}
              <div className="relative h-[420px] flex items-center justify-end">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`absolute w-full max-w-[500px] transition-all duration-500 ease-out ${
                      index === activeCard
                        ? "opacity-100 translate-y-0 scale-100"
                        : index < activeCard
                          ? "opacity-0 -translate-y-10 scale-95 pointer-events-none"
                          : "opacity-0 translate-y-10 scale-95 pointer-events-none"
                    }`}>
                    <ServiceCard {...service} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MOBILE/TABLET — static stacked cards ─────────────────── */}
      <section className="w-full bg-black lg:hidden">
        <div className="container py-16">
          <div className="flex flex-col lg:items-start items-center gap-8">
            {/* Header */}
            <div className="p-[0.5px] rounded-full bg-[linear-gradient(90deg,#000000_0%,#4285F4_100%)] w-fit">
              <div className="main_heading rounded-full px-7 py-2 text-white font-outfit font-medium text-base bg-black">
                Our Service
              </div>
            </div>

            <p className="text-base lg:text-start text-center leading-[1.7] sm:text-xl sm:leading-[1.75] font-normal font-outfit text-white">
              We build powerful digital solutions, including web apps, mobile
              apps, UI/UX design, DevOps, AI systems, and e-commerce platforms
              that help businesses grow faster and operate efficiently.
            </p>

            <Link
              to="/services"
              className="group h-12 w-fit flex items-center text-textColor hover:text-black hover:bg-white font-outfit gap-4 bg-primary p-2 ps-4 text-base font-medium tracking-wide transition duration-300 ease-in-out hover:shadow-lg">
              View All Services
              <div className="bg-white h-full px-3 text-black group-hover:bg-primary flex items-center justify-center transition-all group-hover:translate-x-1">
                <ArrowRight size={18} />
              </div>
            </Link>

            {/* All cards stacked */}
            <div className="flex flex-col gap-6 mt-4">
              {services.map((service, index) => (
                <div key={index} className="w-full">
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
