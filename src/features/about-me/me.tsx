import Image from "next/image";
import Card3D from "@/components/card-3d";
import ParallaxSection from "@/components/parallax-section";
import { motion } from "motion/react";
import { developer } from "@/data/portfolio-data";

import me from "@/images/me/me.webp";

export default function Me({ isInView }: { isInView: boolean }) {
  return (
    <ParallaxSection direction="right" speed={0.3} className="overflow-hidden">
      <div className="relative border p-14 rounded-2xl">
        {/* Decorative elements */}
        <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/30 rounded-lg z-0"></div>
        <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-primary/30 rounded-lg z-0"></div>

        {/* Main image with 3D effect */}
        <Card3D className="aspect-square overflow-hidden rounded-xl border-2 border-primary/20 shadow-xl">
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 to-primary/50 mix-blend-overlay z-10" />

          {/* Image */}
          <div className="relative w-full">
            <Image
              src={me}
              alt="Developer portrait"
              className="object-cover size-full transition-transform duration-700 hover:scale-125"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            />

            {/* Subtle vignette effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
          </div>
        </Card3D>
        <motion.div
          className="absolute -bottom-3 -right-3 size-20 bg-primary/50 backdrop-blur rounded-full z-20 flex items-center justify-center text-white font-bold text-lg shadow-lg"
          initial={{ scale: 0, rotate: -20 }}
          animate={
            isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -20 }
          }
          transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
        >
          4+ Yrs
        </motion.div>
        <motion.div
          className="absolute top-1 right-1 bg-primary/30 backdrop-blur rounded-full px-4 py-2 border border-primary/40 shadow-lg z-30"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <span className="text-sm font-medium">Frontend Specialist</span>
        </motion.div>

        <motion.div
          className="absolute bottom-12 left-8 bg-primary/50 backdrop-blur rounded-full px-4 py-2 border border-primary/20 shadow-lg z-30"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span className="text-sm font-medium">
            React • Next.js • TypeScript
          </span>
        </motion.div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl -z-10" />
      </div>
    </ParallaxSection>
  );
}
