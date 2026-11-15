"use client";
import { useState } from "react";
import { profile } from "@/lib/data";

const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;
const field = "rounded-xl border-[1.5px] border-line bg-surface px-3.5 py-3 text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30 disabled:cursor-not-allowed disabled:opacity-60";

type FieldName = "name" | "email" | "message";
type FieldState = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;

const initialState: FieldState = { name: "", email: "", message: "" };

function validateEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactForm() {
  const [values, setValues] = useState<FieldState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error" | "loading"; text: string }>({ type: "idle", text: "" });

  function updateField(name: FieldName, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    if (status.type !== "idle") setStatus({ type: "idle", text: "" });
  }

  function validate(valuesToCheck: FieldState) {
    const nextErrors: Errors = {};

    if (!valuesToCheck.name.trim()) nextErrors.name = "Please enter your name.";
    if (!valuesToCheck.email.trim()) nextErrors.email = "Please enter your email address.";
    else if (!validateEmail(valuesToCheck.email)) nextErrors.email = "Please enter a valid email address.";
    if (!valuesToCheck.message.trim()) nextErrors.message = "Please add a short message.";
    else if (valuesToCheck.message.trim().length < 12) nextErrors.message = "Your message should be at least 12 characters long.";

    return nextErrors;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus({ type: "error", text: "Please fix the highlighted fields and try again." });
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus({ type: "loading", text: "Sending your message..." });

    try {
      if (!FORM_ID) {
        const body = `${formData.get("message")}\n\n${formData.get("name")} (${formData.get("email")})`;
        window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Portfolio message")}&body=${encodeURIComponent(body)}`;
        setStatus({ type: "success", text: "Your email client is opening with your message ready to send." });
        form.reset();
        setValues(initialState);
        return;
      }

      const response = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error();

      form.reset();
      setValues(initialState);
      setStatus({ type: "success", text: "Message sent successfully. I’ll get back to you soon." });
    } catch {
      setStatus({ type: "error", text: `Something went wrong. Please email me directly at ${profile.email}.` });
    }
  }

  const isLoading = status.type === "loading";

  return (
    <form onSubmit={onSubmit} noValidate className="grid max-w-xl gap-4" aria-describedby="contact-status">
      <label className="grid gap-1.5 font-semibold">
        Name
        <input name="name" value={values.name} autoComplete="name" required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined}
          className={`${field} ${errors.name ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" : ""}`} onChange={(e) => updateField("name", e.target.value)} />
      </label>
      {errors.name && <p id="name-error" className="-mt-2 text-sm text-red-400" role="alert">{errors.name}</p>}

      <label className="grid gap-1.5 font-semibold">
        Email
        <input name="email" type="email" value={values.email} autoComplete="email" required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined}
          className={`${field} ${errors.email ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" : ""}`} onChange={(e) => updateField("email", e.target.value)} />
      </label>
      {errors.email && <p id="email-error" className="-mt-2 text-sm text-red-400" role="alert">{errors.email}</p>}

      <label className="grid gap-1.5 font-semibold">
        Message
        <textarea name="message" value={values.message} rows={5} required aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined}
          className={`${field} ${errors.message ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" : ""}`} onChange={(e) => updateField("message", e.target.value)} />
      </label>
      {errors.message && <p id="message-error" className="-mt-2 text-sm text-red-400" role="alert">{errors.message}</p>}

      <button className="w-fit cursor-pointer rounded-full bg-accent px-6 py-3 font-semibold text-on-accent transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={isLoading}>
        {isLoading ? "Sending..." : "Send message"}
      </button>

      <p id="contact-status" role="status" aria-live="polite" className={`min-h-6 font-medium ${status.type === "error" ? "text-red-400" : status.type === "success" ? "text-emerald-400" : "text-accent"}`}>
        {status.text}
      </p>
    </form>
  );
}
