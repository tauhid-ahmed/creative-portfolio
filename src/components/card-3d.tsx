"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

// Modern themes using shadcn color tokens
type Theme = "light" | "dark" | "glass" | "accent" | "muted";

interface Card3DProps extends React.ComponentProps<typeof motion.div> {
  children: React.ReactNode;
  intensity?: number;
  theme?: Theme;
  border?: boolean;
  shadow?: boolean;
  glare?: boolean;
  float?: boolean;
  hoverScale?: number;
  disabled?: boolean;
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "rounded";
}

// Spring configurations
const SPRING_CONFIG = { damping: 30, stiffness: 250, mass: 0.5 };
const FLOAT_ANIMATION = {
  y: [0, -8, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut",
  },
};

export default function Card3D({
  children,
  className,
  intensity = 8,
  theme = "glass",
  border = true,
  shadow = true,
  glare = true,
  float = false,
  hoverScale = 1.01,
  disabled = false,
  radius = "xl",

  onClick,
  ...props
}: Card3DProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for 3D effect
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale = useMotionValue(1);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  // Spring animations for smooth transitions
  const springRotateX = useSpring(rotateX, SPRING_CONFIG);
  const springRotateY = useSpring(rotateY, SPRING_CONFIG);
  const springScale = useSpring(scale, SPRING_CONFIG);

  // Z-transform for depth effect
  const z = useTransform([springRotateX, springRotateY], ([rotX, rotY]) => {
    if (!isHovered) return 0;
    const absoluteRotation =
      Math.abs(rotX as number) + Math.abs(rotY as number);
    return Math.min(20, absoluteRotation / 2);
  });

  // Event handlers
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current || disabled) return;

    const rect = cardRef.current.getBoundingClientRect();

    // Calculate mouse position relative to card center
    const centerX = (e.clientX - rect.left) / rect.width - 0.5;
    const centerY = (e.clientY - rect.top) / rect.height - 0.5;

    // Update motion values
    rotateX.set(-centerY * intensity);
    rotateY.set(centerX * intensity);
    scale.set(hoverScale);

    // Update glare position
    if (glare) {
      glareX.set(((e.clientX - rect.left) / rect.width) * 100);
      glareY.set(((e.clientY - rect.top) / rect.height) * 100);
    }
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    setIsHovered(false);
  }

  function handleMouseEnter() {
    if (!disabled) {
      setIsHovered(true);
    }
  }

  // Theme configurations
  const themeClasses = {
    light: "bg-card text-card-foreground border-border/10",
    dark: "bg-card/95 text-card-foreground border-border/20 dark:bg-card/40",
    glass:
      "bg-background/30 backdrop-blur-md border-white/10 dark:bg-background/10",
    accent: "bg-primary/10 text-primary-foreground border-primary/20",
    muted: "bg-muted text-muted-foreground border-muted-foreground/20",
  };

  // Shadow classes
  const shadowClasses = shadow
    ? cn(
        "shadow-lg",
        isHovered && "shadow-xl",
        theme === "accent" && "shadow-primary/10",
        theme === "dark" && "shadow-black/20"
      )
    : "";

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden transition-colors duration-300",
        radius === "none" ? "rounded-none" : `rounded-${radius}`,
        themeClasses[theme],
        shadowClasses,
        className
      )}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1200,
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
      animate={float ? FLOAT_ANIMATION : {}}
      {...props}
    >
      {/* Card content with relative positioning */}
      <div className="relative z-10">{children}</div>

      {/* Border effect */}
      {border && isHovered && (
        <motion.div
          className={cn(
            "absolute inset-0 pointer-events-none",
            theme === "accent"
              ? "border border-primary/30"
              : "border border-border/30"
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}

      {/* Glare effect */}
      {glare && isHovered && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
          <div
            className="absolute pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
              width: "200%",
              height: "200%",
              top: `${glareY.get() - 100}%`,
              left: `${glareX.get() - 100}%`,
            }}
          />
        </div>
      )}

      {/* Ambient light effect - subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
}
