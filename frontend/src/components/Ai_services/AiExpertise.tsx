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
      <section className="relative w-full bg-black overflow-hidden lg:sticky lg:-top-10 ">
        <div className="container relative z-10 py-16 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-8  w-full h-full">
            {/* LEFT CONTENT */}
            <div>
              <motion.div
                style={!isMobile ? { x: titleX, opacity: titleOpacity } : {}}>
                <h2 className="text-white leading-[1.3] font-stoke text-h2">
                  AI & ML Expertise Powered by
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                    Skilled Professionals
                  </span>
                </h2>
              </motion.div>

              {/* ITEMS */}
              <div className="mb-8">
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
                      className="group py-4 border-b border-gray-800">
                      <div className="flex gap-2">
                        <motion.div
                          style={!isMobile ? { rotate } : {}}
                          className="w-8 h-8 flex-shrink-0 rounded-full bg-primary flex items-center justify-center text-white">
                          {index + 1}
                        </motion.div>

                        <div>
                          <h3 className="text-white font-stoke mb-2 group-hover:text-blue-400 transition">
                            {item.title}
                          </h3>
                          <p className="text-white leading-[1.3] font-outfit">
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
                    className="absolute top-0 right-0 max-w-[285px]"
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
