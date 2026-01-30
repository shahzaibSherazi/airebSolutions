import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const DevOpsHero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;

    // Set canvas size
    const setCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Animation variables
    let animationId;
    let progress = 0;
    let glowIntensity = 0;
    let glowDirection = 1;

    // Draw infinity symbol
    const drawInfinity = () => {
      const centerX = canvas.width / (2 * dpr);
      const centerY = canvas.height / (2 * dpr);
      const scale = 120; // Size of infinity symbol

      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      // Draw glow layers
      for (let i = 5; i >= 0; i--) {
        ctx.beginPath();

        for (let t = 0; t <= Math.PI * 2; t += 0.01) {
          const x = centerX + (scale * Math.cos(t)) / (1 + Math.sin(t) ** 2);
          const y =
            centerY +
            (scale * Math.sin(t) * Math.cos(t)) / (1 + Math.sin(t) ** 2);

          if (t === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.closePath();

        // Gradient glow effect
        // const gradient = ctx.createLinearGradient(
        //   centerX - scale * 2,
        //   centerY,
        //   centerX + scale * 2,
        //   centerY,
        // );

        // gradient.addColorStop(0, `rgba(77, 113, 221, ${0.8 - i * 0.15})`);
        // gradient.addColorStop(0.5, `rgba(0, 161, 224, ${1 - i * 0.15})`);
        // gradient.addColorStop(1, `rgba(77, 113, 221, ${0.8 - i * 0.15})`);

        // ctx.strokeStyle = gradient;
        // ctx.lineWidth = 15 + i * 8;
        // ctx.lineCap = "round";
        // ctx.lineJoin = "round";

        // // Add blur for outer layers
        // ctx.shadowBlur = 20 + i * 10;
        // ctx.shadowColor = `rgba(77, 113, 221, ${0.6 - i * 0.1})`;

        // ctx.stroke();
      }

      // Draw animated flowing particles
      const numParticles = 60;
      for (let i = 0; i < numParticles; i++) {
        const t =
          (progress + i * ((Math.PI * 2) / numParticles)) % (Math.PI * 2);
        const x = centerX + (scale * Math.cos(t)) / (1 + Math.sin(t) ** 2);
        const y =
          centerY +
          (scale * Math.sin(t) * Math.cos(t)) / (1 + Math.sin(t) ** 2);

        // Particle glow
        const particleGradient = ctx.createRadialGradient(x, y, 0, x, y, 16);
        particleGradient.addColorStop(
          0,
          `rgba(0, 161, 224, ${0.9 + glowIntensity * 0.1})`,
        );
        particleGradient.addColorStop(
          0.5,
          `rgba(77, 113, 221, ${0.6 + glowIntensity * 0.1})`,
        );
        particleGradient.addColorStop(1, "rgba(77, 113, 221, 0)");

        ctx.beginPath();
        ctx.arc(x, y, 7, 0, Math.PI * 2);
        ctx.fillStyle = particleGradient;
        ctx.shadowBlur = 25;
        ctx.shadowColor = "rgba(0, 161, 224, 0.8)";
        ctx.fill();
      }

      // Update animation
      progress += 0.02;
      glowIntensity += 0.05 * glowDirection;
      if (glowIntensity > 1 || glowIntensity < 0) {
        glowDirection *= -1;
      }

      animationId = requestAnimationFrame(drawInfinity);
    };

    drawInfinity();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="w-full px-8 py-[8vh] sm:py-[10vh] lg:py-[12vh]">
        <div className="grid lg:grid-cols-[2fr,1fr] gap-12 lg:gap-14  w-full ">
          {/* Left Content */}
          <div
            style={{ marginTop: "clamp(80px,20vh,281px)" }}
            className="space-y-9 text-white w-full">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-stoke font-normal lg:leading-[72px]">
              Catalyzing Agile <br />
              DevOps Transformation
            </h1>

            <p className="text-sm lg:text-base text-gray-300 font-outfit font-normal max-w-2xl leading-relaxed mb-10">
              We create modern websites and webshops powered by efficient code,
              intelligent architecture, and seamless brand experiences built to
              deliver long-term commercial value.
            </p>

            <div className="flex sm:justify-start justify-center">
              <button className="group flex items-center  gap-3 sm:gap-4 bg-[#0B23C8] pl-4 sm:pl-6 pr-1 py-1 text-base sm:text-lg tracking-wide hover:bg-blue-700 transition-all duration-300">
                <span className="whitespace-nowrap">Get Started</span>
                <span className="bg-white w-11 h-11 sm:w-12 sm:h-12 text-black flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Animated Infinity Container */}
          <div className=" flex items-end justify-end mt-[5vh]">
            {/* Outer Glow Effect */}
            {/* <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full animate-pulse" /> */}

            {/* Main Container with Conic Gradient */}
            <div
              className="relative overflow-hidden shadow-2xl w-full lg:max-w-[471px] h-[518px]"
              style={{
                background:
                  "conic-gradient(from 217.36deg at 50% 50%, #000000 -96.92deg, #0B23C8 54.81deg, #000000 108.15deg, #0B23C8 186.92deg, #000000 263.08deg, #0B23C8 414.81deg)",
              }}>
              {/* Inner gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />

              {/* Border glow effect */}
              <div className="absolute inset-0 border border-blue-500/30" />

              {/* Infinity Symbol Canvas */}
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
              />

              {/* Decorative corner elements */}
            </div>

            {/* Floating particles around the container */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full animate-float"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${3 + Math.random() * 2}s`,
                    opacity: 0.6,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-blue-600/5 rounded-full blur-3xl animate-spin-slow" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-cyan-600/5 rounded-full blur-3xl animate-spin-slow-reverse" />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            transform: translateY(-30px) translateX(15px);
            opacity: 0.6;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-slow-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default DevOpsHero;
