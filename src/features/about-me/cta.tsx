import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { developer } from "@/data/portfolio-data";
import { ArrowRight, Download } from "lucide-react";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

export function CTA() {
  return (
    <>
      <motion.div
        variants={itemVariants}
        className="pt-4 flex flex-wrap justify-center lg:justify-start gap-4"
      >
        <Button
          asChild
          className="gap-2 bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 transition-opacity interactive"
        >
          <a href={developer.resume} download>
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </Button>

        <Button
          asChild
          variant="outline"
          className="gap-2 border-primary/20 hover:bg-primary/10 interactive"
        >
          <a href="#projects">
            View Projects
            <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </motion.div>
    </>
  );
}
