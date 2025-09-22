// SERVER COMPONENT (no "use client")
import { dxGet } from "@/lib/directus/server";
import InvestmentCTAView from "./InvestmentCTAView";

type FlatRow = {
  id: number;
  title?: string;
  subtitle?: string;

  primary_button_label?: string;
  primary_button_icon?: string;    // "calendar" | "phone" | ...
  primary_button_action?: string;  // "/consultation" | "tel:..."

  secondary_button_label?: string;
  secondary_button_icon?: string;
  secondary_button_action?: string;

  // flat features (current schema)
  feature_1_icon?: string;
  feature_1_title?: string;
  feature_1_description?: string;
  feature_2_icon?: string;
  feature_2_title?: string;
  feature_2_description?: string;
  feature_3_icon?: string;
  feature_3_title?: string;
  feature_3_description?: string;
};

// optional normalized features support
type FeatureItem = {
  id: number;
  icon?: string;
  title?: string;
  description?: string;
  sort?: number | null;
};

type ExpandedRow = FlatRow & {
  features?: { item: FeatureItem }[];
};

export default async function InvestmentCTASection() {
  const { data } = await dxGet<{ data: ExpandedRow[] }>(
    "/items/investment_cta",
    {
      // If you later add a features O2M (investment_cta_features), this will include it.
      fields: "*,features.item.*",
      limit: "1",
    },
    1800 // ISR: 30 min
  );

  const row = data?.[0];
  if (!row) return null;

  // normalize features (prefer repeater; fallback to flat)
  const features =
    row.features?.length
      ? row.features
          .map(({ item }) => ({
            icon: item.icon ?? "award",
            title: item.title ?? "",
            description: item.description ?? "",
            sort: item.sort ?? 0,
          }))
          .sort((a, b) => (a.sort ?? 0) - (b.sort ?? 0))
      : [
          {
            icon: row.feature_1_icon ?? "award",
            title: row.feature_1_title ?? "",
            description: row.feature_1_description ?? "",
          },
          {
            icon: row.feature_2_icon ?? "shield",
            title: row.feature_2_title ?? "",
            description: row.feature_2_description ?? "",
          },
          {
            icon: row.feature_3_icon ?? "trending-up",
            title: row.feature_3_title ?? "",
            description: row.feature_3_description ?? "",
          },
        ].filter((f) => f.title || f.description);

  return (
    <InvestmentCTAView
      title={row.title ?? "Ready to Start Your Investment Journey?"}
      subtitle={
        row.subtitle ??
        "Get personalized investment recommendations and connect with our expert team to build your real estate portfolio."
      }
      primaryButton={{
        label: row.primary_button_label ?? "Schedule Consultation",
        icon: (row.primary_button_icon ?? "calendar").toLowerCase(),
        href: row.primary_button_action ?? "/consultation",
      }}
      secondaryButton={{
        label: row.secondary_button_label ?? "Call Now: +966 11 123 4567",
        icon: (row.secondary_button_icon ?? "phone").toLowerCase(),
        href: row.secondary_button_action ?? "tel:+966111234567",
      }}
      features={features.map((f) => ({
        icon: (f.icon ?? "award").toLowerCase(),
        title: f.title ?? "",
        description: f.description ?? "",
      }))}
    />
  );
}
