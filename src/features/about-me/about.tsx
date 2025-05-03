"use client";

import { Badge } from "@/components/ui/badge";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Download,
  ArrowRight,
  User,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import ParallaxSection from "@/components/parallax-section";
import Card3D from "@/components/card-3d";
import { developer } from "@/data/portfolio-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-25" />
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10" />

      {/* Animated background blobs */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
        animate={{
          x: [0, -20, 0],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-purple-400/10 blur-3xl"
        animate={{
          x: [0, 20, 0],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 15,
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
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 gradient-text">
            Know Me Better
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate frontend developer with a keen eye for design and a
            love for creating seamless user experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ParallaxSection direction="right" speed={0.3}>
            <div className="relative">
              {/* Enhanced image presentation */}
              <div className="relative mx-auto max-w-md">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/30 rounded-lg z-0"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-primary/30 rounded-lg z-0"></div>

                {/* Main image with 3D effect */}
                <Card3D className="aspect-square overflow-hidden rounded-2xl border-2 border-primary/20 shadow-xl">
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-purple-400/30 mix-blend-overlay z-10" />

                  {/* Image */}
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={developer.avatar || "/placeholder.svg"}
                      alt="Developer portrait"
                      width={600}
                      height={600}
                      className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                      priority
                    />

                    {/* Subtle vignette effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                  </div>

                  {/* Experience badge */}
                  <motion.div
                    className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full z-20 flex items-center justify-center text-white font-bold text-xl shadow-lg"
                    initial={{ scale: 0, rotate: -20 }}
                    animate={
                      isInView
                        ? { scale: 1, rotate: 0 }
                        : { scale: 0, rotate: -20 }
                    }
                    transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                  >
                    5+ Yrs
                  </motion.div>
                </Card3D>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-10 -right-10 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20 shadow-lg z-30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <span className="text-sm font-medium">
                    Frontend Specialist
                  </span>
                </motion.div>

                <motion.div
                  className="absolute -bottom-8 -left-8 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20 shadow-lg z-30"
                  initial={{ opacity: 0, y: -20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
                  }
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <span className="text-sm font-medium">
                    React • Next.js • TypeScript
                  </span>
                </motion.div>
              </div>

              {/* Background glow */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/30 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl -z-10" />
            </div>
          </ParallaxSection>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold gradient-text"
            >
              Frontend Developer & UI/UX Enthusiast
            </motion.h3>

            <Tabs defaultValue="about" className="w-full">
              <TabsList className="w-full grid grid-cols-3 mb-6 bg-background/50 backdrop-blur-sm border border-border/50">
                <TabsTrigger
                  value="about"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center gap-2"
                >
                  <User className="h-4 w-4" />
                  About
                </TabsTrigger>
                <TabsTrigger
                  value="experience"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center gap-2"
                >
                  <Briefcase className="h-4 w-4" />
                  Experience
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center gap-2"
                >
                  <GraduationCap className="h-4 w-4" />
                  Education
                </TabsTrigger>
              </TabsList>

              <TabsContent
                value="about"
                className="space-y-4 animate-in fade-in-50 duration-300"
              >
                <motion.p
                  variants={itemVariants}
                  className="text-muted-foreground"
                >
                  With over 5 years of experience in web development, I
                  specialize in creating responsive, accessible, and performant
                  web applications using modern technologies like React,
                  Next.js, and TypeScript.
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="text-muted-foreground"
                >
                  My passion lies in the intersection of code and design, where
                  I strive to build interfaces that are not only functional but
                  also aesthetically pleasing and intuitive to use.
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="text-muted-foreground"
                >
                  I'm constantly exploring new technologies and techniques to
                  enhance user experiences and create memorable digital products
                  that leave a lasting impression.
                </motion.p>
              </TabsContent>

              <TabsContent
                value="experience"
                className="space-y-4 animate-in fade-in-50 duration-300"
              >
                <div className="space-y-6">
                  <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-primary before:to-primary/30">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary -translate-x-1/2"></div>
                    <h4 className="font-bold text-lg">
                      Senior Frontend Developer
                    </h4>
                    <p className="text-sm text-primary mb-2">
                      TechCorp Inc. • 2021 - Present
                    </p>
                    <p className="text-muted-foreground">
                      Leading frontend development for enterprise applications,
                      implementing modern UI/UX practices, and mentoring junior
                      developers.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        React
                      </Badge>
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        TypeScript
                      </Badge>
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        Next.js
                      </Badge>
                    </div>
                  </div>

                  <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-primary/70 before:to-primary/20">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary/70 -translate-x-1/2"></div>
                    <h4 className="font-bold text-lg">Frontend Developer</h4>
                    <p className="text-sm text-primary mb-2">
                      Digital Solutions • 2019 - 2021
                    </p>
                    <p className="text-muted-foreground">
                      Developed responsive web applications and collaborated
                      with design team to implement pixel-perfect interfaces.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        React
                      </Badge>
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        JavaScript
                      </Badge>
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        CSS3
                      </Badge>
                    </div>
                  </div>

                  <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-primary/40 before:to-transparent">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary/40 -translate-x-1/2"></div>
                    <h4 className="font-bold text-lg">UI Developer</h4>
                    <p className="text-sm text-primary mb-2">
                      Creative Agency • 2017 - 2019
                    </p>
                    <p className="text-muted-foreground">
                      Created interactive websites focusing on animations and
                      user experience.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        JavaScript
                      </Badge>
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        HTML5
                      </Badge>
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        CSS3
                      </Badge>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent
                value="education"
                className="space-y-4 animate-in fade-in-50 duration-300"
              >
                <div className="space-y-6">
                  <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-primary before:to-primary/30">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary -translate-x-1/2"></div>
                    <h4 className="font-bold text-lg">
                      Master's in Computer Science
                    </h4>
                    <p className="text-sm text-primary mb-2">
                      Tech University • 2015 - 2017
                    </p>
                    <p className="text-muted-foreground">
                      Specialized in Human-Computer Interaction and Web
                      Technologies with focus on frontend development.
                    </p>
                  </div>

                  <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-primary/70 before:to-primary/20">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary/70 -translate-x-1/2"></div>
                    <h4 className="font-bold text-lg">
                      Bachelor's in Software Engineering
                    </h4>
                    <p className="text-sm text-primary mb-2">
                      State University • 2011 - 2015
                    </p>
                    <p className="text-muted-foreground">
                      Graduated with honors. Focus on frontend development and
                      UI design principles.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              {[
                { number: "5+", label: "Years Experience" },
                { number: "50+", label: "Projects Completed" },
                { number: "30+", label: "Happy Clients" },
                { number: "15+", label: "Technologies" },
              ].map((item, index) => (
                <Card3D
                  key={index}
                  className="modern-card rounded-xl overflow-hidden"
                >
                  <div className="p-4 text-center">
                    <h4 className="font-bold text-4xl gradient-text mb-1">
                      {item.number}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.label}
                    </p>
                  </div>
                </Card3D>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="pt-4 flex flex-wrap gap-4"
            >
              <Button
                asChild
                className="gap-2 bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 transition-opacity interactive"
              >
                <a href={developer.resume} download>
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="gap-2 border-primary/20 hover:bg-primary/10 interactive"
              >
                <a href="#projects">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
