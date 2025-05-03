import Card3D from "@/components/card-3d";
import { motion } from "motion/react";

export function DevelopmentProcess({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-20"
    >
      <Card3D className="modern-card p-8">
        <h3 className="text-xl font-bold mb-6 gradient-text text-center">
          My Development Process
        </h3>

        <div className="relative">
          {/* Process steps */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />

          <div className="space-y-12 relative">
            {[
              {
                title: "Planning & Research",
                description:
                  "Understanding project requirements, researching solutions, and planning architecture.",
                icon: "FileSearch",
              },
              {
                title: "Design & Prototyping",
                description:
                  "Creating wireframes, designing UI components, and building interactive prototypes.",
                icon: "Palette",
              },
              {
                title: "Development",
                description:
                  "Writing clean, maintainable code with modern frameworks and best practices.",
                icon: "Code",
              },
              {
                title: "Testing & Optimization",
                description:
                  "Ensuring cross-browser compatibility, accessibility, and performance optimization.",
                icon: "Gauge",
              },
              {
                title: "Deployment & Maintenance",
                description:
                  "Deploying to production, monitoring performance, and providing ongoing support.",
                icon: "Rocket",
              },
            ].map((step, index) => {
              return (
                <div key={step.title} className="relative">
                  <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                    <div
                      className={`md:text-right ${
                        index % 2 === 1 ? "md:order-2" : ""
                      }`}
                    >
                      <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>

                    <div
                      className={`flex ${
                        index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                      } mt-4 md:mt-0`}
                    >
                      <div className="relative">
                        {/* Circle indicator on timeline */}
                        <div className="hidden md:block absolute top-1/2 left-1/2 w-6 h-6 rounded-full bg-background border-2 border-primary -translate-x-1/2 -translate-y-1/2" />

                        {/* Icon circle */}
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20">
                          {/* <IconComponent className="h-8 w-8 text-primary" /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Card3D>
    </motion.div>
  );
}
