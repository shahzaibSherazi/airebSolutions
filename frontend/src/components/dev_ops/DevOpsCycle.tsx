import { useState, useEffect, useRef } from "react";

const DevOpsCycle = () => {
  const [activeStep, setActiveStep] = useState(2); // Default to step 03 (index 2)
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const dotPositionRef = useRef(0);

  const steps = [
    {
      number: "01",
      title: "Assessment and Planning & Customization",
      description: "",
    },
    {
      number: "02",
      title: "Infrastructure Setup",
      description: "",
    },
    {
      number: "03",
      title: "CI/CD Pipeline Development",
      description:
        "Evaluate current processes, identify bottlenecks, and define a tailored DevOps strategy aligned with business objectives",
    },
    {
      number: "04",
      title: "Security & Compliance Integration",
      description: "",
    },
    {
      number: "05",
      title: "Monitoring & Logging",
      description: "",
    },
    {
      number: "06",
      title: "Feedback & Continuous Improvement",
      description: "",
    },
  ];

  // Draw orbital layers with animated dot
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;

    const setCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Draw function
    const draw = () => {
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      ctx.clearRect(0, 0, width, height);

      const layers = 6;

      /* === DESIGN-CORRECT VALUES === */
      const ellipseWidth = 220; // same width for all
      const ellipseHeight = 50; // flat ellipse
      const layerGap = 70; // vertical spacing

      // Add padding for top dot and bottom ellipse
      const topPadding = 100;
      const bottomPadding = 50;
      const totalEllipsesHeight = (layers - 1) * layerGap;
      const centerX = width / 2;
      const centerY = topPadding + totalEllipsesHeight / 2 + ellipseHeight;

      // Draw ellipses
      for (let i = 0; i < layers; i++) {
        const yOffset = (i - (layers - 1) / 2) * layerGap;
        const isActive = i === activeStep;

        ctx.beginPath();
        ctx.ellipse(
          centerX,
          centerY + yOffset,
          ellipseWidth,
          ellipseHeight,
          0,
          0,
          Math.PI * 2,
        );

        if (isActive) {
          ctx.strokeStyle = "#000000";
          ctx.lineWidth = 3;
          ctx.fillStyle = "#0B23C8";
          ctx.fill();
        } else {
          ctx.strokeStyle = "#000000";
          ctx.lineWidth = 0.5;
        }

        ctx.stroke();
      }

      // Draw animated dot on active layer
      const activeYOffset = (activeStep - (layers - 1) / 2) * layerGap;
      const angle = dotPositionRef.current;

      // Calculate position on active ellipse
      const ellipseX = centerX + Math.cos(angle) * ellipseWidth;
      const ellipseY =
        centerY + activeYOffset + Math.sin(angle) * ellipseHeight;

      // Dot position at top (fixed above all ellipses)
      const dotX = ellipseX;
      const dotY = 30; // Fixed position near top of canvas

      // Draw vertical line from ellipse to dot
      ctx.beginPath();
      ctx.moveTo(ellipseX, ellipseY);
      ctx.lineTo(dotX, dotY);
      ctx.strokeStyle = "#0B23C8";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw dot (larger and more visible)
      ctx.beginPath();
      ctx.arc(dotX, dotY, 10, 0, Math.PI * 2);
      ctx.fillStyle = "#0B23C8";
      ctx.fill();

      // Draw white border around dot for better visibility
      ctx.beginPath();
      ctx.arc(dotX, dotY, 10, 0, Math.PI * 2);
      ctx.strokeStyle = "#FFFFFF";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw glow around dot
      const gradient = ctx.createRadialGradient(dotX, dotY, 0, dotX, dotY, 25);
      gradient.addColorStop(0, "rgba(11, 35, 200, 0.6)");
      gradient.addColorStop(1, "rgba(11, 35, 200, 0)");
      ctx.beginPath();
      ctx.arc(dotX, dotY, 25, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Update dot position
      dotPositionRef.current += 0.015;

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, [activeStep]);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className=" px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-[77px]">
          <h2 className="text-4xl lg:text-[42px] font-stoke font-normal text-black leading-[56px]">
            Our DevOps <br /> Development Cycle
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Steps List */}
          <div className="space-y-0 border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
            {steps.map((step, index) => (
              <div
                key={step.number}
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => setActiveStep(index)}
                className={`cursor-pointer transition-all duration-300 ${
                  activeStep === index
                    ? "bg-primary text-white"
                    : "bg-white text-gray-900 hover:bg-gray-50"
                } ${index !== steps.length - 1 ? "border-b border-gray-200" : ""}`}>
                <div className="p-6 lg:p-8">
                  <div className="flex items-start gap-4">
                    <span
                      className={`text-lg font-bold ${
                        activeStep === index ? "text-white" : "text-gray-400"
                      }`}>
                      {step.number}
                    </span>
                    <div className="flex-1">
                      <h4
                        className={`text-base lg:text-xl font-outfit font-medium mb-2 ${
                          activeStep === index ? "text-white" : "text-black"
                        }`}>
                        {step.title}
                      </h4>
                      {step.description && activeStep === index && (
                        <p className="text-sm lg:text-base text-white/90 font-outfit font-light leading-relaxed">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Orbital Animation */}
          <div className="relative flex items-center justify-center min-h-[600px] lg:min-h-[700px]">
            {/* Canvas for orbital layers */}
            <canvas
              ref={canvasRef}
              className="w-full h-full"
              style={{ maxWidth: "600px", minHeight: "600px" }}
            />

            {/* Active step indicator */}
            <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md border border-gray-200">
              <span className="text-sm font-semibold text-blue-700">
                {steps[activeStep].number}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevOpsCycle;
