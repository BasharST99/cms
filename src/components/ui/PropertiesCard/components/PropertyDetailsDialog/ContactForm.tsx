"use client";

import { useEffect, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { PropertyCardData as Property } from "@/types/components";
import { useContactAgentMutation } from "./useContactAgentMutation";

type ContactFormProps = {
  property: Property;
};

export function ContactForm({ property }: ContactFormProps) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [feedback, setFeedback] = useState<null | { type: "success" | "error"; message: string }>(
    null
  );
  const mutation = useContactAgentMutation();
  const submitLabel = property.contact_agent_button ?? "Send Message";

  useEffect(() => {
    if (!feedback) return;
    const timer = setTimeout(() => setFeedback(null), 3200);
    return () => clearTimeout(timer);
  }, [feedback]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(null);

    const trimmedMessage = values.message.trim();
    if (!trimmedMessage) {
      setFeedback({ type: "error", message: "Please enter a message." });
      return;
    }

    mutation.mutate(
      {
        name: values.name.trim() || undefined,
        email: values.email.trim(),
        phone: values.phone.trim() || undefined,
        message: trimmedMessage,
        propertyId: property.id,
      },
      {
        onSuccess: () => {
          setFeedback({ type: "success", message: "Thanks! The agent will reach out shortly." });
          setValues({ name: "", email: "", phone: "", message: "" });
        },
        onError: (error) => {
          setFeedback({
            type: "error",
            message: error.message || "Unable to send your message right now.",
          });
        },
      }
    );
  };

  const handleChange = (field: keyof typeof values) => (value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl bg-white p-8 shadow-2xl"
    >
      <h3 className="mb-6 text-2xl font-semibold text-gray-900">
        {property.contact_buyer}
      </h3>
      <p className="mb-6 text-gray-700">{property.conatct_description}</p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <FormField
          label={property.name}
          type="text"
          placeholder={property.name || "Your Name"}
          value={values.name}
          onChange={handleChange("name")}
          disabled={mutation.isPending}
        />
        <FormField
          label={property.email}
          type="email"
          placeholder={property.email || "Your Email"}
          required
          value={values.email}
          onChange={handleChange("email")}
          disabled={mutation.isPending}
        />
        <FormField
          label={property.phone}
          type="tel"
          placeholder={property.phone || "Your Phone Number"}
          value={values.phone}
          onChange={handleChange("phone")}
          disabled={mutation.isPending}
        />
        <TextareaField
          label={property.message}
          placeholder="Your message..."
          value={values.message}
          onChange={handleChange("message")}
          disabled={mutation.isPending}
        />
        <Button
          type="submit"
          className="w-full bg-[#0B3557] hover:bg-[#0B3557]/90"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Sending..." : submitLabel}
        </Button>
        {feedback && (
          <p
            className={`text-sm ${
              feedback.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {feedback.message}
          </p>
        )}
      </form>
    </motion.div>
  );
}

type FormFieldProps = {
  label?: string | null;
  type: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
};

function FormField({ label, type, placeholder, required, value, onChange, disabled }: FormFieldProps) {
  return (
    <div>
      {label && <p className="mb-1 font-medium">{label}</p>}
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        disabled={disabled}
        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0B3557]"
      />
    </div>
  );
}

type TextareaFieldProps = {
  label?: string | null;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
};

function TextareaField({ label, placeholder, value, onChange, disabled }: TextareaFieldProps) {
  return (
    <div>
      {label && <p className="mb-1 font-medium">{label}</p>}
      <textarea
        placeholder={placeholder}
        rows={4}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        disabled={disabled}
        className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0B3557]"
      />
    </div>
  );
}
