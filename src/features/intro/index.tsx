"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { IntroImage } from "./intro-image";
import { IntroInformation } from "./intro-information";
import { BackgroundGrid } from "./background-grid";
import { ScrollIndicator } from "./scroll-indicator";
import { SocialHandles } from "@/components/social-handles";

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
        <div className="py-14 sm:py-24 md:py-36">
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1, duration: 0.8 }}
            className="flex flex-col gap-4 items-center py-8"
          >
            <ScrollIndicator />
            <div className="lg:hidden">
              <SocialHandles />
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
