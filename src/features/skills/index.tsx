"use client";

import { useRef, useState, useMemo } from "react";
import { motion, useInView } from "motion/react";
import Container from "@/components/layout/container";
import { SkillStats } from "./skill-stats";
import Marquee from "@/components/marquee";
import { TechStackShowcase } from "./tech-stack-showcase";
import { DevelopmentProcess } from "./development-process";

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
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
      <Container>
        <div className="container px-4 md:px-6 relative z-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 inline-block mb-4">
              My Expertise
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 gradient-text">
              Skills & Technologies
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of technologies and skills that I use to
              bring ideas to life
            </p>
          </motion.div>
          {/* Modern Skills Navigation */}
          <SkillStats />
          {/* Tech stack showcase */}
          <TechStackShowcase isInView={isInView} />
          {/* Development process */}
          <DevelopmentProcess isInView={isInView} />
        </div>
      </Container>
    </section>
  );
}
