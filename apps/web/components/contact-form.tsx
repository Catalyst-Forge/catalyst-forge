"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import { cn } from "@repo/ui/lib/utils";
import type { Messages } from "@/lib/i18n";
import { UTM_STORAGE_KEY, type StoredUtm } from "./utm-capture";

type ContactFormProps = {
  messages: Messages;
};

const contactLinks = {
  email: "mailto:catalystforgetechnology@gmail.com",
  whatsapp: "https://wa.me/6285121145387",
};

// The 1px border is the only thing that outlines a field on the white/cream
// card, so it has to reach 3:1 (#7F8CA0 is 3.4:1 on white, 3.2:1 on #FAF8F5).
// Placeholder text is real text: 65% of the ink colour is 5.3:1 on white.
const controlClassName =
  "min-w-0 rounded-lg border border-[#7F8CA0] bg-white px-4 text-base text-[#1A1A2E] outline-none transition placeholder:text-[#1A1A2E]/65 focus:border-[#C4430D] focus:ring-2 focus:ring-[#C4430D] aria-[invalid=true]:border-red-700";

export function ContactForm({ messages }: ContactFormProps) {
  const labels = messages.contactForm;
  const errorMessageId = useId();
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorField, setErrorField] = useState<ContactFormField | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // aria-disabled (rather than disabled) keeps the button focusable while
    // sending, so guard against a second submit here.
    if (status === "sending") {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = createContactPayload(formData);
    const validationError = validateContactPayload(payload, labels);

    if (validationError) {
      setStatus("error");
      setErrorMessage(validationError.message);
      setErrorField(validationError.field);

      // Take the user to the field the message is about; it points back at
      // the message through aria-describedby.
      const control = form.elements.namedItem(validationError.field);

      if (control instanceof HTMLElement) {
        control.focus();
      }

      return;
    }

    setStatus("sending");
    setErrorMessage("");
    setErrorField(null);

    try {
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(
        /\/$/,
        "",
      );
      const endpoint = apiBaseUrl
        ? `${apiBaseUrl}/api/contact`
        : "/api/contact";
      const response = await fetch(endpoint, {
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      if (!response.ok) {
        const data = (await response
          .json()
          .catch(() => null)) as ContactErrorResponse | null;
        throw new Error(getContactErrorMessage(data, labels.error));
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : labels.error);
    }
  }

  // Once the field a message was about is edited, the message no longer
  // applies, so drop it (and aria-invalid with it).
  function handleChange(event: FormEvent<HTMLFormElement>) {
    if (
      errorField &&
      event.target instanceof HTMLElement &&
      event.target.getAttribute("name") === errorField
    ) {
      setStatus("idle");
      setErrorMessage("");
      setErrorField(null);
    }
  }

  const fieldProps = (name: ContactFormField) => ({
    errorMessageId,
    invalid: errorField === name,
  });

  return (
    <form className="min-w-0" onChange={handleChange} onSubmit={handleSubmit}>
      <div className="grid gap-4">
        <input
          autoComplete="off"
          className="hidden"
          name="website"
          tabIndex={-1}
        />
        <p className="text-sm font-semibold text-[#1A1A2E]/70">
          {labels.requiredNote}
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            {...fieldProps("name")}
            autoComplete="name"
            label={labels.name}
            name="name"
            placeholder={labels.placeholderName}
            required
          />
          <Field
            {...fieldProps("email")}
            autoComplete="email"
            label={labels.email}
            name="email"
            placeholder={labels.placeholderEmail}
            required
            type="email"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            {...fieldProps("phone")}
            autoComplete="tel"
            label={labels.phone}
            minLength={8}
            name="phone"
            placeholder={labels.placeholderPhone}
            required
            type="tel"
          />
          <Field
            {...fieldProps("company")}
            autoComplete="organization"
            label={labels.company}
            name="company"
            placeholder={labels.placeholderCompany}
          />
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          <SelectField
            {...fieldProps("needType")}
            label={labels.needType}
            name="needType"
            options={labels.needTypeOptions}
            placeholder={labels.placeholderNeedType}
            required
          />
          <SelectField
            {...fieldProps("budgetRange")}
            label={labels.budgetRange}
            name="budgetRange"
            options={labels.budgetRangeOptions}
            placeholder={labels.placeholderBudgetRange}
            required
          />
          <SelectField
            {...fieldProps("timeline")}
            label={labels.timeline}
            name="timeline"
            options={labels.timelineOptions}
            placeholder={labels.placeholderTimeline}
            required
          />
        </div>
        <label className="grid gap-2">
          <LabelText required>{labels.message}</LabelText>
          <textarea
            {...describeError(fieldProps("message"))}
            className={cn(
              controlClassName,
              "min-h-36 resize-none py-3 leading-relaxed",
            )}
            maxLength={2000}
            minLength={10}
            name="message"
            placeholder={labels.placeholderMessage}
            required
          />
        </label>

        <button
          aria-disabled={status === "sending"}
          className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#D0490F] px-7 py-3 text-base font-bold text-white shadow-lg transition hover:bg-[#B83D0B] aria-disabled:cursor-not-allowed aria-disabled:opacity-70 sm:w-auto"
          type="submit"
        >
          <Send className="h-5 w-5" />
          {status === "sending" ? labels.sending : labels.send}
        </button>
      </div>

      {/* The live regions stay mounted so the messages inserted into them are
          announced reliably; they take no space while empty. */}
      <div aria-atomic="true" role="status">
        {status === "sending" ? (
          <p className="sr-only">{labels.sending}</p>
        ) : null}
        {status === "success" ? (
          <FormAlert
            emailCta={labels.emailCta}
            message={labels.success}
            nextMessage={labels.successNext}
            title={labels.successTitle}
            tone="success"
            whatsappCta={labels.whatsappCta}
          />
        ) : null}
      </div>
      <div aria-atomic="true" role="alert">
        {status === "error" ? (
          <FormAlert
            message={errorMessage || labels.error}
            messageId={errorMessageId}
            title={labels.errorTitle}
            tone="error"
          />
        ) : null}
      </div>
    </form>
  );
}

type ContactPayload = {
  budgetRange: string;
  company: string;
  email: string;
  message: string;
  name: string;
  needType: string;
  pagePath: string;
  phone: string;
  timeline: string;
  utmCampaign: string;
  utmContent: string;
  utmMedium: string;
  utmSource: string;
  utmTerm: string;
  website: string;
};

type ContactErrorResponse = {
  detail?: string | Array<{ msg?: string }>;
  message?: string;
};

function createContactPayload(formData: FormData): ContactPayload {
  const storedUtm = getStoredUtmPayload();

  return {
    budgetRange: getFormValue(formData, "budgetRange"),
    company: getFormValue(formData, "company"),
    email: getFormValue(formData, "email"),
    message: getFormValue(formData, "message"),
    name: getFormValue(formData, "name"),
    needType: getFormValue(formData, "needType"),
    pagePath: getCurrentPagePath(),
    phone: getFormValue(formData, "phone"),
    timeline: getFormValue(formData, "timeline"),
    utmCampaign: storedUtm.utmCampaign ?? "",
    utmContent: storedUtm.utmContent ?? "",
    utmMedium: storedUtm.utmMedium ?? "",
    utmSource: storedUtm.utmSource ?? "",
    utmTerm: storedUtm.utmTerm ?? "",
    website: getFormValue(formData, "website"),
  };
}

type ContactFormField =
  | "budgetRange"
  | "company"
  | "email"
  | "message"
  | "name"
  | "needType"
  | "phone"
  | "timeline"
  | "website";

function getFormValue(formData: FormData, key: ContactFormField) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function getCurrentPagePath() {
  if (typeof window === "undefined") {
    return "";
  }

  return `${window.location.pathname}${window.location.search}`.slice(0, 240);
}

function getStoredUtmPayload(): StoredUtm {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const value = window.localStorage.getItem(UTM_STORAGE_KEY);

    if (!value) {
      return {};
    }

    const parsed: unknown = JSON.parse(value);

    if (!isRecord(parsed)) {
      return {};
    }

    return {
      utmCampaign: getStoredString(parsed, "utmCampaign"),
      utmContent: getStoredString(parsed, "utmContent"),
      utmMedium: getStoredString(parsed, "utmMedium"),
      utmSource: getStoredString(parsed, "utmSource"),
      utmTerm: getStoredString(parsed, "utmTerm"),
    };
  } catch {
    return {};
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function getStoredString(source: Record<string, unknown>, key: string) {
  const value = source[key];
  return typeof value === "string" ? value.slice(0, 120) : "";
}

type ContactValidationError = {
  field: ContactFormField;
  message: string;
};

// Checked in the order the fields appear on screen, so focus lands on the
// first field that needs attention.
function validateContactPayload(
  payload: ContactPayload,
  labels: Messages["contactForm"],
): ContactValidationError | null {
  if (payload.name.length < 2) {
    return { field: "name", message: labels.invalidName };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return { field: "email", message: labels.invalidEmail };
  }

  if (payload.phone.replace(/\D/g, "").length < 8) {
    return { field: "phone", message: labels.invalidPhone };
  }

  if (!payload.needType) {
    return { field: "needType", message: labels.invalidNeedType };
  }

  if (!payload.budgetRange) {
    return { field: "budgetRange", message: labels.invalidBudgetRange };
  }

  if (!payload.timeline) {
    return { field: "timeline", message: labels.invalidTimeline };
  }

  if (payload.message.length < 10) {
    return { field: "message", message: labels.invalidMessage };
  }

  return null;
}

function getContactErrorMessage(
  data: ContactErrorResponse | null,
  fallback: string,
) {
  if (!data) {
    return fallback;
  }

  if (data.message) {
    return data.message;
  }

  if (typeof data.detail === "string") {
    return data.detail;
  }

  const firstDetail = data.detail?.find((item) => item.msg)?.msg;
  return firstDetail || fallback;
}

function FormAlert({
  emailCta,
  message,
  messageId,
  nextMessage,
  title,
  tone,
  whatsappCta,
}: {
  emailCta?: string;
  message: string;
  /** Lets a field point at this message with aria-describedby. */
  messageId?: string;
  nextMessage?: string;
  title: string;
  tone: "error" | "success";
  whatsappCta?: string;
}) {
  const isSuccess = tone === "success";
  const Icon = isSuccess ? CheckCircle2 : AlertTriangle;

  return (
    <div
      className={[
        "mt-4 flex items-start gap-3 rounded-xl border px-4 py-4 shadow-sm",
        isSuccess
          ? "border-emerald-200 bg-emerald-50 text-emerald-900"
          : "border-red-200 bg-red-50 text-red-900",
      ].join(" ")}
    >
      <span
        className={[
          "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
          isSuccess ? "bg-emerald-100" : "bg-red-100",
        ].join(" ")}
      >
        <Icon className="h-4 w-4" />
      </span>
      <span className="grid flex-1 gap-1">
        <span className="text-sm font-bold uppercase tracking-[0.12em]">
          {title}
        </span>
        <span className="text-sm font-semibold leading-relaxed" id={messageId}>
          {message}
        </span>
        {isSuccess && nextMessage ? (
          <>
            <span className="mt-2 text-sm leading-relaxed">{nextMessage}</span>
            <span className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-4 py-2 text-center text-sm font-bold text-white transition hover:bg-emerald-800"
                href={contactLinks.whatsapp}
                rel="noopener noreferrer"
                target="_blank"
              >
                <MessageCircle className="h-4 w-4" />
                {whatsappCta}
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-center text-sm font-bold text-emerald-900 transition hover:bg-emerald-50"
                href={contactLinks.email}
              >
                <Mail className="h-4 w-4" />
                {emailCta}
              </a>
            </span>
          </>
        ) : null}
      </span>
    </div>
  );
}

type FieldErrorProps = {
  errorMessageId: string;
  invalid: boolean;
};

/** Marks a control invalid and ties it to the error message that explains why. */
function describeError({ errorMessageId, invalid }: FieldErrorProps) {
  return invalid
    ? { "aria-describedby": errorMessageId, "aria-invalid": true as const }
    : {};
}

function LabelText({
  children,
  required,
}: {
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <span className="text-sm font-bold uppercase tracking-[0.12em] text-[#1B3A5C]/80">
      {children}
      {required ? (
        // The control itself carries `required`, so the star is visual only.
        <span aria-hidden="true" className="ml-1 text-[#C4430D]">
          *
        </span>
      ) : null}
    </span>
  );
}

function Field({
  autoComplete,
  errorMessageId,
  invalid,
  label,
  minLength,
  name,
  placeholder,
  required,
  type = "text",
}: FieldErrorProps & {
  autoComplete?: string;
  label: string;
  minLength?: number;
  name: string;
  placeholder: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="grid gap-2">
      <LabelText required={required}>{label}</LabelText>
      <input
        {...describeError({ errorMessageId, invalid })}
        autoComplete={autoComplete}
        className={cn(controlClassName, "h-12")}
        maxLength={120}
        minLength={minLength}
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </label>
  );
}

function SelectField({
  errorMessageId,
  invalid,
  label,
  name,
  options,
  placeholder,
  required,
}: FieldErrorProps & {
  label: string;
  name: ContactFormField;
  options: string[];
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2">
      <LabelText required={required}>{label}</LabelText>
      <select
        {...describeError({ errorMessageId, invalid })}
        className={cn(controlClassName, "h-12")}
        name={name}
        required={required}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
