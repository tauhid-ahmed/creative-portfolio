import Card3D from "@/components/card-3d";
import { motion } from "motion/react";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

export function MyStats() {
  return (
    <motion.div
      variants={itemVariants}
      className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4 pt-4"
    >
      {[
        { number: "4+", label: "Years Experience" },
        { number: "50+", label: "Projects Completed" },
        { number: "30+", label: "Happy Clients" },
        { number: "15+", label: "Technologies" },
      ].map((item, index) => (
        <Card3D key={index} className="modern-card rounded-xl overflow-hidden">
          <div className="p-4 text-center">
            <h4 className="font-bold text-4xl gradient-text mb-1">
              {item.number}
            </h4>
            <p className="text-sm text-muted-foreground">{item.label}</p>
          </div>
        </Card3D>
      ))}
    </motion.div>
  );
}
