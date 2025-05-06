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
      <BackgroundBlobs />
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

function BackgroundBlobs() {
  return (
    <>
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-25" />
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10" />

      {/* Animated background blobs */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
        animate={{
          x: [0, -20, 0],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-purple-400/10 blur-3xl"
        animate={{
          x: [0, 20, 0],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
    </>
  );
}
