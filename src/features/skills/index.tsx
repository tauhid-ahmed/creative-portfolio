"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { SkillStats } from "./skill-stats";
import { TechStackShowcase } from "./tech-showcase";
import { DevelopmentProcess } from "./development-process";

export function Skills() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <div id="skills" className="relative" ref={sectionRef}>
      <BackgroundBlob />
      {/* Modern Skills Navigation */}
      <SkillStats />
      {/* Tech stack showcase */}
      <TechStackShowcase isInView={isInView} />
      {/* Development process */}
      <DevelopmentProcess isInView={isInView} />
    </div>
  );
}

function BackgroundBlob() {
  return (
    <>
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-25" />
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10" />

      {/* Animated background blobs */}
      <motion.div
        className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
        animate={{
          x: [0, 20, 0],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full bg-purple-400/10 blur-3xl"
        animate={{
          x: [0, -20, 0],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
    </>
  );
}
