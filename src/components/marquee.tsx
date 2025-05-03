"use client";

import { useState } from "react";

import type React from "react";

import { useRef, useEffect } from "react";
import { motion, useSpring, useAnimationFrame } from "motion/react";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export default function Marquee({
  children,
  direction = "left",
  speed = 50,
  pauseOnHover = true,
  className = "",
}: MarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const x = useRef(0);
  const springX = useSpring(0, { damping: 50, stiffness: 400 });

  useEffect(() => {
    if (!contentRef.current || !marqueeRef.current) return;

    const calculateWidths = () => {
      if (contentRef.current && marqueeRef.current) {
        const contentWidth = contentRef.current.offsetWidth;
        const containerWidth = marqueeRef.current.offsetWidth;

        setContentWidth(contentWidth);
        setContainerWidth(containerWidth);

        // Calculate duration based on content width and speed
        // The larger the content, the longer the duration
        setDuration((contentWidth / speed) * 10);
      }
    };

    calculateWidths();

    const resizeObserver = new ResizeObserver(calculateWidths);
    resizeObserver.observe(contentRef.current);
    resizeObserver.observe(marqueeRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [speed, children]);

  useAnimationFrame((_, delta) => {
    if (isPaused || !contentWidth || !containerWidth) return;

    // Calculate how much to move based on delta time and speed
    const moveAmount = (delta / 1000) * speed;

    // Update position based on direction
    if (direction === "left") {
      x.current -= moveAmount;
      // Reset position when content has moved completely out of view
      if (x.current < -contentWidth) {
        x.current = 0;
      }
    } else {
      x.current += moveAmount;
      // Reset position when content has moved completely out of view
      if (x.current > 0) {
        x.current = -contentWidth;
      }
    }

    springX.set(x.current);
  });

  return (
    <div
      ref={marqueeRef}
      className={`overflow-hidden relative ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        ref={contentRef}
        style={{ x: springX }}
        className="flex whitespace-nowrap"
      >
        {children}
        {/* Duplicate content for seamless looping */}
        {children}
      </motion.div>
    </div>
  );
}
