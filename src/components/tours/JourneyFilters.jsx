"use client";

import { useState } from "react";
import JourneyCard from "@/components/ui/JourneyCard";
import { journeys, journeyRegions } from "@/data/journeys";

export default function JourneyFilters() {
  const [activeRegion, setActiveRegion] = useState("All");

  const visibleJourneys =
    activeRegion === "All"
      ? journeys
      : journeys.filter((journey) => journey.regions.includes(activeRegion));

  return (
    <>
      <div className="filterBar">
        <div className="filterChips" aria-label="Filter journeys by region">
          {journeyRegions.map((region) => (
            <button
              key={region}
              type="button"
              className="filterChip"
              aria-pressed={activeRegion === region}
              onClick={() => setActiveRegion(region)}
            >
              {region}
            </button>
          ))}
        </div>
        <p className="filterCount" aria-live="polite">
          {visibleJourneys.length}{" "}
          {visibleJourneys.length === 1 ? "journey" : "journeys"}
        </p>
      </div>

      <div className="journeyListingGrid">
        {visibleJourneys.map((journey) => (
          <JourneyCard journey={journey} key={journey.slug} />
        ))}
      </div>

      {visibleJourneys.length === 0 ? (
        <p className="bodyText" style={{ marginTop: "2rem" }}>
          No sample journeys are listed for this region yet. Tell us what you
          have in mind and we will shape one with you.
        </p>
      ) : null}
    </>
  );
}
