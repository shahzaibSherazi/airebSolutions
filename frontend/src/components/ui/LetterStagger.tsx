import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ text, active, completed, onComplete, className }) => {
  const [index, setIndex] = useState(0);
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    if (!active) return;

    let timer;

    if (index < text.length) {
      timer = setTimeout(() => {
        setLetters((prev) => [...prev, text[index]]);
        setIndex(index + 1);
      }, 120);
    } else {
      setTimeout(() => {
        onComplete();
      }, 600);
    }

    return () => clearTimeout(timer);
  }, [index, active]);

  useEffect(() => {
    if (!active && !completed) {
      setLetters([]);
      setIndex(0);
    }
  }, [active, completed]);

  return (
    <span className={`inline-flex ${className}`}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="inline-block">
          {letter}
        </motion.span>
      ))}

      {active && (
        <motion.span
          className="ml-1 inline-block"
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}>
          |
        </motion.span>
      )}
    </span>
  );
};

export default AnimatedText;
