"use client";

import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { contactQueryOptions } from "@/lib/directus/queries";
import type { ContactRecord } from "@/types/directus";
import ContactView from "./ContactView";
import type { ServiceOption } from "@/types/components";

function buildServiceOptions(record: Record<string, string | undefined>): ServiceOption[] {
  return Object.entries(record).flatMap(([key, value]) =>
    typeof value === "string" && value.trim().length
      ? [{ key, label: value }]
      : []
  );
}

export default function ContactSectionClient() {
  const { data } = useQuery(contactQueryOptions());
  const row: ContactRecord | undefined = data?.data?.[0];

  const serviceOptions = useMemo(() => {
    const record = row?.service_needed?.[0]?.item ?? {};
    return buildServiceOptions(record as Record<string, string | undefined>);
  }, [row]);

  if (!row) return null;

  return (
    <ContactView
      heading={row.title ?? "Ready to Get Started?"}
      subtitle={
        row.subtitle ??
        "Connect with our experts today and take the first step towards your real estate goals."
      }
      callUsLabel={row.call_us ?? "Call Us"}
      phone={row.mobile_number ?? ""}
      emailUsLabel={row.email_us ?? "Email Us"}
      email={row.email ?? ""}
      visitUsLabel={row.visit_us ?? "Visit Us"}
      location={row.location ?? ""}
      formTitle={row.form_title ?? "Send us a message"}
      namePlaceholder={row.full_name_placeholder ?? "Full Name"}
      emailPlaceholder={row.email_placeholder ?? "Email"}
      phonePlaceholder={row.phone_placeholder ?? "Phone"}
      requirementsPlaceholder={row.requirements ?? "Tell us about your requirements..."}
      sendButtonLabel={row.send_button ?? "Send Message"}
      serviceOptions={serviceOptions}
    />
  );
}
