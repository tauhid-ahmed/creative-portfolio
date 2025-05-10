import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export function ScrollIndicator() {
  return (
    <motion.div
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
        <Link href="#about" aria-label="Scroll down">
          <ArrowDown className="size-6 text-primary" />
        </Link>
      </Button>
    </motion.div>
  );
}
