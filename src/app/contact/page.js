import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { images } from "@/data/images";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact",
  description:
    "Contact Tatenda Safaris about a journey, a stay, transport or a group trip in Zimbabwe. Contact details are placeholders in this preview build.",
  alternates: {
    canonical: "/contact",
  },
};

const contactFields = [
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
    name: "topic",
    label: "What is this about?",
    type: "select",
    placeholder: "Please select",
    options: [
      "A new journey",
      "Accommodation",
      "Transport",
      "Group travel",
      "An existing enquiry",
      "Something else",
    ],
    full: false,
  },
  {
    name: "message",
    label: "Your message",
    type: "textarea",
    rows: 6,
    placeholder:
      "What would you like to know? If it is about a journey, include the route and rough dates.",
    required: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        image={images.landscape}
        eyebrow="Contact"
        title="Start with the question you have."
        intro="A route, a date, a room, a transfer or a group that needs coordinating. Write plainly and we will reply in the same way."
        size="short"
      />

      <section className="section">
        <div className="container contactGrid">
          <Reveal>
            <p className="eyebrow">Direct contact</p>
            <h2 className="sectionTitle" style={{ marginTop: "1.25rem" }}>
              One team, one conversation.
            </h2>
            <p className="bodyText" style={{ marginTop: "1.25rem" }}>
              Use the form if you want to give us the full picture. If you
              already know the question, email or call directly.
            </p>

            <div className="contactDetails" style={{ marginTop: "2rem" }}>
              <div className="contactBlock">
                <p className="contactLabel">Email</p>
                <a href={`mailto:${site.email}`} className="contactValue">
                  {site.email}
                </a>
              </div>
              <div className="contactBlock">
                <p className="contactLabel">Phone / WhatsApp</p>
                <a href={site.phoneHref} className="contactValue">
                  {site.phone}
                </a>
              </div>
              <div className="contactBlock">
                <p className="contactLabel">Based in</p>
                <span className="contactValue">{site.location}</span>
              </div>
            </div>

            <p className="contactNote">
              These contact details are placeholders for the preview build and
              will be replaced with the client&apos;s real details before
              launch. The form below is also a front-end demo.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <EnquiryForm
              fields={contactFields}
              submitLabel="Send message"
              successTitle="Your message is ready."
              successBody="This is a preview form, so nothing has been sent. The final site will deliver the message to the Tatenda team."
              note="Preview only — this form is not connected to an inbox yet."
            />
          </Reveal>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <div className="plannerGrid">
            <div>
              <p className="eyebrow">Not sure where to start?</p>
              <h2 className="sectionTitle" style={{ marginTop: "1rem" }}>
                Use the journey planner.
              </h2>
            </div>
            <div>
              <p className="bodyText">
                A few questions about the trip — who is travelling, roughly
                when, and what matters — give us enough to reply with a useful
                next step.
              </p>
              <div style={{ marginTop: "1.5rem" }}>
                <Link href="/plan-your-trip" className="btn btnPrimary">
                  Plan your journey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
