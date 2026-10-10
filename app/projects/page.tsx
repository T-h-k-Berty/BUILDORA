
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Renovation",
] as const;

type Category = (typeof categories)[number];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-[#F4F1EB] text-[#20211F]">
      {/* Page introduction */}
      <section className="container section-padding pb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#777873] transition-colors hover:text-[#20211F]"
        >
          <span aria-hidden="true">←</span>
          Back home
        </Link>

        <div className="mt-16 max-w-4xl md:mt-24">
          <p className="eyebrow">
            <span
              aria-hidden="true"
              className="mr-3 inline-block h-px w-8 bg-[#C7784A] align-middle"
            />
            Selected work / 2026
          </p>

          <h1 className="display-heading mt-6 max-w-4xl">
            Spaces shaped
            <br />
            <span className="text-[#777873]">with intention.</span>
          </h1>

          <div className="mt-7 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <p className="max-w-xl text-base leading-8 text-[#777873] md:text-lg">
              A collection of architectural concepts exploring light,
              material, proportion and the way we experience space.
            </p>

            <p
              className="text-xs uppercase tracking-[0.18em] text-[#777873]"
              aria-live="polite"
            >
              {filteredProjects.length.toString().padStart(2, "0")} Projects
            </p>
          </div>
        </div>
      </section>

      {/* Category filters */}
      <section className="container pt-8">
        <div
          className="flex flex-wrap items-center gap-2 border-y border-[#20211F]/15 py-5"
          role="group"
          aria-label="Filter projects by category"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={[
                  "inline-flex min-h-12 shrink-0 items-center justify-center",
                  "rounded-full border px-5 py-3 text-sm font-medium",
                  "leading-none transition-colors duration-200",
                  "focus-visible:outline focus-visible:outline-2",
                  "focus-visible:outline-offset-4 focus-visible:outline-[#C7784A]",
                  isActive
                    ? "border-[#20211F] bg-[#20211F] !text-[#F4F1EB] hover:bg-[#343530]"
                    : "border-[#20211F]/15 bg-transparent text-[#555650] hover:border-[#20211F]/50 hover:bg-[#20211F]/[0.04] hover:text-[#20211F]",
                ].join(" ")}
              >
                {category === "All" ? "All projects" : category}
              </button>
            );
          })}
        </div>
      </section>

      {/* Project gallery */}
      <section
        className="container section-padding pt-10 md:pt-14"
        aria-label="Architectural projects"
      >
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:gap-x-9 lg:gap-y-16">
            {filteredProjects.map((project, index) => (
              <article key={project.slug} className="group min-w-0">
                <Link
                  href={`/projects/${project.slug}`}
                  className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C7784A]"
                  aria-label={`View ${project.name} project concept`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E4DED4]">
                    <Image
                      src={project.image}
                      alt={`${project.name} architectural concept`}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      priority={index < 2}
                    />

                    <div className="absolute inset-0 bg-[#20211F]/0 transition-colors duration-300 group-hover:bg-[#20211F]/10" />

                    <span className="absolute right-4 top-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-[#F4F1EB] text-lg text-[#20211F] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      ↗
                    </span>

                    <span className="absolute bottom-4 left-4 bg-[#F4F1EB]/95 px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-[#20211F]">
                      Concept project
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 pt-5">
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-[#777873]">
                        {project.category}
                      </p>

                      <h2 className="mt-2 text-xl font-medium tracking-tight transition-colors duration-200 group-hover:text-[#A65E37] sm:text-2xl">
                        {project.name}
                      </h2>

                      <p className="mt-2 text-sm text-[#777873]">
                        {project.location}
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className="mt-5 shrink-0 text-lg text-[#777873] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#C7784A]"
                    >
                      ↗
                    </span>
                  </div>
                </Link>

                <p className="mt-4 max-w-lg text-sm leading-7 text-[#777873]">
                  {project.summary}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex min-h-64 flex-col items-center justify-center border border-dashed border-[#20211F]/20 px-6 text-center">
            <p className="text-lg font-medium">
              More projects are on the way.
            </p>

            <p className="mt-2 text-sm text-[#777873]">
              There are no projects in this category yet.
            </p>

            <button
              type="button"
              onClick={() => setActiveCategory("All")}
              className="mt-5 text-sm underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C7784A]"
            >
              View all projects
            </button>
          </div>
        )}
      </section>

      {/* Portfolio disclaimer */}
      <section className="container pb-20 md:pb-28">
        <div className="border-t border-[#20211F]/15 pt-6">
          <p className="max-w-3xl text-xs leading-6 text-[#777873]">
            Portfolio presentation concept. The projects shown are
            illustrative design concepts created to demonstrate BUILDORA&apos;s
            visual direction and digital experience. They are not represented
            as completed client projects.
          </p>
        </div>
      </section>
    </main>
  );
}
