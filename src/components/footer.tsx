"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navItems, socialLinks, developer } from "@/data/portfolio-data";
import dynamic from "next/dynamic";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-background" />
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-purple-400/5 blur-3xl" />

      <div className="container px-4 md:px-6 py-12 relative z-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter interactive"
            >
              <span className="gradient-text">Dev</span>Portfolio
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Creating exceptional digital experiences with modern web
              technologies and a passion for design.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = dynamic(
                  () =>
                    import("lucide-react").then((mod) => {
                      const Icon = mod[social.icon as keyof typeof mod];
                      return { default: Icon };
                    }),
                  { ssr: false }
                );

                return (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 interactive"
                    whileHover={{
                      scale: 1.2,
                      y: -5,
                      boxShadow: "0 10px 25px -10px rgba(139, 92, 246, 0.7)",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="sr-only">{social.platform}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div className="space-y-4">
              <h3 className="text-sm font-medium gradient-text">Navigation</h3>
              <nav className="flex flex-col space-y-2 text-sm">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors interactive"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium gradient-text">Contact</h3>
              <div className="flex flex-col space-y-2 text-sm">
                <a
                  href={`mailto:${developer.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors interactive"
                >
                  {developer.email}
                </a>
                <a
                  href={`tel:${developer.phone.replace(/\s/g, "")}`}
                  className="text-muted-foreground hover:text-primary transition-colors interactive"
                >
                  {developer.phone}
                </a>
                <span className="text-muted-foreground">
                  {developer.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-8 border-t border-primary/10">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} DevPortfolio. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Button
              variant="link"
              size="sm"
              className="text-xs text-muted-foreground hover:text-primary interactive"
            >
              Privacy Policy
            </Button>
            <Button
              variant="link"
              size="sm"
              className="text-xs text-muted-foreground hover:text-primary interactive"
            >
              Terms of Service
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
