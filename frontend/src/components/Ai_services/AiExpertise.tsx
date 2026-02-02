// import React from "react";
// import robotImg from "../../assets/ai-robot.png";
// import robotImg2 from "../../assets/ai-robot-lg.png";
// import btnIcon from "../../assets/icons/btn_icon.png";
// const AIExpertiseSection = () => {
//   const expertiseItems = [
//     {
//       id: 1,
//       title: "Advanced AI Algorithm Development",
//       description:
//         "We design and implement advanced AI algorithms that transform complex data into intelligent, actionable insights. Our solutions are built to scale, adapt, and drive smarter business decisions.",
//     },
//     {
//       id: 2,
//       title: "Advanced AI Algorithm Development",
//       description:
//         "We design and implement advanced AI algorithms that transform complex data into intelligent, actionable insights. Our solutions are built to scale, adapt, and drive smarter business decisions.",
//     },
//     {
//       id: 3,
//       title: "Advanced AI Algorithm Development",
//       description:
//         "We design and implement advanced AI algorithms that transform complex data into intelligent, actionable insights. Our solutions are built to scale, adapt, and drive smarter business decisions.",
//     },
//     {
//       id: 4,
//       title: "Advanced AI Algorithm Development",
//       description:
//         "We design and implement advanced AI algorithms that transform complex data into intelligent, actionable insights. Our solutions are built to scale, adapt, and drive smarter business decisions.",
//     },
//   ];

//   return (
//     <section className=" w-full bg-black py-16 lg:py-24">
//       <div className="px-4 sm:px-6 lg:px-8">
//         {/* Main Grid Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full">
//           {/* Left Side - Text Content with borders */}
//           <div className="space-y-2">
//             <div className="mb-4 lg:mb-5">
//               <h2
//                 className="text-white font-stoke font-normal "
//                 style={{
//                   fontSize: "clamp(28px, 4vw, 30px)",
//                   lineHeight: "1.4",
//                 }}>
//                 AI & ML Expertise Powered by
//                 <br />
//                 Skilled Professionals
//               </h2>
//             </div>
//             {expertiseItems.map((item, index) => (
//               <div
//                 key={item.id}
//                 className={`py-8 lg:py-10 ${
//                   index !== expertiseItems.length - 1
//                     ? "border-b border-gray-800"
//                     : ""
//                 }`}>
//                 <h3
//                   className="text-white mb-4 font-outfit font-normal"
//                   style={{
//                     fontSize: "clamp(18px, 2.5vw, 22px)",
//                     lineHeight: "1.4",
//                   }}>
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-400 font-outfit font-normal text-base">
//                   {item.description}
//                 </p>
//               </div>
//             ))}
//             {/* Button */}
//             <div className="mt-10">
//               <button className="inline-flex items-center gap-2 bg-primary text-white text-xs sm:text-sm font-medium px-[21px] py-[18px] hover:bg-blue-700 transition whitespace-nowrap">
//                 Start A Project
//                 <img
//                   src={btnIcon}
//                   alt="icon"
//                   className="w-2.5 h-2.5 sm:w-3 sm:h-3"
//                 />
//               </button>
//             </div>
//           </div>

//           {/* Right Side - Only 2 Images (Small top, Large bottom) */}
//           <div className=" flex flex-col gap-8 lg:gap-12 justify-end items-end">
//             {/* Small Robot Image - Top (285x339) */}
//             <div className="hidden group lg:flex items-end justify-end max-w-[285px] aspect-[285/339]">
//               <img
//                 src={robotImg}
//                 alt="AI Robot"
//                 className="w-full h-full transition-transform duration-500 group-hover:scale-105"
//               />
//             </div>

//             {/* Large Robot Image - Bottom (693x823) */}
//             <div className=" group flex justify-center lg:justify-end">
//               <img
//                 src={robotImg2}
//                 alt="AI Robot Large"
//                 className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
//                 style={{
//                   width: "100%",
//                   maxWidth: "693px",
//                   height: "auto",
//                   aspectRatio: "693/823",
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Custom Styles */}
//       <style>{`
//         @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap");

//         @keyframes shimmer {
//           0% {
//             background-position: -200% center;
//           }
//           100% {
//             background-position: 200% center;
//           }
//         }

//         .animate-shimmer {
//           background-size: 200% auto;
//           animation: shimmer 3s linear infinite;
//         }

//         /* Ensure images maintain aspect ratio on all screens */
//         @media (max-width: 640px) {
//           img {
//             max-width: 100%;
//             height: auto;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default AIExpertiseSection;

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import robotImg from "../../assets/ai-robot.png";
import robotImg2 from "../../assets/ai-robot-lg.png";
import btnIcon from "../../assets/icons/btn_icon.png";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const AIExpertiseSection = () => {
  const sectionRef = useRef(null);
  const smallRobotRef = useRef(null);
  const largeRobotRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const expertiseRefs = useRef([]);
  const buttonRef = useRef(null);
  const lenisRef = useRef(null);

  const [scrollProgress, setScrollProgress] = useState(0);

  const expertiseItems = [
    {
      id: 1,
      title: "Advanced AI Algorithm Development",
      description:
        "We design and implement advanced AI algorithms that transform complex data into intelligent, actionable insights. Our solutions are built to scale, adapt, and drive smarter business decisions.",
    },
    {
      id: 2,
      title: "Machine Learning Model Training",
      description:
        "Our expert team develops and trains custom machine learning models tailored to your specific business needs, ensuring optimal performance and accuracy in real-world applications.",
    },
    {
      id: 3,
      title: "Natural Language Processing",
      description:
        "We leverage cutting-edge NLP technologies to build intelligent systems that understand, interpret, and generate human language, enabling seamless human-AI interaction.",
    },
    {
      id: 4,
      title: "Computer Vision Solutions",
      description:
        "Transform visual data into actionable insights with our advanced computer vision solutions, enabling automated image recognition, object detection, and visual analysis.",
    },
  ];

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Lenis scroll event
    lenis.on("scroll", ScrollTrigger.update);

    // GSAP ticker integration
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Create ScrollTrigger for the entire section
    const ctx = gsap.context(() => {
      // Pin the section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=400%",
        pin: true,
        anticipatePin: 1,
        scrub: 1,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
        },
      });

      // Main robot timeline - transforms from small to large
      const robotTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=400%",
          scrub: 1,
        },
      });

      /* -------------------------
   Stage 1: Small robot zooms in (NO rotation)
-------------------------- */
      robotTimeline
        .fromTo(
          smallRobotRef.current,
          {
            opacity: 0,
            scale: 0.7,
          },
          {
            opacity: 1,
            scale: 1,
            ease: "power3.out",
            duration: 0.35,
          },
        )

        /* -------------------------
   Stage 2: Small robot subtle emphasis
-------------------------- */
        .to(smallRobotRef.current, {
          scale: 1.1,
          ease: "power2.out",
          duration: 0.2,
        })

        /* -------------------------
   Stage 3: Small robot fades out
-------------------------- */
        .to(smallRobotRef.current, {
          opacity: 0,
          scale: 1.2,
          ease: "power2.inOut",
          duration: 0.15,
        })

        /* -------------------------
   Stage 4: Large robot zooms in centered
-------------------------- */
        .fromTo(
          largeRobotRef.current,
          {
            opacity: 0,
            scale: 0.85,
          },
          {
            opacity: 1,
            scale: 1,
            ease: "power3.out",
            duration: 0.4,
          },
          "<",
        );

      // Animate title
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=100%",
          scrub: 1,
        },
        x: -100,
        opacity: 0,
        ease: "power2.out",
      });

      // Animate expertise items sequentially
      expertiseRefs.current.forEach((item, index) => {
        if (!item) return;

        const startPercentage = 10 + index * 15;
        const endPercentage = startPercentage + 20;

        gsap.fromTo(
          item,
          {
            x: -50,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `top+=${startPercentage}% top`,
              end: `top+=${endPercentage}% top`,
              scrub: 1,
            },
            x: 0,
            opacity: 1,
            ease: "power2.out",
          },
        );

        // Add rotation effect on individual items
        gsap.to(item, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `top+=${startPercentage}% top`,
            end: "+=300%",
            scrub: 1,
          },
          rotationX: index % 2 === 0 ? 5 : -5,
          ease: "none",
        });
      });

      // Animate button
      gsap.from(buttonRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top+=50% top",
          end: "+=100%",
          scrub: 1,
        },
        y: 50,
        opacity: 0,
        scale: 0.9,
        ease: "back.out(1.7)",
      });

      // Content parallax effect
      gsap.to(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1,
        },
        y: -50,
        ease: "none",
      });
    }, sectionRef);

    // Cleanup
    return () => {
      ctx.revert();
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black py-16 lg:py-24 overflow-hidden min-h-screen">
      {/* Animated Background */}
      {/* <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"
          style={{
            transform: `rotate(${scrollProgress * 180}deg)`,
            transition: "transform 0.1s linear",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            transform: `scale(${1 + scrollProgress * 0.2})`,
          }}
        />
      </div> */}

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
            }}
          />
        ))}
      </div>

      {/* Progress Indicator */}
      {/* <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-100"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div> */}

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 h-full">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full max-w-7xl mx-auto h-full items-center">
          {/* Left Side - Text Content */}
          <div ref={contentRef} className="space-y-2">
            <div ref={titleRef} className="mb-4 lg:mb-5">
              <h2
                className="text-white font-stoke font-normal"
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  lineHeight: "1.2",
                  transform: "perspective(1000px)",
                }}>
                AI & ML Expertise Powered by
                <br />
                <span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
                  style={{
                    display: "inline-block",
                    transform: `rotateX(${scrollProgress * 10}deg)`,
                  }}>
                  Skilled Professionals
                </span>
              </h2>
            </div>

            {/* Expertise Items */}
            {expertiseItems.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => (expertiseRefs.current[index] = el)}
                className="group py-8 lg:py-10 border-b border-gray-800"
                style={{
                  transform: "perspective(1000px)",
                  transformStyle: "preserve-3d",
                }}>
                {/* Number Badge */}
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-semibold text-sm shadow-lg shadow-blue-500/50"
                    style={{
                      transform: `translateZ(20px) rotate(${scrollProgress * 360}deg)`,
                    }}>
                    {index + 1}
                  </div>

                  <div className="flex-1">
                    <h3
                      className="text-white mb-4 font-outfit font-normal group-hover:text-blue-400 transition-colors duration-300"
                      style={{
                        fontSize: "clamp(18px, 2.5vw, 22px)",
                        lineHeight: "1.4",
                      }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-400 font-outfit font-normal text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Animated Progress Bar */}
                <div
                  className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 origin-left"
                  style={{
                    transform: `scaleX(${
                      scrollProgress > index * 0.2
                        ? Math.min((scrollProgress - index * 0.2) * 5, 1)
                        : 0
                    })`,
                  }}
                />
              </div>
            ))}

            {/* Button */}
            <div ref={buttonRef} className="mt-10">
              <button className="group relative inline-flex items-center gap-2 bg-primary text-white text-xs sm:text-sm font-medium px-[21px] py-[18px] overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105">
                {/* Shimmer effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  style={{
                    transform: `translateX(${scrollProgress * 200 - 100}%)`,
                  }}
                />

                <span className="relative z-10">Start A Project</span>
                <img
                  src={btnIcon}
                  alt="icon"
                  className="relative z-10 w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover:translate-x-1 transition-transform duration-300"
                  style={{
                    transform: `rotate(${scrollProgress * 360}deg)`,
                  }}
                />
              </button>
            </div>
          </div>

          {/* Right Side - Single Transforming Robot */}
          <div className="flex flex-col justify-center items-center lg:items-end min-h-[600px] relative">
            {/* Small Robot - Starts visible, transforms to large */}
            <div
              ref={smallRobotRef}
              className="absolute top-1/2 left-1/2 lg:left-auto lg:right-0 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
                width: "285px",
                height: "339px",
              }}>
              {/* Rotating Glow Ring */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-3xl scale-150"
                style={{
                  transform: `rotate(${scrollProgress * 360}deg)`,
                }}
              />

              {/* Small Robot Image */}
              <img
                src={robotImg}
                alt="AI Robot"
                className="relative w-full h-full object-contain drop-shadow-2xl z-10"
              />

              {/* Orbiting Particles */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400"
                  style={{
                    transform: `
                      translate(-50%, -50%) 
                      rotate(${scrollProgress * 360 * 2 + i * 45}deg) 
                      translateX(${120 + Math.sin(scrollProgress * Math.PI * 2) * 20}px)
                    `,
                    opacity: Math.max(0, 1 - scrollProgress * 2),
                  }}
                />
              ))}

              {/* Pulsing Rings */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-blue-500/30 rounded-full"
                style={{
                  width: `${100 + scrollProgress * 100}%`,
                  height: `${100 + scrollProgress * 100}%`,
                  opacity: Math.max(0, 1 - scrollProgress * 1.5),
                }}
              />
            </div>

            {/* Large Robot - Fades in as small robot fades out */}
            <div
              ref={largeRobotRef}
              className="absolute top-1/2 left-1/2 lg:left-auto lg:right-0 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1200px",
                maxWidth: "693px",
                width: "100%",
              }}>
              {/* Rotating Ambient Glow */}
              <div
                className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 via-purple-600/30 to-pink-600/20 blur-3xl scale-110"
                style={{
                  transform: `rotate(${-scrollProgress * 180}deg)`,
                  opacity: Math.min(1, scrollProgress * 2),
                }}
              />

              {/* Large Robot Image */}
              <img
                src={robotImg2}
                alt="AI Robot Large"
                className="relative w-full h-auto object-contain drop-shadow-2xl z-10"
                style={{
                  aspectRatio: "693/823",
                }}
              />

              {/* Energy Waves */}
              {scrollProgress > 0.6 && (
                <>
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-blue-400/20 rounded-full"
                      style={{
                        width: `${80 + i * 40 + (scrollProgress - 0.6) * 200}%`,
                        height: `${80 + i * 40 + (scrollProgress - 0.6) * 200}%`,
                        opacity: Math.max(
                          0,
                          0.5 - (scrollProgress - 0.6) * 2 - i * 0.15,
                        ),
                        animationDelay: `${i * 0.3}s`,
                      }}
                    />
                  ))}
                </>
              )}

              {/* Scan Line */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{
                  opacity: Math.min(1, scrollProgress * 2 - 1),
                }}>
                <div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/40 to-transparent h-24"
                  style={{
                    transform: `translateY(${(scrollProgress - 0.5) * 2 * 100}%)`,
                  }}
                />
              </div>

              {/* Hexagon Grid Overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  opacity: Math.min(0.6, scrollProgress * 1.5 - 0.5),
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%233b82f6' stroke-opacity='0.3' stroke-width='1'/%3E%3C/svg%3E")`,
                  backgroundSize: "60px 60px",
                }}
              />

              {/* Corner Lights */}
              <div
                className="absolute top-0 right-0 w-40 h-40 bg-blue-400/40 blur-3xl rounded-full"
                style={{
                  opacity: Math.min(1, scrollProgress * 2 - 0.5),
                  transform: `scale(${1 + Math.max(0, scrollProgress - 0.5)})`,
                }}
              />
              <div
                className="absolute bottom-0 left-0 w-40 h-40 bg-purple-400/30 blur-3xl rounded-full"
                style={{
                  opacity: Math.min(1, scrollProgress * 2 - 0.8),
                  transform: `scale(${1 + Math.max(0, scrollProgress - 0.7)})`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap");

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          25% {
            opacity: 0.5;
          }
          50% {
            transform: translateY(-80px) translateX(40px);
            opacity: 1;
          }
          75% {
            opacity: 0.5;
          }
        }

        .animate-float-slow {
          animation: float-slow linear infinite;
        }

        /* Smooth scrolling */
        html.lenis {
          height: auto;
        }

        .lenis.lenis-smooth {
          scroll-behavior: auto;
        }

        .lenis.lenis-smooth [data-lenis-prevent] {
          overscroll-behavior: contain;
        }

        .lenis.lenis-stopped {
          overflow: hidden;
        }

        .lenis.lenis-scrolling iframe {
          pointer-events: none;
        }

        /* Ensure smooth GPU-accelerated animations */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        @media (max-width: 640px) {
          img {
            max-width: 100%;
            height: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default AIExpertiseSection;
