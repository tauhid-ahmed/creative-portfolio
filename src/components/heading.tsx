import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  gradient?: boolean;
  weight?: "bold" | "semibold" | "medium" | "normal";
  align?: "left" | "center" | "right";
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const classnames = (size: Props["size"]) => ({
  "text-[clamp(2.5rem,6vw,5rem)] tracking-tight": size === "h1",
  "text-[clamp(2rem,5vw,4rem)] tracking-tight": size === "h2",
  "text-[clamp(1.75rem,4vw,3rem)] tracking-tight": size === "h3",
  "text-[clamp(1.5rem,3.5vw,2.25rem)] tracking-tight": size === "h4",
  "text-[clamp(1.25rem,3vw,1.5rem)]": size === "h5",
  "text-sm": size === "h6",
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
