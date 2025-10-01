import { getAssetURL } from "@/lib/directus/client";
import type { NormalizedProperty } from "@/types/components";

export function mapRecord(record: any): NormalizedProperty {
  const priceRaw = (record as any).value ?? (record as any).subprice ?? "";
  const price =
    typeof priceRaw === "number" ? `$${priceRaw.toLocaleString()}` : String(priceRaw ?? "");

  const imageId = (record as any).image as string | null | undefined;

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
    image: imageId ? getAssetURL(imageId, { width: 1200, quality: 75 }) : "/assets/fallback.png",
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
  } satisfies NormalizedProperty;
}
