import React, { forwardRef } from "react";
import { cn } from "../utils";

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement>

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "animate-pulse rounded-xl bg-slate-200/70",
          className
        )}
        {...props}
      />
    );
  }
);

Skeleton.displayName = "Skeleton";

/* --------------------------- Skeleton Card --------------------------- */

export const SkeletonCard = forwardRef<HTMLDivElement>(

  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border border-slate-200 p-4 space-y-4 bg-white",
          className
        )}
        {...props}
      >
        <div className="h-40 w-full rounded-xl bg-slate-200 animate-pulse" />
        <div className="h-4 w-2/3 bg-slate-200 rounded animate-pulse" />
        <div className="h-4 w-1/2 bg-slate-200 rounded animate-pulse" />
        <div className="h-10 w-full bg-slate-200 rounded-xl animate-pulse" />
      </div>
    );
  }
);

SkeletonCard.displayName = "SkeletonCard";