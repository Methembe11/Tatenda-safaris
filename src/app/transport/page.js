import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import EnquiryForm from "@/components/forms/EnquiryForm";
import CtaBand from "@/components/ui/CtaBand";
import { images } from "@/data/images";
import { fleet, transportServices } from "@/data/fleet";
import { transportFaqs } from "@/data/faqs";

export const metadata = {
  title: "Transport",
  description:
    "Airport transfers, private road journeys, day transport and coordinated group movement across Zimbabwe, planned around the rest of your itinerary.",
  alternates: {
    canonical: "/transport",
  },
};

const transportFields = [
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
    name: "phone",
    label: "Phone or WhatsApp",
    type: "tel",
    autoComplete: "tel",
    inputMode: "tel",
    full: false,
  },
  {
    name: "service",
    label: "What do you need?",
    type: "select",
    placeholder: "Please select",
    required: true,
    options: [
      "Airport transfer",
      "Private road journey",
      "Day transport with driver",
      "Group movement",
      "Not sure yet",
    ],
    full: false,
  },
  {
    name: "pickup",
    label: "Pick-up",
    type: "text",
    placeholder: "Airport, hotel or town",
    full: false,
  },
  {
    name: "dropoff",
    label: "Drop-off",
    type: "text",
    placeholder: "Airport, hotel or town",
    full: false,
  },
  {
    name: "date",
    label: "Date",
    type: "date",
    full: false,
  },
  {
    name: "time",
    label: "Time",
    type: "time",
    full: false,
  },
  {
    name: "passengers",
    label: "Passengers",
    type: "select",
    placeholder: "Please select",
    options: ["1", "2", "3–4", "5–8", "9+"],
    full: false,
  },
  {
    name: "luggage",
    label: "Luggage notes",
    type: "text",
    placeholder: "Large cases, sports equipment, child seats",
    full: false,
  },
  {
    name: "notes",
    label: "Anything else we should know?",
    type: "textarea",
    rows: 4,
    placeholder: "Flight number, ages of children travelling, connections.",
  },
];

const steps = [
  {
    number: "01",
    title: "Share the route.",
    body: "Pick-up, drop-off, date, time and how many people are travelling. A flight number helps if you have one.",
  },
  {
    number: "02",
    title: "We confirm the vehicle.",
    body: "We check the route and the luggage, then come back with the right vehicle and a clear price.",
  },
  {
    number: "03",
    title: "Travel with a plan.",
    body: "The driver knows the schedule and the next stop. If a flight moves, you have one contact to call.",
  },
];

export default function TransportPage() {
  return (
    <>
      <PageHero
        image={images.tatendaCarHire}
        eyebrow="Transport"
        title="The road between, planned."
        intro="Airport transfers, private road journeys and coordinated group movement. The vehicle is arranged around the itinerary, not left until the last morning."
        meta={[
          "Airport & road transfers",
          "Private vehicles & groups",
          "Planned with your stay",
        ]}
      />

      <section className="section">
        <div className="container transportGrid">
          <Reveal className="transportCopy">
            <p className="eyebrow">On the ground</p>
            <h2 className="sectionTitle" style={{ marginTop: "1.25rem" }}>
              A transfer should remove friction.
            </h2>
            <p className="bodyText" style={{ marginTop: "1.25rem" }}>
              The best transport is the part you do not have to think about.
              We plan the pickup around the flight, allow for the road and the
              luggage, and keep the driver briefed on the next stop.
            </p>
            <p className="bodyText" style={{ marginTop: "1rem" }}>
              It can be a single airport transfer or a vehicle and driver for
              several days. The same team can coordinate group movements across
              different arrival times.
            </p>
            <div style={{ marginTop: "1.75rem" }}>
              <Link href="#transport-enquiry" className="textLink">
                Send a transport request
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="transportMedia">
              <Image
                src={images.tatendaBus.src}
                alt={images.tatendaBus.alt}
                fill
                sizes="(max-width: 1020px) 100vw, 52vw"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight section--paper">
        <div className="container">
          <div className="sectionHeader">
            <div className="sectionHeaderCopy">
              <p className="eyebrow">Services</p>
              <h2 className="sectionTitle" style={{ marginTop: "1rem" }}>
                Four ways to move.
              </h2>
            </div>
            <p className="sectionHeaderMeta">
              Each can be arranged on its own or folded into a wider journey.
            </p>
          </div>

          <div className="serviceList">
            {transportServices.map((service) => (
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
              <p className="eyebrow">Vehicle options</p>
              <h2 className="sectionTitle" style={{ marginTop: "1rem" }}>
                Matched to the party, not the brochure.
              </h2>
            </div>
            <p className="sectionHeaderMeta">
              Indicative categories. The final vehicle is confirmed against the
              route, luggage and number of travellers.
            </p>
          </div>

          <div className="fleetGrid">
            {fleet.map((vehicle, index) => (
              <div className="fleetCard" key={vehicle.title}>
                <span className="fleetCardNum">0{index + 1}</span>
                <h3 className="fleetCardTitle">{vehicle.title}</h3>
                <p className="fleetCardUse">{vehicle.use}</p>
                <p className="fleetCardBody">{vehicle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <div className="sectionHeader">
            <div className="sectionHeaderCopy">
              <p className="eyebrow">How it works</p>
              <h2 className="sectionTitle" style={{ marginTop: "1rem" }}>
                A clear handover, before you land.
              </h2>
            </div>
          </div>
          <div className="steps">
            {steps.map((step) => (
              <Reveal className="step" key={step.number}>
                <span className="stepNum">{step.number}</span>
                <h3 className="stepTitle">{step.title}</h3>
                <p className="stepBody">{step.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="transport-enquiry">
        <div className="container plannerGrid">
          <Reveal className="plannerCopy">
            <p className="eyebrow">Transport request</p>
            <h2 className="sectionTitle" style={{ marginTop: "1.25rem" }}>
              Tell us the route.
            </h2>
            <p className="bodyText" style={{ marginTop: "1.25rem" }}>
              Share the pickup and drop-off, the date and the number of
              travellers. If you are connecting with a flight, add the flight
              number in the notes.
            </p>
            <div className="notice" style={{ marginTop: "1.75rem" }}>
              Preview only. This form is not connected to an inbox yet, and
              vehicle availability is not confirmed until the team replies.
            </div>
          </Reveal>

          <Reveal className="plannerForm" delay={0.08}>
            <EnquiryForm
              fields={transportFields}
              submitLabel="Send transport request"
              successTitle="Your transport brief is ready."
              successBody="This is a preview form, so nothing has been sent. The final site will deliver the request to the Tatenda team."
              note="Preview only — this form is not connected to an inbox yet."
            />
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container containerNarrow">
          <div className="sectionHeader">
            <div className="sectionHeaderCopy">
              <p className="eyebrow">Transport questions</p>
              <h2 className="sectionTitle" style={{ marginTop: "1rem" }}>
                Practical answers.
              </h2>
            </div>
          </div>
          <Accordion items={transportFaqs} />
        </div>
      </section>

      <CtaBand
        title="One route, or the whole road."
        text="Send the pick-up and drop-off and we will tell you what the journey needs — a transfer, a vehicle for the day, or a coordinated group plan."
        image={images.tatendaSafariCarHire}
        primaryLabel="Plan your transport"
        secondaryLabel="Ask a question"
      />
    </>
  );
}
