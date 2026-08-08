import React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-surface border border-border rounded-[8px] md:rounded-[15px] p-6  transition-all duration-200 hover:shadow-md hover:border-neutral-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
