"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { IntroImage } from "./intro-image";
import { IntroInformation } from "./intro-information";
import { BackgroundGrid } from "./background-grid";

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
      <Section id="home" ref={sectionRef} className="p-0!">
        <BackgroundGrid />
        <div className="py-14 sm:py-24 md:py-36 lg:py-56">
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
