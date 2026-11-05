import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function StayCard({ stay }) {
  return (
    <Link href={`/accommodation/${stay.slug}`} className="stayCard">
      <div className="stayCardMedia">
        <Image
          src={stay.image.src}
          alt={stay.image.alt}
          fill
          sizes="(max-width: 760px) 100vw, 33vw"
        />
      </div>
      <div className="stayCardBody">
        <p className="sampleTag">Sample stay</p>
        <p className="stayCardMeta">
          {stay.guests} · {stay.size}
        </p>
        <h3 className="stayCardTitle">{stay.title}</h3>
        <p className="stayCardText">{stay.summary}</p>
        <span className="journeyArrow">
          View stay <ArrowUpRight aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
