import { AnimateStats } from "@/components/animations/animate-stats";
import Card3D from "@/components/card-3d";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

export function MyStats() {
  const nodeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(nodeRef, { once: false });

  return (
    <motion.div
      ref={nodeRef}
      variants={itemVariants}
      className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4 pt-4"
    >
      {[
        { number: "4", suffix: "+", label: "Years Experience" },
        { number: "20", suffix: "+", label: "Projects Completed" },
        { number: "10", suffix: "K+", label: "Hours Worked" },
        { number: "15", suffix: "+", label: "Technologies" },
      ].map((item, index) => (
        <Card3D key={index} className="modern-card rounded-xl overflow-hidden">
          <div className="p-4 text-center">
            <AnimateStats
              data={{
                from: 0,
                to: parseInt(item.number),
                inView: isInView,
                suffix: item.suffix,
              }}
            />
            <p className="text-sm text-muted-foreground">{item.label}</p>
          </div>
        </Card3D>
      ))}
    </motion.div>
  );
}
