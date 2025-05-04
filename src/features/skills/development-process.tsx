import Card3D from "@/components/card-3d";
import Container from "@/components/layout/container";
import {
  Section,
  SectionHeader,
  SectionInner,
  SectionTitle,
} from "@/components/section";
import { motion } from "motion/react";
import { developmentProcess } from "@/data/portfolio-data";
import * as Icons from "@/components/icons";
import { Heading } from "@/components/heading";

const icons = {
  Rocket: <Icons.RocketIcon />,
  FileSearch: <Icons.FileSearchIcon />,
  Gauge: <Icons.GaugeIcon />,
  Palette: <Icons.PaletteIcon />,
  Code: <Icons.CodeIcon />,
};

export function DevelopmentProcess({ isInView }: { isInView: boolean }) {
  return (
    <Section>
      <SectionInner>
        <SectionHeader>
          <SectionTitle>My Development Process</SectionTitle>
        </SectionHeader>
        <Container size="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card3D className="modern-card py-20">
              <div className="relative">
                {/* Process steps */}
                <div className="hidden md:block absolute left-1/2 -inset-y-20 w-0.5 bg-primary/20 -translate-x-1/2" />

                <div className="space-y-12 relative">
                  {developmentProcess.map((step, index) => {
                    return (
                      <div
                        key={step.title}
                        className="relative group hover:scale-105 transition-transform duration-300"
                      >
                        <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                          <div
                            className={`md:text-right ${
                              index % 2 === 1 ? "md:order-2" : ""
                            }`}
                          >
                            <Heading
                              size="h5"
                              as="h4"
                              align={index % 2 === 0 ? "left" : "right"}
                            >
                              {step.title}
                            </Heading>
                            <p className="text-muted-foreground">
                              {step.description}
                            </p>
                          </div>

                          <div
                            className={`flex ${
                              index % 2 === 0
                                ? "md:justify-start"
                                : "md:justify-end"
                            } mt-4 md:mt-0`}
                          >
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:text-primary transition-colors duration-300">
                              {icons[step.icon as keyof typeof icons]}
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
        </Container>
      </SectionInner>
    </Section>
  );
}
