import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import TripPlanner from "@/components/forms/TripPlanner";
import { images } from "@/data/images";
import { site } from "@/data/site";
import { planningFaqs } from "@/data/faqs";

export const metadata = {
  title: "Plan Your Journey",
  description:
    "Tell Tatenda Safaris about your Zimbabwe trip — who is travelling, when, and what matters. A short brief is enough to start a considered conversation.",
  alternates: {
    canonical: "/plan-your-trip",
  },
};

const nextSteps = [
  {
    number: "01",
    title: "We read the brief.",
    body: "A person from the team reviews the shape of the trip, the dates and the people travelling.",
  },
  {
    number: "02",
    title: "We check what is realistic.",
    body: "Availability, travel times and the pace are considered before we suggest a route.",
  },
  {
    number: "03",
    title: "We reply with a next step.",
    body: "A draft route, a few focused questions, or a clear answer about whether the dates work.",
  },
];

export default function PlanYourTripPage() {
  return (
    <>
      <PageHero
        image={images.river}
        eyebrow="Plan your journey"
        title="Begin with the shape of the trip."
        intro="A few questions about who is travelling, when, and what matters. Nothing is booked here — this is the start of a conversation."
        meta={["3 short steps", "No obligation", "Replies from a person"]}
        size="short"
      />

      <section className="section">
        <div className="container planGrid">
          <TripPlanner />

          <aside className="planAside">
            <Reveal>
              <div className="asideBox">
                <p className="sampleTag">What happens next</p>
                <h2 className="asideTitle">A considered reply, not an auto-quote.</h2>
                <p className="asideNote">
                  The planner is a preview, but the process is the one we intend
                  to use: read first, check the ground, then reply.
                </p>
                <div className="nextSteps" style={{ marginTop: "1.25rem" }}>
                  {nextSteps.map((step) => (
                    <div className="nextStep" key={step.number}>
                      <span className="nextStepNum">{step.number}</span>
                      <div>
                        <h3 className="nextStepTitle">{step.title}</h3>
                        <p className="nextStepBody">{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="plannerContact">
                <p className="plannerContactLabel">Prefer to write directly?</p>
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <a href={site.phoneHref}>{site.phone}</a>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="section section--tight section--paper">
        <div className="container containerNarrow">
          <div className="sectionHeader">
            <div className="sectionHeaderCopy">
              <p className="eyebrow">Planning questions</p>
              <h2 className="sectionTitle" style={{ marginTop: "1rem" }}>
                A few honest answers.
              </h2>
            </div>
          </div>
          <Accordion items={planningFaqs} />
        </div>
      </section>
    </>
  );
}
