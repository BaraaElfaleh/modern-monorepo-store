import React from "react";
import { cn } from "../utils";

export function Input({
  // eslint-disable-next-line react/prop-types
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full px-3 py-2 rounded-xl border border-border bg-background",
        "focus:ring-2 focus:ring-primary/20 outline-none",
        className
      )}
      {...props}
    />
  );
}