"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { journeys } from "@/data/journeys";

const parties = [
  "Couple",
  "Family with children",
  "Solo traveller",
  "Friends",
  "Small group",
  "Not sure yet",
];

const travellerCounts = ["1", "2", "3", "4", "5", "6", "7", "8+"];

const months = [
  "Not sure yet",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const lengths = [
  "3–4 nights",
  "5–7 nights",
  "8–10 nights",
  "11+ nights",
  "Not sure yet",
];

const interests = [
  "Wildlife",
  "Walking",
  "Birding",
  "Photography",
  "Culture & history",
  "Family travel",
  "Honeymoon",
  "Fly-in safari",
  "River & lake",
  "Slow travel",
];

const budgets = ["Comfortable", "Premium", "Not sure yet"];

const initialValues = {
  party: "",
  travellers: "2",
  month: "",
  nights: "",
  journey: "",
  interests: [],
  base: "",
  budget: "",
  notes: "",
  name: "",
  email: "",
  phone: "",
  country: "",
  contactMethod: "Email",
  consent: false,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function TripPlanner() {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function update(name, value) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  function toggleInterest(interest) {
    setValues((current) => ({
      ...current,
      interests: current.interests.includes(interest)
        ? current.interests.filter((item) => item !== interest)
        : [...current.interests, interest],
    }));
  }

  function validateStep(currentStep) {
    const nextErrors = {};

    if (currentStep === 1) {
      if (!values.party) nextErrors.party = "Choose the closest option.";
      if (!values.month) nextErrors.month = "Choose a month or select flexible.";
      if (!values.nights) nextErrors.nights = "Choose an approximate length.";
    }

    if (currentStep === 3) {
      if (!values.name.trim()) nextErrors.name = "Enter your name.";
      if (!values.email.trim()) {
        nextErrors.email = "Enter your email address.";
      } else if (!emailPattern.test(values.email.trim())) {
        nextErrors.email = "Enter a valid email address.";
      }
      if (!values.consent) {
        nextErrors.consent = "Confirm we may contact you about this enquiry.";
      }
    }

    return nextErrors;
  }

  function goForward() {
    const nextErrors = validateStep(step);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setStep((current) => Math.min(current + 1, 3));
  }

  function goBack() {
    setErrors({});
    setStep((current) => Math.max(current - 1, 1));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validateStep(3);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  function restart() {
    setValues(initialValues);
    setErrors({});
    setStep(1);
    setSubmitted(false);
  }

  if (submitted) {
    const chosenJourney =
      values.journey || "An itinerary shaped with you";
    return (
      <div className="successPanel" role="status" aria-live="polite">
        <p className="eyebrow">Planner preview</p>
        <h2 className="successTitle" style={{ marginTop: "0.75rem" }}>
          Thank you{values.name ? `, ${values.name.split(" ")[0]}` : ""}.
        </h2>
        <p className="successBody">
          This is a preview. Nothing has been sent to the Tatenda team yet —
          the final site will deliver this brief to a real inbox.
        </p>

        <h3 className="asideTitle" style={{ marginTop: "1.5rem" }}>
          {chosenJourney}
        </h3>
        <dl className="asideFacts">
          <div className="asideFact">
            <dt className="asideFactLabel">Travelling</dt>
            <dd className="asideFactValue">
              {values.party || "Not specified"}
              {values.travellers ? `, ${values.travellers} traveller(s)` : ""}
            </dd>
          </div>
          <div className="asideFact">
            <dt className="asideFactLabel">When</dt>
            <dd className="asideFactValue">
              {values.month || "Not specified"}
            </dd>
          </div>
          <div className="asideFact">
            <dt className="asideFactLabel">Length</dt>
            <dd className="asideFactValue">
              {values.nights || "Not specified"}
            </dd>
          </div>
          <div className="asideFact">
            <dt className="asideFactLabel">Interests</dt>
            <dd className="asideFactValue">
              {values.interests.length
                ? values.interests.join(", ")
                : "Open to suggestions"}
            </dd>
          </div>
          <div className="asideFact">
            <dt className="asideFactLabel">Contact</dt>
            <dd className="asideFactValue">
              {values.email}
              {values.phone ? ` · ${values.phone}` : ""}
            </dd>
          </div>
        </dl>

        <div className="formActions">
          <Link href="/tours-safaris" className="btn btnPrimary">
            Browse journeys
            <ArrowUpRight aria-hidden="true" />
          </Link>
          <button type="button" className="btn btnOutline" onClick={restart}>
            Start again
          </button>
        </div>
      </div>
    );
  }

  const stepLabels = ["The trip", "Details", "Contact"];

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="stepper" aria-hidden="true">
        {stepLabels.map((label, index) => (
          <div
            className={`stepperItem${
              step === index + 1 ? " stepperItem--active" : ""
            }${step > index + 1 ? " stepperItem--done" : ""}`}
            key={label}
          >
            <span className="stepperDot">
              {step > index + 1 ? (
                <Check width={13} height={13} />
              ) : (
                index + 1
              )}
            </span>
            <small className="stepperLabel">{label}</small>
          </div>
        ))}
      </div>

      <p className="srOnly" aria-live="polite">
        Step {step} of 3: {stepLabels[step - 1]}
      </p>

      <div
        className={Object.keys(errors).length ? "errorSummary" : "srOnly"}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        {Object.keys(errors).length
          ? "Please check the highlighted fields before continuing."
          : ""}
      </div>

      {step === 1 ? (
        <div className="stepPanel">
          <p className="eyebrow">Step one</p>
          <h2 className="stepHeading">The shape of the journey.</h2>
          <p className="stepIntro">
            A few starting points help us read the trip before we ask for
            anything else. Nothing here is fixed.
          </p>

          <div className="form">
            <div className="field">
              <label className="label" htmlFor="planner-party">
                Who is travelling?
              </label>
              <select
                id="planner-party"
                className="select"
                value={values.party}
                onChange={(event) => update("party", event.target.value)}
                aria-invalid={errors.party ? "true" : undefined}
                required
              >
                <option value="">Please select</option>
                {parties.map((party) => (
                  <option value={party} key={party}>
                    {party}
                  </option>
                ))}
              </select>
              {errors.party ? (
                <p className="errorText">{errors.party}</p>
              ) : null}
            </div>

            <div className="field">
              <label className="label" htmlFor="planner-travellers">
                How many travellers?
              </label>
              <select
                id="planner-travellers"
                className="select"
                value={values.travellers}
                onChange={(event) => update("travellers", event.target.value)}
              >
                {travellerCounts.map((count) => (
                  <option value={count} key={count}>
                    {count}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label className="label" htmlFor="planner-month">
                When would you like to travel?
              </label>
              <select
                id="planner-month"
                className="select"
                value={values.month}
                onChange={(event) => update("month", event.target.value)}
                aria-invalid={errors.month ? "true" : undefined}
                required
              >
                <option value="">Please select</option>
                {months.map((month) => (
                  <option value={month} key={month}>
                    {month}
                  </option>
                ))}
              </select>
              {errors.month ? (
                <p className="errorText">{errors.month}</p>
              ) : null}
            </div>

            <div className="field">
              <label className="label" htmlFor="planner-nights">
                Roughly how long?
              </label>
              <select
                id="planner-nights"
                className="select"
                value={values.nights}
                onChange={(event) => update("nights", event.target.value)}
                aria-invalid={errors.nights ? "true" : undefined}
                required
              >
                <option value="">Please select</option>
                {lengths.map((length) => (
                  <option value={length} key={length}>
                    {length}
                  </option>
                ))}
              </select>
              {errors.nights ? (
                <p className="errorText">{errors.nights}</p>
              ) : null}
            </div>

            <div className="field">
              <label className="label" htmlFor="planner-journey">
                Is one of our journeys close to what you have in mind?
              </label>
              <select
                id="planner-journey"
                className="select"
                value={values.journey}
                onChange={(event) => update("journey", event.target.value)}
              >
                <option value="">An itinerary shaped with you</option>
                {journeys.map((journey) => (
                  <option value={journey.title} key={journey.slug}>
                    {journey.title}
                  </option>
                ))}
              </select>
            </div>

            <fieldset className="fieldset">
              <legend className="legend">
                What would make the trip feel right?
              </legend>
              <p className="hint">Choose as many as you like.</p>
              <div className="checkGrid">
                {interests.map((interest) => (
                  <label className="checkOption" key={interest}>
                    <input
                      type="checkbox"
                      checked={values.interests.includes(interest)}
                      onChange={() => toggleInterest(interest)}
                    />
                    <span>{interest}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="stepPanel">
          <p className="eyebrow">Step two</p>
          <h2 className="stepHeading">A little more context.</h2>
          <p className="stepIntro">
            Optional, but useful. The more we understand, the more honest our
            suggestions can be.
          </p>

          <div className="form">
            <div className="field">
              <label className="label" htmlFor="planner-base">
                Where are you arriving from?
              </label>
              <input
                id="planner-base"
                className="input"
                type="text"
                value={values.base}
                onChange={(event) => update("base", event.target.value)}
                placeholder="City, country, or arrival airport"
                autoComplete="off"
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="planner-budget">
                How do you think about budget?
              </label>
              <select
                id="planner-budget"
                className="select"
                value={values.budget}
                onChange={(event) => update("budget", event.target.value)}
              >
                <option value="">Prefer not to say</option>
                {budgets.map((budget) => (
                  <option value={budget} key={budget}>
                    {budget}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label className="label" htmlFor="planner-notes">
                Anything we should know?
              </label>
              <textarea
                id="planner-notes"
                className="textarea"
                rows={6}
                value={values.notes}
                onChange={(event) => update("notes", event.target.value)}
                placeholder="Access needs, celebrations, places you have already seen, questions."
              />
            </div>
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="stepPanel">
          <p className="eyebrow">Step three</p>
          <h2 className="stepHeading">Where should we reply?</h2>
          <p className="stepIntro">
            A person from the Tatenda team will read this and reply with next
            steps — not an automated quote.
          </p>

          <div className="form">
            <div className="field">
              <label className="label" htmlFor="planner-name">
                Your name
              </label>
              <input
                id="planner-name"
                className="input"
                type="text"
                value={values.name}
                onChange={(event) => update("name", event.target.value)}
                autoComplete="name"
                aria-invalid={errors.name ? "true" : undefined}
                required
              />
              {errors.name ? (
                <p className="errorText">{errors.name}</p>
              ) : null}
            </div>

            <div className="field">
              <label className="label" htmlFor="planner-email">
                Email
              </label>
              <input
                id="planner-email"
                className="input"
                type="email"
                value={values.email}
                onChange={(event) => update("email", event.target.value)}
                autoComplete="email"
                inputMode="email"
                aria-invalid={errors.email ? "true" : undefined}
                required
              />
              {errors.email ? (
                <p className="errorText">{errors.email}</p>
              ) : null}
            </div>

            <div className="field">
              <label className="label" htmlFor="planner-phone">
                Phone or WhatsApp <span className="optional">(optional)</span>
              </label>
              <input
                id="planner-phone"
                className="input"
                type="tel"
                value={values.phone}
                onChange={(event) => update("phone", event.target.value)}
                autoComplete="tel"
                inputMode="tel"
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="planner-country">
                Country of residence
              </label>
              <input
                id="planner-country"
                className="input"
                type="text"
                value={values.country}
                onChange={(event) => update("country", event.target.value)}
                autoComplete="country-name"
              />
            </div>

            <fieldset className="fieldset">
              <legend className="legend">How would you prefer to talk?</legend>
              <div className="radioGrid">
                {["Email", "Phone", "WhatsApp"].map((method) => (
                  <label className="radioOption" key={method}>
                    <input
                      type="radio"
                      name="contactMethod"
                      value={method}
                      checked={values.contactMethod === method}
                      onChange={() => update("contactMethod", method)}
                    />
                    <span>{method}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="field">
              <label className="checkOption">
                <input
                  type="checkbox"
                  checked={values.consent}
                  onChange={(event) => update("consent", event.target.checked)}
                  aria-invalid={errors.consent ? "true" : undefined}
                  required
                />
                <span>
                  I am happy for Tatenda Safaris to contact me about this
                  enquiry. No newsletter, no passing my details on.
                </span>
              </label>
              {errors.consent ? (
                <p className="errorText">{errors.consent}</p>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      <div className="stepActions">
        {step > 1 ? (
          <button type="button" className="btn btnOutline" onClick={goBack}>
            <ArrowLeft aria-hidden="true" />
            Back
          </button>
        ) : (
          <span />
        )}

        {step < 3 ? (
          <button type="button" className="btn btnPrimary" onClick={goForward}>
            Continue
            <ArrowRight aria-hidden="true" />
          </button>
        ) : (
          <button type="submit" className="btn btnPrimary">
            Send my brief
            <ArrowUpRight aria-hidden="true" />
          </button>
        )}
      </div>

      <p className="formNote">
        Preview only — this planner is not connected to an inbox yet. Nothing
        is sent when you submit.
      </p>
    </form>
  );
}
