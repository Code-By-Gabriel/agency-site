import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[120px] w-full rounded-lg border-[1.5px] bg-muted/30 px-4 py-3 text-base",
        "placeholder:text-muted-foreground",
        "transition-colors outline-none",
        "focus-visible:border-foreground focus-visible:bg-background focus-visible:ring-2 focus-visible:ring-foreground/10",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };