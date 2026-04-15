import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const steps = [
  {
    title: "Consultation & Understanding",
    description: "Defines business goals, target audience, and brand needs.",
  },
  {
    title: "Research & Strategy",
    description:
      "Conducts industry and keyword research to align content with business objectives.",
  },
  {
    title: "Content Creation",
    description:
      "Writers craft high-quality, original content tailored to the audience.",
  },
  {
    title: "Editing & Quality Assurance",
    description: "Ensures content is error-free, clear, and optimized for SEO.",
  },
  {
    title: "Approval & Publishing",
    description:
      "Allows for client review before distributing content across chosen platforms.",
  },
  {
    title: "Performance Monitoring & Optimization",
    description:
      "Tracks metrics like views, engagement, and conversions to continuously improve content.",
  },
];

const G = { hw: 140, slantY: 34, bw: 10, backY: 56, pk: 2, H: 41 };

function IsoSlab({ cx, y, lit, showTop = true }) {
  const { hw, slantY, bw, backY, pk, H } = G;

  const FC = [cx, y];
  const FL = [cx - hw, y - slantY];
  const FR = [cx + hw, y - slantY];
  const BL = [cx - bw, y - backY];
  const BR = [cx + bw, y - backY];
  const BC = [cx, y - backY - pk];

  const FCb = [cx, y + H];
  const FLb = [cx - hw, y - slantY + H];
  const FRb = [cx + hw, y - slantY + H];

  const p = (arr) => arr.map(([a, b]) => `${a},${b}`).join(" ");

  const topFace = p([FL, FC, FR, BR, BC, BL]);
  const fL = p([FLb, FCb, FC, FL]);
  const fR = p([FRb, FCb, FC, FR]);

  const topC = lit ? "#6aaeff" : "none";
  const frontC = lit ? "#4a7ef0" : "none";
  const sk = lit ? "rgba(255,255,255,0.13)" : "rgba(75,140,255,0.44)";
  const sw = 1.5;

  return (
    <g style={{ transition: "fill 0.28s ease, stroke 0.28s ease" }}>
      <polygon
        points={fL}
        fill={frontC}
        stroke={sk}
        strokeWidth={sw}
        strokeLinejoin="round"
      />
      <polygon
        points={fR}
        fill={frontC}
        stroke={sk}
        strokeWidth={sw}
        strokeLinejoin="round"
      />

      {/* Top chevron only if showTop */}
      {showTop && (
        <polygon
          points={topFace}
          fill={topC}
          stroke={sk}
          strokeWidth={sw}
          strokeLinejoin="round"
        />
      )}
    </g>
  );
}

function hitPoly(cx, y) {
  const { hw, slantY, bw, backY, pk, H } = G;
  return [
    [cx - hw, y - slantY + H],
    [cx, y + H],
    [cx + hw, y - slantY + H],
    [cx + bw, y - backY + H],
    [cx + bw, y - backY],
    [cx, y - backY - pk],
    [cx - bw, y - backY],
    [cx - bw, y - backY + H],
  ]
    .map(([a, b]) => `${a},${b}`)
    .join(" ");
}

function LayerStack({ activeIndex, hoveredIndex, onHover, litIndex }) {
  const svgW = 340;
  const svgH = 460;
  const cx = svgW / 2;

  const { backY, pk, H } = G;
  const step = 78; // px between successive FC Y positions
  const baseY = svgH - 18; // bottom-most slab FC y

  // Painter's: render bottom slab first, top slab last
  const renderOrder = steps.map((_, i) => i).reverse();

  return (
    <svg
      width={svgW}
      height={svgH}
      viewBox={`0 0 ${svgW} ${svgH}`}
      style={{ overflow: "visible", display: "block" }}>
      {renderOrder.map((si) => {
        const pos = steps.length - 1 - si; // 0 = bottom, 5 = top
        const slabY = baseY - pos * step;
        const lit = si === litIndex;

        return (
          <g
            key={si}
            onMouseEnter={() => onHover(si)}
            onMouseLeave={() => onHover(null)}
            style={{ cursor: "pointer" }}>
            <polygon points={hitPoly(cx, slabY)} fill="transparent" />
            <IsoSlab cx={cx} y={slabY} lit={lit} showTop={si === 0} />
          </g>
        );
      })}
    </svg>
  );
}

/* ── Main ── */
export default function ContentWritingProcess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const rowRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = [];
    rowRefs.current.forEach((el, i) => {
      if (!el) return;
      const o = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) setActiveIndex(i);
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
      );
      o.observe(el);
      obs.push(o);
    });
    return () => obs.forEach((o) => o.disconnect());
  }, []);

  const litIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  return (
    <section ref={sectionRef} className="w-full bg-[#0E1828]">
      <div className="container px-6 md:px-8  py-16 lg:py-24">
        {/* Header */}
        <motion.div
          className="mb-10 sm:mb-14"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}>
          <h1 className="text-textColor font-extralight font-stoke text-h2 mb-6 leading-tight">
            Our UI/UX Design Process
          </h1>
          <p className="text-textColor font-outfit font-light text-sm sm:text-base leading-relaxed">
            At Aireb Solutions, we follow a streamlined on-demand app
            development <br className="hidden lg:block" /> cycle that ensures
            efficiency and innovation
          </p>
        </motion.div>

        {/* Two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
          {/* LEFT — rows */}
          <div className="border-025 border-primary">
            {steps.map((step, index) => {
              const isLit = index === litIndex;
              const isLast = index === steps.length - 1;
              return (
                <div
                  key={index}
                  ref={(el) => (rowRefs.current[index] = el)}
                  className={[
                    "w-full transition-colors duration-300 cursor-pointer",
                    isLit ? "bg-primary" : "",
                    !isLast ? "border-b border-primary" : "",
                  ].join(" ")}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}>
                  <div className="px-6 sm:px-8 py-5">
                    <h3
                      className={[
                        "font-stoke font-light leading-snug transition-colors duration-300 mb-1.5",
                        "text-title",
                        isLit ? "text-black" : "text-textColor",
                      ].join(" ")}>
                      {step.title}
                    </h3>
                    <p
                      className={[
                        "font-outfit font-light text-textColor leading-relaxed transition-colors duration-300 text-xs sm:text-sm",
                      ].join(" ")}>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT — isometric stack */}
          <div className="hidden lg:flex items-center justify-center min-h-[460px] border border-l-0 border-primary">
            <LayerStack
              activeIndex={activeIndex}
              hoveredIndex={hoveredIndex}
              onHover={setHoveredIndex}
              litIndex={litIndex}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
