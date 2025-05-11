"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import { SkillStats } from "./skill-stats";
import { TechStackShowcase } from "./tech-showcase";
import { DevelopmentProcess } from "./development-process";

export function Skills() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <div id="skills" className="relative overflow-hidden" ref={sectionRef}>
      {/* Modern Skills Navigation */}
      <SkillStats />
      {/* Tech stack showcase */}
      <TechStackShowcase />
      {/* Development process */}
      <DevelopmentProcess isInView={isInView} />
    </div>
  );
}
