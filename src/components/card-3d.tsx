"use client";

import { useState, useRef, memo, useCallback, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils"; // Assuming shadcn's utility

// Types for different effects
type GlareProps = {
  x: any; // MotionValue type
  y: any; // MotionValue type
  opacity?: number;
  size?: number;
  color?: string;
};

type BorderProps = {
  color?: string;
  thickness?: number;
  opacity?: number;
};

type ShadowProps = {
  color?: string;
  intensity?: number;
  distance?: number;
};

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  border?: boolean | BorderProps;
  shadow?: boolean | ShadowProps;
  glare?: boolean | GlareProps;
  disabled?: boolean;
  borderRadius?: string;
  perspective?: number;
  onClick?: () => void;
}

// Glare component for better modularity
const Glare = memo(function Glare({
  x,
  y,
  opacity = 0.2,
  size = 200,
  color = "255, 255, 255",
}: GlareProps) {
  const glareStyle = {
    background: `radial-gradient(circle at center, rgba(${color}, ${opacity}) 0%, transparent 50%)`,
    width: `${size}%`,
    height: `${size}%`,
    top: `${y.get() - size / 2}%`,
    left: `${x.get() - size / 2}%`,
    transform: "translate(0, 0)",
  };

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        borderRadius: "inherit",
        zIndex: 2,
        overflow: "hidden",
      }}
    >
      <div className="absolute pointer-events-none" style={glareStyle} />
    </motion.div>
  );
});

const Card3D = memo(function Card3D({
  children,
  className = "",
  intensity = 10,
  border = true,
  shadow = true,
  glare = true,
  disabled = false,
  borderRadius = "inherit",
  perspective = 1000,
  onClick,
}: Card3DProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Use motion values for better performance
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Add spring physics for smoother animations
  const springConfig = useMemo(
    () => ({ damping: 20, stiffness: 300, mass: 0.8 }),
    []
  );
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  // Glare position with spring physics
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const springGlareX = useSpring(glareX, springConfig);
  const springGlareY = useSpring(glareY, springConfig);

  // Enhance with additional motion values for more dynamic effects
  const scale = useMotionValue(1);
  const springScale = useSpring(scale, {
    damping: 25,
    stiffness: 400,
    mass: 0.5,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
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

      // Slightly increase scale on hover for more dynamic effect
      scale.set(1.02);
    },
    [disabled, intensity, rotateX, rotateY, glareX, glareY, scale]
  );

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    setIsHovered(false);
  }, [rotateX, rotateY, scale]);

  const handleMouseEnter = useCallback(() => {
    if (!disabled) {
      setIsHovered(true);
    }
  }, [disabled]);

  // Optimize z transform based on hover state
  const z = useTransform(
    [springRotateX, springRotateY],
    ([latestRotateX, latestRotateY]) => {
      const absoluteRotation =
        Math.abs(latestRotateX as number) + Math.abs(latestRotateY as number);
      return isHovered ? Math.min(30, absoluteRotation / 2) : 0;
    }
  );

  // Process border props
  const borderProps = useMemo(() => {
    if (typeof border === "object") {
      return {
        color: border.color || "rgba(255, 255, 255, 0.2)",
        thickness: border.thickness || 1,
        opacity: border.opacity || 1,
      };
    }

    return {
      color: "rgba(255, 255, 255, 0.2)",
      thickness: 1,
      opacity: 1,
    };
  }, [border]);

  // Process shadow props
  const shadowProps = useMemo(() => {
    if (typeof shadow === "object") {
      return {
        color: shadow.color || "rgba(0, 0, 0, 0.2)",
        intensity: shadow.intensity || 0.3,
        distance: shadow.distance || 30,
      };
    }

    return {
      color: "rgba(0, 0, 0, 0.2)",
      intensity: 0.3,
      distance: 30,
    };
  }, [shadow]);

  // Calculate proper shadow values
  const shadowValues = useMemo(() => {
    const { color, intensity, distance } = shadowProps;
    const hoverShadow = `0 ${distance}px ${
      distance * 2
    }px -15px ${color.replace(/[\d.]+\)$/g, `${intensity})`)}`;
    const normalShadow = `0 20px 40px -20px ${color.replace(
      /[\d.]+\)$/g,
      `${intensity * 0.7})`
    )}`;
    return { hoverShadow, normalShadow };
  }, [shadowProps]);

  // Process glare props
  const glareProps = useMemo(() => {
    if (typeof glare === "object") {
      return {
        ...glare,
        x: springGlareX,
        y: springGlareY,
      };
    }

    return {
      x: springGlareX,
      y: springGlareY,
      opacity: 0.15,
      size: 200,
      color: "255, 255, 255",
    };
  }, [glare, springGlareX, springGlareY]);

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative transition-colors duration-300 rounded-2xl overflow-hidden",
        className
      )}
      style={{
        transformStyle: "preserve-3d",
        perspective: perspective,
        willChange: "transform",
        rotateX: springRotateX,
        rotateY: springRotateY,
        z,
        scale: springScale,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {/* Card content */}
      <div className="relative z-10">{children}</div>

      {/* Border effect */}
      {border && isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            border: `${borderProps.thickness}px solid ${borderProps.color}`,
            borderRadius: "inherit",
            zIndex: 1,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: borderProps.opacity }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}

      {/* Subtle inner highlight */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/10 to-transparent"
          style={{
            borderRadius: "inherit",
            zIndex: 1,
            opacity: 0,
          }}
          animate={{ opacity: 0.07 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Shadow effect */}
      {shadow && (
        <motion.div
          className="absolute -inset-2 pointer-events-none"
          style={{
            boxShadow: shadowValues.normalShadow,
            borderRadius: "inherit",
            zIndex: -1,
            transform: "translateZ(-30px)",
          }}
          animate={{
            boxShadow: isHovered
              ? shadowValues.hoverShadow
              : shadowValues.normalShadow,
          }}
          transition={{ duration: 0.2 }}
        />
      )}

      {/* Glare effect */}
      {glare && isHovered && <Glare {...glareProps} />}
    </motion.div>
  );
});

export default Card3D;
