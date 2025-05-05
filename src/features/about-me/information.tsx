import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, User } from "lucide-react";
import { motion } from "motion/react";
import { profileData } from "@/data/portfolio-data";
import { Timeline } from "@/components/timeline";

type AboutData = Extract<ResumeData[number], { section: "about" }>["content"];

type ExperienceData = Extract<
  ResumeData[number],
  { section: "experience" }
>["content"];

type EducationData = Extract<
  ResumeData[number],
  { section: "education" }
>["content"];

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
              className="data-[state=active]:text-secondary! data-[state=active]:bg-primary! flex items-center gap-2 cursor-pointer p-1.5 transition-transform duration-300"
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
          return <AboutContent key={index} items={item.content} />;
        }
        if (item.section === "experience") {
          return <ExperienceContent key={index} items={item.content} />;
        }
        if (item.section === "education") {
          return <EducationContent key={index} items={item.content} />;
        }
      })}
    </Tabs>
  );
}

function AboutContent({ items }: { items: AboutData }) {
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

function ExperienceContent({ items }: { items: ExperienceData }) {
  return (
    <TabsContent
      value="experience"
      className="space-y-4 animate-in fade-in-50 duration-300"
    >
      <motion.div variants={itemVariants} className="space-y-6">
        {items.map((item, index) => (
          <Timeline.Root key={index}>
            <Timeline.Title>{item.position}</Timeline.Title>
            <Timeline.Subtitle>
              {item.company} • {item.duration}
            </Timeline.Subtitle>
            <Timeline.Description>{item.description}</Timeline.Description>
            <Timeline.Tags>
              {item.technologies.map((tech, index) => (
                <Timeline.Tag key={index}>{tech}</Timeline.Tag>
              ))}
            </Timeline.Tags>
          </Timeline.Root>
        ))}
      </motion.div>
    </TabsContent>
  );
}

function EducationContent({ items }: { items: EducationData }) {
  return (
    <TabsContent
      value="education"
      className="space-y-4 animate-in fade-in-50 duration-300"
    >
      <motion.div variants={itemVariants} className="space-y-6">
        {items.map((item, index) => (
          <Timeline.Root key={index}>
            <Timeline.Title>{item.degree}</Timeline.Title>
            <Timeline.Subtitle>
              {item.institution} • {item.duration}
            </Timeline.Subtitle>
            <Timeline.Description>{item.description}</Timeline.Description>
          </Timeline.Root>
        ))}
      </motion.div>
    </TabsContent>
  );
}
