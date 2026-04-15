// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const OurWork = () => {
//   const sectionRef = useRef(null);
//   const orbitRefs = useRef([]);
//   const salesforceRef = useRef(null);
//   const contentRef = useRef(null);

//   const orbits = [
//     {
//       radius: 140,
//       direction: "clockwise",
//       rotations: 0.5,
//       logos: [
//         { name: "Twilio", color: "bg-red-500" },
//         { name: "FreeAgent", color: "bg-blue-400" },
//         { name: "HubSpot", color: "bg-orange-500" },
//       ],
//     },
//     {
//       radius: 220,
//       direction: "anticlockwise",
//       rotations: 0.4,
//       logos: [
//         { name: "Xero", color: "bg-blue-500" },
//         { name: "Engage", color: "bg-green-500" },
//         { name: "Asana", color: "bg-pink-500" },
//         { name: "Zoho", color: "bg-red-600" },
//       ],
//     },
//     {
//       radius: 300,
//       direction: "clockwise",
//       rotations: 0.3,
//       logos: [
//         { name: "Pipedrive", color: "bg-green-600" },
//         { name: "FAST", color: "bg-gray-800" },
//         { name: "Terminus", color: "bg-purple-600" },
//         { name: "MS", color: "bg-blue-600" },
//         { name: "Procore", color: "bg-orange-600" },
//       ],
//     },
//     {
//       radius: 380,
//       direction: "anticlockwise",
//       rotations: 0.25,
//       logos: [
//         { name: "Slack", color: "bg-purple-500" },
//         { name: "Demio", color: "bg-blue-500" },
//         { name: "QuickBooks", color: "bg-green-500" },
//         { name: "Zoom", color: "bg-blue-400" },
//         { name: "Chargebee", color: "bg-orange-500" },
//         { name: "Jira", color: "bg-blue-700" },
//       ],
//     },
//   ];

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Pin the Salesforce section when the content reaches it
//       ScrollTrigger.create({
//         trigger: salesforceRef.current,
//         start: "top top",
//         end: "+=200%", // Adjust this to control how long content scrolls over it
//         pin: true,
//         pinSpacing: false,
//       });

//       // Create smooth scroll-triggered animations for each orbit
//       orbits.forEach((orbit, index) => {
//         const rotationMultiplier = orbit.direction === "clockwise" ? 1 : -1;
//         const fullRotation = 360 * orbit.rotations * rotationMultiplier;

//         // Animate the orbit container
//         gsap.to(orbitRefs.current[index], {
//           rotation: fullRotation,
//           ease: "none",
//           scrollTrigger: {
//             trigger: salesforceRef.current,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: 1,
//             invalidateOnRefresh: true,
//           },
//         });

//         // Animate logos to counter-rotate so they stay upright
//         const logoElements = orbitRefs.current[index]?.querySelectorAll(
//           ".logo-card-container",
//         );
//         logoElements?.forEach((logo) => {
//           gsap.to(logo, {
//             rotation: -fullRotation,
//             ease: "none",
//             scrollTrigger: {
//               trigger: salesforceRef.current,
//               start: "top bottom",
//               end: "bottom top",
//               scrub: 1,
//               invalidateOnRefresh: true,
//             },
//           });
//         });
//       });

//       // Optional: Add parallax effect to background elements
//       gsap.to(".bg-grid", {
//         y: 100,
//         ease: "none",
//         scrollTrigger: {
//           trigger: salesforceRef.current,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: 1,
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef} className="relative">
//       {/* Scrolling Content Layer - Our Work Section (ON TOP) */}
//       <div
//         ref={contentRef}
//         className="relative z-10 bg-primary w-full px-4 sm:px-6 lg:px-8 py-24">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-12">
//           {/* Left Content */}
//           <div className="flex-1 w-full lg:w-auto text-center lg:text-left">
//             {/* Heading */}
//             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal md:leading-[55px] font-stoke text-black mb-4 sm:mb-6">
//               Power Up Your Workflow with <br /> 50 + CRM Integration
//             </h2>

//             {/* Description */}
//             <p className="text-base sm:text-lg font-outfit font-light text-[#141414] mb-6 sm:mb-12 lg:mx-0">
//               Aireb Solutions empowers businesses with 50+ CRM integrations,
//               streamlining workflows, automating processes, <br /> and ensuring
//               seamless data synchronization for enhanced efficiency and
//               productivity.
//             </p>

//             {/* Buttons */}
//             <div className="flex items-center justify-center lg:justify-start">
//               <button className="w-full font-outfit font-bold text-sm md:text-lg sm:w-auto px-6 sm:px-7 py-2 sm:py-[9px] bg-black text-white rounded border-025 border-gray-900 hover:text-black hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg">
//                 Get Started
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Fixed Salesforce Background Section (BELOW) */}
//       <div
//         style={{ minHeight: "200vh" }}
//         ref={salesforceRef}
//         className="relative w-full bg-black overflow-hidden">
//         {/* Diagonal lines decoration */}

//         <div className="relative w-full h-screen max-w-4xl mx-auto flex items-center justify-center">
//           {/* Center Salesforce logo */}
//           <div className="absolute z-20 w-48 h-48 bg-white rounded-full shadow-2xl flex items-center justify-center">
//             <div className="text-center">
//               <div className="text-4xl font-bold text-blue-500 mb-1">
//                 <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto">
//                   <path
//                     fill="#00A1E0"
//                     d="M35 20c-8.3 0-15 6.7-15 15 0 1.5.2 3 .6 4.4C14.4 41.9 10 47.9 10 55c0 9.4 7.6 17 17 17h46c9.4 0 17-7.6 17-17 0-7.1-4.4-13.1-10.6-15.6.4-1.4.6-2.9.6-4.4 0-8.3-6.7-15-15-15-2.1 0-4.1.4-5.9 1.2C56.6 14.8 50 10 42.5 10c-5.8 0-11 2.7-14.4 6.9C36.8 20.3 35.9 20 35 20z"
//                   />
//                 </svg>
//               </div>
//               <div className="text-xl font-bold text-blue-500">salesforce</div>
//             </div>
//           </div>

//           {/* Orbital rings with logos */}
//           {orbits.map((orbit, orbitIndex) => {
//             return (
//               <div
//                 key={orbitIndex}
//                 ref={(el) => (orbitRefs.current[orbitIndex] = el)}
//                 className="absolute inset-0 flex items-center justify-center">
//                 {/* Orbital ring - Static circle */}
//                 <div
//                   className="absolute border border-blue-300/30 rounded-full"
//                   style={{
//                     width: `${orbit.radius * 2}px`,
//                     height: `${orbit.radius * 2}px`,
//                   }}
//                 />

//                 {/* Small dots on the orbital ring */}
//                 {[...Array(8)].map((_, dotIndex) => (
//                   <div
//                     key={`dot-${dotIndex}`}
//                     className="absolute w-1.5 h-1.5 bg-blue-300/40 rounded-full"
//                     style={{
//                       transform: `rotate(${dotIndex * 45}deg) translateY(-${orbit.radius}px)`,
//                     }}
//                   />
//                 ))}

//                 {/* Logos on orbit */}
//                 {orbit.logos.map((logo, logoIndex) => {
//                   const angleOffset = (360 / orbit.logos.length) * logoIndex;

//                   return (
//                     <div
//                       key={`${orbitIndex}-${logoIndex}`}
//                       className="absolute flex items-center justify-center"
//                       style={{
//                         width: "0px",
//                         height: "0px",
//                         transform: `rotate(${angleOffset}deg) translateY(-${orbit.radius}px)`,
//                       }}>
//                       {/* Logo card stays horizontal */}
//                       <div className="bg-white rounded-lg shadow-lg px-4 py-2 flex items-center justify-center min-w-[80px] hover:scale-110 transition-transform duration-300">
//                         <div
//                           className={`w-2 h-2 rounded-full ${logo.color} mr-2`}
//                         />
//                         <span className="text-xs font-semibold text-gray-800 whitespace-nowrap">
//                           {logo.name}
//                         </span>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             );
//           })}

//           {/* Subtle glow effect */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-64 h-64 bg-blue-300/10 rounded-full blur-3xl" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurWork;

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const OurWork = () => {
//   const sectionRef = useRef(null);
//   const orbitRefs = useRef([]);
//   const salesforceRef = useRef(null);
//   const contentRef = useRef(null);

//   const orbits = [
//     {
//       radius: 140,
//       direction: "clockwise",
//       rotations: 0.5,
//       logos: [
//         { name: "Twilio", color: "bg-red-500" },
//         { name: "FreeAgent", color: "bg-blue-400" },
//         { name: "HubSpot", color: "bg-orange-500" },
//       ],
//     },
//     {
//       radius: 220,
//       direction: "anticlockwise",
//       rotations: 0.4,
//       logos: [
//         { name: "Xero", color: "bg-blue-500" },
//         { name: "Engage", color: "bg-green-500" },
//         { name: "Asana", color: "bg-pink-500" },
//         { name: "Zoho", color: "bg-red-600" },
//       ],
//     },
//     {
//       radius: 300,
//       direction: "clockwise",
//       rotations: 0.3,
//       logos: [
//         { name: "Pipedrive", color: "bg-green-600" },
//         { name: "FAST", color: "bg-gray-800" },
//         { name: "Terminus", color: "bg-purple-600" },
//         { name: "MS", color: "bg-blue-600" },
//         { name: "Procore", color: "bg-orange-600" },
//       ],
//     },
//     {
//       radius: 380,
//       direction: "anticlockwise",
//       rotations: 0.25,
//       logos: [
//         { name: "Slack", color: "bg-purple-500" },
//         { name: "Demio", color: "bg-blue-500" },
//         { name: "QuickBooks", color: "bg-green-500" },
//         { name: "Zoom", color: "bg-blue-400" },
//         { name: "Chargebee", color: "bg-orange-500" },
//         { name: "Jira", color: "bg-blue-700" },
//       ],
//     },
//   ];

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Calculate content height
//       const contentHeight = contentRef.current?.offsetHeight || 0;
//       const viewportHeight = window.innerHeight;
//       const salesforceHeight = viewportHeight * 2; // 200vh

//       // Set the Salesforce section height
//       gsap.set(salesforceRef.current, {
//         height: salesforceHeight,
//       });

//       // Pin the Salesforce section
//       ScrollTrigger.create({
//         trigger: salesforceRef.current,
//         start: "top top",
//         end: `+=${salesforceHeight}`,
//         pin: true,
//         pinSpacing: false,
//         anticipatePin: 1,
//       });

//       // Move content up as we scroll (starting from original position)
//       gsap.to(contentRef.current, {
//         y: -contentHeight,
//         ease: "none",
//         scrollTrigger: {
//           trigger: salesforceRef.current,
//           start: "top top",
//           end: `+=${contentHeight}`,
//           scrub: 1,
//         },
//       });

//       // Animate orbits
//       orbits.forEach((orbit, index) => {
//         const rotationMultiplier = orbit.direction === "clockwise" ? 1 : -1;
//         const fullRotation = 360 * orbit.rotations * rotationMultiplier;

//         // Animate orbit rotation
//         gsap.to(orbitRefs.current[index], {
//           rotation: fullRotation,
//           ease: "none",
//           scrollTrigger: {
//             trigger: salesforceRef.current,
//             start: "top top",
//             end: `+=${salesforceHeight}`,
//             scrub: 1,
//           },
//         });

//         // Animate logos to counter-rotate
//         orbitRefs.current[index]
//           ?.querySelectorAll(".logo-card")
//           .forEach((logo) => {
//             gsap.to(logo, {
//               rotation: -fullRotation,
//               ease: "none",
//               scrollTrigger: {
//                 trigger: salesforceRef.current,
//                 start: "top top",
//                 end: `+=${salesforceHeight}`,
//                 scrub: 1,
//               },
//             });
//           });
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef} className="relative">
//       {/* Original Content Section - LEFT ALIGNED */}
//       <div
//         ref={contentRef}
//         className="relative z-20 bg-primary w-full px-4 sm:px-6 lg:px-8 py-24">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-12">
//           {/* Left Content - Original Position */}
//           <div className="flex-1 w-full lg:w-auto text-left">
//             {" "}
//             {/* Changed from text-center */}
//             {/* Heading */}
//             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal md:leading-[55px] font-stoke text-black mb-4 sm:mb-6">
//               Power Up Your Workflow with <br /> 50 + CRM Integration
//             </h2>
//             {/* Description */}
//             <p className="text-base sm:text-lg font-outfit font-light text-[#141414] mb-6 sm:mb-12">
//               Aireb Solutions empowers businesses with 50+ CRM integrations,
//               streamlining workflows, automating processes, <br /> and ensuring
//               seamless data synchronization for enhanced efficiency and
//               productivity.
//             </p>
//             {/* Buttons - Left aligned */}
//             <div className="flex items-center justify-start">
//               {" "}
//               {/* Changed from justify-center */}
//               <button className="font-outfit font-bold text-sm md:text-lg px-6 sm:px-7 py-2 sm:py-[9px] bg-black text-white rounded border-025 border-gray-900 hover:text-black hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg">
//                 Get Started
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Salesforce Background Section - Full height */}
//       <div
//         ref={salesforceRef}
//         className="relative w-full  overflow-hidden bg-black">
//         {/* Center the orbital system in the viewport */}
//         <div className="relative h-screen flex items-center justify-center">
//           <div className="absolute w-full max-w-4xl mx-auto aspect-square">
//             {/* Center Salesforce logo */}
//             <div className="absolute z-20 w-48 h-48 bg-white rounded-full shadow-2xl flex items-center justify-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
//               <div className="text-center">
//                 <div className="text-4xl font-bold text-blue-500 mb-1">
//                   <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto">
//                     <path
//                       fill="#00A1E0"
//                       d="M35 20c-8.3 0-15 6.7-15 15 0 1.5.2 3 .6 4.4C14.4 41.9 10 47.9 10 55c0 9.4 7.6 17 17 17h46c9.4 0 17-7.6 17-17 0-7.1-4.4-13.1-10.6-15.6.4-1.4.6-2.9.6-4.4 0-8.3-6.7-15-15-15-2.1 0-4.1.4-5.9 1.2C56.6 14.8 50 10 42.5 10c-5.8 0-11 2.7-14.4 6.9C36.8 20.3 35.9 20 35 20z"
//                     />
//                   </svg>
//                 </div>
//                 <div className="text-xl font-bold text-blue-500">
//                   salesforce
//                 </div>
//               </div>
//             </div>

//             {/* Orbital rings with logos */}
//             {orbits.map((orbit, orbitIndex) => {
//               return (
//                 <div
//                   key={orbitIndex}
//                   ref={(el) => (orbitRefs.current[orbitIndex] = el)}
//                   className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
//                   style={{
//                     width: `${orbit.radius * 2}px`,
//                     height: `${orbit.radius * 2}px`,
//                   }}>
//                   {/* Orbital ring */}
//                   <div
//                     className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-blue-300/30 rounded-full"
//                     style={{
//                       width: `${orbit.radius * 2}px`,
//                       height: `${orbit.radius * 2}px`,
//                     }}
//                   />

//                   {/* Small dots */}
//                   {[...Array(8)].map((_, dotIndex) => {
//                     const angle = (dotIndex * 45 * Math.PI) / 180;
//                     const x = Math.cos(angle) * orbit.radius;
//                     const y = Math.sin(angle) * orbit.radius;

//                     return (
//                       <div
//                         key={`dot-${dotIndex}`}
//                         className="absolute w-1.5 h-1.5 bg-blue-300/40 rounded-full"
//                         style={{
//                           left: `calc(50% + ${x}px)`,
//                           top: `calc(50% + ${y}px)`,
//                           transform: "translate(-50%, -50%)",
//                         }}
//                       />
//                     );
//                   })}

//                   {/* Logos */}
//                   {orbit.logos.map((logo, logoIndex) => {
//                     const angleOffset = (360 / orbit.logos.length) * logoIndex;

//                     return (
//                       <div
//                         key={`${orbitIndex}-${logoIndex}`}
//                         className="logo-card absolute left-1/2 top-1/2"
//                         style={{
//                           transform: `translate(-50%, -50%) rotate(${angleOffset}deg) translateY(-${orbit.radius}px) rotate(-${angleOffset}deg)`,
//                           transformOrigin: "center",
//                         }}>
//                         <div className="bg-white rounded-lg shadow-lg px-4 py-2 flex items-center justify-center min-w-[80px] hover:scale-110 transition-transform duration-300">
//                           <div
//                             className={`w-2 h-2 rounded-full ${logo.color} mr-2`}
//                           />
//                           <span className="text-xs font-semibold text-gray-800 whitespace-nowrap">
//                             {logo.name}
//                           </span>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               );
//             })}

//             {/* Glow effect */}
//             <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
//               <div className="w-64 h-64 bg-blue-300/10 rounded-full blur-3xl" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurWork;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import saleForceLogo from "@/assets/CRM-logos/saleforce.png";
import freeAgentLogo from "@/assets/CRM-logos/freeAgent_logo.png";
import boberdo_logo from "@/assets/CRM-logos/boberdo_logo.png";
import dropbox_logo from "@/assets/CRM-logos/dropbox_logo.png";
import engaged_logo from "@/assets/CRM-logos/engaged_logo.png";
import fastdox_logo from "@/assets/CRM-logos/fastdox_logo.png";
import flg_logo from "@/assets/CRM-logos/flg_logo.png";
import freeAgent_logo from "@/assets/CRM-logos/freeAgent_logo.png";
import hubsolv_logo from "@/assets/CRM-logos/hubsolv_logo.png";
import hubSpot_logo from "@/assets/CRM-logos/hubSpot_logo.png";
import omni_logo from "@/assets/CRM-logos/omni_logo.png";
import pipedrive_logo from "@/assets/CRM-logos/pipedrive_logo.png";
import qb_logo from "@/assets/CRM-logos/qb_logo.png";
import quickbase_logo from "@/assets/CRM-logos/quickbase_logo.png";
import sage_logo from "@/assets/CRM-logos/sage_logo.png";
import twilo from "@/assets/CRM-logos/twilo.png";
import webform_logo from "@/assets/CRM-logos/webform_logo.png";
import xero_logo from "@/assets/CRM-logos/xero_logo.png";
import zoho_logo from "@/assets/CRM-logos/zoho_logo.png";

gsap.registerPlugin(ScrollTrigger);

const OurWork = () => {
  const sectionRef = useRef(null);
  const orbitRefs = useRef([]);
  const salesforceRef = useRef(null);
  const contentRef = useRef(null);

  const orbits = [
    {
      radius: 140,
      direction: "clockwise",
      rotations: 0.5,
      logos: [
        { src: freeAgentLogo, alt: "freeAgentLogo" },
        { src: boberdo_logo, alt: "boberdo_logo" },
        { src: dropbox_logo, alt: "dropbox_logo" },
      ],
    },
    {
      radius: 200,
      direction: "anticlockwise",
      rotations: 0.4,
      logos: [
        { src: engaged_logo, alt: "engaged_logo" },
        { src: fastdox_logo, alt: "fastdox_logo" },
        { src: flg_logo, alt: "flg_logo" },
        { src: freeAgent_logo, alt: "freeAgent_logo" },
      ],
    },
    {
      radius: 260,
      direction: "clockwise",
      rotations: 0.3,
      logos: [
        { src: hubsolv_logo, alt: "hubsolv_logo" },
        { src: hubSpot_logo, alt: "hubSpot_logo" },
        { src: omni_logo, alt: "omni_logo" },
        { src: pipedrive_logo, alt: "pipedrive_logo" },
        { src: qb_logo, alt: "qb_logo" },
      ],
    },
    {
      radius: 320,
      direction: "anticlockwise",
      rotations: 0.25,
      logos: [
        { src: quickbase_logo, alt: "quickbase_logo" },
        { src: sage_logo, alt: "sage_logo" },
        { src: twilo, alt: "twilo" },
        { src: webform_logo, alt: "webform_logo" },
        { src: xero_logo, alt: "xero_logo" },
        { src: zoho_logo, alt: "zoho_logo" },
      ],
    },
    {
      radius: 380,
      direction: "clockwise",
      rotations: 0.1,
      logos: [],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the Salesforce section when the content reaches it
      ScrollTrigger.create({
        trigger: salesforceRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        pinSpacing: false,
      });

      // Create smooth scroll-triggered animations for each orbit
      orbits.forEach((orbit, index) => {
        const rotationMultiplier = orbit.direction === "clockwise" ? 1 : -1;
        const fullRotation = 360 * orbit.rotations * rotationMultiplier;

        // Animate the orbit container
        gsap.to(orbitRefs.current[index], {
          rotation: fullRotation,
          ease: "none",
          scrollTrigger: {
            trigger: salesforceRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        // Animate logos to counter-rotate so they stay horizontal
        const logoElements =
          orbitRefs.current[index]?.querySelectorAll(".logo-card");
        logoElements?.forEach((logo) => {
          gsap.to(logo, {
            rotation: -fullRotation,
            ease: "none",
            scrollTrigger: {
              trigger: salesforceRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });
        });
      });

      // Optional: Add parallax effect to background elements
      gsap.to(".bg-grid", {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: salesforceRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black overflow-hidden">
      {/* Scrolling Content Layer - Our Work Section (ON TOP) */}
      {/* <div
        ref={contentRef}
        className="relative z-10 bg-primary w-full px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-12">
          <div className="flex-1 w-full lg:w-auto text-center lg:text-left">
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal md:leading-[55px] font-stoke text-black mb-4 sm:mb-6">
                Power Up Your Workflow with <br /> 50 + CRM Integration
              </h2>

              <p className="text-base sm:text-lg font-outfit font-light text-[#141414] mb-6 sm:mb-12 lg:mx-0">
                Aireb Solutions empowers businesses with 50+ CRM integrations,
                streamlining workflows, automating processes, <br /> and
                ensuring seamless data synchronization for enhanced efficiency
                and productivity.
              </p>
            </motion.div>
            <div className="flex items-center justify-center lg:justify-start">
              <button className="w-full font-outfit font-bold text-sm md:text-lg sm:w-auto px-6 sm:px-7 py-2 sm:py-[9px] bg-black text-white rounded border-025 border-gray-900 hover:text-black hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Fixed Salesforce Background Section (BELOW) */}
      <div
        style={{ minHeight: "200vh" }}
        ref={salesforceRef}
        className="relative ">
        <div className="relative w-full h-screen flex items-center justify-center">
          {/* Center Salesforce logo */}
          <div className="absolute z-20 w-48 h-48 overflow-hidden p-5 bg-white rounded-full shadow-2xl flex items-center justify-center">
            <img src={saleForceLogo} />
          </div>

          {/* Orbital rings with logos */}
          {orbits.map((orbit, orbitIndex) => {
            return (
              <div
                key={orbitIndex}
                ref={(el) => (orbitRefs.current[orbitIndex] = el)}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: `${orbit.radius * 2}px`,
                  height: `${orbit.radius * 2}px`,
                }}>
                {/* Orbital ring - Static circle */}
                <div
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-blue-300/30 rounded-full"
                  style={{
                    width: `${orbit.radius * 2}px`,
                    height: `${orbit.radius * 2}px`,
                  }}
                />

                {/* Small dots on the orbital ring */}
                {[...Array(8)].map((_, dotIndex) => {
                  const angle = (dotIndex * 45 * Math.PI) / 180;
                  const x = Math.cos(angle) * orbit.radius;
                  const y = Math.sin(angle) * orbit.radius;

                  return (
                    <div
                      key={`dot-${dotIndex}`}
                      className="absolute w-1.5 h-1.5 bg-blue-300/40 rounded-full"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  );
                })}

                {/* Logos on orbit - Horizontal orientation */}
                {orbit.logos.map((logo, logoIndex) => {
                  const angleOffset = (360 / orbit.logos.length) * logoIndex;

                  return (
                    <div
                      key={`${orbitIndex}-${logoIndex}`}
                      className="logo-card absolute left-1/2 top-1/2"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${angleOffset}deg) translateY(-${orbit.radius}px) rotate(-${angleOffset}deg)`,
                        transformOrigin: "center",
                      }}>
                      {/* Logo card stays horizontal */}
                      <div className="bg-white rounded-lg shadow-lg px-4 py-2 flex items-center justify-center max-w-[115px] max-h-[36px] hover:scale-110 transition-transform duration-300">
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
