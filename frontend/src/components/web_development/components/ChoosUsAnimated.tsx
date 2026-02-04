// import React, { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";

// const ChooseUsAnimated = () => {
//   const sectionRef = useRef(null);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionRef.current) return;

//       const section = sectionRef.current;
//       const rect = section.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // Calculate progress based on scroll position
//       const start = windowHeight * 0.5;
//       const end = -rect.height * 0.3;
//       const scrollRange = start - end;
//       const scrolled = start - rect.top;

//       // Normalize progress between 0 and 1
//       let newProgress = Math.max(0, Math.min(1, scrolled / scrollRange));

//       setProgress(newProgress);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // All words arranged in boxes with larger dimensions based on Figma
//   const wordBoxes = [
//     // Row 1
//     { text: "Where", x: 15, y: 20, width: 18, height: 9 },
//     { text: "strategy,", x: 34, y: 20, width: 24, height: 9 },
//     { text: "creativity,", x: 59, y: 20, width: 27, height: 9 },
//     // { text: "the", x: 63, y: 20, width: 12, height: 9 },

//     // Row 2
//     { text: "and", x: 10, y: 31, width: 12, height: 9 },
//     { text: "Code", x: 23, y: 31, width: 15, height: 9 },
//     { text: "converge", x: 39, y: 31, width: 23, height: 9 },
//     { text: "to", x: 63, y: 31, width: 6, height: 9 },
//     { text: "build", x: 70, y: 31, width: 18, height: 9 },

//     // Row 3
//     { text: "powerful", x: 12, y: 42, width: 25, height: 9 },
//     { text: "web", x: 38, y: 42, width: 12, height: 9 },
//     { text: "experiences.", x: 51, y: 42, width: 33, height: 9 },
//   ];

//   // Animation phases
//   const getPhaseProgress = (start, end) => {
//     const phase = (progress - start) / (end - start);
//     return Math.max(0, Math.min(1, phase));
//   };

//   // Phase 1: Words reveal (0 - 0.6)

//   // Phase 2: Circle appears (0.7 - 1.0)
//   const circleProgress = getPhaseProgress(0.7, 1.0);

//   // Calculate which word to reveal
//   const getWordRevealProgress = (index) => {
//     const wordCount = wordBoxes.length;
//     const wordStart = (index / wordCount) * 0.6;
//     const wordEnd = ((index + 1) / wordCount) * 0.6;

//     if (progress < wordStart) return 0;
//     if (progress > wordEnd) return 1;

//     return (progress - wordStart) / (wordEnd - wordStart);
//   };

//   const totalTicks = 120;
//   const radius = 38;
//   const cx = 45;
//   const cy = 40;

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full min-h-[50vh] md:min-h-[100vh] lg:min-h-[150vh]">
//       {/* Sticky container */}
//       <div className="sticky top-0 left-0 right-0  flex items-center justify-center">
//         <div className="w-full  px-4 sm:px-6 lg:px-8">
//           {/* SVG Animation Container */}
//           <div className="relative w-full aspect-[16/9] max-h-[800px] mx-auto">
//             <svg
//               viewBox="0 0 90 90"
//               className="w-full h-full"
//               preserveAspectRatio="xMidYMid meet">
//               {/* Circle drawn in two halves */}
//               <g style={{ opacity: circleProgress }}>
//                 {Array.from({ length: totalTicks }).map((_, i) => {
//                   // Angle from -90deg (TOP)
//                   const angle = (i / totalTicks) * Math.PI * 2 - Math.PI / 2;

//                   const isLong = i % 4 === 0;
//                   const tickLength = isLong ? 4.4 : 3.4;

//                   const x1 = cx + Math.cos(angle) * (radius - tickLength);
//                   const y1 = cy + Math.sin(angle) * (radius - tickLength);
//                   const x2 = cx + Math.cos(angle) * radius;
//                   const y2 = cy + Math.sin(angle) * radius;

//                   /**
//                    * Normalize angle to 0 → 2π
//                    * LEFT = π
//                    * RIGHT = 0 / 2π
//                    */
//                   const norm = (angle + Math.PI * 2) % (Math.PI * 2);

//                   let revealIndex = null;

//                   /**
//                    * TOP HALF
//                    * LEFT (π) → TOP (3π/2 wrap) → RIGHT (0)
//                    * Anti-clockwise
//                    */
//                   if (norm >= Math.PI && norm <= Math.PI * 2) {
//                     // π → 2π maps to 0 → 1
//                     revealIndex = (norm - Math.PI) / Math.PI;
//                   } else {
//                     /**
//                      * BOTTOM HALF
//                      * RIGHT (0) → BOTTOM (π/2) → LEFT (π)
//                      * Clockwise
//                      */
//                     // 0 → π maps to 0 → 1
//                     revealIndex = norm / Math.PI;
//                   }

//                   /**
//                    * Scroll-driven progress (slower, smoother)
//                    */
//                   const tickProgress = Math.max(
//                     0,
//                     Math.min(1, (progress - 0.55) / 0.45),
//                   );

//                   return (
//                     <motion.line
//                       key={i}
//                       x1={x1}
//                       y1={y1}
//                       x2={x2}
//                       y2={y2}
//                       stroke="rgba(170,170,170,0.75)"
//                       strokeWidth={isLong ? 0.28 : 0.16}
//                       initial={{ opacity: 0 }}
//                       animate={{
//                         opacity: tickProgress >= revealIndex ? 1 : 0,
//                       }}
//                       transition={{
//                         duration: 0.25,
//                         ease: "easeOut",
//                       }}
//                     />
//                   );
//                 })}
//               </g>

//               {/* Word Boxes - Fade out when word appears */}
//               {wordBoxes.map((box, index) => {
//                 const revealProgress = getWordRevealProgress(index);

//                 // 👇 NEW: tighten spacing as word appears
//                 const tighten = revealProgress * 1.2; // adjust 0.8–1.5 for taste

//                 return (
//                   <g key={index}>
//                     {/* box stays same */}
//                     <rect
//                       x={box.x}
//                       y={box.y}
//                       width={box.width}
//                       height={box.height}
//                       fill="rgba(30, 30, 30, 0.6)"
//                       stroke="rgba(80, 80, 80, 0.5)"
//                       strokeWidth="0.15"
//                       rx="0.4"
//                       style={{ opacity: 1 - revealProgress }}
//                     />

//                     {/* ✅ WORD */}
//                     <motion.text
//                       x={box.x + box.width / 2 - tighten}
//                       y={box.y + box.height / 2 + 0.8}
//                       textAnchor="middle"
//                       dominantBaseline="middle"
//                       fill="white"
//                       fontSize="4.6"
//                       fontWeight="400"
//                       fontFamily="'Stoke', serif"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: revealProgress }}
//                       transition={{ duration: 0.5, ease: "easeOut" }}>
//                       {box.text}
//                     </motion.text>
//                   </g>
//                 );
//               })}
//             </svg>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ChooseUsAnimated;

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ChooseUsAnimated = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress based on scroll position
      const start = windowHeight * 0.5;
      const end = -rect.height * 0.3;
      const scrollRange = start - end;
      const scrolled = start - rect.top;

      // Normalize progress between 0 and 1
      let newProgress = Math.max(0, Math.min(1, scrolled / scrollRange));

      setProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // All words arranged in boxes with larger dimensions based on Figma
  const wordBoxes = [
    // Row 1
    { text: "Where", x: 15, y: 21, width: 18, height: 9 },
    { text: "strategy,", x: 34, y: 21, width: 24, height: 9 },
    { text: "creativity,", x: 59, y: 21, width: 27, height: 9 },

    // Row 2
    { text: "and", x: 10, y: 31, width: 12, height: 9 },
    { text: "Code", x: 23, y: 31, width: 15, height: 9 },
    { text: "converge", x: 39, y: 31, width: 23, height: 9 },
    { text: "to", x: 63, y: 31, width: 6, height: 9 },
    { text: "build", x: 70, y: 31, width: 18, height: 9 },

    // Row 3
    { text: "powerful", x: 12, y: 41, width: 25, height: 9 },
    { text: "web", x: 38, y: 41, width: 12, height: 9 },
    { text: "experiences.", x: 51, y: 41, width: 33, height: 9 },
  ];

  // Animation phases
  const getPhaseProgress = (start, end) => {
    const phase = (progress - start) / (end - start);
    return Math.max(0, Math.min(1, phase));
  };

  // Calculate which word to reveal
  const getWordRevealProgress = (index) => {
    const wordCount = wordBoxes.length;
    const wordStart = (index / wordCount) * 0.6;
    const wordEnd = ((index + 1) / wordCount) * 0.6;

    if (progress < wordStart) return 0;
    if (progress > wordEnd) return 1;

    return (progress - wordStart) / (wordEnd - wordStart);
  };

  const totalTicks = 120;
  const radius = 38;
  const cx = 45;
  const cy = 40;

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[50vh] md:min-h-[100vh] lg:min-h-[150vh]">
      {/* Sticky container */}
      <div className="sticky top-0 left-0 right-0 flex items-center justify-center">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          {/* SVG Animation Container */}
          <div className="relative w-full aspect-[16/9] max-h-[800px] mx-auto">
            <svg
              viewBox="0 0 90 90"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet">
              {/* Circle drawn in two halves - FIXED: Start from position 1 */}
              <g>
                {Array.from({ length: totalTicks }).map((_, i) => {
                  // Angle from -90deg (TOP) - START FROM POSITION 1
                  const angle = (i / totalTicks) * Math.PI * 2 - Math.PI / 2;

                  const isLong = i % 4 === 0;
                  const tickLength = isLong ? 4.4 : 3.4;

                  const x1 = cx + Math.cos(angle) * (radius - tickLength);
                  const y1 = cy + Math.sin(angle) * (radius - tickLength);
                  const x2 = cx + Math.cos(angle) * radius;
                  const y2 = cy + Math.sin(angle) * radius;

                  /**
                   * Normalize angle to 0 → 2π
                   * LEFT = π
                   * RIGHT = 0 / 2π
                   */
                  const norm = (angle + Math.PI * 2) % (Math.PI * 2);

                  let revealIndex = null;

                  /**
                   * TOP HALF (FROM LEFT TO RIGHT)
                   * LEFT (π) → TOP (3π/2 wrap) → RIGHT (0)
                   * Anti-clockwise
                   */
                  if (norm >= Math.PI && norm <= Math.PI * 2) {
                    // π → 2π maps to 0 → 1
                    revealIndex = (norm - Math.PI) / Math.PI;
                  } else {
                    /**
                     * BOTTOM HALF (FROM RIGHT TO LEFT)
                     * RIGHT (0) → BOTTOM (π/2) → LEFT (π)
                     * Clockwise
                     */
                    // 0 → π maps to 0 → 1
                    revealIndex = norm / Math.PI;
                  }

                  /**
                   * FIX: Start ticks from 0, not 0.55
                   * Both halves start at the same time
                   */
                  if (progress < 0.01) {
                    return null; // Don't render ticks at all when progress is near 0
                  }
                  const tickProgress = Math.max(
                    0,
                    Math.min(1, (progress - 0.1) / 0.7), // Start earlier, end later
                  );

                  // Check if this tick should be visible
                  const shouldShow = tickProgress >= revealIndex;

                  return (
                    <motion.line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="rgba(170,170,170,0.75)"
                      strokeWidth={isLong ? 0.28 : 0.16}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: shouldShow ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.15, // Faster transition
                        ease: "easeOut",
                      }}
                    />
                  );
                })}
              </g>

              {/* Word Boxes - Keep your original placement */}
              {wordBoxes.map((box, index) => {
                const revealProgress = getWordRevealProgress(index);

                // Keep your original tighten logic
                const tighten = revealProgress * 1.2;

                return (
                  <g key={index}>
                    {/* box stays same */}
                    <rect
                      x={box.x}
                      y={box.y}
                      width={box.width}
                      height={box.height}
                      fill="rgba(30, 30, 30, 0.6)"
                      stroke="rgba(80, 80, 80, 0.5)"
                      strokeWidth="0.15"
                      rx="0.4"
                      style={{ opacity: 1 - revealProgress }}
                    />

                    {/* ✅ WORD - Keep your original position */}
                    <motion.text
                      x={box.x + box.width / 2 - tighten}
                      y={box.y + box.height / 2 + 0.8}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="white"
                      fontSize="4.6"
                      fontWeight="400"
                      fontFamily="'Stoke', serif"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: revealProgress }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        delay: index * 0.03, // Stagger words
                      }}>
                      {box.text}
                    </motion.text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsAnimated;
