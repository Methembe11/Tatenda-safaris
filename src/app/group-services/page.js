import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import EnquiryForm from "@/components/forms/EnquiryForm";
import CtaBand from "@/components/ui/CtaBand";
import { images } from "@/data/images";

export const metadata = {
  title: "Group Services",
  description:
    "Coordinated safari, accommodation and transport for families, corporate groups, conferences and special-interest travel in Zimbabwe.",
  alternates: {
    canonical: "/group-services",
  },
};

const groupServices = [
  {
    number: "01",
    title: "Family and friends",
    body: "One itinerary for a group with different ages and expectations, with space built in for people to do their own thing.",
  },
  {
    number: "02",
    title: "Corporate groups",
    body: "Safari extensions, incentive travel and coordinated movements around a meeting or conference in Zimbabwe.",
  },
  {
    number: "03",
    title: "Celebrations",
    body: "Birthdays, anniversaries and reunions where the stay, the table and the transport need to work together.",
  },
  {
    number: "04",
    title: "Special interest",
    body: "Photography, birding, walking or culture-focused groups, shaped around the season and the knowledge in the group.",
  },
];

const groupSteps = [
  {
    number: "01",
    title: "The brief.",
    body: "Who is coming, why, roughly when and what the group wants from the trip. A simple outline is enough to start.",
  },
  {
    number: "02",
    title: "The shape.",
    body: "We propose a route, a base and a transport plan that can hold the group without over-scheduling it.",
  },
  {
    number: "03",
    title: "The coordination.",
    body: "Arrivals, rooming, vehicles and activities are checked against one schedule before anything is confirmed.",
  },
];

const groupFaqs = [
  {
    question: "How large a group can you plan for?",
    answer:
      "It depends on the route and the properties. Share the approximate number and we will confirm what is realistic rather than promise a capacity we cannot hold.",
  },
  {
    question: "Can people arrive on different flights?",
    answer:
      "Yes. We can coordinate staggered arrivals, separate transfers and a single meeting point for the group.",
  },
  {
    question: "Can a group trip include a conference?",
    answer:
      "We can arrange the travel, stays and transport around a conference or meeting. Venue and technical requirements are confirmed separately with the relevant supplier.",
  },
  {
    question: "Can the itinerary include free time?",
    answer:
      "Yes, and we usually recommend it. A group schedule that leaves no room to breathe tends to feel longer than it is.",
  },
];

const groupFields = [
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
    name: "organisation",
    label: "Company or organisation",
    type: "text",
    autoComplete: "organization",
    full: false,
  },
  {
    name: "phone",
    label: "Phone or WhatsApp",
    type: "tel",
    autoComplete: "tel",
    inputMode: "tel",
    full: false,
  },
  {
    name: "groupType",
    label: "What kind of group?",
    type: "select",
    placeholder: "Please select",
    required: true,
    options: [
      "Family and friends",
      "Corporate group",
      "Conference or incentive",
      "Celebration",
      "Special interest",
      "Not sure yet",
    ],
    full: false,
  },
  {
    name: "groupSize",
    label: "Approximate group size",
    type: "select",
    placeholder: "Please select",
    options: ["5–10", "11–20", "21–40", "40+", "Not sure yet"],
    full: false,
  },
  {
    name: "dates",
    label: "Preferred dates",
    type: "text",
    placeholder: "Month, season, or fixed dates",
    full: false,
  },
  {
    name: "destinations",
    label: "Places in mind",
    type: "text",
    placeholder: "Victoria Falls, Hwange, a conference venue…",
    full: false,
  },
  {
    name: "support",
    label: "What do you need help with?",
    type: "checkbox-group",
    options: [
      "Safari and activities",
      "Accommodation",
      "Airport and road transport",
      "Group dining",
      "Conference logistics",
    ],
  },
  {
    name: "notes",
    label: "Tell us about the group",
    type: "textarea",
    rows: 5,
    placeholder:
      "Ages, access needs, budget context, the purpose of the trip, anything already booked.",
  },
];

export default function GroupServicesPage() {
  return (
    <>
      <PageHero
        image={images.landscape}
        eyebrow="Group services"
        title="One schedule, many people."
        intro="Safari, stays and transport coordinated for families, corporate groups, celebrations and special-interest travel. The aim is a trip that holds together without feeling regimented."
        meta={[
          "Families & corporate groups",
          "Staggered arrivals",
          "One coordinated plan",
        ]}
      />

      <section className="section">
        <div className="container splitIntro">
          <Reveal>
            <div className="introMedia">
              <Image
                src={images.group.src}
                alt={images.group.alt}
                fill
                sizes="(max-width: 1020px) 100vw, 40vw"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal className="introText" delay={0.08}>
            <p className="eyebrow">The work behind the trip</p>
            <h2 className="introStatement" style={{ marginTop: "1.25rem" }}>
              A group trip is a coordination problem before it is a holiday.
            </h2>
            <div className="introBody">
              <p>
                Different arrival times, rooming lists, luggage, dietary
                requirements and a schedule that has to work for people who
                want different things. We plan the moving parts as one system.
              </p>
              <p style={{ marginTop: "1.25rem" }}>
                That means one route, one transport plan and one point of
                contact — with enough slack for the trip to feel like a holiday
                rather than a transfer schedule.
              </p>
            </div>
            <div style={{ marginTop: "1.75rem" }}>
              <Link href="#group-enquiry" className="textLink">
                Start a group brief
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight section--paper">
        <div className="container">
          <div className="sectionHeader">
            <div className="sectionHeaderCopy">
              <p className="eyebrow">Who we plan for</p>
              <h2 className="sectionTitle" style={{ marginTop: "1rem" }}>
                Different groups, different pressures.
              </h2>
            </div>
            <p className="sectionHeaderMeta">
              The structure changes with the group. The standard of
              coordination does not.
            </p>
          </div>

          <div className="serviceList">
            {groupServices.map((service) => (
              <Reveal className="serviceItem" key={service.number}>
                <span className="serviceNum">{service.number}</span>
                <h3 className="serviceTitle">{service.title}</h3>
                <p className="serviceBody">{service.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <div className="sectionHeaderCopy">
              <p className="eyebrow">How it works</p>
              <h2 className="sectionTitle" style={{ marginTop: "1rem" }}>
                From brief to one clear schedule.
              </h2>
            </div>
          </div>
          <div className="steps">
            {groupSteps.map((step) => (
              <Reveal className="step" key={step.number}>
                <span className="stepNum">{step.number}</span>
                <h3 className="stepTitle">{step.title}</h3>
                <p className="stepBody">{step.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper" id="group-enquiry">
        <div className="container plannerGrid">
          <Reveal className="plannerCopy">
            <p className="eyebrow">Group enquiry</p>
            <h2 className="sectionTitle" style={{ marginTop: "1.25rem" }}>
              Start with the make-up of the group.
            </h2>
            <p className="bodyText" style={{ marginTop: "1.25rem" }}>
              The number of people, the reason for travelling and the rough
              dates are enough for a first conversation. We will come back with
              questions and a realistic shape for the trip.
            </p>
            <div className="notice" style={{ marginTop: "1.75rem" }}>
              Preview only. This form is not connected to an inbox yet, and no
              group arrangement is confirmed until the team replies.
            </div>
          </Reveal>

          <Reveal className="plannerForm" delay={0.08}>
            <EnquiryForm
              fields={groupFields}
              submitLabel="Send group brief"
              successTitle="Your group brief is ready."
              successBody="This is a preview form, so nothing has been sent. The final site will deliver the brief to the Tatenda team."
              note="Preview only — this form is not connected to an inbox yet."
            />
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container containerNarrow">
          <div className="sectionHeader">
            <div className="sectionHeaderCopy">
              <p className="eyebrow">Group questions</p>
              <h2 className="sectionTitle" style={{ marginTop: "1rem" }}>
                Before you send the brief.
              </h2>
            </div>
          </div>
          <Accordion items={groupFaqs} />
        </div>
      </section>

      <CtaBand
        title="Bring the whole group into one plan."
        text="Send the approximate numbers, the dates and the reason for the trip. We will tell you what is realistic and what needs deciding first."
        image={images.group}
        primaryLabel="Plan a group trip"
      />
    </>
  );
}
