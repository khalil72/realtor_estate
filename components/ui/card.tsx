import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-ink/8 bg-white shadow-[0_2px_20px_-8px_rgba(11,11,12,0.12)]",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

export { Card };
