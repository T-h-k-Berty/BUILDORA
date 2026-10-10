
"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((open) => !open);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen, closeMenu]);

  function handleBrandClick() {
    closeMenu();

    if (pathname === "/") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    }
  }

  return (
    <header className="site-header">
      <div className="container site-nav">
        <Link
          href="/"
          className="brand-mark"
          aria-label="BUILDORA home"
          onClick={handleBrandClick}
        >
          BUILD<span>ORA</span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-header-actions">
          <div className="desktop-quote">
            <Button href="/#contact">
              Request a Quote <span aria-hidden="true">↗</span>
            </Button>
          </div>

          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMenu}
          >
            <span
              className={`menu-icon${menuOpen ? " is-open" : ""}`}
              aria-hidden="true"
            >
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-nav-panel${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <nav className="mobile-nav-links" aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
              style={{
                transitionDelay: menuOpen ? `${index * 45}ms` : "0ms",
              }}
            >
              <span className="mobile-nav-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span>{item.label}</span>

              <span className="mobile-nav-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </nav>

        <div className="mobile-nav-bottom">
          <p>Construction · Architecture · Renovation</p>

          <Link
            href="/#contact"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
            className="btn btn-primary mobile-quote-link"
          >
            Request a Quote <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
