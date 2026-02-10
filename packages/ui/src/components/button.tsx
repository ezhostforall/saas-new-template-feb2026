import type { ButtonHTMLAttributes } from "react";
import { cn } from "../lib";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
        variant === "default"
          ? "bg-slate-900 text-white hover:bg-slate-800"
          : "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100",
        className
      )}
      {...props}
    />
  );
}
