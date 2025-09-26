import React, { useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

const ScrollVelocity = ({
  texts = ["Build fast", "Ship faster"],
  velocity = 100,
  className = "",
}) => {
  const baseX = useMotionValue(0);
  const containerRef = useRef(null);

  // Add a dot after each word
  const repeatedText = texts.map((text) => `${text} •`).join(" ");

  useAnimationFrame((t, delta) => {
    const moveBy = velocity * (delta / 1000);
    baseX.set(baseX.get() - moveBy);

    if (containerRef.current) {
      const width = containerRef.current.scrollWidth / 2; // half the repeated content
      if (Math.abs(baseX.get()) >= width) {
        baseX.set(0);
      }
    }
  });

  return (
    <div className="relative overflow-hidden w-full h-32 md:h-48 lg:h-64 flex items-center bg-[#041a36]">
      <motion.div
        ref={containerRef}
        className={`flex whitespace-nowrap text-center font-bold tracking-wide uppercase ${className}`}
        style={{ x: baseX }}
      >
        {/* Repeat text twice for smooth endless scroll */}
        {[0, 1].map((i) => (
          <span
            key={i}
            className="flex-shrink-0 px-4 text-4xl sm:text-4xl md:text-6xl lg:text-8xl"
            style={{
              WebkitTextStroke: "2px #4b912b",
              color: "transparent",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            {repeatedText}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollVelocity;
