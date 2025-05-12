import Card3D from "@/components/card-3d";
import { Container } from "@/components/layout/container";
import {
  Section,
  SectionHeader,
  SectionContent,
  SectionTitle,
} from "@/components/layout/section";
import { motion } from "motion/react";
import { developmentProcess } from "@/data/portfolio-data";
import * as Icons from "@/components/icons";
import { Heading } from "@/components/heading";
import { cn } from "@/lib/utils";

const icons = {
  Rocket: <Icons.RocketIcon />,
  FileSearch: <Icons.FileSearchIcon />,
  Gauge: <Icons.GaugeIcon />,
  Palette: <Icons.PaletteIcon />,
  Code: <Icons.CodeIcon />,
};

export function DevelopmentProcess() {
  return (
    <Section>
      <SectionContent>
        <SectionHeader>
          <SectionTitle>My Development Process</SectionTitle>
        </SectionHeader>
        <Container size="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="perspective-midrange"
          >
            <Card3D className="modern-card sm:py-10 lg:py-20">
              <div className="relative">
                {/* Process steps */}
                <div className="hidden md:block absolute left-1/2 -inset-y-20 w-0.5 bg-primary/20 -translate-x-1/2" />

                <div className="space-y-12 relative">
                  {developmentProcess.map((step, index) => {
                    return (
                      <div key={step.title} className="relative group">
                        <div className="md:grid md:grid-cols-2 md:gap-6 items-center md:px-10">
                          <div
                            className={cn("order-2 space-y-2 relative", {
                              "md:order-1": index % 2 === 0,
                              "md:col-start-2": index % 2 !== 0,
                            })}
                          >
                            <div
                              className={cn(
                                "flex items-center justify-center size-14 lg:size-16 rounded-full bg-primary/10 border border-primary/40 group-hover:bg-primary/30 group-hover:border-primary group-hover:text-primary transition-colors duration-300 md:absolute md:top-1",
                                {
                                  "md:-right-24": index % 2 === 0,
                                  "md:-left-24": index % 2 !== 0,
                                }
                              )}
                            >
                              {icons[step.icon as keyof typeof icons]}
                            </div>
                            <Heading size="h5" as="h4" align="left">
                              {step.title}
                            </Heading>
                            <p className="text-muted-foreground">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card3D>
          </motion.div>
        </Container>
      </SectionContent>
    </Section>
  );
}
