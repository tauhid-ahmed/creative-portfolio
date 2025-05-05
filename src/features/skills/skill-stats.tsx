"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { skills } from "@/data/portfolio-data";
import Card3D from "@/components/card-3d";
import { Badge } from "@/components/ui/badge";
import * as Icons from "@/components/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Section,
  SectionDescription,
  SectionHeader,
  SectionInner,
  SectionName,
  SectionTitle,
} from "@/components/layout/section";
import { Container } from "@/components/layout/container";

const icons = {
  Code: <Icons.LayersIcon />,
  Layers: <Icons.PaletteIcon />,
  Sparkles: <Icons.SparklesIcon />,
  Palette: <Icons.CodeIcon />,
  Zap: <Icons.ZapIcon />,
  Smartphone: <Icons.SmartphoneIcon />,
};

export function SkillStats() {
  const [activeCategory, setActiveCategory] = useState<string>(
    "Frontend Development"
  );

  // Skill proficiency data (for progress bars)
  const skillProficiency = useMemo(
    () => ({
      // Frontend & Core
      React: 95,
      "Next.js": 90,
      TypeScript: 85,
      JavaScript: 90,
      HTML5: 95,
      CSS3: 95,
      "Responsive Design": 95,

      // UI Frameworks
      "Tailwind CSS": 95,
      "shadcn/ui": 85,
      "Material UI": 80,
      Bootstrap: 80,
      "Chakra UI": 85,
      "Radix UI": 75,

      // Animation
      "Framer Motion": 80,
      GSAP: 75,
      "CSS Animations": 90,
      "Three.js": 70,
      Lottie: 65,

      // Design
      Figma: 85,
      "Adobe XD": 70,
      Photoshop: 75,
      Illustrator: 70,
      "UI/UX Design": 80,

      // Performance & Tooling
      "Web Vitals": 85,
      Lighthouse: 80,
      Webpack: 80,
      Vite: 85,
      "Code Splitting": 80,

      // Mobile / Cross-platform
      "React Native": 75,
      PWA: 70,
      "App Design": 75,
      "Touch Interfaces": 80,

      // Backend & Auth
      ExpressJS: 80,
      Hono: 85,
      NextAuth: 85,
    }),
    []
  );

  // Get the active skill category
  const activeSkill = useMemo(
    () =>
      skills.find((skill) => skill.category === activeCategory) || skills[0],
    [activeCategory, skills]
  );
  return (
    <Section>
      <SectionInner>
        <motion.div>
          <SectionHeader>
            <SectionName>My Expertise</SectionName>
            <SectionTitle>Skills & Technologies</SectionTitle>
            <SectionDescription>
              A comprehensive toolkit of technologies and skills that I use to
              bring ideas to life
            </SectionDescription>
          </SectionHeader>
        </motion.div>
        <Container size="lg">
          <Tabs className="space-y-6">
            <TabsList className="flex flex-wrap gap-4 p-1 bg-background/50 justify-center backdrop-blur border border-border/50 rounded-full w-full px-6">
              {skills.map((skill) => {
                return (
                  <TabsTrigger
                    key={skill.category}
                    onClick={() => setActiveCategory(skill.category)}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-full text font-medium transition-colors duration-300 ${
                      activeCategory === skill.category
                        ? "text-white!"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    value={""}
                  >
                    {activeCategory === skill.category && (
                      <motion.div
                        layoutId="activeSkillCategory"
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${skill.color} -z-10`}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    {icons[skill.icon as keyof typeof icons]}
                    <span>{skill.category}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
            <TabsContent value="">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid md:grid-cols-2 gap-8 perspective-distant"
                >
                  {/* Skill details */}
                  <Card3D className="modern-card p-6 md:p-8 h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={`flex items-center justify-center size-12 shrink-0 rounded-xl bg-gradient-to-r ${activeSkill.color} text-white`}
                      >
                        {icons[activeSkill.icon as keyof typeof icons]}
                      </div>
                      <h3 className="text-2xl font-bold gradient-text">
                        {activeSkill.category}
                      </h3>
                    </div>

                    <div className="space-y-6">
                      <p className="text-muted-foreground text-base">
                        {activeSkill.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {activeSkill.items.map((item) => (
                          <Badge
                            key={item}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20"
                          >
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card3D>

                  {/* Skill proficiency */}
                  <Card3D className="modern-card p-6 md:p-8 h-full">
                    <h3 className="text-xl font-bold mb-6 gradient-text">
                      Proficiency
                    </h3>
                    <div className="space-y-6">
                      {activeSkill.items
                        .filter(
                          (item) =>
                            skillProficiency[
                              item as keyof typeof skillProficiency
                            ]
                        )
                        .slice(0, 6)
                        .map((skill) => (
                          <div key={skill} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">{skill}</span>
                              <span className="text-sm text-muted-foreground">
                                {
                                  skillProficiency[
                                    skill as keyof typeof skillProficiency
                                  ]
                                }
                                %
                              </span>
                            </div>
                            <div className="relative h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                              <motion.div
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-purple-500 rounded-full"
                                initial={{ width: 0 }}
                                animate={{
                                  width: `${
                                    skillProficiency[
                                      skill as keyof typeof skillProficiency
                                    ]
                                  }%`,
                                }}
                                transition={{ duration: 1, delay: 0.2 }}
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                  </Card3D>
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          </Tabs>
        </Container>
      </SectionInner>
    </Section>
  );
}
