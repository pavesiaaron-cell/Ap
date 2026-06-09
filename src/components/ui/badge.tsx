import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "destructive" | "success" | "warning";
}

const variantClasses: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "border-transparent bg-slate-900 text-white",
  secondary: "border-transparent bg-slate-100 text-slate-900",
  outline: "text-slate-900 border-slate-200",
  destructive: "border-transparent bg-red-100 text-red-700",
  success: "border-transparent bg-green-100 text-green-700",
  warning: "border-transparent bg-amber-100 text-amber-700",
};

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
