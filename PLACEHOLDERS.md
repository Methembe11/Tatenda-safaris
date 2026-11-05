# Placeholders and launch checklist

This build is a preview. The items below must be resolved before the site is published as a live Tatenda Safaris site.

## Photography

All images in `public/images/` are temporary layout assets sourced from Bushtracks Africa. They are **not licensed for production use**. Replace every file with approved, licensed photography, keeping the same filenames or updating `src/data/images.js`.

Current placeholders:

| File | Used for |
| --- | --- |
| `hero-falls.jpg` | Home hero, Victoria Falls journey |
| `victoria-falls.jpg` | Journey galleries |
| `safari.jpg` | Journeys hero, safari imagery |
| `wildlife.jpg` | Journey galleries |
| `river.jpg` | Mana Pools journey, planner hero |
| `lodge.jpg` | Stays |
| `lodge-pool.jpg` | Stays, accommodation hero |
| `train.jpg` | Transport hero |
| `group.jpg` | Group services |
| `landscape.jpg` | Contact hero, closing bands |
| `zimbabwe.jpg` | Matobo journey |
| `explorer.jpg` | About hero, Eastern Highlands |
| `vehicle-van.jpg` | Transport imagery |
| `vehicle-coach.jpg` | Transport imagery |
| `cta.jpg` | Closing call to action |
| `portrait.jpg` | Home and About editorial portraits |
| `portrait-train.jpg` | Privacy hero |

## Contact details

Placeholders live in `src/data/site.js`:

- Email: `hello@tatendasafaris.com`
- Phone: `+263 00 000 0000`
- Phone link: `tel:+263000000000`
- Location: `Zimbabwe`
- Site URL: `https://tatendasafaris.com`

Replace these with confirmed details and update the footer, contact page, privacy page and JSON-LD automatically through `site.js`.

## Content

- All six journeys in `src/data/journeys.js` are samples, not confirmed departures.
- All three stays in `src/data/stays.js` are samples, not live room inventory.
- Fleet categories in `src/data/fleet.js` are indicative, not a confirmed fleet list.
- FAQs in `src/data/faqs.js` are draft planning answers.
- No testimonials, awards, client logos, star ratings, years in business, traveller numbers or price claims are included. Do not add them without verified evidence.

## Forms

`src/components/forms/EnquiryForm.jsx` and `src/components/forms/TripPlanner.jsx` are front-end demonstrations only.

- They validate in the browser and show a local success state.
- Nothing is sent to an inbox, API or CRM.
- The success panels and notes tell visitors this is a preview.
- Before launch, connect the forms to a real endpoint, add server-side validation and spam protection, update the privacy notice, and remove the preview notes.

## Legal

`src/app/privacy/page.js` is a preview notice, not a final privacy policy. It must be replaced with a policy covering the real enquiry workflow, hosting, analytics, cookies, retention, access and deletion.

## Technical checks before launch

Run from the project root:

```bash
npm run lint
npm run build
```

Then verify:

- All placeholder images have been replaced.
- Contact details and social links (if added) are correct.
- Form submissions reach the intended inbox and success states are accurate.
- Privacy and consent wording matches the real workflow.
- Metadata, canonical URLs and `src/data/site.js` use the final domain.
- `robots.js` and `sitemap.js` resolve against the production domain.
- No sample-only language remains on pages that are meant to be final.
