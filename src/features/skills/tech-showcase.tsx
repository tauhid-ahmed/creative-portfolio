import Card3D from "@/components/card-3d";
import { Container } from "@/components/layout/container";
import {
  Section,
  SectionHeader,
  SectionContent,
  SectionTitle,
} from "@/components/layout/section";
import { motion } from "motion/react";

import { techWithIcons } from "@/components/icons";

import { cloneElement } from "react";
import { cn } from "@/lib/utils";

const techVariants = {
  hidden: (index: number) => ({
    opacity: 0,
    scale: 5,
    y: 200 + (index + 1) * 100,
    x: index % 2 === 0 ? 100 + (index + 1) * -100 : 100 + (index + 1) * 100,
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  },
};

export function TechStackShowcase() {
  return (
    <Section>
      <SectionContent>
        <SectionHeader>
          <SectionTitle>My Tech Stack</SectionTitle>
        </SectionHeader>
        <Container size="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap gap-2 justify-center items-center"
          >
            {techWithIcons.map((tech, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={techVariants}
                transition={{ duration: 0.2, delay: index * 0.02 }}
              >
                <div className="p-px border rounded-lg relative overflow-hidden perspective-dramatic">
                  <div
                    className="size-full animate-border absolute -translate-x-1/2 top-1/2 left-1/2 -translate-y-1/2 bg-[linear-gradient(var(--gradient-animation),transparent_90%,var(--primary)_90%)] opacity-60"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animationDirection:
                        index % 2 === 0 ? "reverse" : "normal",
                    }}
                  ></div>
                  <Card3D className="modern-card md:px-3 py-2" radius="lg">
                    <span className="font-medium flex gap-1 items-center justify-center text-center text-sm">
                      {cloneElement(tech.icon, {
                        className: cn("size-4", tech.icon.props.className),
                      })}
                      {tech.name}
                    </span>
                  </Card3D>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </SectionContent>
    </Section>
  );
}
