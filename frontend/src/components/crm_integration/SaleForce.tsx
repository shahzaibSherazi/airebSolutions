import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SalesforceIntegration() {
  const sectionRef = useRef(null);
  const orbitRefs = useRef([]);

  const orbits = [
    {
      radius: 140,
      direction: "clockwise",
      rotations: 0.5,
      logos: [
        { name: "Twilio", color: "bg-red-500" },
        { name: "FreeAgent", color: "bg-blue-400" },
        { name: "HubSpot", color: "bg-orange-500" },
      ],
    },
    {
      radius: 220,
      direction: "anticlockwise",
      rotations: 0.4,
      logos: [
        { name: "Xero", color: "bg-blue-500" },
        { name: "Engage", color: "bg-green-500" },
        { name: "Asana", color: "bg-pink-500" },
        { name: "Zoho", color: "bg-red-600" },
      ],
    },
    {
      radius: 300,
      direction: "clockwise",
      rotations: 0.3,
      logos: [
        { name: "Pipedrive", color: "bg-green-600" },
        { name: "FAST", color: "bg-gray-800" },
        { name: "Terminus", color: "bg-purple-600" },
        { name: "MS", color: "bg-blue-600" },
        { name: "Procore", color: "bg-orange-600" },
      ],
    },
    {
      radius: 380,
      direction: "anticlockwise",
      rotations: 0.25,
      logos: [
        { name: "Slack", color: "bg-purple-500" },
        { name: "Demio", color: "bg-blue-500" },
        { name: "QuickBooks", color: "bg-green-500" },
        { name: "Zoom", color: "bg-blue-400" },
        { name: "Chargebee", color: "bg-orange-500" },
        { name: "Jira", color: "bg-blue-700" },
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create smooth scroll-triggered animations for each orbit
      orbits.forEach((orbit, index) => {
        const rotationMultiplier = orbit.direction === "clockwise" ? 1 : -1;
        const fullRotation = 360 * orbit.rotations * rotationMultiplier;

        // Animate the orbit container
        gsap.to(orbitRefs.current[index], {
          rotation: fullRotation,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        // Animate logos to counter-rotate so they stay upright
        const logoElements = orbitRefs.current[index]?.querySelectorAll(
          ".logo-card-container",
        );
        logoElements?.forEach((logo) => {
          gsap.to(logo, {
            rotation: -fullRotation,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom bottom",
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
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 overflow-hidden flex items-center justify-center">
      {/* Decorative grid background */}
      <div className="bg-grid absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Diagonal lines decoration */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-full w-px bg-white transform rotate-45"
            style={{ left: `${i * 5}%` }}
          />
        ))}
      </div>

      <div className="relative w-full max-w-4xl aspect-square flex items-center justify-center">
        {/* Center Salesforce logo */}
        <div className="absolute z-20 w-48 h-48 bg-white rounded-full shadow-2xl flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500 mb-1">
              <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto">
                <path
                  fill="#00A1E0"
                  d="M35 20c-8.3 0-15 6.7-15 15 0 1.5.2 3 .6 4.4C14.4 41.9 10 47.9 10 55c0 9.4 7.6 17 17 17h46c9.4 0 17-7.6 17-17 0-7.1-4.4-13.1-10.6-15.6.4-1.4.6-2.9.6-4.4 0-8.3-6.7-15-15-15-2.1 0-4.1.4-5.9 1.2C56.6 14.8 50 10 42.5 10c-5.8 0-11 2.7-14.4 6.9C36.8 20.3 35.9 20 35 20z"
                />
              </svg>
            </div>
            <div className="text-xl font-bold text-blue-500">salesforce</div>
          </div>
        </div>

        {/* Orbital rings with logos */}
        {orbits.map((orbit, orbitIndex) => {
          return (
            <div
              key={orbitIndex}
              ref={(el) => (orbitRefs.current[orbitIndex] = el)}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                width: "100%",
                height: "100%",
              }}>
              {/* Orbital ring - Static circle */}
              <div
                className="absolute border border-blue-300/30 rounded-full"
                style={{
                  width: `${orbit.radius * 2}px`,
                  height: `${orbit.radius * 2}px`,
                }}
              />

              {/* Small dots on the orbital ring */}
              {[...Array(8)].map((_, dotIndex) => (
                <div
                  key={`dot-${dotIndex}`}
                  className="absolute w-1.5 h-1.5 bg-blue-300/40 rounded-full"
                  style={{
                    transform: `rotate(${dotIndex * 45}deg) translateY(-${orbit.radius}px)`,
                  }}
                />
              ))}

              {/* Logos on orbit */}
              {orbit.logos.map((logo, logoIndex) => {
                const angleOffset = (360 / orbit.logos.length) * logoIndex;

                return (
                  <div
                    key={`${orbitIndex}-${logoIndex}`}
                    className="logo-card-container absolute"
                    style={{
                      transform: `rotate(${angleOffset}deg) translateY(-${orbit.radius}px)`,
                    }}>
                    {/* Logo card */}
                    <div className="bg-white rounded-lg shadow-lg px-4 py-2 flex items-center justify-center min-w-[80px] hover:scale-110 transition-transform duration-300">
                      <div
                        className={`w-2 h-2 rounded-full ${logo.color} mr-2`}
                      />
                      <span className="text-xs font-semibold text-gray-800 whitespace-nowrap">
                        {logo.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* Subtle glow effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 bg-blue-300/10 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
}
