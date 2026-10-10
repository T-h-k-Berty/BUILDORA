
"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

const projectTypes = [
  "Residential",
  "Commercial",
  "Renovation",
  "Architectural Concept",
  "Other",
] as const;

const budgetRanges = [
  "Not decided yet",
  "Under LKR 1 million",
  "LKR 1–5 million",
  "LKR 5–15 million",
  "LKR 15 million+",
] as const;

export default function ContactPage() {
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const projectType = String(formData.get("projectType") ?? "");
    const budget = String(formData.get("budget") ?? "Not specified");
    const location = String(formData.get("location") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !projectType || !message) {
      setError("Please complete all required fields.");
      return;
    }

    /*
      Replace this placeholder with the WhatsApp number
      that will receive project inquiries.

      Use the international format with digits only.
      Example format: 94771234567
      Do not include +, spaces or hyphens.
    */
    const whatsappNumber = "REPLACE_WITH_YOUR_WHATSAPP_NUMBER";

    if (!/^\d{8,15}$/.test(whatsappNumber)) {
      setError(
        "The inquiry form is ready, but the WhatsApp number has not been configured yet."
      );
      return;
    }

    const inquiry = [
      "BUILDORA — NEW PROJECT INQUIRY",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Project type: ${projectType}`,
      `Estimated budget: ${budget}`,
      `Project location: ${location || "Not provided"}`,
      "",
      "Project details:",
      message,
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(inquiry)}`;

    setIsSending(true);
    window.location.href = whatsappUrl;
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#F4F1EB] text-[#20211F]">
      {/* INTRODUCTION */}
      <section className="container pb-14 pt-10 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-sm text-[#777873] transition-colors hover:text-[#C7784A]"
        >
          <span aria-hidden="true">←</span>
          Back to home
        </Link>

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[minmax(0,1.1fr)_minmax(220px,0.5fr)] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow flex items-center gap-3">
              <span
                aria-hidden="true"
                className="inline-block h-px w-8 bg-[#C7784A]"
              />
              START A CONVERSATION
            </p>

            <h1 className="mt-7 max-w-4xl text-[clamp(3rem,7vw,6.7rem)] font-medium leading-[0.97] tracking-[-0.075em]">
              Let&apos;s build
              <br />
              something{" "}
              <span className="text-[#858680]">meaningful.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#777873] sm:text-lg sm:leading-9">
              Have an idea for a new space or a project that needs a fresh
              perspective? Tell us a little about it. Every considered space
              begins with a thoughtful conversation.
            </p>
          </div>

          <div className="border-t border-[#20211F]/15 pt-5 lg:border-l lg:border-t-0 lg:pb-2 lg:pl-7 lg:pt-0">
            <p className="text-[10px] font-medium tracking-[0.18em] text-[#C7784A]">
              BUILDORA / CONTACT
            </p>

            <p className="mt-4 max-w-xs text-sm leading-7 text-[#777873]">
              Construction · Architecture · Renovation
            </p>

            <p className="mt-6 text-xs tracking-[0.12em] text-[#777873]">
              SRI LANKA · 2026
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS AND FORM */}
      <section className="border-y border-[#20211F]/10">
        <div className="container grid gap-12 py-14 sm:py-20 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 lg:py-24">
          {/* LEFT INFORMATION */}
          <aside>
            <p className="eyebrow flex items-center gap-3">
              <span
                aria-hidden="true"
                className="inline-block h-px w-8 bg-[#C7784A]"
              />
              YOUR PROJECT
            </p>

            <h2 className="mt-6 max-w-md text-3xl font-medium leading-tight tracking-[-0.055em] sm:text-4xl">
              Good work starts with the right questions.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#777873] sm:text-base sm:leading-8">
              Share your initial idea, the type of space you have in mind
              and what you hope to achieve. These details help structure
              the next conversation.
            </p>

            <div className="mt-10 border-t border-[#20211F]/15">
              <div className="grid grid-cols-[48px_1fr] gap-4 border-b border-[#20211F]/15 py-6">
                <span className="text-xs tracking-[0.12em] text-[#C7784A]">
                  01
                </span>

                <div>
                  <h3 className="text-base font-medium">
                    Construction &amp; architecture
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#777873]">
                    Residential, commercial and architectural concepts.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[48px_1fr] gap-4 border-b border-[#20211F]/15 py-6">
                <span className="text-xs tracking-[0.12em] text-[#C7784A]">
                  02
                </span>

                <div>
                  <h3 className="text-base font-medium">
                    A considered approach
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#777873]">
                    A clear starting point shaped around your priorities
                    and requirements.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[48px_1fr] gap-4 py-6">
                <span className="text-xs tracking-[0.12em] text-[#C7784A]">
                  03
                </span>

                <div>
                  <h3 className="text-base font-medium">
                    Sri Lanka
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#777873]">
                    Portfolio concept created for presentation purposes.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* INQUIRY FORM */}
          <div className="min-w-0 border border-[#20211F]/15 bg-white/40 p-5 sm:p-8 lg:p-10">
            <div className="border-b border-[#20211F]/15 pb-7">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-[#C7784A]">
                PROJECT INQUIRY / 01
              </p>

              <h2 className="mt-4 text-2xl font-medium tracking-[-0.045em] sm:text-3xl">
                Tell us about your project.
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#777873]">
                Complete the details below to prepare your inquiry.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Full name <span className="text-[#C7784A]">*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    required
                    maxLength={100}
                    className="min-h-12 w-full rounded-none border border-[#20211F]/20 bg-transparent px-4 py-3 text-sm text-[#20211F] outline-none transition-colors placeholder:text-[#999991] focus:border-[#C7784A] focus:ring-1 focus:ring-[#C7784A]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email address <span className="text-[#C7784A]">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    maxLength={254}
                    className="min-h-12 w-full rounded-none border border-[#20211F]/20 bg-transparent px-4 py-3 text-sm text-[#20211F] outline-none transition-colors placeholder:text-[#999991] focus:border-[#C7784A] focus:ring-1 focus:ring-[#C7784A]"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium"
                  >
                    Phone number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+94 7X XXX XXXX"
                    maxLength={30}
                    className="min-h-12 w-full rounded-none border border-[#20211F]/20 bg-transparent px-4 py-3 text-sm text-[#20211F] outline-none transition-colors placeholder:text-[#999991] focus:border-[#C7784A] focus:ring-1 focus:ring-[#C7784A]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="mb-2 block text-sm font-medium"
                  >
                    Project location
                  </label>

                  <input
                    id="location"
                    name="location"
                    type="text"
                    autoComplete="address-level2"
                    placeholder="City or district"
                    maxLength={120}
                    className="min-h-12 w-full rounded-none border border-[#20211F]/20 bg-transparent px-4 py-3 text-sm text-[#20211F] outline-none transition-colors placeholder:text-[#999991] focus:border-[#C7784A] focus:ring-1 focus:ring-[#C7784A]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="mb-2 block text-sm font-medium"
                >
                  What type of project?{" "}
                  <span className="text-[#C7784A]">*</span>
                </label>

                <select
                  id="projectType"
                  name="projectType"
                  required
                  defaultValue=""
                  className="min-h-12 w-full rounded-none border border-[#20211F]/20 bg-[#F4F1EB] px-4 py-3 text-sm text-[#20211F] outline-none transition-colors focus:border-[#C7784A] focus:ring-1 focus:ring-[#C7784A]"
                >
                  <option value="" disabled>
                    Select a project type
                  </option>

                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="mb-2 block text-sm font-medium"
                >
                  Estimated budget
                </label>

                <select
                  id="budget"
                  name="budget"
                  defaultValue="Not decided yet"
                  className="min-h-12 w-full rounded-none border border-[#20211F]/20 bg-[#F4F1EB] px-4 py-3 text-sm text-[#20211F] outline-none transition-colors focus:border-[#C7784A] focus:ring-1 focus:ring-[#C7784A]"
                >
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Tell us about your project{" "}
                  <span className="text-[#C7784A]">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  maxLength={3000}
                  placeholder="What would you like to create, improve or transform?"
                  className="w-full resize-y rounded-none border border-[#20211F]/20 bg-transparent px-4 py-3 text-sm leading-7 text-[#20211F] outline-none transition-colors placeholder:text-[#999991] focus:border-[#C7784A] focus:ring-1 focus:ring-[#C7784A]"
                />
              </div>

              {error && (
                <p
                  role="alert"
                  className="border border-[#C7784A]/40 bg-[#C7784A]/5 p-4 text-sm leading-6 text-[#8C492A]"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="inline-flex min-h-[56px] w-full items-center justify-between gap-4 border border-[#20211F] bg-[#20211F] px-5 py-4 text-left text-sm font-semibold !text-[#F4F1EB] transition-colors duration-300 hover:border-[#C7784A] hover:bg-[#C7784A] disabled:cursor-wait disabled:opacity-70 sm:px-6"
              >
                <span className="!text-[#F4F1EB]">
                  {isSending ? "Opening WhatsApp..." : "Send project inquiry"}
                </span>

                <span className="!text-[#F4F1EB]" aria-hidden="true">
                  ↗
                </span>
              </button>

              <p className="text-xs leading-6 text-[#777873]">
                Your inquiry will open in WhatsApp with the information
                you entered. Review the message and press Send in WhatsApp
                to deliver it. Nothing is sent automatically by this page.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="container py-14 sm:py-20">
        <div className="flex flex-col justify-between gap-6 border-b border-[#20211F]/15 pb-10 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.17em] text-[#C7784A]">
              HAVE QUESTIONS?
            </p>

            <h2 className="mt-3 text-3xl font-medium tracking-[-0.055em] sm:text-4xl">
              Start with an idea.
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex min-h-12 items-center justify-between gap-8 border border-[#20211F]/25 px-5 py-3 text-sm font-semibold text-[#20211F] transition-colors hover:border-[#C7784A] hover:text-[#A65E37] sm:min-w-56"
          >
            <span>Explore selected projects</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="flex flex-col justify-between gap-3 pt-5 text-[9px] tracking-[0.14em] text-[#777873] sm:flex-row">
          <span>BUILDORA / CONTACT</span>
          <span>CONSTRUCTION · ARCHITECTURE · RENOVATION</span>
        </div>
      </section>
    </main>
  );
}
