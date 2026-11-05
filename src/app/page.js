import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  CarFront,
  Compass,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import JourneyCard from "@/components/ui/JourneyCard";
import RouteLine from "@/components/ui/RouteLine";
import CtaBand from "@/components/ui/CtaBand";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { images } from "@/data/images";
import { journeys } from "@/data/journeys";
import { stays } from "@/data/stays";
import { fleet } from "@/data/fleet";
import { site } from "@/data/site";

export const metadata = {
  title: "Zimbabwe Safaris, Stays & Transport",
  description:
    "Safaris, places to stay and transport across Zimbabwe, brought together by one Zimbabwean travel team. Start with a sample journey, then shape it.",
  alternates: {
    canonical: "/",
  },
};

const homepageFields = [
  {
    name: "name",
    label: "Your name",
    type: "text",
    autoComplete: "name",
    required: true,
    full: false,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    autoComplete: "email",
    inputMode: "email",
    required: true,
    full: false,
  },
  {
    name: "month",
    label: "When are you thinking of travelling?",
    type: "select",
    placeholder: "Please select",
    options: [
      "Not sure yet",
      "Marchâ€“May",
      "Juneâ€“August",
      "Septemberâ€“November",
      "Decemberâ€“February",
    ],
  },
  {
    name: "notes",
    label: "What would you like the trip to do?",
    type: "textarea",
    rows: 4,
    placeholder:
      "Who is travelling, how long you have, and anything you already know you want to see.",
  },
];

export default function HomePage() {
  const featured = journeys.filter((journey) => journey.featured);
  const [leadJourney, ...stackedJourneys] = featured;

  return (
    <>
      <section className="hero">
        <div className="heroMedia">
          <Image
            src={images.heroFalls.src}
            alt={images.heroFalls.alt}
            fill
            sizes="100vw"
            loading="eager"
            preload
          />
        </div>
        
        <div className="container heroInner">
          <div className="heroContent">
            <p className="heroEyebrow">Planned on the ground</p>
            <h1 className="heroTitle">
              Zimbabwe, <em>in one plan.</em>
            </h1>
            <p className="heroSub">
              Tell us where you want to go, when, and who is travelling. We
              will come back with a route, a base and the road between them.
            </p>
            <div className="heroActions">
              <Link href="/plan-your-trip" className="btn btnPrimary">
                Plan your journey
                <ArrowUpRight aria-hidden="true" />
              </Link>
              <Link href="/tours-safaris" className="btn btnGhostLight">
                See sample journeys
              </Link>
            </div>
          </div>

          <nav className="heroRoute" aria-label="Explore Tatenda Safaris">
            <Link href="/tours-safaris" className="heroRouteItem">
              <Compass className="heroRouteIcon" aria-hidden="true" />
              <span className="heroRouteLabel">Tours &amp; safaris</span>
              <ArrowRight aria-hidden="true" />
            </Link>
            <Link href="/accommodation" className="heroRouteItem">
              <BedDouble className="heroRouteIcon" aria-hidden="true" />
              <span className="heroRouteLabel">Places to stay</span>
              <ArrowRight aria-hidden="true" />
            </Link>
            <Link href="/transport" className="heroRouteItem">
              <CarFront className="heroRouteIcon" aria-hidden="true" />
              <span className="heroRouteLabel">Road &amp; group transport</span>
              <ArrowRight aria-hidden="true" />
            </Link>
          </nav>
        </div>
        <a href="#introduction" className="heroScroll">
          Scroll
        </a>
      </section>

      <section className="section" id="introduction">
        <div className="container splitIntro">
          <Reveal>
            <div className="introMedia">
              <Image
                src={images.tatendaFounder.src}
                alt={images.tatendaFounder.alt}
                fill
                sizes="(max-width: 1020px) 100vw, 40vw"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal className="introText" delay={80}>
            <p className="eyebrow">01 â€” The point of view</p>
            <h2 className="introStatement" style={{ marginTop: "1.25rem" }}>
              One team, from the first question to the last transfer.
            </h2>
            <div className="introBody">
              <p>
                A Zimbabwe trip rarely sits in one category. A few nights at
                Victoria Falls leads to a park, then a lake, then a road
                transfer that has to meet a flight. Tatenda holds those pieces
                in one plan instead of leaving you to stitch them together.
              </p>
              <p style={{ marginTop: "1.25rem" }}>
                Journeys, stays and transport are arranged together, so the
                itinerary reads as one trip rather than a set of separate
                bookings.
              </p>
            </div>
            <div className="caption">
              Sample journeys and stays are shown throughout. Details are
              confirmed with the team.
            </div>
            <div style={{ marginTop: "1.75rem" }}>
              <Link href="/about" className="textLink">
                How we work
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <div className="sectionHeader">
            <div className="sectionHeaderCopy">
              <span className="sectionNumber">02 â€” Three ways in</span>
              <h2 className="sectionTitle">
                The journey, the stay, the road between.
              </h2>
            </div>
            <p className="sectionHeaderMeta">
              Start wherever the question starts. Each part can stand alone, or
              be arranged as one continuous trip.
            </p>
          </div>

          <div className="waysGrid">
            <Reveal as="article" className="wayCard">
              <Link href="/tours-safaris" className="wayCard">
                <div className="wayMedia">
                  <Image
                    src={images.safari.src}
                    alt={images.safari.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, 38vw"
                    loading="lazy"
                  />
                </div>
                <div className="wayBody">
                  <p className="wayIndex">
                    <Compass aria-hidden="true" />
                    Journeys
                  </p>
                  <h3 className="wayTitle">Safaris with room to adjust.</h3>
                  <p className="wayText">
                    Sample routes through the falls, parks, lakes and highlands
                    â€” used as a starting point, not a fixed package.
                  </p>
                  <span className="wayLink">
                    Explore journeys
                    <ArrowRight aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>

            <Reveal as="article" className="wayCard" delay={80}>
              <Link href="/accommodation" className="wayCard">
                <div className="wayMedia">
                  <Image
                    src={images.tatendaPoolside.src}
                    alt={images.tatendaPoolside.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, 30vw"
                    loading="lazy"
                  />
                </div>
                <div className="wayBody">
                  <p className="wayIndex">
                    <BedDouble aria-hidden="true" />
                    Stays
                  </p>
                  <h3 className="wayTitle">A base that suits the trip.</h3>
                  <p className="wayText">
                    Sample rooms, suites and a family house, described plainly
                    so you can picture the stay before you ask about dates.
                  </p>
                  <span className="wayLink">
                    See places to stay
                    <ArrowRight aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>

            <Reveal as="article" className="wayCard" delay={160}>
              <Link href="/transport" className="wayCard">
                <div className="wayMedia">
                  <Image
                    src={images.vehicleVan.src}
                    alt={images.vehicleVan.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, 30vw"
                    loading="lazy"
                  />
                </div>
                <div className="wayBody">
                  <p className="wayIndex">
                    <CarFront aria-hidden="true" />
                    Transport
                  </p>
                  <h3 className="wayTitle">The road, already planned.</h3>
                  <p className="wayText">
                    Airport transfers, private road journeys and group
                    movement, timed around the rest of your itinerary.
                  </p>
                  <span className="wayLink">
                    Arrange transport
                    <ArrowRight aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <div className="sectionHeaderCopy">
              <span className="sectionNumber">03 â€” Sample journeys</span>
              <h2 className="sectionTitle">
                A considered route, open to change.
              </h2>
            </div>
            <p className="sectionHeaderMeta">
              These are samples, not fixed departures. Dates, pace,
              accommodation and transport are confirmed with you.
            </p>
          </div>

          <div className="journeyFeature">
            <Reveal>
              <JourneyCard journey={leadJourney} large />
            </Reveal>
            <div className="journeyStack">
              {stackedJourneys.map((journey, index) => (
                <Reveal key={journey.slug} delay={80 * (index + 1)}>
                  <JourneyCard journey={journey} />
                </Reveal>
              ))}
            </div>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <Link href="/tours-safaris" className="btn btnOutline">
              All journeys
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--dark stayBand">
        <div className="container stayBandGrid">
          <Reveal className="stayCopy">
            <p className="eyebrow eyebrow--light">04 â€” Places to stay</p>
            <h2 className="sectionTitle" style={{ marginTop: "1.25rem" }}>
              Somewhere quiet to come back to.
            </h2>
            <p className="lede" style={{ marginTop: "1.25rem" }}>
              A room by the water, a suite with a little more space, or a house
              for the whole family. The stay should make the days easier, not
              compete with them.
            </p>
            <div className="stayFacts">
              <div>
                <span className="stayFactLabel">Sample stays</span>
                <span className="stayFactValue">{stays.length} to preview</span>
              </div>
              <div>
                <span className="stayFactLabel">For</span>
                <span className="stayFactValue">Couples &amp; families</span>
              </div>
              <div>
                <span className="stayFactLabel">Arranged</span>
                <span className="stayFactValue">With the journey</span>
              </div>
            </div>
            <div style={{ marginTop: "2rem" }}>
              <Link href="/accommodation" className="btn btnPrimary">
                See the stays
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="stayMedia">
              <Image
                src={images.tatendaPoolside.src}
                alt={images.tatendaPoolside.alt}
                fill
                sizes="(max-width: 1020px) 100vw, 44vw"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="transportGrid">
            <Reveal className="transportCopy">
              <p className="eyebrow">05 â€” On the road</p>
              <h2 className="sectionTitle" style={{ marginTop: "1.25rem" }}>
                A road plan, not an afterthought.
              </h2>
              <p className="bodyText" style={{ marginTop: "1.25rem" }}>
                The transfer is part of the trip. We plan pickups, luggage,
                timing and the vehicle around the rest of the itinerary, so the
                day does not begin with a negotiation at the airport.
              </p>
              <div style={{ marginTop: "1.75rem" }}>
                <Link href="/transport" className="textLink">
                  Transport services
                  <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="transportMedia">
                <Image
                  src={images.tatendaCarHire.src}
                  alt={images.tatendaCarHire.alt}
                  fill
                  sizes="(max-width: 1020px) 100vw, 52vw"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          <RouteLine
            stops={[
              "Airport meet-and-greet",
              "Victoria Falls",
              "Hwange or the lake",
              "Your next stay",
            ]}
            label="One sample transport route"
          />

          <div className="fleetStrip">
            {fleet.slice(0, 3).map((vehicle, index) => (
              <div className="fleetItem" key={vehicle.title}>
                <span className="fleetIndex">0{index + 1}</span>
                <p className="fleetTitle">{vehicle.title}</p>
                <p className="fleetUse">{vehicle.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="sectionHeader">
            <div className="sectionHeaderCopy">
              <span className="sectionNumber">06 â€” The standard</span>
              <h2 className="sectionTitle">
                What we want every trip to feel like.
              </h2>
            </div>
            <p className="sectionHeaderMeta">
              Not promises about perfection. A working standard for how the
              trip should be put together.
            </p>
          </div>

          <div className="principles">
            <Reveal className="principle">
              <span className="principleNum">01</span>
              <h3 className="principleTitle">Clear before clever.</h3>
              <p className="principleBody">
                Plain answers, realistic timing and no pressure to decide
                before you are ready. The details should make the trip easier
                to understand.
              </p>
            </Reveal>
            <Reveal className="principle" delay={80}>
              <span className="principleNum">02</span>
              <h3 className="principleTitle">Local, not staged.</h3>
              <p className="principleBody">
                Zimbabwean guides, drivers and hosts at the centre of the
                journey. The place should feel like itself, not a set.
              </p>
            </Reveal>
            <Reveal className="principle" delay={160}>
              <span className="principleNum">03</span>
              <h3 className="principleTitle">One plan, end to end.</h3>
              <p className="principleBody">
                Safari, stay and transport read as one itinerary. If something
                changes, you have one team to call rather than three.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container plannerGrid">
          <Reveal className="plannerCopy">
            <p className="eyebrow">07 â€” Plan your journey</p>
            <h2 className="sectionTitle" style={{ marginTop: "1.25rem" }}>
              Tell us what the trip needs to do.
            </h2>
            <p className="bodyText" style={{ marginTop: "1.25rem" }}>
              A short brief is enough to start. We will read it, check the shape
              of the trip and reply with the most useful next step.
            </p>
            <div className="notice" style={{ marginTop: "1.75rem" }}>
              {site.demoNote}
            </div>
            <div className="plannerContact">
              <p className="plannerContactLabel">Prefer to write directly?</p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={site.phoneHref}>{site.phone}</a>
            </div>
          </Reveal>

          <Reveal className="plannerForm" delay={80}>
            <EnquiryForm
              fields={homepageFields}
              submitLabel="Start the conversation"
              note="Preview only â€” this form is not connected to an inbox yet."
            />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

