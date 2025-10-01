import { getAssetURL } from "@/lib/directus/client";
import {
  directusFetch,
  type DirectusItemResponse,
  type DirectusListResponse,
} from "@/lib/directus/fetcher";
import type { PropertyCardData as Property } from "@/types/components";

export const FALLBACK_IMAGE = "/assets/fallback.png";

export const RELATED_CARD_FIELDS = [
  "id",
  "title",
  "value",
  "subprice",
  "bedrooms_value",
  "bathrooms_value",
  "sq_ft_value",
  "properties_list_2",
  "image",
  "areas_id.name",
  "city_id.id",
  "city_id.name",
].join(",");

export const RELATED_DETAIL_FIELDS = [
  "id",
  "title",
  "value",
  "subprice",
  "bedrooms",
  "bathrooms",
  "bedrooms_value",
  "bathrooms_value",
  "sq_ft_value",
  "properties_list_2",
  "image",
  "image_list.*",
  "lat",
  "lon",
  "areas_id.id",
  "areas_id.name",
  "city_id.id",
  "city_id.name",
  "properties_list_features.item.feature",
  "properties_list_special.item.feature",
  "description",
  "what_special",
  "contact_agent_button",
  "request_tour_button",
  "properties_list_features",
  "properties_list_special",
  "contact_buyer",
  "conatct_description",
  "contact_an_agent",
  "phone",
  "email",
  "name",
  "message",
  "financing_info",
  "disclosure_notice",
].join(",");

export type CityMeta = {
  type: "id" | "name";
  value: string;
  label: string;
};

export function resolveCover(property: Property, fallback?: string): string {
  return property.image || fallback || FALLBACK_IMAGE;
}

export function computeImageUrls(property: Property, fallback: string): string[] {
  const source = property.image_list;
  if (!Array.isArray(source)) return [fallback];
  const urls = source
    .map((item) => toImageUrl(item))
    .filter((src): src is string => Boolean(src));
  return urls.length ? urls : [fallback];
}

export function computePricePerSqft(property: Property): string {
  const numericPrice = Number(String(property.price).replace(/[$,]/g, ""));
  const sqft = Number(property.sqft || 0);
  if (!Number.isFinite(numericPrice) || !Number.isFinite(sqft) || sqft <= 0) {
    return "—";
  }
  const value = Math.round(numericPrice / sqft).toLocaleString();
  return `$${value} per sq ft`;
}

export function extractFeatureList(entries: any): string[] {
  if (!Array.isArray(entries)) return [];
  return entries
    .map((entry: any) => entry?.item?.feature ?? entry?.feature)
    .filter((value): value is string => Boolean(value));
}

export function resolveAreaLabel(property: Property): string {
  const area = property.areas_id;
  if (typeof area === "string") return area;
  return area?.name ?? "";
}

export function deriveCityMeta(city: Property["city_id"]): CityMeta | null {
  if (!city) return null;
  if (typeof city === "string") {
    const trimmed = city.trim();
    if (!trimmed) return null;
    return { type: "name", value: trimmed, label: trimmed };
  }

  if (typeof city === "object") {
    const name = (city as { name?: string }).name?.trim();
    const id = (city as { id?: string | number }).id;

    if (id != null) {
      return {
        type: "id",
        value: String(id),
        label: name || String(id),
      };
    }

    if (name) {
      return { type: "name", value: name, label: name };
    }
  }

  return null;
}

export function formatSummaryStats(property: Property): string {
  const parts: string[] = [];
  if (property.beds) parts.push(`${property.beds} bd`);
  if (property.baths) parts.push(`${property.baths} ba`);
  if (property.sqft) parts.push(`${Number(property.sqft).toLocaleString()} sq ft`);
  return parts.join(" · ");
}

export function mapRecordToProperty(record: any): Property {
  const priceRaw = (record as any).value ?? (record as any).subprice ?? "";
  const price =
    typeof priceRaw === "number" ? `$${priceRaw.toLocaleString()}` : String(priceRaw ?? "");

  const imageField = (record as any).image;
  const imageId =
    typeof imageField === "string"
      ? imageField
      : imageField && typeof imageField === "object"
      ? ((imageField as { id?: string }).id ?? null)
      : null;
  const cover = imageId ? getAssetURL(imageId, { width: 1200, quality: 75 }) : FALLBACK_IMAGE;

  const latRaw =
    (record as any).lat ??
    (record as any).latitude ??
    (record as any).lat_value ??
    (record as any).latitude_value;
  const lonRaw =
    (record as any).lon ??
    (record as any).lng ??
    (record as any).longitude ??
    (record as any).lon_value ??
    (record as any).longitude_value;

  const areaRecord = (record as any).areas_id;
  const areaName =
    typeof areaRecord === "string"
      ? areaRecord
      : typeof areaRecord?.name === "string"
      ? areaRecord.name
      : undefined;

  const cityRecord = (record as any).city_id;
  const cityValue =
    typeof cityRecord === "string"
      ? cityRecord
      : cityRecord && typeof cityRecord === "object"
      ? (() => {
          const id = (cityRecord as any).id;
          const name = (cityRecord as any).name ?? "";
          if (id == null && !name) return undefined;
          return {
            id: id ?? name,
            name,
          };
        })()
      : undefined;


  return {
    id: (record as any).id,
    title: (record as any).title ?? "",
    areas_id: areaName ?? areaRecord ?? undefined,
    city_id: cityValue,
    price,
    beds: Number((record as any).bedrooms_value ?? (record as any).bedrooms ?? 0),
    baths: Number((record as any).bathrooms_value ?? (record as any).bathrooms ?? 0),
    sqft: Number((record as any).sq_ft_value ?? 0),
    type: ((record as any).properties_list_2 ?? "").toString().toLowerCase(),
    featured: Boolean((record as any).featured),
    image: cover,
    lat: latRaw != null && latRaw !== "" ? Number(latRaw) : undefined,
    lon: lonRaw != null && lonRaw !== "" ? Number(lonRaw) : undefined,
    image_list: (record as any).image_list,
    contact_agent_button: (record as any).contact_agent_button ?? undefined,
    request_tour_button: (record as any).request_tour_button ?? undefined,
    properties_list_features: (record as any).properties_list_features,
    properties_list_special: (record as any).properties_list_special,
    description: (record as any).description ?? undefined,
    what_special: (record as any).what_special ?? undefined,
    phone: (record as any).phone ?? undefined,
    email: (record as any).email ?? undefined,
    name: (record as any).name ?? undefined,
    financing_info: (record as any).financing_info ?? undefined,
    disclosure_notice: (record as any).disclosure_notice ?? undefined,
    contact_buyer: (record as any).contact_buyer ?? undefined,
    contact_an_agent: (record as any).contact_an_agent ?? undefined,
    conatct_description: (record as any).conatct_description ?? undefined,
    message: (record as any).message ?? undefined,
  } as Property;
}

export async function fetchPropertyDetailsById(id: Property["id"]): Promise<Property> {
  const response = await directusFetch<DirectusItemResponse<any>>(
    `/items/Properties_list/${id}`,
    {
      params: { fields: RELATED_DETAIL_FIELDS },
      revalidate: 120,
    }
  );

  return mapRecordToProperty(response.data);
}

export async function fetchRelatedProperties(
  params: Record<string, string>
): Promise<Property[]> {
  const response = await directusFetch<DirectusListResponse<any>>(
    "/items/Properties_list",
    {
      params,
      revalidate: 120,
    }
  );

  return response.data.map(mapRecordToProperty);
}

function toImageUrl(item: unknown): string | null {
  if (!item) return null;
  if (typeof item === "string") {
    return getAssetURL(item, { width: 1600, quality: 80 });
  }
  if (
    typeof item === "object" &&
    "directus_files_id" in (item as Record<string, unknown>) &&
    (item as { directus_files_id?: string | null }).directus_files_id
  ) {
    return getAssetURL((item as { directus_files_id: string }).directus_files_id, {
      width: 1600,
      quality: 80,
    });
  }
  return null;
}
