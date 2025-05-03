"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Container from "@/components/layout/container";
import IntroInformation from "./intro-information";
import { IntroImage } from "./intro-image";

export function Intro() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["-0.05 start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.7]);
  const rotate = useTransform(scrollYProgress, [0, 0.9], [0, -5]);

  return (
    <>
      <section
        id="home"
        ref={sectionRef}
        className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      >
        <Container>
          {/* Premium background elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background z-0" />

          {/* Modern grid background with enhanced styling */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

          {/* Animated background shapes with premium effects */}

          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-primary/5 backdrop-blur-3xl"
                style={{
                  width: `${Math.random() * 300 + 200}px`,
                  height: `${Math.random() * 300 + 200}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  filter: "blur(80px)",
                }}
                animate={{
                  x: [0, Math.random() * 50 - 25],
                  y: [0, Math.random() * 50 - 25],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: Math.random() * 10 + 15,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <motion.div
            ref={contentRef}
            style={{ y, opacity, scale }}
            className="grid lg:grid-cols-2 gap-4 items-center"
          >
            <IntroInformation />
            <IntroImage rotate={rotate} />
          </motion.div>
        </Container>
      </section>
    </>
  );
}
