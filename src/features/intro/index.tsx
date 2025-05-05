"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Container } from "@/components/layout/container";
import IntroInformation from "./intro-information";
import { IntroImage } from "./intro-image";
import { Section } from "@/components/layout/section";

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
      <Section id="home" ref={sectionRef} className="overflow-hidden">
        <BackgroundAnimations />
        <div className="min-h-screen py-20 flex items-center justify-center">
          <Container>
            <motion.div
              ref={contentRef}
              style={{ y, opacity, scale }}
              className="grid lg:grid-cols-2 gap-4 items-center"
            >
              <IntroInformation />
              <IntroImage rotate={rotate} />
            </motion.div>
          </Container>
        </div>
      </Section>
    </>
  );
}

export default function BackgroundAnimations() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/10 to-background z-0" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Static blobs with CSS-only animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-10">
        <div className="absolute w-72 h-72 rounded-full bg-primary top-1/6 left-1/5 blur-3xl animate-blob1" />
        <div className="absolute w-64 h-64 rounded-full bg-primary top-2/3 left-2/3 blur-3xl animate-blob2" />
        <div className="absolute w-80 h-80 rounded-full bg-primary top-1/2 left-1/2 blur-3xl animate-blob3" />
      </div>

      {/* CSS animation keyframes */}
      <style jsx>{`
        @keyframes blob1 {
          0% {
            transform: translate(-50%, -50%) translate(-400px, -150px);
          }
          100% {
            transform: translate(-50%, -50%) translate(100px, 300px);
          }
        }
        @keyframes blob2 {
          0% {
            transform: translate(-50%, -50%) translate(100px, 200px);
          }
          100% {
            transform: translate(-50%, -50%) translate(-250px, -300px);
          }
        }
        @keyframes blob3 {
          0% {
            transform: translate(-50%, -50%) translate(100px, 100px);
          }
          100% {
            transform: translate(-50%, -50%) translate(-150px, -200px);
          }
        }
        .animate-blob1 {
          animation: blob1 18s infinite alternate linear;
        }
        .animate-blob2 {
          animation: blob2 18s infinite alternate linear;
        }
        .animate-blob3 {
          animation: blob3 18s infinite alternate linear;
        }
      `}</style>
    </div>
  );
}
