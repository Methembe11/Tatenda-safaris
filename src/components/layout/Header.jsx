"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { site } from "@/data/site";

function isActivePath(pathname, href) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  useEffect(() => {
    const nav = navRef.current;
    if (menuOpen || window.matchMedia("(max-width: 1000px)").matches) return;
    const active = nav?.querySelector('[aria-current="page"]');
    if (!nav || !active) return;

    const navRect = nav.getBoundingClientRect();
    const activeRect = active.getBoundingClientRect();
    const delta = activeRect.left - navRect.left - (nav.clientWidth - activeRect.width) / 2;
    nav.scrollBy({ left: delta, behavior: "auto" });
  }, [pathname, menuOpen]);

  return (
    <header className={`siteHeader${menuOpen ? " menuIsOpen" : ""}`}>
      <div className="container headerInner">
        <Logo />

        <button
          className="mobileMenuToggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          <span>{menuOpen ? "Close" : "Menu"}</span>
        </button>

        <nav
          id="primary-navigation"
          className={`headerNav${menuOpen ? " isOpen" : ""}`}
          aria-label="Primary"
          ref={navRef}
        >
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="navLink"
              aria-current={isActivePath(pathname, item.href) ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/plan-your-trip" className="mobileNavCta" onClick={() => setMenuOpen(false)}>
            Plan your journey <ArrowUpRight aria-hidden="true" />
          </Link>
        </nav>

        <Link
          href="/plan-your-trip"
          className="btn btnPrimary headerCta"
          aria-label="Plan your journey"
        >
          Plan your journey
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}
