
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | BUILDORA",
  description:
    "Explore BUILDORA's residential construction, commercial construction and renovation service areas.",
};

const services = [
  {
    number: "01",
    category: "LIVING SPACES",
    title: "Residential Construction",
    description:
      "Thoughtful homes shaped around everyday living, natural light, practical layouts and a clear design direction.",
    detail: "HOMES & RESIDENTIAL SPACES",
  },
  {
    number: "02",
    category: "WORK & BUSINESS",
    title: "Commercial Construction",
    description:
      "Purpose-driven environments for businesses, retail and workspaces, balancing function, atmosphere and identity.",
    detail: "COMMERCIAL & BUSINESS SPACES",
  },
  {
    number: "03",
    category: "REIMAGINED SPACES",
    title: "Renovation & Remodeling",
    description:
      "Considered transformations that bring new purpose, improved flow and a fresh perspective to existing spaces.",
    detail: "RENOVATION & REMODELING",
  },
];

const principles = [
  {
    number: "01",
    title: "Purpose before form.",
    description:
      "Every space begins with understanding how it should function and how people will experience it.",
  },
  {
    number: "02",
    title: "Materials with meaning.",
    description:
      "A restrained material palette creates balance, texture and a timeless visual direction.",
  },
  {
    number: "03",
    title: "Details matter.",
    description:
      "Proportion, natural light and the relationship between elements help create a considered result.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F4F1EB] text-[#20211F]">
      {/* HERO */}
      <section className="container pb-16 pt-10 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-sm text-[#777873] transition-colors hover:text-[#C7784A]"
        >
          <span aria-hidden="true">←</span>
          Back home
        </Link>

        <div className="mt-16 grid gap-8 lg:mt-24 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="min-w-0">
            <p className="eyebrow flex items-center gap-3">
              <span
                aria-hidden="true"
                className="inline-block h-px w-8 shrink-0 bg-[#C7784A]"
              />
              WHAT WE DO
            </p>

            <h1 className="mt-7 max-w-5xl text-[clamp(3rem,7.3vw,7rem)] font-medium leading-[0.96] tracking-[-0.075em]">
              A considered
              <br className="hidden sm:block" /> approach to{" "}
              <span className="text-[#858680]">every space.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#777873] sm:text-lg sm:leading-9">
              From new spaces to thoughtful transformations, we focus on
              purpose, proportion and a clear architectural vision.
            </p>
          </div>

          <div className="flex items-center gap-4 border-t border-[#20211F]/15 pt-5 lg:min-w-40 lg:justify-end lg:border-0 lg:pt-0">
            <span className="text-3xl font-light tracking-[-0.06em]">
              03
            </span>
            <span className="max-w-24 text-[10px] leading-5 tracking-[0.16em] text-[#777873]">
              AREAS OF
              <br />
              FOCUS
            </span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="service-list"
        className="container pb-20 sm:pb-28 lg:pb-36"
        aria-label="Our services"
      >
        <div className="flex items-center justify-between gap-4 border-y border-[#20211F]/20 py-4">
          <p className="text-[10px] font-medium tracking-[0.18em] text-[#777873]">
            OUR SERVICES
          </p>
          <p className="text-[10px] tracking-[0.14em] text-[#777873]">
            2026 / OVERVIEW
          </p>
        </div>

        <div>
          {services.map((service) => (
            <article
              key={service.number}
              className="group grid gap-5 border-b border-[#20211F]/20 py-8 transition-colors duration-300 sm:py-10 lg:grid-cols-[64px_minmax(0,1fr)_minmax(240px,0.8fr)_48px] lg:items-center lg:gap-7 lg:py-12"
            >
              <span className="text-xs tracking-[0.12em] text-[#C7784A]">
                {service.number}
              </span>

              <div className="min-w-0">
                <p className="mb-3 text-[9px] font-medium tracking-[0.18em] text-[#777873] sm:text-[10px]">
                  {service.category}
                </p>

                <h2 className="text-[clamp(1.65rem,3.2vw,2.8rem)] font-medium leading-tight tracking-[-0.055em] transition-colors duration-300 group-hover:text-[#A65E37]">
                  {service.title}
                </h2>
              </div>

              <div className="min-w-0 lg:pl-3">
                <p className="max-w-lg text-sm leading-7 text-[#777873] sm:text-base sm:leading-8">
                  {service.description}
                </p>

                <p className="mt-4 text-[9px] tracking-[0.14em] text-[#A65E37]">
                  {service.detail}
                </p>
              </div>

              <Link
                href="/contact"
                aria-label={`Enquire about ${service.title}`}
                className="flex h-11 w-11 items-center justify-center self-start rounded-full border border-[#20211F]/20 text-lg text-[#20211F] transition-all duration-300 hover:border-[#20211F] hover:bg-[#20211F] hover:text-[#F4F1EB] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C7784A] lg:self-center"
              >
                <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-5 sm:mt-10 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm leading-7 text-[#777873]">
            Have a particular space or project in mind? Let&apos;s discuss
            your requirements and explore the right direction.
          </p>

          <Link
            href="/contact"
            className="inline-flex min-h-[56px] w-full shrink-0 items-center justify-between gap-6 whitespace-nowrap bg-[#20211F] px-6 py-4 text-sm font-semibold leading-5 text-[#F4F1EB] no-underline transition-colors duration-300 hover:bg-[#C7784A] sm:w-auto sm:gap-8"
          >
            <span className="text-[#F4F1EB]">Discuss a project</span>
            <span className="text-[#F4F1EB]" aria-hidden="true">
              ↗
            </span>
          </Link>
        </div>
      </section>

      {/* APPROACH */}
      <section className="border-y border-[#20211F]/10 bg-[#EAE5DC]">
        <div className="container py-16 sm:py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="eyebrow flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="inline-block h-px w-8 bg-[#C7784A]"
                />
                OUR APPROACH
              </p>

              <h2 className="mt-7 max-w-xl text-[clamp(2.8rem,6vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.07em]">
                Less, but
                <br />
                <span className="text-[#858680]">considered.</span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-8 text-[#777873] sm:text-base">
                Good design starts with the right questions. We value
                clarity, thoughtful planning and decisions that serve
                the purpose of a space.
              </p>
            </div>

            <div className="border-t border-[#20211F]/20">
              {principles.map((principle) => (
                <article
                  key={principle.number}
                  className="grid gap-4 border-b border-[#20211F]/20 py-7 sm:grid-cols-[48px_1fr] sm:gap-6 sm:py-9"
                >
                  <span className="pt-1 text-[10px] tracking-[0.14em] text-[#C7784A]">
                    {principle.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-medium tracking-[-0.04em] sm:text-2xl">
                      {principle.title}
                    </h3>

                    <p className="mt-3 max-w-lg text-sm leading-7 text-[#777873]">
                      {principle.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="container py-16 sm:py-24 lg:py-32">
        <div className="relative isolate overflow-hidden bg-[#20211F] px-6 py-10 text-[#F4F1EB] sm:px-10 sm:py-14 lg:px-16 lg:py-20">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-3 right-0 -z-10 select-none whitespace-nowrap text-[clamp(5rem,15vw,13rem)] font-semibold leading-none tracking-[-0.09em] text-white/[0.035]"
          >
            BUILDORA
          </span>

          <div className="relative z-10 max-w-3xl">
            <p className="flex items-center gap-3 text-[10px] font-medium tracking-[0.18em] text-[#D6D2C9]">
              <span
                aria-hidden="true"
                className="inline-block h-px w-8 bg-[#C7784A]"
              />
              HAVE A PROJECT IN MIND?
            </p>

            <h2 className="mt-8 text-[clamp(2.7rem,6.5vw,5.7rem)] font-medium leading-[0.98] tracking-[-0.07em]">
              Good spaces
              <br />
              start with a
              <br />
              <span className="text-[#92938D]">conversation.</span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-[#C7C6C0] sm:text-base sm:leading-8">
              Tell us about the space you have in mind and the possibilities
              you would like to explore.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-[56px] w-full items-center justify-between gap-5 border border-white/35 bg-transparent px-5 py-4 text-sm font-semibold leading-5 text-[#F4F1EB] no-underline transition-colors duration-300 hover:border-[#C7784A] hover:bg-[#C7784A] sm:w-auto sm:min-w-[280px] sm:gap-8 sm:px-6"
            >
              <span className="text-[#F4F1EB]">
                Tell us about your project
              </span>
              <span className="text-[#F4F1EB]" aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 border-b border-[#20211F]/15 py-5 text-[9px] tracking-[0.14em] text-[#777873] sm:flex-row sm:items-center">
          <span>BUILDORA / SERVICES</span>
          <span>CONSTRUCTION · ARCHITECTURE · RENOVATION</span>
        </div>
      </section>
    </main>
  );
}
