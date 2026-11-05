import PageHero from "@/components/ui/PageHero";
import { images } from "@/data/images";
import { site } from "@/data/site";

export const metadata = {
  title: "Privacy",
  description:
    "Privacy information for the Tatenda Safaris preview site. Forms are demos and do not send data in this build.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        image={images.portraitTrain}
        eyebrow="Privacy"
        title="A preview notice."
        intro="This page explains how the current preview build behaves. It is not the final privacy policy and must be replaced before launch."
        size="short"
      />

      <section className="section">
        <div className="container containerNarrow">
          <div className="detailSection">
            <p className="sampleTag">Preview build</p>
            <h2 className="detailSectionTitle">The short version.</h2>
            <div className="detailCopy">
              <p>
                This site is a front-end preview. The enquiry forms and the
                journey planner are demonstrations: they validate input in the
                browser but do not send it to a server, an inbox or a CRM.
              </p>
              <p>
                Information typed into a form stays in the browser for that
                session and is discarded when you leave the page or reset the
                form. Nothing is stored by the site itself.
              </p>
            </div>
          </div>

          <div className="detailSection">
            <h2 className="detailSectionTitle">What the final site will need.</h2>
            <div className="detailCopy">
              <p>
                Before launch, this page must be replaced with a policy that
                covers the real enquiry workflow, the hosting provider, any
                analytics or cookies, how long enquiries are kept, who can
                access them, and how someone can ask for their data to be
                corrected or deleted.
              </p>
              <p>
                The final notice should also explain how contact details are
                used, whether any third-party booking or email tools are
                involved, and how to make a complaint.
              </p>
            </div>
          </div>

          <div className="detailSection">
            <h2 className="detailSectionTitle">Photography.</h2>
            <div className="detailCopy">
              <p>
                The images in this preview are placeholders sourced from Bushtracks
                Africa for layout purposes only. They are not licensed for
                launch and must be replaced with approved, licensed photography
                before the site goes live.
              </p>
            </div>
          </div>

          <div className="detailSection">
            <h2 className="detailSectionTitle">Contact.</h2>
            <div className="detailCopy">
              <p>
                The contact details in this build are placeholders. For
                questions about this preview, contact the site owner directly.
                The published address will be{" "}
                <a href={`mailto:${site.email}`} className="textLink">
                  {site.email}
                </a>{" "}
                once it is confirmed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
