// SERVER COMPONENT (no "use client")
import { dxGet } from "@/lib/directus/server";
import ContactView from "./ContactView";

type ServiceOptions = { buy?: string; sell?: string; invest?: string; valuation?: string };

type ContactRow = {
  id: number;
  title?: string;
  subtitle?: string;
  call_us?: string;
  mobile_number?: string;
  email_us?: string;
  email?: string;
  visit_us?: string;
  location?: string;
  form_title?: string;
  full_name_placeholder?: string;
  email_placeholder?: string;
  phone_placeholder?: string;
  requirements?: string;
  send_button?: string;
  service_needed?: { item: ServiceOptions }[];
};

export default async function ContactSection() {
  const { data } = await dxGet<{ data: ContactRow[] }>(
    "/items/contact",
    { fields: "*,service_needed.item.*", limit: "1" },
    3600 // ISR: revalidate every hour (tune as needed)
  );

  const row = data?.[0];
  if (!row) return null;

  const serviceOptions =
    Object.entries(row.service_needed?.[0]?.item ?? {})
      .flatMap(([key, label]) => (typeof label === "string" ? [{ key, label }] : []));

  return (
    <ContactView
      heading={row.title ?? "Ready to Get Started?"}
      subtitle={row.subtitle ?? "Connect with our experts today and take the first step towards your real estate goals."}
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
