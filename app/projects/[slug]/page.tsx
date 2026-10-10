
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export const instant = false;

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project Not Found | BUILDORA" };
  }

  return {
    title: `${project.name} | BUILDORA`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects.filter(
    (item) => item.slug !== project.slug,
  );

  const projectNumber = String(
    projects.findIndex((item) => item.slug === project.slug) + 1,
  ).padStart(3, "0");

  return (
    <main className="min-h-screen overflow-hidden bg-[#F4F1EB] text-[#20211F]">
      {/* Project hero */}
      <section className="container pb-12 pt-8 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-14">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 text-sm text-[#777873] transition-colors hover:text-[#C7784A]"
          >
            <span
              aria-hidden="true"
              className="transition-transform group-hover:-translate-x-1"
            >
              ←
            </span>
            All projects
          </Link>

          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#777873]">
            BUILDORA / SELECTED WORK
          </span>
        </div>

        <div className="mt-12 grid gap-8 md:mt-20 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-end lg:gap-12">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-medium uppercase tracking-[0.17em] text-[#777873]">
              <span className="h-px w-7 bg-[#C7784A]" />
              <span>{project.category}</span>
              <span className="text-[#C7784A]">/</span>
              <span>{project.year}</span>
              <span className="text-[#C7784A]">/</span>
              <span>Project {projectNumber}</span>
            </div>

            <h1 className="mt-7 max-w-5xl text-[clamp(2.7rem,7.5vw,7rem)] font-medium leading-[0.96] tracking-[-0.075em]">
              {project.name}
              <span className="text-[#898A83]">.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#777873] sm:mt-8 sm:text-lg sm:leading-9">
              {project.summary}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 border-t border-[#20211F]/15 pt-5 lg:grid-cols-1 lg:gap-6 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            <div>
              <p className="text-[9px] font-medium uppercase tracking-[0.17em] text-[#898A83]">
                Project type
              </p>
              <p className="mt-2 text-sm leading-6">{project.scope}</p>
            </div>

            <div>
              <p className="text-[9px] font-medium uppercase tracking-[0.17em] text-[#898A83]">
                Project status
              </p>
              <p className="mt-2 text-sm leading-6">{project.location}</p>
            </div>
          </div>
        </div>

        {/* Main architectural image */}
        <div className="group relative mt-10 aspect-[5/4] overflow-hidden bg-[#E4DED4] sm:mt-14 sm:aspect-[16/9] lg:mt-16 lg:aspect-[16/8.5]">
          <Image
            src={project.image}
            alt={`${project.name} architectural concept`}
            fill
            priority
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 1400px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#20211F]/45 via-transparent to-[#20211F]/10" />

          <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between gap-4 p-4 text-[9px] font-medium uppercase tracking-[0.16em] text-white sm:p-7 sm:text-[10px]">
            <span>BUILDORA / ARCHITECTURE</span>
            <span>{project.year}</span>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 text-white sm:p-7 lg:p-9">
            <div>
              <p className="text-[9px] font-medium uppercase tracking-[0.17em] text-white/75 sm:text-[10px]">
                {project.category} / CONCEPT STUDY
              </p>
              <p className="mt-2 max-w-xl text-xl font-medium leading-tight tracking-[-0.04em] sm:text-3xl lg:text-4xl">
                Designed around the experience of space.
              </p>
            </div>

            <span
              aria-hidden="true"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/60 text-lg sm:h-12 sm:w-12"
            >
              ↗
            </span>
          </div>
        </div>

        <div className="mt-4 flex flex-col justify-between gap-2 border-b border-[#20211F]/15 pb-5 text-xs leading-6 text-[#777873] sm:flex-row sm:items-start">
          <p>Project {projectNumber} — {project.name}</p>
          <p className="max-w-xl sm:text-right">
            Illustrative architectural photography for a portfolio concept.
          </p>
        </div>
      </section>

      {/* Project overview */}
      <section className="border-t border-[#20211F]/15">
        <div className="container grid gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.65fr)] lg:gap-20 lg:py-28">
          <div>
            <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.17em] text-[#777873]">
              <span className="h-px w-7 bg-[#C7784A]" />
              Project overview
            </div>

            <h2 className="mt-7 max-w-3xl text-[clamp(2.5rem,5.2vw,5rem)] font-medium leading-[1.02] tracking-[-0.07em]">
              Design with
              <br />
              <span className="text-[#898A83]">purpose.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#777873] sm:mt-9 sm:text-lg sm:leading-9">
              {project.description}
            </p>

            <div className="mt-12 border-t border-[#20211F]/15 pt-6 sm:mt-14">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-medium tracking-tight sm:text-xl">
                  Concept scope
                </h3>
                <span className="text-[10px] uppercase tracking-[0.15em] text-[#898A83]">
                  {String(project.services.length).padStart(2, "0")} focus areas
                </span>
              </div>

              <ul className="mt-5">
                {project.services.map((service, index) => (
                  <li
                    key={service}
                    className="grid grid-cols-[32px_minmax(0,1fr)_20px] items-center gap-3 border-t border-[#20211F]/15 py-5 sm:grid-cols-[42px_minmax(0,1fr)_24px] sm:py-6"
                  >
                    <span className="text-[10px] tracking-[0.12em] text-[#C7784A]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm leading-6 sm:text-base">
                      {service}
                    </span>

                    <span
                      aria-hidden="true"
                      className="text-right text-[#C7784A]"
                    >
                      ↗
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Concept information panel */}
          <aside className="h-fit bg-[#EAE5DC] p-6 sm:p-8 lg:sticky lg:top-8 lg:p-9">
            <div className="flex items-center justify-between gap-4">
              <span className="text-[10px] font-medium uppercase tracking-[0.17em] text-[#777873]">
                About this concept
              </span>
              <span className="h-2 w-2 rounded-full bg-[#C7784A]" />
            </div>

            <div className="my-7 h-px bg-[#20211F]/15" />

            <p className="text-lg leading-8 tracking-[-0.025em] sm:text-xl sm:leading-9">
              A considered approach to material, light and the experience of space.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#777873]">
              {project.conceptNote}
            </p>

            <div className="mt-8 border-t border-[#20211F]/15 pt-5">
              <p className="text-[9px] font-medium uppercase tracking-[0.17em] text-[#898A83]">
                Interested in a project?
              </p>

              
<Link
  href="/contact"
  className="group mt-4 flex min-h-14 w-full items-center justify-between gap-4 bg-[#20211F] px-5 py-4 text-sm font-semibold text-[#F4F1EB] transition-colors duration-300 hover:bg-[#C7784A]"
>
  <span className="text-[#F4F1EB]">
    Start a conversation
  </span>

  <span
    aria-hidden="true"
    className="text-lg text-[#F4F1EB] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
  >
    ↗
  </span>
</Link>

            </div>
          </aside>
        </div>
      </section>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section className="border-t border-[#20211F]/15">
          <div className="container py-16 sm:py-20 lg:py-28">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.17em] text-[#777873]">
                  <span className="h-px w-7 bg-[#C7784A]" />
                  Continue exploring
                </div>

                <h2 className="mt-6 text-[clamp(2.5rem,5.5vw,5rem)] font-medium leading-[1.02] tracking-[-0.07em]">
                  More <span className="text-[#898A83]">concepts.</span>
                </h2>
              </div>

              <Link
                href="/projects"
                className="group inline-flex w-fit items-center gap-3 border-b border-[#20211F]/25 pb-2 text-sm transition-colors hover:border-[#C7784A] hover:text-[#A65E37]"
              >
                View all projects
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  ↗
                </span>
              </Link>
            </div>

            <div className="mt-10 grid gap-8 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:gap-9">
              {relatedProjects.slice(0, 2).map((item, index) => (
                <Link
                  key={item.slug}
                  href={`/projects/${item.slug}`}
                  className="group block min-w-0"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E4DED4]">
                    <Image
                      src={item.image}
                      alt={`${item.name} architectural concept`}
                      fill
                      sizes="(max-width: 639px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#20211F]/35 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                    <span className="absolute left-4 top-4 bg-[#F4F1EB] px-3 py-2 text-[9px] font-medium uppercase tracking-[0.15em]">
                      {item.category}
                    </span>

                    <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full border border-white/70 text-lg text-white transition-colors group-hover:bg-[#F4F1EB] group-hover:text-[#20211F]">
                      ↗
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 border-b border-[#20211F]/15 py-5">
                    <div className="min-w-0">
                      <p className="text-[9px] uppercase tracking-[0.16em] text-[#898A83]">
                        PROJECT {String(index + 1).padStart(2, "0")} / {item.year}
                      </p>

                      <h3 className="mt-3 text-xl font-medium tracking-[-0.035em] transition-colors group-hover:text-[#A65E37] sm:text-2xl">
                        {item.name}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#777873]">
                        {item.summary}
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className="mt-6 shrink-0 text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    >
                      ↗
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom navigation */}
      <section className="border-t border-[#20211F]/15">
        <div className="container flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:py-10">
          <Link
            href="/projects"
            className="group inline-flex w-fit items-center gap-3 text-sm text-[#777873] transition-colors hover:text-[#20211F]"
          >
            <span
              aria-hidden="true"
              className="transition-transform group-hover:-translate-x-1"
            >
              ←
            </span>
            Back to all projects
          </Link>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-3 text-sm font-medium transition-colors hover:text-[#A65E37]"
          >
            Have a project in mind?
            <span
              aria-hidden="true"
              className="text-[#C7784A] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              ↗
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
