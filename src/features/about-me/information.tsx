import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, User } from "lucide-react";
import { motion } from "motion/react";
import { profileData } from "@/data/portfolio-data";

type AboutContentType = string[];

type ExperienceItem = {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
};

type EducationItem = {
  degree: string;
  institution: string;
  duration: string;
  description: string;
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

export function Information() {
  return (
    <Tabs defaultValue="about" className="w-full">
      <TabsList className="w-full grid grid-cols-3 mb-6 bg-background/50 backdrop-blur border border-border/50 gap-1">
        {profileData.map((item, index) => {
          return (
            <TabsTrigger
              value={item.section}
              key={index}
              className="data-[state=active]:text-primary-foreground flex items-center gap-2 cursor-pointer p-1.5 transition-transform duration-300"
            >
              {item.section === "about" && <User />}
              {item.section === "experience" && <Briefcase />}
              {item.section === "education" && <GraduationCap />}
              {item.section}
            </TabsTrigger>
          );
        })}
      </TabsList>

      {profileData.map((item, index) => {
        if (item.section === "about") {
          return (
            <AboutContent
              key={index}
              items={item.content as AboutContentType}
            />
          );
        }
        if (item.section === "experience") {
          return (
            <ExperienceContent
              key={index}
              items={item.content as ExperienceItem[]}
            />
          );
        }
        if (item.section === "education") {
          return (
            <EducationContent
              key={index}
              items={item.content as EducationItem[]}
            />
          );
        }
      })}
    </Tabs>
  );
}

function AboutContent({ items }: { items: AboutContentType }) {
  return (
    <TabsContent
      value="about"
      className="space-y-4 animate-in fade-in-50 duration-300 [&>p:first-child]:first-letter:bg-primary [&>p:first-child]:first-letter:font-bold [&>p:first-child]:first-letter:text-2xl [&>p:first-child]:first-letter:leading-0 [&>p:first-child]:first-letter:tracking-tight [&>p:first-child]:first-letter:p-4 [&>p:first-child]:first-letter:mr-1.5 [&>p:first-child]:first-letter:float-left [&>p:first-child]:first-letter:text-primary-foreground [&>p:first-child]:first-letter:mt-1 [&>p:first-child]:first-letter:rounded "
    >
      {items.map((item, index) => (
        <motion.p
          key={index}
          variants={itemVariants}
          className="text-muted-foreground"
        >
          {item}
        </motion.p>
      ))}
    </TabsContent>
  );
}

function ExperienceContent({ items }: { items: ExperienceItem[] }) {
  return (
    <TabsContent
      value="experience"
      className="space-y-4 animate-in fade-in-50 duration-300"
    >
      {items.map((item, index) => (
        <motion.div variants={itemVariants} key={index} className="space-y-6">
          <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-primary before:to-primary/30">
            <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary -translate-x-1/2"></div>
            <h4 className="font-bold text-lg">{item.position}</h4>
            <p className="text-sm text-primary mb-2">
              {item.company} • {item.duration}
            </p>
            <p className="text-muted-foreground">{item.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {item.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  className="bg-primary/10 text-primary border-primary/20"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </TabsContent>
  );
}

function EducationContent({ items }: { items: EducationItem[] }) {
  return (
    <TabsContent
      value="education"
      className="space-y-4 animate-in fade-in-50 duration-300"
    >
      <motion.div variants={itemVariants} className="space-y-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-primary before:to-primary/30"
          >
            <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary -translate-x-1/2"></div>
            <h4 className="font-bold text-lg">{item.degree}</h4>
            <p className="text-sm text-primary mb-2">
              {item.institution} • {item.duration}
            </p>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </motion.div>
    </TabsContent>
  );
}
