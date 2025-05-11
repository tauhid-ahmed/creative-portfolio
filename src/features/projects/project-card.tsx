"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PROJECT_IMAGES } from "./utils/constants";
import Card3D from "@/components/card-3d";
import { Heading } from "@/components/heading";
import { ProjectModal } from "./project-modal";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <>
      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="relative overflow-hidden rounded-xl border border-primary/50 bg-card transition-colors duration-500 perspective-midrange h-full"
      >
        <motion.div className="h-full" layoutId={`project-card-${project.id}`}>
          <Card3D className="h-full">
            <div className="flex flex-col group relative h-full gap-6">
              <div className="overflow-hidden relative z-10 h-52 lg:h-60 shrink-0">
                <div className="size-full">
                  <div className="animate-project-image">
                    <Image
                      src={
                        PROJECT_IMAGES[
                          project.image as keyof typeof PROJECT_IMAGES
                        ]
                      }
                      alt={project.title}
                      placeholder="blur"
                      blurDataURL={PROJECT_IMAGES["placeholder-image"]}
                    />
                  </div>
                </div>

                {project.featured && (
                  <div className="absolute top-2 left-2 z-10">
                    <Badge
                      variant="outline"
                      className="bg-primary/80 backdrop-blur text-primary-foreground border-none px-3 py-1"
                    >
                      Featured
                    </Badge>
                  </div>
                )}
              </div>

              <div className="absolute -inset-6 bg-gradient-to-t from-primary/20 via-background/10 to-transparent group-hover:opacity-100 opacity-70" />

              <div className="relative z-10 space-y-4 flex flex-col justify-between flex-1">
                <motion.div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge
                      key={tag}
                      className="font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge
                      variant="outline"
                      className="font-medium bg-muted/50 text-muted-foreground border border-muted/20"
                    >
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </motion.div>

                <div className="space-y-4">
                  <Heading
                    as="h3"
                    size="h5"
                    align="left"
                    className="whitespace-nowrap line-clamp-1 text-ellipsis"
                  >
                    {project.title}
                  </Heading>
                  <p className="text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <ProjectModal project={project} />
              </div>
            </div>
          </Card3D>
        </motion.div>
      </motion.div>
    </>
  );
}
