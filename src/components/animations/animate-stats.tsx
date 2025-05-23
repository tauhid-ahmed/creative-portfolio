"use client";
import { cn } from "@/lib/utils";
import { animate } from "motion/react";
import { useEffect, useRef } from "react";

type AnimateStatsProps = {
  data: {
    from?: number;
    to: number;
    duration?: number;
    inView: boolean;
    suffix?: string;
  };
} & React.ComponentProps<"span">;

export function AnimateStats({
  data = { from: 0, to: 0, inView: false },
  className,
  ...props
}: AnimateStatsProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!data.inView) return;
    const controls = animate(data.from, data.to, {
      duration: data.duration ?? 2,
      onUpdate: (latest) => {
        if (nodeRef.current && latest !== undefined) {
          nodeRef.current.textContent = latest.toFixed(0);
          if (latest === data.to) {
            nodeRef.current.textContent += data.suffix;
            controls.stop();
          }
        }
      },
    });

    return () => controls.stop();
  }, [data.inView, data.duration, data.from, data.to, data.suffix]);

  return (
    <span
      ref={nodeRef}
      className={cn("font-bold text-4xl gradient-text mb-1", className)}
      {...props}
    >
      {data.to}
      {data.suffix}
    </span>
  );
}
