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
    title: {
      full: string;
      short: string;
    };
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
    firstName: string;
    lastName: string;
    title: string;
    bio: string;
    liveResume: string;
    linkedin: string;
    github: string;
    x: string;
    location: string;
    email: string;
    phone: string;
  }

  type ResumeData = import("./resume.d.ts").ResumeData;
}
