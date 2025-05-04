import type {
  NavItem,
  SocialLink,
  Skill,
  Project,
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
    category: "Frontend Development",
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
    description:
      "Developing responsive, dynamic, and maintainable user interfaces using modern JavaScript frameworks and web technologies to deliver seamless digital experiences.",
  },
  {
    category: "UI Frameworks & Component Libraries",
    icon: "Layers",
    items: [
      "Tailwind CSS",
      "shadcn/ui",
      "Material UI",
      "Bootstrap",
      "Chakra UI",
    ],
    color: "from-blue-500 to-cyan-400",
    description:
      "Accelerating interface development with scalable component libraries and utility-first CSS frameworks to ensure consistency, flexibility, and design system alignment.",
  },
  {
    category: "Web Animation & Interaction",
    icon: "Sparkles",
    items: ["Framer Motion", "GSAP", "Three.js", "CSS Animations", "Lottie"],
    color: "from-amber-500 to-orange-400",
    description:
      "Creating immersive and interactive user experiences through animation, motion design, and real-time 3D rendering while ensuring performance and accessibility.",
  },
  {
    category: "Digital Design & Prototyping",
    icon: "Palette",
    items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "UI/UX Design"],
    color: "from-pink-500 to-rose-400",
    description:
      "Transforming ideas into intuitive, user-centered interfaces by combining creative design tools with deep understanding of usability and visual communication.",
  },
  {
    category: "Performance Optimization",
    icon: "Zap",
    items: ["Web Vitals", "Lighthouse", "Webpack", "Vite", "Code Splitting"],
    color: "from-emerald-500 to-green-400",
    description:
      "Ensuring high-performance web applications by monitoring core vitals, optimizing assets, and leveraging advanced bundling and loading strategies.",
  },
  {
    category: "Mobile & Responsive Development",
    icon: "Smartphone",
    items: [
      "React Native",
      "Responsive Design",
      "PWA",
      "App Design",
      "Touch Interfaces",
    ],
    color: "from-indigo-500 to-blue-400",
    description:
      "Delivering seamless mobile experiences through responsive layouts, progressive web app capabilities, and cross-platform development tools.",
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

export const profileData = [
  {
    section: "about",
    content: [
      "Hi, I'm a web developer with over 5 years of experience building fast, accessible, and responsive web applications using tools like React, Next.js, and TypeScript. I focus on writing clean, scalable code that solves real problems.",
      "I enjoy working at the intersection of design and development, creating user interfaces that are both intuitive and visually polished. I believe good design enhances functionality and leads to better user experiences.",
      "I'm always learning—exploring new technologies, refining my workflow, and improving performance. My goal is to build meaningful digital products that leave a lasting impression.",
    ],
  },
  {
    section: "experience",
    content: [
      {
        company: "TechCorp Inc.",
        position: "Senior Frontend Developer",
        duration: "2021 - Present",
        description:
          "Leading frontend development for enterprise applications, implementing modern UI/UX practices, and mentoring junior developers.",
        technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
      },
      {
        company: "Digital Solutions",
        position: "Frontend Developer",
        duration: "2019 - 2021",
        description:
          "Developed responsive web applications and collaborated with design team to implement pixel-perfect interfaces.",
        technologies: ["React", "JavaScript", "CSS3", "RESTful APIs"],
      },
      {
        company: "Creative Agency",
        position: "UI Developer",
        duration: "2017 - 2019",
        description:
          "Created interactive websites for clients across various industries, focusing on animations and user experience.",
        technologies: ["JavaScript", "HTML5", "CSS3", "jQuery"],
      },
    ],
  },
  {
    section: "education",
    content: [
      {
        degree: "Bachelor of Science in Computer Science",
        description: "Majoring in Web Development",
        institution: "University of XYZ",
        duration: "2014 - 2018",
        gpa: "3.8/4.0",
      },
      {
        degree: "High School Diploma",
        description: "Graduated with honors",
        institution: "ABC High School",
        duration: "2010 - 2014",
        gpa: "4.0/4.0",
      },
    ],
  },
];

export const developmentProcess = [
  {
    title: "Discovery & Planning",
    description:
      "Collaborate with stakeholders to define goals, gather requirements, and outline a scalable technical architecture.",
    icon: "FileSearch",
  },
  {
    title: "Design & Prototyping",
    description:
      "Craft intuitive wireframes, refine UI/UX design systems, and prototype user flows for validation and feedback.",
    icon: "Palette",
  },
  {
    title: "Development",
    description:
      "Build robust, maintainable applications using modern frameworks, clean architecture, and industry best practices.",
    icon: "Code",
  },
  {
    title: "Testing & Optimization",
    description:
      "Implement rigorous testing, ensure cross-platform compatibility, and optimize performance for speed and accessibility.",
    icon: "Gauge",
  },
  {
    title: "Deployment & Lifecycle Management",
    description:
      "Deploy secure, production-ready builds, monitor real-world usage, and provide continuous updates and support.",
    icon: "Rocket",
  },
];
