"use client";

import type React from "react";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
  offset?: [string, string];
}

export default function ParallaxSection({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
  offset = ["start end", "end start"],
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  // Calculate transform values based on direction
  const getTransformValues = () => {
    const distance = 100 * speed;

    switch (direction) {
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

  const yProgress = useTransform(scrollYProgress, [0, 1], [from, to]);
  const xProgress = useTransform(scrollYProgress, [0, 1], [from, to]);

  const y = direction === "up" || direction === "down" ? yProgress : 0;

  const x = direction === "left" || direction === "right" ? xProgress : 0;

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y, x, opacity }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}
