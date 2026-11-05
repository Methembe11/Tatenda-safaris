import { journeys } from "@/data/journeys";
import { stays } from "@/data/stays";
import { site } from "@/data/site";

export default function sitemap() {
  const base = site.url.replace(/\/$/, "");

  const staticRoutes = [
    { path: "/", priority: 1, changeFrequency: "monthly" },
    { path: "/tours-safaris", priority: 0.9, changeFrequency: "monthly" },
    { path: "/accommodation", priority: 0.8, changeFrequency: "monthly" },
    { path: "/transport", priority: 0.8, changeFrequency: "monthly" },
    { path: "/group-services", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.6, changeFrequency: "yearly" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
    { path: "/plan-your-trip", priority: 0.9, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route.path}`,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...journeys.map((journey) => ({
      url: `${base}/tours-safaris/${journey.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    ...stays.map((stay) => ({
      url: `${base}/accommodation/${stay.slug}`,
      changeFrequency: "monthly",
      priority: 0.6,
    })),
  ];
}
