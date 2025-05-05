"use client";

import type React from "react";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code, Layers, Search } from "lucide-react";
import { projects } from "@/data/portfolio-data";
import { ProjectCard } from "./project-card";
import PremiumTextReveal from "@/components/premium-text-reveal";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

type ProjectCategory = "all" | "frontend" | "fullstack" | "design" | "mobile";

export function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category.includes(activeCategory));

  const categories: {
    value: ProjectCategory;
    label: string;
    icon: React.ReactNode;
  }[] = [
    {
      value: "all",
      label: "All Projects",
      icon: <Layers className="h-4 w-4" />,
    },
    {
      value: "frontend",
      label: "Frontend",
      icon: <Code className="h-4 w-4" />,
    },
    {
      value: "fullstack",
      label: "Full Stack",
      icon: <Layers className="h-4 w-4" />,
    },
    { value: "design", label: "Design", icon: <Search className="h-4 w-4" /> },
    { value: "mobile", label: "Mobile", icon: <Layers className="h-4 w-4" /> },
  ];

  return (
    <Section id="projects" ref={sectionRef}>
      <div className="text-center mb-16">
        <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 inline-block mb-4">
          My Work
        </span>
        <PremiumTextReveal
          text="Featured Projects"
          as="h2"
          className="text-3xl md:text-5xl font-bold tracking-tighter mb-4"
          gradient
        />
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A selection of my recent work showcasing my skills and expertise in
          frontend development
        </p>
      </div>

      <Container>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={
                activeCategory === category.value ? "default" : "outline"
              }
              size="sm"
              onClick={() => setActiveCategory(category.value)}
              className={`rounded-full relative overflow-hidden ${
                activeCategory === category.value
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-primary/10 hover:text-primary"
              } interactive`}
            >
              {activeCategory === category.value && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="flex items-center gap-2 relative z-10">
                {category.icon}
                {category.label}
              </span>
            </Button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {filteredProjects.length <= 0 ? (
            <motion.div
              className="text-center p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-muted-foreground gradient-text text-[clamp(3rem,4.5vw,6rem)] font-bold">
                No projects found
              </span>{" "}
              <br />
              <span className="inline-block underline underline-offset-4 capitalize px-4 py-2 text-sm text-primary">
                Coming soon
              </span>
            </motion.div>
          ) : (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="-mx-8 px-4 flex flex-wrap justify-center">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="sm:basis-1/2 lg:basis-1/3 p-4"
                  >
                    <ProjectCard project={project} index={index} />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          layout
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button asChild size="lg" className="relative overflow-hidden group">
            <Link
              href="https://github.com"
              className="gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10 flex items-center gap-2">
                View All Projects on GitHub
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 transition-opacity duration-300" />

              <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </Link>
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}
