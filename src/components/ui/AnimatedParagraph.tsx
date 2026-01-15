import { useEffect, useRef, useState } from "react";

export default function AnimatedParagraph({ text }) {
  const ref = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const timeoutRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // ENTER viewport → animate
        if (entry.isIntersecting) {
          timeoutRefs.current.forEach(clearTimeout);
          timeoutRefs.current = [];

          text.split(" ").forEach((_, i) => {
            const t = setTimeout(() => {
              setActiveIndex(i);
            }, i * 40);
            timeoutRefs.current.push(t);
          });
        }
        // EXIT viewport → reset
        else {
          timeoutRefs.current.forEach(clearTimeout);
          timeoutRefs.current = [];
          setActiveIndex(-1);
        }
      },
      {
        threshold: 0.5, // 50% visible
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      timeoutRefs.current.forEach(clearTimeout);
      observer.disconnect();
    };
  }, [text]);

  return (
    <p
      ref={ref}
      className="lg:max-w-[60vw] text-base sm:text-2xl md:text-xl font-outfit leading-10 md:leading-relaxed">
      {text.split(" ").map((word, index) => (
        <span
          key={index}
          className={`inline-block mr-1 transition-colors duration-300 ${
            index <= activeIndex ? "text-black" : "text-gray-400"
          }`}>
          {word}
        </span>
      ))}
    </p>
  );
}
