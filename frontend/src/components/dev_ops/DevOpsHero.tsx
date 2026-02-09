// import { ArrowRight } from "lucide-react";
// import { useEffect, useRef } from "react";

// const DevOpsHero = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     const dpr = window.devicePixelRatio || 1;

//     // Set canvas size
//     const setCanvasSize = () => {
//       const rect = canvas.getBoundingClientRect();
//       const dpr = window.devicePixelRatio || 1;

//       canvas.width = rect.width * dpr;
//       canvas.height = rect.height * dpr;

//       ctx.setTransform(1, 0, 0, 1, 0, 0);
//       ctx.scale(dpr, dpr);
//     };

//     setCanvasSize();
//     window.addEventListener("resize", setCanvasSize);

//     // Animation variables
//     let animationId;
//     let progress = 0;
//     let glowIntensity = 0;
//     let glowDirection = 1;

//     // Draw infinity symbol
//     const drawInfinity = () => {
//       const centerX = canvas.width / (2 * dpr);
//       const centerY = canvas.height / (2 * dpr);
//       const scale = 120; // Size of infinity symbol

//       ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

//       // Draw glow layers
//       for (let i = 5; i >= 0; i--) {
//         ctx.beginPath();

//         for (let t = 0; t <= Math.PI * 2; t += 0.01) {
//           const x = centerX + (scale * Math.cos(t)) / (1 + Math.sin(t) ** 2);
//           const y =
//             centerY +
//             (scale * Math.sin(t) * Math.cos(t)) / (1 + Math.sin(t) ** 2);

//           if (t === 0) {
//             ctx.moveTo(x, y);
//           } else {
//             ctx.lineTo(x, y);
//           }
//         }

//         ctx.closePath();
//       }

//       // Draw animated flowing particles
//       const numParticles = 50;
//       for (let i = 0; i < numParticles; i++) {
//         const t =
//           (progress + i * ((Math.PI * 2) / numParticles)) % (Math.PI * 2);
//         const x = centerX + (scale * Math.cos(t)) / (1 + Math.sin(t) ** 2);
//         const y =
//           centerY +
//           (scale * Math.sin(t) * Math.cos(t)) / (1 + Math.sin(t) ** 2);

//         // Particle glow
//         const particleGradient = ctx.createRadialGradient(x, y, 0, x, y, 18);
//         particleGradient.addColorStop(
//           0,
//           `rgba(0, 161, 224, ${0.9 + glowIntensity * 0.1})`,
//         );
//         particleGradient.addColorStop(
//           0.5,
//           `rgba(77, 113, 221, ${0.6 + glowIntensity * 0.1})`,
//         );
//         particleGradient.addColorStop(1, "rgba(77, 113, 221, 0)");

//         ctx.beginPath();
//         ctx.arc(x, y, 7, 0, Math.PI * 2);
//         ctx.fillStyle = particleGradient;
//         ctx.shadowBlur = 25;
//         ctx.shadowColor = "rgba(0, 161, 224, 0.8)";
//         ctx.fill();
//       }

//       // Update animation
//       progress += 0.02;
//       glowIntensity += 0.05 * glowDirection;
//       if (glowIntensity > 1 || glowIntensity < 0) {
//         glowDirection *= -1;
//       }

//       animationId = requestAnimationFrame(drawInfinity);
//     };

//     drawInfinity();

//     return () => {
//       cancelAnimationFrame(animationId);
//       window.removeEventListener("resize", setCanvasSize);
//     };
//   }, []);

//   return (
//     <section className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden">
//       <div className="w-full px-8 py-[8vh] sm:py-[10vh] lg:py-[12vh]">
//         <div className="grid lg:grid-cols-[2fr,1fr] gap-12 lg:gap-14  w-full ">
//           {/* Left Content */}
//           <div
//             style={{ marginTop: "clamp(80px,20vh,281px)" }}
//             className="space-y-9 text-white w-full">
//             <h1 className="text-4xl md:text-5xl lg:text-[56px] font-stoke font-normal lg:leading-[72px]">
//               Catalyzing Agile <br />
//               DevOps Transformation
//             </h1>

//             <p className="text-sm lg:text-base text-gray-300 font-outfit font-normal max-w-2xl leading-relaxed mb-10">
//               We create modern websites and webshops powered by efficient code,
//               intelligent architecture, and seamless brand experiences built to
//               deliver long-term commercial value.
//             </p>

//             <div className="flex sm:justify-start justify-center">
//               <button className="group flex items-center  gap-3 sm:gap-4 bg-[#0B23C8] pl-4 sm:pl-6 pr-1 py-1 text-base sm:text-lg tracking-wide hover:bg-blue-700 transition-all duration-300">
//                 <span className="whitespace-nowrap">Get Started</span>
//                 <span className="bg-white w-11 h-11 sm:w-12 sm:h-12 text-black flex items-center justify-center transition-transform group-hover:translate-x-1">
//                   <ArrowRight size={16} className="sm:w-5 sm:h-5" />
//                 </span>
//               </button>
//             </div>
//           </div>

//           {/* Right Animated Infinity Container */}
//           <div className=" flex items-end justify-end mt-[5vh]">
//             {/* Outer Glow Effect */}
//             {/* <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full animate-pulse" /> */}

//             {/* Main Container with Conic Gradient */}
//             <div
//               className="relative overflow-hidden shadow-2xl w-full lg:max-w-[471px] h-[518px]"
//               style={{
//                 background:
//                   "conic-gradient(from 217.36deg at 50% 50%, #000000 -96.92deg, #0B23C8 54.81deg, #000000 108.15deg, #0B23C8 186.92deg, #000000 263.08deg, #0B23C8 414.81deg)",
//               }}>
//               {/* Inner gradient overlay for depth */}
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />

//               {/* Border glow effect */}
//               <div className="absolute inset-0 border border-blue-500/30" />

//               {/* Infinity Symbol Canvas */}
//               <canvas
//                 ref={canvasRef}
//                 className="absolute inset-0 w-full h-full"
//               />

//               {/* Decorative corner elements */}
//             </div>

//             {/* Floating particles around the container */}
//             <div className="absolute inset-0 pointer-events-none">
//               {[...Array(8)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="absolute w-2 h-2 bg-blue-400 rounded-full animate-float"
//                   style={{
//                     top: `${Math.random() * 100}%`,
//                     left: `${Math.random() * 100}%`,
//                     animationDelay: `${i * 0.5}s`,
//                     animationDuration: `${3 + Math.random() * 2}s`,
//                     opacity: 0.6,
//                   }}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Background animated elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-blue-600/5 rounded-full blur-3xl animate-spin-slow" />
//         <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-cyan-600/5 rounded-full blur-3xl animate-spin-slow-reverse" />
//       </div>
//     </section>
//   );
// };

// export default DevOpsHero;

// // import { useEffect, useRef, useState, useCallback } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // gsap.registerPlugin(ScrollTrigger);

// // /* ═══════════════════════════════════════════════════════════
// //    LENIS – ultra-smooth scroll (self-contained, no package)
// //    ═══════════════════════════════════════════════════════════ */
// // class Lenis {
// //   constructor(options = {}) {
// //     this.root = options.root || window;
// //     this.smooth = options.smooth ?? true;
// //     this.duration = options.duration ?? 1.2;
// //     this.easing = options.easing ?? ((t) => 1 - Math.pow(1 - t, 4));
// //     this.el = this.root === window ? document.documentElement : this.root;
// //     this._target = this.el.scrollTop;
// //     this._current = this._target;
// //     this._raf = null;
// //     this._callbacks = [];
// //     this._onWheel = this._onWheel.bind(this);
// //     this._animate = this._animate.bind(this);
// //     this.el.addEventListener("wheel", this._onWheel, { passive: false });
// //     this._animate();
// //   }
// //   _onWheel(e) {
// //     if (this.smooth) e.preventDefault();
// //     this._target = Math.max(
// //       0,
// //       Math.min(
// //         this._target + e.deltaY,
// //         this.el.scrollHeight - this.el.clientHeight,
// //       ),
// //     );
// //   }
// //   _animate() {
// //     const diff = this._target - this._current;
// //     if (Math.abs(diff) > 0.05) {
// //       this._current += diff * 0.12;
// //       this.el.scrollTop = this._current;
// //       this._callbacks.forEach((cb) => cb({ scroll: this._current }));
// //     }
// //     this._raf = requestAnimationFrame(this._animate);
// //   }
// //   scrollTo(top) {
// //     this._target = top;
// //   }
// //   destroy() {
// //     cancelAnimationFrame(this._raf);
// //     this.el.removeEventListener("wheel", this._onWheel);
// //   }
// //   on(event, cb) {
// //     if (event === "scroll") this._callbacks.push(cb);
// //   }
// //   off(event, cb) {
// //     if (event === "scroll")
// //       this._callbacks = this._callbacks.filter((c) => c !== cb);
// //   }
// // }

// // /* ═══════════════════════════════════════════════════════════
// //    SCENE DATA  – each "frame" of the animated video
// //    ═══════════════════════════════════════════════════════════ */
// // const SCENES = [
// //   {
// //     id: "docker",
// //     icon: "🐳",
// //     title: "Docker",
// //     subtitle: "Containerization",
// //     desc: "Package every application into a portable, self-contained unit. Run it anywhere — identically.",
// //     accent: "#2496db",
// //     particles: [
// //       { x: 12, y: 18, size: 3, delay: 0 },
// //       { x: 88, y: 25, size: 2, delay: 0.1 },
// //       { x: 45, y: 72, size: 4, delay: 0.15 },
// //       { x: 70, y: 60, size: 2, delay: 0.05 },
// //       { x: 25, y: 50, size: 3, delay: 0.2 },
// //     ],
// //     blocks: [
// //       { label: "App", x: 8, y: 55, w: 26, h: 22, color: "#2496db" },
// //       { label: "Deps", x: 36, y: 55, w: 26, h: 22, color: "#1d76b8" },
// //       { label: "Runtime", x: 64, y: 55, w: 28, h: 22, color: "#155f8a" },
// //       {
// //         label: "Container",
// //         x: 6,
// //         y: 82,
// //         w: 88,
// //         h: 14,
// //         color: "#0d3b5e",
// //         outline: true,
// //       },
// //     ],
// //   },
// //   {
// //     id: "kubernetes",
// //     icon: "☸️",
// //     title: "Kubernetes",
// //     subtitle: "Orchestration",
// //     desc: "Orchestrate thousands of containers across clusters. Auto-scale, self-heal, zero-downtime.",
// //     accent: "#326ce6",
// //     particles: [
// //       { x: 15, y: 22, size: 2, delay: 0 },
// //       { x: 82, y: 18, size: 3, delay: 0.1 },
// //       { x: 50, y: 75, size: 2, delay: 0.12 },
// //       { x: 30, y: 65, size: 4, delay: 0.18 },
// //       { x: 72, y: 55, size: 2, delay: 0.08 },
// //       { x: 48, y: 35, size: 3, delay: 0.22 },
// //     ],
// //     blocks: [
// //       { label: "Pod ①", x: 10, y: 42, w: 22, h: 18, color: "#326ce6" },
// //       { label: "Pod ②", x: 39, y: 42, w: 22, h: 18, color: "#2a5ccc" },
// //       { label: "Pod ③", x: 68, y: 42, w: 22, h: 18, color: "#214db0" },
// //       {
// //         label: "Node A",
// //         x: 5,
// //         y: 68,
// //         w: 44,
// //         h: 16,
// //         color: "#193a8a",
// //         outline: true,
// //       },
// //       {
// //         label: "Node B",
// //         x: 51,
// //         y: 68,
// //         w: 44,
// //         h: 16,
// //         color: "#193a8a",
// //         outline: true,
// //       },
// //       { label: "Control Plane", x: 20, y: 12, w: 60, h: 20, color: "#0f2260" },
// //     ],
// //   },
// //   {
// //     id: "cicd",
// //     icon: "🔄",
// //     title: "CI / CD Pipeline",
// //     subtitle: "Continuous Delivery",
// //     desc: "Code flows from commit to production in minutes. Every step tested, every deploy confident.",
// //     accent: "#f59e0b",
// //     particles: [
// //       { x: 8, y: 40, size: 3, delay: 0 },
// //       { x: 92, y: 35, size: 2, delay: 0.14 },
// //       { x: 50, y: 80, size: 2, delay: 0.06 },
// //       { x: 25, y: 25, size: 4, delay: 0.2 },
// //       { x: 75, y: 70, size: 3, delay: 0.1 },
// //     ],
// //     blocks: [
// //       { label: "Commit", x: 2, y: 40, w: 18, h: 18, color: "#f59e0b" },
// //       { label: "Build", x: 22, y: 40, w: 16, h: 18, color: "#d97706" },
// //       { label: "Test", x: 40, y: 40, w: 16, h: 18, color: "#b45309" },
// //       { label: "Stage", x: 58, y: 40, w: 16, h: 18, color: "#92400e" },
// //       { label: "Deploy", x: 76, y: 40, w: 20, h: 18, color: "#78350f" },
// //     ],
// //   },
// //   {
// //     id: "terraform",
// //     icon: "🏗️",
// //     title: "Terraform",
// //     subtitle: "Infrastructure as Code",
// //     desc: "Define your entire cloud infra in code. Plan, apply, destroy — deterministic, version-controlled.",
// //     accent: "#7b68ee",
// //     particles: [
// //       { x: 18, y: 15, size: 2, delay: 0 },
// //       { x: 80, y: 22, size: 3, delay: 0.12 },
// //       { x: 55, y: 78, size: 2, delay: 0.18 },
// //       { x: 35, y: 60, size: 4, delay: 0.08 },
// //       { x: 90, y: 65, size: 2, delay: 0.22 },
// //     ],
// //     blocks: [
// //       { label: "main.tf", x: 5, y: 15, w: 38, h: 30, color: "#7b68ee" },
// //       { label: "VPC", x: 50, y: 10, w: 20, h: 18, color: "#6a5acd" },
// //       { label: "EC2", x: 72, y: 10, w: 20, h: 18, color: "#5849b8" },
// //       { label: "S3", x: 50, y: 32, w: 20, h: 18, color: "#4a3fa3" },
// //       { label: "RDS", x: 72, y: 32, w: 20, h: 18, color: "#3b3088" },
// //       {
// //         label: "State",
// //         x: 5,
// //         y: 55,
// //         w: 88,
// //         h: 14,
// //         color: "#2c2470",
// //         outline: true,
// //       },
// //     ],
// //   },
// //   {
// //     id: "monitoring",
// //     icon: "📊",
// //     title: "Observability",
// //     subtitle: "Prometheus + Grafana",
// //     desc: "Real-time metrics, logs, traces. See everything. Know instantly. React before users notice.",
// //     accent: "#00d4aa",
// //     particles: [
// //       { x: 10, y: 30, size: 3, delay: 0 },
// //       { x: 85, y: 20, size: 2, delay: 0.1 },
// //       { x: 40, y: 75, size: 4, delay: 0.16 },
// //       { x: 65, y: 55, size: 2, delay: 0.06 },
// //       { x: 22, y: 68, size: 3, delay: 0.2 },
// //     ],
// //     blocks: [
// //       { label: "CPU", x: 5, y: 38, w: 28, h: 22, color: "#00d4aa" },
// //       { label: "Memory", x: 36, y: 38, w: 28, h: 22, color: "#00b894" },
// //       { label: "Latency", x: 67, y: 38, w: 28, h: 22, color: "#009b78" },
// //       {
// //         label: "Dashboard",
// //         x: 5,
// //         y: 68,
// //         w: 90,
// //         h: 16,
// //         color: "#007a5e",
// //         outline: true,
// //       },
// //     ],
// //   },
// //   {
// //     id: "security",
// //     icon: "🔒",
// //     title: "Vault & Security",
// //     subtitle: "Zero-Trust DevSecOps",
// //     desc: "Secrets managed dynamically. Every credential is ephemeral, audited, and auto-rotated.",
// //     accent: "#f472b6",
// //     particles: [
// //       { x: 14, y: 20, size: 2, delay: 0 },
// //       { x: 78, y: 28, size: 3, delay: 0.14 },
// //       { x: 50, y: 72, size: 2, delay: 0.08 },
// //       { x: 30, y: 55, size: 4, delay: 0.18 },
// //       { x: 88, y: 60, size: 2, delay: 0.22 },
// //     ],
// //     blocks: [
// //       { label: "Secrets", x: 8, y: 20, w: 32, h: 24, color: "#f472b6" },
// //       { label: "PKI", x: 45, y: 20, w: 24, h: 24, color: "#e11d8a" },
// //       { label: "Audit", x: 74, y: 20, w: 22, h: 24, color: "#be185d" },
// //       { label: "Rotate", x: 8, y: 52, w: 28, h: 18, color: "#9d174d" },
// //       { label: "Encrypt", x: 40, y: 52, w: 28, h: 18, color: "#831843" },
// //       {
// //         label: "Zero Trust",
// //         x: 5,
// //         y: 78,
// //         w: 90,
// //         h: 14,
// //         color: "#6b1237",
// //         outline: true,
// //       },
// //     ],
// //   },
// // ];

// // /* ═══════════════════════════════════════════════════════════
// //    ANIMATED SCENE  – the "video frame" rendered per scroll pos
// //    ═══════════════════════════════════════════════════════════ */
// // const AnimatedScene = ({ scene, progress }) => {
// //   // progress: 0 → 1  (how far this scene is revealed)
// //   const eased = Math.min(1, progress * 1.6); // slight overshoot feel
// //   const blockEased = Math.max(0, (progress - 0.15) * 1.8);

// //   return (
// //     <div
// //       style={{
// //         position: "absolute",
// //         inset: 0,
// //         opacity: eased,
// //         transition: "none",
// //       }}>
// //       {/* Accent glow behind */}
// //       <div
// //         style={{
// //           position: "absolute",
// //           top: "30%",
// //           left: "50%",
// //           transform: `translate(-50%, -50%) scale(${0.6 + eased * 0.6})`,
// //           width: 420,
// //           height: 420,
// //           borderRadius: "50%",
// //           background: `radial-gradient(circle, ${scene.accent}18 0%, transparent 70%)`,
// //           filter: "blur(50px)",
// //           pointerEvents: "none",
// //           transition: "none",
// //         }}
// //       />

// //       {/* Floating particles */}
// //       {scene.particles.map((p, i) => {
// //         const pEased = Math.max(0, Math.min(1, (progress - p.delay) * 3));
// //         return (
// //           <div
// //             key={i}
// //             style={{
// //               position: "absolute",
// //               left: `${p.x}%`,
// //               top: `${p.y}%`,
// //               width: p.size * 2,
// //               height: p.size * 2,
// //               borderRadius: "50%",
// //               background: scene.accent,
// //               opacity: pEased * 0.6,
// //               transform: `translateY(${(1 - pEased) * -20}px)`,
// //               boxShadow: `0 0 ${p.size * 3}px ${scene.accent}60`,
// //               transition: "none",
// //             }}
// //           />
// //         );
// //       })}

// //       {/* Blocks / "UI" elements */}
// //       {scene.blocks.map((b, i) => {
// //         const bProgress = Math.max(0, Math.min(1, (progress - i * 0.06) * 2.5));
// //         return (
// //           <div
// //             key={i}
// //             style={{
// //               position: "absolute",
// //               left: `${b.x}%`,
// //               top: `${b.y}%`,
// //               width: `${b.w}%`,
// //               height: `${b.h}%`,
// //               borderRadius: 8,
// //               background: b.outline ? "transparent" : b.color,
// //               border: b.outline
// //                 ? `1.5px solid ${b.color}80`
// //                 : "1px solid rgba(255,255,255,0.08)",
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //               color: "#fff",
// //               fontSize: "clamp(9px, 1.1vw, 13px)",
// //               fontWeight: 700,
// //               fontFamily: "'JetBrains Mono', monospace",
// //               letterSpacing: "0.04em",
// //               opacity: bProgress,
// //               transform: `translateY(${(1 - bProgress) * 22}px) scale(${0.88 + bProgress * 0.12})`,
// //               boxShadow: bProgress > 0.7 ? `0 4px 24px ${b.color}30` : "none",
// //               transition: "box-shadow 0.3s",
// //             }}>
// //             {b.label}
// //           </div>
// //         );
// //       })}

// //       {/* Connection lines (SVG) */}
// //       <svg
// //         style={{
// //           position: "absolute",
// //           inset: 0,
// //           width: "100%",
// //           height: "100%",
// //           pointerEvents: "none",
// //         }}
// //         viewBox="0 0 100 100"
// //         preserveAspectRatio="none">
// //         {scene.blocks.slice(0, -1).map((b, i) => {
// //           const next = scene.blocks[i + 1];
// //           if (!next || b.y !== next.y) return null;
// //           const x1 = b.x + b.w;
// //           const x2 = next.x;
// //           const y = b.y + b.h / 2;
// //           const lineProgress = Math.max(
// //             0,
// //             Math.min(1, (progress - i * 0.07) * 2),
// //           );
// //           return (
// //             <line
// //               key={i}
// //               x1={x1}
// //               y1={y}
// //               x2={x1 + (x2 - x1) * lineProgress}
// //               y2={y}
// //               stroke={scene.accent}
// //               strokeWidth="0.4"
// //               strokeOpacity={lineProgress * 0.5}
// //               strokeDasharray="1 0.5"
// //             />
// //           );
// //         })}
// //       </svg>
// //     </div>
// //   );
// // };

// // /* ═══════════════════════════════════════════════════════════
// //    PROGRESS DOT NAV
// //    ═══════════════════════════════════════════════════════════ */
// // const DotNav = ({ current, total, onDotClick }) => (
// //   <div
// //     style={{
// //       position: "absolute",
// //       right: 32,
// //       top: "50%",
// //       transform: "translateY(-50%)",
// //       display: "flex",
// //       flexDirection: "column",
// //       gap: 14,
// //       zIndex: 10,
// //     }}>
// //     {Array.from({ length: total }).map((_, i) => {
// //       const active = i === current;
// //       return (
// //         <div
// //           key={i}
// //           onClick={() => onDotClick(i)}
// //           style={{
// //             cursor: "pointer",
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "flex-end",
// //             gap: 8,
// //           }}>
// //           {active && (
// //             <span
// //               style={{
// //                 fontSize: 10,
// //                 color: SCENES[i].accent,
// //                 fontWeight: 700,
// //                 fontFamily: "'JetBrains Mono', monospace",
// //                 opacity: 0.9,
// //                 letterSpacing: "0.06em",
// //               }}>
// //               {SCENES[i].title}
// //             </span>
// //           )}
// //           <div
// //             style={{
// //               width: active ? 10 : 6,
// //               height: active ? 10 : 6,
// //               borderRadius: "50%",
// //               background: active ? SCENES[i].accent : "rgba(148,163,184,0.3)",
// //               boxShadow: active ? `0 0 10px ${SCENES[i].accent}60` : "none",
// //               transition: "all 0.35s cubic-bezier(.4,0,0,1)",
// //             }}
// //           />
// //         </div>
// //       );
// //     })}
// //   </div>
// // );

// // /* ═══════════════════════════════════════════════════════════
// //    MAIN COMPONENT
// //    ═══════════════════════════════════════════════════════════ */
// // export default function DevOpsVideoScroll() {
// //   const wrapperRef = useRef(null); // the tall scrollable spacer
// //   const stickyRef = useRef(null); // the pinned "screen"
// //   const lenisRef = useRef(null);

// //   const [scrollPercent, setScrollPercent] = useState(0); // 0 → 1 across entire section
// //   const [currentScene, setCurrentScene] = useState(0);
// //   const [sceneProgress, setSceneProgress] = useState(0); // 0 → 1 within current scene

// //   const TOTAL = SCENES.length;

// //   /* ── derive current scene + local progress from global scroll ── */
// //   const updateFromScroll = useCallback((pct) => {
// //     setScrollPercent(pct);
// //     const raw = pct * TOTAL;
// //     const idx = Math.min(TOTAL - 1, Math.floor(raw));
// //     const localProg = raw - idx;
// //     setCurrentScene(idx);
// //     setSceneProgress(idx === TOTAL - 1 ? Math.max(localProg, 0.95) : localProg);
// //   }, []);

// //   /* ── GSAP ScrollTrigger – maps wrapper scroll to 0→1 ── */
// //   useEffect(() => {
// //     if (!wrapperRef.current) return;

// //     const st = ScrollTrigger.create({
// //       trigger: wrapperRef.current,
// //       start: "top top",
// //       end: "bottom bottom",
// //       scrub: 0.4, // buttery smooth scrub
// //       pin: stickyRef.current, // pin the visual panel
// //       onUpdate: (self) => updateFromScroll(self.progress),
// //     });

// //     return () => st.kill();
// //   }, [updateFromScroll]);

// //   /* ── Lenis smooth scroll ── */
// //   useEffect(() => {
// //     const lenis = new Lenis({ smooth: true, duration: 1.4 });
// //     lenisRef.current = lenis;

// //     // sync lenis with ScrollTrigger every frame
// //     const raf = () => {
// //       ScrollTrigger.refresh();
// //       requestAnimationFrame(raf);
// //     };
// //     requestAnimationFrame(raf);

// //     return () => lenis.destroy();
// //   }, []);

// //   /* ── dot nav click → scroll to that scene ── */
// //   const handleDotClick = useCallback((idx) => {
// //     if (!wrapperRef.current) return;
// //     const el = wrapperRef.current;
// //     const rect = el.getBoundingClientRect();
// //     const totalH = el.scrollHeight - window.innerHeight;
// //     const target = el.offsetTop + (idx / TOTAL) * totalH;
// //     window.scrollTo({ top: target, behavior: "smooth" });
// //   }, []);

// //   const scene = SCENES[currentScene];
// //   const nextScene = SCENES[Math.min(currentScene + 1, TOTAL - 1)];

// //   /* ── blended accent for transitions ── */
// //   const blendHex = (hex1, hex2, t) => {
// //     const parse = (h) => {
// //       h = h.replace("#", "");
// //       return [
// //         parseInt(h.slice(0, 2), 16),
// //         parseInt(h.slice(2, 4), 16),
// //         parseInt(h.slice(4, 6), 16),
// //       ];
// //     };
// //     const [r1, g1, b1] = parse(hex1);
// //     const [r2, g2, b2] = parse(hex2);
// //     const r = Math.round(r1 + (r2 - r1) * t);
// //     const g = Math.round(g1 + (g2 - g1) * t);
// //     const b = Math.round(b1 + (b2 - b1) * t);
// //     return `#${[r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")}`;
// //   };
// //   const blendedAccent = blendHex(scene.accent, nextScene.accent, sceneProgress);

// //   return (
// //     <>
// //       <link
// //         href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap"
// //         rel="stylesheet"
// //       />

// //       {/* ─── FULL PAGE DARK BG ─── */}
// //       <div
// //         style={{
// //           background: "#060b18",
// //           minHeight: "100vh",
// //           fontFamily: "'DM Sans', sans-serif",
// //           color: "#e2e8f0",
// //         }}>
// //         {/* ══ HERO INTRO (scrolls away normally) ══ */}
// //         <section
// //           style={{
// //             height: "100vh",
// //             display: "flex",
// //             flexDirection: "column",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             textAlign: "center",
// //             position: "relative",
// //             overflow: "hidden",
// //           }}>
// //           {/* deep glow */}
// //           <div
// //             style={{
// //               position: "absolute",
// //               top: "40%",
// //               left: "50%",
// //               transform: "translate(-50%,-50%)",
// //               width: 800,
// //               height: 500,
// //               borderRadius: "50%",
// //               background:
// //                 "radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)",
// //               filter: "blur(60px)",
// //               pointerEvents: "none",
// //             }}
// //           />

// //           <span
// //             style={{
// //               display: "inline-block",
// //               fontSize: 11,
// //               fontWeight: 700,
// //               letterSpacing: "0.2em",
// //               textTransform: "uppercase",
// //               color: "#6366f1",
// //               background: "rgba(99,102,241,0.1)",
// //               border: "1px solid rgba(99,102,241,0.25)",
// //               borderRadius: 30,
// //               padding: "6px 20px",
// //               marginBottom: 32,
// //             }}>
// //             ◆ DevOps Engineering
// //           </span>
// //           <h1
// //             style={{
// //               margin: 0,
// //               fontSize: "clamp(48px,8vw,88px)",
// //               fontWeight: 800,
// //               fontFamily: "'Syne', sans-serif",
// //               lineHeight: 1.02,
// //               letterSpacing: "-0.03em",
// //               color: "#f1f5f9",
// //             }}>
// //             The Modern
// //             <br />
// //             <span
// //               style={{
// //                 background:
// //                   "linear-gradient(135deg, #6366f1, #a78bfa, #60a5fa)",
// //                 WebkitBackgroundClip: "text",
// //                 WebkitTextFillColor: "transparent",
// //               }}>
// //               DevOps Stack
// //             </span>
// //           </h1>
// //           <p
// //             style={{
// //               marginTop: 28,
// //               maxWidth: 560,
// //               fontSize: 17,
// //               lineHeight: 1.7,
// //               color: "#64748b",
// //             }}>
// //             Scroll to walk through every layer — from containers to production.
// //           </p>
// //           {/* animated down caret */}
// //           <div
// //             style={{
// //               position: "absolute",
// //               bottom: 40,
// //               left: "50%",
// //               transform: "translateX(-50%)",
// //               animation: "bounce 2s infinite",
// //             }}>
// //             <svg
// //               width="24"
// //               height="24"
// //               viewBox="0 0 24 24"
// //               fill="none"
// //               stroke="#64748b"
// //               strokeWidth="2">
// //               <path d="M6 9l6 6 6-6" />
// //             </svg>
// //           </div>
// //         </section>

// //         {/* ══ TALL WRAPPER (scroll spacer) + PINNED PANEL ══ */}
// //         <div
// //           ref={wrapperRef}
// //           style={{ position: "relative", height: `${TOTAL * 100}vh` }}>
// //           {/* pinned sticky "screen" – GSAP pins this */}
// //           <div
// //             ref={stickyRef}
// //             style={{
// //               position: "sticky",
// //               top: 0,
// //               height: "100vh",
// //               width: "100%",
// //               overflow: "hidden",
// //               background: "#060b18",
// //             }}>
// //             {/* subtle grid overlay */}
// //             <div
// //               style={{
// //                 position: "absolute",
// //                 inset: 0,
// //                 pointerEvents: "none",
// //                 zIndex: 0,
// //                 opacity: 0.035,
// //               }}>
// //               <svg width="100%" height="100%" style={{ position: "absolute" }}>
// //                 <defs>
// //                   <pattern
// //                     id="grid"
// //                     width="60"
// //                     height="60"
// //                     patternUnits="userSpaceOnUse">
// //                     <path
// //                       d="M 60 0 L 0 0 0 60"
// //                       fill="none"
// //                       stroke="#94a3b8"
// //                       strokeWidth="0.7"
// //                     />
// //                   </pattern>
// //                 </defs>
// //                 <rect width="100%" height="100%" fill="url(#grid)" />
// //               </svg>
// //             </div>

// //             {/* ── LEFT PANEL: text + meta ── */}
// //             <div
// //               style={{
// //                 position: "absolute",
// //                 left: 0,
// //                 top: 0,
// //                 bottom: 0,
// //                 width: "42%",
// //                 display: "flex",
// //                 flexDirection: "column",
// //                 justifyContent: "center",
// //                 padding: "0 6% 0 8%",
// //                 zIndex: 5,
// //               }}>
// //               {/* scene counter */}
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   alignItems: "center",
// //                   gap: 10,
// //                   marginBottom: 28,
// //                 }}>
// //                 <span
// //                   style={{
// //                     fontSize: 13,
// //                     fontWeight: 700,
// //                     fontFamily: "'JetBrains Mono', monospace",
// //                     color: blendedAccent,
// //                   }}>
// //                   {String(currentScene + 1).padStart(2, "0")}
// //                 </span>
// //                 <span
// //                   style={{ color: "#334155", fontSize: 13, fontWeight: 600 }}>
// //                   /
// //                 </span>
// //                 <span
// //                   style={{
// //                     fontSize: 13,
// //                     fontWeight: 600,
// //                     fontFamily: "'JetBrains Mono', monospace",
// //                     color: "#334155",
// //                   }}>
// //                   {String(TOTAL).padStart(2, "0")}
// //                 </span>
// //                 {/* progress bar */}
// //                 <div
// //                   style={{
// //                     marginLeft: 12,
// //                     flex: 1,
// //                     maxWidth: 120,
// //                     height: 2,
// //                     background: "#1e293b",
// //                     borderRadius: 2,
// //                     overflow: "hidden",
// //                   }}>
// //                   <div
// //                     style={{
// //                       height: "100%",
// //                       width: `${((currentScene + sceneProgress) / TOTAL) * 100}%`,
// //                       background: `linear-gradient(90deg, ${blendedAccent}, ${blendedAccent}88)`,
// //                       borderRadius: 2,
// //                       transition: "width 0.15s",
// //                     }}
// //                   />
// //                 </div>
// //               </div>

// //               {/* subtitle badge */}
// //               <span
// //                 style={{
// //                   display: "inline-block",
// //                   width: "fit-content",
// //                   fontSize: 11,
// //                   fontWeight: 700,
// //                   letterSpacing: "0.14em",
// //                   textTransform: "uppercase",
// //                   color: blendedAccent,
// //                   background: `${blendedAccent}12`,
// //                   border: `1px solid ${blendedAccent}35`,
// //                   borderRadius: 6,
// //                   padding: "5px 14px",
// //                   marginBottom: 18,
// //                   transition: "all 0.4s",
// //                 }}>
// //                 {scene.subtitle}
// //               </span>

// //               {/* title – animates on scene change */}
// //               <h2
// //                 style={{
// //                   margin: "0 0 16px",
// //                   fontSize: "clamp(34px,4.5vw,52px)",
// //                   fontWeight: 800,
// //                   fontFamily: "'Syne', sans-serif",
// //                   color: "#f1f5f9",
// //                   lineHeight: 1.1,
// //                   letterSpacing: "-0.02em",
// //                 }}>
// //                 <span
// //                   style={{
// //                     display: "inline-block",
// //                     opacity: 1 - sceneProgress * 0.15,
// //                   }}>
// //                   {scene.icon} {scene.title}
// //                 </span>
// //               </h2>

// //               {/* description */}
// //               <p
// //                 style={{
// //                   margin: 0,
// //                   fontSize: 16,
// //                   lineHeight: 1.75,
// //                   color: "#64748b",
// //                   maxWidth: 380,
// //                   opacity: 1 - sceneProgress * 0.2,
// //                 }}>
// //                 {scene.desc}
// //               </p>

// //               {/* tags row */}
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   gap: 8,
// //                   flexWrap: "wrap",
// //                   marginTop: 24,
// //                 }}>
// //                 {["Automated", "Scalable", "Secure", "Observable"].map((t) => (
// //                   <span
// //                     key={t}
// //                     style={{
// //                       fontSize: 11,
// //                       fontWeight: 600,
// //                       color: "#94a3b8",
// //                       background: "rgba(148,163,184,0.08)",
// //                       border: "1px solid rgba(148,163,184,0.12)",
// //                       borderRadius: 16,
// //                       padding: "4px 12px",
// //                     }}>
// //                     {t}
// //                   </span>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* ── RIGHT PANEL: animated "video" scene ── */}
// //             <div
// //               style={{
// //                 position: "absolute",
// //                 right: 0,
// //                 top: 0,
// //                 bottom: 0,
// //                 width: "54%",
// //                 display: "flex",
// //                 alignItems: "center",
// //                 justifyContent: "center",
// //                 zIndex: 2,
// //               }}>
// //               {/* the "screen" frame */}
// //               <div
// //                 style={{
// //                   position: "relative",
// //                   width: "82%",
// //                   maxWidth: 680,
// //                   aspectRatio: "16/10",
// //                   background: "linear-gradient(145deg, #0c1220, #101928)",
// //                   borderRadius: 18,
// //                   border: `1px solid ${blendedAccent}20`,
// //                   boxShadow: `0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px ${blendedAccent}15, inset 0 1px 0 rgba(255,255,255,0.04)`,
// //                   overflow: "hidden",
// //                   transition: "border-color 0.5s, box-shadow 0.5s",
// //                 }}>
// //                 {/* window chrome dots */}
// //                 <div
// //                   style={{
// //                     position: "absolute",
// //                     top: 12,
// //                     left: 16,
// //                     display: "flex",
// //                     gap: 7,
// //                     zIndex: 3,
// //                   }}>
// //                   <div
// //                     style={{
// //                       width: 10,
// //                       height: 10,
// //                       borderRadius: "50%",
// //                       background: "#ff5f57",
// //                     }}
// //                   />
// //                   <div
// //                     style={{
// //                       width: 10,
// //                       height: 10,
// //                       borderRadius: "50%",
// //                       background: "#febc2e",
// //                     }}
// //                   />
// //                   <div
// //                     style={{
// //                       width: 10,
// //                       height: 10,
// //                       borderRadius: "50%",
// //                       background: "#28c840",
// //                     }}
// //                   />
// //                 </div>
// //                 {/* URL bar hint */}
// //                 <div
// //                   style={{
// //                     position: "absolute",
// //                     top: 10,
// //                     left: 50,
// //                     right: 16,
// //                     height: 18,
// //                     background: "#0a0f1a",
// //                     borderRadius: 4,
// //                     display: "flex",
// //                     alignItems: "center",
// //                     paddingLeft: 8,
// //                     zIndex: 3,
// //                   }}>
// //                   <span
// //                     style={{
// //                       fontSize: 9,
// //                       color: "#334155",
// //                       fontFamily: "'JetBrains Mono', monospace",
// //                     }}>
// //                     devops-pipeline.live / {scene.id}
// //                   </span>
// //                 </div>
// //                 {/* divider */}
// //                 <div
// //                   style={{
// //                     position: "absolute",
// //                     top: 36,
// //                     left: 0,
// //                     right: 0,
// //                     height: 1,
// //                     background: `${blendedAccent}15`,
// //                     zIndex: 3,
// //                   }}
// //                 />

// //                 {/* scene viewport */}
// //                 <div
// //                   style={{
// //                     position: "absolute",
// //                     top: 37,
// //                     left: 0,
// //                     right: 0,
// //                     bottom: 0,
// //                   }}>
// //                   {/* render current scene fading out */}
// //                   <AnimatedScene
// //                     scene={scene}
// //                     progress={1 - sceneProgress * 0.3}
// //                   />
// //                   {/* render next scene fading in */}
// //                   {currentScene < TOTAL - 1 && (
// //                     <div
// //                       style={{
// //                         position: "absolute",
// //                         inset: 0,
// //                         opacity: sceneProgress,
// //                       }}>
// //                       <AnimatedScene
// //                         scene={nextScene}
// //                         progress={sceneProgress}
// //                       />
// //                     </div>
// //                   )}
// //                 </div>

// //                 {/* corner accent line */}
// //                 <div
// //                   style={{
// //                     position: "absolute",
// //                     bottom: 0,
// //                     left: 0,
// //                     right: 0,
// //                     height: 2,
// //                     background: `linear-gradient(90deg, transparent, ${blendedAccent}60, transparent)`,
// //                     transition: "background 0.5s",
// //                   }}
// //                 />
// //               </div>
// //             </div>

// //             {/* ── DOT NAV (right edge) ── */}
// //             <DotNav
// //               current={currentScene}
// //               total={TOTAL}
// //               onDotClick={handleDotClick}
// //             />
// //           </div>
// //         </div>

// //         {/* ══ FOOTER CTA ══ */}
// //         <section
// //           style={{
// //             padding: "140px 24px 100px",
// //             textAlign: "center",
// //             position: "relative",
// //           }}>
// //           <div
// //             style={{
// //               position: "absolute",
// //               top: "20%",
// //               left: "50%",
// //               transform: "translateX(-50%)",
// //               width: 600,
// //               height: 400,
// //               borderRadius: "50%",
// //               background:
// //                 "radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)",
// //               pointerEvents: "none",
// //               filter: "blur(60px)",
// //             }}
// //           />
// //           <div style={{ position: "relative" }}>
// //             <span
// //               style={{
// //                 display: "inline-block",
// //                 fontSize: 11,
// //                 fontWeight: 700,
// //                 letterSpacing: "0.18em",
// //                 textTransform: "uppercase",
// //                 color: "#6366f1",
// //                 marginBottom: 20,
// //               }}>
// //               — All Systems Go —
// //             </span>
// //             <h2
// //               style={{
// //                 margin: "0 0 18px",
// //                 fontSize: "clamp(32px,5vw,52px)",
// //                 fontWeight: 800,
// //                 fontFamily: "'Syne', sans-serif",
// //                 color: "#f1f5f9",
// //                 lineHeight: 1.1,
// //               }}>
// //               Ready to ship
// //               <br />
// //               <span
// //                 style={{
// //                   background: "linear-gradient(135deg, #6366f1, #a78bfa)",
// //                   WebkitBackgroundClip: "text",
// //                   WebkitTextFillColor: "transparent",
// //                 }}>
// //                 at speed?
// //               </span>
// //             </h2>
// //             <p
// //               style={{
// //                 margin: "0 0 40px",
// //                 maxWidth: 480,
// //                 marginLeft: "auto",
// //                 marginRight: "auto",
// //                 fontSize: 16,
// //                 color: "#64748b",
// //                 lineHeight: 1.7,
// //               }}>
// //               Join engineering teams worldwide. From commit to production —
// //               automated, observed, secure.
// //             </p>
// //             <button
// //               style={{
// //                 padding: "16px 44px",
// //                 fontSize: 15,
// //                 fontWeight: 700,
// //                 color: "#fff",
// //                 background: "linear-gradient(135deg, #6366f1, #a78bfa)",
// //                 border: "none",
// //                 borderRadius: 14,
// //                 cursor: "pointer",
// //                 boxShadow: "0 4px 32px rgba(99,102,241,0.4)",
// //                 letterSpacing: "0.03em",
// //                 transition: "transform 0.25s, box-shadow 0.25s",
// //               }}
// //               onMouseEnter={(e) => {
// //                 e.currentTarget.style.transform =
// //                   "translateY(-3px) scale(1.03)";
// //                 e.currentTarget.style.boxShadow =
// //                   "0 8px 44px rgba(99,102,241,0.55)";
// //               }}
// //               onMouseLeave={(e) => {
// //                 e.currentTarget.style.transform = "translateY(0) scale(1)";
// //                 e.currentTarget.style.boxShadow =
// //                   "0 4px 32px rgba(99,102,241,0.4)";
// //               }}>
// //               Get Started Free →
// //             </button>
// //           </div>
// //         </section>
// //       </div>

// //       {/* bounce keyframe */}
// //       <style>{`
// //         @keyframes bounce {
// //           0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
// //           50%      { transform: translateX(-50%) translateY(10px); opacity: 0.5; }
// //         }
// //       `}</style>
// //     </>
// //   );
// // }

import bgImg from "../../assets/devops_hero_bg.png";

const DevOpsHero = () => {
  return (
    <section className="relative w-full bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(66deg,#629DFF_-90%,rgba(0,0,0,0.2)_114%)]" />
      {/* Content */}
      <div className="relative z-10 min-h-screen px-8 py-[8vh] sm:py-[10vh] lg:py-[14vh] flex flex-col justify-end ">
        <div className="mb-[2vh] sm:mb-[3vh] ">
          <p className="font-outfit text-[clamp(14px,1.5vw,18px)] leading-[1.6] text-gray-300 max-w-2xl">
            Create a connected ecosystem that ensures smooth data flow
          </p>
        </div>

        <h1 className="font-stoke text-[clamp(28px,5vw,56px)] leading-[1.28] text-white">
          End-to-End DevOps <br className="hidden lg:block" /> Services for
          Innovation
        </h1>
      </div>
    </section>
  );
};

export default DevOpsHero;
