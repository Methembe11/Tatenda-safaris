"use client";

import { useId, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function buildInitialState(fields) {
  return Object.fromEntries(
    fields.map((field) => [
      field.name,
      field.type === "checkbox-group" ? [] : "",
    ]),
  );
}

export default function EnquiryForm({
  fields,
  submitLabel = "Send enquiry",
  successTitle = "Thank you — your brief is ready.",
  successBody = "This is a preview form, so nothing has been sent yet. The final site will connect your enquiry to the Tatenda team.",
  note = "Preview only — this form is not connected to an inbox yet.",
  compact = false,
}) {
  const baseId = useId().replace(/:/g, "");
  const formName = `enquiry-${baseId}`;
  const [values, setValues] = useState(() => buildInitialState(fields));
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const formRef = useRef(null);

  function updateValue(name, value) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  function toggleCheckbox(name, option) {
    setValues((current) => {
      const selected = current[name] || [];
      return {
        ...current,
        [name]: selected.includes(option)
          ? selected.filter((item) => item !== option)
          : [...selected, option],
      };
    });
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  function validate() {
    const nextErrors = {};

    for (const field of fields) {
      const value = values[field.name];
      const isEmpty = Array.isArray(value)
        ? value.length === 0
        : String(value || "").trim() === "";

      if (field.required && isEmpty) {
        nextErrors[field.name] = field.error || "Please complete this field.";
        continue;
      }

      if (
        field.type === "email" &&
        !isEmpty &&
        !emailPattern.test(String(value).trim())
      ) {
        nextErrors[field.name] = "Enter a valid email address.";
      }
    }

    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (honeypot) {
      setSubmitted(true);
      return;
    }

    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstField = fields.find((field) => nextErrors[field.name]);
      requestAnimationFrame(() => {
        const target = formRef.current?.querySelector(
          `[name="${firstField.name}"]`,
        );
        target?.focus();
      });
      return;
    }

    setErrors({});
    setSubmitted(true);
  }

  function resetForm() {
    setValues(buildInitialState(fields));
    setErrors({});
    setSubmitted(false);
    setHoneypot("");
  }

  if (submitted) {
    return (
      <div className="successPanel" role="status" aria-live="polite">
        <p className="eyebrow">Enquiry preview</p>
        <h3 className="successTitle" style={{ marginTop: "0.75rem" }}>
          {successTitle}
        </h3>
        <p className="successBody">{successBody}</p>
        <button type="button" className="btn btnOutline" onClick={resetForm}>
          Start another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      className={`form${compact ? " form--compact" : ""}`}
      name={formName}
      onSubmit={handleSubmit}
      noValidate
    >
      <div
        className={Object.keys(errors).length ? "errorSummary" : "srOnly"}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        {Object.keys(errors).length
          ? "Please check the highlighted fields and try again."
          : ""}
      </div>

      <div className={compact ? "form" : "formGrid"}>
        {fields.map((field) => {
          const fieldId = `${formName}-${field.name}`;
          const error = errors[field.name];
          const describedBy = [
            field.hint ? `${fieldId}-hint` : "",
            error ? `${fieldId}-error` : "",
          ]
            .filter(Boolean)
            .join(" ");

          if (field.type === "checkbox-group") {
            return (
              <fieldset
                className={`fieldset ${field.full === false ? "fieldHalf" : "fieldFull"}`}
                key={field.name}
              >
                <legend className="legend">{field.label}</legend>
                {field.hint ? (
                  <p className="hint" id={`${fieldId}-hint`}>
                    {field.hint}
                  </p>
                ) : null}
                <div className="checkGrid">
                  {field.options.map((option) => (
                    <label className="checkOption" key={option}>
                      <input
                        type="checkbox"
                        name={field.name}
                        value={option}
                        checked={(values[field.name] || []).includes(option)}
                        onChange={() => toggleCheckbox(field.name, option)}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
                {error ? (
                  <p className="errorText" id={`${fieldId}-error`}>
                    {error}
                  </p>
                ) : null}
              </fieldset>
            );
          }

          if (field.type === "radio-group") {
            return (
              <fieldset
                className="fieldset fieldFull"
                key={field.name}
                aria-describedby={describedBy || undefined}
              >
                <legend className="legend">{field.label}</legend>
                <div className="radioGrid">
                  {field.options.map((option) => (
                    <label className="radioOption" key={option}>
                      <input
                        type="radio"
                        name={field.name}
                        value={option}
                        checked={values[field.name] === option}
                        onChange={() => updateValue(field.name, option)}
                        required={field.required}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
                {error ? (
                  <p className="errorText" id={`${fieldId}-error`}>
                    {error}
                  </p>
                ) : null}
              </fieldset>
            );
          }

          const Wrapper = field.type === "textarea" ? "textarea" : "input";

          return (
            <div
              className={`field ${field.full === false ? "fieldHalf" : "fieldFull"}${error ? " field--error" : ""}`}
              key={field.name}
            >
              <label className="label" htmlFor={fieldId}>
                {field.label}
                {field.required ? (
                  <span className="srOnly"> (required)</span>
                ) : null}
              </label>
              {field.hint ? (
                <p className="hint" id={`${fieldId}-hint`}>
                  {field.hint}
                </p>
              ) : null}

              {field.type === "select" ? (
                <select
                  className="select"
                  id={fieldId}
                  name={field.name}
                  value={values[field.name]}
                  onChange={(event) =>
                    updateValue(field.name, event.target.value)
                  }
                  required={field.required}
                  aria-invalid={error ? "true" : undefined}
                  aria-describedby={describedBy || undefined}
                >
                  <option value="">{field.placeholder || "Please select"}</option>
                  {field.options.map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <Wrapper
                  className={field.type === "textarea" ? "textarea" : "input"}
                  id={fieldId}
                  name={field.name}
                  type={field.type === "textarea" ? undefined : field.type}
                  value={values[field.name]}
                  onChange={(event) =>
                    updateValue(field.name, event.target.value)
                  }
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                  inputMode={field.inputMode}
                  rows={field.type === "textarea" ? field.rows || 4 : undefined}
                  min={field.min}
                  required={field.required}
                  aria-invalid={error ? "true" : undefined}
                  aria-describedby={describedBy || undefined}
                />
              )}

              {error ? (
                <p className="errorText" id={`${fieldId}-error`}>
                  {error}
                </p>
              ) : null}
            </div>
          );
        })}

        <div className="hpField" aria-hidden="true">
          <label htmlFor={`${formName}-company`}>Company website</label>
          <input
            id={`${formName}-company`}
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />
        </div>

        <div className="fieldFull formActions">
          <button type="submit" className="btn btnPrimary">
            {submitLabel}
            <ArrowUpRight aria-hidden="true" />
          </button>
          <p className="formNote">{note}</p>
        </div>
      </div>
    </form>
  );
}
