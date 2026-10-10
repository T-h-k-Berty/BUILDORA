import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container flex min-h-[70vh] flex-col items-start justify-center">
      <span className="eyebrow">404 — Page not found</span>
      <h1 className="mt-6 text-5xl font-medium tracking-tight">
        This page doesn't exist.
      </h1>
      <p className="mt-4 max-w-lg leading-7 text-muted">
        The page may have moved or the address may be incorrect.
      </p>
      <Link href="/" className="btn btn-primary mt-8">
        Return Home ↗
      </Link>
    </main>
  );
}