import { cn } from "@/lib/utils";

export const Logo = ({
  className,
  as: Component = "div",
}: {
  className?: string;
  as?: "h1" | "div" | "span";
}) => {
  return (
    <Component className={cn("text-xl font-semibold", className)}>
      Ike
      <span className="text-primary dark:text-accent-foreground/55">.ai</span>
    </Component>
  );
};
