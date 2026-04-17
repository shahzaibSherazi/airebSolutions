// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import cardIcon from "../../assets/icons/api-icon.png";
// import { motion } from "framer-motion";

// gsap.registerPlugin(ScrollTrigger);

// const steps = [
//   {
//     title: "Requirement Analysis",
//     desc: "Understanding your business needs and defining API functionality.Understanding your business needs and defining API functionality.",
//     number: "1",
//   },
//   {
//     title: "System Design",
//     desc: "Designing scalable architecture and defining data flow.",
//     number: "2",
//   },
//   {
//     title: "Development",
//     desc: "Building robust, secure, and efficient solutions.",
//     number: "3",
//   },
//   {
//     title: "Testing & QA",
//     desc: "Ensuring reliability, performance, and security.",
//     number: "4",
//   },
//   {
//     title: "Deployment",
//     desc: "Launching and monitoring in production environments.",
//     number: "5",
//   },
// ];

// export default function OurWorkProcess() {
//   const sectionRef = useRef(null);
//   const cardRef = useRef(null);
//   const prevIndexRef = useRef(0);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const getIsMobile = () =>
//     typeof window !== "undefined" &&
//     window.matchMedia("(max-width: 1023px)").matches;

//   const [isMobile, setIsMobile] = useState(getIsMobile);

//   useEffect(() => {
//     const mq = window.matchMedia("(max-width: 1023px)");
//     const handler = (e) => setIsMobile(e.matches);

//     mq.addEventListener("change", handler);
//     return () => mq.removeEventListener("change", handler);
//   }, []);
//   useEffect(() => {
//   const handleResize = () => {
//     ScrollTrigger.refresh();
//   };

//   window.addEventListener("resize", handleResize);

//   return () => window.removeEventListener("resize", handleResize);
// }, []);
//   /* ================================
//      SCROLL → CHANGE ACTIVE STEP
//   ================================= */
//   useLayoutEffect(() => {
//     if (isMobile) return;

//     const ctx = gsap.context(() => {
//       ScrollTrigger.create({
//         trigger: sectionRef.current,
//         start: "top top",
//         end: `+=${steps.length * 100}%`,
//         pin: true,
//         scrub: 1,
//         onUpdate: (self) => {
//           const index = Math.min(
//             steps.length - 1,
//             Math.floor(self.progress * steps.length),
//           );
//           setActiveIndex(index);
//         },
//       });
//     }, sectionRef);
//     setTimeout(() => {
//       ScrollTrigger.refresh();
//     }, 100);

//     return () => ctx.revert();
//   }, [isMobile]);

//   /* ================================
//      CARD SLIDE ANIMATION
//   ================================= */
//   useEffect(() => {
//     if (isMobile) return; // ❌ no animation on mobile

//     if (!cardRef.current) return;

//     const direction = activeIndex > prevIndexRef.current ? 1 : -1;

//     gsap.fromTo(
//       cardRef.current,
//       {
//         x: direction === 1 ? 100 : -100,
//         opacity: 0,
//         scale: 0.98,
//       },
//       {
//         x: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.6,
//         ease: "power3.out",
//         clearProps: "transform",
//       },
//     );

//     prevIndexRef.current = activeIndex;
//   }, [activeIndex, isMobile]);

//   return (
//     <>
//       {/* ===== PINNED SECTION ===== */}
//       <section
//         ref={sectionRef}
//         className="relative  bg-black text-white flex items-center">
//         <div className="max-w-6xl mx-auto w-full px-2 lg:px-8 py-16 lg:py-24">
//           {/* HEADER */}
//           <div className="text-center mb-8 ">
//             <span className="bg-primary font-outfit text-white px-4 py-1.5 sm:px-[29px] sm:py-[9px] uppercase text-xs sm:text-base font-medium">
//               Our Work Process
//             </span>
//             <motion.div
//               initial={{ y: 60, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               viewport={{ once: false }}>
//               <h2 className="text-white font-stoke font-normal text-h2 mt-6 sm:mt-[30px]">
//                 How we get it done
//               </h2>
//               <p className="font-outfit font-normal text-base mt-[27px]">
//                 Our structured development approach ensures successful{" "}
//                 <br className="hidden sm:block" /> project execution and
//                 delivery
//               </p>
//             </motion.div>
//           </div>

//           {/* CARD */}
//           <div className="relative w-full max-w-3xl mx-auto">
//             {isMobile ? (
//               // ✅ MOBILE → show ALL cards
//               <div className="space-y-6">
//                 {steps.map((step, i) => (
//                   <div
//                     key={i}
//                     className="bg-primary px-12  pt-4 pb-8 sm:pt-8 relative overflow-hidden min-h-[200px]">
//                     {/* same UI reused */}

//                     <div className="absolute top-[11px] left-[11px]">
//                       <div className="relative w-2.5 h-2.5">
//                         <div className="absolute inset-0 bg-blue-200 rounded-full pulse-dot"></div>
//                       </div>
//                     </div>

//                     <div className="absolute top-0 right-0">
//                       <div className="w-18 sm:w-24 h-18 sm:h-24 bg-gradient-to-br from-primary to-black rounded-bl-full border-l-[0.25px] border-b-[0.25px] border-white flex justify-center p-3">
//                         <img
//                           src={cardIcon}
//                           className="w-[38px] sm:w-[44px] h-[38px] sm:h-[44px]"
//                         />
//                       </div>
//                     </div>

//                     <div className="relative z-10 pt-2">
//                       <h3 className="text-title font-bold font-stoke tracking-[2px] mb-2.5 text-textColor">
//                         {step.title}
//                       </h3>
//                       <p className="text-textColor max-w-xl font-outfit text-p leading-relaxed">
//                         {step.desc}
//                       </p>
//                     </div>

//                     <div className="absolute bottom-0 left-0">
//                       <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-primary to-black rounded-tr-full border-t border-r border-white flex justify-center items-end p-3">
//                         <span className="text-2xl sm:text-4xl font-bold font-outfit text-white">
//                           {step.number}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               // ✅ DESKTOP → EXACT SAME (no change)
//               <>
//                 <div className="relative w-full max-w-3xl mx-auto mb-12">
//                   {/* Background Line */}
//                   <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-800 -translate-y-1/2" />

//                   {/* Progress Line - from start to active step */}
//                   <div
//                     className="absolute top-1/2 left-0 h-[1px] bg-blue-500 -translate-y-1/2 transition-all duration-500 ease-out"
//                     style={{
//                       width: `${(activeIndex / (steps.length - 1)) * 100}%`,
//                     }}
//                   />

//                   {/* Step Dots */}
//                   <div className="flex justify-between relative z-10">
//                     {steps.map((_, i) => (
//                       <div
//                         key={i}
//                         className="relative flex items-center justify-center">
//                         {/* Outer Circle */}
//                         <div
//                           className={`w-[47px] h-[47px] rounded-full border-025 flex items-center justify-center transition-all duration-500 ${
//                             i === activeIndex
//                               ? "bg-primary scale-110"
//                               : i < activeIndex
//                                 ? "bg-primary"
//                                 : "bg-white"
//                           }`}>
//                           {/* Inner Dot */}
//                           <div
//                             className={`w-2 h-2 rounded-full transition-all duration-500 ${
//                               i <= activeIndex ? "bg-white" : "bg-gray-600"
//                             }`}
//                           />
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div
//                   ref={cardRef}
//                   className="bg-primary px-12 py-8 relative overflow-hidden min-h-[200px]">
//                   <div className="absolute top-[11px] left-[11px]">
//                     {" "}
//                     <div className="relative w-2.5 h-2.5">
//                       {" "}
//                       <div className="absolute inset-0 bg-blue-200 rounded-full pulse-dot"></div>{" "}
//                     </div>{" "}
//                   </div>{" "}
//                   {/* Top Right - Half Circle Icon */}{" "}
//                   <div className="absolute top-0 right-0">
//                     {" "}
//                     <div className="w-24 h-24 bg-gradient-to-br from-primary to-black rounded-bl-full border-l-[0.25px] border-b-[0.25px] border-white flex justify-center p-3">
//                       {" "}
//                       <img
//                         src={cardIcon}
//                         className="w-[44px] h-[44px] self-start justify-start"
//                       />{" "}
//                     </div>{" "}
//                   </div>{" "}
//                   {/* Content Area */}{" "}
//                   <div className="relative z-10 pt-2">
//                     {" "}
//                     <h3 className="text-title font-bold font-stoke tracking-[2px] mb-2.5 text-textColor">
//                       {" "}
//                       {steps[activeIndex].title}{" "}
//                     </h3>{" "}
//                     <p className="text-textColor max-w-xl font-outfit font-normal text-base line-clamp-2 leading-relaxed">
//                       {" "}
//                       {steps[activeIndex].desc}{" "}
//                     </p>{" "}
//                   </div>{" "}
//                   {/* Bottom Left - Number in Half Circle */}{" "}
//                   <div className="absolute bottom-0 left-0">
//                     {" "}
//                     <div className="w-20 h-20 bg-gradient-to-br from-primary to-black rounded-tr-full border-t border-r border-white flex justify-center items-end p-3">
//                       {" "}
//                       <span className="text-4xl font-bold font-outfit text-white mr-1 mt-1">
//                         {" "}
//                         {steps[activeIndex].number}{" "}
//                       </span>{" "}
//                     </div>{" "}
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import cardIcon from "../../assets/icons/api-icon.png";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDir, setSlideDir] = useState(1);

  const containerRef = useRef(null);

  // ── Scroll tracking always runs — but only visually active on desktop ──
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      const next = Math.min(steps.length - 1, Math.floor(v * steps.length));
      setActiveIndex((prev) => {
        if (next !== prev) setSlideDir(next > prev ? 1 : -1);
        return next;
      });
    });
    return () => unsub();
  }, [scrollYProgress]);

  // Card slide variants
  const cardVariants = {
    enter: (dir) => ({ x: dir * 80, opacity: 0, scale: 0.98 }),
    center: { x: 0, opacity: 1, scale: 1 },
  };

  // Shared card UI
  const StepCard = ({ step }) => (
    <div className="bg-primary px-12 pt-4 pb-8 sm:pt-8 relative overflow-hidden min-h-[200px]">
      <div className="absolute top-[11px] left-[11px]">
        <div className="relative w-2.5 h-2.5">
          <div className="absolute inset-0 bg-blue-200 rounded-full pulse-dot" />
        </div>
      </div>
      <div className="absolute top-0 right-0">
        <div className="w-18 sm:w-24 h-18 sm:h-24 bg-gradient-to-br from-primary to-black rounded-bl-full border-l-[0.25px] border-b-[0.25px] border-white flex justify-center p-3">
          <img
            src={cardIcon}
            className="w-[38px] sm:w-[44px] h-[38px] sm:h-[44px]"
            alt=""
          />
        </div>
      </div>
      <div className="relative z-10 pt-2">
        <h3 className="text-title font-bold font-stoke tracking-[2px] mb-2.5 text-textColor">
          {step.title}
        </h3>
        <p className="text-textColor max-w-xl font-outfit text-p leading-relaxed">
          {step.desc}
        </p>
      </div>
      <div className="absolute bottom-0 left-0">
        <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-primary to-black rounded-tr-full border-t border-r border-white flex justify-center items-end p-3">
          <span className="text-2xl sm:text-4xl font-bold font-outfit text-white">
            {step.number}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    // ── Outer container: tall on desktop for scroll room, auto on mobile ──
    // lg:h-[500vh] gives 5 steps × 100vh scroll space
    <div ref={containerRef} className="h-auto lg:h-[500vh]">
      {/* ── Sticky on desktop, static on mobile ── */}
      <div className="relative lg:sticky lg:top-0 bg-black text-white flex items-center h-auto lg:h-screen">
        <div className="max-w-6xl mx-auto w-full px-2 lg:px-8 py-16 lg:py-24">
          {/* HEADER */}
          <div className="text-center mb-8">
            <span className="bg-primary font-outfit text-white px-4 py-1.5 sm:px-[29px] sm:py-[9px] uppercase text-xs sm:text-base font-medium">
              Our Work Process
            </span>
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}>
              <h2 className="text-white font-stoke font-normal text-h2 mt-6 sm:mt-[30px]">
                How we get it done
              </h2>
              <p className="font-outfit font-normal text-base mt-[27px]">
                Our structured development approach ensures successful{" "}
                <br className="hidden sm:block" /> project execution and
                delivery
              </p>
            </motion.div>
          </div>

          {/* CARD AREA */}
          <div className="relative w-full max-w-3xl mx-auto">
            {/* ── MOBILE: all cards stacked — hidden on lg+ ── */}
            <div className="block lg:hidden space-y-6">
              {steps.map((step, i) => (
                <StepCard key={i} step={step} />
              ))}
            </div>

            {/* ── DESKTOP: progress + animated card — hidden below lg ── */}
            <div className="hidden lg:block">
              {/* Progress tracker */}
              <div className="relative w-full mb-12">
                {/* Background line */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-800 -translate-y-1/2" />

                {/* Animated progress line */}
                <motion.div
                  className="absolute top-1/2 left-0 h-[1px] bg-blue-500 -translate-y-1/2 origin-left"
                  animate={{
                    width: `${(activeIndex / (steps.length - 1)) * 100}%`,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />

                {/* Step dots */}
                <div className="flex justify-between relative z-10">
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className="relative flex items-center justify-center">
                      <motion.div
                        animate={{
                          scale: i === activeIndex ? 1.1 : 1,
                          backgroundColor:
                            i <= activeIndex
                              ? "var(--color-primary, #3b82f6)"
                              : "#ffffff",
                        }}
                        transition={{ duration: 0.4 }}
                        className="w-[47px] h-[47px] rounded-full border-025 flex items-center justify-center">
                        <motion.div
                          animate={{
                            backgroundColor:
                              i <= activeIndex ? "#ffffff" : "#4b5563",
                          }}
                          transition={{ duration: 0.4 }}
                          className="w-2 h-2 rounded-full"
                        />
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Animated card */}
              <motion.div
                key={activeIndex}
                custom={slideDir}
                variants={cardVariants}
                initial="enter"
                animate="center"
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}>
                <StepCard step={steps[activeIndex]} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
