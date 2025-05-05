import { cn } from "@/lib/utils";
import { Heading } from "@/components/heading";
import { forwardRef } from "react";

type Props = React.ComponentProps<"section"> & {};

export const Section = forwardRef<HTMLElement, Props>(function Section(
  { ...props }: Props,
  ref
) {
  return (
    <section
      ref={ref}
      className={cn("py-14 md:py-20 lg:py-28 relative", props.className)}
      {...props}
    >
      {props.children}
    </section>
  );
});

type SectionProps = React.ComponentProps<"div"> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  align?: "center" | "left" | "right";
};

export function SectionInner({ ...props }: SectionProps) {
  return (
    <div className={cn("space-y-8", props.className)} {...props}>
      {props.children}
    </div>
  );
}

export function SectionHeader({ align = "center", ...props }: SectionProps) {
  return (
    <div
      className={cn(
        "space-y-4 px-6",
        align && `text-${align}`,
        props.className
      )}
      {...props}
    >
      {props.children}
    </div>
  );
}

export function SectionName({ ...props }: SectionProps) {
  return (
    <Heading as="h2" size="h6" weight="medium" {...props}>
      <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 inline-block">
        {props.children}
      </span>
    </Heading>
  );
}

export function SectionTitle({
  as = "h3",
  size = "h3",
  ...props
}: SectionProps) {
  return (
    <Heading as={as} size={size} weight="bold" {...props}>
      {props.children}
    </Heading>
  );
}

export function SectionDescription({ ...props }: SectionProps) {
  return (
    <p
      className={cn("text-muted-foreground max-w-2xl mx-auto", props.className)}
      {...props}
    >
      {props.children}
    </p>
  );
}
