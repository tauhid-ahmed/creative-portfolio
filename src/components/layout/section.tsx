import { cn } from "@/lib/utils";
import { Heading } from "@/components/heading";
import { forwardRef } from "react";

type Props = React.ComponentProps<"section"> & {};

export const Section = forwardRef<HTMLElement, Props>(function Section(
  { className, children, ...props }: Props,
  ref
) {
  return (
    <section
      ref={ref}
      className={cn(
        "py-14 md:py-20 lg:py-28 relative overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
});

type SectionProps = React.ComponentProps<"div"> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  align?: "center" | "left" | "right";
};

export function SectionContent({
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <div className={cn("space-y-6 lg:space-y-10", className)} {...props}>
      {children}
    </div>
  );
}

export function SectionHeader({
  align = "center",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <div
      className={cn("space-y-4 px-6", align && `text-${align}`, className)}
      {...props}
    >
      {children}
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

export function SectionDescription({
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <p
      className={cn("text-muted-foreground max-w-2xl mx-auto", className)}
      {...props}
    >
      {children}
    </p>
  );
}
