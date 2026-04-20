// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import robotImg from "../../assets/ai-robot.png";
// import robotImg2 from "../../assets/ai-robot-lg.png";
// import BtnIcon from "@/assets/icons/btn_icon.svg?react";

// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger);

// const AIExpertiseSection = () => {
//   const sectionRef = useRef(null);
//   const smallRobotRef = useRef(null);
//   const largeRobotRef = useRef(null);
//   const contentRef = useRef(null);
//   const titleRef = useRef(null);
//   const expertiseRefs = useRef([]);
//   const buttonRef = useRef(null);

//   const [scrollProgress, setScrollProgress] = useState(0);

//   const expertiseItems = [
//     {
//       id: 1,
//       title: "Advanced AI Algorithm Development",
//       description:
//         "We design and implement advanced AI algorithms that transform complex data into intelligent, actionable insights. Our solutions are built to scale, adapt, and drive smarter business decisions.",
//     },
//     {
//       id: 2,
//       title: "Machine Learning Model Training",
//       description:
//         "Our expert team develops and trains custom machine learning models tailored to your specific business needs, ensuring optimal performance and accuracy in real-world applications.",
//     },
//     {
//       id: 3,
//       title: "Natural Language Processing",
//       description:
//         "We leverage cutting-edge NLP technologies to build intelligent systems that understand, interpret, and generate human language, enabling seamless human-AI interaction.",
//     },
//     {
//       id: 4,
//       title: "Computer Vision Solutions",
//       description:
//         "Transform visual data into actionable insights with our advanced computer vision solutions, enabling automated image recognition, object detection, and visual analysis.",
//     },
//   ];

//   useEffect(() => {
//     // Create ScrollTrigger for the entire section
//     const ctx = gsap.context(() => {
//       // Pin the section
//       ScrollTrigger.create({
//         trigger: sectionRef.current,
//         start: "top top",
//         end: "+=400%",
//         pin: true,
//         anticipatePin: 1,
//         scrub: 1,
//         onUpdate: (self) => {
//           setScrollProgress(self.progress);
//         },
//       });

//       // Main robot timeline - transforms from small to large
//       const robotTimeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "+=400%",
//           scrub: 1,
//         },
//       });

//       /* -------------------------
//    Stage 1: Small robot visible from start
// -------------------------- */
//       robotTimeline
//         .fromTo(
//           smallRobotRef.current,
//           {
//             opacity: 0.1,
//             scale: 0.7,
//           },
//           {
//             opacity: 1,
//             scale: 1,
//             ease: "power3.out",
//             duration: 0.3,
//           },
//         )

//         /* -------------------------
//    Stage 2: Small robot stays visible
// -------------------------- */
//         .to(smallRobotRef.current, {
//           scale: 1.05,
//           ease: "power2.out",
//           duration: 0.2,
//         })

//         /* -------------------------
//    Stage 3: Small robot fades out
// -------------------------- */
//         .to(smallRobotRef.current, {
//           opacity: 0,
//           scale: 1.15,
//           ease: "power2.inOut",
//           duration: 0.15,
//         })

//         /* -------------------------
//    Stage 4: Large robot appears and grows
// -------------------------- */
//         .fromTo(
//           largeRobotRef.current,
//           {
//             opacity: 0,
//             scale: 0.8,
//           },
//           {
//             opacity: 1,
//             scale: 1.2,
//             ease: "power3.out",
//             duration: 0.35,
//           },
//           "<",
//         );

//       // Animate title - appears first (0-10% scroll)
//       gsap.fromTo(
//         titleRef.current,
//         {
//           x: -100,
//           opacity: 0.1,
//         },
//         {
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top top",
//             end: "+=10%",
//             scrub: 1,
//           },
//           x: 0,
//           opacity: 1,
//           ease: "power2.out",
//         },
//       );

//       expertiseRefs.current.forEach((item, index) => {
//         if (!item) return;

//         robotTimeline.fromTo(
//           item,
//           {
//             x: -100,
//             opacity: 0,
//           },
//           {
//             x: 0,
//             opacity: 1,
//             ease: "power2.out",
//             duration: 0.25,
//           },
//           // 🔑 stagger them while robot is animating
//           0.1 + index * 0.15,
//         );
//       });

//       // Animate button - appears after last expertise item
//       gsap.fromTo(
//         buttonRef.current,
//         {
//           y: 50,
//           opacity: 0,
//           scale: 0.9,
//         },
//         {
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top+=20% top",
//             end: "+=10%",
//             scrub: 1,
//           },
//           y: 0,
//           opacity: 1,
//           scale: 1,
//           ease: "back.out(1.7)",
//         },
//       );

//       // Removed content parallax to keep items stable
//     }, sectionRef);
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full bg-black   overflow-hidden min-h-screen">
//       <div className="container relative z-10 py-16 px-2 lg:px-8 h-full">
//         {/* Main Grid Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full  h-full items-start">
//           {/* Left Side - Text Content */}
//           <div ref={contentRef} className="">
//             <div ref={titleRef} className="mb-4 lg:mb-5">
//               <h2
//                 className="text-white font-stoke font-normal text-h2"
//                 style={{
//                   transform: "perspective(1000px)",
//                 }}>
//                 AI & ML Expertise Powered by
//                 <br />
//                 <span
//                   className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
//                   style={{
//                     display: "inline-block",
//                     transform: `rotateX(${scrollProgress * 10}deg)`,
//                   }}>
//                   Skilled Professionals
//                 </span>
//               </h2>
//             </div>

//             {/* Expertise Items */}
//             <div className="mb-16">
//               {expertiseItems.map((item, index) => (
//                 <div
//                   key={item.id}
//                   ref={(el) => (expertiseRefs.current[index] = el)}
//                   className="group py-8 lg:py-10 border-b border-gray-800"
//                   style={{
//                     transform: "perspective(1000px)",
//                     transformStyle: "preserve-3d",
//                   }}>
//                   {/* Number Badge */}
//                   <div className="flex items-start gap-4">
//                     <div
//                       className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold text-sm shadow-lg shadow-blue-500/50"
//                       style={{
//                         transform: `translateZ(20px) rotate(${scrollProgress * 360}deg)`,
//                       }}>
//                       {index + 1}
//                     </div>

//                     <div className="flex-1">
//                       <h3 className="text-white mb-4 text-title font-outfit font-normal group-hover:text-blue-400 transition-colors duration-300">
//                         {item.title}
//                       </h3>
//                       <p className="text-white font-outfit font-normal text-p leading-relaxed">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Button */}
//             <div ref={buttonRef} className="pl-12">
//               <a
//                 href="#contact-form"
//                 className="group relative inline-flex items-center gap-2 bg-primary text-white text-xs sm:text-sm font-medium px-[21px] py-[18px] overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105">
//                 {/* Shimmer effect */}
//                 <div
//                   className="absolute inset-0"
//                   style={{
//                     transform: `translateX(${scrollProgress * 200 - 100}%)`,
//                   }}
//                 />

//                 <span className="relative z-10">Start A Project</span>
//                 <BtnIcon
//                   className="relative z-10 w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover:translate-x-1 transition-transform duration-300"
//                   style={{
//                     transform: `rotate(${scrollProgress * 360}deg)`,
//                   }}
//                 />
//               </a>
//             </div>
//           </div>

//           {/* Right Side - Single Transforming Robot */}
//           <div className="flex flex-col justify-center lg:justify-end items-end min-h-[600px] relative pt-0">
//             {/* Small Robot - Positioned at top, aligned with heading */}
//             <div
//               ref={smallRobotRef}
//               className="absolute top-0 left-1/2 lg:left-auto lg:right-0 -translate-x-1/2 lg:translate-x-0"
//               style={{
//                 transformStyle: "preserve-3d",
//                 perspective: "1000px",
//                 width: "285px",
//                 height: "339px",
//               }}>
//               {/* Rotating Glow Ring */}
//               <div
//                 className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-3xl scale-150"
//                 style={{
//                   transform: `rotate(${scrollProgress * 360}deg)`,
//                 }}
//               />

//               {/* Small Robot Image */}
//               <img
//                 src={robotImg}
//                 alt="AI Robot"
//                 className="relative w-full h-full object-contain drop-shadow-2xl z-10"
//               />

//               {/* Orbiting Particles */}
//               {[...Array(8)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400"
//                   style={{
//                     transform: `
//                       translate(-50%, -50%)
//                       rotate(${scrollProgress * 360 * 2 + i * 45}deg)
//                       translateX(${120 + Math.sin(scrollProgress * Math.PI * 2) * 20}px)
//                     `,
//                     opacity: Math.max(0, 1 - scrollProgress * 2),
//                   }}
//                 />
//               ))}
//             </div>

//             {/* Large Robot - Same position as small robot */}
//             <div
//               ref={largeRobotRef}
//               className="absolute top-0   lg:right-0 -translate-x-1/2 lg:translate-x-0"
//               style={{
//                 transformStyle: "preserve-3d",
//                 perspective: "1200px",
//                 maxWidth: "450px",
//                 width: "100%",
//               }}>
//               {/* Rotating Ambient Glow */}
//               <div
//                 className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 via-primary/30 to-primary/20 blur-3xl scale-110"
//                 style={{
//                   transform: `rotate(${-scrollProgress * 180}deg)`,
//                   opacity: Math.min(1, scrollProgress * 2),
//                 }}
//               />

//               {/* Large Robot Image */}
//               <img
//                 src={robotImg2}
//                 alt="AI Robot Large"
//                 className="relative w-full h-auto object-contain drop-shadow-2xl z-10"
//                 style={{
//                   aspectRatio: "693/823",
//                 }}
//               />

//               {/* Energy Waves */}
//               {scrollProgress > 0.6 && (
//                 <>
//                   {[...Array(4)].map((_, i) => (
//                     <div
//                       key={i}
//                       className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-blue-400/20 rounded-full"
//                       style={{
//                         width: `${80 + i * 40 + (scrollProgress - 0.6) * 200}%`,
//                         height: `${80 + i * 40 + (scrollProgress - 0.6) * 200}%`,
//                         opacity: Math.max(
//                           0,
//                           0.5 - (scrollProgress - 0.6) * 2 - i * 0.15,
//                         ),
//                         animationDelay: `${i * 0.3}s`,
//                       }}
//                     />
//                   ))}
//                 </>
//               )}

//               {/* Corner Lights */}
//               <div
//                 className="absolute top-0 right-0 w-40 h-40 bg-blue-400/40 blur-3xl rounded-full"
//                 style={{
//                   opacity: Math.min(1, scrollProgress * 2 - 0.5),
//                   transform: `scale(${1 + Math.max(0, scrollProgress - 0.5)})`,
//                 }}
//               />
//               <div
//                 className="absolute bottom-0 left-0 w-40 h-40 bg-purple-400/30 blur-3xl rounded-full"
//                 style={{
//                   opacity: Math.min(1, scrollProgress * 2 - 0.8),
//                   transform: `scale(${1 + Math.max(0, scrollProgress - 0.7)})`,
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AIExpertiseSection;

// import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import robotImg from "../../assets/ai-robot.png";
// import robotImg2 from "../../assets/ai-robot-lg.png";
// import BtnIcon from "@/assets/icons/btn_icon.svg?react";

// gsap.registerPlugin(ScrollTrigger);

// // ─── synchronous check — runs before any render paint ───────────────────────
// const getIsMobile = () =>
//   typeof window !== "undefined" &&
//   window.matchMedia("(max-width: 1023px)").matches;

// const AIExpertiseSection = () => {
//   const sectionRef = useRef(null);
//   const smallRobotRef = useRef(null);
//   const largeRobotRef = useRef(null);
//   const contentRef = useRef(null);
//   const titleRef = useRef(null);
//   const expertiseRefs = useRef([]);
//   const buttonRef = useRef(null);
//   const gsapCtxRef = useRef(null); // store context for cleanup

//   // ── initialised synchronously — no false→true flip ──────────────────────
//   const [isMobile, setIsMobile] = useState(getIsMobile);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   const expertiseItems = [
//     {
//       id: 1,
//       title: "Advanced AI Algorithm Development",
//       description:
//         "We design and implement advanced AI algorithms that transform complex data into intelligent, actionable insights. Our solutions are built to scale, adapt, and drive smarter business decisions.",
//     },
//     {
//       id: 2,
//       title: "Machine Learning Model Training",
//       description:
//         "Our expert team develops and trains custom machine learning models tailored to your specific business needs, ensuring optimal performance and accuracy in real-world applications.",
//     },
//     {
//       id: 3,
//       title: "Natural Language Processing",
//       description:
//         "We leverage cutting-edge NLP technologies to build intelligent systems that understand, interpret, and generate human language, enabling seamless human-AI interaction.",
//     },
//     {
//       id: 4,
//       title: "Computer Vision Solutions",
//       description:
//         "Transform visual data into actionable insights with our advanced computer vision solutions, enabling automated image recognition, object detection, and visual analysis.",
//     },
//   ];

//   // ── keep isMobile in sync on viewport resize ─────────────────────────────
//   useEffect(() => {
//     const mq = window.matchMedia("(max-width: 1023px)");
//     const handler = (e) => setIsMobile(e.matches);
//     mq.addEventListener("change", handler);
//     return () => mq.removeEventListener("change", handler);
//   }, []);

//   // ── GSAP: only on desktop, kill & re-init when breakpoint changes ─────────
//   useLayoutEffect(() => {
//     // Always kill any existing context first
//     if (gsapCtxRef.current) {
//       gsapCtxRef.current.revert();
//       gsapCtxRef.current = null;
//     }

//     // Hard stop — do not touch GSAP on mobile
//     if (isMobile) {
//       // Reset any inline styles GSAP may have already stamped
//       if (smallRobotRef.current)
//         gsap.set(smallRobotRef.current, { clearProps: "all" });
//       if (largeRobotRef.current)
//         gsap.set(largeRobotRef.current, { clearProps: "all" });
//       if (titleRef.current) gsap.set(titleRef.current, { clearProps: "all" });
//       if (buttonRef.current) gsap.set(buttonRef.current, { clearProps: "all" });
//       expertiseRefs.current.forEach((el) => {
//         if (el) gsap.set(el, { clearProps: "all" });
//       });
//       ScrollTrigger.killAll(); // nuke every trigger
//       return;
//     }

//     // ── Desktop animations ────────────────────────────────────────────────
//     gsapCtxRef.current = gsap.context(() => {
//       ScrollTrigger.create({
//         trigger: sectionRef.current,
//         start: "top top",
//         end: "+=400%",
//         pin: true,
//         anticipatePin: 1,
//         scrub: 1,
//         onUpdate: (self) => setScrollProgress(self.progress),
//       });

//       const robotTimeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "+=400%",
//           scrub: 1,
//         },
//       });

//       robotTimeline
//         .fromTo(
//           smallRobotRef.current,
//           { opacity: 0.1, scale: 0.7 },
//           { opacity: 1, scale: 1, ease: "power3.out", duration: 0.3 },
//         )
//         .to(smallRobotRef.current, {
//           scale: 1.05,
//           ease: "power2.out",
//           duration: 0.2,
//         })
//         .to(smallRobotRef.current, {
//           opacity: 0,
//           scale: 1.15,
//           ease: "power2.inOut",
//           duration: 0.15,
//         })
//         .fromTo(
//           largeRobotRef.current,
//           { opacity: 0, scale: 0.8 },
//           { opacity: 1, scale: 1.2, ease: "power3.out", duration: 0.35 },
//           "<",
//         );

//       gsap.fromTo(
//         titleRef.current,
//         { x: -100, opacity: 0.1 },
//         {
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top top",
//             end: "+=10%",
//             scrub: 1,
//           },
//           x: 0,
//           opacity: 1,
//           ease: "power2.out",
//         },
//       );

//       expertiseRefs.current.forEach((item, index) => {
//         if (!item) return;
//         robotTimeline.fromTo(
//           item,
//           { x: -100, opacity: 0 },
//           { x: 0, opacity: 1, ease: "power2.out", duration: 0.25 },
//           0.1 + index * 0.15,
//         );
//       });

//       gsap.fromTo(
//         buttonRef.current,
//         { y: 50, opacity: 0, scale: 0.9 },
//         {
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top+=20% top",
//             end: "+=10%",
//             scrub: 1,
//           },
//           y: 0,
//           opacity: 1,
//           scale: 1,
//           ease: "back.out(1.7)",
//         },
//       );
//     }, sectionRef);

//     return () => {
//       if (gsapCtxRef.current) {
//         gsapCtxRef.current.revert();
//         gsapCtxRef.current = null;
//       }
//     };
//   }, [isMobile]); // re-runs only when breakpoint actually flips

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full bg-black overflow-hidden min-h-screen">
//       <div className="container relative z-10 py-16 px-2 lg:px-8 h-full">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full h-full items-start">
//           {/* ── Left: Text Content ─────────────────────────────────────── */}
//           <div ref={contentRef}>
//             <div ref={titleRef} className="mb-4 lg:mb-5">
//               <h2
//                 className="text-white font-stoke font-normal text-h2"
//                 style={{ transform: "perspective(1000px)" }}>
//                 AI & ML Expertise Powered by
//                 <br />
//                 <span
//                   className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
//                   style={{
//                     display: "inline-block",
//                     transform: !isMobile
//                       ? `rotateX(${scrollProgress * 10}deg)`
//                       : "none",
//                   }}>
//                   Skilled Professionals
//                 </span>
//               </h2>
//             </div>

//             {/* Expertise Items */}
//             <div className="mb-16">
//               {expertiseItems.map((item, index) => (
//                 <div
//                   key={item.id}
//                   ref={(el) => (expertiseRefs.current[index] = el)}
//                   className="group py-8 lg:py-10 border-b border-gray-800"
//                   style={{
//                     transform: "perspective(1000px)",
//                     transformStyle: "preserve-3d",
//                   }}>
//                   <div className="flex items-start gap-4">
//                     <div
//                       className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold text-sm shadow-lg shadow-blue-500/50"
//                       style={{
//                         transform: !isMobile
//                           ? `translateZ(20px) rotate(${scrollProgress * 360}deg)`
//                           : "none",
//                       }}>
//                       {index + 1}
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-white mb-4 text-title font-outfit font-normal group-hover:text-blue-400 transition-colors duration-300">
//                         {item.title}
//                       </h3>
//                       <p className="text-white font-outfit font-normal text-p leading-relaxed">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Button */}
//             <div ref={buttonRef} className="pl-12">
//               <a
//                 href="#contact-form"
//                 className="group relative inline-flex items-center gap-2 bg-primary text-white text-xs sm:text-sm font-medium px-[21px] py-[18px] overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105">
//                 {!isMobile && (
//                   <div
//                     className="absolute inset-0"
//                     style={{
//                       transform: `translateX(${scrollProgress * 200 - 100}%)`,
//                     }}
//                   />
//                 )}
//                 <span className="relative z-10">Start A Project</span>
//                 <BtnIcon
//                   className="relative z-10 w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover:translate-x-1 transition-transform duration-300"
//                   style={{
//                     transform: !isMobile
//                       ? `rotate(${scrollProgress * 360}deg)`
//                       : "none",
//                   }}
//                 />
//               </a>
//             </div>
//           </div>

//           {/* ── Right: Robot ───────────────────────────────────────────── */}
//           <div className="relative flex items-center justify-center lg:justify-end lg:min-h-[600px]">
//             {/* MOBILE — single static robot, no JS, no pinning */}
//             {isMobile && (
//               <div className="w-full flex justify-center py-10">
//                 <img
//                   src={robotImg2}
//                   alt="AI Robot"
//                   className="w-[260px] object-contain drop-shadow-2xl"
//                 />
//               </div>
//             )}

//             {/* DESKTOP — full animated dual-robot */}
//             {!isMobile && (
//               <>
//                 {/* Small Robot */}
//                 <div
//                   ref={smallRobotRef}
//                   className="absolute top-0 right-0"
//                   style={{
//                     transformStyle: "preserve-3d",
//                     perspective: "1000px",
//                     width: "285px",
//                     height: "339px",
//                   }}>
//                   <div
//                     className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-3xl scale-150"
//                     style={{ transform: `rotate(${scrollProgress * 360}deg)` }}
//                   />
//                   <img
//                     src={robotImg}
//                     alt="AI Robot"
//                     className="relative w-full h-full object-contain drop-shadow-2xl z-10"
//                   />
//                   {[...Array(8)].map((_, i) => (
//                     <div
//                       key={i}
//                       className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400"
//                       style={{
//                         transform: `
//                           translate(-50%, -50%)
//                           rotate(${scrollProgress * 360 * 2 + i * 45}deg)
//                           translateX(${120 + Math.sin(scrollProgress * Math.PI * 2) * 20}px)
//                         `,
//                         opacity: Math.max(0, 1 - scrollProgress * 2),
//                       }}
//                     />
//                   ))}
//                 </div>

//                 {/* Large Robot */}
//                 <div
//                   ref={largeRobotRef}
//                   className="absolute top-0 right-0"
//                   style={{
//                     transformStyle: "preserve-3d",
//                     perspective: "1200px",
//                     maxWidth: "450px",
//                     width: "100%",
//                   }}>
//                   <div
//                     className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 via-primary/30 to-primary/20 blur-3xl scale-110"
//                     style={{
//                       transform: `rotate(${-scrollProgress * 180}deg)`,
//                       opacity: Math.min(1, scrollProgress * 2),
//                     }}
//                   />
//                   <img
//                     src={robotImg2}
//                     alt="AI Robot Large"
//                     className="relative w-full h-auto object-contain drop-shadow-2xl z-10"
//                     style={{ aspectRatio: "693/823" }}
//                   />
//                   {scrollProgress > 0.6 && (
//                     <>
//                       {[...Array(4)].map((_, i) => (
//                         <div
//                           key={i}
//                           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-blue-400/20 rounded-full"
//                           style={{
//                             width: `${80 + i * 40 + (scrollProgress - 0.6) * 200}%`,
//                             height: `${80 + i * 40 + (scrollProgress - 0.6) * 200}%`,
//                             opacity: Math.max(
//                               0,
//                               0.5 - (scrollProgress - 0.6) * 2 - i * 0.15,
//                             ),
//                           }}
//                         />
//                       ))}
//                     </>
//                   )}
//                   <div
//                     className="absolute top-0 right-0 w-40 h-40 bg-blue-400/40 blur-3xl rounded-full"
//                     style={{
//                       opacity: Math.min(1, scrollProgress * 2 - 0.5),
//                       transform: `scale(${1 + Math.max(0, scrollProgress - 0.5)})`,
//                     }}
//                   />
//                   <div
//                     className="absolute bottom-0 left-0 w-40 h-40 bg-purple-400/30 blur-3xl rounded-full"
//                     style={{
//                       opacity: Math.min(1, scrollProgress * 2 - 0.8),
//                       transform: `scale(${1 + Math.max(0, scrollProgress - 0.7)})`,
//                     }}
//                   />
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AIExpertiseSection;

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import robotImg from "../../assets/ai-robot.png";
import robotImg2 from "../../assets/ai-robot-lg.png";
import BtnIcon from "@/assets/icons/btn_icon.svg?react";

// ─── sync mobile check ───
const getIsMobile = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(max-width: 1023px)").matches;

export default function AIExpertiseSection() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(getIsMobile);

  const expertiseItems = [
    {
      id: 1,
      title: "Advanced AI Algorithm Development",
      description:
        "We design and implement advanced AI algorithms that transform complex data into intelligent, actionable insights.",
    },
    {
      id: 2,
      title: "Machine Learning Model Training",
      description:
        "Our expert team develops and trains custom machine learning models tailored to your needs.",
    },
    {
      id: 3,
      title: "Natural Language Processing",
      description:
        "We leverage cutting-edge NLP technologies to build intelligent systems.",
    },
    {
      id: 4,
      title: "Computer Vision Solutions",
      description:
        "Transform visual data into actionable insights with our advanced solutions.",
    },
  ];

  // ─── responsive listener ───
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // ─── scroll progress ───
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // smooth like GSAP scrub
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  // ─── transforms (GSAP timeline replacement) ───

  const smallScale = useTransform(smoothProgress, [0, 0.3], [0.7, 1.05]);
  const smallOpacity = useTransform(smoothProgress, [0, 0.2, 0.4], [0.1, 1, 0]);

  const largeScale = useTransform(smoothProgress, [0.3, 0.6], [0.8, 1.2]);
  const largeOpacity = useTransform(smoothProgress, [0.3, 0.6], [0, 1]);

  const rotate = useTransform(smoothProgress, [0, 1], [0, 360]);

  const titleX = useTransform(smoothProgress, [0, 0.1], [-100, 0]);
  const titleOpacity = useTransform(smoothProgress, [0, 0.1], [0, 1]);

  const buttonY = useTransform(smoothProgress, [0.2, 0.3], [50, 0]);
  const buttonOpacity = useTransform(smoothProgress, [0.2, 0.3], [0, 1]);

  return (
    <div ref={containerRef} className="h-auto lg:h-[400vh]">
      <section className="relative w-full bg-black overflow-hidden lg:sticky lg:top-0 ">
        <div className="container relative z-10 py-16 px-2 lg:px-8 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full h-full items-start">
            {/* LEFT CONTENT */}
            <div>
              <motion.div
                style={!isMobile ? { x: titleX, opacity: titleOpacity } : {}}
                className="mb-5">
                <h2 className="text-white font-stoke text-h2">
                  AI & ML Expertise Powered by
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                    Skilled Professionals
                  </span>
                </h2>
              </motion.div>

              {/* ITEMS */}
              <div className="mb-16">
                {expertiseItems.map((item, index) => {
                  const itemX = useTransform(
                    smoothProgress,
                    [0.1 + index * 0.1, 0.3 + index * 0.1],
                    [-100, 0],
                  );

                  const itemOpacity = useTransform(
                    smoothProgress,
                    [0.1 + index * 0.1, 0.3 + index * 0.1],
                    [0, 1],
                  );

                  return (
                    <motion.div
                      key={item.id}
                      style={
                        !isMobile ? { x: itemX, opacity: itemOpacity } : {}
                      }
                      className="group py-8 lg:py-10 border-b border-gray-800">
                      <div className="flex gap-4">
                        <motion.div
                          style={!isMobile ? { rotate } : {}}
                          className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                          {index + 1}
                        </motion.div>

                        <div>
                          <h3 className="text-white font-stoke mb-4 group-hover:text-blue-400 transition">
                            {item.title}
                          </h3>
                          <p className="text-white font-outfit">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* BUTTON */}
              <motion.div
                style={!isMobile ? { y: buttonY, opacity: buttonOpacity } : {}}
                className="pl-12">
                <a
                  href="#contact-form"
                  className="group font-outfit inline-flex items-center gap-2 bg-primary text-white px-6 py-4">
                  Start A Project
                  <motion.div style={!isMobile ? { rotate } : {}}>
                    <BtnIcon className="w-3 h-3" />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            {/* RIGHT ROBOT */}
            <div className="relative flex items-center justify-center lg:justify-end lg:min-h-[600px]">
              {/* MOBILE */}
              {isMobile && (
                <img src={robotImg2} className="w-[260px] object-contain" />
              )}

              {/* DESKTOP */}
              {!isMobile && (
                <>
                  {/* SMALL ROBOT */}
                  <motion.img
                    src={robotImg}
                    style={{
                      scale: smallScale,
                      opacity: smallOpacity,
                    }}
                    className="absolute top-0 right-0 w-[285px]"
                  />

                  {/* LARGE ROBOT */}
                  <motion.img
                    src={robotImg2}
                    style={{
                      scale: largeScale,
                      opacity: largeOpacity,
                    }}
                    className="absolute top-0 right-0 max-w-[450px]"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
