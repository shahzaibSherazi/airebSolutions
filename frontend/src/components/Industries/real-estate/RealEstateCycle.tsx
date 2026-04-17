import { useEffect, useRef, useState } from "react";

const cardBorder: React.CSSProperties = {
  border: "1px solid transparent",
  backgroundImage:
    "linear-gradient(#02070F,#02070F), linear-gradient(180deg,#111111 0%,#629DFF 56.73%,#0D0D0D 100%)",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
};

const LINE = "rgba(98,157,255,0.45)";

function DiscoveryIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="32"
      height="32"
      fill="none"
      stroke="rgba(255,255,255,0.85)"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="21" y2="21" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}
function DesignIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="32"
      height="32"
      fill="none"
      stroke="rgba(255,255,255,0.7)"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect x="7" y="3" width="10" height="18" rx="1" />
      <path d="M2 6.5V5a1 1 0 0 1 1-1h4" />
      <path d="M2 13.5V19a1 1 0 0 0 1 1h4" />
      <path d="M17 4h3a1 1 0 0 1 1 1v1.5" />
      <path d="M17 20h3a1 1 0 0 0 1-1v-1.5" />
    </svg>
  );
}
function DevIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="32"
      height="32"
      fill="none"
      stroke="rgba(255,255,255,0.7)"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="4" r="2" />
      <circle cx="4" cy="20" r="2" />
      <circle cx="20" cy="20" r="2" />
      <line x1="12" y1="6" x2="4" y2="18" />
      <line x1="12" y1="6" x2="20" y2="18" />
      <line x1="6" y1="20" x2="18" y2="20" />
    </svg>
  );
}
function TestingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="32"
      height="32"
      fill="none"
      stroke="rgba(255,255,255,0.7)"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}
function LaunchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="32"
      height="32"
      fill="none"
      stroke="rgba(255,255,255,0.7)"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    </svg>
  );
}
function SupportIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="32"
      height="32"
      fill="none"
      stroke="rgba(255,255,255,0.7)"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  );
}

function Card({
  icon,
  title,
  active = false,
  size = 170,
  onHover,
  onLeave,
}: {
  icon: React.ReactNode;
  title: string;
  active?: boolean;
  size?: number;
  onHover?: () => void;
  onLeave?: () => void;
}) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group flex p-2"
      style={{ ...cardBorder, width: size, height: size }}>
      <div
        className={`flex flex-1 flex-col items-center justify-center text-center gap-3 
  ${active ? "bg-primary" : "bg-[#0E1828]"} 
  group-hover:bg-primary`}>
        {icon}
        <p className="text-textColor font-stoke text-[13px] font-normal leading-snug m-0 whitespace-pre-line">
          {title}
        </p>
      </div>
    </div>
  );
}

export default function RealEstateCycle() {
  // ── Design constants — never change ──────────────────────────────────────
  const C = 250;
  const STUB = 92;
  const GAP = 98;
  const innerW = C * 3 + GAP * 2;
  const totalW = STUB + innerW + STUB; // 650px
  const rowH = C;
  const bridgeH = 130;
  const svgH = rowH + bridgeH + rowH; // 470px
  const topY = rowH / 2;
  const botY = rowH + bridgeH + rowH / 2;
  const xLeft = 0;
  const xRight = totalW;

  // ── Scale: fit the 650px layout into whatever container width is available
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [activeStep, setActiveStep] = useState(1);
  useEffect(() => {
    const recalc = () => {
      if (!sectionRef.current) return;
      // Available width = section width minus its horizontal padding (px-5 = 20px each side)
      const available = sectionRef.current.clientWidth - 40;
      setScale(Math.min(1, available / totalW));
    };

    recalc();
    const ro = new ResizeObserver(recalc);
    if (sectionRef.current) ro.observe(sectionRef.current);
    return () => ro.disconnect();
  }, [totalW]);

  // Outer wrapper height = design height × scale so page flow is correct
  const outerH = svgH * scale;

  const descriptions = {
    1: "We start by understanding your real estate business, objectives, and target audience. This allows us to craft a customized strategy tailored to your needs and market challenges.",
    2: "Our design team creates intuitive and visually appealing designs that align with your branding and provide an exceptional user experience. Prototypes help refine functionality and design before development begins.",
    3: "Once the design is finalized, we begin development, integrating the necessary features, such as property listings, search functionalities, CRM systems, payment gateways, and more.",
    4: "Our QA team ensures that the platform is fully functional, secure, and bug-free. We test the system for compatibility, usability, and performance to ensure it meets the highest standards.",
    5: "After successful testing, we launch your real estate platform, ensuring it's ready for use. We ensure a smooth deployment with minimal disruption to your business.",
    6: "We provide ongoing support to monitor the system, fix bugs, and optimize performance based on user feedback and changing market conditions.",
  };
  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#02070F]  box-border font-outfit">
      <div className="container py-16 lg:py-24 px-2 lg:px-8">
        {/* Header — unchanged */}
        <div className="text-center mb-[52px] flex flex-col items-center">
          <h1 className="text-white font-normal leading-tight mb-4 mt-0 font-stoke text-h2">
            Our Real Estate Development Cycle
          </h1>
          <p className="text-textColor max-w-4xl font-outfit text-p leading-[1.7]">
            Our step-by-step development process ensures we deliver real estate
            solutions that match your business needs, improve customer
            engagement, and increase overall efficiency and performance.
          </p>
        </div>

        {/*
          ── Responsive scale wrapper ──────────────────────────────────────────
          Outer div: width 100%, height = svgH * scale  →  reserves correct
                     space in document flow so nothing overlaps below.
          Inner div: fixed 650×470, transform: scale(scale) from top-center
                     →  shrinks proportionally on small screens, pixel-perfect
                        at full size on desktop (scale = 1).
        */}
        <div
          className="relative w-full overflow-hidden"
          style={{ height: outerH }}>
          <div
            className="absolute left-1/2"
            style={{
              width: totalW,
              height: svgH,
              transform: `translateX(-50%) scale(${scale})`,
              transformOrigin: "top center",
            }}>
            {/* SVG connector lines — unchanged */}
            <svg
              viewBox={`0 0 ${totalW} ${svgH}`}
              width={totalW}
              height={svgH}
              className="block absolute inset-0"
              preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient
                  id="vGradLeft"
                  x1="0"
                  y1={topY}
                  x2="0"
                  y2={botY}
                  gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#629DFF" stopOpacity="0.6" />
                  <stop offset="40%" stopColor="#629DFF" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#629DFF" stopOpacity="0" />
                  <stop offset="60%" stopColor="#629DFF" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#629DFF" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient
                  id="vGradRight"
                  x1="0"
                  y1={topY}
                  x2="0"
                  y2={botY}
                  gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#629DFF" stopOpacity="0.6" />
                  <stop offset="40%" stopColor="#629DFF" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#629DFF" stopOpacity="0" />
                  <stop offset="60%" stopColor="#629DFF" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#629DFF" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              <line
                x1={xLeft}
                y1={topY}
                x2={xRight}
                y2={topY}
                stroke={LINE}
                strokeWidth="1"
              />
              <line
                x1={xLeft}
                y1={botY}
                x2={xRight}
                y2={botY}
                stroke={LINE}
                strokeWidth="1"
              />
              <line
                x1={xLeft}
                y1={topY}
                x2={xLeft}
                y2={botY}
                stroke="url(#vGradLeft)"
                strokeWidth="1"
              />
              <line
                x1={xRight}
                y1={topY}
                x2={xRight}
                y2={botY}
                stroke="url(#vGradRight)"
                strokeWidth="1"
              />
            </svg>

            {/* ROW 1 — unchanged positions */}
            <div className="absolute top-0" style={{ left: STUB }}>
              <Card
                icon={<DiscoveryIcon />}
                title={"Discovery &\nPlanning"}
                active={activeStep === 1}
                size={C}
                onHover={() => setActiveStep(1)}
                onLeave={() => setActiveStep(1)}
              />
            </div>
            <div className="absolute top-0" style={{ left: STUB + C + GAP }}>
              <Card
                icon={<DesignIcon />}
                title={"Design &\nPrototyping"}
                active={activeStep === 2}
                size={C}
                onHover={() => setActiveStep(2)}
                onLeave={() => setActiveStep(1)}
              />
            </div>
            <div
              className="absolute top-0"
              style={{ left: STUB + C * 2 + GAP * 2 }}>
              <Card
                icon={<DevIcon />}
                title={"Development &\nIntegration"}
                active={activeStep === 3}
                size={C}
                onHover={() => setActiveStep(3)}
                onLeave={() => setActiveStep(1)}
              />
            </div>

            {/* Bridge description — unchanged */}
            <div
              key={activeStep}
              className="absolute flex items-center justify-center"
              style={{
                left: STUB,
                right: STUB,
                top: rowH,
                height: bridgeH,
                transition: "opacity 0.3s ease",
              }}>
              <p className="text-textColor font-outfit text-[clamp(14px,1.5vw,16px)] leading-[1.75] text-center">
                {descriptions[activeStep]}
              </p>
            </div>

            {/* ROW 2 — unchanged positions */}
            <div
              className="absolute"
              style={{ left: STUB, top: rowH + bridgeH }}>
              <Card
                icon={<TestingIcon />}
                title={"Testing & Quality\nAssurance"}
                active={activeStep === 4}
                size={C}
                onHover={() => setActiveStep(4)}
                onLeave={() => setActiveStep(1)}
              />
            </div>
            <div
              className="absolute"
              style={{ left: STUB + C + GAP, top: rowH + bridgeH }}>
              <Card
                icon={<LaunchIcon />}
                title={"Launch &\nDeployment"}
                active={activeStep === 5}
                size={C}
                onHover={() => setActiveStep(5)}
                onLeave={() => setActiveStep(1)}
              />
            </div>
            <div
              className="absolute"
              style={{ left: STUB + C * 2 + GAP * 2, top: rowH + bridgeH }}>
              <Card
                icon={<SupportIcon />}
                title={"Post-Launch\nSupport &\nOptimization"}
                active={activeStep === 6}
                size={C}
                onHover={() => setActiveStep(6)}
                onLeave={() => setActiveStep(1)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
