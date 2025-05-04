import { cn } from "@/lib/utils";

type Props = {
  size?: "sm" | "md" | "lg";
} & React.ComponentProps<"div">;

export default function Container({ size, ...props }: Props) {
  return (
    <div
      className={cn("container mx-auto px-6", {
        "lg:max-w-4xl": size === "md",
        "lg:max-w-6xl": size === "lg",
      })}
    >
      {props.children}
    </div>
  );
}
