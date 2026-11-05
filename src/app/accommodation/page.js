import PageHero from "@/components/ui/PageHero";
import StayCard from "@/components/ui/StayCard";
import Reveal from "@/components/ui/Reveal";
import CtaBand from "@/components/ui/CtaBand";
import { images } from "@/data/images";
import { stays } from "@/data/stays";

export const metadata = {
  title: "Accommodation",
  description:
    "Sample places to stay in Zimbabwe — a river room, a garden suite and a family house. Described plainly, arranged alongside your journey.",
  alternates: {
    canonical: "/accommodation",
  },
};

export default function AccommodationPage() {
  return (
    <>
      <PageHero
        image={images.tatendaPoolside}
        eyebrow="Accommodation"
        title="Somewhere quiet to come back to."
        intro="A room by the water, a suite with a little more space, or a house for the family. These sample stays show the range — the final choice is made around the trip."
        meta={[
          `${stays.length} sample stays`,
          "Couples, families & small groups",
          "Arranged with your journey",
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="listingHeader">
            <div>
              <p className="eyebrow">Places to stay</p>
              <h2 className="listingHeaderTitle" style={{ marginTop: "1.25rem" }}>
                A base that makes the days easier.
              </h2>
            </div>
            <p className="listingHeaderBody">
              The right stay depends on the rest of the trip: an early flight,
              a family that needs space, or a quiet afternoon after a long
              drive. These samples are a way to start the conversation.
            </p>
          </div>

          <div className="sampleBanner">
            <p>
              These are sample stays, not live room inventory. Availability,
              rates, layouts and facilities are confirmed directly with Tatenda
              Safaris before anything is reserved.
            </p>
          </div>

          <div className="stayListingGrid">
            {stays.map((stay) => (
              <Reveal key={stay.slug}>
                <StayCard stay={stay} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <div className="sectionHeader">
            <div className="sectionHeaderCopy">
              <p className="eyebrow">How we choose</p>
              <h2 className="sectionTitle" style={{ marginTop: "1rem" }}>
                Practical first. Beautiful second.
              </h2>
            </div>
            <p className="sectionHeaderMeta">
              A good stay should solve something: the early departure, the
              luggage, the need for a quiet corner.
            </p>
          </div>
          <div className="principles principles--paper">
            <div className="principle">
              <span className="principleNum">01</span>
              <h3 className="principleTitle">The right base.</h3>
              <p className="principleBody">
                Close enough to the day&apos;s activities, far enough from the
                noise, with the transfer time worked out in advance.
              </p>
            </div>
            <div className="principle">
              <span className="principleNum">02</span>
              <h3 className="principleTitle">Room to breathe.</h3>
              <p className="principleBody">
                Space for luggage, a shaded place to sit and a layout that
                works for the people sharing it.
              </p>
            </div>
            <div className="principle">
              <span className="principleNum">03</span>
              <h3 className="principleTitle">No surprises.</h3>
              <p className="principleBody">
                Clear inclusions, realistic travel times and a direct answer
                about what is and is not available.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Tell us how you want to wake up."
        text="A quiet garden, a view of the water, or a house with room for everyone. Send the shape of the trip and we will suggest the stay."
        image={images.tatendaEntrance}
        primaryLabel="Plan your stay"
      />
    </>
  );
}
