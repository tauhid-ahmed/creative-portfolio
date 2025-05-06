// components/timeline/index.tsx

import { Heading } from "@/components/heading";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils"; // optional utility for merging classNames

// Base prop shared across timeline components
type BaseProps = {} & React.HTMLAttributes<HTMLDivElement>;

// Root component
function Root({ className, children, ...props }: BaseProps) {
  return (
    <div
      className={cn(
        "relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-primary before:to-primary/20 before:rounded-full before:-translate-x-1/2 after:absolute after:size-4 after:bg-primary after:rounded-full after:left-0 after:top-1.5 after:-translate-x-1/2 after:animate-pulse alternate before:bg-size-[200%_200%] before:animate-bg-y",
        className
      )}
      {...props}
    >
      <div className="space-y-2">{children}</div>
    </div>
  );
}

// Title
function Title({ className, children, ...props }: BaseProps) {
  return (
    <Heading
      as="h3"
      size="h5"
      align="left"
      className={cn("", className)}
      {...props}
    >
      {children}
    </Heading>
  );
}

// Subtitle
function Subtitle({ className, children, ...props }: BaseProps) {
  return (
    <Heading
      as="h4"
      size="h6"
      align="left"
      className={cn("text-sm text-primary", className)}
      {...props}
    >
      {children}
    </Heading>
  );
}

// Description
function Description({ className, children, ...props }: BaseProps) {
  return (
    <p className={cn("text-muted-foreground", className)} {...props}>
      {children}
    </p>
  );
}

// Tags
function Tags({ className, children, ...props }: BaseProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)} {...props}>
      {children}
    </div>
  );
}

// Tag
function Tag({ className, children, ...props }: BaseProps) {
  return (
    <Badge
      className={cn(
        "bg-primary/10 text-primary border border-primary/20",
        className
      )}
      {...props}
    >
      {children}
    </Badge>
  );
}

// Compound export
export const Timeline = {
  Root,
  Title,
  Subtitle,
  Description,
  Tags,
  Tag,
};
