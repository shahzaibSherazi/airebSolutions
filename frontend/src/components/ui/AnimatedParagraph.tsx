import { useEffect, useRef, useState } from "react";

export default function AnimatedParagraph({
  text,
  className,
  textColor,
}: {
  text: string;
  className?: string;
  textColor?: string;
}) {
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
            }, i * 100);
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
      },
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      timeoutRefs.current.forEach(clearTimeout);
      observer.disconnect();
    };
  }, [text]);

  return (
    <p ref={ref} className={` ${className}`}>
      {text.split(" ").map((word, index) => (
        <span
          key={index}
          className={`inline-block mr-1 transition-colors duration-300 ${
            index <= activeIndex ? textColor || "text-black" : "text-gray-400"
          }`}>
          {word}
        </span>
      ))}
    </p>
  );
}
