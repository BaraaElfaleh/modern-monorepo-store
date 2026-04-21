import React from "react";
import { cn } from "../utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "success" | "error";
};

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-1 text-xs rounded-full font-medium",
        variant === "default" && "bg-surface text-text-main",
        variant === "success" && "bg-green-100 text-green-700",
        variant === "error" && "bg-red-100 text-red-600",
        className
      )}
      {...props}
    />
  );
}