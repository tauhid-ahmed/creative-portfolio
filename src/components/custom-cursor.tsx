"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorVariant, setCursorVariant] = useState("default");

  // Use refs for better performance
  const cursorRef = useRef<HTMLDivElement>(null);

  // Use motion values for smoother animations
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Add spring physics for smoother following
  const springConfig = { damping: 28, stiffness: 500, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable custom cursor on desktop
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;

    const mouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const mouseEnter = () => setIsVisible(true);
    const mouseLeave = () => setIsVisible(false);

    // Handle interactive elements
    const handleLinkEnter = () => setCursorVariant("link");
    const handleLinkLeave = () => setCursorVariant("default");

    window.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseenter", mouseEnter);
    document.addEventListener("mouseleave", mouseLeave);

    // Add event listeners to all interactive elements
    const links = document.querySelectorAll("a, button, .interactive");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkEnter);
      link.addEventListener("mouseleave", handleLinkLeave);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseenter", mouseEnter);
      document.removeEventListener("mouseleave", mouseLeave);

      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkEnter);
        link.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] bg-primary/10 border-primary/40 rounded-full pointer-events-none hidden lg:block mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          height: cursorVariant === "default" ? 32 : 48,
          width: cursorVariant === "default" ? 32 : 48,
          willChange: "transform",
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.1,
        }}
      />

      {/* Cursor dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] rounded-full pointer-events-none hidden lg:block bg-primary"
        style={{
          x: cursorX,
          y: cursorY,
          height: 4,
          width: 4,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
        }}
      />
    </>
  );
}
