import Card3D from "@/components/card-3d";
import Container from "@/components/layout/container";
import {
  Section,
  SectionHeader,
  SectionInner,
  SectionTitle,
} from "@/components/section";
import { motion } from "motion/react";
import * as Icons from "@/components/icons";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiZod,
  SiRedux,
  SiReactquery,
  SiGreensock,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGit,
  SiJest,
  SiVitest,
  SiBootstrap,
  SiMui,
  SiChakraui,
  SiFigma,
  SiRadixui,
  SiVercel, // placeholder for Hono
} from "react-icons/si";
import { cloneElement } from "react";
import { cn } from "@/lib/utils";

export const techWithIcons = [
  // Frontend Core
  { name: "React", icon: <SiReact className="text-sky-500" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
  { name: "Zod", icon: <SiZod className="text-purple-600" /> }, // unofficial, use fallback if needed
  { name: "React Hook Form", icon: <SiReact className="text-rose-500" /> }, // reuse React icon
  { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
  { name: "Tanstack Query", icon: <SiReactquery className="text-red-500" /> },
  { name: "Motion for React", icon: <SiFramer className="text-pink-500" /> },
  { name: "GSAP", icon: <SiGreensock className="text-green-600" /> },
  { name: "React Fiber", icon: <SiReact className="text-blue-400" /> }, // same as React

  // Backend & API
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-700" /> },
  { name: "Hono", icon: <SiVercel className="text-gray-500" /> }, // no official icon yet
  { name: "REST API", icon: <SiGraphql className="text-indigo-500" /> }, // fallback
  { name: "GraphQL", icon: <SiGraphql className="text-pink-600" /> },

  // Database & ORM
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  {
    name: "Prisma",
    icon: <SiPrisma className="text-gray-500 dark:text-white" />,
  },
  { name: "Drizzle ORM", icon: <SiPrisma className="text-emerald-500" /> }, // fallback, no official icon

  // Testing
  { name: "Vitest", icon: <SiVitest className="text-lime-600" /> },
  { name: "Jest", icon: <SiJest className="text-red-600" /> },

  // UI Libraries
  { name: "ShadCN UI", icon: <SiRadixui className="text-gray-500" /> },
  { name: "Material UI", icon: <SiMui className="text-blue-500" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
  { name: "Chakra UI", icon: <SiChakraui className="text-teal-500" /> },
  { name: "Radix UI", icon: <SiRadixui className="text-gray-500" /> },

  // Tools & Design
  { name: "Git", icon: <SiGit className="text-orange-500" /> },
  { name: "Figma", icon: <SiFigma className="text-violet-500" /> },
];

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

export function TechStackShowcase({ isInView }: { isInView: boolean }) {
  return (
    <Section>
      <SectionInner>
        <SectionHeader>
          <SectionTitle>My Tech Stack</SectionTitle>
        </SectionHeader>
        <Container size="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap gap-3 justify-center items-center"
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
                    className="size-full animate-gradient-border absolute -translate-x-1/2 top-1/2 left-1/2 -translate-y-1/2 bg-[linear-gradient(var(--gradient-animation),transparent_50%,var(--primary)_50%)] opacity-50"
                    style={{
                      animationDelay: `${index * 0.05}s`,
                      animationDirection:
                        index % 2 === 0 ? "reverse" : "normal",
                    }}
                  ></div>
                  <Card3D className="modern-card md:px-4 py-2" radius="lg">
                    <span className="font-medium flex gap-1 items-center justify-center text-center text-base">
                      {cloneElement(tech.icon, {
                        className: cn("size-5", tech.icon.props.className),
                      })}
                      {tech.name}
                    </span>
                  </Card3D>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </SectionInner>
    </Section>
  );
}
