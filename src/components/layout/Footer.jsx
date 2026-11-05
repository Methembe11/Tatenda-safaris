import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="container">
        <div className="footerTop">
          <div className="footerBrand">
            <Link href="/" className="footerBrandName">
              Tatenda Safaris
            </Link>
            <p className="footerTagline">{site.tagline}</p>
          </div>

          <div>
            <h2 className="footerHeading">Explore</h2>
            <div className="footerLinks">
              <Link href="/tours-safaris" className="footerLink">
                Tours &amp; Safaris
              </Link>
              <Link href="/accommodation" className="footerLink">
                Accommodation
              </Link>
              <Link href="/transport" className="footerLink">
                Transport
              </Link>
              <Link href="/group-services" className="footerLink">
                Group Services
              </Link>
            </div>
          </div>

          <div>
            <h2 className="footerHeading">Company</h2>
            <div className="footerLinks">
              <Link href="/about" className="footerLink">
                About
              </Link>
              <Link href="/contact" className="footerLink">
                Contact
              </Link>
              <Link href="/plan-your-trip" className="footerLink">
                Plan your journey
              </Link>
              <Link href="/privacy" className="footerLink">
                Privacy
              </Link>
            </div>
          </div>

          <div>
            <h2 className="footerHeading">Talk to us</h2>
            <div className="footerContact">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={site.phoneHref}>{site.phone}</a>
              <span>{site.location}</span>
            </div>
            <p className="footerDemo">
              {site.demoNote} Some preview imagery still needs final client
              approval or replacement before launch.
            </p>
          </div>
        </div>

        <div className="footerBottom">
          <span>© 2026 Tatenda Safaris. All rights reserved.</span>
          <span>
            Contact details remain placeholders pending client confirmation.
          </span>
        </div>
      </div>
    </footer>
  );
}
