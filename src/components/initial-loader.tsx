"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LucideLoader2 } from "lucide-react";

export default function InitialLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <div
            key="splash"
            className="flex h-screen items-center justify-center bg-background w-full"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <motion.div
                initial={{
                  y: 0,
                  opacity: 1,
                }}
                animate={{
                  y: "100%",
                  opacity: 0,
                }}
                transition={{
                  delay: (i - 1) * 0.05,
                }}
                key={i}
                className="h-screen w-1/10 bg-gray-300 dark:bg-stone-900"
              />
            ))}
          </div>
        )}
      </AnimatePresence>
      {mounted && children}
    </>
  );
}
