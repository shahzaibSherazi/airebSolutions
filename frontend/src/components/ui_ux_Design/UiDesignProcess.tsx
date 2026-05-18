import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "Understand your business goals and target users to create a strategic design plan.",
  },
  {
    number: "02",
    title: "User Research & Insights",
    description:
      "Conduct detailed research to understand user behaviors, preferences, and pain points.",
  },
  {
    number: "03",
    title: "Wireframing & Prototyping",
    description:
      "Create initial wireframes and prototypes to visualize user flow and interactions.",
  },
  {
    number: "04",
    title: "Design & Iteration",
    description:
      "Finalize the UI/UX design while iterating based on usability testing and feedback.",
  },
  {
    number: "05",
    title: "Development & Implementation",
    description:
      "Collaborate with developers to bring the design to life, ensuring all UI/UX principles are implemented.",
  },
  {
    number: "06",
    title: "Post-Launch Optimization",
    description:
      "Continuously monitor user behavior and optimize the design to ensure ongoing satisfaction.",
  },
];

export default function UiDesignProcess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          // When a card sticks to top (intersecting near top of viewport)
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        {
          // Trigger when card hits ~top-24 (96px) sticky position
          rootMargin: "-90px 0px -80% 0px",
          threshold: 0,
        },
      );

      observer.observe(card);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="w-full bg-[#0E1828] ">
      <div className="container  py-16 lg:py-24">
        {/* ── Header ── */}
        <motion.div
          className="mb-16"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}>
          <h1 className="text-textColor font-extralight font-stoke text-h2 mb-4 leading-[1.3]">
            Our UI/UX Design Process
          </h1>
          <p className="text-textColor font-outfit font-light text-p max-w-xl leading-[1.3]">
            At Aireb Solutions, we follow a streamlined on-demand app
            development cycle that ensures efficiency and innovation
          </p>
        </motion.div>

        {/* ── Steps ── */}
        <div className="space-y-8">
          {steps.map((step, index) => {
            const isTop = index === activeIndex;

            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="sticky top-24"
                style={{ zIndex: index + 1 }}>
                <div
                  className={[
                    "rounded-md  transition-all duration-500",
                    "min-h-[100px] ",
                    "flex items-center",
                    isTop
                      ? "bg-primary"
                      : "bg-[#0a1220] border border-blue-400/10",
                  ].join(" ")}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center w-full h-full px-5  py-1 ">
                    {/* Left — Title */}
                    <h3
                      className={[
                        "font-stoke font-light text-title leading-snug transition-colors duration-500",
                        isTop ? "text-white" : "text-white/50",
                      ].join(" ")}>
                      {step.title}
                    </h3>

                    {/* Center — Circle */}
                    <div className="flex justify-center">
                      <div
                        className={[
                          "w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-500",
                          isTop
                            ? "bg-white shadow-[0_0_20px_rgba(255,255,255,0.25)]"
                            : "bg-transparent border border-blue-400/40",
                        ].join(" ")}>
                        <span
                          className={[
                            "font-outfit font-bold text-sm sm:text-base transition-colors duration-500",
                            isTop ? "text-primary" : "text-blue-300/60",
                          ].join(" ")}>
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Right — Description */}
                    <p
                      className={[
                        "font-outfit font-light text-sm sm:text-base leading-[1.3] transition-colors duration-500",
                        "line-clamp-3 sm:line-clamp-3", // ✅ keep consistent height
                        isTop ? "text-white" : "text-white/40",
                      ].join(" ")}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* bottom spacer so last card can fully stick */}
        {/* <div className="h-20" /> */}
      </div>
    </section>
  );
}
