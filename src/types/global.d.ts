export {}; // keep this so the file is treated as a module

declare global {
  interface NavItem {
    name: string;
    href: string;
  }

  interface SocialLink {
    platform: string;
    url: string;
    icon: string;
  }

  interface Skill {
    category: string;
    icon: string;
    items: string[];
    color: string;
    description: string;
  }

  interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    demoUrl: string;
    githubUrl: string;
    featured: boolean;
    category: ("frontend" | "fullstack" | "design" | "mobile")[];
  }

  interface Testimonial {
    name: string;
    position: string;
    company: string;
    content: string;
    avatar?: string;
  }

  interface Developer {
    name: string;
    title: string;
    bio: string;
    location: string;
    email: string;
    phone: string;
    avatar: string;
    resume: string;
    typingTexts: string[];
  }

  type ResumeData = import("./resume.d.ts").ResumeData;
}
