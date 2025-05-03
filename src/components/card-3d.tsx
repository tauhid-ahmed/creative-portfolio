"use client";

import type React from "react";

import { useState, useRef, memo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  border?: boolean;
  shadow?: boolean;
  glare?: boolean;
  disabled?: boolean;
}

const Card3D = memo(function Card3D({
  children,
  className = "",
  intensity = 10,
  border = true,
  shadow = true,
  glare = true,
  disabled = false,
}: Card3DProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Use motion values for better performance
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Add spring physics for smoother animations
  const springConfig = { damping: 20, stiffness: 300, mass: 0.8 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  // Glare position
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const springGlareX = useSpring(glareX, springConfig);
  const springGlareY = useSpring(glareY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || disabled) return;

    const rect = cardRef.current.getBoundingClientRect();

    // Calculate mouse position relative to card center (in percentage)
    const centerX = (e.clientX - rect.left) / rect.width - 0.5;
    const centerY = (e.clientY - rect.top) / rect.height - 0.5;

    // Calculate rotation based on mouse position and intensity
    rotateX.set(-centerY * intensity);
    rotateY.set(centerX * intensity);

    // Calculate glare position
    glareX.set(((e.clientX - rect.left) / rect.width) * 100);
    glareY.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    if (!disabled) {
      setIsHovered(true);
    }
  };

  // Optimize z transform based on hover state
  const z = useTransform(
    [springRotateX, springRotateY],
    ([latestRotateX, latestRotateY]) => {
      const absoluteRotation =
        Math.abs(latestRotateX) + Math.abs(latestRotateY);
      return isHovered ? Math.min(20, absoluteRotation / 2) : 0;
    }
  );

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform",
        rotateX: springRotateX,
        rotateY: springRotateY,
        z,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {/* Card content */}
      <div className="relative z-10">{children}</div>

      {/* Border effect */}
      {border && isHovered && (
        <motion.div
          className="absolute inset-0 rounded-inherit pointer-events-none"
          style={{
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "inherit",
            zIndex: 1,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      {/* Shadow effect */}
      {shadow && (
        <motion.div
          className="absolute -inset-2 rounded-inherit pointer-events-none"
          style={{
            boxShadow: "0 20px 40px -20px rgba(0, 0, 0, 0.2)",
            borderRadius: "inherit",
            zIndex: -1,
            transform: "translateZ(-20px)",
          }}
          animate={{
            boxShadow: isHovered
              ? "0 30px 60px -15px rgba(0, 0, 0, 0.3)"
              : "0 20px 40px -20px rgba(0, 0, 0, 0.2)",
          }}
        />
      )}

      {/* Glare effect */}
      {glare && isHovered && (
        <motion.div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{
            borderRadius: "inherit",
            zIndex: 2,
            overflow: "hidden",
          }}
        >
          <div
            className="absolute w-[200%] h-[200%] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255, 255, 255, 0.2) 0%, transparent 50%)",
              top: `${springGlareY.get() - 100}%`,
              left: `${springGlareX.get() - 100}%`,
              transform: "translate(0, 0)",
            }}
          />
        </motion.div>
      )}
    </motion.div>
  );
});

export default Card3D;
