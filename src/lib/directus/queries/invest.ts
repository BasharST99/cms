import {
  directusFetch,
  type DirectusListResponse,
} from "../fetcher";
import type { QueryFunction } from "@tanstack/react-query";
import type { InvestHeroRecord } from "@/types/directus";

/**
 * Content for the dedicated invest landing experience.
 */
export const investHeroQueryKey = ["invest-hero"] as const;
type InvestHeroQueryFn = QueryFunction<
  DirectusListResponse<InvestHeroRecord>,
  typeof investHeroQueryKey
>;
export const investHeroQueryOptions = () => ({
  queryKey: investHeroQueryKey,
  queryFn: (({ signal }) =>
    directusFetch<DirectusListResponse<InvestHeroRecord>>(
      "/items/invest_hero",
      {
        params: {
          fields:
            "id,title,subtitle,paragraph,button1,button2," +
            "tag1,tag1_value,tag2,tag2_value,tag3,tag3_value,tag4,tag4_value,hero_image",
          limit: "1",
        },
        revalidate: 300,
        signal,
      }
    )) as InvestHeroQueryFn,
});
