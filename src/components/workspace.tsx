"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Laptop, Palette, Terminal, Workflow } from "lucide-react";

// Sample data for tools
const toolsData = [
  {
    name: "Visual Studio Code",
    icon: "/placeholder.svg?height=64&width=64",
    description:
      "My primary code editor with custom themes and extensions for optimal productivity.",
    category: "Development",
    proficiency: 95,
    website: "https://code.visualstudio.com/",
  },
  {
    name: "Figma",
    icon: "/placeholder.svg?height=64&width=64",
    description:
      "Design tool for creating UI mockups, prototypes, and design systems.",
    category: "Design",
    proficiency: 90,
    website: "https://www.figma.com/",
  },
  {
    name: "React",
    icon: "/placeholder.svg?height=64&width=64",
    description:
      "JavaScript library for building user interfaces with reusable components.",
    category: "Frontend",
    proficiency: 95,
    website: "https://reactjs.org/",
  },
  {
    name: "Next.js",
    icon: "/placeholder.svg?height=64&width=64",
    description:
      "React framework for production with server-side rendering and static site generation.",
    category: "Frontend",
    proficiency: 90,
    website: "https://nextjs.org/",
  },
  {
    name: "TypeScript",
    icon: "/placeholder.svg?height=64&width=64",
    description:
      "Strongly typed programming language that builds on JavaScript for better tooling.",
    category: "Languages",
    proficiency: 85,
    website: "https://www.typescriptlang.org/",
  },
  {
    name: "Tailwind CSS",
    icon: "/placeholder.svg?height=64&width=64",
    description:
      "Utility-first CSS framework for rapidly building custom user interfaces.",
    category: "Frontend",
    proficiency: 95,
    website: "https://tailwindcss.com/",
  },
  {
    name: "Framer Motion",
    icon: "/placeholder.svg?height=64&width=64",
    description:
      "Production-ready motion library for React to create fluid animations.",
    category: "Animation",
    proficiency: 85,
    website: "https://www.framer.com/motion/",
  },
  {
    name: "Git",
    icon: "/placeholder.svg?height=64&width=64",
    description:
      "Version control system for tracking changes and collaborating on projects.",
    category: "Development",
    proficiency: 90,
    website: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    icon: "/placeholder.svg?height=64&width=64",
    description: "Platform for hosting and collaborating on Git repositories.",
    category: "Development",
    proficiency: 90,
    website: "https://github.com/",
  },
  {
    name: "Node.js",
    icon: "/placeholder.svg?height=64&width=64",
    description:
      "JavaScript runtime built on Chrome's V8 JavaScript engine for server-side development.",
    category: "Backend",
    proficiency: 85,
    website: "https://nodejs.org/",
  },
  {
    name: "Docker",
    icon: "/placeholder.svg?height=64&width=64",
    description:
      "Platform for developing, shipping, and running applications in containers.",
    category: "DevOps",
    proficiency: 75,
    website: "https://www.docker.com/",
  },
  {
    name: "Vercel",
    icon: "/placeholder.svg?height=64&width=64",
    description:
      "Platform for frontend frameworks and static sites, built for optimal performance.",
    category: "Deployment",
    proficiency: 90,
    website: "https://vercel.com/",
  },
];

// Sample data for workspace items
const workspaceItems = [
  {
    title: "Development Setup",
    description:
      "My primary development environment features a dual-monitor setup with a custom-built PC running the latest hardware. I use a mechanical keyboard with custom keycaps for the best typing experience and a high-precision mouse for accurate design work.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Workspace",
  },
  {
    title: "Coding Environment",
    description:
      "I use Visual Studio Code with a custom theme and carefully selected extensions to optimize my coding workflow. My terminal setup includes Oh My Zsh with custom aliases and scripts to automate repetitive tasks.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Software",
  },
  {
    title: "Design Workspace",
    description:
      "For design work, I use a drawing tablet connected to my main workstation. My software stack includes Figma for UI design, Adobe Creative Suite for graphics, and Blender for occasional 3D work.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Design",
  },
  {
    title: "Mobile Testing Lab",
    description:
      "To ensure responsive designs work perfectly across devices, I maintain a collection of various mobile devices for testing. This includes different screen sizes, operating systems, and browser combinations.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Testing",
  },
];

export default function PremiumWorkspace() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="workspace"
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
          opacity: [0.3, 0.5, 0.3],
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
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="container px-4 md:px-6 relative z-20">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 inline-block mb-4"
          >
            My Digital Arsenal
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            The carefully selected tools and optimized workspace that power my
            development process
          </motion.p>
        </div>

        {/* 3D Tools Cube */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        ></motion.div>

        <Tabs defaultValue="tools" className="w-full">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-12">
            <TabsTrigger value="tools" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <span className="hidden sm:inline">Development Tools</span>
              <span className="sm:hidden">Tools</span>
            </TabsTrigger>
            <TabsTrigger value="workspace" className="flex items-center gap-2">
              <Laptop className="h-4 w-4" />
              <span className="hidden sm:inline">Workspace</span>
              <span className="sm:hidden">Space</span>
            </TabsTrigger>
            <TabsTrigger value="workflow" className="flex items-center gap-2">
              <Workflow className="h-4 w-4" />
              <span className="hidden sm:inline">Development Process</span>
              <span className="sm:hidden">Process</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="tools"
            className="mt-6 focus-visible:outline-none focus-visible:ring-0"
          ></TabsContent>

          <TabsContent
            value="workspace"
            className="mt-6 focus-visible:outline-none focus-visible:ring-0"
          ></TabsContent>

          <TabsContent
            value="workflow"
            className="mt-6 focus-visible:outline-none focus-visible:ring-0"
          >
            <div className="max-w-3xl mx-auto">
              {/* Development process timeline */}
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

                {[
                  {
                    icon: <Terminal className="h-5 w-5" />,
                    title: "Planning & Research",
                    description:
                      "Every project begins with thorough research and planning. I analyze requirements, research solutions, and create a detailed roadmap before writing any code.",
                  },
                  {
                    icon: <Palette className="h-5 w-5" />,
                    title: "Design & Prototyping",
                    description:
                      "I create wireframes and interactive prototypes to visualize the solution and get early feedback. This iterative process ensures the final product meets all requirements.",
                  },
                  {
                    icon: <Code className="h-5 w-5" />,
                    title: "Development",
                    description:
                      "Using modern frameworks and best practices, I write clean, maintainable code with a focus on performance, accessibility, and security.",
                  },
                  {
                    icon: <Terminal className="h-5 w-5" />,
                    title: "Testing & Optimization",
                    description:
                      "Rigorous testing across devices and browsers ensures a flawless user experience. Performance optimization is a continuous process throughout development.",
                  },
                  {
                    icon: <Workflow className="h-5 w-5" />,
                    title: "Deployment & Maintenance",
                    description:
                      "Using CI/CD pipelines, I deploy applications to production environments and provide ongoing support and maintenance.",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="relative pl-12 pb-12 last:pb-0"
                  >
                    {/* Step icon */}
                    <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                      {step.icon}
                    </div>

                    {/* Step content */}
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
