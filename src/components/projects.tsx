"use client";

import type React from "react";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code, Layers, Search } from "lucide-react";
import { projects } from "@/data/portfolio-data";
import PremiumProjectCard from "@/components/premium-project-card";
import PremiumTextReveal from "@/components/premium-text-reveal";
import PremiumSection from "@/components/premium-section";

type ProjectCategory = "all" | "frontend" | "fullstack" | "design" | "mobile";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

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
    <PremiumSection id="projects" ref={sectionRef} revealDirection="up">
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

      {/* Category filters with premium styling */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <Button
            key={category.value}
            variant={activeCategory === category.value ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(category.value)}
            className={`rounded-full relative overflow-hidden ${
              activeCategory === category.value
                ? "bg-primary text-primary-foreground"
                : "hover:bg-primary/10 hover:text-primary"
            } interactive`}
          >
            {/* Premium button effect */}
            {activeCategory === category.value && (
              <motion.div
                layoutId="activeCategoryBackground"
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
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <PremiumProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Button
          asChild
          size="lg"
          className="relative overflow-hidden group interactive"
        >
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

            {/* Premium button effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </Link>
        </Button>
      </motion.div>
    </PremiumSection>
  );
}
