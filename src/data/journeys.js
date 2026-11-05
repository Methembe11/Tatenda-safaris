import { images } from "./images";

export const journeys = [
  {
    slug: "victoria-falls-and-hwange",
    title: "Victoria Falls & Hwange",
    kicker: "The falls, then the wild",
    duration: "6 nights",
    region: "Western Zimbabwe",
    regions: ["Victoria Falls", "Hwange"],
    style: "Classic safari",
    summary:
      "Begin with the thunder of the falls, then trade the spray for the quiet of Hwange's teak forests and waterholes.",
    image: images.zimbabwe,
    gallery: [images.victoriaFalls, images.wildlife, images.lodge],
    featured: true,
    highlights: [
      "A guided walk through the rainforest at Victoria Falls",
      "A slow sunset on the Zambezi",
      "Game drives through Hwange National Park",
      "Private road transfers between the falls and the park",
    ],
    days: [
      {
        day: "01",
        title: "Arrive at Victoria Falls",
        body: "Land, settle in and take the afternoon at your own pace. In the evening, head out for a quiet sunset on the river.",
      },
      {
        day: "02",
        title: "The falls, up close",
        body: "Walk the rainforest paths with a guide who knows the stories behind the spray. The rest of the day is yours.",
      },
      {
        day: "03",
        title: "Into Hwange",
        body: "A private road transfer takes you into the park. Arrive in time for lunch and an afternoon game drive.",
      },
      {
        day: "04",
        title: "A full day in the bush",
        body: "Morning and afternoon drives, with time in camp during the heat of the day. The pace is set by what the bush is doing.",
      },
      {
        day: "05",
        title: "Walking country",
        body: "A guided walk brings a different scale to the landscape. Spend the afternoon at the waterhole or back in camp.",
      },
      {
        day: "06",
        title: "Last light in Hwange",
        body: "One more early drive, then a final evening in camp. Your onward transfer is arranged for the following morning.",
      },
      {
        day: "07",
        title: "Depart",
        body: "Transfer onward to Victoria Falls airport or to your next Zimbabwe stop.",
      },
    ],
    inclusions: [
      "Accommodation as outlined in the final itinerary",
      "Private road transfers",
      "Guided activities with local guides",
      "Meals as confirmed with your chosen properties",
    ],
    goodToKnow:
      "This is a sample journey. Final routing, properties and activities are confirmed with the Tatenda team once dates and availability are checked.",
  },
  {
    slug: "mana-pools-slowly",
    title: "Mana Pools, Slowly",
    kicker: "Zambezi light and walking country",
    duration: "4 nights",
    region: "Lower Zambezi",
    regions: ["Mana Pools"],
    style: "Walking & river",
    summary:
      "Four nights on the Zambezi, where walking, canoeing and long afternoons set the pace.",
    image: images.river,
    gallery: [images.river, images.wildlife, images.landscape],
    featured: true,
    highlights: [
      "Guided walks along the Zambezi floodplain",
      "A canoe journey with the current",
      "Afternoons shaded by winter thorn trees",
      "Time to watch the river change colour",
    ],
    days: [
      {
        day: "01",
        title: "Arrive on the river",
        body: "A light-aircraft transfer brings you into the park. Settle into camp and take a first slow walk by the water.",
      },
      {
        day: "02",
        title: "On foot",
        body: "A morning walk with your guide, reading tracks and following the sounds of the bush. The afternoon is unhurried.",
      },
      {
        day: "03",
        title: "The river",
        body: "Spend the day on and beside the Zambezi, with a canoe section when conditions allow and a picnic stop along the way.",
      },
      {
        day: "04",
        title: "A last morning",
        body: "One final walk before the heat arrives. Return to camp for lunch, then transfer out for your onward journey.",
      },
    ],
    inclusions: [
      "Sample camp accommodation",
      "Guided walks and river activity",
      "Light-aircraft transfers as outlined",
      "Meals as confirmed with the camp",
    ],
    goodToKnow:
      "Sample journey. Mana Pools is seasonal, and walking and canoe activity depend on water levels, weather and guide advice.",
  },
  {
    slug: "matobo-and-great-zimbabwe",
    title: "Matobo & Great Zimbabwe",
    kicker: "Stone, sky and history",
    duration: "5 nights",
    region: "Southern Zimbabwe",
    regions: ["Matobo", "Great Zimbabwe"],
    style: "Landscape & culture",
    summary:
      "Granite hills, ancient stone walls and a slower southern rhythm — a journey through Zimbabwe's older stories.",
    image: images.zimbabwe,
    gallery: [images.zimbabwe, images.landscape, images.explorer],
    featured: true,
    highlights: [
      "A guided walk among the Matobo Hills",
      "Rock art and landscapes with a local guide",
      "A day at the Great Zimbabwe ruins",
      "Quiet roads and wide southern skies",
    ],
    days: [
      {
        day: "01",
        title: "Into the Matobo Hills",
        body: "Arrive in Bulawayo and transfer into the hills. Take a late-afternoon walk as the light softens.",
      },
      {
        day: "02",
        title: "Granite and rock art",
        body: "Spend the day with a guide among the balancing rocks, sheltered valleys and painted shelters.",
      },
      {
        day: "03",
        title: "Toward Great Zimbabwe",
        body: "A road journey south, with the landscape opening up along the way. Settle in near the ruins.",
      },
      {
        day: "04",
        title: "The stone city",
        body: "Walk the Great Zimbabwe site with a guide, then take the afternoon at your own pace.",
      },
      {
        day: "05",
        title: "A slower morning",
        body: "A final walk or a late breakfast before your transfer onward.",
      },
    ],
    inclusions: [
      "Sample accommodation",
      "Private road transfers",
      "Local guides at both destinations",
      "Meals as confirmed with your properties",
    ],
    goodToKnow:
      "Sample journey. The order of destinations can be reversed depending on flights and the rest of your trip.",
  },
  {
    slug: "lake-kariba-and-matusadona",
    title: "Lake Kariba & Matusadona",
    kicker: "Water, shoreline, wildlife",
    duration: "5 nights",
    region: "Northern Zimbabwe",
    regions: ["Lake Kariba"],
    style: "River & wildlife",
    summary:
      "Days on the water and evenings on the shoreline, with the Matusadona hills as a backdrop.",
    image: images.landscape,
    gallery: [images.landscape, images.river, images.wildlife],
    featured: false,
    highlights: [
      "Time on Lake Kariba",
      "Shoreline game viewing",
      "Sunsets over the Matusadona hills",
      "A quiet base between activities",
    ],
    days: [
      {
        day: "01",
        title: "Arrive at the lake",
        body: "Transfer to your lakeside base and settle in. The afternoon is left open.",
      },
      {
        day: "02",
        title: "On the water",
        body: "Spend the morning on the lake, then return for lunch and a shaded afternoon.",
      },
      {
        day: "03",
        title: "Shoreline and hills",
        body: "A day of gentle exploration along the shoreline, with time to watch the light change over the Matusadona hills.",
      },
      {
        day: "04",
        title: "A day at your own pace",
        body: "Choose another water activity or simply stay close to camp. Your guide will help shape the day.",
      },
      {
        day: "05",
        title: "Depart",
        body: "A final morning on the lake before your transfer onward.",
      },
    ],
    inclusions: [
      "Sample lakeside accommodation",
      "Water-based activities as outlined",
      "Road and/or boat transfers",
      "Meals as confirmed with your property",
    ],
    goodToKnow:
      "Sample journey. Water levels and activity availability change through the year.",
  },
  {
    slug: "eastern-highlands-escape",
    title: "Eastern Highlands Escape",
    kicker: "Cool air and long views",
    duration: "4 nights",
    region: "Eastern Zimbabwe",
    regions: ["Eastern Highlands"],
    style: "Walking & landscape",
    summary:
      "A quieter Zimbabwe of mountains, tea country and walking trails, with time to breathe.",
    image: images.explorer,
    gallery: [images.explorer, images.landscape, images.lodgePool],
    featured: false,
    highlights: [
      "Walks through the highlands",
      "Tea-country roads and viewpoints",
      "Cool evenings and open fires",
      "A slower pace after the bush",
    ],
    days: [
      {
        day: "01",
        title: "Into the highlands",
        body: "Arrive and settle in, with the afternoon free to walk the grounds or simply unpack.",
      },
      {
        day: "02",
        title: "A day on foot",
        body: "A guided walk through the surrounding hills, with a packed lunch and plenty of stops.",
      },
      {
        day: "03",
        title: "Tea country",
        body: "Take a scenic drive through the tea estates and stop for views along the way.",
      },
      {
        day: "04",
        title: "A last quiet morning",
        body: "A short walk or a slow breakfast before your transfer onward.",
      },
    ],
    inclusions: [
      "Sample highland accommodation",
      "Guided walks and scenic drives",
      "Private transfers",
      "Meals as confirmed with your property",
    ],
    goodToKnow:
      "Sample journey. Walking routes are adjusted for weather and fitness.",
  },
  {
    slug: "a-first-journey-through-zimbabwe",
    title: "A First Journey Through Zimbabwe",
    kicker: "The country, in one go",
    duration: "8 nights",
    region: "Across Zimbabwe",
    regions: ["Victoria Falls", "Hwange", "Lake Kariba"],
    style: "The full picture",
    summary:
      "Falls, park and lake in one considered route — an introduction to the country for a first visit.",
    image: images.safari,
    gallery: [images.victoriaFalls, images.wildlife, images.river],
    featured: false,
    highlights: [
      "Victoria Falls at the start",
      "Hwange's waterholes and teak forest",
      "A change of pace on Lake Kariba",
      "One route, arranged end to end",
    ],
    days: [
      {
        day: "01–02",
        title: "Victoria Falls",
        body: "Arrive, see the falls and take a sunset river cruise.",
      },
      {
        day: "03–05",
        title: "Hwange",
        body: "Road transfer into the park for three nights of game drives and quiet camp afternoons.",
      },
      {
        day: "06–08",
        title: "Lake Kariba",
        body: "Transfer north for time on the water and along the shoreline before your journey home.",
      },
    ],
    inclusions: [
      "Sample accommodation across three stops",
      "Private road transfers",
      "Guided activities as outlined",
      "Meals as confirmed with your properties",
    ],
    goodToKnow:
      "Sample journey. This route can be shortened, reversed or extended with Matobo or the Eastern Highlands.",
  },
];

export const journeyRegions = [
  "All",
  "Victoria Falls",
  "Hwange",
  "Mana Pools",
  "Matobo",
  "Great Zimbabwe",
  "Lake Kariba",
  "Eastern Highlands",
];

export function getJourney(slug) {
  return journeys.find((journey) => journey.slug === slug);
}
