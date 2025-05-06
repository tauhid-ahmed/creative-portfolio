import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  gradient?: boolean;
  weight?: "bold" | "semibold" | "medium" | "normal";
  align?: "left" | "center" | "right";
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "display";
};

const classnames = (size: Props["size"]) => ({
  "text-[clamp(3rem,5vw,4rem)] font-extrabold tracking-tight leading-tight":
    size === "display", // ~56–74px
  "text-[clamp(2.75rem,4.5vw,3.69rem)] font-bold tracking-tight": size === "h1", // ~44–59px
  "text-[clamp(2.25rem,4vw,2.95rem)] font-bold tracking-tight": size === "h2", // ~36–47px
  "text-[clamp(1.75rem,3vw,2.36rem)] font-semibold tracking-tight":
    size === "h3", // ~28–38px
  "text-[clamp(1.375rem,2.5vw,1.89rem)] font-semibold tracking-tight":
    size === "h4", // ~22–30px
  "text-[clamp(1.125rem,2vw,1.51rem)] font-medium": size === "h5", // ~18–24px
  "text-[clamp(0.875rem,1.5vw,0.875rem)] font-medium": size === "h6", // Fixed 14px
});

export function Heading({
  gradient = true,
  as = "h2",
  weight = "bold",
  align = "center",
  size = "h2",
  className,
  children,
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
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
