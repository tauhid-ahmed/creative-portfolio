import type {
  NavItem,
  SocialLink,
  Skill,
  Project,
  Experience,
  Testimonial,
  Developer,
} from "@/lib/types";
import { env } from "@/env";

export const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/tauhid-ahmed",
    icon: "Github",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/tauhidxahmed/",
    icon: "Linkedin",
  },
  { platform: "X", url: "https://x.com", icon: "X" },
];

export const developer: Developer = {
  name: env.NEXT_PUBLIC_AUTHOR_NAME,
  title: "Frontend Developer",
  bio: "Passionate frontend developer with 5+ years of experience crafting exceptional digital experiences. Specialized in React, Next.js, and modern web technologies.",
  location: "Pabna, BD",
  email: "tauhidxtauhid@gmail.com",
  phone: "+880 1670-012716",
  avatar: "/placeholder.svg?height=600&width=600",
  resume: "/resume.pdf",
  typingTexts: [
    "Frontend Engineer",
    "UI/UX Enthusiast",
    "React Specialist",
    "Creative Coder",
  ],
};

export const skills: Skill[] = [
  {
    category: "Frontend",
    icon: "Code",
    items: [
      "React",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    color: "from-violet-500 to-purple-500",
  },
  {
    category: "UI Frameworks",
    icon: "Layers",
    items: [
      "Tailwind CSS",
      "shadcn/ui",
      "Material UI",
      "Bootstrap",
      "Chakra UI",
    ],
    color: "from-blue-500 to-cyan-400",
  },
  {
    category: "Animation",
    icon: "Sparkles",
    items: ["Framer Motion", "GSAP", "Three.js", "CSS Animations", "Lottie"],
    color: "from-amber-500 to-orange-400",
  },
  {
    category: "Design",
    icon: "Palette",
    items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "UI/UX Design"],
    color: "from-pink-500 to-rose-400",
  },
  {
    category: "Performance",
    icon: "Zap",
    items: ["Web Vitals", "Lighthouse", "Webpack", "Vite", "Code Splitting"],
    color: "from-emerald-500 to-green-400",
  },
  {
    category: "Mobile",
    icon: "Smartphone",
    items: [
      "React Native",
      "Responsive Design",
      "PWA",
      "App Design",
      "Touch Interfaces",
    ],
    color: "from-indigo-500 to-blue-400",
  },
];

export const projects: Project[] = [
  {
    id: "ecommerce-dashboard",
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive dashboard for e-commerce businesses with real-time analytics and inventory management.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Next.js", "Tailwind CSS", "Chart.js"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "frontend",
  },
  {
    id: "travel-booking",
    title: "Travel Booking Platform",
    description:
      "A modern travel booking platform with interactive maps, destination search, and personalized recommendations.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["TypeScript", "React", "GSAP", "Mapbox"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "fullstack",
  },
  {
    id: "creative-portfolio",
    title: "Creative Portfolio",
    description:
      "A creative portfolio website for a digital agency with advanced animations and interactive elements.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Framer Motion", "Three.js", "GSAP"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "design",
  },
  {
    id: "finance-app",
    title: "Finance App",
    description:
      "A personal finance application with expense tracking, budgeting tools, and interactive data visualizations.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "TypeScript", "D3.js", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "mobile",
  },
];

export const experiences: Experience[] = [
  {
    company: "TechCorp Inc.",
    position: "Senior Frontend Developer",
    duration: "2021 - Present",
    description:
      "Leading frontend development for enterprise applications, implementing modern UI/UX practices, and mentoring junior developers.",
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
    logo: "/placeholder.svg?height=100&width=100",
  },
  {
    company: "Digital Solutions",
    position: "Frontend Developer",
    duration: "2019 - 2021",
    description:
      "Developed responsive web applications and collaborated with design team to implement pixel-perfect interfaces.",
    technologies: ["React", "JavaScript", "CSS3", "RESTful APIs"],
    logo: "/placeholder.svg?height=100&width=100",
  },
  {
    company: "Creative Agency",
    position: "UI Developer",
    duration: "2017 - 2019",
    description:
      "Created interactive websites for clients across various industries, focusing on animations and user experience.",
    technologies: ["JavaScript", "HTML5", "CSS3", "jQuery"],
    logo: "/placeholder.svg?height=100&width=100",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    position: "Product Manager",
    company: "TechCorp Inc.",
    content:
      "Tauhid is an exceptional frontend developer who consistently delivers high-quality work. His attention to detail and creative problem-solving skills make him a valuable asset to any team.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Michael Chen",
    position: "CTO",
    company: "Digital Solutions",
    content:
      "Working with Tauhid was a pleasure. He has a deep understanding of modern web technologies and always goes above and beyond to create exceptional user experiences.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Emily Rodriguez",
    position: "Design Director",
    company: "Creative Agency",
    content:
      "Tauhid has a rare combination of technical expertise and design sensibility. He can take complex designs and implement them flawlessly while adding his own creative touches.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
];
