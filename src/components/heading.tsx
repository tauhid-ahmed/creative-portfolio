import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  gradient?: boolean;
  weight?: "bold" | "semibold" | "medium" | "normal";
  align?: "left" | "center" | "right";
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const classnames = (size: Props["size"]) => ({
  "text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight": size === "h1", // ~40–80px
  "text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight": size === "h2", // ~32–64px
  "text-[clamp(1.75rem,4vw,3.25rem)] font-semibold tracking-tight":
    size === "h3", // ~28–52px
  "text-[clamp(1.5rem,3vw,2.5rem)] font-semibold tracking-tight": size === "h4", // ~24–40px
  "text-[clamp(1.125rem,2vw,1.5rem)] font-medium": size === "h5", // ~18–24px
  "text-[clamp(0.875rem,1.5vw,1rem)] font-medium": size === "h6", // ~14–16px
});

export function Heading({
  gradient = true,
  as = "h2",
  weight = "bold",
  align = "center",
  size = "h2",
  ...props
}: Props) {
  const Comp = as;
  return (
    <Comp
      className={cn(
        "font-medium",
        gradient &&
          "bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500",
        weight && `font-${weight}`,
        align && `text-${align}`,
        { ...classnames(size) },
        props.className
      )}
      {...props}
    >
      {props.children}
    </Comp>
  );
}
