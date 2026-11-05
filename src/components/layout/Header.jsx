"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { site } from "@/data/site";

function isActivePath(pathname, href) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    const active = nav?.querySelector('[aria-current="page"]');
    if (!nav || !active) return;

    const navRect = nav.getBoundingClientRect();
    const activeRect = active.getBoundingClientRect();
    const delta =
      activeRect.left -
      navRect.left -
      (nav.clientWidth - activeRect.width) / 2;

    nav.scrollBy({ left: delta, behavior: "auto" });
  }, [pathname]);

  return (
    <header className="siteHeader">
      <div className="container headerInner">
        <Logo />

        <nav className="headerNav" aria-label="Primary" ref={navRef}>
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="navLink"
              aria-current={isActivePath(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
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
