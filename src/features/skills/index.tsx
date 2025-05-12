"use client";

import { useRef } from "react";
import { SkillStats } from "./skill-stats";
import { DevelopmentProcess } from "./development-process";

export function Skills() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <div id="skills" className="relative overflow-hidden" ref={sectionRef}>
      <SkillStats />
      <DevelopmentProcess />
    </div>
  );
}
