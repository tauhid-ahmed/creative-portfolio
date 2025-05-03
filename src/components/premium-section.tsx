"use client";

import type React from "react";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";

interface PremiumSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  threshold?: number;
  parallaxIntensity?: number;
  revealDirection?: "up" | "down" | "left" | "right";
  darkBackground?: boolean;
}

export default function PremiumSection({
  children,
  id,
  className = "",
  threshold = 0.2,
  parallaxIntensity = 0.1,
  revealDirection = "up",
  darkBackground = false,
}: PremiumSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: threshold });
  const [isHovered, setIsHovered] = useState(false);

  // Parallax effect on scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Calculate transform values based on direction
  const getTransformValues = () => {
    const distance = 100 * parallaxIntensity;

    switch (revealDirection) {
      case "up":
        return [distance, 0];
      case "down":
        return [-distance, 0];
      case "left":
        return [0, distance];
      case "right":
        return [0, -distance];
      default:
        return [distance, 0];
    }
  };

  const [from, to] = getTransformValues();

  const shouldTransformY =
    revealDirection === "up" || revealDirection === "down";
  const shouldTransformX =
    revealDirection === "left" || revealDirection === "right";

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldTransformY ? [from, to] : [0, 0]
  );

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    shouldTransformX ? [from, to] : [0, 0]
  );

  // Background animation values
  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 0.05, 0.05, 0]
  );

  const backgroundScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.95, 1, 0.95]
  );

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`relative py-24 md:py-32 overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Premium animated background */}
      <motion.div
        className={`absolute inset-0 ${
          darkBackground
            ? "bg-primary/5"
            : "bg-gradient-to-b from-background via-background/95 to-background"
        }`}
        style={{
          opacity: backgroundOpacity,
          scale: backgroundScale,
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-25" />

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10" />

      {/* Animated background blobs */}
      <motion.div
        className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
        animate={
          isHovered
            ? {
                x: [0, 20, 0],
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.1, 1],
              }
            : {}
        }
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full bg-purple-400/10 blur-3xl"
        animate={
          isHovered
            ? {
                x: [0, -20, 0],
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.1, 1],
              }
            : {}
        }
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Content with reveal animation */}
      <motion.div
        className="container px-4 md:px-6 relative z-20"
        style={{ x, y }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
