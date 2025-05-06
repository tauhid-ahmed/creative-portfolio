import { motion } from "motion/react";

export function SectionAnimation() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-30">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:2rem_2rem]" />
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-primary/5 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-primary/5 to-transparent z-10" />

      {/* Animated background blobs */}
      <div className="opacity-10">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
          animate={{
            x: [0, -200, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-purple-400/10 blur-3xl"
          animate={{
            x: [0, 200, 0],
            opacity: [0.5, 0.1, 0.5],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>
    </div>
  );
}
