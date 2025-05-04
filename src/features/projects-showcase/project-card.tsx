"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Search } from "lucide-react";
import type { Project } from "@/lib/types";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import placeholderImage from "@/images/placeholder.svg";
import { set } from "zod";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <motion.div
      layoutId={`project-card-${project.id}`} // More specific layoutId for the card
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-xl border border-primary/10 bg-card transition-all duration-500 h-full"
    >
      <motion.div className="relative overflow-hidden">
        <div className="aspect-video overflow-hidden relative">
          <motion.div
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="w-full h-full relative z-10"
          >
            <Image
              src={placeholderImage}
              alt={project.title}
              className="object-cover w-full h-full"
            />
          </motion.div>

          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"
            animate={{
              opacity: isHovered ? 1 : 0.5,
            }}
            transition={{ duration: 0.3 }}
          />

          {project.featured && (
            <div className="absolute top-4 left-4 z-10">
              <Badge className="bg-primary text-primary-foreground border-none px-3 py-1">
                Featured
              </Badge>
            </div>
          )}
        </div>

        <div className="p-6 relative z-10">
          <motion.div
            layoutId={`project-tags-${project.id}`} // More specific layoutId for tags
            className="flex flex-wrap gap-2 mb-4"
          >
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
          </motion.div>

          <motion.h3
            className="text-xl font-bold mb-2 transition-colors"
            animate={{
              color: isHovered
                ? "hsl(var(--primary))"
                : "hsl(var(--foreground))",
            }}
            layoutId={`project-title-${project.id}`} // More specific layoutId for title
          >
            {project.title}
          </motion.h3>
          <motion.p
            layoutId={`project-description-${project.id}`} // More specific layoutId for description
            className="text-muted-foreground line-clamp-2"
          >
            {project.description}
          </motion.p>
        </div>
      </motion.div>
      <div className="">
        <Button
          onClick={() => setActiveProject(project)}
          className="gap-1 bg-primary hover:bg-primary/90"
        >
          View Details
          <Search className="h-3.5 w-3.5" />
        </Button>
      </div>
      {/* <ActionButton project={project} isHovered={isHovered} /> */}
    </motion.div>
  );
}

function ActionButton({
  project,
  isHovered,
}: {
  project: Project;
  isHovered: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="flex items-end p-6"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      animate={{
        opacity: isHovered ? 1 : 0,
        y: isHovered ? 0 : 20,
      }}
    >
      <div className="flex gap-2 relative z-50">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              size="sm"
              variant="default"
              className="gap-1 bg-primary hover:bg-primary/90"
            >
              View Details
              <Search className="h-3.5 w-3.5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md overflow-hidden">
            <motion.div
              layoutId={`project-card-${project.id}`} // MUST MATCH the card's layoutId
              className="relative" // Ensure relative positioning for children
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={placeholderImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              <div className="p-6">
                <motion.div layoutId={`project-title-${project.id}`}>
                  <DialogTitle className="text-2xl font-bold gradient-text mb-2">
                    {project.title}
                  </DialogTitle>
                </motion.div>
                <motion.p
                  layoutId={`project-description-${project.id}`}
                  className="text-muted-foreground"
                >
                  {project.description}
                </motion.p>

                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">
                      Technologies Used
                    </h4>
                    <motion.div
                      layoutId={`project-tags-${project.id}`}
                      className="flex flex-wrap gap-2"
                    >
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="font-medium bg-primary/10 text-primary border border-primary/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </motion.div>
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
            </motion.div>
          </DialogContent>
        </Dialog>
      </div>
    </motion.div>
  );
}
