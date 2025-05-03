"use client";

import { useRef, useState, useMemo } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { skills } from "@/data/portfolio-data";
import ParallaxSection from "@/components/parallax-section";
import Card3D from "@/components/card-3d";
import { Badge } from "@/components/ui/badge";
import dynamic from "next/dynamic";

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState<string>("Frontend");

  // Skill proficiency data (for progress bars)
  const skillProficiency = useMemo(
    () => ({
      React: 95,
      "Next.js": 90,
      TypeScript: 85,
      "Tailwind CSS": 95,
      "Framer Motion": 80,
      "Three.js": 70,
      Figma: 85,
      "UI/UX Design": 80,
      GSAP: 75,
      "CSS Animations": 90,
      "Responsive Design": 95,
      "Web Vitals": 85,
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
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-25" />
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10" />

      {/* Animated background blobs */}
      <motion.div
        className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
        animate={{
          x: [0, 20, 0],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full bg-purple-400/10 blur-3xl"
        animate={{
          x: [0, -20, 0],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="container px-4 md:px-6 relative z-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 inline-block mb-4">
            My Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and skills that I use to
            bring ideas to life
          </p>
        </motion.div>

        {/* Modern Skills Navigation */}
        <div className="mb-12">
          <div className="flex justify-center mb-8 overflow-x-auto pb-2 hide-scrollbar">
            <div className="flex gap-2 p-1 bg-background/50 backdrop-blur-md border border-border/50 rounded-full">
              {skills.map((skill) => {
                // Dynamically import the icon
                const IconComponent = dynamic(
                  () =>
                    import("lucide-react").then((mod) => {
                      const Icon = mod[skill.icon as keyof typeof mod];
                      return { default: Icon };
                    }),
                  { ssr: false }
                );

                return (
                  <button
                    key={skill.category}
                    onClick={() => setActiveCategory(skill.category)}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === skill.category
                        ? "text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
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
                    <IconComponent className="h-4 w-4" />
                    <span>{skill.category}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {/* Skill details */}
              <Card3D className="modern-card p-6 md:p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${activeSkill.color} text-white`}
                  >
                    {(() => {
                      const IconComponent = dynamic(
                        () =>
                          import("lucide-react").then((mod) => {
                            const Icon =
                              mod[activeSkill.icon as keyof typeof mod];
                            return { default: Icon };
                          }),
                        { ssr: false }
                      );
                      return <IconComponent className="h-6 w-6" />;
                    })()}
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">
                    {activeSkill.category}
                  </h3>
                </div>

                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    {activeSkill.category === "Frontend"
                      ? "Building responsive, accessible, and performant user interfaces with modern frameworks and libraries."
                      : activeSkill.category === "UI Frameworks"
                      ? "Utilizing component libraries and design systems to create consistent and beautiful interfaces."
                      : activeSkill.category === "Animation"
                      ? "Creating engaging and interactive animations to enhance user experience and bring interfaces to life."
                      : activeSkill.category === "Design"
                      ? "Designing intuitive and visually appealing user interfaces with a focus on user experience."
                      : activeSkill.category === "Performance"
                      ? "Optimizing web applications for speed, efficiency, and the best possible user experience."
                      : "Building responsive and touch-friendly interfaces for mobile devices and applications."}
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
                        skillProficiency[item as keyof typeof skillProficiency]
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
        </div>

        {/* Tech stack showcase */}
        <div className="mt-20">
          <ParallaxSection speed={0.2} direction="up">
            <h3 className="text-xl font-bold mb-8 gradient-text text-center">
              My Tech Stack
            </h3>
          </ParallaxSection>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
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
              "Jest",
              "Vercel",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="modern-card flex items-center justify-center p-4 h-16 text-center"
              >
                <span className="font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Development process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <Card3D className="modern-card p-8">
            <h3 className="text-xl font-bold mb-6 gradient-text text-center">
              My Development Process
            </h3>

            <div className="relative">
              {/* Process steps */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />

              <div className="space-y-12 relative">
                {[
                  {
                    title: "Planning & Research",
                    description:
                      "Understanding project requirements, researching solutions, and planning architecture.",
                    icon: "FileSearch",
                  },
                  {
                    title: "Design & Prototyping",
                    description:
                      "Creating wireframes, designing UI components, and building interactive prototypes.",
                    icon: "Palette",
                  },
                  {
                    title: "Development",
                    description:
                      "Writing clean, maintainable code with modern frameworks and best practices.",
                    icon: "Code",
                  },
                  {
                    title: "Testing & Optimization",
                    description:
                      "Ensuring cross-browser compatibility, accessibility, and performance optimization.",
                    icon: "Gauge",
                  },
                  {
                    title: "Deployment & Maintenance",
                    description:
                      "Deploying to production, monitoring performance, and providing ongoing support.",
                    icon: "Rocket",
                  },
                ].map((step, index) => {
                  const IconComponent = dynamic(
                    () =>
                      import("lucide-react").then((mod) => {
                        const Icon =
                          mod[step.icon as keyof typeof mod] || mod.Code;
                        return { default: Icon };
                      }),
                    { ssr: false }
                  );

                  return (
                    <div key={step.title} className="relative">
                      <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                        <div
                          className={`md:text-right ${
                            index % 2 === 1 ? "md:order-2" : ""
                          }`}
                        >
                          <h4 className="text-lg font-bold mb-2">
                            {step.title}
                          </h4>
                          <p className="text-muted-foreground">
                            {step.description}
                          </p>
                        </div>

                        <div
                          className={`flex ${
                            index % 2 === 0
                              ? "md:justify-start"
                              : "md:justify-end"
                          } mt-4 md:mt-0`}
                        >
                          <div className="relative">
                            {/* Circle indicator on timeline */}
                            <div className="hidden md:block absolute top-1/2 left-1/2 w-6 h-6 rounded-full bg-background border-2 border-primary -translate-x-1/2 -translate-y-1/2" />

                            {/* Icon circle */}
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20">
                              <IconComponent className="h-8 w-8 text-primary" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card3D>
        </motion.div>
      </div>
    </section>
  );
}
