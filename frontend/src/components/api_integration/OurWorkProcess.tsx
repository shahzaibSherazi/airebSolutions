// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const steps = [
//   {
//     title: "Requirement Analysis",
//     desc: "Understanding your business needs and defining API functionality.",
//     number: "01",
//   },
//   {
//     title: "System Design",
//     desc: "Designing scalable architecture and defining data flow.",
//     number: "02",
//   },
//   {
//     title: "Development",
//     desc: "Building robust, secure, and efficient solutions.",
//     number: "03",
//   },
//   {
//     title: "Testing & QA",
//     desc: "Ensuring reliability, performance, and security.",
//     number: "04",
//   },
//   {
//     title: "Deployment",
//     desc: "Launching and monitoring in production environments.",
//     number: "05",
//   },
// ];

// export default function OurWorkProcess() {
//   const sectionRef = useRef(null);
//   const pinRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       ScrollTrigger.create({
//         trigger: sectionRef.current,
//         start: "top top",
//         end: `+=${steps.length * 100}%`,
//         pin: pinRef.current,
//         scrub: true,
//         onUpdate: (self) => {
//           const index = Math.min(
//             steps.length - 1,
//             Math.floor(self.progress * steps.length),
//           );
//           setActiveIndex(index);
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <>
//       {/* ===== PINNED SECTION ===== */}
//       <section
//         ref={sectionRef}
//         className="relative bg-black text-white overflow-hidden">
//         <div
//           ref={pinRef}
//           className="min-h-screen flex flex-col items-center justify-center px-6">
//           {/* HEADER */}
//           <div className="text-center mb-16">
//             <span className="inline-block mb-4 bg-blue-600 text-xs px-3 py-1 rounded-full">
//               Our Work Process
//             </span>
//             <h2 className="text-4xl md:text-5xl font-light">
//               How we get it done
//             </h2>
//             <p className="text-gray-400 mt-4 max-w-xl mx-auto">
//               Our structured development approach ensures successful project
//               execution and delivery
//             </p>
//           </div>

//           {/* HORIZONTAL STEPS */}
//           <div className="relative w-full max-w-4xl mb-20">
//             <div className="absolute top-1/2 left-0 w-full h-px bg-gray-700" />

//             <div className="flex justify-between relative z-10">
//               {steps.map((_, i) => (
//                 <div
//                   key={i}
//                   className={`w-4 h-4 rounded-full transition-all duration-300 ${
//                     i <= activeIndex ? "bg-blue-500 scale-125" : "bg-white"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* CARD */}
//           <div className="relative w-full max-w-4xl">
//             <div className="bg-blue-600 rounded-xl p-10 min-h-[200px] transition-all duration-500">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">
//                     {steps[activeIndex].title}
//                   </h3>
//                   <p className="text-blue-100 max-w-xl">
//                     {steps[activeIndex].desc}
//                   </p>
//                 </div>

//                 <div className="text-5xl font-bold text-blue-800">
//                   {steps[activeIndex].number}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cardIcon from "../../assets/icons/api-icon.png";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Requirement Analysis",
    desc: "Understanding your business needs and defining API functionality.Understanding your business needs and defining API functionality.",
    number: "1",
  },
  {
    title: "System Design",
    desc: "Designing scalable architecture and defining data flow.",
    number: "2",
  },
  {
    title: "Development",
    desc: "Building robust, secure, and efficient solutions.",
    number: "3",
  },
  {
    title: "Testing & QA",
    desc: "Ensuring reliability, performance, and security.",
    number: "4",
  },
  {
    title: "Deployment",
    desc: "Launching and monitoring in production environments.",
    number: "5",
  },
];

export default function OurWorkProcess() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const prevIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  /* ================================
     SCROLL → CHANGE ACTIVE STEP
  ================================= */
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${steps.length * 100}%`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const index = Math.min(
            steps.length - 1,
            Math.floor(self.progress * steps.length),
          );
          setActiveIndex(index);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ================================
     CARD SLIDE ANIMATION
  ================================= */
  useEffect(() => {
    if (!cardRef.current) return;

    const direction = activeIndex > prevIndexRef.current ? 1 : -1;

    gsap.fromTo(
      cardRef.current,
      {
        x: direction === 1 ? 100 : -100,
        opacity: 0,
        scale: 0.98,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
        clearProps: "transform",
      },
    );

    prevIndexRef.current = activeIndex;
  }, [activeIndex]);

  return (
    <>
      <style>{`
        @keyframes pulse-dot {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(0.9);
          }
        }
        
        .pulse-dot {
          animation: pulse-dot 2s ease-in-out infinite;
        }
      `}</style>

      {/* ===== PINNED SECTION ===== */}
      <section
        ref={sectionRef}
        className="relative min-h-screen bg-black text-white flex items-center">
        <div className="max-w-6xl mx-auto w-full px-6">
          {/* HEADER */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-[89px]">
            <span className="bg-primary font-outfit text-white px-4 py-1.5 sm:px-[29px] sm:py-[9px] uppercase text-xs sm:text-base font-medium">
              Our Work Process
            </span>
            <h2 className="text-white font-stoke font-normal text-2xl sm:text-3xl md:text-4xl lg:text-[42px] mt-3 sm:mt-[34px]">
              How we get it done
            </h2>
            <p className="font-outfit font-normal text-base mt-[27px]">
              Our structured development approach ensures successful{" "}
              <br className="hidden sm:block" /> project execution and delivery
            </p>
          </div>

          {/* HORIZONTAL STEPS */}
          <div className="relative w-full max-w-3xl mx-auto mb-12">
            {/* Background Line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-800 -translate-y-1/2" />

            {/* Progress Line - from start to active step */}
            <div
              className="absolute top-1/2 left-0 h-[1px] bg-blue-500 -translate-y-1/2 transition-all duration-500 ease-out"
              style={{
                width: `${(activeIndex / (steps.length - 1)) * 100}%`,
              }}
            />

            {/* Step Dots */}
            <div className="flex justify-between relative z-10">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className="relative flex items-center justify-center">
                  {/* Outer Circle */}
                  <div
                    className={`w-[47px] h-[47px] rounded-full border-025 flex items-center justify-center transition-all duration-500 ${
                      i === activeIndex
                        ? "bg-primary scale-110"
                        : i < activeIndex
                          ? "bg-blue-600 border-blue-500"
                          : "bg-white"
                    }`}>
                    {/* Inner Dot */}
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-500 ${
                        i <= activeIndex ? "bg-white" : "bg-gray-600"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CARD */}
          <div className="relative w-full max-w-3xl mx-auto">
            <div
              ref={cardRef}
              className="bg-primary px-12 py-8 relative overflow-hidden min-h-[200px]">
              {/* Top Left - Pulsing Dot */}
              <div className="absolute top-[11px] left-[11px]">
                <div className="relative w-2.5 h-2.5">
                  <div className="absolute inset-0 bg-blue-200 rounded-full pulse-dot"></div>
                </div>
              </div>

              {/* Top Right - Half Circle Icon */}
              <div className="absolute top-0 right-0">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-black rounded-bl-full border-l-[0.25px] border-b-[0.25px] border-white flex  justify-center p-3">
                  <img
                    src={cardIcon}
                    className="w-[44px] h-[44px] self-start justify-start"
                  />
                </div>
              </div>

              {/* Content Area */}
              <div className="relative z-10 pt-2">
                <h3 className="text-2xl font-bold font-stoke mb-2.5 text-white">
                  {steps[activeIndex].title}
                </h3>
                <p className="text-blue-100 max-w-xl font-outfit font-normal text-base line-clamp-2 leading-relaxed">
                  {steps[activeIndex].desc}
                </p>
              </div>

              {/* Bottom Left - Number in Half Circle */}
              <div className="absolute bottom-0 left-0">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-black rounded-tr-full border-t border-r border-white flex  justify-center items-end  p-3">
                  <span className="text-4xl font-bold font-outfit text-white mr-1 mt-1">
                    {steps[activeIndex].number}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
