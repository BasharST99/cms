// SERVER COMPONENT (no "use client")
import { dxGet, getAssetURL } from "@/lib/directus/server";
import InvestmentPropertiesView from "./investmentPropertiesClient";

type TypesItem = {
  all_properties?: string;
  commercial?: string;
  residential?: string;
  mixed_use?: string;
};

type CardItem = {
  id: number;
  investment_properties_types?: string; // "Commercial" | "Residential" | "Mixed-Use"
  grade?: string;                        // "Grade A+"
  price?: string;                        // "₹25,000,000"
  roi?: string;                          // "12.5% ROI"
  title?: string;
  location?: string;
  annual_rent?: string;                  // label
  occupancy?: string;                    // label
  total_units?: string;                  // label
  risk_level?: string;                   // label
  tag1?: string; tag2?: string; tag3?: string;
  button1?: string;                      // "View Details"
  button2?: string;                      // "Schedule Tour"
  property_type?: string;
  annual_rent_value?: string;
  occupancy_value?: string;
  total_units_value?: string;
  risk_level_value?: string;             // "Low" | ...
  image?: string | null;                 // directus asset id
};

type Row = {
  id: number;
  title?: string;
  subtitle?: string;
  button?: string;
  investment_properties_types?: { item: TypesItem }[];
  investment_properties_cards?: { item: CardItem }[];
};

type FilterKey = "all" | "commercial" | "residential" | "mixed";

function mapType(t?: string) {
  const v = (t ?? "").toLowerCase();
  if (v.includes("commercial")) return "commercial";
  if (v.includes("residential")) return "residential";
  if (v.includes("mixed")) return "mixed";
  return "commercial";
}

export default async function InvestmentPropertiesSection() {
  const { data } = await dxGet<{ data: Row[] }>(
    "/items/investment_properties/",
    { fields: "*,investment_properties_cards.item.*,investment_properties_types.item.*", limit: "1" },
    900 // ISR: 15 min (tune as needed)
  );

  const row = data?.[0];
  if (!row) return null;

  const types = row.investment_properties_types?.[0]?.item ?? {};
  const filters = {
    all: types.all_properties ?? "All Properties",
    commercial: types.commercial ?? "Commercial",
    residential: types.residential ?? "Residential",
    mixed: types.mixed_use ?? "Mixed-Use",
  };

  const cards =
    (row.investment_properties_cards ?? []).map(({ item }) => ({
      id: item.id,
      imageUrl: item.image ? getAssetURL(item.image, { width: 1600, quality: 80 }) : "/assets/fallback.png",
      title: item.title ?? "",
      location: item.location ?? "",
      price: item.price ?? "",
      type: mapType(item.investment_properties_types) as FilterKey,
      propertyType: item.property_type ?? "",
      roiText: item.roi ?? "",

      annualRentLabel: item.annual_rent ?? "Annual Rent",
      annualRentValue: item.annual_rent_value ?? "",
      occupancyLabel: item.occupancy ?? "Occupancy",
      occupancyValue: item.occupancy_value ?? "",
      totalUnitsLabel: item.total_units ?? "Total Units",
      totalUnitsValue: item.total_units_value ?? "",

      riskLabel: item.risk_level ?? "Risk Level",
      riskValue: item.risk_level_value ?? "Low",

      features: [item.tag1, item.tag2, item.tag3].filter(Boolean) as string[],
      grade: item.grade ?? "Grade A",
      button1: item.button1 ?? "View Details",
      button2: item.button2 ?? "Schedule Tour",
    })) ?? [];

  return (
    <InvestmentPropertiesView
      heading={row.title ?? "Featured Investment Properties"}
      subheading={row.subtitle ?? "Hand-picked investment opportunities with proven track records and strong returns"}
      ctaLabel={row.button ?? "View All Investment Properties"}
      filters={filters}
      cards={cards}
    />
  );
}
