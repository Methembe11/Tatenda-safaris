import PageHero from "@/components/ui/PageHero";
import JourneyFilters from "@/components/tours/JourneyFilters";
import CtaBand from "@/components/ui/CtaBand";
import { images } from "@/data/images";
import { journeys } from "@/data/journeys";

export const metadata = {
  title: "Tours & Safaris",
  description:
    "Sample Zimbabwe journeys through Victoria Falls, Hwange, Mana Pools, Matobo, Great Zimbabwe, Lake Kariba and the Eastern Highlands — shaped with you.",
  alternates: {
    canonical: "/tours-safaris",
  },
};

export default function ToursSafarisPage() {
  return (
    <>
      <PageHero
        image={images.victoriaFalls}
        eyebrow="Tours & safaris"
        title="Journeys through Zimbabwe."
        intro="From the spray of Victoria Falls to the quiet of the eastern highlands. These sample routes show how a trip can move — then we adjust the pace, the stays and the road between."
        meta={[
          `${journeys.length} sample journeys`,
          "Tailored around your dates",
          "Guided by local teams",
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="listingHeader">
            <div>
              <p className="eyebrow">Start here</p>
              <h2 className="listingHeaderTitle" style={{ marginTop: "1.25rem" }}>
                A shape to begin with, not a fixed package.
              </h2>
            </div>
            <p className="listingHeaderBody">
              Use the regions to narrow the list, or ignore them and read the
              routes in order. Every sample can be shortened, reversed or
              combined with a stay and transport.
            </p>
          </div>

          <JourneyFilters />

          <div className="sampleBanner">
            <p>
              These journeys are samples, not confirmed departures. Prices,
              availability, properties and activities are confirmed directly
              with the Tatenda team before anything is booked.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="None of these quite right?"
        text="Send us the shape you have in mind — a place, a season, a family group — and we will suggest a route that fits."
        image={images.landscape}
      />
    </>
  );
}
