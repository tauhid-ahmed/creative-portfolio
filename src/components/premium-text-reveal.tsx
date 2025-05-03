"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface PremiumTextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  gradient?: boolean;
}

export default function PremiumTextReveal({
  text,
  className = "",
  delay = 0,
  duration = 0.05,
  once = true,
  threshold = 0.2,
  as: Component = "h2",
  gradient = false,
}: PremiumTextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  // Split text into words and then characters
  const words = text.split(" ");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: duration,
        delayChildren: delay * i,
      },
    }),
  };

  const wordVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: duration / 2,
      },
    },
  };

  const characterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotate: 5,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Component className={gradient ? "gradient-text" : ""}>
        {words.map((word, wordIndex) => (
          <motion.span
            key={`word-${wordIndex}`}
            className="inline-block mr-[0.25em] last:mr-0"
            variants={wordVariants}
          >
            {Array.from(word).map((char, charIndex) => (
              <motion.span
                key={`char-${charIndex}`}
                className="inline-block"
                variants={characterVariants}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        ))}
      </Component>
    </motion.div>
  );
}
