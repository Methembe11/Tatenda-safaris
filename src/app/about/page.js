import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import CtaBand from "@/components/ui/CtaBand";
import { images } from "@/data/images";
import { destinations, site } from "@/data/site";

export const metadata = {
  title: "Our Story",
  description:
    "Discover the story of Dr. Rangarirai Tatenda Gunda and the family-founded Tatenda Safaris, established in Victoria Falls in 1993.",
  alternates: {
    canonical: "/about",
  },
};

const milestones = [
  {
    year: "Before 1991",
    title: "A career that began on the ground.",
    body: "Before founding Tatenda Safaris, Rangarirai Tatenda Gunda worked as a German-speaking tour guide with the United Touring Company in Victoria Falls. The work gave her first-hand knowledge of the region, its visitors and the opportunities emerging across Zimbabwe&apos;s tourism industry.",
    link: {
      label: "Read her early career story",
      href: "https://www.heraldonline.co.zw/entrepreneur-makes-it-big-in-tourism-industry/",
    },
  },
  {
    year: "1991",
    title: "Choosing to build something of her own.",
    body: "In 1991, she made the decision to leave her employment and begin working towards an independent tourism business. It was a bold step in an industry where access to capital and opportunity was far from equal, particularly for Black women.",
    link: {
      label: "The Herald's profile of Dr. Gunda",
      href: "https://www.heraldonline.co.zw/entrepreneur-makes-it-big-in-tourism-industry/",
    },
  },
  {
    year: "1993",
    title: "Three vehicles. A four-room cottage. A beginning.",
    body: "Alongside her late husband, Brigadier-General Paul Armstrong Gunda, she established Tatenda Safaris in 1993. With limited resources, she bought three second-hand vehicles at ABC Auctions to start the touring and car-hire operation. The lodge began as a modest four-room cottage with space for around 15 guests. The company became the first Black-owned safari operation in a tourism industry then dominated by white operators.",
    link: {
      label: "How the business began",
      href: "https://www.heraldonline.co.zw/hard-work-pays-off-for-tatenda-safaris-gunda/",
    },
  },
  {
    year: "2007",
    title: "Carrying the business forward.",
    body: "The death of her husband in a car accident in 2007 was a profound personal loss. He had been her partner in life and in the business. Dr. Gunda continued to lead the company through that period, putting her energy into the work and growing what they had started together. Her story is one of persistence, but also of protecting a family legacy.",
    link: {
      label: "Read about her perseverance",
      href: "https://www.heraldonline.co.zw/dr-gunda-a-widow-who-picked-up-the-pieces-and-moved-on/",
    },
  },
  {
    year: "A growing operation",
    title: "Resilience through difficult seasons.",
    body: "The business also endured a fire that damaged its administration offices and the managing director's house. Guest rooms were not affected, and the lodge continued operating. It was another difficult chapter, but not the end of the work.",
    link: {
      label: "The Herald's report on the fire",
      href: "https://www.heraldonline.co.zw/tatenda-safaris-one-of-vic-falls-major-service-providers/",
    },
  },
  {
    year: "Today",
    title: "A family business with a wider reach.",
    body: "From its beginnings in Victoria Falls, Tatenda has grown into a broader tourism and transport operation. The lodge is reported to have around 50 rooms and capacity for more than 200 guests, alongside conference facilities and a substantial fleet for tours, transfers and private hire. The next chapter is being shaped by the Gunda family, with operations extending into Harare and Bulawayo.",
    link: {
      label: "Read about the company's growth",
      href: "https://www.heraldonline.co.zw/tatenda-safaris-consolidates-business-growth/",
    },
  },
];

const values = [
  {
    number: "01",
    title: "Say what is true.",
    body: "Clear descriptions, realistic timing and no claims we cannot stand behind. If something is a sample or a placeholder, we say so.",
  },
  {
    number: "02",
    title: "Let the place lead.",
    body: "Zimbabwe does not need to be dressed up. The landscape, the guides and the people who live there are the reason to travel.",
  },
  {
    number: "03",
    title: "Keep one thread.",
    body: "Safari, stay and transport should read as one plan. One team, one schedule, one conversation when something changes.",
  },
];

const workSteps = [
  {
    number: "01",
    title: "Listen first.",
    body: "Who is travelling, when, and what the trip needs to do. We ask before we recommend.",
  },
  {
    number: "02",
    title: "Shape the route.",
    body: "A draft itinerary with the pace, the stays and the road between worked out together.",
  },
  {
    number: "03",
    title: "Confirm the details.",
    body: "Availability, properties and transport are checked before anything is reserved or quoted.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        image={images.explorer}
        eyebrow="About Tatenda"
        title="Built on conviction. Carried forward by family."
        intro="The story of Tatenda Safaris begins with a woman who saw an opportunity in Victoria Falls and chose to build a business in an industry that was not yet ready to make room for her."
        meta={["Established in 1993", "Family-founded", "Victoria Falls, Zimbabwe"]}
      />

      <section className="section">
        <div className="container aboutIntro">
          <Reveal>
            <div className="aboutImage">
              <Image
                src={images.tatendaFounder.src}
                alt={images.tatendaFounder.alt}
                fill
                sizes="(max-width: 1020px) 100vw, 40vw"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal className="aboutText" delay={0.08}>
            <p className="eyebrow">The woman behind the name</p>
            <h2 className="aboutStatement" style={{ marginTop: "1.25rem" }}>
              A vision that made room for others to follow.
            </h2>
            <p className="bodyText">
              Tatenda Safaris and Lodge is rooted in the vision and determination
              of its co-founder, Dr. Rangarirai Tatenda Gunda. Together with her
              late husband, Brigadier-General Paul Armstrong Gunda, she built a
              tourism business in Victoria Falls at a time when the sector was
              heavily dominated by white-owned operators.
            </p>
            <p className="bodyText" style={{ marginTop: "1.25rem" }}>
              In 1993, Tatenda became the first Black-owned safari operation of
              its kind in that landscape. It did not begin with a large fleet or
              a purpose-built lodge. It began with experience, determination,
              three second-hand vehicles and a small cottage. The scale changed
              over time; the resolve behind it did not.
            </p>
            <p className="bodyText" style={{ marginTop: "1.25rem" }}>
              This is more than a company history. It is the story of a family
              business built through changing seasons, personal loss and the
              everyday work of looking after guests. The name Tatenda â€” a Shona
              expression of gratitude â€” carries that sense of appreciation for
              the people, places and relationships that make each journey matter.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <div className="sectionHeader">
            <div className="sectionHeaderCopy">
              <span className="sectionNumber">The story so far</span>
              <h2 className="sectionTitle sectionTitle--large">
                From a small beginning to a lasting presence.
              </h2>
            </div>
            <p className="sectionHeaderMeta">
              More than three decades of building, adapting and continuing a
              family vision in Zimbabwe&apos;s tourism industry.
            </p>
          </div>

          <div className="storyTimeline">
            {milestones.map((milestone, index) => (
              <Reveal className="storyMilestone" key={milestone.year} delay={index * 0.04}>
                <div className="storyYear">{milestone.year}</div>
                <div className="storyMilestoneBody">
                  <h3 className="storyMilestoneTitle">{milestone.title}</h3>
                  <p className="storyMilestoneText">{milestone.body}</p>
                  <a
                    className="storySource"
                    href={milestone.link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {milestone.link.label}
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="storyNote">
            Historical details are drawn from published interviews and reports.
            Figures describing the lodge and fleet reflect the information
            available in those reports and may change over time.
          </p>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="sectionHeader">
            <div className="sectionHeaderCopy">
              <p className="eyebrow eyebrow--light">What we value</p>
              <h2 className="sectionTitle" style={{ marginTop: "1rem" }}>
                Three things we will not trade away.
              </h2>
            </div>
            <p className="sectionHeaderMeta">
              These are working principles, not decorative brand words.
            </p>
          </div>

          <div className="principles">
            {values.map((value, index) => (
              <Reveal className="principle" key={value.number} delay={index * 0.08}>
                <span className="principleNum">{value.number}</span>
                <h3 className="principleTitle">{value.title}</h3>
                <p className="principleBody">{value.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <div className="sectionHeaderCopy">
              <p className="eyebrow">Where we work</p>
              <h2 className="sectionTitle" style={{ marginTop: "1rem" }}>
                A country with more than one rhythm.
              </h2>
            </div>
            <p className="sectionHeaderMeta">
              These are the destinations the sample journeys draw on. The list
              will grow as the real portfolio is confirmed.
            </p>
          </div>

          <div className="destinationList">
            {destinations.map((destination, index) => (
              <div className="destinationItem" key={destination}>
                <span className="destinationName">{destination}</span>
                <span className="destinationNum">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <div className="sectionHeader">
            <div className="sectionHeaderCopy">
              <p className="eyebrow">How we work</p>
              <h2 className="sectionTitle" style={{ marginTop: "1rem" }}>
                A conversation, then a plan.
              </h2>
            </div>
            <p className="sectionHeaderMeta">
              No instant quotes and no pressure to book before the shape is
              right.
            </p>
          </div>
          <div className="steps">
            {workSteps.map((step) => (
              <Reveal className="step" key={step.number}>
                <span className="stepNum">{step.number}</span>
                <h3 className="stepTitle">{step.title}</h3>
                <p className="stepBody">{step.body}</p>
              </Reveal>
            ))}
          </div>

          <div className="sampleBanner" style={{ marginTop: "3rem" }}>
            <p>{site.demoNote}</p>
            <Link href="/plan-your-trip" className="btn btnPrimary">
              Start a conversation
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Travel with the whole picture."
        text="Tell us what you have in mind. We will help you see how the journey, the stay and the road between can fit together."
        image={images.landscape}
      />
    </>
  );
}



