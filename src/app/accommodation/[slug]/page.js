import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import StayCard from "@/components/ui/StayCard";
import Reveal from "@/components/ui/Reveal";
import CtaBand from "@/components/ui/CtaBand";
import { getStay, stays } from "@/data/stays";
import { images } from "@/data/images";

export function generateStaticParams() {
  return stays.map((stay) => ({ slug: stay.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const stay = getStay(slug);

  if (!stay) {
    return { title: "Stay not found" };
  }

  return {
    title: stay.title,
    description: stay.summary,
    alternates: {
      canonical: `/accommodation/${stay.slug}`,
    },
    openGraph: {
      title: stay.title,
      description: stay.summary,
      images: [
        {
          url: stay.image.src,
          width: stay.image.width,
          height: stay.image.height,
          alt: stay.image.alt,
        },
      ],
    },
  };
}

export default async function StayPage({ params }) {
  const { slug } = await params;
  const stay = getStay(slug);

  if (!stay) {
    notFound();
  }

  const related = stays.filter((item) => item.slug !== stay.slug);

  return (
    <div className="detailPage">
      <PageHero
        image={stay.image}
        eyebrow={stay.kicker}
        title={stay.title}
        intro={stay.summary}
        size="detail"
      >
        <div className="detailMeta">
          <div className="detailMetaItem">
            <span className="detailMetaLabel">Guests</span>
            <span className="detailMetaValue">{stay.guests}</span>
          </div>
          <div className="detailMetaItem">
            <span className="detailMetaLabel">Type</span>
            <span className="detailMetaValue">{stay.size}</span>
          </div>
          <div className="detailMetaItem">
            <span className="detailMetaLabel">Status</span>
            <span className="detailMetaValue">Sample stay</span>
          </div>
        </div>
      </PageHero>

      <section className="section">
        <div className="container detailLayout">
          <div>
            <div className="detailSection">
              <p className="sampleTag">Sample stay</p>
              <h2 className="detailSectionTitle">The feel of the place.</h2>
              <div className="detailCopy">
                <p>{stay.summary}</p>
                <p>
                  This is a sample description, not a live room listing. The
                  final recommendation is made with your dates, the rest of the
                  itinerary and the people travelling in mind.
                </p>
              </div>
            </div>

            <div className="detailSection">
              <h2 className="detailSectionTitle">In the room.</h2>
              <div className="featureList">
                {stay.features.map((feature) => (
                  <div className="featureItem" key={feature}>
                    <Check aria-hidden="true" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="detailSection">
              <h2 className="detailSectionTitle">Around the property.</h2>
              <div className="featureList">
                {stay.facilities.map((facility) => (
                  <div className="featureItem" key={facility}>
                    <Check aria-hidden="true" />
                    <span>{facility}</span>
                  </div>
                ))}
              </div>
              <p className="notice" style={{ marginTop: "1.5rem" }}>
                {stay.goodToKnow}
              </p>
            </div>

            <div className="detailSection">
              <h2 className="detailSectionTitle">A sense of the stay.</h2>
              <div className="gallery">
                {stay.gallery.map((image, index) => (
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
                Placeholder photography. Final images will show the actual
                rooms and grounds.
              </p>
            </div>
          </div>

          <aside className="detailAside">
            <div className="asideBox">
              <p className="sampleTag">Enquire</p>
              <h2 className="asideTitle">Ask about this stay.</h2>
              <p className="asideNote">
                Tell us the dates and who is travelling. We will confirm what is
                available and how the stay fits the rest of the trip.
              </p>
              <dl className="asideFacts">
                <div className="asideFact">
                  <dt className="asideFactLabel">Guests</dt>
                  <dd className="asideFactValue">{stay.guests}</dd>
                </div>
                <div className="asideFact">
                  <dt className="asideFactLabel">Type</dt>
                  <dd className="asideFactValue">{stay.size}</dd>
                </div>
                <div className="asideFact">
                  <dt className="asideFactLabel">Rates</dt>
                  <dd className="asideFactValue">On request</dd>
                </div>
              </dl>
              <Link href="/plan-your-trip" className="btn btnPrimary">
                Enquire about this stay
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
              <p className="eyebrow">Other stays</p>
              <h2 className="sectionTitle" style={{ marginTop: "1rem" }}>
                A different kind of room.
              </h2>
            </div>
            <p className="sectionHeaderMeta">
              Space, outlook and layout can change how the whole trip feels.
            </p>
          </div>
          <div className="stayListingGrid">
            {related.map((item) => (
              <Reveal key={item.slug}>
                <StayCard stay={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Let us match the stay to the journey."
        text="A room is only right in context. Send the dates and the shape of the trip, and we will suggest a base that fits."
        image={images.lodgePool}
        primaryLabel="Plan your stay"
      />

      <div className="stickyCta">
        <span className="stickyCtaText">Sample stay · rates on request</span>
        <Link href="/plan-your-trip" className="btn btnPrimary">
          Enquire
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
