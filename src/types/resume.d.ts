// resume types

type ProfileSectionType = "about" | "experience" | "education";

// Base type shared across all sections
interface BaseSection<T extends ProfileSectionType, C> {
  section: T;
  content: C;
}

// Section types
type AboutSection = BaseSection<"about", string[]>;

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

type ExperienceSection = BaseSection<"experience", ExperienceItem[]>;

interface EducationItem {
  degree: string;
  description: string;
  institution: string;
  duration: string;
}

type EducationSection = BaseSection<"education", EducationItem[]>;

// Union type of all possible profile sections
type ProfileSection = AboutSection | ExperienceSection | EducationSection;

// Main data type for profileData array
export type ResumeData = ProfileSection[];
