"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Search, CodeIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import placeholderImage from "@/images/placeholder.svg";
import eCommerceProjectImage from "./images/projects/e-commerce.webp";
import Card3D from "@/components/card-3d";
import { Heading } from "@/components/heading";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <motion.div
      whileInView={{ y: [100, 0], opacity: [0, 1] }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative overflow-hidden rounded-xl border border-primary/50 bg-card transition-colors duration-500 perspective-midrange"
    >
      <Card3D>
        <div className="h-[30rem] flex flex-col group relative">
          <div className="overflow-hidden relative z-10 h-1/2">
            <div className="size-full">
              <Image
                src={eCommerceProjectImage}
                alt=""
                className="object-cover size-full"
              />
            </div>

            {/* {project.featured && (
              <div className="absolute top-2 left-2 z-10">
                <Badge className="bg-primary/80 backdrop-blur text-primary-foreground border-none px-3 py-1">
                  Featured
                </Badge>
              </div>
            )} */}
          </div>

          {/* <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-background/10 to-transparent group-hover:opacity-100 opacity-70" /> */}

          <div className="px-6 relative z-10 space-y-4 mt-auto p-6 flex flex-col justify-between">
            <motion.div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <Badge
                  key={tag}
                  variant="default"
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

            <div className="space-y-4">
              <Heading as="h3" size="h5" align="left">
                {project.title}
              </Heading>
              <p className="text-muted-foreground line-clamp-2">
                {project.description}
              </p>
              <ProjectActions project={project} />
            </div>
          </div>
        </div>
      </Card3D>
    </motion.div>
  );
}

function ProjectActions({
  project,
  isHovered,
}: {
  project: Project;
  isHovered: boolean;
}) {
  return (
    <div className="flex gap-2 p-1 rounded">
      <ProjectModal project={project}>
        <Button size="sm">
          View Details
          <Search />
        </Button>
      </ProjectModal>
    </div>
  );
}

function ProjectModal({
  project,
  children,
}: {
  project: Project;
  children: React.ReactNode;
}) {
  return (
    <Dialog modal>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-xl p-4 overflow-hidden animate-fade-in">
        <motion.div className="relative">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={placeholderImage}
              alt={project.title}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>
          <div className="p-6">
            <motion.div>
              <DialogTitle className="text-2xl font-bold gradient-text mb-2">
                {project.title}
              </DialogTitle>
            </motion.div>
            <motion.p className="text-muted-foreground">
              {project.description}
            </motion.p>

            <div className="mt-6 space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Technologies Used</h4>
                <motion.div className="flex flex-wrap gap-2">
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
                <Button asChild size="sm" variant="outline" className="gap-2">
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
  );
}

/*


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
                  <Button asChild size="sm" variant="outline" className="gap-2">
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
*/
