import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RevealText = ({ children, className = "" }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const lines = el.querySelectorAll(".reveal-line");

    gsap.fromTo(
      lines,
      {
        yPercent: 120,
      },
      {
        yPercent: 0,
        duration: 1.8, // slower animation
        ease: "power4.out",
        stagger: 0.25, // slower stagger between lines
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "bottom 60%",
          toggleActions: "play none none reset",
          // 👆 allows replay when section re-enters
        },
      },
    );
  }, []);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
};

export default RevealText;
