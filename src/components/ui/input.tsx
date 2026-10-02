import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-11 w-full min-w-0 rounded-lg border-[1.5px] bg-muted/30 px-4 py-2 text-base",
        "placeholder:text-muted-foreground",
        "transition-colors outline-none",
        "focus-visible:border-foreground focus-visible:bg-background focus-visible:ring-2 focus-visible:ring-foreground/10",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "file:text-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium",
        className
      )}
      {...props}
    />
  );
}

export { Input };