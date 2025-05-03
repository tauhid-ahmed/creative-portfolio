"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Search } from "lucide-react";
import type { Project } from "@/lib/types";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface PremiumProjectCardProps {
  project: Project;
  index: number;
}

export default function PremiumProjectCard({
  project,
  index,
}: PremiumProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl border border-primary/10 bg-card transition-all duration-500 h-full">
        {/* Premium hover effect */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 z-0"
            />
          )}
        </AnimatePresence>

        {/* Premium border effect */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 border-2 border-primary/20 rounded-xl z-0"
            />
          )}
        </AnimatePresence>

        <div className="relative overflow-hidden">
          <div className="aspect-video overflow-hidden">
            <motion.div
              animate={{
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="w-full h-full"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* Premium image overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"
              animate={{
                opacity: isHovered ? 1 : 0.5,
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Featured badge */}
            {project.featured && (
              <div className="absolute top-4 left-4 z-10">
                <Badge className="bg-primary text-primary-foreground border-none px-3 py-1">
                  Featured
                </Badge>
              </div>
            )}

            {/* Action buttons */}
            <motion.div
              className="absolute inset-0 flex items-end p-6 z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 20,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="sm"
                      variant="default"
                      className="gap-1 bg-primary hover:bg-primary/90 interactive"
                    >
                      View Details
                      <Search className="h-3.5 w-3.5" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden">
                    <div className="relative aspect-video">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold gradient-text mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {project.description}
                      </p>

                      <div className="mt-6 space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-2">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="font-medium bg-primary/10 text-primary border border-primary/20"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                          <Button
                            asChild
                            size="sm"
                            className="gap-2 bg-primary hover:bg-primary/90"
                          >
                            <Link
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Live Demo
                              <ExternalLink className="h-4 w-4" />
                            </Link>
                          </Button>
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="gap-2"
                          >
                            <Link
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Source Code
                              <Github className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="gap-1 bg-background/50 backdrop-blur-sm interactive"
                >
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                    <Github className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="p-6 relative z-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 3).map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20"
                >
                  {tag}
                </Badge>
              ))}
              {project.tags.length > 3 && (
                <Badge
                  variant="secondary"
                  className="font-medium bg-muted/50 text-muted-foreground border border-muted/20"
                >
                  +{project.tags.length - 3}
                </Badge>
              )}
            </div>

            <motion.h3
              className="text-xl font-bold mb-2 transition-colors"
              animate={{
                color: isHovered
                  ? "hsl(var(--primary))"
                  : "hsl(var(--foreground))",
              }}
            >
              {project.title}
            </motion.h3>
            <p className="text-muted-foreground line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* Premium shadow effect */}
      <motion.div
        className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/5 to-purple-500/5 -z-10 blur-xl"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.95,
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
}
