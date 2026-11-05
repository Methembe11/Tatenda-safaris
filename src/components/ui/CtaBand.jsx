import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { images } from "@/data/images";

export default function CtaBand({
  title = "Start with a conversation.",
  text = "Tell us roughly when you would like to travel and what matters most. We will reply with a considered next step, not a generic brochure.",
  image = images.cta,
  primaryLabel = "Plan your journey",
  primaryHref = "/plan-your-trip",
  secondaryLabel = "Talk to us",
  secondaryHref = "/contact",
}) {
  return (
    <section className="closing">
      <div className="closingMedia">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          loading="lazy"
        />
      </div>
      
      <div className="container closingInner">
        <p className="eyebrow eyebrow--light">Next step</p>
        <h2 className="closingTitle">{title}</h2>
        <p className="lede closingLede">{text}</p>
        <div className="closingActions">
          <Link href={primaryHref} className="btn btnPrimary">
            {primaryLabel}
            <ArrowUpRight aria-hidden="true" />
          </Link>
          <Link href={secondaryHref} className="btn btnGhostLight">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
