// SERVER COMPONENT (no "use client")
import { dxGet, getAssetURL } from "@/lib/directus/server";
import PropertyListingsClient from "./PropertyListingsClient";

type FeaturedAPI = {
  id: number;
  title?: string;
  subtitle?: string;
  blocks?: { item?: any }[];
  properties_list?: { item?: Record<string, any> }[];
  sort_by?: { item?: Record<string, any> }[];
  properties_button?: string;
};

function normalizeProperties(data: FeaturedAPI) {
  const properties =
    (data.blocks ?? []).map((b) => {
      const it = b.item || {};
      const priceRaw = it.value ?? it.subprice ?? "";
      const price =
        typeof priceRaw === "number"
          ? `$${priceRaw.toLocaleString()}`
          : String(priceRaw);

      return {
        id: it.id,
        title: it.title,
        location: it.location,
        price,
        beds: it.bedrooms_value ?? 0,
        baths: it.bathrooms_value ?? 0,
        sqft: it.sq_ft_value ?? 0,
        type: (it.properties_list_2 || "").toString().toLowerCase(),
        featured: Boolean(it.featured),
        amenities: Array.isArray(it.amenities) ? it.amenities : [],
        image: it.image
          ? getAssetURL(it.image, { width: 1200, quality: 75 })
          : "/assets/fallback.png",
      };
    }) ?? [];

  // Build filter types from the first properties_list item (excluding id/status)
  const ignoreKeys = new Set(["id", "status"]);
  const filterTypes: string[] = (() => {
    const item = data?.properties_list?.[0]?.item ?? {};
    const values = Object.entries(item)
      .filter(
        ([key, value]) => !ignoreKeys.has(key) && typeof value === "string"
      )
      .map(([_, value]) => value as string);
    return ["all", ...values];
  })();

  // Build sort options from the first sort_by item
  const sortOptions: { key: string; label: string }[] = (() => {
    const item = data?.sort_by?.[0]?.item ?? {};
    return Object.entries(item)
      .filter(([key]) => key !== "id" && key !== "status")
      .map(([key, label]) => ({ key, label: String(label) }));
  })();

  return { properties, filterTypes, sortOptions };
}

export default async function PropertySection() {
  // Fetch from Directus securely on the server
  const { data } = await dxGet<{ data: FeaturedAPI }>(
    "/items/featured_properties/1",
    { fields: "*,blocks.item.*,properties_list.item.*,sort_by.item.*" },
    120 // revalidate seconds; adjust as needed
  );

  const { properties, filterTypes, sortOptions } = normalizeProperties(data);

  return (
    <PropertyListingsClient
      sectionTitle={data?.title ?? "Featured Properties"}
      subtitle={data?.subtitle ?? ""}
      initialProperties={properties}
      filterTypes={filterTypes}
      sortOptions={sortOptions}
      propertiesButton={data?.properties_button ?? ""}
    />
  );
}
