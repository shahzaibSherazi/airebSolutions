import { useState } from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Bussiness-Driven Design",
    desc: "We don't just create beautiful interfaces; we build strategic tools that boost your business metrics. Every design element serves a clear purpose to increase conversion and retention.",
  },
  {
    title: "Bussiness-Driven Design",
    desc: "We don't just create beautiful interfaces; we build strategic tools that boost your business metrics. Every design element serves a clear purpose to increase conversion and retention.",
  },
  {
    title: "Bussiness-Driven Design",
    desc: "We don't just create beautiful interfaces; we build strategic tools that boost your business metrics. Every design element serves a clear purpose to increase conversion and retention.",
  },
];

const stats = [
  {
    label: "Leveraging AI solutions can decrease design costs by up to 20%",
    height: 55,
    value: "20%",
  },
  {
    label: "Utilizing smart decisions improves the development process by 25%.",
    height: 60,
    value: "25%",
  },
  {
    label: "Ranked in the top 50 agencies globally.",
    height: 70,
    value: "50%",
  },
];

export default function ContactCenterSection() {
  const sectionRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(statsRef.current, {
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className=" w-full flex items-center justify-center bg-black">
      <div className="container px-6 lg:px-8 py-16 md:py-24">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6 mb-5 md:mb-4">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}>
            <h1 className="text-white font-stoke text-h2 font-extralight leading-tight">
              Our Contact Center Comman <br className="hidden lg:block" />{" "}
              Challenges
            </h1>
          </motion.div>
          <div
            className="flex items-center gap-2 px-4 py-3 md:px-5 md:py-4 rounded-md group border border-primary hover:cursor-pointer text-white text-sm font-medium "
            style={{
              background: "linear-gradient(90deg, #4875BE 0%, #000000 100%)",
            }}>
            <span className="leading-snug font-outfit group-hover:translate-x-2 transition-transform duration-500 ease-out  font-medium text-sm md:text-lg flex-1">
              AI-Powered Communications Make <br className="hidden lg:block" />
              Working Together Smarter
            </span>
            <span className="text-xl text-primary self-end flex-shrink-0 group-hover:translate-x-2 transition-transform duration-500 ease-ou">
              →
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-textColor text-sm md:text-base mb-8 md:mb-14 font-outfit font-light leading-relaxed">
          At Aireb Solutions, we follow a streamlined on-demand app development{" "}
          <br className="hidden lg:block" />
          cycle that ensures efficiency and innovation
        </p>

        {/* Three Cards — 1 col on mobile, 2 on sm, 3 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-8 md:mb-14">
          {cards.map((card, i) => (
            <div
              key={i}
              className="rounded-xl p-px"
              style={{
                background:
                  "linear-gradient(180deg, #629DFF 0%, #000000 52.4%, #629DFF 99.52%)",
              }}>
              <div className="rounded-xl p-4 md:p-6 h-full bg-black">
                <h3 className="text-textColor font-semibold text-base md:text-lg lg:text-xl mb-2 md:mb-3">
                  {card.title}
                </h3>
                <p className="text-textColor font-outfit font-normal text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats — Desktop: horizontal staggered row */}
        <div ref={sectionRef} className="hidden md:flex items-end gap-5">
          {stats.map((stat, i) => (
            <div
              key={i}
              ref={(el) => (statsRef.current[i] = el)}
              style={{
                background: "linear-gradient(180deg, #4285F4 0%, #000000 100%)",
                height: `${stat.height * 3}px`, // 🔥 control multiplier here
                overflow: "hidden",
              }}
              className="flex-1 rounded-xl border border-blue-500 p-5 flex flex-col justify-between">
              <p className="text-textColor font-outfit font-normal text-sm leading-snug ">
                {stat.label}
              </p>
              <p className="text-white text-h2 font-bold">{stat.value}</p>
            </div>
          ))}
          {/* 4th empty/content card */}
          <div
            style={{
              background:
                "linear-gradient(180deg, #629DFF 0%, #000000 52.4%, #629DFF 99.52%)",
            }}
            className="flex-[2] h-64 rounded-xl p-px">
            <div className="rounded-xl p-6 h-full bg-black">
              <h3 className="text-textColor font-semibold text-[clamp(16px,2vw,24px)] mb-3">
                Bussiness-Driven Design
              </h3>
              <p className="text-textColor font-outfit font-normal text-base line-clamp-5 overflow-hidden leading-relaxed">
                We don't just create beautiful interfaces; we build strategic
                tools that boost your business metrics. Every design element
                serves a clear purpose to increase conversion and retention.
              </p>
            </div>
          </div>
        </div>

        {/* Stats — Mobile: horizontal side-by-side compact cards */}
        <div className="flex flex-col gap-3 md:hidden">
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                background: "linear-gradient(180deg, #4285F4 0%, #000000 100%)",
              }}
              className="rounded-xl border border-primary px-5 py-4 flex items-center justify-between gap-4">
              <p className="text-textColor font-outfit font-normal text-xs sm:text-sm leading-snug opacity-90 flex-1">
                {stat.label}
              </p>
              <p className="text-textColor text-3xl sm:text-4xl font-bold flex-shrink-0">
                {stat.value}
              </p>
            </div>
          ))}
          {/* 4th card mobile */}
          <div
            style={{
              background:
                "linear-gradient(180deg, #629DFF 0%, #000000 52.4%, #629DFF 99.52%)",
            }}
            className="rounded-xl p-px">
            <div className="rounded-xl px-5 py-4 bg-black">
              <h3 className="text-textColor font-semibold text-base mb-2">
                Bussiness-Driven Design
              </h3>
              <p className="text-textColor font-outfit font-normal text-sm leading-relaxed">
                We don't just create beautiful interfaces; we build strategic
                tools that boost your business metrics. Every design element
                serves a clear purpose to increase conversion and retention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
