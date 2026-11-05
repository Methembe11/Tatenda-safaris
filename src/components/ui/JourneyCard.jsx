import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function JourneyCard({ journey, large = false }) {
  return (
    <Link
      href={`/tours-safaris/${journey.slug}`}
      className={`journeyCard${large ? " journeyCardLarge" : ""}`}
    >
      <div className="journeyMedia">
        <Image
          src={journey.image.src}
          alt={journey.image.alt}
          fill
          sizes={
            large
              ? "(max-width: 760px) 100vw, (max-width: 1020px) 100vw, 60vw"
              : "(max-width: 760px) 100vw, (max-width: 1020px) 50vw, 38vw"
          }
        />
      </div>
      <div className="journeyMeta">
        <span>{journey.duration}</span>
        <span>{journey.region}</span>
        <span>{journey.style}</span>
      </div>
      <h3 className="journeyTitle">{journey.title}</h3>
      <p className="journeySummary">{journey.summary}</p>
      <span className="journeyArrow">
        View journey <ArrowUpRight aria-hidden="true" />
      </span>
    </Link>
  );
}
