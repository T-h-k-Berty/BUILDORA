
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

const services = [
  {
    number: "01",
    title: "Residential",
    description:
      "Thoughtfully planned living spaces shaped around the people who inhabit them.",
    detail: "Living spaces",
  },
  {
    number: "02",
    title: "Commercial",
    description:
      "Purpose-driven environments balancing functionality, atmosphere and identity.",
    detail: "Work & business",
  },
  {
    number: "03",
    title: "Renovation",
    description:
      "Considered transformations that bring fresh perspective to existing spaces.",
    detail: "Reimagined spaces",
  },
];

export default function HomePage() {
  const featuredProject = projects[0];
  const supportingProjects = projects.slice(1);

  return (
    <>
      <SiteHeader />

      <main className="homepage-main">
        {/* HERO */}
        
{/* HERO */}
<section
  id="home"
  className="container premium-hero scroll-mt-24"
>
  <div className="premium-hero-top">
    <div className="premium-hero-identity">
      <span className="premium-hero-accent" aria-hidden="true" />
      <span className="eyebrow">
        Construction · Architecture · Renovation
      </span>
    </div>

    <span className="hero-index">
      <span className="hero-index-dot" aria-hidden="true" />
      INDEPENDENT PORTFOLIO
      <span className="hero-index-divider" aria-hidden="true" />
      2026
    </span>
  </div>

  <div className="premium-hero-grid">
    <div className="premium-hero-copy">
      <h1 className="display-heading premium-display">
        Built with
        <br />
        <span className="text-muted">intention.</span>
      </h1>

      <p className="premium-hero-description">
        Thoughtful architecture. Considered materials.
        Spaces designed around the way we live, work
        and experience the world.
      </p>

      <div className="premium-hero-actions">
        <Button href="/#projects">
          Explore Selected Work{" "}
          <span aria-hidden="true">↗</span>
        </Button>

        <Link
          href="/contact"
          className="premium-text-link"
        >
          Start a conversation
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>

    <Link
      href={
        projects[0]
          ? `/projects/${projects[0].slug}`
          : "/projects"
      }
      className="premium-hero-visual"
      aria-label="Explore featured architectural concept"
    >
      <div
        className="premium-hero-photo"
        role="img"
        aria-label="Contemporary residential interior concept"
      />

      <div className="premium-hero-visual-top">
        <span>FEATURED STUDY</span>
        <span>№ 001</span>
      </div>

      <div className="premium-hero-visual-bottom">
        <div>
          <p>ARCHITECTURE / SPATIAL DESIGN</p>
          <h2>Spaces shaped around living.</h2>
        </div>

        <span
          className="premium-visual-arrow"
          aria-hidden="true"
        >
          ↗
        </span>
      </div>
    </Link>

    <div className="premium-hero-meta">
      <div>
        <span className="premium-meta-number">01</span>
        <p>Thoughtful planning</p>
      </div>

      <div>
        <span className="premium-meta-number">02</span>
        <p>Material-led design</p>
      </div>

      <div>
        <span className="premium-meta-number">03</span>
        <p>Purposeful spaces</p>
      </div>
    </div>
  </div>

  <div className="premium-scroll-cue">
    <span className="premium-scroll-line" />
    <span>SCROLL TO EXPLORE</span>
  </div>
</section>


        {/* SELECTED WORK */}
        <section
          id="projects"
          className="premium-work-section scroll-mt-24"
        >
          <div className="container section-padding">
            <div className="premium-section-top">
              <div>
                <span className="eyebrow">Selected work / 001—003</span>

                <SectionHeading
                  eyebrow=""
                  title={
                    <>
                      Spaces with
                      <br />
                      <span className="text-muted">
                        a point of view.
                      </span>
                    </>
                  }
                  description="A collection of conceptual architectural studies exploring proportion, natural light, texture and material."
                />
              </div>

              <Link
                href="/projects"
                className="premium-outline-link"
              >
                View all projects
                <span aria-hidden="true">↗</span>
              </Link>
            </div>

            {featuredProject && (
              <div className="premium-featured-project">
                <Link
                  href={`/projects/${featuredProject.slug}`}
                  className="premium-featured-image"
                  aria-label={`Explore ${featuredProject.name}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={featuredProject.image}
                    alt={`${featuredProject.name} architectural concept`}
                    loading="lazy"
                  />

                  <span className="premium-image-label">
                    BUILDORA / FEATURED CONCEPT
                  </span>

                  <span
                    className="premium-image-arrow"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </Link>

                <div className="premium-featured-info">
                  <div>
                    <p className="premium-project-kicker">
                      {featuredProject.category} /{" "}
                      {featuredProject.location}
                    </p>

                    <h3>{featuredProject.name}</h3>

                    <p className="premium-project-description">
                      {featuredProject.summary}
                    </p>
                  </div>

                  <Link
                    href={`/projects/${featuredProject.slug}`}
                    className="premium-text-link"
                  >
                    Explore project
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            )}

            <div className="premium-supporting-projects">
              {supportingProjects.map((project, index) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="premium-supporting-card"
                >
                  <div className="premium-supporting-image">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={`${project.name} architectural concept`}
                      loading="lazy"
                    />

                    <span
                      className="premium-supporting-arrow"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </div>

                  <div className="premium-supporting-meta">
                    <span>
                      0{index + 2} / {project.category}
                    </span>

                    <span>{project.location}</span>
                  </div>

                  <h3>{project.name}</h3>

                  <p>{project.summary}</p>
                </Link>
              ))}
            </div>

            <p className="premium-disclaimer">
              Portfolio concept projects. Images are illustrative
              and do not represent verified BUILDORA construction work.
            </p>
          </div>
        </section>

        {/* DESIGN APPROACH */}
        <section
          id="approach"
          className="premium-approach-section scroll-mt-24"
        >
          <div className="container section-padding">
            <div className="premium-approach-grid">
              <div className="premium-approach-heading">
                <span className="eyebrow">
                  The BUILDORA approach
                </span>

                <h2 className="section-heading">
                  Less, but
                  <br />
                  <span className="text-muted">
                    considered.
                  </span>
                </h2>
              </div>

              <div className="premium-approach-copy">
                <p>
                  Good design starts before the first material
                  is chosen. It begins with understanding how a
                  space should feel, function and evolve over time.
                </p>

                <p>
                  Our concept-led approach brings purpose,
                  proportion and material into one clear design
                  direction.
                </p>

                <Link
                  href="/services"
                  className="premium-text-link"
                >
                  Discover our approach
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>

            <div className="premium-principles">
              <div>
                <span>01 / PURPOSE</span>
                <h3>Designed to matter.</h3>
                <p>
                  Every decision begins with the intended use
                  and experience of a space.
                </p>
              </div>

              <div>
                <span>02 / MATERIAL</span>
                <h3>Texture with intention.</h3>
                <p>
                  Natural finishes, honest materials and
                  thoughtful combinations.
                </p>
              </div>

              <div>
                <span>03 / PROPORTION</span>
                <h3>Balance in every detail.</h3>
                <p>
                  Light, scale and spatial relationships working
                  together as a whole.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="premium-services-section scroll-mt-24"
        >
          <div className="container section-padding">
            <div className="premium-services-heading">
              <div>
                <span className="eyebrow">Areas of focus</span>

                <h2 className="section-heading">
                  Built around
                  <br />
                  <span className="text-muted">
                    your vision.
                  </span>
                </h2>
              </div>

              <p>
                Different spaces have different demands.
                Our approach starts with the purpose behind
                every project.
              </p>
            </div>

            <div className="premium-service-list">
              {services.map((service) => (
                <Link
                  key={service.number}
                  href="/services"
                  className="premium-service-row"
                >
                  <span className="premium-service-number">
                    {service.number}
                  </span>

                  <div className="premium-service-title">
                    <span>{service.detail}</span>
                    <h3>{service.title}</h3>
                  </div>

                  <p>{service.description}</p>

                  <span
                    className="premium-service-arrow"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </Link>
              ))}
            </div>

            <div className="premium-services-footer">
              <p>
                A considered process. A clear direction.
                A space with purpose.
              </p>

              <Button href="/services" variant="outline">
                Explore Services{" "}
                <span aria-hidden="true">↗</span>
              </Button>
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section
          id="contact"
          className="premium-contact-section scroll-mt-24"
        >
          <div className="container premium-contact-inner">
            <div className="premium-contact-top">
              <span className="eyebrow">
                Have a project in mind?
              </span>

              <span className="premium-contact-index">
                LET&apos;S CREATE SOMETHING CONSIDERED
              </span>
            </div>

            <h2>
              Good spaces
              <br />
              start with a
              <br />
              <span>conversation.</span>
            </h2>

            <div className="premium-contact-bottom">
              <p>
                Tell us about the space you imagine
                and the possibilities you want to explore.
              </p>

              <Button
                href="/contact"
                variant="outline"
                className="premium-contact-button"
              >
                Tell us about your project{" "}
                <span aria-hidden="true">↗</span>
              </Button>
            </div>

            <span className="premium-contact-watermark">
              BUILDORA
            </span>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="premium-footer">
        <div className="container">
          <div className="premium-footer-main">
            <div className="premium-footer-brand">
              <Link
                href="/"
                className="brand-mark"
                aria-label="BUILDORA home"
              >
                BUILD<span>ORA</span>
              </Link>

              <p className="premium-footer-tagline">
                Built with intention.
              </p>

              <p>
                Thoughtful spaces shaped by considered planning,
                material and a clear architectural vision.
              </p>
            </div>

            <div className="premium-footer-column">
              <h2>Explore</h2>

              <Link href="/">Home</Link>
              <Link href="/#projects">Selected work</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
            </div>

            <div className="premium-footer-column">
              <h2>Areas of focus</h2>

              <span>Residential</span>
              <span>Commercial</span>
              <span>Renovation</span>
              <span>Architectural concepts</span>
            </div>

            <div className="premium-footer-note">
              <span>DESIGN PHILOSOPHY</span>

              <p>
                Good spaces are not only seen. They are
                thoughtfully planned, carefully considered
                and made to feel right.
              </p>

              <Link href="/contact">
                Start a conversation <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div className="premium-footer-bottom">
            <p>© 2026 BUILDORA. All rights reserved.</p>

            <p>
              Independent portfolio concept · Illustrative projects
            </p>

            <Link href="/">
              Back to top ↑
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
