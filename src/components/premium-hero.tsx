"use client";

import { useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";
import { developer } from "@/data/portfolio-data";
import { SocialInformation } from "./social-information";
import { TextWeave } from "./animations/text-weave";
import Container from "./layout/container";

export default function PremiumHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <Container>
        {/* Premium background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background z-0" />

        {/* Modern grid background with enhanced styling */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Animated background shapes with premium effects */}

        {/* <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5 backdrop-blur-3xl"
            style={{
              width: `${Math.random() * 300 + 200}px`,
              height: `${Math.random() * 300 + 200}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(80px)",
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div> */}

        <div className="container px-4 md:px-6 z-10 relative">
          <motion.div
            ref={contentRef}
            style={{ y, opacity, scale }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-8 text-center lg:text-left">
              <motion.div
                initial="hidden"
                animate="visible"
                className="space-y-2"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm"
                >
                  {developer.name}
                </motion.span>

                <h1 className="text-[clamp(2rem,4.5vw,4rem)] font-bold tracking-tight leading-tight">
                  <TextWeave />
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="block text-primary mt-2"
                  >
                    as a{" "}
                    <span className="relative">
                      <span className="absolute -inset-1 rounded-lg bg-primary/10 blur-sm"></span>
                      <span className="relative">Frontend Developer</span>
                    </span>
                  </motion.span>
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0"
              >
                {developer.bio}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <Button
                  className="px-6 py-6 text-base relative overflow-hidden group interactive"
                  size="lg"
                  asChild
                >
                  <Link href="#projects">
                    <span className="relative z-10 flex items-center gap-2">
                      View Projects
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Premium button effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </Link>
                </Button>
                <Button
                  className="px-6 py-6 text-base interactive relative overflow-hidden group"
                  variant="outline"
                  size="lg"
                  asChild
                >
                  <Link href={developer.resume}>
                    <span className="relative z-10">Download CV</span>

                    {/* Premium button effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.1, duration: 0.8 }}
              >
                <SocialInformation />
              </motion.div>
            </div>
            <IntroImage rotate={rotate} />
          </motion.div>
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-primary interactive"
            >
              <a href="#about" aria-label="Scroll down">
                <ArrowDown className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function IntroImage({ rotate }: { rotate: MotionValue }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, rotateY: -20 },
        visible: {
          opacity: 1,
          rotateY: 0,
          transition: { duration: 1.2, delay: 0.5 },
        },
      }}
      initial="hidden"
      animate="visible"
      style={{ rotate }}
      className="relative hidden lg:block perspective-1000"
    >
      <div className="relative aspect-square max-w-md mx-auto transform-3d">
        {/* Premium decorative elements */}
        <motion.div
          className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/30 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-purple-400/20 blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        {/* Premium image container with creative border */}
        <div className="relative z-10 w-full h-full transform-style-3d rotate-y-10 rotate-x-5">
          {/* Layered background elements for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-400/20 rounded-2xl rotate-6 transform-gpu translate-z-[-20px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-400/20 rounded-2xl -rotate-6 transform-gpu translate-z-[-10px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-400/10 rounded-2xl rotate-3 transform-gpu translate-z-[-5px]" />

          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-background to-background/80 p-4 backdrop-blur-sm border border-primary/20 shadow-2xl">
            <div className="w-full h-full rounded-lg overflow-hidden relative">
              {/* Premium image treatment */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent mix-blend-overlay z-10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)] z-20" />

              <Image
                src={developer.avatar || "/placeholder.svg"}
                alt={`${developer.name} - ${developer.title}`}
                fill
                className="object-cover transform-gpu hover:scale-105 transition-transform duration-1000"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

              {/* Subtle scan line effect */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px] opacity-20" />
            </div>
          </div>
        </div>

        {/* Premium floating elements */}
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
          className="absolute top-5 -right-10 bg-primary text-primary-foreground rounded-full px-4 py-2 font-medium text-sm shadow-lg backdrop-blur-sm"
        >
          5+ Years Experience
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
          className="absolute -bottom-5 -left-5 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1.5 font-medium text-xs border border-primary/20 shadow-lg"
        >
          React • Next.js • TypeScript
        </motion.div>

        {/* Floating tech icons */}
        {["React", "Next.js", "TypeScript"].map((tech, i) => (
          <motion.div
            key={tech}
            className="absolute bg-background/70 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center border border-primary/20 shadow-lg"
            style={{
              top: `${20 + i * 25}%`,
              right: i % 2 === 0 ? "-15%" : "85%",
            }}
            initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8 + i * 0.2, duration: 0.8 }}
          >
            <span className="text-xs font-medium">{tech}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
