import React from "react";
import { cn } from "../utils";

export function Heading1(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className={cn("text-4xl font-bold", props.className)} {...props} />
  );
}

export function Paragraph(props: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-base text-text-muted", props.className)} {...props} />
  );
}