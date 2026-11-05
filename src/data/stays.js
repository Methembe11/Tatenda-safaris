import { images } from "./images";

export const stays = [
  {
    slug: "river-rooms",
    title: "River Rooms",
    kicker: "A quiet room by the water",
    guests: "2 guests",
    size: "Sample room",
    summary:
      "A calm room, a shaded veranda and the sound of water — an easy base for days out.",
    image: images.tatendaInterior,
    gallery: [images.tatendaInterior, images.tatendaAccommodation, images.tatendaPoolside],
    features: [
      "Sample river or garden outlook",
      "En-suite bathroom",
      "Breakfast included in sample rates",
      "Wi-Fi in communal areas",
    ],
    facilities: [
      "Swimming pool",
      "Garden seating",
      "Airport transfers on request",
      "Secure parking",
    ],
    goodToKnow:
      "Sample accommodation. Room configurations, facilities and rates are confirmed directly with Tatenda Safaris.",
  },
  {
    slug: "garden-suite",
    title: "Garden Suite",
    kicker: "More room to settle in",
    guests: "2–4 guests",
    size: "Sample suite",
    summary:
      "A little more space, a private corner and room for a slower morning before the day begins.",
    image: images.tatendaAccommodation,
    gallery: [images.tatendaAccommodation, images.tatendaOutside, images.tatendaBackview],
    features: [
      "Separate sitting area",
      "Sample garden outlook",
      "En-suite bathroom",
      "Breakfast included in sample rates",
    ],
    facilities: [
      "Swimming pool",
      "Shaded terrace",
      "Airport transfers on request",
      "Secure parking",
    ],
    goodToKnow:
      "Sample accommodation. Final room details and availability are confirmed with the team.",
  },
  {
    slug: "family-house",
    title: "The Family House",
    kicker: "Space for everyone",
    guests: "4–6 guests",
    size: "Sample house",
    summary:
      "A practical base for families and small groups, with room to come together and room to spread out.",
    image: images.tatendaOutside,
    gallery: [images.tatendaOutside, images.tatendaBackview, images.tatendaEntrance],
    features: [
      "Two sample bedrooms",
      "Living and dining space",
      "Private outdoor seating",
      "Breakfast included in sample rates",
    ],
    facilities: [
      "Swimming pool",
      "Garden",
      "Airport transfers on request",
      "Secure parking",
    ],
    goodToKnow:
      "Sample accommodation. Layout, capacity and facilities are confirmed with Tatenda Safaris before booking.",
  },
];

export function getStay(slug) {
  return stays.find((stay) => stay.slug === slug);
}
