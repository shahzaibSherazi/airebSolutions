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
        // style={{ minHeight: "200vh" }}
        ref={salesforceRef}
        className="relative min-h-[100vh] sm:min-h-[200vh]">
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
