import { AnimatePresence, motion } from "motion/react";
import { PLACEHOLDER_IMAGE } from "@/constants";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Heading } from "@/components/heading";
import { useState } from "react";
import { createPortal } from "react-dom";
import Card3D from "@/components/card-3d";

export function ProjectModal({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <>
        <Button onClick={() => setIsOpen(true)}>View Details</Button>
        {createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                layoutId={`project-card-${project.id}`}
                className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-background/20"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <Button
                  className="absolute top-4 right-4"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </Button>
                <Card3D className="max-w-md overflow-hidden">
                  <motion.div className="relative">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={PLACEHOLDER_IMAGE}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    </div>
                    <div className="p-6">
                      <motion.div layoutId={`project-title-${project.id}`}>
                        <Heading className="text-2xl font-bold gradient-text mb-2">
                          {project.title}
                        </Heading>
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
                </Card3D>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
      </>
    </>
  );
}

/*
<div className="max-w-md overflow-hidden">
                <motion.div
                  layoutId={`project-card-${project.id}`}
                  className="relative"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={PLACEHOLDER_IMAGE}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  </div>
                  <div className="p-6">
                    <motion.div layoutId={`project-title-${project.id}`}>
                      <Heading className="text-2xl font-bold gradient-text mb-2">
                        {project.title}
                      </Heading>
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
              </div>

*/
