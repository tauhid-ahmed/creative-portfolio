import { cloneElement, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import * as Icons from "./icons";
import { socialLinks } from "@/data/portfolio-data";

const socialIcons = {
  Github: <Icons.GithubIcon />,
  Linkedin: <Icons.LinkedinIcon />,
  X: <Icons.XIcon />,
} as const;

export function SocialInformation() {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  return (
    <div className="flex gap-4 justify-center lg:justify-start pt-2">
      {socialLinks.map((link, i) => {
        return (
          <motion.a
            key={link.platform}
            href={link.url}
            className="relative flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 "
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
            target="_blank"
            rel="noopener noreferrer"
          >
            {cloneElement(socialIcons[link.icon as keyof typeof socialIcons], {
              className: "w-5 h-5",
            })}
            <span className="sr-only">{link.platform}</span>

            {/* Premium hover effect */}
            <AnimatePresence>
              {hoveredSocial === link.platform && (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium bg-background/80 backdrop-blur-sm px-2 py-1 rounded-md border border-primary/20"
                >
                  {link.platform}
                </motion.span>
              )}
            </AnimatePresence>

            {/* Glow effect */}
            <motion.span
              className="absolute inset-0 rounded-full bg-primary/20 blur-md -z-10"
              initial={{ opacity: 0, scale: 1 }}
              whileHover={{ opacity: 1, scale: 1.4 }}
            />
          </motion.a>
        );
      })}
    </div>
  );
}
