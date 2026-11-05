import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import JourneyCard from "@/components/ui/JourneyCard";
import Reveal from "@/components/ui/Reveal";
import CtaBand from "@/components/ui/CtaBand";
import { getJourney, journeys } from "@/data/journeys";
import { images } from "@/data/images";

export function generateStaticParams() {
  return journeys.map((journey) => ({ slug: journey.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const journey = getJourney(slug);

  if (!journey) {
    return { title: "Journey not found" };
  }

  return {
    title: journey.title,
    description: journey.summary,
    alternates: {
      canonical: `/tours-safaris/${journey.slug}`,
    },
    openGraph: {
      title: journey.title,
      description: journey.summary,
      images: [
        {
          url: journey.image.src,
          width: journey.image.width,
          height: journey.image.height,
          alt: journey.image.alt,
        },
      ],
    },
  };
}

export default async function JourneyPage({ params }) {
  const { slug } = await params;
  const journey = getJourney(slug);

  if (!journey) {
    notFound();
  }

  const related = journeys
    .filter((item) => item.slug !== journey.slug)
    .slice(0, 3);

  return (
    <div className="detailPage">
      <PageHero
        image={journey.image}
        eyebrow={journey.kicker}
        title={journey.title}
        intro={journey.summary}
        size="detail"
      >
        <div className="detailMeta">
          <div className="detailMetaItem">
            <span className="detailMetaLabel">Length</span>
            <span className="detailMetaValue">{journey.duration}</span>
          </div>
          <div className="detailMetaItem">
            <span className="detailMetaLabel">Region</span>
            <span className="detailMetaValue">{journey.region}</span>
          </div>
          <div className="detailMetaItem">
            <span className="detailMetaLabel">Style</span>
            <span className="detailMetaValue">{journey.style}</span>
          </div>
        </div>
      </PageHero>

      <section className="section">
        <div className="container detailLayout">
          <div>
            <div className="detailSection">
              <p className="sampleTag">Sample journey</p>
              <h2 className="detailSectionTitle">The idea behind the route.</h2>
              <div className="detailCopy">
                <p>{journey.summary}</p>
                <p>
                  This is a starting point, not a fixed departure. Dates,
                  properties, the order of stops and the pace can all be
                  adjusted once we understand who is travelling and how much
                  time you have.
                </p>
              </div>
            </div>

            <div className="detailSection">
              <h2 className="detailSectionTitle">What stands out.</h2>
              <div className="highlights">
                {journey.highlights.map((highlight, index) => (
                  <div className="highlight" key={highlight}>
                    <span className="highlightIndex">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="detailSection">
              <h2 className="detailSectionTitle">A day-by-day shape.</h2>
              <div className="itinerary">
                {journey.days.map((day) => (
                  <div className="itineraryDay" key={day.day}>
                    <span className="itineraryDayNum">{day.day}</span>
                    <div>
                      <h3 className="itineraryDayTitle">{day.title}</h3>
                      <p className="itineraryDayBody">{day.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="detailSection">
              <h2 className="detailSectionTitle">What is included.</h2>
              <div className="inclusionsGrid">
                <ul className="list">
                  {journey.inclusions.map((item) => (
                    <li className="listItem" key={item}>
                      <Check aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <p className="sampleTag" style={{ marginTop: 0 }}>
                    Good to know
                  </p>
                  <p className="notice">{journey.goodToKnow}</p>
                </div>
              </div>
            </div>

            <div className="detailSection">
              <h2 className="detailSectionTitle">A sense of the place.</h2>
              <div className="gallery">
                {journey.gallery.map((image, index) => (
                  <div className="galleryItem" key={`${image.src}-${index}`}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes={
                        index === 0
                          ? "(max-width: 760px) 100vw, 55vw"
                          : "(max-width: 760px) 100vw, 32vw"
                      }
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <p className="caption">
                Placeholder photography. The final site will use licensed images
                of the actual route and properties.
              </p>
            </div>
          </div>

          <aside className="detailAside">
            <div className="asideBox">
              <p className="sampleTag">Plan this route</p>
              <h2 className="asideTitle">Start with the shape, then refine it.</h2>
              <p className="asideNote">
                Send a short brief and we will confirm what is realistic for
                your dates before anything is reserved.
              </p>
              <dl className="asideFacts">
                <div className="asideFact">
                  <dt className="asideFactLabel">Length</dt>
                  <dd className="asideFactValue">{journey.duration}</dd>
                </div>
                <div className="asideFact">
                  <dt className="asideFactLabel">Region</dt>
                  <dd className="asideFactValue">{journey.region}</dd>
                </div>
                <div className="asideFact">
                  <dt className="asideFactLabel">Style</dt>
                  <dd className="asideFactValue">{journey.style}</dd>
                </div>
              </dl>
              <Link href="/plan-your-trip" className="btn btnPrimary">
                Plan your journey
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <Link href="/contact" className="textLink">
                Ask a question first
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <div className="sectionHeader">
            <div className="sectionHeaderCopy">
              <p className="eyebrow">Other routes</p>
              <h2 className="sectionTitle" style={{ marginTop: "1rem" }}>
                Keep reading, or change direction.
              </h2>
            </div>
            <p className="sectionHeaderMeta">
              A different region can change the whole rhythm of the trip.
            </p>
          </div>

          <div className="relatedGrid">
            {related.map((item) => (
              <Reveal key={item.slug}>
                <JourneyCard journey={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Let us check the route against your dates."
        text="A sample itinerary is only useful if it can actually work. Send the dates and we will tell you what fits."
        image={images.cta}
      />

      <div className="stickyCta">
        <span className="stickyCtaText">Sample journey · tailored with you</span>
        <Link href="/plan-your-trip" className="btn btnPrimary">
          Plan this trip
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
