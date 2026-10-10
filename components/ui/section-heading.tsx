import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <span className="eyebrow">{eyebrow}</span>

      <h2 className="section-heading mt-6 text-balance">
        {title}
      </h2>

      {description ? (
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}