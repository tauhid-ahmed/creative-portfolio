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
      "Creating immersive and  user experiences through animation, motion design, and real-time 3D rendering while ensuring performance and accessibility.",
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
    id: "E-commerce Platform",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce system built with modern web technologies, featuring product creation, image uploads, real-time inventory, and secure authentication. Includes a performant dashboard for business insights.",
    image: "/placeholder.svg?height=600&width=800",
    tags: [
      "Next.js",
      "Hono tRPC",
      "Drizzle ORM",
      "Shadcn UI",
      "Tailwindcss",
      "Motion for React",
      "Neon Postgres",
      "Redis",
      "Auth.js",
    ],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    category: ["fullstack"],
  },
  {
    id: "Creative-Portfolio",
    title: "Creative Portfolio",
    description:
      "A visually engaging portfolio site with smooth animations and modern UI components. Showcases creative work using motion effects and aesthetic design principles.",
    image: "/placeholder.svg?height=600&width=800",
    tags: [
      "Next.js",
      "Motion for React",
      "Shadcn UI",
      "Tailwindcss",
      "CSS Animations",
    ],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    category: ["frontend", "design"],
  },
  {
    id: "issue-tracker",
    title: "Issue Tracker App",
    description:
      "A robust issue tracking system inspired by modern project management tools. Supports ticket creation, status updates, and team collaboration — built with the same tech stack as the e-commerce app.",
    image: "/placeholder.svg?height=600&width=800",
    tags: [
      "Next.js",
      "Prisma ORM",
      "Auth.js",
      "Tailwindcss",
      "Redis",
      "Redix UI",
      "Neon Postgres",
      "Shadcn UI",
      "Motion for React",
      "Hono tRPC",
    ],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    category: ["fullstack"],
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

export const profileData: ResumeData = [
  {
    section: "about",
    content: [
      "I am Tauhid Ahmed, a self-taught web developer with over 5 years of experience building fast, responsive, and accessible web applications using technologies like React, Next.js, and TypeScript.",
      "My journey into development began during my university years, where I transitioned from a business background to software engineering through self-learning and hands-on practice.",
      "I’ve completed multiple freelance projects, earned certifications from global platforms, and currently work professionally as a frontend developer at Softnio, contributing to real-world, production-level systems.",
      "I care deeply about clean code, intuitive UI/UX, and continuous learning. My goal is to build impactful digital experiences that are user-focused and performance-driven.",
    ],
  },
  {
    section: "experience",
    content: [
      {
        company: "Softnio",
        position: "Frontend Developer",
        duration: "2024 – Present",
        description:
          "Building and maintaining scalable frontend applications. Collaborating with designers and backend engineers to deliver performant and user-friendly interfaces.",
        technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      },
      {
        company: "Freelance Projects",
        position: "Frontend Developer",
        duration: "2020 – 2024",
        description:
          "Designed, developed, and deployed full-stack web applications for clients across various industries. Handled everything from planning to production independently.",
        technologies: [
          "Next.js",
          "Node.js",
          "MongoDB",
          "Vercel",
          "Motion for React",
        ],
      },
    ],
  },
  {
    section: "education",
    content: [
      {
        degree: "Professional Training in Web & Software Development",
        description:
          "Completed online certifications and project-based courses in web development, JavaScript, React, and full-stack engineering.",
        institution: "freeCodeCamp, Coursera, YouTube, and other platforms",
        duration: "2017 – Present",
      },
      {
        degree: "Bachelor of Business Administration (BBA)",
        description:
          "Completed core business and management coursework. Developed a strong interest in software development during this period and began transitioning into the tech field through self-guided learning.",
        institution: "Private University, Bangladesh",
        duration: "2014 – 2018",
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
