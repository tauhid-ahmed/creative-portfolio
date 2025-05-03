import ParallaxSection from "@/components/parallax-section";
import { motion } from "motion/react";

const tech = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Three.js",
  "Node.js",
  "GraphQL",
  "Figma",
  "Git",
  "Vitest",
  "Material UI",
  "Bootstrap",
  "AuthJS",
  "Prisma",
  "Drizzle",
  "PostgreSQL",
  "RestAPI",
];

export function TechStackShowcase({ isInView }: { isInView: boolean }) {
  return (
    <div className="mt-20">
      <ParallaxSection speed={0.2} direction="up">
        <h3 className="text-xl font-bold mb-8 gradient-text text-center">
          My Tech Stack
        </h3>
      </ParallaxSection>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {tech.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="modern-card flex items-center justify-center p-4 h-16 text-center"
          >
            <span className="font-medium">{tech}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// export function TechStackShowcase({ isInView }: { isInView: boolean }) {
//   return (
//     <div className="mt-20 overflow-hiddenx">
//       <h3 className="text-xl font-bold mb-8 gradient-text text-center">
//         My Tech Stack
//       </h3>
//       <div className="relative w-full h-20 overflow-hiddexn">
//         <div className=" animate-marquee flex w-max">
//           {[...tech, ...tech].map((item, index) => (
//             <div
//               key={index}
//               className="modern-card text-2xl min-w-24 mx-2 flex items-center justify-center p-4 h-16 text-center shrink-0"
//             >
//               <span className="font-medium">{item}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
