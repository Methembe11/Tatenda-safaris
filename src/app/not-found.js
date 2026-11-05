import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="notFound">
      <div className="container">
        <div className="notFoundInner">
          <p className="eyebrow">404 — Off the route</p>
          <h1 className="notFoundTitle" style={{ marginTop: "1.25rem" }}>
            This path does not go anywhere.
          </h1>
          <p className="notFoundBody">
            The page may have moved, or the link may be wrong. Start again from
            the journeys, or tell us what you were looking for.
          </p>
          <div className="notFoundActions">
            <Link href="/" className="btn btnPrimary">
              Back to the beginning
              <ArrowUpRight aria-hidden="true" />
            </Link>
            <Link href="/tours-safaris" className="btn btnOutline">
              Browse journeys
            </Link>
            <Link href="/contact" className="btn btnOutline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
