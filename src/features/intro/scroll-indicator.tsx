import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";

export function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      animate={{
        y: [0, 8, 0],
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      <Button variant="ghost" size="icon" asChild className="text-primary ">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-5 w-5" />
        </a>
      </Button>
    </motion.div>
  );
}
