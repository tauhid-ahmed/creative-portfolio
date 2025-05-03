export interface NavItem {
  name: string
  href: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface Skill {
  category: string
  icon: string
  items: string[]
  color: string
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  githubUrl: string
  featured: boolean
  category: "frontend" | "fullstack" | "design" | "mobile"
}

export interface Experience {
  company: string
  position: string
  duration: string
  description: string
  technologies: string[]
  logo?: string
}

export interface Testimonial {
  name: string
  position: string
  company: string
  content: string
  avatar?: string
}

export interface Developer {
  name: string
  title: string
  bio: string
  location: string
  email: string
  phone: string
  avatar: string
  resume: string
  typingTexts: string[]
}
