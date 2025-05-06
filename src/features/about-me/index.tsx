"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Container } from "@/components/layout/container";
import Me from "./me";
import { MyStats } from "./my-stats";
import { Information } from "./information";
import { CTA } from "./cta";
import {
  Section,
  SectionDescription,
  SectionHeader,
  SectionContent,
  SectionName,
  SectionTitle,
} from "@/components/layout/section";
import { SectionAnimation } from "@/components/animations/section-animation";

export function AboutMe() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  return (
    <Section id="about" ref={sectionRef}>
      <SectionContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader>
            <SectionName>About Me</SectionName>
            <SectionTitle>Know Me Better</SectionTitle>
            <SectionDescription>
              A passionate frontend developer with a keen eye for design and a
              love for creating seamless user experiences
            </SectionDescription>
          </SectionHeader>
        </motion.div>
        <Container>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <Me isInView={isInView} />
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold gradient-text"
              >
                Frontend Developer & UI/UX Enthusiast
              </motion.h3>
              <Information />
              <div className="hidden lg:block">
                <MyStats />
                <CTA />
              </div>
            </motion.div>
          </div>
          <div className="lg:hidden">
            <MyStats />
            <CTA />
          </div>
        </Container>
      </SectionContent>
    </Section>
  );
}
