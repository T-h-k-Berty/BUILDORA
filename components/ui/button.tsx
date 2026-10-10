import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const variantClass =
    variant === "primary" ? "btn-primary" : "btn-outline";

  return (
    <Link
      href={href}
      className={`btn ${variantClass} ${className}`.trim()}
    >
      {children}
    </Link>
  );
}