import React, { useEffect, useRef, useState } from "react";

const ChooseUs = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress based on scroll position
      const start = windowHeight * 0.01;
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

  // All words arranged in boxes (brick pattern layout)
  const wordBoxes = [
    // Row 1
    { text: "Creative", x: 8, y: 30, width: 14, height: 6 },
    { text: "websites", x: 23, y: 30, width: 14, height: 6 },
    { text: "are", x: 38, y: 30, width: 8, height: 6 },
    { text: "the", x: 47, y: 30, width: 8, height: 6 },

    // Row 2
    { text: "intersection", x: 10, y: 38, width: 18, height: 6 },
    { text: "of", x: 29, y: 38, width: 6, height: 6 },
    { text: "creativity", x: 36, y: 38, width: 16, height: 6 },
    { text: "and", x: 53, y: 38, width: 8, height: 6 },

    // Row 3
    { text: "technicality", x: 8, y: 46, width: 18, height: 6 },
    { text: "to", x: 27, y: 46, width: 6, height: 6 },
    { text: "form", x: 34, y: 46, width: 10, height: 6 },
    { text: "bespoke", x: 45, y: 46, width: 14, height: 6 },

    // Row 4 (bottom)
    { text: "digital", x: 15, y: 54, width: 12, height: 6 },
    { text: "expierences", x: 28, y: 54, width: 18, height: 6 },
    { text: "that", x: 47, y: 54, width: 8, height: 6 },
    { text: "spark", x: 56, y: 54, width: 10, height: 6 },
  ];

  // Animation phases
  const getPhaseProgress = (start, end) => {
    const phase = (progress - start) / (end - start);
    return Math.max(0, Math.min(1, phase));
  };

  // Phase 3: Circle appears (0.7 - 1.0)
  const circleProgress = getPhaseProgress(0.7, 1.0);

  // Calculate which word to reveal
  const getWordRevealProgress = (index) => {
    const wordCount = wordBoxes.length;
    const wordStart = (index / wordCount) * 0.6;
    const wordEnd = ((index + 1) / wordCount) * 0.6;

    if (progress < wordStart) return 0;
    if (progress > wordEnd) return 1;

    return (progress - wordStart) / (wordEnd - wordStart);
  };

  // Circle properties - centered around all boxes
  const circleCenterX = 35;
  const circleCenterY = 42;
  const circleRadius = 32;

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[250vh] bg-black flex items-start justify-center py-20">
      <div className="sticky top-10 sm:top-20 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* SVG Animation Container */}
        <div className="relative w-full aspect-[16/11] max-h-[700px] mx-auto">
          <svg
            viewBox="0 0 70 80"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet">
            {/* Circle around the boxes area */}
            <g style={{ opacity: circleProgress }}>
              {/* Tick marks around circle */}
              {Array.from({ length: 72 }).map((_, i) => {
                const angle = (i / 72) * Math.PI * 2 - Math.PI / 2;
                const isLong = i % 6 === 0;
                const tickLength = isLong ? 1.5 : 0.8;
                const innerRadius = circleRadius - tickLength;
                const outerRadius = circleRadius;

                const x1 = circleCenterX + Math.cos(angle) * innerRadius;
                const y1 = circleCenterY + Math.sin(angle) * innerRadius;
                const x2 = circleCenterX + Math.cos(angle) * outerRadius;
                const y2 = circleCenterY + Math.sin(angle) * outerRadius;

                const tickDelay = i / 72;
                const tickProgress = Math.max(
                  0,
                  Math.min(1, (circleProgress - tickDelay) * 2.5),
                );

                return (
                  <line
                    key={`tick-${i}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="rgba(180, 180, 180, 0.5)"
                    strokeWidth={isLong ? "0.15" : "0.08"}
                    style={{
                      opacity: tickProgress,
                    }}
                  />
                );
              })}
            </g>

            {/* Word Boxes - Start Empty, Reveal Word by Word */}
            {wordBoxes.map((box, index) => {
              const revealProgress = getWordRevealProgress(index);
              const overlayOpacity = 1 - revealProgress;

              return (
                <g key={index}>
                  {/* Box outline - always visible */}
                  <rect
                    x={box.x}
                    y={box.y}
                    width={box.width}
                    height={box.height}
                    fill="rgba(30, 30, 30, 0.6)"
                    stroke="rgba(80, 80, 80, 0.5)"
                    strokeWidth="0.12"
                    rx="0.3"
                  />

                  {/* Word text */}
                  <text
                    x={box.x + box.width / 2}
                    y={box.y + box.height / 2 + 0.6}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    fontSize="1.8"
                    fontWeight="600"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    style={{
                      opacity: Math.min(1, revealProgress * 2),
                    }}>
                    {box.text}
                  </text>

                  {/* Overlay block that fades out to reveal the word */}
                  <rect
                    x={box.x + 0.3}
                    y={box.y + 0.3}
                    width={box.width - 0.6}
                    height={box.height - 0.6}
                    fill="rgba(30, 30, 30, 0.95)"
                    rx="0.2"
                    style={{
                      opacity: overlayOpacity,
                      transition: "opacity 0.3s ease-out",
                    }}
                  />

                  {/* Glow effect when word is revealed */}
                  {revealProgress > 0.6 && (
                    <rect
                      x={box.x - 0.15}
                      y={box.y - 0.15}
                      width={box.width + 0.3}
                      height={box.height + 0.3}
                      fill="none"
                      stroke="rgba(100, 200, 255, 0.3)"
                      strokeWidth="0.15"
                      rx="0.4"
                      style={{
                        opacity: (revealProgress - 0.6) * 2.5,
                      }}
                    />
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
