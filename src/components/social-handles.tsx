import { cloneElement, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import * as Icons from "./icons";
import { socialLinks } from "@/data/portfolio-data";
import { Button } from "./ui/button";
import Link from "next/link";
import { Badge } from "./ui/badge";

const socialIcons = {
  Github: <Icons.GithubIcon />,
  Linkedin: <Icons.LinkedinIcon />,
  X: <Icons.XIcon />,
} as const;

export function SocialHandles() {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  return (
    <div className="flex gap-4 items-center">
      {socialLinks.map((link, i) => {
        return (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.2,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 10,
              },
            }}
            onHoverStart={() => setHoveredSocial(link.platform)}
            onHoverEnd={() => setHoveredSocial(null)}
          >
            <Button asChild size="icon" shape="circle">
              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                {cloneElement(
                  socialIcons[link.icon as keyof typeof socialIcons],
                  {
                    className: "size-5",
                  }
                )}
                <span className="sr-only">{link.platform}</span>

                <AnimatePresence>
                  {hoveredSocial === link.platform && (
                    <Badge variant="outline" asChild>
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-primary/20 text-primary border-primary/60 backdrop-blur"
                      >
                        {link.platform}
                      </motion.span>
                    </Badge>
                  )}
                </AnimatePresence>
                <motion.span
                  className="absolute inset-0 rounded-full bg-primary/20 blur-md -z-10"
                  initial={{ opacity: 0, scale: 1 }}
                  whileHover={{ opacity: 1, scale: 1.4 }}
                />
              </Link>
            </Button>
          </motion.div>
        );
      })}
    </div>
  );
}
