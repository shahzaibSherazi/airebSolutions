import { useState, useEffect, useRef, useCallback } from "react";

const CANVAS_CONFIG = {
  layers: 6,
  ellipseWidth: 220,
  ellipseHeight: 50,
  layerGap: 70,
  topPadding: 100,
  dotRadius: 10,
  dotGlowRadius: 25,
  lineWidth: 2,
  animationSpeed: 1.2,
  minHeight: 600,
};

const COLORS = {
  primary: "#4285F4",
  secondary: "#0E1828",
  accent: "#0B23C8",
  border: "#E5E7EB",
};

const STEPS_DATA = [
  {
    number: "01",
    title: "CONSULTATION & STRATEGY",
    description:
      "Evaluate current processes, identify bottlenecks, and define a tailored DevOps strategy aligned with business objectives.",
  },
  {
    number: "02",
    title: "DESIGN & PROTOTYPING",
    description:
      "Design and configure scalable cloud infrastructure using IaC tools like Terraform, ensuring high availability and disaster recovery.",
  },
  {
    number: "03",
    title: "DEVELOPMENT & INTEGRATION",
    description:
      "We build secure, scalable solutions that seamlessly integrate with your existing infrastructure for optimal performance.We build secure, scalable solutions that seamlessly integrate with your existing infrastructure for optimal performance.",
  },
  {
    number: "04",
    title: "TESTING & QUALITY ASSURANCE",
    description:
      "Implement DevSecOps practices with automated security scanning, compliance checks, and vulnerability management.",
  },
  {
    number: "05",
    title: "LAUNCH & DEPLOYMENT",
    description:
      "Deploy comprehensive monitoring solutions with Prometheus, Grafana, and ELK stack for real-time insights and alerting.",
  },
  {
    number: "06",
    title: "ONGOING SUPPORT",
    description:
      "Establish feedback loops, performance metrics, and continuous optimization strategies to drive ongoing enhancement.",
  },
];

// ============================================
// CUSTOM HOOKS
// ============================================

/**
 * Hook for managing canvas rendering with proper cleanup
 */
const useCanvasAnimation = (canvasRef, activeStep, config) => {
  const dotPositionRef = useRef(0);
  const animationRef = useRef(null);
  const lastTimeRef = useRef(performance.now());

  const drawEllipses = useCallback(
    (ctx, centerX, centerY, activeIndex) => {
      for (let i = 0; i < config.layers; i++) {
        const yOffset = (i - (config.layers - 1) / 2) * config.layerGap;
        const isActive = i === activeIndex;

        ctx.beginPath();
        ctx.ellipse(
          centerX,
          centerY + yOffset,
          config.ellipseWidth,
          config.ellipseHeight,
          0,
          0,
          Math.PI * 2,
        );

        if (isActive) {
          ctx.fillStyle = COLORS.primary;
          ctx.strokeStyle = COLORS.primary;
          ctx.lineWidth = 3;
        } else {
          ctx.fillStyle = COLORS.secondary;
          ctx.strokeStyle = COLORS.primary;
          ctx.lineWidth = 0.5;
        }

        ctx.fill();
        ctx.stroke();
      }
    },
    [config.layers, config.layerGap, config.ellipseWidth, config.ellipseHeight],
  );

  const drawAnimatedDot = useCallback(
    (ctx, centerX, centerY, activeIndex, angle) => {
      const activeYOffset =
        (activeIndex - (config.layers - 1) / 2) * config.layerGap;

      // Calculate ellipse point
      const ellipseX = centerX + Math.cos(angle) * config.ellipseWidth;
      const ellipseY =
        centerY + activeYOffset + Math.sin(angle) * config.ellipseHeight;

      // Fixed dot position at top
      const dotX = ellipseX;
      const dotY = 30;

      // Draw connecting line
      ctx.beginPath();
      ctx.moveTo(ellipseX, ellipseY);
      ctx.lineTo(dotX, dotY);
      ctx.strokeStyle = COLORS.primary;
      ctx.lineWidth = config.lineWidth;
      ctx.stroke();

      // Draw outer glow
      const gradient = ctx.createRadialGradient(
        dotX,
        dotY,
        0,
        dotX,
        dotY,
        config.dotGlowRadius,
      );
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(1, "rgba(11, 35, 200, 0)");

      ctx.beginPath();
      ctx.arc(dotX, dotY, config.dotGlowRadius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw main dot
      ctx.beginPath();
      ctx.arc(dotX, dotY, config.dotRadius, 0, Math.PI * 2);
      ctx.fillStyle = COLORS.primary;
      ctx.fill();

      // Draw dot border
      ctx.beginPath();
      ctx.arc(dotX, dotY, config.dotRadius, 0, Math.PI * 2);
      ctx.strokeStyle = COLORS.secondary;
      ctx.lineWidth = 2;
      ctx.stroke();
    },
    [
      config.layers,
      config.layerGap,
      config.ellipseWidth,
      config.ellipseHeight,
      config.dotRadius,
      config.dotGlowRadius,
      config.lineWidth,
    ],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    let dpr = window.devicePixelRatio || 1;

    // Setup canvas with proper DPI scaling
    const setupCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    // Main animation loop
    const animate = (now) => {
      const delta = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Calculate center positions
      const centerX = width / 2;
      const centerY =
        config.topPadding +
        ((config.layers - 1) * config.layerGap) / 2 +
        config.ellipseHeight;

      // Draw all elements
      drawEllipses(ctx, centerX, centerY, activeStep);
      drawAnimatedDot(
        ctx,
        centerX,
        centerY,
        activeStep,
        dotPositionRef.current,
      );

      // Update animation
      dotPositionRef.current += delta * config.animationSpeed;

      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    setupCanvas();
    window.addEventListener("resize", setupCanvas);

    // Start animation
    cancelAnimationFrame(animationRef.current);
    lastTimeRef.current = performance.now();
    animationRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", setupCanvas);
    };
  }, [activeStep, canvasRef, config, drawEllipses, drawAnimatedDot]);

  return null;
};

// ============================================
// SUB-COMPONENTS
// ============================================

/**
 * Individual step item component
 */
const StepItem = ({ step, index, isActive, onClick, isLastItem }) => (
  <div
    onClick={onClick}
    onMouseEnter={onClick}
    className={`
      cursor-pointer transition-all duration-300
      ${isActive ? "bg-[#0E1828] text-white" : "bg-primary text-black"}
      ${!isLastItem ? "border-b border-gray-200" : ""}
    `}
    role="button"
    tabIndex={0}
    aria-pressed={isActive}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick();
      }
    }}>
    <div className="p-6 lg:p-8">
      <div className="flex items-start gap-4">
        <span
          className={`
            text-lg font-bold min-w-[2.5rem]
            ${isActive ? "text-white" : "text-black"}
          `}>
          {step.number}
        </span>
        <div className="flex-1">
          <h3
            className={`
              text-base lg:text-xl font-outfit font-medium mb-2
              ${isActive ? "text-white" : "text-black"}
            `}>
            {step.title}
          </h3>
          {step.description && isActive && (
            <p className="text-sm lg:text-base text-white/90 font-outfit font-light line-clamp-2 overflow-hidden leading-relaxed mt-3">
              {step.description}
            </p>
          )}
        </div>
      </div>
    </div>
  </div>
);

/**
 * Steps list component
 */
const StepsList = ({ steps, activeStep, onStepChange }) => (
  <div
    className="space-y-0 border border-black rounded-lg overflow-hidden shadow-lg"
    role="tablist"
    aria-label="DevOps Development Cycle Steps">
    {steps.map((step, index) => (
      <StepItem
        key={step.number}
        step={step}
        index={index}
        isActive={activeStep === index}
        onClick={() => onStepChange(index)}
        isLastItem={index === steps.length - 1}
      />
    ))}
  </div>
);

/**
 * Orbital animation canvas component
 */
const OrbitalAnimation = ({ activeStep, steps, canvasRef }) => (
  <div className="relative flex items-center justify-center h-[500px] md:h-[550px] lg:h-[700px]">
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{
        maxWidth: "600px",
      }}
      aria-hidden="true"
    />

    {/* Active step indicator badge */}
    <div
      className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md border border-gray-200"
      role="status"
      aria-live="polite">
      <span className="text-sm font-semibold text-black">
        Step {steps[activeStep].number}
      </span>
    </div>
  </div>
);

// ============================================
// MAIN COMPONENT
// ============================================

const TelecommunicationCycle = () => {
  const [activeStep, setActiveStep] = useState(2); // Default to step 03 (index 2)
  const canvasRef = useRef(null);

  // Initialize canvas animation
  useCanvasAnimation(canvasRef, activeStep, CANVAS_CONFIG);

  // Memoized step change handler
  const handleStepChange = useCallback((index) => {
    setActiveStep(index);
  }, []);

  return (
    <section
      className="py-16 lg:py-24 bg-[#02070F]"
      aria-labelledby="devops-title">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Title */}
        <header className="text-center mb-[77px]">
          <h2
            id="devops-title"
            className="text-[clamp(24px,4vw,42px)] font-stoke font-normal text-textColor lg:leading-[56px] mb-6">
            Our Telecommunications <br /> Development Cycle
          </h2>
          <p className="font-outfit font-normal text-textColor  mx-auto text-sm md:text-lg leading-relaxed">
            At Aireb Solutions, we follow a structured development cycle to
            ensure that our telecommunications{" "}
            <br className="hidden lg:block" /> solutions are scalable, secure,
            and designed to meet the evolving needs of the industry. From
            planning <br className="hidden lg:block" /> to implementation and
            beyond, we are committed to delivering high-quality results.
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Steps List */}
          <StepsList
            steps={STEPS_DATA}
            activeStep={activeStep}
            onStepChange={handleStepChange}
          />

          {/* Right Side - Orbital Animation */}
          <OrbitalAnimation
            activeStep={activeStep}
            steps={STEPS_DATA}
            canvasRef={canvasRef}
          />
        </div>
      </div>
    </section>
  );
};

export default TelecommunicationCycle;
