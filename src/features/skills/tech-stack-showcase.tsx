import Card3D from "@/components/card-3d";
import Container from "@/components/layout/container";
import {
  Section,
  SectionHeader,
  SectionInner,
  SectionTitle,
} from "@/components/section";
import { motion } from "motion/react";

const tech = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Three.js",
  "Node.js",
  "GraphQL",
  "Figma",
  "Git",
  "Vitest",
  "Material UI",
  "Bootstrap",
  "AuthJS",
  "Prisma",
  "Drizzle",
  "PostgreSQL",
  "RestAPI",
];

export function TechStackShowcase({ isInView }: { isInView: boolean }) {
  return (
    <Section>
      <SectionInner>
        <SectionHeader>
          <SectionTitle>My Tech Stack</SectionTitle>
        </SectionHeader>
        <Container size="md">
          <div className="flex flex-wrap gap-4 justify-center">
            {tech.map((tech, index) => (
              <Card3D
                className="modern-card md:px-8 py-2"
                radius="lg"
                key={index}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <span className="font-medium flex items-center justify-center text-center">
                    {tech}
                  </span>
                </motion.div>
              </Card3D>
            ))}
          </div>
        </Container>
      </SectionInner>
    </Section>
  );
}
