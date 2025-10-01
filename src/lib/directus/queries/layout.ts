import {
  directusFetch,
  type DirectusListResponse,
} from "../fetcher";
import type { QueryFunction } from "@tanstack/react-query";
import type { FooterRecord } from "@/types/directus";

/**
 * Layout-level content such as the global footer.
 */
export const footerQueryKey = ["footer"] as const;
type FooterQueryFn = QueryFunction<
  DirectusListResponse<FooterRecord>,
  typeof footerQueryKey
>;
export const footerQueryOptions = () => ({
  queryKey: footerQueryKey,
  queryFn: (({ signal }) =>
    directusFetch<DirectusListResponse<FooterRecord>>("/items/footer", {
      params: {
        fields:
          "*,services.item.*,legal_links.item.*,locations.item.*,social_links.item.*,contact.item.*",
        limit: "1",
      },
      revalidate: 3600,
      signal,
    })) as FooterQueryFn,
});
